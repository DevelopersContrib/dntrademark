import mysql, {
  Pool,
  PoolOptions,
  RowDataPacket,
  ResultSetHeader,
  PoolConnection,
} from "mysql2/promise";

// ---------------------------------------------------------------------------
// Pool configuration
// ---------------------------------------------------------------------------

const PRIMARY_POOL_OPTS: PoolOptions = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: Number(process.env.DB_POOL_SIZE || 10),
  queueLimit: 0,
  timezone: "+00:00",
};

function buildReadPoolOpts(): PoolOptions {
  const readHost = process.env.DB_READ_HOST;
  if (!readHost) return PRIMARY_POOL_OPTS;

  return {
    ...PRIMARY_POOL_OPTS,
    host: readHost,
    port: Number(process.env.DB_READ_PORT || process.env.DB_PORT || 3306),
  };
}

// ---------------------------------------------------------------------------
// Lazy-initialised singleton pools
// ---------------------------------------------------------------------------

let _primaryPool: Pool | null = null;
let _readPool: Pool | null = null;

function getPrimaryPool(): Pool {
  if (!_primaryPool) {
    _primaryPool = mysql.createPool(PRIMARY_POOL_OPTS);
  }
  return _primaryPool;
}

function getReadPool(): Pool {
  if (!_readPool) {
    const opts = buildReadPoolOpts();
    if (opts.host === PRIMARY_POOL_OPTS.host && opts.port === PRIMARY_POOL_OPTS.port) {
      _readPool = getPrimaryPool();
    } else {
      _readPool = mysql.createPool(opts);
    }
  }
  return _readPool;
}

// ---------------------------------------------------------------------------
// Public query helpers
// ---------------------------------------------------------------------------

/**
 * Run a read-only SELECT on the read replica (falls back to primary when
 * DB_READ_HOST is unset).
 */
export async function queryRead<T extends RowDataPacket[] = RowDataPacket[]>(
  sql: string,
  params?: unknown[],
): Promise<T> {
  const [rows] = await getReadPool().query<T>(sql, params);
  return rows;
}

/**
 * Run a write statement (INSERT / UPDATE / DELETE / DDL) on the primary.
 */
export async function queryWrite(
  sql: string,
  params?: unknown[],
): Promise<ResultSetHeader> {
  const [result] = await getPrimaryPool().query<ResultSetHeader>(sql, params);
  return result;
}

/**
 * Run a SELECT on the *primary* — use this for read-after-write paths where
 * replica lag would show stale data.
 */
export async function queryReadPrimary<T extends RowDataPacket[] = RowDataPacket[]>(
  sql: string,
  params?: unknown[],
): Promise<T> {
  const [rows] = await getPrimaryPool().query<T>(sql, params);
  return rows;
}

/**
 * Execute a callback inside a transaction on the primary.  The transaction is
 * committed on success and rolled back on error.
 */
export async function withTransaction<T>(
  fn: (conn: PoolConnection) => Promise<T>,
): Promise<T> {
  const conn = await getPrimaryPool().getConnection();
  await conn.beginTransaction();
  try {
    const result = await fn(conn);
    await conn.commit();
    return result;
  } catch (err) {
    await conn.rollback();
    throw err;
  } finally {
    conn.release();
  }
}

// ---------------------------------------------------------------------------
// Lifecycle — call during graceful shutdown (e.g. in a custom server)
// ---------------------------------------------------------------------------

export async function closePools(): Promise<void> {
  const promises: Promise<void>[] = [];
  if (_readPool && _readPool !== _primaryPool) {
    promises.push(_readPool.end());
  }
  if (_primaryPool) {
    promises.push(_primaryPool.end());
  }
  await Promise.all(promises);
  _primaryPool = null;
  _readPool = null;
}

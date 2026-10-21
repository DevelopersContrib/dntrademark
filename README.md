# DNTRADEMARK FRONT END

## Installation

Here are the steps you need to follow to install the dependencies.

1.Download the code

2.**cd** into the template directory then run this command to install all the dependencies
    
```bash
    npm install
```
    
or
    
```bash
    yarn install
 ```


You can start the project on the local server
    
```bash
    npm run dev
 ```

It’ll start the template on [localhost:3000](http://localhost:3000). 

The documentation includes all the guides you need for the integrations.

## Database (read/write split)

Direct database access is handled by `lib/db.ts` (MySQL via `mysql2`).
The module maintains two connection pools:

| Pool | Env var | Purpose |
|------|---------|---------|
| **Primary** | `DB_HOST` | Writes (`INSERT`/`UPDATE`/`DELETE`/DDL), transactions, read-after-write |
| **Read replica** | `DB_READ_HOST` | Read-only `SELECT` queries |

When `DB_READ_HOST` is **unset or empty**, the read pool transparently falls
back to the primary so existing behaviour is unchanged.

### Required env vars

| Variable | Default | Notes |
|----------|---------|-------|
| `DB_HOST` | — | Primary database host |
| `DB_PORT` | `3306` | Primary port |
| `DB_USER` | — | |
| `DB_PASSWORD` | — | |
| `DB_NAME` | — | Schema / database name |
| `DB_POOL_SIZE` | `10` | Max connections per pool |
| `DB_READ_HOST` | *(falls back to `DB_HOST`)* | Read-replica host |
| `DB_READ_PORT` | *(falls back to `DB_PORT`)* | Read-replica port |

See `.env.example` for a full template.

### Usage

```ts
import { queryRead, queryWrite, queryReadPrimary, withTransaction } from "@/lib/db";

// Pure read — goes to read replica
const rows = await queryRead("SELECT * FROM domains WHERE id = ?", [id]);

// Write — always on primary
await queryWrite("INSERT INTO domains (name) VALUES (?)", [name]);

// Read-after-write (replica lag unsafe) — forced to primary
const fresh = await queryReadPrimary("SELECT * FROM domains WHERE id = ?", [id]);

// Transaction — always on primary
await withTransaction(async (conn) => {
  await conn.execute("UPDATE wallets SET balance = balance - ? WHERE id = ?", [amount, fromId]);
  await conn.execute("UPDATE wallets SET balance = balance + ? WHERE id = ?", [amount, toId]);
});
```



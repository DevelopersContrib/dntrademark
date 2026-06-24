const REGISTRIES = [
  "USPTO",
  "EUIPO",
  "WIPO",
  "UKIPO",
  "IP Australia",
  "CIPO",
  "JPO",
  "DPMA",
];

export default function Databases() {
  return (
    <section className="border-y border-slate-100 bg-sand/50 py-10">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-slate-400">
          Cross-checked against the world&apos;s trademark registries
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {REGISTRIES.map((r) => (
            <span
              key={r}
              className="text-lg font-semibold tracking-tight text-slate-400 transition hover:text-slate-600"
            >
              {r}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

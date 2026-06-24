import { FiPlusCircle, FiSearch, FiBell } from "react-icons/fi";

const STEPS = [
  {
    icon: FiPlusCircle,
    title: "Add your domains",
    body: "Drop in a single domain or import your whole portfolio. No setup, no agents to install.",
  },
  {
    icon: FiSearch,
    title: "We scan the registries",
    body: "Every domain is checked against USPTO, EUIPO, WIPO and 50+ trademark databases for exact and similar marks.",
  },
  {
    icon: FiBell,
    title: "Get instant alerts",
    body: "The moment a conflicting filing appears, you get an email and dashboard alert — with the class, owner, and risk level.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            How it works
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Protection in three steps
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From zero to monitored in under a minute. We do the watching so you
            don&apos;t have to.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="absolute right-6 top-6 text-5xl font-extrabold text-slate-100">
                {i + 1}
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-600 text-white shadow-lg shadow-brand-600/20">
                <step.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-ink">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

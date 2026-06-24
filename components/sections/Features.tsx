import {
  FiGlobe,
  FiRadio,
  FiLayers,
  FiZap,
  FiPieChart,
  FiLock,
} from "react-icons/fi";

const FEATURES = [
  {
    icon: FiGlobe,
    title: "Global coverage",
    body: "50+ national and international registries in one search — exact, phonetic and similar-mark matching.",
  },
  {
    icon: FiRadio,
    title: "Always-on monitoring",
    body: "Continuous watch on every domain. New conflicting filing? You hear about it the same day.",
  },
  {
    icon: FiLayers,
    title: "Portfolio at scale",
    body: "From one domain to ten thousand. Bulk import, tags, and per-domain risk scoring built in.",
  },
  {
    icon: FiZap,
    title: "Instant results",
    body: "Sub-second checks with a clear verdict — clear, review, or conflict — no legalese required.",
  },
  {
    icon: FiPieChart,
    title: "Risk insights",
    body: "See owner, filing class, jurisdiction and similarity so you know exactly how exposed you are.",
  },
  {
    icon: FiLock,
    title: "Private & secure",
    body: "Your portfolio is encrypted and never shared. Searches aren't logged against your brand.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-sand/40 py-20 md:py-28">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Why DNTrademark
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Everything you need to keep your domains safe
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Built for domain investors, founders, and brand teams who can&apos;t
            afford a surprise dispute.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-brand-200 hover:shadow-lg"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{f.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { FiCheck } from "react-icons/fi";

const PLANS = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    blurb: "For checking a domain or two.",
    cta: "Start free",
    href: "/check",
    featured: false,
    features: ["3 domain checks / month", "USPTO + EUIPO + WIPO", "Exact-match results", "Email support"],
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    blurb: "For active investors & brand owners.",
    cta: "Start 14-day trial",
    href: "/signup",
    featured: true,
    features: ["Up to 100 monitored domains", "All 50+ registries", "Similar & phonetic matching", "Instant alerts & risk scoring", "Bulk import + tags"],
  },
  {
    name: "Agency",
    price: "Custom",
    period: "",
    blurb: "For portfolios & teams.",
    cta: "Talk to us",
    href: "/contact",
    featured: false,
    features: ["Unlimited domains", "Team seats & roles", "API access", "Priority support & SLA"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Simple plans that scale with your portfolio
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Start free. Upgrade when you&apos;re ready to monitor. Cancel anytime.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.featured
                  ? "border-brand-600 bg-ink text-white shadow-2xl shadow-brand-600/20 lg:-mt-4 lg:mb-[-1rem]"
                  : "border-slate-200 bg-white"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 px-4 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <h3 className={`text-lg font-bold ${plan.featured ? "text-white" : "text-ink"}`}>
                {plan.name}
              </h3>
              <p className={`mt-1 text-sm ${plan.featured ? "text-slate-300" : "text-slate-500"}`}>
                {plan.blurb}
              </p>
              <div className="mt-5 flex items-end gap-1">
                <span className={`text-4xl font-extrabold ${plan.featured ? "text-white" : "text-ink"}`}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={plan.featured ? "text-slate-300" : "text-slate-500"}>
                    {plan.period}
                  </span>
                )}
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <FiCheck
                      className={`mt-0.5 h-5 w-5 shrink-0 ${
                        plan.featured ? "text-accent-400" : "text-success-500"
                      }`}
                    />
                    <span className={plan.featured ? "text-slate-200" : "text-slate-600"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`mt-8 inline-flex h-12 items-center justify-center rounded-xl px-6 font-semibold transition ${
                  plan.featured
                    ? "bg-gradient-to-r from-brand-500 to-accent-500 text-white hover:opacity-95"
                    : "border border-slate-200 bg-white text-ink hover:border-brand-300 hover:text-brand-600"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

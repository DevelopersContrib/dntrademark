import { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { FiTarget, FiEye, FiShield } from "react-icons/fi";

export const metadata: Metadata = {
  title: "About — DNTrademark",
  description:
    "DNTrademark helps domain owners protect their brands by monitoring domains against the world's trademark registries.",
};

const STATS = [
  { value: "12,480+", label: "Domains protected" },
  { value: "50+", label: "Trademark registries" },
  { value: "<1s", label: "Average scan time" },
  { value: "24/7", label: "Continuous monitoring" },
];

const VALUES = [
  {
    icon: FiTarget,
    title: "Built for owners, not lawyers",
    body: "Trademark data is dense and intimidating. We translate it into a clear verdict — clear, review, or conflict — so anyone can act on it.",
  },
  {
    icon: FiEye,
    title: "Always watching",
    body: "Conflicts don't wait for business hours. Our monitoring runs around the clock so a new filing never catches you off guard.",
  },
  {
    icon: FiShield,
    title: "Protection first",
    body: "A domain dispute can cost you a name you've spent years building. We help you see the risk early — while you can still do something about it.",
  },
];

const AboutPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Our mission"
        title="Keep great domains in the right hands"
        subtitle="DNTrademark was built to give domain owners the same trademark visibility big brands pay law firms for — instantly, and at any scale."
      />

      {/* stats */}
      <section className="bg-white pb-16">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="grid grid-cols-2 gap-6 rounded-3xl border border-slate-200 bg-sand/40 p-8 md:grid-cols-4 md:p-12">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-extrabold text-brand-600 md:text-4xl">{s.value}</p>
                <p className="mt-1 text-sm font-medium text-slate-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* story */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-8 2xl:px-0">
          <h2 className="text-2xl font-bold text-ink">Why we exist</h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-slate-600">
            <p>
              Every day, valuable domains change hands and new brands launch — and
              every one of them carries trademark risk that&apos;s easy to miss.
              A confusingly similar mark filed in the right class can put a domain
              you own squarely in the crosshairs of a UDRP or court action.
            </p>
            <p>
              We started DNTrademark because checking that risk shouldn&apos;t
              require a retainer and a week of waiting. By connecting to the
              world&apos;s trademark registries and watching them continuously, we
              turn a slow, expensive legal chore into an instant, always-on check.
            </p>
          </div>
        </div>
      </section>

      {/* values */}
      <section className="bg-sand/40 py-20 md:py-28">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="grid gap-6 md:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border border-slate-200 bg-white p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

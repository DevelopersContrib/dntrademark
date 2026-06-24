import PageHero from "./PageHero";

type Section = { heading: string; paragraphs: string[] };

export default function LegalDoc({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro?: string;
  sections: Section[];
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} subtitle={`Last updated ${updated}`} />
      <article className="bg-white pb-24">
        <div className="mx-auto max-w-3xl px-4 md:px-8 2xl:px-0">
          {intro && (
            <p className="text-lg leading-relaxed text-slate-600">{intro}</p>
          )}
          <div className="mt-10 space-y-10">
            {sections.map((s, i) => (
              <section key={i}>
                <h2 className="text-xl font-bold text-ink">{s.heading}</h2>
                <div className="mt-3 space-y-4 leading-relaxed text-slate-600">
                  {s.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}

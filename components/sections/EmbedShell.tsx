import PageHero from "./PageHero";

export default function EmbedShell({
  eyebrow,
  title,
  subtitle,
  card = false,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  card?: boolean;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <section className="bg-white pb-24">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div
            className={
              card
                ? "mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 md:p-8"
                : ""
            }
          >
            {children}
          </div>
        </div>
      </section>
    </>
  );
}

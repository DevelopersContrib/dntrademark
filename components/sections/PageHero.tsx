export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-white pt-36 pb-14 md:pt-44 md:pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-100 via-white to-cream/40 opacity-70 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.slate.200)_1px,transparent_0)] opacity-40 [background-size:32px_32px]" />
      </div>
      <div className="mx-auto max-w-c-1390 px-4 text-center md:px-8 2xl:px-0">
        {eyebrow && (
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

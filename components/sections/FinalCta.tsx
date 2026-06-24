import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function FinalCta() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-16 text-center md:px-16 md:py-20">
          {/* glow */}
          <div className="pointer-events-none absolute inset-0 -z-0">
            <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-brand-600/30 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-accent-500/30 blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Know your domains are safe — before someone else decides they
              aren&apos;t.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
              Run your first trademark check in seconds. Free, no card, no
              commitment.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/check"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:opacity-95"
              >
                Check a domain free
                <FiArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-13 items-center justify-center rounded-xl border border-white/20 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Talk to sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

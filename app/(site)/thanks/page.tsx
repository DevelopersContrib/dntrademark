import { Metadata } from "next";
import Link from "next/link";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Thank you — DNTrademark",
  description: "Thanks for signing up to DNTrademark.",
};

const ThankYouPage = () => {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-white px-4 pt-32 pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-72 w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-100 via-white to-cream/40 opacity-70 blur-3xl" />
      </div>
      <div className="mx-auto max-w-xl text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success-500/10 text-success-500">
          <FiCheckCircle className="h-9 w-9" />
        </span>
        <h1 className="mt-7 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          You&apos;re all set!
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-600">
          Thanks for signing up. Check your inbox for a confirmation — we&apos;ll
          be in touch shortly. In the meantime, run your first trademark check.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/check"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-accent-400 px-7 font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:opacity-95"
          >
            Check a domain
            <FiArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 px-7 font-semibold text-ink transition hover:border-brand-300 hover:text-brand-600"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ThankYouPage;

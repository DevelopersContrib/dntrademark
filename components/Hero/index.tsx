"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiSearch,
  FiCheckCircle,
  FiAlertTriangle,
  FiBell,
  FiArrowRight,
  FiShield,
} from "react-icons/fi";

const Hero = () => {
  const [domain, setDomain] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain.trim()) return;
    window.location.href = `/check?domain=${encodeURIComponent(domain.trim())}`;
  };

  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-28">
      {/* background flourish */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-100 via-white to-accent-400/10 opacity-70 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.slate.200)_1px,transparent_0)] opacity-40 [background-size:32px_32px]" />
      </div>

      <div className="mx-auto grid max-w-c-1390 grid-cols-1 items-center gap-12 px-4 md:px-8 lg:grid-cols-2 2xl:px-0">
        {/* copy */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700"
          >
            <FiShield className="h-4 w-4" />
            Domain trademark monitoring
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl xl:text-6xl"
          >
            Spot trademark conflicts{" "}
            <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
              before they cost you your domain.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600"
          >
            DNTrademark continuously scans your domains against global trademark
            registries — USPTO, EUIPO, WIPO and more — and alerts you the instant
            a conflict appears. Protect your brand and dodge costly disputes.
          </motion.p>

          {/* domain check */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
          >
            <div className="relative flex-1">
              <FiSearch className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="yourdomain.com"
                className="h-14 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-base text-ink shadow-sm outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
              />
            </div>
            <button
              type="submit"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 px-7 text-base font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:opacity-95"
            >
              Check a domain free
              <FiArrowRight className="h-5 w-5" />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500"
          >
            {["No credit card required", "Results in seconds", "50+ registries"].map(
              (t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <FiCheckCircle className="h-4 w-4 text-success-500" />
                  {t}
                </span>
              )
            )}
          </motion.div>
        </div>

        {/* scan-result visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-300/40">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <FiSearch className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">VentureOS.com</p>
                  <p className="text-xs text-slate-400">Scanned just now</p>
                </div>
              </div>
              <span className="rounded-full bg-warn-500/10 px-3 py-1 text-xs font-semibold text-warn-500">
                Review
              </span>
            </div>

            <ul className="mt-4 space-y-3">
              {[
                { icon: FiCheckCircle, tone: "text-success-500", label: "USPTO (United States)", note: "No exact match" },
                { icon: FiAlertTriangle, tone: "text-warn-500", label: "EUIPO (European Union)", note: "1 similar mark — class 36" },
                { icon: FiCheckCircle, tone: "text-success-500", label: "WIPO (International)", note: "No exact match" },
              ].map((row) => (
                <li key={row.label} className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3">
                  <row.icon className={`mt-0.5 h-5 w-5 shrink-0 ${row.tone}`} />
                  <div>
                    <p className="text-sm font-medium text-ink">{row.label}</p>
                    <p className="text-xs text-slate-500">{row.note}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex items-center gap-3 rounded-xl border border-brand-100 bg-brand-50/60 px-4 py-3">
              <FiBell className="h-5 w-5 text-brand-600" />
              <p className="text-xs text-slate-600">
                Monitoring on — we&apos;ll alert you if anything changes.
              </p>
            </div>
          </div>

          {/* floating badge */}
          <div className="absolute -bottom-5 -left-5 hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-success-500/10 text-success-500">
              <FiShield className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold leading-none text-ink">12,480</p>
              <p className="text-[11px] text-slate-400">domains protected</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

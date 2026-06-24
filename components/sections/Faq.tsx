"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQS = [
  {
    q: "Does a trademark conflict mean I'll lose my domain?",
    a: "Not automatically — but it's a real risk. A trademark owner can file a UDRP or court action against a domain that's confusingly similar to their mark. DNTrademark flags those conflicts early so you can act before it escalates.",
  },
  {
    q: "Which trademark databases do you check?",
    a: "We search 50+ registries including USPTO (US), EUIPO (EU), WIPO (international), UKIPO, IP Australia, CIPO, JPO and DPMA — covering exact, similar and phonetic matches across filing classes.",
  },
  {
    q: "How fast are the alerts?",
    a: "Monitored domains are re-scanned continuously. When a new conflicting filing appears, you typically get an email and dashboard alert the same day it's published.",
  },
  {
    q: "Can I monitor a whole portfolio?",
    a: "Yes. Bulk-import thousands of domains, tag them, and get per-domain risk scoring. Pro covers up to 100 domains; Agency is unlimited with team seats and API access.",
  },
  {
    q: "Is this legal advice?",
    a: "No — DNTrademark is a monitoring and screening tool, not a law firm. We surface the facts (marks, owners, classes, jurisdictions) so you and your attorney can make an informed call.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-sand/40 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-8 2xl:px-0">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Questions, answered
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-ink">{item.q}</span>
                  <FiChevronDown
                    className={`h-5 w-5 shrink-0 text-brand-600 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 leading-relaxed text-slate-600">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

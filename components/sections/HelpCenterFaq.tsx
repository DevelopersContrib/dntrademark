"use client";

import { useMemo, useState } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { HELP_CENTER_FAQ } from "./faqData";

export default function HelpCenterFaq() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<string | null>(null);

  const categories = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return HELP_CENTER_FAQ;
    return HELP_CENTER_FAQ.map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q),
      ),
    })).filter((cat) => cat.items.length > 0);
  }, [query]);

  return (
    <section id="help-center" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-8 2xl:px-0">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Help Center
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Browse all topics
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Everything from getting started and trademark registration to USPTO
            letters of protest.
          </p>
        </div>

        <div className="relative mt-10">
          <FiSearch className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for answers"
            className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-base text-ink outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20"
          />
        </div>

        {categories.length === 0 ? (
          <p className="mt-12 text-center text-slate-500">
            No results for &ldquo;{query}&rdquo;. Try a different search.
          </p>
        ) : (
          <div className="mt-12 space-y-12">
            {categories.map((cat) => (
              <div key={cat.category}>
                <h3 className="mb-4 text-lg font-bold tracking-tight text-ink">
                  {cat.category}
                </h3>
                <div className="space-y-3">
                  {cat.items.map((item) => {
                    const id = `${cat.category}::${item.q}`;
                    const isOpen = open === id;
                    return (
                      <div
                        key={id}
                        className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                      >
                        <button
                          type="button"
                          onClick={() => setOpen(isOpen ? null : id)}
                          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                        >
                          <span className="text-base font-semibold text-ink">
                            {item.q}
                          </span>
                          <FiChevronDown
                            className={`h-5 w-5 shrink-0 text-brand-600 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <div
                          className={`grid transition-all duration-300 ease-in-out ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="px-6 pb-5 leading-relaxed text-slate-600">
                              {item.a}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { FiMail, FiMessageSquare, FiClock, FiSend } from "react-icons/fi";

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      await fetch("/api/lead/route", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).catch(() => {});
      setSent(true);
      form.reset();
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-white pb-20 pt-4 md:pb-28">
      <div className="mx-auto grid max-w-c-1390 gap-10 px-4 md:px-8 lg:grid-cols-5 2xl:px-0">
        {/* info */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-ink">Talk to us</h2>
          <p className="mt-3 leading-relaxed text-slate-600">
            Questions about monitoring, a conflict you spotted, or pricing for a
            large portfolio? We usually reply within one business day.
          </p>
          <ul className="mt-8 space-y-5">
            {[
              { icon: FiMail, label: "Email", value: "support@dntrademark.com" },
              { icon: FiMessageSquare, label: "Sales", value: "sales@dntrademark.com" },
              { icon: FiClock, label: "Hours", value: "Mon–Fri, 9am–6pm ET" },
            ].map((row) => (
              <li key={row.label} className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <row.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    {row.label}
                  </p>
                  <p className="font-medium text-ink">{row.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* form */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 md:p-8">
            {sent ? (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-success-500/10 text-success-500">
                  <FiSend className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-ink">Message sent</h3>
                <p className="mt-2 text-slate-600">Thanks — we&apos;ll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field name="name" label="Name" placeholder="Jane Doe" />
                  <Field name="email" type="email" label="Email" placeholder="jane@company.com" />
                </div>
                <Field name="subject" label="Subject" placeholder="How can we help?" />
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us a bit more…"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-ink outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-accent-400 px-7 font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:opacity-95 disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Send message"}
                  <FiSend className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink">{label}</label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-ink outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
      />
    </div>
  );
}

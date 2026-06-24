type FormType = "offer" | "partner" | "staffing" | "inquire";

const TITLES: Record<FormType, string> = {
  offer: "Make an offer",
  partner: "Partner with us",
  staffing: "Join the team",
  inquire: "Get in touch",
};

/**
 * DomainDirectory embeddable contact form (iframe).
 * Docs: https://domaindirectory.com/developer
 */
export default function DDForm({
  type,
  domain = "dntrademark.com",
  displayName = "DNTrademark",
  height,
}: {
  type: FormType;
  domain?: string;
  displayName?: string;
  height?: number;
}) {
  // partner & staffing forms are taller
  const h = height ?? (type === "partner" || type === "staffing" ? 900 : 740);
  return (
    <div className="mx-auto max-w-2xl">
      <iframe
        src={`https://www.domaindirectory.com/forms/${type}/${domain}`}
        width="100%"
        height={h}
        loading="lazy"
        style={{ border: "none", borderRadius: 16 }}
        title={`${TITLES[type]} — ${displayName}`}
        className="w-full rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50"
      />
    </div>
  );
}

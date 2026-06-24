import { Metadata } from "next";
import EmbedShell from "@/components/sections/EmbedShell";
import DDForm from "@/components/sections/DDForm";

export const metadata: Metadata = {
  title: "Partner with DNTrademark",
  description: "Become a DNTrademark partner.",
};

const PartnerPage = () => {
  return (
    <EmbedShell
      eyebrow="Partners"
      title="Partner with DNTrademark"
      subtitle="Bring trademark monitoring to your registrar, marketplace, or client portfolio. Let's build something together."
    >
      <DDForm type="partner" />
    </EmbedShell>
  );
};

export default PartnerPage;

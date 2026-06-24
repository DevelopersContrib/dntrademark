import { Metadata } from "next";
import EmbedShell from "@/components/sections/EmbedShell";
import DDForm from "@/components/sections/DDForm";

export const metadata: Metadata = {
  title: "Support — DNTrademark",
  description: "Need help with your account or a trademark scan? Reach the DNTrademark support team.",
};

const SupportPage = () => {
  return (
    <EmbedShell
      eyebrow="Support"
      title="We've got your back"
      subtitle="Stuck on a scan, an alert, or your account? Send us a note and we'll sort it out fast."
    >
      <DDForm type="inquire" />
    </EmbedShell>
  );
};

export default SupportPage;

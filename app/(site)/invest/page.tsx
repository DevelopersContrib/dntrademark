import { Metadata } from "next";
import EmbedShell from "@/components/sections/EmbedShell";
import DDForm from "@/components/sections/DDForm";

export const metadata: Metadata = {
  title: "Invest in DNTrademark",
  description: "Invest early in DNTrademark.",
};

const InvestPage = () => {
  return (
    <EmbedShell
      eyebrow="Investors"
      title="Invest in DNTrademark"
      subtitle="Back the platform protecting domains against trademark risk at internet scale. Register your interest below."
    >
      <DDForm type="inquire" />
    </EmbedShell>
  );
};

export default InvestPage;

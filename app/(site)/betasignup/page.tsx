import { Metadata } from "next";
import EmbedShell from "@/components/sections/EmbedShell";
import DDForm from "@/components/sections/DDForm";

export const metadata: Metadata = {
  title: "Join the Beta — DNTrademark",
  description: "Get early access to DNTrademark domain trademark monitoring.",
};

const BetaSignupPage = () => {
  return (
    <EmbedShell
      eyebrow="Early access"
      title="Join the beta"
      subtitle="Be first to monitor your domains against the world's trademark registries. Drop your details and we'll get you set up."
    >
      <DDForm type="inquire" />
    </EmbedShell>
  );
};

export default BetaSignupPage;

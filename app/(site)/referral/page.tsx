import { Metadata } from "next";
import EmbedShell from "@/components/sections/EmbedShell";
import VNOC_referral from "@/components/Forms/referral";

export const metadata: Metadata = {
  title: "Refer & Earn — DNTrademark",
  description: "Share DNTrademark and earn free access.",
};

const ReferralPage = () => {
  return (
    <EmbedShell
      eyebrow="Referral program"
      title="Share DNTrademark, earn free access"
      subtitle="Send DNTrademark to other domain owners. When they join, you both win."
    >
      <VNOC_referral />
    </EmbedShell>
  );
};

export default ReferralPage;

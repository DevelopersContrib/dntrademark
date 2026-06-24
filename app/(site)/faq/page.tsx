import { Metadata } from "next";
import HelpCenterFaq from "@/components/sections/HelpCenterFaq";

export const metadata: Metadata = {
  title: "FAQ — DNTrademark",
  description:
    "Answers about domain trademark monitoring, registries, alerts, registration, payments, accounts and USPTO letters of protest.",
};

const FaqPage = () => {
  return (
    <div className="pt-16">
      <HelpCenterFaq />
    </div>
  );
};

export default FaqPage;

import { Metadata } from "next";
import EmbedShell from "@/components/sections/EmbedShell";
import DDForm from "@/components/sections/DDForm";

export const metadata: Metadata = {
  title: "Contact — DNTrademark",
  description: "Get in touch with the DNTrademark team about monitoring, conflicts, or pricing.",
};

const ContactPage = () => {
  return (
    <EmbedShell
      eyebrow="Contact"
      title="Get in touch"
      subtitle="Whether it's a conflict you spotted or a portfolio you want to protect, we're here to help."
    >
      <DDForm type="inquire" />
    </EmbedShell>
  );
};

export default ContactPage;

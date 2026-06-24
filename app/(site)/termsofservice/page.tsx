import { Metadata } from "next";
import LegalDoc from "@/components/sections/LegalDoc";

export const metadata: Metadata = {
  title: "Terms of Service — DNTrademark",
  description: "The terms that govern your use of DNTrademark.",
};

const TermsPage = () => {
  return (
    <LegalDoc
      title="Terms of Service"
      updated="June 2026"
      intro="These Terms govern your access to and use of dntrademark.com. By using the service you agree to them. Please read them carefully."
      sections={[
        {
          heading: "Using the service",
          paragraphs: [
            "DNTrademark provides domain trademark screening and monitoring. You may use it only for lawful purposes and in line with these Terms.",
            "You are responsible for the accuracy of the domains and information you submit and for keeping your account credentials secure.",
          ],
        },
        {
          heading: "Not legal advice",
          paragraphs: [
            "DNTrademark is a monitoring and screening tool, not a law firm, and does not provide legal advice. Results surface publicly available trademark data to inform your decisions — they are not a guarantee of clearance or infringement.",
            "For decisions about a specific conflict, consult a qualified trademark attorney.",
          ],
        },
        {
          heading: "Subscriptions & billing",
          paragraphs: [
            "Paid plans renew automatically until cancelled. You can cancel at any time, and cancellation takes effect at the end of the current billing period.",
            "Fees are non-refundable except where required by law.",
          ],
        },
        {
          heading: "Acceptable use",
          paragraphs: [
            "You agree not to misuse the service, including attempting to disrupt it, access it through unauthorized means, or resell access without permission.",
          ],
        },
        {
          heading: "Disclaimers & liability",
          paragraphs: [
            "The service is provided “as is” without warranties of any kind. To the fullest extent permitted by law, DNTrademark is not liable for indirect or consequential damages arising from your use of the service.",
          ],
        },
        {
          heading: "Changes & contact",
          paragraphs: [
            "We may update these Terms from time to time; continued use after changes means you accept them. Questions? Email support@dntrademark.com.",
          ],
        },
      ]}
    />
  );
};

export default TermsPage;

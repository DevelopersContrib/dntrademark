import { Metadata } from "next";
import LegalDoc from "@/components/sections/LegalDoc";

export const metadata: Metadata = {
  title: "Privacy Policy — DNTrademark",
  description: "How DNTrademark collects, uses, and protects your information.",
};

const PrivacyPolicyPage = () => {
  return (
    <LegalDoc
      title="Privacy Policy"
      updated="June 2026"
      intro="DNTrademark (“we”, “us”) respects your privacy. This policy explains what we collect, why, and the choices you have. By using dntrademark.com you agree to the practices described here."
      sections={[
        {
          heading: "Information we collect",
          paragraphs: [
            "Account information you provide, such as your name, email address, and the domains you choose to monitor.",
            "Usage data such as searches you run, alerts generated, and basic device and log information used to operate and secure the service.",
          ],
        },
        {
          heading: "How we use your information",
          paragraphs: [
            "To run trademark scans, deliver monitoring alerts, provide support, and improve the accuracy and performance of the service.",
            "To send service-related communications. We do not sell your personal information, and we do not log your searches against your brand for advertising.",
          ],
        },
        {
          heading: "How we share information",
          paragraphs: [
            "We share data only with trusted processors who help us operate the service (for example, hosting and email providers), under agreements that require them to protect it.",
            "We may disclose information if required by law or to protect the rights, safety, and security of our users and the service.",
          ],
        },
        {
          heading: "Data security & retention",
          paragraphs: [
            "Your information is encrypted in transit and at rest and is retained only as long as needed to provide the service or meet legal obligations.",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            "You can access, update, or delete your account information at any time, and you may opt out of non-essential communications. To make a request, contact support@dntrademark.com.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "Questions about this policy? Email us at support@dntrademark.com.",
          ],
        },
      ]}
    />
  );
};

export default PrivacyPolicyPage;

import { Metadata } from "next";
import Hero from "@/components/Hero";
import Databases from "@/components/sections/Databases";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "DNTrademark — Domain Trademark Monitoring & Conflict Alerts",
  description:
    "DNTrademark scans your domains against USPTO, EUIPO, WIPO and 50+ trademark registries and alerts you the instant a conflict appears. Protect your brand and avoid costly disputes.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Databases />
      <HowItWorks />
      <Features />
      <Pricing />
      <Testimonial />
      <Faq />
      <FinalCta />
    </main>
  );
}

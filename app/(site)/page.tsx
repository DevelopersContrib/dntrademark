import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";

import CTA from "@/components/CTA";

import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "DNTrademark Global Trademark Notification Platform",
  description: "dntrademark.com is a SaaS platform designed to provide an efficient and user-friendly way to check domain names against global trademark databases.",
  // other metadata
};


export default function Home() {
  
  return (
    <main>
      <Hero />      
      <Feature />
      <About />
      <Brands />
     
      <CTA />
      <Testimonial />
      
    </main>
  );
}

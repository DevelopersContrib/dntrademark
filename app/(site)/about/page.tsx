import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import About from "@/components/About";
import FunFact from "@/components/FunFact";

export const metadata: Metadata = {
  title: "About DN Trademark",
  description: "DNTrademark.com is dedicated to empowering domain owners like you with advanced tools and insights.",
  // other metadata
};

const AboutPage = () => {
  return (
    <div className="pt-40 pb-20">
      <About />
      <FunFact />
    </div>
  );
};

export default AboutPage;

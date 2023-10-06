import React from "react";
import { Metadata } from "next";
import FAQ from "@/components/FAQ";


export const metadata: Metadata = {
  title: "Invest in DN Trademark",
  description: "Invest early in DN Trademark",
  // other metadata
};

const FaqPage = () => {
  return (
    <div className="pt-40 pb-20">
      <FAQ />
    </div> 
  );
};

export default FaqPage;

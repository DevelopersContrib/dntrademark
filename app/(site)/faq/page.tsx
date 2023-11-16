import React from "react";
import { Metadata } from "next";
import FAQ from "@/components/FAQ";


export const metadata: Metadata = {
  title: "FAQ DN Trademark",
  description: "Questions? Lets break it down one by one. ",
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

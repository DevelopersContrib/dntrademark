import React from "react";
import { Metadata } from "next";
import InvestForm from "@/components/Invest";


export const metadata: Metadata = {
  title: "Invest in DN Trademark",
  description: "Invest early in DN Trademark",
  // other metadata
};

const InvestPage = () => {
  return (
      <InvestForm />
   
  );
};

export default InvestPage;

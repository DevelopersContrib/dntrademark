import React from "react";
import { Metadata } from "next";
import VNOC_partnerform from "@/components/Forms/partner";

export const metadata: Metadata = {
  title: "Partner with DN Trademark",
  description: "Partner with DN Trademark today",
  // other metadata
};

const PartnerPage = () => {
  return (
    <div className="pt-40 pb-20">
      <VNOC_partnerform />
    </div>
  );
};

export default PartnerPage;

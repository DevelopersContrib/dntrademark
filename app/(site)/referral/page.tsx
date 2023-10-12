import React from "react";
import { Metadata } from "next";

import VNOC_referral from "@/components/Forms/referral";

export const metadata: Metadata = {
  title: "Share DNTrademark",
  description: "Share and Earn a Free Access on DNTrademark today",
  // other metadata
};

const ReferralPage = () => {
  return (
    <div className="pt-40 pb-20 relative">
      <VNOC_referral />
    </div>
  );
};

export default ReferralPage;

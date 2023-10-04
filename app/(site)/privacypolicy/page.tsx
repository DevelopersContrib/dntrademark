import React from "react";
import { Metadata } from "next";
import PrivacyPolicyText from "@/components/Legal/privacypolicy";


export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "DN Trademark Privacy Policy",
  // other metadata
};

const PrivacyPolicyPage = () => {
  return (
   <PrivacyPolicyText />
  );
};

export default PrivacyPolicyPage;
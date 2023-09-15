import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page - DN Trademark",
  description: "Contact options for DN Trademark",
  // other metadata
};

const ContactPage = () => {
  return (
    <div className="pt-40 pb-20">
      <Contact />
    </div>
  );
};

export default ContactPage;

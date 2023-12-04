import React from "react";
import { Metadata } from "next";
import VNOC_roadmap from '../../../components/Forms/roadmap';



export const metadata: Metadata = {
  title: "DNTrademark Roadmap",
  description: "Check out DNTrademarks Dynamic Roadmap Powered by VNOC",
  // other metadata
};

const RoadmapPage = () => {
  return (
    <div className="pt-10 pb-20 relative">
       <VNOC_roadmap />
    </div>
  );
};

export default RoadmapPage;

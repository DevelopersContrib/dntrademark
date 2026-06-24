import { Metadata } from "next";
import EmbedShell from "@/components/sections/EmbedShell";
import VNOC_roadmap from "@/components/Forms/roadmap";

export const metadata: Metadata = {
  title: "Roadmap — DNTrademark",
  description: "See what's shipping next on the DNTrademark roadmap.",
};

const RoadmapPage = () => {
  return (
    <EmbedShell
      eyebrow="What's next"
      title="Product roadmap"
      subtitle="See what we're building, vote on what matters to you, and help shape where DNTrademark goes next."
    >
      <VNOC_roadmap />
    </EmbedShell>
  );
};

export default RoadmapPage;

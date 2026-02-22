import { BlogHighlights } from "@/components/marketing/BlogHighlights";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { HeroSection } from "@/components/marketing/HeroSection";
import { MentorshipTeaser } from "@/components/marketing/MentorshipTeaser";
import { PortfolioHighlights } from "@/components/marketing/PortfolioHighlights";
import { ServicesOverview } from "@/components/marketing/ServicesOverview";
import { TrustStrip } from "@/components/marketing/TrustStrip";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <ServicesOverview />
      <MentorshipTeaser />
      <PortfolioHighlights />
      <BlogHighlights />
      <FinalCTA />
    </>
  );
}

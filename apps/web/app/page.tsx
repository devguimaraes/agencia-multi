import { FinalCTA } from "@/components/marketing/FinalCTA";
import { GoogleReviewsSection } from "@/components/marketing/GoogleReviewsSection";
import { HeroSection } from "@/components/marketing/HeroSection";
import { MentorshipTeaser } from "@/components/marketing/MentorshipTeaser";
import { PortfolioHighlights } from "@/components/marketing/PortfolioHighlights";
import { ServicesOverview } from "@/components/marketing/ServicesOverview";
import { SomosDoRio } from "@/components/marketing/SomosDoRio";
import { TrustStrip } from "@/components/marketing/TrustStrip";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <ServicesOverview />
      <MentorshipTeaser />
      <PortfolioHighlights />
      <SomosDoRio />
      <GoogleReviewsSection />
      <FinalCTA />
    </>
  );
}

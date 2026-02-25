import { BlogHighlights } from "@/components/marketing/BlogHighlights";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { GoogleReviewsSection } from "@/components/marketing/GoogleReviewsSection";
import { HeroSection } from "@/components/marketing/HeroSection";
import { MentorshipTeaser } from "@/components/marketing/MentorshipTeaser";
import { PortfolioHighlights } from "@/components/marketing/PortfolioHighlights";
import { ServicesOverview } from "@/components/marketing/ServicesOverview";
import { SomosDoRio } from "@/components/marketing/SomosDoRio";
import { TrustStrip } from "@/components/marketing/TrustStrip";
import { getAllPosts } from "@/lib/blog";

export default async function Home() {
  const allPosts = await getAllPosts();

  // Sort posts by date (descending) and take the top 3
  const recentPosts = allPosts
    .sort((a, b) => {
      const dateA = new Date(a.date.split("/").reverse().join("-")).getTime();
      const dateB = new Date(b.date.split("/").reverse().join("-")).getTime();
      return dateB - dateA;
    })
    .slice(0, 3);

  return (
    <>
      <HeroSection />
      <TrustStrip />
      <ServicesOverview />
      <MentorshipTeaser />
      <PortfolioHighlights />
      <SomosDoRio />
      <GoogleReviewsSection />
      <BlogHighlights posts={recentPosts} />
      <FinalCTA />
    </>
  );
}

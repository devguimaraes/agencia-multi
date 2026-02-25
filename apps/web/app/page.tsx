"use client";

import { BlogHighlights } from "@/components/marketing/BlogHighlights";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { GoogleReviewsSection } from "@/components/marketing/GoogleReviewsSection";
import { HeroSection } from "@/components/marketing/HeroSection";
import { MentorshipTeaser } from "@/components/marketing/MentorshipTeaser";
import { PortfolioHighlights } from "@/components/marketing/PortfolioHighlights";
import { ResultadoRapido } from "@/components/marketing/ResultadoRapido";
import { ServicesOverview } from "@/components/marketing/ServicesOverview";
import { SomosDoRio } from "@/components/marketing/SomosDoRio";
import { TrustStrip } from "@/components/marketing/TrustStrip";

export default function Home() {
	return (
		<>
			<HeroSection />
			<TrustStrip />
			<ResultadoRapido />
			<ServicesOverview />
			<MentorshipTeaser />
			<PortfolioHighlights />
			<SomosDoRio />
			<GoogleReviewsSection />
			<BlogHighlights />
			<FinalCTA />
		</>
	);
}

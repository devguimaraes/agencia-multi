"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import Script from "next/script";

export function GoogleReviewsSection({ className }: { className?: string }) {
	const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

	return (
		<section ref={ref} className={cn("py-24 bg-white", className)}>
			<div className="container mx-auto px-4 sm:px-6">
				<div
					className={cn(
						"flex flex-col items-center justify-center text-center mb-16 gap-4 opacity-0",
						isIntersecting && "animate-slide-up stagger-1",
					)}
				>
					<h2 className="text-4xl md:text-5xl font-display text-multi-roxo uppercase tracking-tight">
						O Que Dizem Sobre Nós
					</h2>
					<p className="text-lg text-gray-600 font-poppins max-w-2xl mx-auto">
						Confira as experiências de quem já transformou sua marca e multiplicou resultados
						conosco.
					</p>
				</div>

				<div
					className={cn(
						"w-full max-w-6xl mx-auto opacity-0 min-h-[400px]",
						isIntersecting && "animate-slide-up stagger-2",
					)}
				>
					{/* Elfsight Google Reviews Widget */}
					<div
						className="elfsight-app-5383333a-6d1e-45a9-ad97-1f9a9a0f1219"
						data-elfsight-app-lazy
					/>
					<Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
				</div>
			</div>
		</section>
	);
}

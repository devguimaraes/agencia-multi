"use client";

import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import Image from "next/image";

const HIGHLIGHTS = [
	{
		title: "Multi Estratégia",
		cat: "Growth & Digital",
		image: "/assets/multi/feed-1.png",
	},
	{
		title: "Conteúdo Diário",
		cat: "Gestão de Redes",
		image: "/assets/multi/feed-2.png",
	},
	{
		title: "Branding Multi",
		cat: "Identidade Visual",
		image: "/assets/multi/feed-3.png",
	},
];

export function PortfolioHighlights({ className }: { className?: string }) {
	const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

	return (
		<section ref={ref} className={cn("py-24 bg-gray-50", className)}>
			<div className="container mx-auto px-4 sm:px-6">
				<div
					className={cn(
						"flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 opacity-0",
						isIntersecting && "animate-slide-up stagger-1",
					)}
				>
					<div className="max-w-xl">
						<h2 className="text-4xl md:text-5xl font-display text-multi-roxo mb-4 uppercase tracking-tight">
							Nosso Portfolio
						</h2>
						<p className="text-lg text-gray-600 font-poppins">
							Projetos reais que geraram resultados reais.
						</p>
					</div>
					<Button
						variant="secondary"
						className="hidden md:flex font-poppins text-lg border-2 border-multi-roxo text-multi-roxo hover:bg-multi-roxo hover:text-white px-8 h-14"
					>
						Ver todos
					</Button>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{HIGHLIGHTS.map((item, idx) => (
						<div
							key={item.title}
							className={cn(
								"group relative aspect-square overflow-hidden rounded-xl border-4 cursor-pointer transition-transform duration-500 hover:scale-[1.02] border-multi-roxo opacity-0 bg-multi-roxo",
								isIntersecting && "animate-slide-up",
								isIntersecting && `stagger-${idx + 2}`,
							)}
						>
							<Image
								src={item.image}
								alt={item.title}
								fill
								className="object-cover transition-transform duration-700 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
							<div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
								<span className="inline-block px-3 py-1 bg-white text-multi-roxo text-sm font-poppins font-bold rounded-full mb-3 shadow-md">
									{item.cat}
								</span>
								<h3 className="text-3xl font-display text-white leading-tight uppercase tracking-tight">
									{item.title}
								</h3>
							</div>
						</div>
					))}
				</div>

				<Button
					variant="secondary"
					className={cn(
						"w-full mt-10 md:hidden font-poppins text-lg border-2 border-multi-roxo text-multi-roxo hover:bg-multi-roxo hover:text-white h-14 opacity-0",
						isIntersecting && "animate-slide-up stagger-5",
					)}
				>
					Ver todos os projetos
				</Button>
			</div>
		</section>
	);
}

"use client";

import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import { Lightbulb, MessageCircle, Rocket } from "lucide-react";

export function FinalCTA({ className }: { className?: string }) {
	const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

	const cards = [
		{
			icon: <Rocket className="w-8 h-8 text-multi-rosa" />,
			title: "Precisa de marketing digital?",
			desc: "Conheça nossas soluções completas para a sua empresa.",
			cta: "Ver serviços",
			variant: "secondary" as const,
			color: "border-multi-rosa text-multi-rosa hover:bg-multi-rosa",
		},
		{
			icon: <Lightbulb className="w-8 h-8 text-multi-amarelo" />,
			title: "Quer estruturar sua agência?",
			desc: "Mentoria prática e validada para social medias.",
			cta: "Conhecer mentoria",
			variant: "primary" as const,
			color: "bg-multi-amarelo text-multi-roxo hover:bg-white border-2 border-transparent",
		},
		{
			icon: <MessageCircle className="w-8 h-8 text-multi-roxo" />,
			title: "Vamos conversar?",
			desc: "Tire suas dúvidas conosco sem compromisso hoje mesmo.",
			cta: "Chamar no WhatsApp",
			variant: "secondary" as const,
			color: "border-multi-roxo text-multi-roxo hover:bg-multi-roxo",
		},
	];

	return (
		<section
			ref={ref}
			className={cn("py-24 bg-linear-to-br from-multi-roxo to-multi-rosa", className)}
		>
			<div className="container mx-auto px-4 sm:px-6">
				<div
					className={cn(
						"text-center mb-16 opacity-0",
						isIntersecting && "animate-slide-up stagger-1",
					)}
				>
					<h2 className="text-4xl md:text-5xl font-display text-white mb-6 uppercase tracking-tight leading-tight">
						Não importa a sua fase, a Multi pode te ajudar.
					</h2>
					<p className="text-xl text-white/90 font-poppins max-w-2xl mx-auto">
						Seja parceiro de resultados claros com estratégia sem enrolação.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
					{cards.map((card, idx) => (
						<div
							key={card.title}
							className={cn(
								"bg-white rounded-2xl p-8 flex flex-col justify-between text-center border-4 border-multi-amarelo shadow-[6px_6px_0_#000] hover:-translate-y-2 transition-transform duration-300 opacity-0",
								isIntersecting && "animate-slide-up",
								isIntersecting && `stagger-${idx + 2}`,
							)}
						>
							<div className="flex flex-col items-center">
								<div className="bg-gray-100 p-4 rounded-full mb-6">{card.icon}</div>
								<h3 className="font-display text-2xl text-multi-roxo mb-4 uppercase tracking-tight">
									{card.title}
								</h3>
								<p className="text-gray-600 font-poppins text-lg min-h-[60px]">{card.desc}</p>
							</div>

							<Button
								variant={card.variant}
								size="lg"
								className={cn(
									"w-full mt-8 font-poppins font-bold h-14 hover:text-white transition-colors",
									card.color,
									card.variant === "primary"
										? "hover:text-multi-roxo hover:border-multi-amarelo"
										: "",
								)}
							>
								{card.cta}
							</Button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

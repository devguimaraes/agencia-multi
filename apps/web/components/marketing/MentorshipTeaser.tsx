"use client";

import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

export function MentorshipTeaser({ className }: { className?: string }) {
	const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

	const problems = [
		"Trabalha muito mas lucra pouco",
		"Não sabe como precificar pelos serviços",
		"Aceita qualquer cliente na pressão",
		"Está no 'escuro' sentindo que falta processos",
	];
	const solutions = [
		"Estruturar processos escaláveis",
		"Precificar com base no seu valor",
		"Filtrar seus clientes ideais",
		"Crescer com maturidade",
	];

	return (
		<section ref={ref} className={cn("py-24 bg-multi-roxo text-white", className)}>
			<div className="container mx-auto px-4 sm:px-6">
				<div className="max-w-6xl mx-auto">
					<div
						className={cn(
							"mb-16 text-center opacity-0",
							isIntersecting && "animate-slide-up stagger-1",
						)}
					>
						<span className="inline-block px-4 py-2 bg-multi-rosa text-white font-display text-xl tracking-wider uppercase transform -rotate-2 shadow-[4px_4px_0_#FFF]">
							Mentoria Multi
						</span>
					</div>

					<div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
						{/* Problemas */}
						<div
							className={cn(
								"space-y-8 bg-black/20 p-8 rounded-2xl border-2 border-white/10 opacity-0",
								isIntersecting && "animate-slide-up stagger-2",
							)}
						>
							<h2 className="text-3xl lg:text-4xl font-display text-multi-amarelo uppercase tracking-tight leading-tight">
								Você está passando por isso?
							</h2>
							<ul className="space-y-6">
								{problems.map((prob) => (
									<li key={prob} className="flex gap-4 items-start font-poppins text-lg">
										<span className="text-multi-rosa bg-white rounded-full p-1 mt-1 shrink-0">
											<X className="w-5 h-5 stroke-3" />
										</span>
										<span className="opacity-90 leading-snug">{prob}</span>
									</li>
								))}
							</ul>
						</div>

						{/* Soluções */}
						<div
							className={cn(
								"space-y-8 p-8 border-4 border-multi-amarelo backdrop-blur-sm rounded-2xl relative shadow-[8px_8px_0_#FAC32A] opacity-0",
								isIntersecting && "animate-slide-up stagger-3",
							)}
						>
							<h2 className="text-3xl lg:text-4xl font-display text-white uppercase tracking-tight leading-tight">
								Nós te ajudaremos a:
							</h2>
							<ul className="space-y-6">
								{solutions.map((sol) => (
									<li
										key={sol}
										className="flex gap-4 items-center font-poppins text-lg font-medium"
									>
										<span className="text-multi-roxo bg-multi-amarelo rounded-full p-1 shrink-0">
											<Check className="w-5 h-5 stroke-3" />
										</span>
										<span>{sol}</span>
									</li>
								))}
							</ul>
							<div className="pt-8">
								<Button
									size="lg"
									className="w-full text-lg h-14 bg-multi-amarelo text-multi-roxo hover:bg-white border-none font-bold shadow-lg"
								>
									Quero estruturar a minha agência
								</Button>
								<p className="text-center mt-4 text-sm font-poppins opacity-70">
									Baseado em +5 anos de mercado real.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

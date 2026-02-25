"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import { Eye, MonitorSmartphone, MousePointerClick, Palette, PenTool, Share2 } from "lucide-react";

const SERVICES = [
	{
		title: "Tráfego Pago",
		description: "Anúncios otimizados em Google Ads e Meta Ads para máxima visibilidade.",
		icon: MousePointerClick,
	},
	{
		title: "Criação de Conteúdo",
		description: "Mídias sociais e artigos que engajam e criam autoridade.",
		icon: PenTool,
	},
	{
		title: "Gestão de Redes",
		description: "Planejamento e estratégia 360° para seus perfis sociais.",
		icon: Share2,
	},
	{
		title: "Design Gráfico",
		description: "Peças publicitárias, portfólios e banners impactantes.",
		icon: Palette,
	},
	{
		title: "Criação de Sites",
		description: "Destaque digital com sites performáticos e modernos.",
		icon: MonitorSmartphone,
	},
	{
		title: "Identidade Visual",
		description: "Da marca ao manual: um posicionamento inesquecível.",
		icon: Eye,
	},
];

export function ServicesOverview({ className }: { className?: string }) {
	const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

	return (
		<section ref={ref} className={cn("bg-multi-black text-white py-24 md:py-32 w-full", className)}>
			<div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
				{/* HEADER DA SEÇÃO */}
				<div
					className="mb-16 md:mb-24 flex flex-col items-start"
					data-intersecting={isIntersecting}
				>
					<span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-white/40 mb-2">
						Nossos
					</span>
					<div className="relative">
						<h2 className="font-display text-[clamp(52px,7vw,96px)] text-multi-amarelo leading-none m-0">
							Serviços
						</h2>
						{/* Linha horizontal amarela animada */}
						<div
							className={`absolute -bottom-2 md:-bottom-4 left-0 h-[2px] bg-multi-amarelo w-[80%] origin-left transition-transform duration-800 ease-out ${
								isIntersecting ? "scale-x-100 delay-300" : "scale-x-0"
							}`}
						/>
					</div>
				</div>

				{/* LAYOUT DOS SERVIÇOS - Lista Editorial */}
				<div
					className={`flex flex-col border-t border-white/10 transition-all duration-700 stagger-children ${
						isIntersecting ? "is-visible" : ""
					}`}
				>
					{SERVICES.map((service, idx) => {
						const numberString = (idx + 1).toString().padStart(2, "0");
						const IconComponent = service.icon;

						return (
							<a
								href="#contato"
								key={service.title}
								className="group relative flex flex-col md:flex-row md:items-center justify-between py-8 md:py-12 border-b border-white/5 hover:bg-multi-amarelo/5 transition-colors duration-250 ease-out px-2 md:px-6"
							>
								{/* Esquerda: Número + Seta Oculta + Nome */}
								<div className="flex items-center gap-4 md:gap-8 w-full md:w-[60%] shrink-0">
									<div className="flex items-center gap-4">
										{/* Seta Hover */}
										<span className="text-multi-amarelo text-2xl font-bold opacity-0 -translate-x-5 transition-all duration-250 ease-out group-hover:opacity-100 group-hover:translate-x-0 hidden sm:block">
											→
										</span>
										{/* Número */}
										<span className="font-poppins font-bold text-label tracking-[0.2em] text-white/30 shrink-0">
											{numberString} —
										</span>
									</div>

									{/* Título do Serviço */}
									<h3 className="font-display text-[clamp(28px,4vw,56px)] text-white group-hover:text-multi-amarelo transition-colors duration-300 m-0 pr-4 group-hover:translate-x-2 w-full">
										{service.title}
									</h3>
								</div>

								{/* Direita: Descrição e Ícone */}
								<div className="mt-4 md:mt-0 ml-12 md:ml-0 flex items-center justify-between w-full md:w-[40%]">
									<p className="font-poppins font-normal text-[15px] text-white/55 leading-relaxed max-w-[280px] md:max-w-xs transition-opacity duration-300 group-hover:opacity-100">
										{service.description}
									</p>

									{/* Ícone Surgindo no Hover */}
									<div className="text-multi-amarelo opacity-0 scale-50 transition-all duration-250 ease-out origin-center group-hover:opacity-100 group-hover:scale-100 hidden sm:flex shrink-0 w-12 h-12 items-center justify-center bg-multi-amarelo/10 rounded-full">
										<IconComponent size={24} strokeWidth={1.5} />
									</div>
								</div>
							</a>
						);
					})}
				</div>
			</div>
		</section>
	);
}

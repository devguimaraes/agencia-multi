"use client";

import { TextScramble } from "@/components/ui/TextScramble";
import { gsap, useGSAP } from "@/hooks/use-gsap";
import { cn } from "@/lib/utils";
import { Eye, MonitorSmartphone, MousePointerClick, Palette, PenTool, Share2 } from "lucide-react";
import { useRef } from "react";

const SERVICES = [
	{
		title: "Tráfego Pago",
		description: "Escala real com foco em ROI. Gestão cirúrgica de Google e Meta Ads.",
		icon: MousePointerClick,
	},
	{
		title: "Criação de Conteúdo",
		description: "Conteúdo intencional que gera autoridade e transforma seguidores em clientes.",
		icon: PenTool,
	},
	{
		title: "Gestão de Redes Sociais",
		description:
			"Posicionamento estratégico e constância para marcas que buscam liderança digital.",
		icon: Share2,
	},
	{
		title: "Design Gráfico",
		description: "Comunicação visual premium desenhada para elevar o valor da sua marca.",
		icon: Palette,
	},
	{
		title: "Criação de Sites",
		description: "Plataformas de alta performance focadas em conversão e engenharia de vendas.",
		icon: MonitorSmartphone,
	},
	{
		title: "Identidade Visual",
		description: "Arquitetura de marca inesquecível para empresas que vieram para dominar.",
		icon: Eye,
	},
];

export function ServicesOverview({ className }: { className?: string }) {
	const sectionRef = useRef<HTMLElement>(null);
	const headerRef = useRef<HTMLDivElement>(null);
	const listRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			if (!sectionRef.current || !listRef.current || !headerRef.current) return;

			// 1. Header Reveal — disparado assim que a seção entra 30% na tela
			gsap.fromTo(
				headerRef.current,
				{ opacity: 0, y: 50 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: headerRef.current,
						start: "top 85%",
						toggleActions: "play none none reverse",
					},
				},
			);

			// 2. List items Reveal com Scrub sutil (efeito lifting)
			const items = gsap.utils.toArray(listRef.current.children);

			for (const item of items) {
				const el = item as HTMLElement;
				const number = el.querySelector("span");
				const title = el.querySelector("h3");
				const desc = el.querySelector("p");

				gsap.fromTo(
					[number, title, desc],
					{ opacity: 0, x: 50 },
					{
						opacity: 1,
						x: 0,
						duration: 0.8,
						stagger: 0.1,
						ease: "power2.out",
						scrollTrigger: {
							trigger: el,
							start: "top 90%", // Revela quando o item está quase entrando
							end: "top 60%", // Completa o reveal rápido
							scrub: 1.2, // Scrub sutil para dar sensação de peso/luxo
						},
					},
				);
			}
		},
		{ scope: sectionRef },
	);

	return (
		<section
			ref={sectionRef}
			className={cn("bg-multi-black text-white py-24 md:py-40 w-full relative", className)}
		>
			<div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl flex flex-col justify-center h-full">
				{/* HEADER DA SEÇÃO */}
				<div ref={headerRef} className="mb-12 md:mb-16 flex flex-col items-start w-full">
					<TextScramble
						text="Nossos"
						className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-white/40 mb-2"
					/>
					<div className="relative">
						<h2 className="font-display text-[clamp(42px,6vw,72px)] text-multi-amarelo leading-none m-0 pb-2">
							Serviços
						</h2>
						{/* Linha horizontal amarela */}
						<div className="absolute bottom-0 left-0 h-[2px] bg-multi-amarelo w-[80%] origin-left" />
					</div>
				</div>

				{/* LAYOUT DOS SERVIÇOS - Lista Editorial */}
				<div ref={listRef} className="flex flex-col border-t border-white/10 w-full">
					{SERVICES.map((service, idx) => {
						const numberString = (idx + 1).toString().padStart(2, "0");
						const IconComponent = service.icon;

						return (
							<a
								href="#contato"
								key={service.title}
								className="group relative flex flex-col md:flex-row md:items-center justify-between py-5 md:py-6 border-b border-white/5 hover:bg-multi-amarelo/5 transition-colors duration-250 ease-out px-2 md:px-6"
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
									<h3 className="font-display text-[clamp(24px,3vw,42px)] text-white group-hover:text-multi-amarelo transition-colors duration-300 m-0 pr-4 group-hover:translate-x-2 w-full">
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

"use client";

import { Magnetic } from "@/components/ui/Magnetic";
import { gsap, useGSAP } from "@/hooks/use-gsap";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRef } from "react";

export function FinalCTA({ className }: { className?: string }) {
	const containerRef = useRef<HTMLElement>(null);
	const elementsRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const sunRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			if (!containerRef.current || !contentRef.current || !elementsRef.current) return;

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top bottom",
					end: "bottom bottom",
					scrub: 1,
				},
			});

			// Zoom-out Reveal effect
			tl.fromTo(
				contentRef.current,
				{ scale: 0.8, opacity: 0, y: 100 },
				{ scale: 1, opacity: 1, y: 0, ease: "none" },
				0,
			);

			// Decorative elements parallax/reveal
			const deco = elementsRef.current.children;
			tl.fromTo(
				deco,
				{ scale: 0.5, opacity: 0 },
				{ scale: 1, opacity: 0.2, stagger: 0.1, ease: "none" },
				0.2,
			);

			// Sun spin + slight movement
			if (sunRef.current) {
				gsap.to(sunRef.current, {
					rotate: 360,
					duration: 30,
					repeat: -1,
					ease: "none",
				});

				tl.fromTo(
					sunRef.current,
					{ scale: 1.5, opacity: 0 },
					{ scale: 1, opacity: 0.04, ease: "none" },
					0,
				);
			}
		},
		{ scope: containerRef },
	);

	return (
		<section
			ref={containerRef}
			className={cn(
				"relative min-h-screen md:min-h-[110vh] flex items-center justify-center bg-multi-roxo text-white overflow-hidden isolate py-24 md:py-32",
				className,
			)}
		>
			{/* Grain Overlay */}
			<div className="grain" />

			{/* Elementos decorativos tropicais */}
			<div ref={elementsRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
				{/* Ramo de café */}
				<div className="absolute -bottom-10 -left-10 md:bottom-0 md:left-0 w-[200px] md:w-[350px]">
					<Image
						src="/assets/brasilidades/ramo_cafe_v3.png"
						alt=""
						width={350}
						height={350}
						className="w-full h-auto object-contain rotate-15 opacity-20"
						aria-hidden="true"
					/>
				</div>

				{/* Flor hibisco */}
				<div className="absolute -top-8 -right-8 md:top-4 md:right-4 w-[180px] md:w-[300px]">
					<Image
						src="/assets/brasilidades/flor_hibisco_v5.png"
						alt=""
						width={300}
						height={300}
						className="w-full h-auto object-contain -rotate-12 opacity-15"
						aria-hidden="true"
					/>
				</div>

				{/* Pássaros */}
				<div className="absolute top-[15%] left-[5%] md:left-[8%] w-[100px] md:w-[180px]">
					<Image
						src="/assets/brasilidades/passaros_v2.png"
						alt=""
						width={180}
						height={180}
						className="w-full h-auto object-contain opacity-20"
						aria-hidden="true"
					/>
				</div>
			</div>

			{/* Sol Watermark */}
			<div
				ref={sunRef}
				className="absolute right-[-10%] md:right-[-3%] top-1/2 -translate-y-1/2 w-full md:w-[50vw] max-w-[700px] opacity-[0.04] z-0 pointer-events-none"
			>
				<svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full text-multi-amarelo">
					<circle cx="100" cy="100" r="40" />
					{Array.from({ length: 18 }).map((_, i) => (
						<path
							key={i}
							d="M100 20L108 80L100 90L92 80L100 20Z"
							transform={`rotate(${i * 20} 100 100)`}
						/>
					))}
				</svg>
			</div>

			{/* Conteúdo Central */}
			<div
				ref={contentRef}
				className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10 text-center will-change-transform"
			>
				<div className="mb-8">
					<span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-white/40">
						Próximo passo
					</span>
				</div>

				<h2 className="font-display text-[clamp(56px,10vw,140px)] text-white leading-[0.9] mb-8">
					Vamos <span className="text-multi-amarelo">multiplicar</span>
					<br />
					seus resultados?
				</h2>

				<p className="font-poppins text-lead text-white/70 max-w-2xl mx-auto mb-12 md:mb-16">
					Seja parceiro de resultados claros com estratégia sem enrolação. Não importa a sua fase, a
					Multi pode te ajudar.
				</p>

				{/* Galeria de autoridade */}
				<div className="flex justify-center gap-3 md:gap-5 mb-14 md:mb-20">
					{[
						{ src: "/assets/multi/feed-1.png", alt: "Post feed Multi BR" },
						{ src: "/assets/multi/feed-2.png", alt: "Post feed Multi BR" },
						{ src: "/assets/multi/feed-3.png", alt: "Post feed Multi BR" },
					].map((img, idx) => (
						<div
							key={img.src}
							className={cn(
								"relative w-[100px] h-[100px] md:w-[140px] md:h-[140px] rounded-lg overflow-hidden border-2 border-white/10 shadow-lg transition-all duration-500 hover:border-multi-amarelo/40 hover:-translate-y-1",
								idx === 1 && "md:w-[160px] md:h-[160px] -mt-4",
							)}
						>
							<Image src={img.src} alt={img.alt} fill className="object-cover" sizes="160px" />
						</div>
					))}
				</div>

				<div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
					<Magnetic strength={0.3} radius={60}>
						<a
							href="https://wa.me/5521969715247"
							target="_blank"
							rel="noopener noreferrer"
							className="group relative overflow-hidden bg-multi-amarelo text-multi-roxo font-poppins font-bold text-sm md:text-lg px-8 py-4 md:px-10 md:py-5 rounded-sm shadow-xl flex items-center justify-center gap-3"
						>
							<span className="relative z-10 transition-colors duration-300 group-hover:text-white">
								Chamar no WhatsApp
							</span>
							<span className="relative z-10 transition-colors duration-300 group-hover:text-white">
								▶
							</span>
							<div className="absolute inset-0 bg-multi-whatsapp rounded-full transform scale-0 origin-center transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.5]" />
						</a>
					</Magnetic>

					<Magnetic strength={0.2} radius={50}>
						<a
							href="#servicos"
							className="group relative text-white font-poppins font-semibold text-sm md:text-lg px-8 py-4 md:px-10 md:py-5 rounded-sm border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
						>
							Conheça os serviços
						</a>
					</Magnetic>
				</div>
			</div>
		</section>
	);
}

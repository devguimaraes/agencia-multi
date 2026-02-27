"use client";

import { RevealSection } from "@/components/ui/Reveal";
import dynamic from "next/dynamic";
import Image from "next/image";

const HeroBackground = dynamic(
	() => import("@/components/three/HeroBackground").then((mod) => mod.HeroBackground),
	{ ssr: false },
);

export function SobreHero() {
	return (
		<section className="relative min-h-[80vh] flex flex-col justify-end bg-multi-roxo text-white overflow-hidden pt-32 pb-20 md:pb-24">
			<HeroBackground />
			<div className="absolute inset-0 bg-gradient-to-t from-multi-black via-multi-roxo/40 to-transparent opacity-80 z-[1]" />
			<div className="grain high-opacity z-[2]" />

			{/* Ícone Gigante Decorativo */}
			<div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 flex items-center justify-end pointer-events-none overflow-hidden z-[1]">
				<div className="relative flex-shrink-0 flex-grow-0 min-w-[300px] min-h-[300px] md:min-w-[600px] md:min-h-[600px] h-[70%] md:h-[95%] w-full opacity-10 translate-x-10 md:translate-x-0">
					<Image
						src="/assets/brand/icone-branco.png"
						alt="Selo de Autenticidade - Agência Multi BR"
						fill
						className="object-contain object-right"
						priority
					/>
				</div>
			</div>
			<div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
				<RevealSection>
					<div className="flex items-center gap-4 mb-6">
						<span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-multi-amarelo block">
							Quem Somos
						</span>
					</div>
				</RevealSection>

				<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-16">
					<RevealSection delay className="max-w-4xl">
						<h1 className="font-display text-[clamp(48px,10vw,120px)] leading-[0.9] text-white">
							Nossa <br />
							<span className="text-multi-rosa">História</span>
						</h1>
					</RevealSection>

					<RevealSection delay className="max-w-md pb-2">
						<p className="font-poppins text-lg md:text-xl text-white/70 leading-relaxed border-l-2 border-multi-rosa/50 pl-6">
							Estratégia digital direta e eficiente, com alma carioca e foco em resultados reais. Do
							bilhete escrito à mão à inteligência de mercado.
						</p>
					</RevealSection>
				</div>
			</div>
		</section>
	);
}

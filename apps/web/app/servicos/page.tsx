import { HeroPageBackground } from "@/components/layout/HeroPageBackground";
import { FaqIntegrado } from "@/components/marketing/FaqIntegrado";
import { RevealSection, StaggerContainer } from "@/components/ui/Reveal";
import { SERVICES } from "@/data/services";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Nossos Serviços | Agência Multi BR",
	description: "Conheça nossas soluções em Marketing Digital, Tráfego Pago e Branding.",
};

export default function ServicesPage() {
	return (
		<>
			{/* --- 1. HERO EDITORIAL --- */}
			<section className="relative min-h-[70vh] flex flex-col justify-end bg-multi-roxo text-white overflow-hidden pt-32 pb-20 md:pb-32">
				{/* Three.js Background Animado */}
				<HeroPageBackground />

				{/* Overlay gradiente sobre o shader */}
				<div className="absolute inset-0 bg-gradient-to-t from-multi-black via-multi-roxo/40 to-transparent opacity-80 z-[1]" />
				<div className="grain high-opacity z-[2]" />

				{/* Ícone Multi — decorativo com rotação lenta */}
				<div
					className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 flex items-center justify-end pointer-events-none overflow-hidden z-[3]"
					aria-hidden="true"
				>
					<div className="relative shrink-0 grow-0 min-w-[280px] min-h-[280px] md:min-w-[550px] md:min-h-[550px] h-[60%] md:h-[90%] w-full opacity-[0.08] translate-x-8 md:translate-x-0 animate-icon-spin">
						<Image
							src="/brand/icone-branco-transparente.png"
							alt=""
							fill
							className="object-contain object-right"
						/>
					</div>
				</div>

				{/* Blob de luz amarela canto inferior esquerdo */}
				<div className="absolute bottom-0 left-0 w-[300px] h-[200px] bg-multi-amarelo/10 rounded-full blur-[80px] pointer-events-none z-[1]" />

				<div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
					<RevealSection>
						<nav className="mb-8 md:mb-12 font-poppins text-sm md:text-base text-white/50 tracking-wide uppercase">
							<Link href="/" className="hover:text-white transition-colors">
								Home
							</Link>
							<span className="mx-3">/</span>
							<span className="text-multi-amarelo font-medium">Serviços</span>
						</nav>
					</RevealSection>

					<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-16">
						<RevealSection delay className="max-w-3xl">
							{/* clamp: 48px mobile → 8vw tablet → 120px desktop */}
							<h1 className="font-display text-[clamp(48px,10vw,120px)] leading-[0.9] text-white">
								Nossas <br />
								<span className="text-multi-amarelo">Soluções</span>
							</h1>
						</RevealSection>

						<RevealSection delay className="max-w-md pb-2">
							<p className="font-poppins text-lg md:text-xl text-white/70 leading-relaxed border-l-2 border-multi-amarelo/50 pl-6">
								Estratégias completas para posicionar sua marca, engajar sua audiência e escalar
								suas vendas sem enrolação.
							</p>
						</RevealSection>
					</div>
				</div>
			</section>

			{/* --- 2. GRID EDITORIAL DE SERVIÇOS --- */}
			<section className="py-24 md:py-32 bg-multi-cream relative overflow-hidden">
				{/* Assets decorativos nos 4 cantos */}

				{/* Canto sup. esq. — Ramo de Café */}
				<div className="absolute top-0 left-0 w-[180px] h-[180px] md:w-[260px] md:h-[260px] opacity-[0.08] md:opacity-[0.11] rotate-20 pointer-events-none hidden sm:block">
					<Image
						src="/assets/brasilidades/ramo_cafe_v3.png"
						alt=""
						fill
						className="object-contain"
					/>
				</div>

				{/* Canto sup. dir. — Tucano */}
				<div className="absolute top-0 right-0 w-[160px] h-[160px] md:w-[240px] md:h-[240px] opacity-[0.07] md:opacity-[0.10] -rotate-12 pointer-events-none hidden sm:block">
					<Image
						src="/assets/brasilidades/hero_tucano.png"
						alt=""
						fill
						className="object-contain"
					/>
				</div>

				{/* Canto inf. esq. — Folhas */}
				<div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] opacity-[0.08] md:opacity-[0.11] -rotate-12 pointer-events-none hidden sm:block">
					<Image src="/assets/brasilidades/folhas_v2.png" alt="" fill className="object-contain" />
				</div>

				{/* Canto inf. dir. — Abacaxi */}
				<div className="absolute bottom-0 right-0 w-[160px] h-[160px] md:w-[240px] md:h-[240px] opacity-[0.07] md:opacity-[0.10] rotate-10 pointer-events-none hidden sm:block">
					<Image src="/assets/brasilidades/abacaxi.png" alt="" fill className="object-contain" />
				</div>

				<div className="container mx-auto px-4 sm:px-6 max-w-7xl">
					<StaggerContainer className="flex flex-col border-t border-black/10">
						{SERVICES.map((service, idx) => {
							const numberString = (idx + 1).toString().padStart(2, "0");

							return (
								<Link
									href={`/servicos/${service.slug}`}
									key={service.slug}
									className="group flex flex-col md:flex-row md:items-center py-10 md:py-16 border-b border-black/10 hover:bg-white transition-all duration-500 px-4 md:px-8 -mx-4 md:mx-0 rounded-lg hover:shadow-xl hover:scale-[1.01]"
								>
									{/* Esquerda: Número + Título */}
									<div className="w-full md:w-1/2 flex items-start gap-6 md:gap-10 mb-6 md:mb-0">
										<span className="font-poppins font-bold text-xl md:text-2xl text-multi-roxo/30 group-hover:text-multi-rosa transition-colors pt-2 md:pt-4">
											{numberString}
										</span>
										<div>
											<span className="text-5xl md:text-6xl mb-6 block group-hover:scale-110 transition-transform origin-left duration-500">
												{service.icon}
											</span>
											<h2 className="font-display text-3xl md:text-5xl text-multi-black group-hover:text-multi-roxo transition-colors m-0">
												{service.title}
											</h2>
										</div>
									</div>

									{/* Direita: Descrição + Seta */}
									<div className="w-full md:w-1/2 flex flex-col sm:flex-row items-start sm:items-center pl-10 md:pl-0 sm:justify-between gap-6">
										<p className="font-poppins text-lg text-gray-600 max-w-sm leading-relaxed">
											{service.description}
										</p>
										<div className="w-14 h-14 rounded-full border border-multi-roxo/20 flex items-center justify-center group-hover:bg-multi-amarelo group-hover:border-multi-amarelo transition-all duration-300 text-multi-roxo isolate overflow-hidden relative shrink-0">
											{/* Fill Effect */}
											<div className="absolute inset-0 bg-multi-amarelo transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 -z-10" />
											<ArrowRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
										</div>
									</div>
								</Link>
							);
						})}
					</StaggerContainer>
				</div>
			</section>

			{/* --- 3. CTA CONSULTORIA --- */}
			<section className="relative min-h-[50vh] flex items-center justify-center bg-multi-rosa text-white overflow-hidden py-24">
				<div className="absolute inset-0 bg-gradient-to-r from-multi-rosa to-multi-roxo opacity-90" />
				<div className="grain" />

				<div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
					<RevealSection>
						<span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-multi-amarelo mb-6 block">
							Consultoria Personalizada
						</span>
					</RevealSection>

					<RevealSection delay>
						<h2 className="font-display text-[clamp(32px,5vw,64px)] text-white leading-[1] mb-8">
							Não encontrou o <br />
							que <span className="text-multi-amarelo text-outline-yellow">procura?</span>
						</h2>
					</RevealSection>

					<RevealSection delay>
						<p className="font-poppins text-lg text-white/80 max-w-xl mx-auto mb-10">
							Cada negócio é único. Conte-nos seu desafio e criaremos um plano de ataque específico
							para você.
						</p>
					</RevealSection>

					<RevealSection delay>
						<a
							href="/contato"
							className="group relative overflow-hidden bg-multi-amarelo text-multi-roxo font-poppins font-bold text-lg px-8 py-5 rounded-sm shadow-xl flex items-center justify-center transition-transform hover:-translate-y-1"
						>
							<span className="relative z-10 transition-colors duration-300 group-hover:text-white">
								Falar com Especialista
							</span>
							<div className="absolute inset-0 bg-multi-roxo rounded-sm transform scale-0 origin-center transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.5]" />
						</a>
					</RevealSection>
				</div>
			</section>

			{/* --- 4. FAQ INTEGRADO --- */}
			<FaqIntegrado />
		</>
	);
}

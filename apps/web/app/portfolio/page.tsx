import { RevealSection, StaggerContainer } from "@/components/ui/Reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PROJECTS } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Portfolio | Agência Multi BR",
	description: "Confira nossos cases de sucesso em Branding, Tráfego e Conteúdo.",
};

export default function PortfolioPage() {
	const categories = ["Todos", "Branding", "Tráfego", "Conteúdo", "Web Design"];

	return (
		<>
			{/* --- 1. HERO PORTFOLIO --- */}
			<section className="relative min-h-[50vh] flex flex-col justify-end bg-multi-black text-white overflow-hidden pt-32 pb-20 md:pb-24">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-multi-roxo)_0%,_transparent_50%)] opacity-30" />
				<div className="grain high-opacity" />

				{/* Huge background text */}
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none">
					<h2 className="font-display text-[25vw] leading-none whitespace-nowrap">WORK</h2>
				</div>

				<div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
					<RevealSection>
						<span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-multi-amarelo mb-6 block">
							Nossos Projetos
						</span>
					</RevealSection>

					<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-16">
						<RevealSection delay className="max-w-4xl">
							<h1 className="font-display text-[var(--text-section)] md:text-[clamp(64px,8vw,120px)] leading-[0.9] text-white">
								Cases de <br />
								<span className="text-multi-rosa">Sucesso</span>
							</h1>
						</RevealSection>

						<RevealSection delay className="max-w-md pb-2">
							<p className="font-poppins text-lg md:text-xl text-white/70 leading-relaxed border-l-2 border-multi-rosa/50 pl-6">
								Projetos que transformaram negócios e multiplicaram vendas através de inteligência e
								design.
							</p>
						</RevealSection>
					</div>
				</div>
			</section>

			{/* --- 2. GRID & FILTROS --- */}
			<section className="py-24 md:py-32 bg-multi-cream relative overflow-hidden min-h-screen">
				<div className="container mx-auto px-4 sm:px-6 max-w-7xl">
					<Tabs defaultValue="Todos" className="w-full">
						<RevealSection className="flex justify-center mb-16">
							<TabsList className="bg-white/50 backdrop-blur-md border border-black/5 h-auto p-2 flex-wrap justify-center rounded-full shadow-sm gap-2">
								{categories.map((cat) => (
									<TabsTrigger
										key={cat}
										value={cat}
										className="data-[state=active]:bg-multi-black data-[state=active]:text-white font-poppins text-sm md:text-base px-6 py-3 rounded-full transition-all duration-300 hover:bg-black/5 data-[state=active]:shadow-md"
									>
										{cat}
									</TabsTrigger>
								))}
							</TabsList>
						</RevealSection>

						{categories.map((cat) => (
							<TabsContent key={cat} value={cat} className="mt-0 outline-none">
								<StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
									{PROJECTS.filter((p) => cat === "Todos" || p.category === cat).map((project) => (
										<div
											key={project.slug}
											className="group relative flex flex-col bg-white rounded-[2rem] overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-black/5"
										>
											{/* Imagem Container */}
											<div className="aspect-[4/3] relative overflow-hidden bg-multi-cinza-claro">
												<Image
													src={project.image}
													alt={project.title}
													fill
													className="object-cover transition-transform duration-700 group-hover:scale-105"
												/>

												{/* Overlay Awwwards Style */}
												<div className="absolute inset-0 bg-multi-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-sm gap-4">
													{/* Botão view project placeholder */}
													<div className="w-16 h-16 rounded-full bg-multi-amarelo text-multi-black flex items-center justify-center transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
														<ArrowRight className="w-6 h-6 -rotate-45" />
													</div>
													<span className="font-poppins font-medium text-white tracking-wide uppercase text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
														Ver Projeto
													</span>
												</div>
											</div>

											{/* Info Container */}
											<div className="p-8 flex flex-col flex-1">
												<span className="font-poppins font-bold text-[11px] tracking-[0.2em] uppercase text-multi-rosa mb-4 block">
													{project.category}
												</span>
												<h3 className="font-display text-2xl text-multi-black mb-3 group-hover:text-multi-roxo transition-colors">
													{project.title}
												</h3>
												<p className="font-poppins text-gray-600 line-clamp-2 text-sm md:text-base">
													{project.description}
												</p>
											</div>
										</div>
									))}
								</StaggerContainer>
							</TabsContent>
						))}
					</Tabs>
				</div>
			</section>

			{/* --- 3. CTA FINAL --- */}
			<section className="relative flex items-center justify-center bg-multi-roxo text-white overflow-hidden py-24 md:py-32">
				<div className="grain" />

				{/* Decorator Outline */}
				<div className="absolute inset-4 md:inset-8 border border-white/10 rounded-[2rem] pointer-events-none" />

				<div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center max-w-4xl">
					<RevealSection>
						<h2 className="font-display text-[clamp(40px,5vw,72px)] text-white leading-tight mb-10">
							Pronto para ser nosso <br />
							<span className="text-multi-amarelo italic">próximo case?</span>
						</h2>
					</RevealSection>

					<RevealSection delay>
						<a
							href="/contato"
							className="group relative overflow-hidden bg-multi-amarelo text-multi-black font-poppins font-bold text-lg px-10 py-6 rounded-sm shadow-xl flex items-center justify-center transition-transform hover:-translate-y-1 inline-flex"
						>
							<span className="relative z-10 transition-colors duration-300 group-hover:text-white">
								Fale com a gente agora
							</span>
							<div className="absolute inset-0 bg-multi-rosa rounded-sm transform scale-0 origin-center transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.5]" />
						</a>
					</RevealSection>
				</div>
			</section>
		</>
	);
}

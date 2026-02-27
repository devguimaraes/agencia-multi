import { SobreHero } from "@/components/layout/SobreHero";
import { RevealSection, StaggerContainer } from "@/components/ui/Reveal";
import { ArrowRight, Rocket, Target, Users } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Sobre a Agência | Agência Multi BR",
	description: "Conheça a história, valores e a equipe por trás da Agência Multi BR.",
};

export default function SobrePage() {
	return (
		<>
			{/* --- 1. HERO SOBRE --- */}
			<SobreHero />

			{/* --- 2. HISTÓRIA (NARRATIVA REAL E AUTÊNTICA) --- */}
			<section className="py-24 md:py-48 bg-[#FDFCFB] relative overflow-hidden isolate border-t border-multi-roxo/5">
				<div className="grain light opacity-30 z-0" />

				{/* Marca d'água Tipográfica de Fundo */}
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none -z-10 overflow-hidden">
					<span className="font-display text-[30vw] leading-none text-multi-roxo/[0.015] whitespace-nowrap uppercase tracking-[-0.05em] block">
						Carioca · Real · Multi
					</span>
				</div>

				<div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
					<div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
						{/* Bloco de Imagem Editorial */}
						<div className="lg:col-span-5 relative group">
							<RevealSection>
								<div className="relative">
									<div className="absolute -inset-1 border border-multi-roxo/20 rounded-[3rem] -z-10 scale-105 group-hover:scale-100 transition-transform duration-1000" />

									<div className="relative aspect-[4/5] rounded-[2.8rem] overflow-hidden bg-multi-roxo/10 shadow-[0_60px_100px_-20px_rgba(93,1,138,0.12)]">
										<Image
											src="/assets/brand/logo-perfil.jpg"
											alt="Agência Multi BR - Origem"
											fill
											className="object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-105"
										/>

										<div className="absolute inset-0 bg-multi-roxo/5 mix-blend-multiply" />
										<div className="absolute inset-0 bg-gradient-to-t from-multi-roxo/20 via-transparent to-transparent" />

										<div className="absolute bottom-10 right-10 px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
											<p className="font-display text-2xl text-white tracking-widest uppercase">
												RJ
											</p>
										</div>
									</div>
								</div>
							</RevealSection>
						</div>

						{/* Conteúdo Editorial */}
						<div className="lg:col-span-7">
							<RevealSection>
								<div className="flex items-center gap-6 mb-12">
									<div className="h-[1px] w-20 bg-multi-rosa" />
									<span className="font-poppins font-bold text-xs tracking-[0.5em] uppercase text-multi-rosa">
										Nossa Origem
									</span>
								</div>

								<h2 className="font-display text-[clamp(48px,6vw,84px)] text-multi-black leading-[0.85] mb-12 tracking-tighter">
									Do <span className="text-multi-roxo italic">Bilhete</span> <br />à Inteligência
									Multi.
								</h2>
							</RevealSection>

							<div className="grid md:grid-cols-2 gap-12 mt-16">
								<RevealSection delay={0.1}>
									<div className="space-y-6">
										<span className="font-display text-4xl text-multi-amarelo opacity-40">01</span>
										<h3 className="text-xl font-display text-multi-black uppercase tracking-wide leading-tight">
											Estúdio Bilhete: <br /> O Início no Rio
										</h3>
										<p className="font-poppins text-gray-600 leading-relaxed text-lg">
											A jornada da Multi BR iniciou no Cachambi, Zona Norte do Rio de Janeiro,
											originalmente sob o nome de Estúdio Bilhete. O propósito era claro: comunicar
											o que é autêntico através de produções em estúdio próprio e conteúdos diretos,
											dando voz a marcas que precisavam se destacar.
										</p>
									</div>
								</RevealSection>

								<RevealSection delay={0.2}>
									<div className="space-y-6 md:mt-12">
										<span className="font-display text-4xl text-multi-rosa opacity-40">02</span>
										<h3 className="text-xl font-display text-multi-black uppercase tracking-wide leading-tight">
											Multi BR: <br /> Marketing e Publicidade
										</h3>
										<p className="font-poppins text-gray-600 leading-relaxed text-lg">
											A evolução de suporte tático para uma estrutura de inteligência de mercado
											consolidou a Multi BR como uma agência de marketing digital e publicidade
											focada em resultados. Unimos a essência criativa a uma arquitetura de dados
											robusta para transformar marcas em líderes de conversão.
										</p>
									</div>
								</RevealSection>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* --- 3. MANIFESTO (DARK MODE PREMIUM - ESTRATÉGIA QUE FUNCIONA) --- */}
			<section className="py-32 md:py-48 bg-multi-roxo text-white relative overflow-hidden isolate">
				<div className="grain opacity-20 z-0" />

				{/* Glow Effects */}
				<div className="absolute top-0 right-0 w-[50%] h-[50%] bg-multi-rosa/10 blur-[150px] -z-10 rounded-full" />
				<div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-multi-amarelo/5 blur-[120px] -z-10 rounded-full" />

				<div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
					<div className="grid lg:grid-cols-12 gap-20 items-center">
						{/* Esquerda: Manifesto Headline */}
						<div className="lg:col-span-6 space-y-16">
							<RevealSection>
								<div className="inline-block px-4 py-1 border border-white/20 rounded-full mb-8">
									<span className="font-poppins font-bold text-[10px] uppercase tracking-[0.4em] text-multi-amarelo">
										Nosso Posicionamento
									</span>
								</div>

								<h2 className="font-display text-[clamp(56px,8vw,110px)] leading-[0.8] mb-12 tracking-tighter">
									Estratégia <br />
									<span className="text-multi-amarelo italic font-light">Digital</span> <br />
									<span className="text-white">Que Funciona.</span>
								</h2>

								<p className="font-poppins text-2xl md:text-3xl text-white/80 leading-[1.1] max-w-xl font-light italic border-l-4 border-multi-rosa pl-8">
									"Branding ✹ Conteúdo ✹ Tráfego. A Multi BR acredita que o mercado não perdoa a
									mediocridade visual nem a falta de dados."
								</p>
							</RevealSection>
						</div>

						{/* Direita: Pilares do Manifesto */}
						<div className="lg:col-span-6">
							<div className="grid gap-6">
								{[
									{
										title: "Branding com Identidade",
										desc: "Criamos marcas que possuem voz e autoridade real no digital.",
										num: "01",
									},
									{
										title: "Conteúdo que Converte",
										desc: "Pautas baseadas em dados para gerar desejo real no consumidor.",
										num: "02",
									},
									{
										title: "Tráfego Estratégico",
										desc: "Escala focada no seu ROI, abandonando métricas de vaidade.",
										num: "03",
									},
								].map((item, idx) => (
									<RevealSection key={item.title} delay={idx * 0.1}>
										<div className="group p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-all duration-700 flex justify-between items-start">
											<div className="space-y-3">
												<h4 className="font-display text-3xl group-hover:text-multi-amarelo transition-colors duration-500">
													{item.title}
												</h4>
												<p className="font-poppins text-white/60 text-lg">{item.desc}</p>
											</div>
											<span className="font-display text-xl text-white/20 group-hover:text-multi-rosa transition-colors">
												{item.num}
											</span>
										</div>
									</RevealSection>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* --- 4. VALORES / DIFERENCIAIS (A ESSÊNCIA MULTI) --- */}
			<section className="py-24 md:py-32 bg-white relative">
				<div className="container mx-auto px-4 sm:px-6 max-w-7xl text-center">
					<RevealSection className="mb-16">
						<span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-multi-roxo/40 mb-4 block">
							Diferenciais Multi
						</span>
						<h2 className="font-display text-[clamp(40px,5vw,64px)] text-multi-roxo leading-none mb-6">
							O Que Nos Torna Únicos
						</h2>
						<p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
							Fórmulas prontas não fazem parte do nosso DNA. O foco da Multi BR é entregar o que
							funciona estrategicamente para o cenário brasileiro.
						</p>
					</RevealSection>

					<StaggerContainer className="grid md:grid-cols-3 gap-8 text-left">
						{[
							{
								icon: Target,
								title: "Especialistas em RJ",
								desc: "Respiramos o mercado do Rio de Janeiro. Agilidade local com sofisticação global para marcas que buscam autoridade.",
							},
							{
								icon: Users,
								title: "Transparência Real",
								desc: "Transparência é o nosso pilar. Você ganha um braço estratégico que trabalha com visão analítica e execução direta.",
							},
							{
								icon: Rocket,
								title: "Processos Reais",
								desc: "Diferente de agências tradicionais, temos processos estruturados que garantem organização e resultados mensuráveis.",
							},
						].map((value) => (
							<div
								key={value.title}
								className="group bg-multi-cream rounded-[2.5rem] p-10 hover:-translate-y-2 transition-all duration-700 hover:shadow-[0_20px_40px_-15px_rgba(93,1,138,0.12)] relative overflow-hidden"
							>
								{/* Blobs de fundo no hover */}
								<div className="absolute top-0 right-0 w-32 h-32 bg-multi-roxo/5 rounded-bl-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-[1.5]" />

								<div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 relative z-10 text-multi-roxo shadow-sm group-hover:text-multi-rosa transition-colors duration-500">
									<value.icon className="w-8 h-8" />
								</div>

								<h3 className="font-display text-2xl text-multi-black mb-4 relative z-10 group-hover:text-multi-roxo transition-colors duration-500">
									{value.title}
								</h3>

								<p className="font-poppins text-gray-600 leading-relaxed relative z-10">
									{value.desc}
								</p>
							</div>
						))}
					</StaggerContainer>
				</div>
			</section>

			{/* --- 5. CTA FINAL SOBRE (ESTRATÉGIA DIRETA E REAL) --- */}
			<section className="relative min-h-[60vh] flex items-center justify-center bg-multi-roxo text-white overflow-hidden py-32 md:py-48">
				<div className="grain" />
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-multi-rosa/10 rounded-full blur-[150px] pointer-events-none" />

				{/* Asset Decorativo — Logomarca Branca */}
				<div className="absolute top-1/2 -translate-y-1/2 -left-[20%] w-[80%] md:w-[55%] aspect-3/1 opacity-[0.06] pointer-events-none z-0">
					<Image
						src="/assets/brand/logomarca-branca.png"
						alt=""
						fill
						className="object-contain -rotate-12"
						aria-hidden="true"
						sizes="(max-width: 768px) 80vw, 55vw"
					/>
				</div>

				<div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
					<RevealSection>
						<span className="font-poppins font-bold text-label tracking-[0.5em] uppercase text-multi-amarelo mb-12 block">
							Próximo Passo
						</span>
					</RevealSection>

					<RevealSection delay className="max-w-5xl">
						<h2 className="font-display text-[clamp(44px,8vw,110px)] text-white leading-[0.85] mb-12 tracking-tighter">
							Vamos conversar <br />
							<span className="text-multi-amarelo italic font-light">de forma direta?</span>
						</h2>
						<p className="font-poppins text-xl text-white/70 max-w-2xl mx-auto mb-16 leading-relaxed">
							Diferente de agências tradicionais, a Multi BR atua como um parceiro estratégico. Para
							quem busca uma estrutura de publicidade real para escalar marcas, aqui é o lugar.
						</p>
					</RevealSection>

					<RevealSection delay>
						<div className="flex flex-col sm:flex-row gap-8 justify-center">
							<a
								href="/contato"
								className="group relative overflow-hidden bg-multi-amarelo text-multi-roxo font-poppins font-bold text-lg px-12 py-7 rounded-lg shadow-[0_20px_40px_-10px_rgba(250,195,42,0.3)] flex items-center justify-center transition-all hover:-translate-y-1 hover:shadow-[0_25px_50px_-12px_rgba(250,195,42,0.4)]"
							>
								<span className="relative z-10">Falar com a Multi agora</span>
								<div className="absolute inset-0 bg-white rounded-lg transform scale-0 origin-center transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.5]" />
							</a>

							<a
								href="/servicos"
								className="group flex items-center justify-center gap-4 font-poppins font-bold text-lg px-10 py-6 text-white border-2 border-white/20 rounded-lg hover:border-multi-amarelo hover:text-multi-amarelo transition-all"
							>
								Nossos Serviços
								<ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
							</a>
						</div>
					</RevealSection>
				</div>
			</section>
		</>
	);
}

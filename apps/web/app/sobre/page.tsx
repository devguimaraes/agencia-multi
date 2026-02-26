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

			{/* --- 2. HISTÓRIA --- */}
			<section className="py-24 md:py-32 bg-multi-cream relative overflow-hidden">
				{/* Assets Decorativos de Fundo */}
				<div className="absolute top-10 left-10 w-40 h-40 md:w-56 md:h-56 opacity-[0.30] pointer-events-none">
					<Image
						src="/assets/brasilidades/hero_vira_lata.png"
						alt=""
						fill
						className="object-contain"
					/>
				</div>
				<div className="absolute top-10 right-10 w-48 h-48 md:w-72 md:h-72 opacity-[0.30] pointer-events-none">
					<Image
						src="/assets/brasilidades/hero_orelhao.png"
						alt=""
						fill
						className="object-contain"
					/>
				</div>
				<div className="absolute bottom-10 left-10 w-44 h-44 md:w-64 md:h-64 opacity-[0.30] pointer-events-none">
					<Image
						src="/assets/brasilidades/hero_havaianas.png"
						alt=""
						fill
						className="object-contain"
					/>
				</div>
				<div className="absolute bottom-10 right-10 w-56 h-56 md:w-80 md:h-80 opacity-[0.30] pointer-events-none">
					<Image
						src="/assets/brasilidades/hero_mesacadeiras.png"
						alt=""
						fill
						className="object-contain"
					/>
				</div>

				<div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
					<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
						<RevealSection>
							<div className="relative aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden bg-multi-black group shadow-2xl">
								<Image
									src="/assets/brand/logo-perfil.jpg"
									alt="Agência Multi BR - Perfil"
									fill
									className="object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
								/>
								<div className="absolute inset-0 bg-multi-roxo mix-blend-multiply opacity-20 group-hover:opacity-0 transition-opacity duration-700" />
								<div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--color-multi-amarelo)_0%,_transparent_70%)]" />

								{/* Decorator Outline */}
								<div className="absolute inset-4 rounded-[1.5rem] border border-white/10 z-10" />
							</div>
						</RevealSection>

						<div className="space-y-10">
							<RevealSection delay>
								<span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-multi-roxo/40 mb-4 block">
									Sobre
								</span>
								<h2 className="font-display text-[clamp(32px,3.5vw,48px)] text-multi-black leading-[1.1] mb-8">
									Estratégia com Alma: <br className="hidden md:block" />
									<span className="text-multi-roxo">A Evolução da Agência Multi BR</span>
								</h2>
							</RevealSection>

							<RevealSection delay>
								<div className="prose prose-lg text-gray-700 font-poppins leading-relaxed space-y-6">
									<h3 className="text-2xl font-display text-multi-black">
										Nossa História: Do Bilhete ao Digital
									</h3>
									<p>
										Toda grande marca começa com uma ideia simples — às vezes, escrita em um
										bilhete. A Multi BR nasceu desse impulso: a paixão por comunicar o que é
										autêntico. Começamos pequenos no Rio de Janeiro, trocando a intuição pela
										análise, mas sem nunca perder o olho no detalhe que humaniza uma marca.
									</p>
									<p>
										O que começou como um suporte tático evoluiu para uma estrutura de inteligência
										de mercado. Saímos do "papel e caneta" para dominar os algoritmos, transformando
										pequenos negócios em referências e marcas consolidadas em líderes de conversão.
									</p>
								</div>
							</RevealSection>
						</div>
					</div>
				</div>
			</section>

			{/* --- 3. VALORES / PILARES (REORDENADO) --- */}
			<section className="py-16 md:py-24 bg-white relative">
				<div className="container mx-auto px-4 sm:px-6 max-w-7xl text-center">
					<RevealSection className="mb-16">
						<span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-multi-roxo/40 mb-4 block">
							Nossos Pilares
						</span>
						<h2 className="font-display text-[clamp(40px,5vw,64px)] text-multi-roxo leading-none mb-6">
							O que nos Move
						</h2>
						<p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
							Estes são os valores inegociáveis que direcionam nossas entregas e o relacionamento
							com cada parceiro.
						</p>
					</RevealSection>

					<StaggerContainer className="grid md:grid-cols-3 gap-8 text-left">
						{[
							{
								icon: Target,
								title: "Foco em Resultado",
								desc: "Não entregamos apenas likes ou posts bonitos. Entregamos crescimento real para o seu faturamento e expansão da sua marca.",
							},
							{
								icon: Users,
								title: "Parceria Real",
								desc: "Diferente de agências tradicionais, jogamos junto. Tratamos o budget do cliente com o mesmo rigor que tratamos o nosso.",
							},
							{
								icon: Rocket,
								title: "Inovação Contínua",
								desc: "Estamos obcecados por melhorias. Testamos novas features, novas dores e novos ângulos todos os dias para sair na frente.",
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

			{/* --- 4. MANIFESTO MULTI --- */}
			<section className="py-16 md:py-24 bg-multi-cream/30 relative overflow-hidden">
				<div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
					<div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
						{/* Coluna Esquerda: Texto e Conceito */}
						<div className="lg:col-span-7 space-y-16">
							<RevealSection>
								<span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-multi-roxo/40 block mb-8">
									Manifesto Multi
								</span>
								<h2 className="font-display text-[clamp(40px,6vw,80px)] text-multi-black leading-[0.9] mb-10">
									Estratégia que <br />
									<span className="text-multi-roxo text-outline-purple">Não é Pronta</span>
								</h2>
								<p className="font-poppins text-2xl md:text-3xl text-gray-800 leading-tight max-w-2xl font-light italic">
									"Não acreditamos em fórmulas prontas vindas de prateleiras genéricas. O mercado
									atual não perdoa a mediocridade visual nem a falta de estratégia."
								</p>
							</RevealSection>

							<div className="grid sm:grid-cols-2 gap-10 pt-10">
								<RevealSection delay className="space-y-6">
									<h4 className="font-display text-3xl text-multi-roxo">Branding com Identidade</h4>
									<p className="font-poppins text-lg text-gray-600 leading-relaxed">
										Criamos marcas que não apenas existem, mas que possuem voz e autoridade no
										digital.
									</p>
								</RevealSection>
								<RevealSection delay className="space-y-6">
									<h4 className="font-display text-3xl text-multi-rosa">Conteúdo que Converte</h4>
									<p className="font-poppins text-lg text-gray-600 leading-relaxed">
										Pautas baseadas em dados para Reels e TikTok que geram desejo real no
										consumidor.
									</p>
								</RevealSection>
								<RevealSection delay className="space-y-6">
									<h4 className="font-display text-3xl text-multi-black">Tráfego Estratégico</h4>
									<p className="font-poppins text-lg text-gray-600 leading-relaxed">
										Escala real no Meta e Google Ads, focada no seu ROI, não em métricas de vaidade.
									</p>
								</RevealSection>
								<RevealSection delay className="space-y-6">
									<div className="p-8 bg-white rounded-3xl border border-multi-roxo/10 shadow-sm">
										<h4 className="font-display text-2xl text-multi-roxo mb-3">Por que a Multi?</h4>
										<p className="font-poppins text-gray-700 leading-relaxed">
											Respiramos o ritmo do Rio. Agilidade local com sofisticação global de 2026.
										</p>
									</div>
								</RevealSection>
							</div>

							<RevealSection delay className="pt-12">
								<p className="font-poppins text-xl text-gray-600 leading-relaxed border-l-4 border-multi-amarelo pl-10 italic">
									"Aqui, a transparência é o pilar. Você ganha um braço estratégico que trabalha com
									visão analítica e execução impecável."
								</p>
							</RevealSection>
						</div>

						{/* Coluna Direita: Visual e Assets (Colagem de Autoridade Tropical) */}
						<div className="lg:col-span-5 relative min-h-[750px] lg:min-h-[900px] flex items-center justify-center mt-20 lg:mt-0">
							{/* Background Blur Layers */}
							<div className="absolute w-[150%] h-full bg-multi-roxo/5 rounded-full blur-[120px] -z-10" />

							{/* Texto de Fundo Vertical - Alma & Dados */}
							<div className="absolute left-[-15%] top-1/2 -translate-y-1/2 text-[9rem] font-display text-multi-roxo/[0.04] select-none pointer-events-none -rotate-90 origin-center whitespace-nowrap hidden lg:block">
								ALMA & DADOS
							</div>

							{/* Folhagens de Fundo */}
							<div className="absolute top-0 right-[-10%] w-64 h-64 opacity-20 -z-10 rotate-45">
								<Image
									src="/assets/brasilidades/hero_folha_bananeira.png"
									alt=""
									fill
									className="object-contain"
								/>
							</div>
							<div className="absolute bottom-20 left-[-20%] w-80 h-80 opacity-10 -z-10 -rotate-12">
								<Image
									src="/assets/brasilidades/hero_folha.png"
									alt=""
									fill
									className="object-contain"
								/>
							</div>

							{/* Cristo Redentor (Âncora Central) */}
							<RevealSection className="relative z-10 w-full h-full flex justify-center items-center">
								<div className="relative w-[110%] h-[110%] scale-110 lg:scale-120">
									<Image
										src="/assets/brasilidades/hero_cristo.png"
										alt="Cristo Redentor"
										fill
										className="object-contain drop-shadow-[0_20px_60px_rgba(93,1,138,0.25)]"
										priority
									/>
								</div>
							</RevealSection>

							{/* --- SELOS DE AUTORIDADE (PT-BR & ALTO CONTRASTE) --- */}

							{/* Selo 1: Atendimento Humanizado (Amarelo/Roxo) */}
							<RevealSection delay className="absolute top-[12%] left-[-10%] z-40 rotate-[-15deg]">
								<div className="bg-multi-amarelo text-multi-roxo px-6 py-4 rounded-2xl shadow-2xl border-2 border-white flex flex-col items-center justify-center text-center">
									<span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1">
										Padrão Multi
									</span>
									<span className="text-xl font-display leading-tight">
										Atendimento
										<br />
										Humanizado
									</span>
								</div>
							</RevealSection>

							{/* Logo Colorida Multi (Substituindo Mesa/Cadeiras) */}
							<RevealSection
								delay
								className="absolute top-[22%] left-[-15%] w-[55%] h-[55%] z-20 rotate-[-5deg]"
							>
								<div className="relative w-full h-full">
									<Image
										src="/assets/brand/logo-colorida.png"
										alt="Logo Agência Multi BR"
										fill
										className="object-contain drop-shadow-2xl"
									/>
								</div>
							</RevealSection>
							{/* Selo 2: Resultados Reais (Rosa/Branco) */}

							<RevealSection delay className="absolute top-[20%] right-[-15%] z-40 rotate-[12deg]">
								<div className="bg-multi-rosa text-white px-8 py-5 rounded-full shadow-2xl border-4 border-white/20 flex flex-col items-center">
									<span className="text-2xl font-display leading-none">Resultados Reais</span>
									<span className="text-[10px] font-bold uppercase tracking-widest mt-1">
										Sem Enrolação
									</span>
								</div>
							</RevealSection>

							{/* Selo 3: Marketing com Dados (Roxo/Branco) */}
							<RevealSection
								delay
								className="absolute bottom-[35%] right-[-8%] z-40 rotate-[-8deg]"
							>
								<div className="bg-multi-roxo text-white p-6 rounded-[2.5rem] shadow-2xl border border-white/10 flex flex-col items-start">
									<div className="w-8 h-8 bg-multi-rosa rounded-full mb-3 animate-pulse" />
									<span className="text-lg font-display uppercase tracking-tighter">
										Marketing
										<br />
										com Dados
									</span>
								</div>
							</RevealSection>

							{/* Selo 4: Orgulhosamente Brasileira (Verde Tropical / Multi) */}
							<RevealSection
								delay
								className="absolute bottom-[15%] left-[-12%] z-50 rotate-[10deg]"
							>
								<div className="bg-white text-multi-roxo p-4 rounded-xl shadow-xl border-l-8 border-multi-amarelo flex items-center gap-4">
									<div className="relative w-10 h-10">
										<Image
											src="/assets/brand/icone-branco.png"
											alt="Ícone de DNA - Orgulhosamente Brasileira"
											fill
											className="object-contain invert brightness-0"
										/>
									</div>

									<div className="flex flex-col">
										<span className="text-xs font-bold uppercase tracking-widest opacity-40">
											DNA Multi
										</span>
										<span className="text-sm font-display">
											Orgulhosamente
											<br />
											Brasileira
										</span>
									</div>
								</div>
							</RevealSection>

							{/* Vira-lata Caramelo (Canto Inferior Esquerdo) */}
							<RevealSection delay className="absolute bottom-5 left-[0%] w-[42%] h-[42%] z-30">
								<div className="relative w-full h-full">
									<Image
										src="/assets/brasilidades/hero_vira_lata.png"
										alt="Vira-lata Caramelo"
										fill
										className="object-contain drop-shadow-2xl"
									/>
								</div>
							</RevealSection>

							{/* Folhagem em Primeiro Plano (Sobreposta a tudo) */}

							<div className="absolute -bottom-10 right-0 w-56 h-56 opacity-40 z-50 rotate-[-20deg] pointer-events-none">
								<Image
									src="/assets/brasilidades/hero_folha.png"
									alt=""
									fill
									className="object-contain"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* --- 4. CTA FINAL SOBRE --- */}
			<section className="relative min-h-[50vh] flex items-center justify-center bg-multi-roxo text-white overflow-hidden py-24 md:py-32">
				<div className="grain" />
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-multi-rosa/10 rounded-full blur-[120px] pointer-events-none" />

				<div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
					<RevealSection>
						<span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-multi-amarelo mb-8 block">
							Próximos Passos
						</span>
					</RevealSection>

					<RevealSection delay className="max-w-4xl">
						<h2 className="font-display text-[clamp(40px,7vw,90px)] text-white leading-[0.9] mb-10">
							Pronto para escalar <br />
							<span className="text-multi-amarelo text-outline-yellow">seu negócio?</span>
						</h2>
					</RevealSection>

					<RevealSection delay>
						<div className="flex flex-col sm:flex-row gap-6 justify-center">
							<a
								href="/contato"
								className="group relative overflow-hidden bg-white text-multi-roxo font-poppins font-bold text-lg px-10 py-6 rounded-sm shadow-xl flex items-center justify-center transition-transform hover:-translate-y-1"
							>
								<span className="relative z-10 transition-colors duration-300 group-hover:text-white">
									Fale com a gente agora
								</span>
								<div className="absolute inset-0 bg-multi-roxo rounded-sm transform scale-0 origin-center transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.5]" />
							</a>

							<a
								href="/servicos"
								className="group flex items-center justify-center gap-3 font-poppins font-bold text-lg px-8 py-5 text-white border-2 border-white/20 rounded-sm hover:border-multi-amarelo hover:text-multi-amarelo transition-colors"
							>
								Ver Serviços
								<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
							</a>
						</div>
					</RevealSection>
				</div>
			</section>
		</>
	);
}

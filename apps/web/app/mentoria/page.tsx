import { RevealSection, StaggerContainer } from "@/components/ui/Reveal";
import { CheckCircle2, Target, TrendingUp, Users } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Mentoria para Agências | Agência Multi BR",
	description: "Acelere o crescimento da sua agência ou carreira como Social Media.",
};

export default function MentorshipPage() {
	return (
		<>
			{/* --- 1. HERO EDITORIAL --- */}
			<section className="relative min-h-[90vh] flex items-center bg-multi-roxo text-white overflow-hidden pt-32 pb-20">
				{/* Fundo imersivo com gradiente e grain */}
				<div className="absolute inset-0 bg-[var(--grad-hero)] opacity-90" />
				<div className="grain high-opacity" />

				{/* Elementos botânicos sutis (reutilizando da Home) */}
				<div className="absolute -top-10 -right-10 w-[300px] opacity-10 rotate-12 mix-blend-overlay pointer-events-none">
					<Image src="/assets/brasilidades/flor_hibisco_v5.png" alt="" width={300} height={300} />
				</div>
				<div className="absolute -bottom-20 -left-10 w-[400px] opacity-15 -rotate-15 mix-blend-overlay pointer-events-none">
					<Image src="/assets/brasilidades/ramo_cafe_v3.png" alt="" width={400} height={400} />
				</div>

				<div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center max-w-5xl">
					<RevealSection>
						<span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-white/50 mb-6 block">
							Programa Exclusivo
						</span>
					</RevealSection>

					<RevealSection delay>
						<h1 className="font-display text-[var(--text-section)] md:text-[var(--text-display)] leading-[0.9] text-white mb-8">
							Domine o Digital e <br className="hidden md:block" />
							<span className="text-multi-amarelo">Escale sua Agência</span>
						</h1>
					</RevealSection>

					<RevealSection delay>
						<p className="font-poppins text-lead text-white/80 max-w-2xl mx-auto mb-12">
							Mentoria exclusiva para profissionais que querem sair do operacional, lotar a agenda e
							estruturar um negócio escalável.
						</p>
					</RevealSection>

					<RevealSection delay>
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-[slide-up_0.8s_ease_0.6s_forwards]">
							<a
								href="/contato"
								className="group relative overflow-hidden bg-multi-amarelo text-multi-roxo font-poppins font-bold text-sm md:text-lg px-8 py-5 md:px-10 md:py-6 rounded-sm shadow-xl flex items-center justify-center gap-3 w-full sm:w-auto transition-transform hover:-translate-y-1"
							>
								<span className="relative z-10 transition-colors duration-300 group-hover:text-white">
									Aplicar para Mentoria
								</span>
								<div className="absolute inset-0 bg-multi-rosa rounded-sm transform scale-0 origin-center transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.5]" />
							</a>
						</div>
					</RevealSection>
				</div>
			</section>

			{/* --- 2. DORES (LISTA EDITORIAL) --- */}
			<section className="py-24 md:py-32 bg-multi-cream text-multi-black relative border-b border-black/5">
				<div className="container mx-auto px-4 sm:px-6 max-w-6xl">
					<div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
						{/* Coluna Esquerda: Contexto */}
						<div className="lg:col-span-5 relative">
							<div className="sticky top-32">
								<RevealSection>
									<span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-multi-roxo/40 mb-4 block">
										Diagnóstico
									</span>
									<h2 className="font-display text-[var(--text-section)] text-multi-roxo leading-none mb-6">
										Você está
										<br />
										preso no
										<br />
										<span className="text-multi-rosa">operacional?</span>
									</h2>
									<p className="font-poppins text-lg text-gray-600">
										Se você trabalha muito, ganha pouco e sente que a agência não cresce, o problema
										não é falta de esforço. É falta de <strong>processo e posicionamento</strong>.
									</p>
								</RevealSection>
							</div>
						</div>

						{/* Coluna Direita: Lista Interativa */}
						<div className="lg:col-span-7">
							<StaggerContainer className="flex flex-col border-t border-black/10">
								{[
									{
										title: "Cliente pede alteração toda hora",
										desc: "Sem um processo de aprovação claro, você vira refém do cliente e refaz o trabalho infinitas vezes.",
									},
									{
										title: "Não consegue cobrar mais caro",
										desc: "Você atrai clientes que só procuram preço baixo porque seu posicionamento é igual ao da concorrência.",
									},
									{
										title: "Vive apagando incêndio",
										desc: "Sem equipe ou delegação estruturada, você é o gargalo da própria empresa.",
									},
								].map((item, idx) => (
									<div
										key={item.title}
										className="group relative flex flex-col py-8 md:py-10 border-b border-black/10 hover:bg-multi-roxo/5 transition-colors duration-300 px-4 md:px-8"
									>
										<div className="flex items-start gap-4 md:gap-6 mb-4">
											<span className="font-poppins font-bold text-xl text-multi-rosa/50 group-hover:text-multi-rosa transition-colors">
												{(idx + 1).toString().padStart(2, "0")}
											</span>
											<h3 className="font-display text-2xl md:text-3xl text-multi-black group-hover:text-multi-roxo transition-colors m-0">
												{item.title}
											</h3>
										</div>
										<p className="font-poppins text-gray-600 max-w-lg ml-8 md:ml-12">{item.desc}</p>
									</div>
								))}
							</StaggerContainer>
						</div>
					</div>
				</div>
			</section>

			{/* --- 3. METODOLOGIA (GRID COM ICONS) --- */}
			<section className="py-24 md:py-32 bg-white relative">
				<div className="container mx-auto px-4 sm:px-6 max-w-6xl">
					<RevealSection className="text-center mb-16 md:mb-24">
						<span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-multi-roxo/40 mb-4 block">
							O que você vai aprender
						</span>
						<h2 className="font-display text-[var(--text-section)] text-multi-roxo leading-none relative inline-block">
							Pilares da Escala
							<div className="absolute -bottom-2 left-0 h-[2px] bg-multi-amarelo w-[80%]" />
						</h2>
					</RevealSection>

					<StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{
								icon: Target,
								title: "Posicionamento Premium",
								text: "Como se tornar único e atrair clientes dispostos a pagar 3x mais.",
							},
							{
								icon: TrendingUp,
								title: "Processo Comercial",
								text: "Scripts e fluxos que convertem leads frios em contratos de alto ticket.",
							},
							{
								icon: CheckCircle2,
								title: "Gestão e Processos",
								text: "Da prospecção à entrega: como organizar a casa e parar de sofrer.",
							},
							{
								icon: Users,
								title: "Escala e Time",
								text: "Quando e quem contratar para você finalmente sair do operacional.",
							},
						].map((mod) => (
							<div
								key={mod.title}
								className="group bg-multi-cream p-10 rounded-lg hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
							>
								{/* Decorator background */}
								<div className="absolute top-0 right-0 w-32 h-32 bg-multi-amarelo/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150" />

								<div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 relative z-10 text-multi-roxo group-hover:text-multi-rosa transition-colors">
									<mod.icon className="w-6 h-6" />
								</div>
								<h3 className="font-display text-2xl text-multi-roxo mb-3 relative z-10">
									{mod.title}
								</h3>
								<p className="font-poppins text-gray-600 relative z-10 leading-relaxed">
									{mod.text}
								</p>
							</div>
						))}
					</StaggerContainer>
				</div>
			</section>

			{/* --- 4. CTA FINAL (MONUMENTAL) --- */}
			<section className="relative min-h-[70vh] flex items-center justify-center bg-multi-roxo text-white overflow-hidden py-24 md:py-32">
				<div className="grain" />

				{/* Circulo decorativo */}
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-multi-rosa/20 rounded-full blur-[100px] pointer-events-none" />

				<div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
					<RevealSection>
						<span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-multi-amarelo mb-8 block">
							Vagas Limitadas
						</span>
					</RevealSection>

					<RevealSection delay>
						<h2 className="font-display text-[clamp(40px,7vw,90px)] text-white leading-[0.9] mb-10">
							Pronto para dar o <br />
							<span className="text-multi-amarelo text-outline-yellow">Próximo Passo?</span>
						</h2>
					</RevealSection>

					<RevealSection delay>
						<a
							href="/contato"
							className="group relative overflow-hidden bg-white text-multi-roxo font-poppins font-bold text-lg px-10 py-6 rounded-sm shadow-xl flex items-center justify-center transition-transform hover:-translate-y-1"
						>
							<span className="relative z-10 transition-colors duration-300 group-hover:text-white">
								Garantir Minha Vaga
							</span>
							<div className="absolute inset-0 bg-multi-roxo rounded-sm transform scale-0 origin-center transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.5]" />
						</a>
					</RevealSection>
				</div>
			</section>
		</>
	);
}

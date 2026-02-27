import { ContactForm } from "@/components/marketing/ContactForm";
import { RevealSection, StaggerContainer } from "@/components/ui/Reveal";
import { ArrowRight, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contato | Agência Multi BR",
	description: "Fale conosco e impulsione seu negócio.",
};

export default function ContactPage() {
	return (
		<>
			{/* --- 1. HERO CONTATO --- */}
			<section className="relative min-h-[50vh] flex flex-col justify-end bg-multi-black text-white overflow-hidden pt-32 pb-20 md:pb-24">
				<div className="absolute inset-0 bg-linear-to-t from-multi-black to-multi-roxo/40 opacity-90" />
				<div className="grain high-opacity" />

				<div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
					<RevealSection>
						<span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-multi-amarelo mb-6 block">
							Fale Conosco
						</span>
					</RevealSection>

					<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-16">
						<RevealSection delay className="max-w-4xl">
							<h1 className="font-display text-white md:text-[clamp(64px,8vw,120px)] leading-[0.9]">
								Vamos <br />
								<span className="text-multi-rosa">Conversar?</span>
							</h1>
						</RevealSection>

						<RevealSection delay className="max-w-md pb-2">
							<p className="font-poppins text-lg md:text-xl text-white/70 leading-relaxed border-l-2 border-multi-rosa/50 pl-6">
								Prontos para ouvir seus desafios e estruturar um plano de atração e vendas focado no
								seu momento de caixa.
							</p>
						</RevealSection>
					</div>
				</div>
			</section>

			{/* --- 2. FORMAS DE CONTATO & FORMULÁRIO (PREMIUM) --- */}
			<section className="py-24 md:py-48 bg-[#FDFCFB] relative overflow-hidden isolate">
				<div className="grain light opacity-30 z-0" />

				{/* Blobs Luminosos */}
				<div className="absolute top-[5%] right-[-10%] w-[600px] h-[600px] bg-multi-roxo/5 blur-[150px] rounded-full pointer-events-none -z-10" />
				<div className="absolute bottom-[10%] left-[-8%] w-[500px] h-[500px] bg-multi-amarelo/5 blur-[120px] rounded-full pointer-events-none -z-10" />

				{/* Marca d'água tipográfica */}
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none -z-10 overflow-hidden">
					<span className="font-display text-[25vw] leading-none text-multi-roxo/[0.012] whitespace-nowrap uppercase tracking-[-0.05em] block">
						Contato · Multi · RJ
					</span>
				</div>

				<div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
					<div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
						{/* Coluna Esquerda: Informações de Contato */}
						<div className="lg:col-span-5 space-y-16">
							<StaggerContainer>
								<div>
									<div className="flex items-center gap-6 mb-10">
										<div className="h-px w-16 bg-multi-rosa" />
										<span className="font-poppins font-bold text-xs tracking-[0.5em] uppercase text-multi-rosa">
											Nossos Canais
										</span>
									</div>
									<h2 className="font-display text-[clamp(36px,4vw,52px)] text-multi-black leading-[0.9] mb-12 tracking-tight">
										Fale <span className="text-multi-roxo italic">direto</span> <br />
										com a Multi.
									</h2>
									<div className="space-y-5">
										{[
											{
												icon: Mail,
												label: "E-mail",
												value: "atendimento@agenciamultibr.com",
												href: "mailto:atendimento@agenciamultibr.com",
											},
											{
												icon: Phone,
												label: "WhatsApp",
												value: "(21) 96971-5247",
												href: "https://wa.me/5521969715247",
											},
											{
												icon: MapPin,
												label: "Localização",
												value: "R. José Bonifácio, 1050 — Cachambi\nRio de Janeiro, RJ",
												href: null,
											},
										].map((item) => (
											<div
												key={item.label}
												className="group flex items-start gap-5 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-multi-roxo/5 hover:border-multi-roxo/15 hover:shadow-[0_15px_40px_-10px_rgba(93,1,138,0.08)] transition-all duration-500"
											>
												<div className="w-12 h-12 bg-linear-to-br from-multi-roxo to-multi-rosa rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[0_4px_15px_rgba(93,1,138,0.2)]">
													<item.icon className="w-5 h-5 text-white" />
												</div>
												<div>
													<h3 className="font-poppins font-bold text-[10px] tracking-[0.3em] uppercase text-multi-roxo/40 mb-1.5">
														{item.label}
													</h3>
													{item.href ? (
														<a
															href={item.href}
															target={item.href.startsWith("http") ? "_blank" : undefined}
															rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
															className="font-poppins text-base text-multi-black hover:text-multi-roxo transition-colors duration-300 font-medium flex items-center gap-2"
														>
															{item.value}
															<ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-multi-rosa" />
														</a>
													) : (
														<p className="font-poppins text-base text-multi-black font-medium whitespace-pre-line">
															{item.value}
														</p>
													)}
												</div>
											</div>
										))}
									</div>
								</div>

								{/* Redes Sociais */}
								<div className="pt-4">
									<h3 className="font-poppins font-bold text-[10px] tracking-[0.3em] uppercase text-multi-roxo/40 mb-6">
										Siga a Multi
									</h3>
									<div className="flex gap-4">
										{[
											{
												icon: Instagram,
												href: "https://instagram.com/agenciamultibr",
												name: "instagram",
											},
											{
												icon: Linkedin,
												href: "https://linkedin.com/company/agenciamultibr",
												name: "linkedin",
											},
										].map((social) => (
											<a
												key={social.name}
												href={social.href}
												className="w-14 h-14 bg-white/80 backdrop-blur-sm border border-multi-roxo/10 rounded-2xl flex items-center justify-center text-multi-roxo/60 hover:bg-linear-to-br hover:from-multi-roxo hover:to-multi-rosa hover:text-white hover:border-transparent transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_30px_-5px_rgba(93,1,138,0.25)]"
											>
												<social.icon className="w-5 h-5" />
											</a>
										))}
									</div>
								</div>
							</StaggerContainer>
						</div>

						{/* Coluna Direita: Formulário */}
						<div className="lg:col-span-7">
							<RevealSection delay>
								<div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-14 shadow-[0_30px_80px_-20px_rgba(93,1,138,0.08)] border border-multi-roxo/5 relative overflow-hidden">
									{/* Decorativos */}
									<div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-bl from-multi-amarelo/10 to-transparent rounded-bl-full -mr-10 -mt-10 pointer-events-none" />
									<div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-multi-roxo/5 to-transparent rounded-tr-full -ml-8 -mb-8 pointer-events-none" />

									<div className="flex items-center gap-4 mb-3 relative z-10">
										<div className="w-2 h-2 rounded-full bg-multi-rosa animate-pulse" />
										<span className="font-poppins font-bold text-[10px] tracking-[0.4em] uppercase text-multi-rosa/60">
											Formulário
										</span>
									</div>

									<h2 className="font-display text-[clamp(32px,3.5vw,48px)] text-multi-black mb-3 relative z-10 tracking-tight">
										Envie uma <span className="text-multi-roxo italic">mensagem</span>
									</h2>
									<p className="font-poppins text-gray-500 text-base mb-10 relative z-10 max-w-lg">
										Preencha o formulário abaixo e nossa equipe retornará em até 24h úteis.
									</p>
									<div className="relative z-10">
										<ContactForm />
									</div>
								</div>
							</RevealSection>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

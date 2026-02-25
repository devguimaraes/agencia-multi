import { RevealSection, StaggerContainer } from "@/components/ui/Reveal";
import { CheckCircle2, Download } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "E-book Social Media | Agência Multi BR",
	description: "Guia definitivo para iniciantes em Social Media.",
};

export default function EbookPage() {
	return (
		<>
			<section className="min-h-screen flex items-center py-32 bg-multi-roxo text-white overflow-hidden relative">
				<div className="absolute inset-0 bg-gradient-to-br from-multi-roxo to-multi-rosa opacity-90" />
				<div className="grain high-opacity" />

				<div className="container mx-auto px-4 relative z-10 max-w-7xl">
					<div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
						{/* --- HEADER INFOS --- */}
						<div className="space-y-8">
							<RevealSection>
								<span className="bg-multi-amarelo text-multi-black px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] shadow-sm inline-block">
									Material Gratuito
								</span>
							</RevealSection>

							<RevealSection delay>
								<h1 className="font-display text-[clamp(40px,6vw,80px)] leading-[1.05] text-white">
									O Guia Definitivo do <br className="hidden md:block" />
									<span className="text-multi-amarelo text-outline-yellow select-none">
										Social Media
									</span>{" "}
									Iniciante
								</h1>
							</RevealSection>

							<RevealSection delay>
								<p className="font-poppins text-lg md:text-xl text-white/90 leading-relaxed border-l-2 border-multi-amarelo/50 pl-6 max-w-xl">
									Descubra os 5 passos essenciais para começar sua carreira e conquistar seus
									primeiros clientes em 30 dias.
								</p>
							</RevealSection>

							{/* Checklist */}
							<StaggerContainer className="space-y-4 pt-4">
								{[
									"Como precificar seus serviços",
									"Ferramentas indispensáveis",
									"Como criar portfólio sem clientes",
									"Scripts de vendas validados",
								].map((item) => (
									<div
										key={item}
										className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl w-full max-w-lg hover:bg-white/10 transition-colors"
									>
										<CheckCircle2 className="text-multi-amarelo w-6 h-6 shrink-0" />
										<span className="font-poppins text-white/90">{item}</span>
									</div>
								))}
							</StaggerContainer>

							<RevealSection delay>
								<div className="pt-8">
									<button
										type="button"
										className="group relative overflow-hidden bg-multi-amarelo text-multi-black font-poppins font-bold text-lg md:text-xl px-10 py-6 rounded-[1rem] shadow-xl flex items-center justify-center w-full md:w-auto transition-transform hover:-translate-y-1"
									>
										<span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-white">
											<Download className="w-6 h-6" />
											Baixar E-book Agora
										</span>
										<div className="absolute inset-0 bg-multi-rosa rounded-[1rem] transform scale-0 origin-center transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.5]" />
									</button>
									<p className="font-poppins text-sm mt-6 text-white/50 flex items-center gap-2">
										<span className="text-multi-amarelo">🔒</span> Seus dados estão seguros. Não
										enviamos spam.
									</p>
								</div>
							</RevealSection>
						</div>

						{/* --- MOCKUP EBOOK --- */}
						<div className="relative flex justify-center lg:justify-end">
							<RevealSection delay>
								<div className="w-[280px] sm:w-[350px] md:w-[450px] aspect-[3/4] bg-multi-cream rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] rotate-3 hover:rotate-0 transition-transform duration-700 relative overflow-hidden border-[12px] border-white">
									{/* Book Mockup Placeholder - Premium */}
									<div className="absolute inset-0 bg-gradient-to-br from-multi-black to-multi-roxo flex items-center justify-center">
										<div className="grain high-opacity" />
										<div className="text-center relative z-10 p-8">
											<div className="w-16 h-16 mx-auto bg-multi-amarelo rounded-full flex items-center justify-center mb-6">
												<span className="font-display text-2xl text-multi-black">M</span>
											</div>
											<div className="font-display text-[clamp(32px,4vw,48px)] text-white mb-4 leading-tight">
												THE SOCIA MEDIA <br />
												<span className="text-multi-amarelo">PLAYBOOK</span>
											</div>
											<div className="font-poppins text-white/50 text-sm tracking-widest uppercase mt-8 border-t border-white/10 pt-4">
												Agência Multi BR
											</div>
										</div>
									</div>
									<div className="absolute left-0 inset-y-0 w-8 bg-gradient-to-r from-black/40 to-transparent pointer-events-none" />
								</div>
							</RevealSection>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

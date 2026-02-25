import { RevealSection, StaggerContainer } from "@/components/ui/Reveal";
import { getAllPosts } from "@/lib/blog";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Blog | Agência Multi BR",
	description: "Dicas e insights sobre Marketing Digital, Branding e Tráfego.",
};

export default async function BlogPage() {
	const posts = await getAllPosts();

	return (
		<>
			{/* --- 1. HERO BLOG --- */}
			<section className="relative min-h-[50vh] flex flex-col justify-end bg-multi-black text-white overflow-hidden pt-32 pb-20 md:pb-24">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-multi-roxo)_0%,transparent_40%)] opacity-30" />
				<div className="grain high-opacity" />

				<div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
					<RevealSection>
						<span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-multi-amarelo mb-6 block">
							Multi Insights
						</span>
					</RevealSection>

					<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-16">
						<RevealSection delay className="max-w-4xl">
							<h1 className="font-display md:text-[clamp(64px,8vw,120px)] leading-[0.9] text-white">
								Nosso <br />
								<span className="text-multi-rosa">Blog</span>
							</h1>
						</RevealSection>

						<RevealSection delay className="max-w-md pb-2">
							<p className="font-poppins text-lg md:text-xl text-white/70 leading-relaxed border-l-2 border-multi-rosa/50 pl-6">
								Conteúdos focados em conversão. Fique por dentro das estratégias, tendências e cases
								sobre inteligência digital.
							</p>
						</RevealSection>
					</div>
				</div>
			</section>

			{/* --- 2. POSTS GRID --- */}
			<section className="py-24 md:py-32 bg-multi-cream relative overflow-hidden min-h-screen">
				<div className="container mx-auto px-4 sm:px-6 max-w-7xl">
					<StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
						{posts.map((post, index) => {
							const isFeatured = index === 0;

							return (
								<div
									key={post.slug}
									className={`group relative flex flex-col bg-white rounded-4xl overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 border border-black/5 hover:-translate-y-2 ${
										isFeatured ? "md:col-span-2 lg:col-span-2 flex-col md:flex-row" : ""
									}`}
								>
									{/* Imagem */}
									<div
										className={`relative overflow-hidden bg-multi-cinza-claro ${
											isFeatured ? "aspect-square md:aspect-auto md:w-1/2" : "aspect-video"
										}`}
									>
										<Image
											src={post.image}
											alt={post.title}
											fill
											className="object-cover transition-transform duration-700 group-hover:scale-105"
										/>
										<div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-multi-roxo text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-sm">
											{post.category}
										</div>
									</div>

									{/* Info */}
									<div
										className={`p-8 md:p-10 flex flex-col justify-center flex-1 ${
											isFeatured ? "md:w-1/2" : ""
										}`}
									>
										<div className="text-sm text-gray-400 mb-4 font-poppins font-medium flex items-center gap-2">
											<span>{post.date}</span>
											<span className="w-1 h-1 rounded-full bg-multi-rosa" />
											<span>{post.author}</span>
										</div>

										<h2
											className={`font-display text-multi-black group-hover:text-multi-roxo transition-colors mb-4 line-clamp-3 ${
												isFeatured ? "text-3xl md:text-4xl" : "text-2xl"
											}`}
										>
											<Link href={`/blog/${post.slug}`} className="before:absolute before:inset-0">
												{post.title}
											</Link>
										</h2>

										<p
											className={`font-poppins text-gray-600 mb-8 ${
												isFeatured ? "line-clamp-4 text-lg" : "line-clamp-3 text-base"
											}`}
										>
											{post.excerpt}
										</p>

										<div className="mt-auto flex items-center gap-2 text-multi-rosa font-poppins font-bold group-hover:text-multi-roxo transition-colors">
											LER ARTIGO
											<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
										</div>
									</div>
								</div>
							);
						})}
					</StaggerContainer>
				</div>
			</section>

			{/* --- 3. NEWSLETTER CTA --- */}
			<section className="relative flex items-center justify-center bg-multi-roxo text-white overflow-hidden py-24 md:py-32">
				<div className="grain" />
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-multi-rosa/10 rounded-full blur-[120px] pointer-events-none" />

				<div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center max-w-3xl">
					<RevealSection>
						<span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-multi-amarelo mb-8 block">
							Newsletter
						</span>
					</RevealSection>

					<RevealSection delay>
						<h2 className="font-display text-[clamp(40px,5vw,72px)] text-white leading-tight mb-6">
							Receba novos <br />
							<span className="text-multi-amarelo italic">insights</span>
						</h2>
					</RevealSection>

					<RevealSection delay>
						<p className="font-poppins text-lg text-white/70 mb-12">
							Cadastre-se para receber nossas melhores estratégias de vendas e atração diretamente
							no seu e-mail.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl mx-auto">
							<input
								type="email"
								placeholder="Seu melhor e-mail"
								className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 px-6 py-4 rounded-xl font-poppins focus:outline-none focus:border-multi-amarelo focus:bg-white/20 transition-all"
							/>
							<button
								type="button"
								className="group relative overflow-hidden bg-multi-amarelo text-multi-black font-poppins font-bold text-lg px-8 py-4 rounded-xl shadow-xl flex items-center justify-center transition-transform hover:-translate-y-1"
							>
								<span className="relative z-10 transition-colors duration-300 group-hover:text-white">
									Assinar
								</span>
								<div className="absolute inset-0 bg-multi-rosa rounded-xl transform scale-0 origin-center transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.5]" />
							</button>
						</div>
					</RevealSection>
				</div>
			</section>
		</>
	);
}

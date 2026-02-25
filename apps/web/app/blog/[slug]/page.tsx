import { RevealSection, StaggerContainer } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { ArrowLeft, Clock, User } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamicParams = true;

export async function generateStaticParams() {
	const posts = await getAllPosts();
	return posts.map((post) => ({
		slug: post.slug,
	}));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const post = await getPostBySlug(slug);

	if (!post) {
		return {
			title: "Post não encontrado",
		};
	}

	return {
		title: `${post.title} | Blog Multi BR`,
		description: post.excerpt,
	};
}

export default async function BlogPostPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const post = await getPostBySlug(slug);

	if (!post) {
		notFound();
	}

	return (
		<>
			{/* --- 1. HERO ARTIGO --- */}
			<section className="relative min-h-[60vh] flex flex-col justify-end bg-multi-black text-white overflow-hidden pt-32 pb-20 md:pb-24">
				{/* Imagem de Fundo com Blur/Overlay */}
				<div className="absolute inset-0 z-0">
					<Image
						src={post.image}
						alt={post.title}
						fill
						className="object-cover object-center translate-y-[-10%]"
						priority
					/>
					<div className="absolute inset-0 bg-multi-black/80 backdrop-blur-[2px]" />
					<div className="absolute inset-0 bg-linear-to-t from-multi-black via-multi-black/80 to-transparent" />
				</div>

				<div className="grain high-opacity z-10" />

				<div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-4xl">
					<RevealSection>
						<div className="flex items-center gap-2 text-sm md:text-base font-poppins text-white/50 mb-8 mt-8">
							<Link href="/blog" className="hover:text-white transition-colors">
								Blog
							</Link>
							<span>/</span>
							<span className="text-white/80 truncate max-w-[200px] md:max-w-none">
								{post.title}
							</span>
						</div>
					</RevealSection>

					<RevealSection delay>
						<span className="font-poppins font-bold text-label tracking-[0.2em] uppercase bg-multi-amarelo text-multi-black px-4 py-2 rounded-full mb-8 inline-block shadow-sm">
							{post.category}
						</span>
					</RevealSection>

					<RevealSection delay>
						<h1 className="font-display text-[clamp(40px,6vw,80px)] leading-[1.1] text-white mb-8 border-l-4 border-multi-rosa pl-6 md:pl-8">
							{post.title}
						</h1>
					</RevealSection>

					<RevealSection delay>
						<div className="flex flex-wrap items-center gap-6 text-white/60 font-poppins mt-8">
							<div className="flex items-center gap-2">
								<Clock className="w-5 h-5 text-multi-rosa" />
								<span>{post.date}</span>
							</div>
							<div className="flex items-center gap-2">
								<User className="w-5 h-5 text-multi-rosa" />
								<span>{post.author}</span>
							</div>
						</div>
					</RevealSection>
				</div>
			</section>

			{/* --- 2. CONTEÚDO --- */}
			<section className="py-20 md:py-32 bg-multi-cream relative overflow-hidden">
				<article className="container mx-auto px-4 max-w-4xl relative z-10">
					<StaggerContainer>
						<div
							className="prose prose-lg md:prose-xl prose-headings:font-display prose-headings:text-multi-black prose-p:text-gray-700 prose-p:font-poppins prose-p:leading-relaxed prose-a:text-multi-rosa prose-a:no-underline hover:prose-a:underline prose-li:font-poppins prose-li:text-gray-700 max-w-none mb-20"
							// biome-ignore lint/security/noDangerouslySetInnerHtml: Blog content is trusted
							dangerouslySetInnerHTML={{ __html: post.content }}
						/>

						{/* CTA do Artigo */}
						<div className="my-16 bg-multi-roxo text-white p-10 md:p-14 rounded-4xl text-center relative overflow-hidden">
							<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-multi-rosa)_0%,transparent_60%)] opacity-20" />
							<h3 className="font-display text-3xl md:text-5xl text-white mb-6 relative z-10 leading-tight">
								Pronto para aplicar essas <br className="hidden md:block" />
								<span className="text-multi-amarelo italic">estratégias</span> no seu negócio?
							</h3>
							<p className="font-poppins text-lg text-white/80 mb-8 relative z-10 max-w-2xl mx-auto">
								Deixe a execução com quem entende. Fale com nossos especialistas e descubra como a
								Multi pode construir sua presença e alavancar suas vendas.
							</p>
							<Link
								href="/contato"
								className="inline-flex relative overflow-hidden bg-multi-amarelo text-multi-black font-poppins font-bold text-lg px-8 py-5 rounded-sm shadow-xl items-center justify-center transition-transform hover:-translate-y-1 z-10 group"
							>
								<span className="relative z-10 transition-colors duration-300 group-hover:text-white">
									Falar com um Especialista
								</span>
								<div className="absolute inset-0 bg-multi-rosa rounded-sm transform scale-0 origin-center transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.5]" />
							</Link>
						</div>

						<div className="pt-12 border-t border-black/10 flex items-center justify-between">
							<Button
								asChild
								variant="outline"
								className="group rounded-full border-black/20 text-multi-roxo hover:bg-multi-black hover:text-white hover:border-multi-black px-8 py-6 h-auto font-poppins text-base border-2 shadow-none border-solid transition-all duration-300"
							>
								<Link href="/blog">
									<ArrowLeft className="mr-3 w-5 h-5 group-hover:-translate-x-2 transition-transform" />
									Voltar para o Blog
								</Link>
							</Button>

							{/* Compartilhar placeholder */}
							<div className="hidden sm:flex items-center gap-4">
								<span className="font-poppins text-sm font-medium text-gray-500 uppercase tracking-widest">
									Compartilhe
								</span>
								<div className="flex gap-2">
									<div className="w-10 h-10 rounded-full border-2 border-black/10 flex items-center justify-center cursor-pointer hover:border-multi-rosa hover:text-multi-rosa transition-colors">
										in
									</div>
									<div className="w-10 h-10 rounded-full border-2 border-black/10 flex items-center justify-center cursor-pointer hover:border-multi-rosa hover:text-multi-rosa transition-colors">
										tw
									</div>
								</div>
							</div>
						</div>
					</StaggerContainer>
				</article>
			</section>
		</>
	);
}

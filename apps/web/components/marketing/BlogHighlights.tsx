"use client";

import { Button } from "@/components/ui/button";
import { gsap, useGSAP } from "@/hooks/use-gsap";
import type { Post } from "@/lib/blog";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface BlogHighlightsProps {
	className?: string;
	posts: Post[];
}

export function BlogHighlights({ className, posts }: BlogHighlightsProps) {
	const sectionRef = useRef<HTMLElement>(null);
	const cardsRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			if (!sectionRef.current || !cardsRef.current) return;

			const cards = gsap.utils.toArray(cardsRef.current.children);

			gsap.fromTo(
				cards,
				{ opacity: 0, y: 50 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					stagger: 0.15,
					ease: "power3.out",
					scrollTrigger: {
						trigger: sectionRef.current,
						start: "top 75%",
						toggleActions: "play none none none",
					},
				},
			);
		},
		{ scope: sectionRef },
	);

	return (
		<section
			ref={sectionRef}
			className={cn("py-24 md:py-32 bg-white relative overflow-hidden isolate", className)}
		>
			{/* Decorative Sun Watermark */}
			<div className="absolute -left-20 top-0 w-80 h-80 opacity-[0.03] text-multi-roxo animate-sol-spin pointer-events-none -z-10">
				<svg viewBox="0 0 200 200" fill="currentColor">
					<title>Sol decorativo da Agência Multi</title>
					<circle cx="100" cy="100" r="40" />
					{Array.from({ length: 18 }).map((_, i) => (
						<path
							key={`sun-ray-${i}`}
							d="M100 20L108 80L100 90L92 80L100 20Z"
							transform={`rotate(${i * 20} 100 100)`}
						/>
					))}
				</svg>
			</div>

			<div className="container mx-auto px-4 sm:px-6 max-w-7xl">
				<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b-2 border-multi-roxo/10 pb-8">
					<div className="space-y-2">
						<span className="font-poppins font-bold text-[10px] tracking-[0.4em] uppercase text-multi-roxo/40">
							Multi Insights
						</span>
						<h2 className="text-5xl md:text-7xl font-display text-multi-roxo uppercase tracking-tight">
							Nosso <span className="text-multi-rosa">Blog</span>
						</h2>
					</div>

					<Link href="/blog">
						<Button
							variant="ghost"
							className="hidden md:flex font-poppins font-bold text-sm text-multi-roxo hover:bg-multi-amarelo mt-4 md:mt-0 px-8 h-14 rounded-full border-2 border-multi-roxo/10 hover:border-multi-amarelo transition-all duration-300"
						>
							Ver todas as publicações <ArrowUpRight className="ml-2 w-5 h-5" />
						</Button>
					</Link>
				</div>

				<div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
					{posts.map((post) => (
						<article key={post.slug} className="group cursor-pointer relative flex flex-col">
							{/* Image Container with Hover Lift Sombra */}
							<div className="aspect-[4/3] rounded-3xl mb-8 overflow-hidden relative border border-black/5 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-3 group-hover:shadow-[0_32px_64px_-15px_rgba(93,1,138,0.15)]">
								<Image
									src={post.image}
									alt={post.title}
									fill
									className="object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
									sizes="(max-width: 768px) 100vw, 33vw"
								/>

								{/* Category Badge */}
								<span className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md text-multi-roxo font-poppins font-bold text-[10px] uppercase tracking-widest rounded-full shadow-sm z-10 transition-transform duration-500 group-hover:scale-110">
									{post.category}
								</span>

								{/* Hover Overlay */}
								<div className="absolute inset-0 bg-multi-roxo/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							</div>

							{/* Content */}
							<div className="flex flex-col flex-1 pl-2">
								<div className="flex items-center gap-3 mb-4 text-gray-400 font-poppins text-xs font-medium uppercase tracking-wider">
									<span>{post.date}</span>
									<span className="w-1 h-1 rounded-full bg-multi-rosa" />
									<span>{post.author}</span>
								</div>

								<h3 className="font-display text-2xl text-multi-roxo leading-tight group-hover:text-multi-rosa transition-colors line-clamp-2">
									<Link href={`/blog/${post.slug}`}>{post.title}</Link>
								</h3>
							</div>
						</article>
					))}
				</div>

				<Link href="/blog" className="block mt-12 md:hidden">
					<Button
						variant="ghost"
						className="w-full font-poppins font-bold text-lg text-multi-roxo bg-multi-amarelo h-16 rounded-2xl shadow-lg border-2 border-multi-roxo/10"
					>
						Acessar todas as publicações <ArrowUpRight className="ml-2 w-5 h-5" />
					</Button>
				</Link>
			</div>
		</section>
	);
}

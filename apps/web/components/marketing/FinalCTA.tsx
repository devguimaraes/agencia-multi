"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function FinalCTA({ className }: { className?: string }) {
	const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.15 });

	return (
		<section
			ref={ref}
			className={cn(
				"relative min-h-[80vh] flex items-center justify-center bg-multi-roxo text-white overflow-hidden isolate py-24 md:py-32",
				className,
			)}
		>
			{/* Grain Overlay */}
			<div className="grain" />

			{/* Elementos decorativos tropicais */}
			<div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
				{/* Ramo de café — canto inferior esquerdo */}
				<div
					className={cn(
						"absolute -bottom-10 -left-10 md:bottom-0 md:left-0 w-[200px] md:w-[350px] transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)]",
						isIntersecting ? "opacity-20 scale-100 delay-500" : "opacity-0 scale-90",
					)}
				>
					<Image
						src="/assets/brasilidades/ramo_cafe_v3.png"
						alt=""
						width={350}
						height={350}
						className="w-full h-auto object-contain rotate-15"
						aria-hidden="true"
					/>
				</div>

				{/* Flor hibisco — canto superior direito */}
				<div
					className={cn(
						"absolute -top-8 -right-8 md:top-4 md:right-4 w-[180px] md:w-[300px] transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)]",
						isIntersecting ? "opacity-15 scale-100 delay-700" : "opacity-0 scale-90",
					)}
				>
					<Image
						src="/assets/brasilidades/flor_hibisco_v5.png"
						alt=""
						width={300}
						height={300}
						className="w-full h-auto object-contain -rotate-12"
						aria-hidden="true"
					/>
				</div>

				{/* Pássaros sutis — canto esquerdo superior */}
				<div
					className={cn(
						"absolute top-[15%] left-[5%] md:left-[8%] w-[100px] md:w-[180px] transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)]",
						isIntersecting ? "opacity-20 scale-100 delay-900" : "opacity-0 scale-95",
					)}
				>
					<Image
						src="/assets/brasilidades/passaros_v2.png"
						alt=""
						width={180}
						height={180}
						className="w-full h-auto object-contain"
						aria-hidden="true"
					/>
				</div>
			</div>

			{/* Sol girando — watermark sutil */}
			<div className="absolute right-[-10%] md:right-[-3%] top-1/2 -translate-y-1/2 w-full md:w-[50vw] max-w-[700px] opacity-[0.04] z-0 animate-sol-spin pointer-events-none">
				<svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full text-multi-amarelo">
					<title>Elemento decorativo sol</title>
					<g>
						{Array.from({ length: 18 }).map((_, i) => {
							const id = `cta-ray-${i * 20}`;
							return (
								<path
									key={id}
									d="M100 20L108 80L100 90L92 80L100 20Z"
									transform={`rotate(${i * 20} 100 100)`}
								/>
							);
						})}
						<circle cx="100" cy="100" r="40" />
					</g>
				</svg>
			</div>

			{/* Conteúdo Central */}
			<div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10 text-center">
				{/* Label Editorial */}
				<div
					className={cn(
						"mb-8 opacity-0 transition-all duration-700 ease-out",
						isIntersecting && "opacity-100",
					)}
				>
					<span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-white/40">
						Próximo passo
					</span>
				</div>

				{/* Headline Monumental — escala hero */}
				<h2
					className={cn(
						"font-display text-[clamp(56px,10vw,140px)] text-white leading-[0.9] mb-8 opacity-0 translate-y-8 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
						isIntersecting && "opacity-100 translate-y-0 delay-200",
					)}
				>
					Vamos <span className="text-multi-amarelo">multiplicar</span>
					<br />
					seus resultados?
				</h2>

				{/* Subtítulo */}
				<p
					className={cn(
						"font-poppins text-lead text-white/70 max-w-2xl mx-auto mb-12 md:mb-16 opacity-0 translate-y-6 transition-all duration-800 ease-out",
						isIntersecting && "opacity-100 translate-y-0 delay-400",
					)}
				>
					Seja parceiro de resultados claros com estratégia sem enrolação. Não importa a sua fase, a
					Multi pode te ajudar.
				</p>

				{/* Galeria de autoridade — imagens reais da Multi */}
				<div
					className={cn(
						"flex justify-center gap-3 md:gap-5 mb-14 md:mb-20 opacity-0 translate-y-6 transition-all duration-1000 ease-out",
						isIntersecting && "opacity-100 translate-y-0 delay-500",
					)}
				>
					{[
						{ src: "/assets/multi/feed-1.png", alt: "Post feed Multi BR" },
						{ src: "/assets/multi/feed-2.png", alt: "Post feed Multi BR" },
						{ src: "/assets/multi/feed-3.png", alt: "Post feed Multi BR" },
					].map((img, idx) => (
						<div
							key={img.src}
							className={cn(
								"relative w-[100px] h-[100px] md:w-[140px] md:h-[140px] rounded-lg overflow-hidden border-2 border-white/10 shadow-lg transition-all duration-500 hover:border-multi-amarelo/40 hover:-translate-y-1",
								idx === 1 && "md:w-[160px] md:h-[160px] -mt-4",
							)}
							style={{ transitionDelay: `${600 + idx * 100}ms` }}
						>
							<Image src={img.src} alt={img.alt} fill className="object-cover" sizes="160px" />
						</div>
					))}
				</div>

				{/* CTAs (padrão Hero) */}
				<div
					className={cn(
						"flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 opacity-0 translate-y-4 transition-all duration-700 ease-out",
						isIntersecting && "opacity-100 translate-y-0 delay-700",
					)}
				>
					{/* Primário — WhatsApp */}
					<a
						href="https://wa.me/5500000000000"
						target="_blank"
						rel="noopener noreferrer"
						className="group relative overflow-hidden bg-multi-amarelo text-multi-roxo font-poppins font-bold text-sm md:text-lg px-8 py-4 md:px-10 md:py-5 rounded-sm shadow-xl flex items-center justify-center gap-3"
					>
						<span className="relative z-10 transition-colors duration-300 group-hover:text-white">
							Chamar no WhatsApp
						</span>
						<span className="relative z-10 transition-colors duration-300 group-hover:text-white">
							▶
						</span>
						{/* Radial fill */}
						<div className="absolute inset-0 bg-multi-whatsapp rounded-full transform scale-0 origin-center transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.5]" />
					</a>

					{/* Secundário — Serviços */}
					<a
						href="#servicos"
						className="group relative text-white font-poppins font-semibold text-sm md:text-lg px-8 py-4 md:px-10 md:py-5 rounded-sm border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
					>
						Conheça os serviços
					</a>
				</div>
			</div>
		</section>
	);
}

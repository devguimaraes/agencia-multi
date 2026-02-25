"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const STORIES = [
	{
		src: "/assets/brasilidades/agencia-de-marketing-digital-1.png",
		alt: "Multi BR — Mentoria de Escala",
	},
	{
		src: "/assets/brasilidades/agencia-de-marketing-digital-2.png",
		alt: "Equipe Multi BR em ação",
	},
	{
		src: "/assets/brasilidades/agencia-de-marketing-digital-3.png",
		alt: "Resultados da Mentoria Multi BR",
	},
];

const STORY_DURATION = 4000; // 4 segundos por story

export function MentorshipTeaser({ className }: { className?: string }) {
	const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.12 });
	const [activeStory, setActiveStory] = useState(0);

	const goToNext = useCallback(() => {
		setActiveStory((prev) => (prev + 1) % STORIES.length);
	}, []);

	const goToPrev = useCallback(() => {
		setActiveStory((prev) => (prev - 1 + STORIES.length) % STORIES.length);
	}, []);

	// Auto-advance — só quando visível na tela
	useEffect(() => {
		if (!isIntersecting) return;

		const timer = setTimeout(goToNext, STORY_DURATION);
		return () => clearTimeout(timer);
	}, [isIntersecting, activeStory, goToNext]);
	return (
		<section
			ref={ref}
			className={cn(
				"relative min-h-dvh flex items-center py-12 md:py-16 bg-multi-cream text-multi-black overflow-hidden isolate",
				className,
			)}
		>
			{/* Grain Overlay */}
			<div className="grain low-opacity" />

			{/* Elemento decorativo — Flor Hibisco no canto superior direito */}
			<div
				className={cn(
					"absolute -top-10 -right-10 md:top-0 md:right-0 w-[200px] md:w-[320px] opacity-0 transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-0",
					isIntersecting && "opacity-[0.12] scale-100 delay-700",
					!isIntersecting && "scale-90",
				)}
			>
				<Image
					src="/assets/brasilidades/flor_hibisco_v5.png"
					alt=""
					width={320}
					height={320}
					className="w-full h-auto object-contain rotate-12"
					aria-hidden="true"
				/>
			</div>

			{/* Elemento decorativo — Tucano no canto inferior esquerdo */}
			<div
				className={cn(
					"absolute -bottom-8 -left-6 md:bottom-4 md:left-4 w-[160px] md:w-[240px] opacity-0 transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-0",
					isIntersecting && "opacity-[0.08] scale-100 delay-900",
					!isIntersecting && "scale-90",
				)}
			>
				<Image
					src="/assets/brasilidades/tucano_v3.png"
					alt=""
					width={240}
					height={240}
					className="w-full h-auto object-contain -scale-x-100"
					aria-hidden="true"
				/>
			</div>

			<div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
				{/* Editorial Label */}
				<div
					className={cn(
						"mb-6 md:mb-10 opacity-0 transition-all duration-700 ease-out",
						isIntersecting && "opacity-100",
					)}
				>
					<span className="inline-block px-4 py-1.5 rounded-full border-2 border-multi-rosa bg-multi-rosa/5 text-multi-rosa font-poppins font-bold text-label tracking-[0.2em] uppercase shadow-sm">
						Mentoria
					</span>
				</div>

				<div className="flex flex-col lg:flex-row gap-12 lg:gap-0 items-stretch">
					{/* Esquerda: Texto Editorial */}
					<div
						className={cn(
							"w-full lg:w-[55%] flex flex-col justify-center lg:pr-16 xl:pr-24 opacity-0 translate-y-10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
							isIntersecting && "opacity-100 translate-y-0 delay-200",
						)}
					>
						{/* Headline Dramática */}
						<h2 className="font-display text-[clamp(32px,4.5vw,64px)] leading-[0.95] text-multi-roxo mb-5">
							O que ninguém te conta{" "}
							<span className="text-outline-yellow">antes do 1º cliente.</span>
						</h2>

						{/* Body — copy de conversão */}
						<div className="space-y-3 text-[clamp(14px,1.5vw,18px)] leading-relaxed font-poppins text-multi-black/75">
							<p>
								Abrir uma agência é fácil. Fazer ela{" "}
								<span className="relative inline-block font-semibold text-multi-roxo">
									{/* Marker Amarelo */}
									<span
										className={cn(
											"absolute inset-x-0 bottom-0 h-[40%] bg-multi-amarelo/30 -z-10 origin-left scale-x-0 transition-transform duration-800 ease-out",
											isIntersecting && "scale-x-100 delay-700",
										)}
									/>
									dar lucro de verdade
								</span>{" "}
								é outra história. Proposta comercial, precificação, posicionamento, time — tudo isso
								precisa estar no lugar antes de escalar.
							</p>
							<p>
								Na Mentoria de Escala, você monta a operação que sustenta o crescimento. Sem
								achismo, com método validado por dezenas de agências e social medias.
							</p>
							<p className="text-multi-black/55 italic">
								De social media solo a agência estruturada. Esse é o caminho.
							</p>
						</div>

						{/* CTA com radial fill (padrão Hero) */}
						<div
							className={cn(
								"mt-6 md:mt-8 opacity-0 transition-all duration-800 ease-out",
								isIntersecting && "opacity-100 delay-900",
							)}
						>
							<a
								href="#mentoria"
								className="group relative inline-flex items-center justify-center gap-2 bg-multi-roxo text-white font-poppins font-bold text-sm md:text-base px-8 py-4 md:px-10 md:py-5 overflow-hidden rounded-sm"
							>
								<span className="relative z-10 transition-colors duration-300 group-hover:text-multi-roxo">
									Quero escalar minha agência
								</span>
								<span className="relative z-10 transition-all duration-300 group-hover:text-multi-roxo group-hover:translate-x-1">
									→
								</span>
								{/* Radial fill hover animation */}
								<div className="absolute inset-0 bg-multi-amarelo rounded-full transform scale-0 origin-center transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.5]" />
							</a>
						</div>
					</div>

					{/* Direita: Instagram Stories Player */}
					<div
						className={cn(
							"w-full lg:w-[45%] flex flex-col items-center opacity-0 transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)]",
							isIntersecting && "opacity-100 delay-300",
						)}
					>
						{/* Stories Container — simula tela de celular */}
						<div className="relative w-full max-w-[280px] md:max-w-[320px] aspect-9/16 rounded-3xl overflow-hidden shadow-2xl bg-multi-rosa">
							{/* Imagens — transição fade */}
							{STORIES.map((story, idx) => (
								<div
									key={story.src}
									className={cn(
										"absolute inset-0 transition-opacity duration-500 ease-out",
										activeStory === idx ? "opacity-100 z-10" : "opacity-0 z-0",
									)}
								>
									<Image
										src={story.src}
										alt={story.alt}
										fill
										className="object-contain"
										sizes="380px"
										priority={idx === 0}
									/>
								</div>
							))}

							{/* Gradient top para contraste das barras */}
							<div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-black/50 to-transparent pointer-events-none z-20" />

							{/* Barras de progresso (estilo Instagram) */}
							<div className="absolute top-3 left-3 right-3 flex gap-1.5 z-30">
								{STORIES.map((story, idx) => (
									<div
										key={story.src}
										className="flex-1 h-[3px] rounded-full bg-white/30 overflow-hidden"
									>
										<div
											className={cn(
												"h-full bg-white rounded-full",
												idx < activeStory && "w-full",
												idx > activeStory && "w-0",
												idx === activeStory && "animate-story-progress",
											)}
											style={
												idx === activeStory && isIntersecting
													? {
															animation: `story-fill ${STORY_DURATION}ms linear forwards`,
														}
													: idx < activeStory
														? { width: "100%" }
														: { width: "0%" }
											}
										/>
									</div>
								))}
							</div>

							{/* Header do perfil */}
							<div className="absolute top-8 left-3 right-3 flex items-center gap-2 z-30">
								<div className="w-8 h-8 rounded-full bg-multi-amarelo flex items-center justify-center overflow-hidden">
									<Image
										src="/brand/logo-colorida.png"
										alt="Multi BR"
										width={24}
										height={24}
										className="w-5 h-5 object-contain"
									/>
								</div>
								<span className="font-poppins font-semibold text-white text-xs">multi.br</span>
								<span className="font-poppins text-white/60 text-xs">Agora</span>
							</div>

							{/* Gradient bottom */}
							<div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/40 to-transparent pointer-events-none z-20" />

							{/* Áreas de toque — esquerda volta, direita avança */}
							<button
								type="button"
								onClick={goToPrev}
								className="absolute left-0 top-0 w-1/3 h-full z-40 cursor-pointer"
								aria-label="Story anterior"
							/>
							<button
								type="button"
								onClick={goToNext}
								className="absolute right-0 top-0 w-2/3 h-full z-40 cursor-pointer"
								aria-label="Próximo story"
							/>
						</div>

						{/* Badge abaixo do stories */}
						<div
							className={cn(
								"mt-6 text-center opacity-0 translate-y-4 transition-all duration-700 ease-out",
								isIntersecting && "opacity-100 translate-y-0 delay-1000",
							)}
						>
							<span className="inline-block bg-multi-amarelo text-multi-roxo font-poppins font-bold text-xs md:text-sm px-4 py-2 tracking-wider uppercase rounded-sm shadow-lg">
								Para social medias e agências
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

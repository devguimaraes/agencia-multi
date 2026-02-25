"use client";

import { gsap, useGSAP } from "@/hooks/use-gsap";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * PAGE TRANSITION — PERSPECTIVE SHUTTER (Final Robust Version)
 */
export function PageTransition() {
	const pathname = usePathname();
	const router = useRouter();
	const containerRef = useRef<HTMLDivElement>(null);
	const topPanelRef = useRef<HTMLDivElement>(null);
	const bottomPanelRef = useRef<HTMLDivElement>(null);
	const logoRef = useRef<HTMLDivElement>(null);
	const isTransitioning = useRef(false);
	const isFirstMount = useRef(true);
	const [isRendered, setIsRendered] = useState(false);

	// ═══════════════════════════════════════════
	// RESET DE SEGURANÇA ABSOLUTO
	// ═══════════════════════════════════════════
	useEffect(() => {
		const resetContent = () => {
			gsap.set("#main-content", { 
				clearProps: "all",
				opacity: 1,
				scale: 1,
				visibility: "visible"
			});
		};

		// Reset imediato na troca de rota
		resetContent();
		isTransitioning.current = false;

		// Fallback de limpeza
		const timer = setTimeout(resetContent, 1000);
		
		return () => clearTimeout(timer);
	}, [pathname]);

	// Desativa o bloqueio de primeiro mount APÓS a primeira renderização
	useEffect(() => {
		isFirstMount.current = false;
	}, []);

	// ═══════════════════════════════════════════
	// ANIMAÇÃO DE ENTRADA (REVEAL)
	// ═══════════════════════════════════════════
	useGSAP(
		() => {
			if (!containerRef.current || !topPanelRef.current || !bottomPanelRef.current || !logoRef.current) return;

			// Se for o carregamento inicial do site (F5), garante que está oculto e sai
			if (isFirstMount.current) {
				gsap.set(containerRef.current, { visibility: "hidden", pointerEvents: "none" });
				return;
			}

			// Sincronização: Garante que começamos com painéis FECHADOS (estado final da saída)
			gsap.set([topPanelRef.current, bottomPanelRef.current], { yPercent: 0 });
			gsap.set(logoRef.current, { opacity: 1, scale: 1 });

			const tl = gsap.timeline({
				delay: 0.05, // Delay mínimo para o Next.js
				onStart: () => {
					gsap.set(containerRef.current, { visibility: "visible", opacity: 1 });
				},
				onComplete: () => {
					gsap.set(containerRef.current, {
						visibility: "hidden",
						pointerEvents: "none",
					});
					gsap.set("#main-content", { clearProps: "all" });
					window.dispatchEvent(new CustomEvent("transition:complete"));
				},
			});

			// 1. Logo some
			tl.to(logoRef.current, {
				scale: 0.8,
				opacity: 0,
				duration: 0.3,
				ease: "power2.in",
			});

			// 2. Painéis abrem
			tl.to(
				[topPanelRef.current, bottomPanelRef.current],
				{
					yPercent: (i) => (i === 0 ? -100 : 100),
					duration: 0.6,
					ease: "power4.inOut",
				},
				"-=0.1",
			);

			// 3. Restaura o conteúdo
			tl.to(
				"#main-content",
				{
					scale: 1,
					opacity: 1,
					duration: 0.5,
					ease: "power2.out",
					force3D: true,
				},
				"-=0.4",
			);
		},
		{ dependencies: [pathname] },
	);

	// ═══════════════════════════════════════════
	// INTERCEPTOR DE CLIQUE GLOBAL (SAÍDA)
	// ═══════════════════════════════════════════
	useEffect(() => {
		const handleAnchorClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			const anchor = target.closest("a");

			if (
				anchor?.href?.startsWith(window.location.origin) &&
				!anchor.target &&
				!anchor.hasAttribute("download") &&
				anchor.pathname !== pathname
			) {
				if (anchor.hash && anchor.pathname === pathname) return;
				if (isTransitioning.current) return;

				e.preventDefault();
				isTransitioning.current = true;
				const targetHref = anchor.pathname + anchor.search + anchor.hash;

				// Força visibilidade para a animação de saída
				gsap.set(containerRef.current, {
					visibility: "visible",
					pointerEvents: "all",
					opacity: 1,
				});

				const tl = gsap.timeline();

				// 1. Encolhe conteúdo sutilmente
				tl.to("#main-content", {
					scale: 0.99,
					opacity: 0.9,
					duration: 0.4,
					ease: "power2.inOut",
					force3D: true,
				});

				// 2. Fecha painéis
				tl.to(
					[topPanelRef.current, bottomPanelRef.current],
					{
						yPercent: 0,
						duration: 0.5,
						ease: "power4.inOut",
						onComplete: () => {
							router.push(targetHref);
						},
					},
					"-=0.3",
				);

				// 3. Surge Logo
				tl.fromTo(
					logoRef.current,
					{ scale: 1.2, opacity: 0 },
					{ scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" },
					"-=0.2",
				);
			}
		};

		window.addEventListener("click", handleAnchorClick);
		return () => window.removeEventListener("click", handleAnchorClick);
	}, [pathname, router]);

	useEffect(() => {
		setIsRendered(true);
	}, []);

	if (!isRendered) return null;

	return (
		<div
			ref={containerRef}
			className="fixed inset-0 z-99999 pointer-events-none invisible overflow-hidden isolate"
		>
			<div
				ref={topPanelRef}
				className="absolute inset-x-0 top-0 h-1/2 bg-multi-roxo border-b border-white/5"
				style={{ willChange: "transform" }}
			/>
			<div
				ref={bottomPanelRef}
				className="absolute inset-x-0 bottom-0 h-1/2 bg-multi-roxo border-t border-white/5"
				style={{ willChange: "transform" }}
			/>
			<div
				ref={logoRef}
				className="absolute inset-0 flex items-center justify-center z-10 opacity-0"
				style={{ willChange: "transform, opacity" }}
			>
				<Image
					src="/brand/logo-branca.png"
					alt="Multi"
					width={240}
					height={80}
					className="w-[180px] md:w-[240px] h-auto object-contain drop-shadow-2xl"
					priority
				/>
			</div>
			<div className="absolute inset-0 grain opacity-[0.04] pointer-events-none z-20" />
		</div>
	);
}

"use client";

import { gsap } from "@/hooks/use-gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Loader cinematográfico com GSAP master timeline.
 *
 * Fluxo:
 * 1. BUILD — Logo surge com scale spring, counter anima 0→100
 * 2. EXIT — Logo implode, painéis split-curtain deslizam com stagger
 * 3. DONE — Unmount + dispatch evento "loader:complete" para Hero
 */
export function Loader() {
	const [phase, setPhase] = useState<"build" | "exit" | "done">("build");
	const containerRef = useRef<HTMLDivElement>(null);
	const counterRef = useRef<HTMLSpanElement>(null);
	const logoRef = useRef<HTMLDivElement>(null);
	const topPanelRef = useRef<HTMLDivElement>(null);
	const bottomPanelRef = useRef<HTMLDivElement>(null);
	const lineRef = useRef<HTMLDivElement>(null);
	const hasStarted = useRef(false);

	// Bloqueia scroll durante o loader
	useEffect(() => {
		if (phase !== "done") {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
	}, [phase]);

	// Master timeline GSAP
	useEffect(() => {
		if (hasStarted.current) return;
		hasStarted.current = true;

		const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		// Se reduced motion, pula loader inteiro
		if (prefersReducedMotion) {
			setPhase("done");
			window.dispatchEvent(new CustomEvent("loader:complete"));
			return;
		}

		const counterObj = { value: 0 };
		const counterEl = counterRef.current;
		const logoEl = logoRef.current;
		const topPanel = topPanelRef.current;
		const bottomPanel = bottomPanelRef.current;
		const lineEl = lineRef.current;

		if (!counterEl || !logoEl || !topPanel || !bottomPanel || !lineEl) return;

		// ═══════════════════════════════════════════
		// FASE 1: BUILD (1.2s)
		// ═══════════════════════════════════════════
		const buildTl = gsap.timeline({
			defaults: { ease: "power3.out" },
		});

		// Logo entra com spring scale
		buildTl.fromTo(
			logoEl,
			{
				scale: 0,
				rotation: -180,
				opacity: 0,
			},
			{
				scale: 1,
				rotation: 0,
				opacity: 1,
				duration: 0.9,
				ease: "back.out(1.7)",
			},
			0,
		);

		// Linha de progresso preenche
		buildTl.fromTo(
			lineEl,
			{ scaleX: 0 },
			{
				scaleX: 1,
				duration: 1.1,
				ease: "power2.inOut",
			},
			0.1,
		);

		// Counter anima 0 → 100
		buildTl.to(
			counterObj,
			{
				value: 100,
				duration: 1.1,
				ease: "power2.inOut",
				onUpdate: () => {
					counterEl.textContent = `${Math.floor(counterObj.value).toString().padStart(2, "0")}`;
				},
			},
			0.1,
		);

		// ═══════════════════════════════════════════
		// FASE 2: EXIT (0.7s após BUILD)
		// ═══════════════════════════════════════════
		const exitTl = gsap.timeline({
			delay: 0.2, // Pausa entre build e exit
			onStart: () => setPhase("exit"),
			onComplete: () => {
				setPhase("done");
				window.dispatchEvent(new CustomEvent("loader:complete"));
			},
		});

		// Logo implode + spinner
		exitTl.to(logoEl, {
			scale: 0.3,
			rotation: 180,
			opacity: 0,
			duration: 0.4,
			ease: "power3.in",
		});

		// Counter e linha somem
		exitTl.to(
			[counterEl, lineEl],
			{
				opacity: 0,
				duration: 0.2,
				ease: "power2.in",
			},
			"<",
		);

		// Painéis split-curtain com stagger
		exitTl.to(
			topPanel,
			{
				yPercent: -100,
				duration: 0.6,
				ease: "power4.inOut",
				onStart: () => {
					window.dispatchEvent(new CustomEvent("loader:start-exit"));
				},
			},
			"-=0.1",
		);

		exitTl.to(
			bottomPanel,
			{
				yPercent: 100,
				duration: 0.6,
				ease: "power4.inOut",
			},
			"<0.05", // 50ms stagger — painel de baixo atrasa levemente
		);

		// Master: build → exit
		const master = gsap.timeline();
		master.add(buildTl);
		master.add(exitTl);

		return () => {
			master.kill();
		};
	}, []);

	if (phase === "done") return null;

	return (
		<div
			ref={containerRef}
			className="fixed inset-0 z-99999 flex items-center justify-center isolate"
		>
			{/* Painel superior */}
			<div
				ref={topPanelRef}
				className="absolute inset-x-0 top-0 h-1/2 bg-multi-roxo will-change-transform"
			/>
			{/* Painel inferior */}
			<div
				ref={bottomPanelRef}
				className="absolute inset-x-0 bottom-0 h-1/2 bg-multi-roxo will-change-transform"
			/>

			{/* Grain */}
			<div className="grain" style={{ opacity: phase === "exit" ? 0 : 0.05 }} aria-hidden="true" />

			{/* Logo central */}
			<div ref={logoRef} className="relative z-10 will-change-transform" style={{ opacity: 0 }}>
				<Image
					src="/brand/logo-branca.png"
					alt="Multi BR"
					width={180}
					height={60}
					priority
					className="w-[140px] md:w-[180px] h-auto object-contain drop-shadow-[0_4px_20px_rgba(250,195,42,0.3)]"
				/>
			</div>

			{/* Barra de progresso */}
			<div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
				{/* Linha de progresso */}
				<div className="w-[120px] md:w-[160px] h-[2px] bg-white/15 rounded-full overflow-hidden">
					<div
						ref={lineRef}
						className="h-full bg-multi-amarelo rounded-full origin-left will-change-transform"
						style={{ transform: "scaleX(0)" }}
					/>
				</div>
				{/* Counter */}
				<span
					ref={counterRef}
					className="text-multi-amarelo/60 font-poppins font-bold text-label tracking-[0.4em] tabular-nums"
				>
					00
				</span>
			</div>
		</div>
	);
}

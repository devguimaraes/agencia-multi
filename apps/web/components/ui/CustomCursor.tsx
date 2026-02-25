"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
	const cursorRef = useRef<HTMLDivElement>(null);
	const trailRef = useRef<HTMLDivElement>(null);

	const [isDesktop, setIsDesktop] = useState(true);

	useEffect(() => {
		// Only run on non-touch devices
		if (window.matchMedia("(pointer: coarse)").matches) {
			setIsDesktop(false);
			return;
		}

		let cx = window.innerWidth / 2;
		let cy = window.innerHeight / 2;
		let tx = cx;
		let ty = cy;

		const handleMouseMove = (e: MouseEvent) => {
			tx = e.clientX;
			ty = e.clientY;
		};

		document.addEventListener("mousemove", handleMouseMove);

		let animationFrameId: number;

		const tick = () => {
			// lerp factor - inércia do trail descrita no briefing
			cx += (tx - cx) * 0.12;
			cy += (ty - cy) * 0.12;

			if (cursorRef.current && trailRef.current) {
				cursorRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0) translate(-50%, -50%)`;
				trailRef.current.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
			}

			animationFrameId = requestAnimationFrame(tick);
		};

		tick();

		// Interações de hover contextuais
		const handleMouseOver = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			if (!cursorRef.current || !trailRef.current) return;

			// Links, Buttons (Aumenta o tamanho)
			if (target.closest("a") || target.closest("button")) {
				cursorRef.current.style.width = "18px";
				cursorRef.current.style.height = "18px";
				trailRef.current.style.width = "64px";
				trailRef.current.style.height = "64px";
				trailRef.current.style.borderColor = "var(--color-multi-amarelo)";
				trailRef.current.style.background = "rgba(250, 195, 42, 0.1)";

				// CTA Amarelo Inverte
				if (target.closest(".bg-multi-amarelo")) {
					cursorRef.current.style.background = "var(--color-multi-roxo)";
				}
			} else if (target.closest(".collage-element")) {
				// SVG Text Ring (Simplificado para MVP com escala)
				cursorRef.current.style.width = "40px";
				cursorRef.current.style.height = "40px";
				trailRef.current.style.width = "80px";
				trailRef.current.style.height = "80px";
			} else {
				// Reset
				cursorRef.current.style.width = "10px";
				cursorRef.current.style.height = "10px";
				cursorRef.current.style.background = "var(--color-multi-amarelo)";
				trailRef.current.style.width = "44px";
				trailRef.current.style.height = "44px";
				trailRef.current.style.borderColor = "rgba(250, 195, 42, 0.3)";
				trailRef.current.style.background = "transparent";
			}
		};

		document.addEventListener("mouseover", handleMouseOver);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseover", handleMouseOver);
			cancelAnimationFrame(animationFrameId);
		};
	}, []);

	if (!isDesktop) return null;

	return (
		<>
			<div
				ref={cursorRef}
				className="pointer-events-none fixed left-0 top-0 z-[9999] h-[10px] w-[10px] rounded-full bg-multi-amarelo mix-blend-difference transition-[width,height,background-color] duration-300 ease-out"
				aria-hidden="true"
			/>
			<div
				ref={trailRef}
				className="pointer-events-none fixed left-0 top-0 z-[9998] h-[44px] w-[44px] rounded-full border-[1.5px] border-multi-amarelo/30 transition-[width,height,border-color,background-color] duration-300 ease-out"
				aria-hidden="true"
			/>
		</>
	);
}

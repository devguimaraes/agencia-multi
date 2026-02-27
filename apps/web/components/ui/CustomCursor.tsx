"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
	const cursorRef = useRef<HTMLDivElement>(null);
	const trailRef = useRef<HTMLDivElement>(null);

	const [isDesktop, setIsDesktop] = useState(true);

	const [cursorText, setCursorText] = useState("");

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
			const target =
				((e.target as HTMLElement).closest("[data-cursor-text]") as HTMLElement) ||
				((e.target as HTMLElement).closest("a, button") as HTMLElement);
			if (!cursorRef.current || !trailRef.current) return;

			const hasText = target?.getAttribute("data-cursor-text");

			// Links, Buttons (Aumenta o tamanho)
			if (
				target?.tagName === "A" ||
				target?.tagName === "BUTTON" ||
				target?.closest("a") ||
				target?.closest("button")
			) {
				if (hasText) {
					setCursorText(hasText);
					cursorRef.current.style.width = "80px";
					cursorRef.current.style.height = "80px";
					cursorRef.current.style.background = "var(--color-multi-amarelo)";
					cursorRef.current.style.mixBlendMode = "normal";

					trailRef.current.style.opacity = "0";
				} else {
					setCursorText("");
					cursorRef.current.style.width = "18px";
					cursorRef.current.style.height = "18px";
					cursorRef.current.style.background = "var(--color-multi-amarelo)";
					cursorRef.current.style.mixBlendMode = "difference";

					trailRef.current.style.opacity = "1";
					trailRef.current.style.width = "64px";
					trailRef.current.style.height = "64px";
					trailRef.current.style.borderColor = "var(--color-multi-amarelo)";
					trailRef.current.style.background = "rgba(250, 195, 42, 0.1)";

					// CTA Amarelo Inverte
					if (target.closest(".bg-multi-amarelo")) {
						cursorRef.current.style.background = "var(--color-multi-roxo)";
					}
				}
			} else {
				// Reset
				setCursorText("");
				cursorRef.current.style.width = "10px";
				cursorRef.current.style.height = "10px";
				cursorRef.current.style.background = "var(--color-multi-amarelo)";
				cursorRef.current.style.mixBlendMode = "difference";
				trailRef.current.style.width = "44px";
				trailRef.current.style.height = "44px";
				trailRef.current.style.opacity = "1";
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
				className="pointer-events-none fixed left-0 top-0 z-[9999] h-[10px] w-[10px] rounded-full bg-multi-amarelo mix-blend-difference transition-[width,height,background-color,opacity] duration-300 ease-out flex items-center justify-center overflow-hidden"
				aria-hidden="true"
			>
				{cursorText && (
					<div className="relative w-full h-full animate-spin-slow flex items-center justify-center">
						<svg viewBox="0 0 100 100" className="w-[140%] h-[140%]">
							<path
								id="cursorPath"
								d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
								fill="none"
							/>
							<text className="fill-multi-roxo font-poppins font-bold text-[10px] uppercase tracking-[2px]">
								<textPath xlinkHref="#cursorPath">
									{cursorText} • {cursorText} • {cursorText} •
								</textPath>
							</text>
						</svg>
					</div>
				)}
			</div>
			<div
				ref={trailRef}
				className="pointer-events-none fixed left-0 top-0 z-[9998] h-[44px] w-[44px] rounded-full border-[1.5px] border-multi-amarelo/30 transition-[width,height,border-color,background-color,opacity] duration-300 ease-out"
				aria-hidden="true"
			/>
		</>
	);
}

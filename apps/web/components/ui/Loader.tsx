"use client";

import { useEffect, useRef, useState } from "react";

export function Loader() {
	const [count, setCount] = useState(0);
	const [phase, setPhase] = useState<"build" | "exit" | "done">("build");
	const hasStarted = useRef(false);

	useEffect(() => {
		// Impede scroll durante o loading
		if (phase !== "done") {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
	}, [phase]);

	useEffect(() => {
		if (hasStarted.current) return;
		hasStarted.current = true;

		// Counter animates from 0 to 100 within 0.8s
		const duration = 800; // 0.8s build phase
		const start = performance.now();

		let frameId: number;

		const updateCounter = (now: number) => {
			const progress = Math.min((now - start) / duration, 1);
			setCount(Math.floor(progress * 100));

			if (progress < 1) {
				frameId = requestAnimationFrame(updateCounter);
			} else {
				// Once 100 is reached, wait slightly and transition to 'exit' phase
				setTimeout(() => setPhase("exit"), 200); // Trigger split curtain
			}
		};

		frameId = requestAnimationFrame(updateCounter);

		return () => cancelAnimationFrame(frameId);
	}, []);

	useEffect(() => {
		if (phase === "exit") {
			// After split animation finishes (0.5s), unmount completely
			const timer = setTimeout(() => {
				setPhase("done");
			}, 600); // Wait for the split animation to hide
			return () => clearTimeout(timer);
		}
	}, [phase]);

	if (phase === "done") return null;

	return (
		<div className="fixed inset-0 z-[99999] flex items-center justify-center isolate pointer-events-none">
			{/* Painéis do Curtain Split */}
			<div
				className={`absolute inset-x-0 top-0 h-1/2 bg-multi-roxo transition-transform duration-500 will-change-transform ease-[cubic-bezier(0.16,1,0.3,1)] ${
					phase === "exit" ? "-translate-y-full" : "translate-y-0"
				}`}
			/>
			<div
				className={`absolute inset-x-0 bottom-0 h-1/2 bg-multi-roxo transition-transform duration-500 will-change-transform ease-[cubic-bezier(0.16,1,0.3,1)] ${
					phase === "exit" ? "translate-y-full" : "translate-y-0"
				}`}
			/>

			{/* Noise base no loader */}
			<div
				className={`grain transition-opacity duration-300 ${phase === "exit" ? "opacity-0" : "opacity-100"}`}
				style={{ opacity: phase === "exit" ? 0 : 0.05 }}
			/>

			{/* Sol Central */}
			<div
				className={`relative z-10 transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] will-change-transform ${
					phase === "build" ? "scale-100 rotate-0 opacity-100" : "scale-0 opacity-0"
				}`}
				style={{
					transform: phase === "build" ? "scale(1) rotate(0deg)" : "scale(0.2) rotate(-180deg)",
				}}
			>
				<svg
					width="120"
					height="120"
					viewBox="0 0 200 200"
					fill="none"
					className="text-multi-amarelo"
					xmlns="http://www.w3.org/2000/svg"
				>
					{/* Placeholder Sol SVG path (to be matched exactly if they have specific one) */}
					<title>Carregando...</title>
					<g opacity="0.9">
						{Array.from({ length: 18 }).map((_, i) => {
							const rotationKey = `ray-${i * 20}`;
							return (
								<path
									key={rotationKey}
									d="M100 20L108 80L100 90L92 80L100 20Z"
									fill="currentColor"
									transform={`rotate(${i * 20} 100 100)`}
								/>
							);
						})}
						<circle cx="100" cy="100" r="40" fill="currentColor" />
					</g>
				</svg>
			</div>

			{/* Counter */}
			<div
				className={`absolute bottom-8 right-8 text-[#fac32a] font-bold text-[11px] uppercase tracking-[0.3em] transition-opacity duration-300 ${
					phase === "build" ? "opacity-50" : "opacity-0"
				}`}
			>
				{count.toString().padStart(2, "0")}%
			</div>
		</div>
	);
}

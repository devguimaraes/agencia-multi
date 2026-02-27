"use client";

import { gsap, useGSAP } from "@/hooks/use-gsap";
import { useRef } from "react";

/**
 * SCROLL PROGRESS BAR
 *
 * Uma linha sutil no topo da página que preenche conforme o usuário rola.
 */
export function ScrollProgress() {
	const barRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		if (!barRef.current) return;

		gsap.to(barRef.current, {
			scaleX: 1,
			ease: "none",
			scrollTrigger: {
				trigger: document.documentElement,
				start: "top top",
				end: "bottom bottom",
				scrub: 0.3,
			},
		});
	}, []);

	return (
		<div className="fixed top-0 left-0 right-0 h-[3px] z-99999 pointer-events-none origin-left">
			<div
				ref={barRef}
				className="h-full w-full bg-linear-to-r from-multi-rosa via-multi-amarelo to-multi-rosa scale-x-0"
			/>
		</div>
	);
}

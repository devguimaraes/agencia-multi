"use client";

import { gsap } from "@/hooks/use-gsap";
import type React from "react";
import { useEffect, useRef } from "react";

interface MagneticProps {
	children: React.ReactElement;
	strength?: number; // 0.1 a 1.0 (força do puxão)
	radius?: number; // área de ativação em pixels
}

/**
 * MAGNETIC WRAPPER
 *
 * Um componente que faz o elemento filho (ex: botão) seguir o cursor sutilmente
 * quando o mouse está sobre ele ou muito próximo. Padrão Dennis Snellenberg.
 */
export function Magnetic({ children, strength = 0.5, radius = 40 }: MagneticProps) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		// Acessa o elemento interno (o botão real)
		const child = el.children[0] as HTMLElement;
		if (!child) return;

		const xTo = gsap.quickTo(child, "x", {
			duration: 1,
			ease: "elastic.out(1, 0.3)",
		});
		const yTo = gsap.quickTo(child, "y", {
			duration: 1,
			ease: "elastic.out(1, 0.3)",
		});

		const handleMouseMove = (e: MouseEvent) => {
			const { clientX, clientY } = e;
			const { left, top, width, height } = el.getBoundingClientRect();

			const center = {
				x: left + width / 2,
				y: top + height / 2,
			};

			const distance = {
				x: clientX - center.x,
				y: clientY - center.y,
			};

			// Calcula a distância real do cursor ao centro do elemento
			const dist = Math.sqrt(distance.x ** 2 + distance.y ** 2);

			// Se o mouse estiver dentro do raio ou diretamente sobre o elemento
			if (dist < radius + width / 2) {
				xTo(distance.x * strength);
				yTo(distance.y * strength);
			} else {
				xTo(0);
				yTo(0);
			}
		};

		const handleMouseLeave = () => {
			xTo(0);
			yTo(0);
		};

		el.addEventListener("mousemove", handleMouseMove);
		el.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			el.removeEventListener("mousemove", handleMouseMove);
			el.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, [strength, radius]);

	// Clone o filho para injetar a classe de cursor interativo caso necessário
	// mas aqui o wrapper já serve para capturar o evento.
	return (
		<div ref={ref} className="inline-block">
			{children}
		</div>
	);
}

"use client";

import dynamic from "next/dynamic";

const HeroBackground = dynamic(
	() => import("@/components/three/HeroBackground").then((mod) => mod.HeroBackground),
	{ ssr: false },
);

/**
 * Wrapper reutilizável do HeroBackground (Three.js shader animado).
 * Usar como primeiro filho de qualquer seção hero com fundo escuro.
 * Requer que a seção pai tenha `position: relative` e `overflow-hidden`.
 */
export function HeroPageBackground() {
	return <HeroBackground />;
}

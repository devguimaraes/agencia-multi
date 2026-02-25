"use client";

import { useGSAP as useGSAPCore } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrar plugins uma única vez (idempotente)
if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

/**
 * Re-exporta useGSAP do @gsap/react com ScrollTrigger já registrado.
 *
 * Uso:
 * ```tsx
 * useGSAP((self) => {
 *   gsap.from(".titulo", { y: 40, opacity: 0, duration: 1 });
 * }, { scope: containerRef });
 * ```
 *
 * Cleanup automático: todas as animações são revertidas no unmount.
 */
export { useGSAPCore as useGSAP };
export { gsap, ScrollTrigger };

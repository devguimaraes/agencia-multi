"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
} from "react";

const LenisContext = createContext<Lenis | null>(null);

/** Acesso ao Lenis instance em qualquer componente filho */
export function useLenis() {
  return useContext(LenisContext);
}

/**
 * Provider de smooth scroll usando Lenis.
 * Respeita `prefers-reduced-motion` automaticamente.
 *
 * Wrapa o `<body>` children no layout.tsx.
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Respeitando acessibilidade: sem smooth scroll quando reduzido
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;

    let rafId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Reset scroll on path change
  const pathname = usePathname();
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    // We reference pathname here to satisfy the lint that it's a necessary trigger dependency
    const _path = pathname;
  }, [pathname]);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  );
}

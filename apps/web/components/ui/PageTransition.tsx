"use client";

import { gsap } from "@/hooks/use-gsap";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * PAGE TRANSITION — PERSPECTIVE SHUTTER
 *
 * Efeito premium onde a página encolhe (perspectiva) enquanto painéis
 * superior e inferior fecham a tela, revelando a logo no centro.
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
  // ANIMAÇÃO DE ENTRADA (REVEAL) — Dispara no Pathname change
  // ═══════════════════════════════════════════
  useEffect(() => {
    if (
      !containerRef.current ||
      !topPanelRef.current ||
      !bottomPanelRef.current ||
      !logoRef.current
    )
      return;

    if (isFirstMount.current) {
      isFirstMount.current = false;
      gsap.set(containerRef.current, { visibility: "hidden" });
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(containerRef.current, {
          visibility: "hidden",
          pointerEvents: "none",
        });
        isTransitioning.current = false;
        window.dispatchEvent(new CustomEvent("transition:complete"));
      },
    });

    // 1. Logo some primeiro
    tl.to(logoRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
    });

    // 2. Shutter abre
    tl.to(
      topPanelRef.current,
      {
        yPercent: -100,
        duration: 0.7,
        ease: "power4.inOut",
      },
      "-=0.2",
    );

    tl.to(
      bottomPanelRef.current,
      {
        yPercent: 100,
        duration: 0.7,
        ease: "power4.inOut",
      },
      "<",
    );

    // 3. Página volta ao normal (scale 1)
    tl.to(
      "#main-content",
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5",
    );

    return () => {
      tl.kill();
    };
  }, [pathname]);

  // ═══════════════════════════════════════════
  // INTERCEPTOR DE CLIQUE GLOBAL
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

        // Inicia animação de SAÍDA
        gsap.set(containerRef.current, {
          visibility: "visible",
          pointerEvents: "all",
        });

        const tl = gsap.timeline({
          onComplete: () => router.push(targetHref),
        });

        // 1. Página encolhe
        tl.to("#main-content", {
          scale: 0.94,
          opacity: 0.5,
          duration: 0.6,
          ease: "power2.inOut",
        });

        // 2. Shutter fecha
        tl.fromTo(
          topPanelRef.current,
          { yPercent: -100 },
          { yPercent: 0, duration: 0.6, ease: "power4.inOut" },
          "-=0.4",
        );

        tl.fromTo(
          bottomPanelRef.current,
          { yPercent: 100 },
          { yPercent: 0, duration: 0.6, ease: "power4.inOut" },
          "<",
        );

        // 3. Logo surge no centro
        tl.fromTo(
          logoRef.current,
          { scale: 1.2, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
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
      {/* Top Shutter */}
      <div
        ref={topPanelRef}
        className="absolute inset-x-0 top-0 h-1/2 bg-multi-roxo border-b border-white/5 will-change-transform"
      />

      {/* Bottom Shutter */}
      <div
        ref={bottomPanelRef}
        className="absolute inset-x-0 bottom-0 h-1/2 bg-multi-roxo border-t border-white/5 will-change-transform"
      />

      {/* Logo Container */}
      <div
        ref={logoRef}
        className="absolute inset-0 flex items-center justify-center z-10 opacity-0"
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

      {/* Grain Overlay */}
      <div className="absolute inset-0 grain opacity-[0.04] pointer-events-none z-20" />
    </div>
  );
}

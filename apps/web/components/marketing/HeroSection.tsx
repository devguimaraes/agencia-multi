"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect } from "react";

export function HeroSection({ className }: { className?: string }) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  // Mousemove Parallax Logic
  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    // Only activate parallax on desktop to avoid mobile jank
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let animationFrameId: number;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;

    const handleMouseMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const elements = container.querySelectorAll<HTMLElement>("[data-parallax]");
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    const tick = () => {
      const dx = (tx - cx) / cx; // -1 to 1
      const dy = (ty - cy) / cy;

      for (const el of elements) {
        const factor = Number.parseFloat(
          el.getAttribute("data-parallax") || "0",
        );
        // Smooth translate without lerp here as it's directly tied to mouse event rate
        el.style.transform = `translate3d(${dx * factor * 100}px, ${dy * factor * 60}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={ref}
      className={cn(
        "relative overflow-hidden bg-multi-roxo w-full h-svh flex items-center justify-center isolate",
        className,
        isIntersecting ? "is-visible" : "",
      )}
    >
      {/* Watermark do sol girando no background */}
      <div className="absolute right-[-15%] md:right-[-5%] top-1/2 -translate-y-1/2 w-[120vw] md:w-[60vw] max-w-[800px] opacity-[0.07] z-0 animate-sol-spin pointer-events-none">
        <svg
          viewBox="0 0 200 200"
          fill="currentColor"
          className="w-full h-full text-multi-amarelo"
        >
          <title>Logo Sol Girando background</title>
          <g>
            {Array.from({ length: 18 }).map((_, i) => {
              const rotationId = `hero-ray-${i * 20}`;
              return (
                <path
                  key={rotationId}
                  d="M100 20L108 80L100 90L92 80L100 20Z"
                  transform={`rotate(${i * 20} 100 100)`}
                />
              );
            })}
            <circle cx="100" cy="100" r="40" />
          </g>
        </svg>
      </div>

      {/* Collage Elements com Parallax */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Elemento A (Top-Right): Beija-flor */}
        <div
          data-parallax="0.04"
          className={cn(
            "absolute right-[2%] top-[10%] md:top-[5%] w-[180px] md:w-[35vw] max-w-[480px] mix-blend-multiply transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-800",
            isIntersecting ? "opacity-100 scale-100" : "opacity-0 scale-95",
          )}
        >
          <Image
            src="/assets/brasilidades/hero_beijaflor.png"
            alt=""
            width={480}
            height={480}
            className="w-full h-auto object-contain collage-element"
            aria-hidden="true"
            priority
          />
        </div>

        {/* Elemento B (Bottom-Right): Folha */}
        <div
          data-parallax="0.07"
          className={cn(
            "absolute right-0 bottom-[-5%] md:bottom-0 w-[150px] md:w-[25vw] max-w-[320px] mix-blend-multiply transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-950",
            isIntersecting ? "opacity-100 scale-100" : "opacity-0 scale-95",
          )}
        >
          <Image
            src="/assets/brasilidades/hero_folha.png"
            alt=""
            width={320}
            height={320}
            className="w-full h-auto object-contain collage-element"
            aria-hidden="true"
            priority
          />
        </div>

        {/* Elemento C (Left): Tucano Pequeno Decorativo */}
        <div
          data-parallax="0.02"
          className={cn(
            "absolute left-[2%] top-[20%] w-[80px] md:w-[10vw] max-w-[120px] mix-blend-screen transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-1100",
            isIntersecting ? "opacity-60 scale-100" : "opacity-0 scale-95",
          )}
        >
          <Image
            src="/assets/brasilidades/hero_tucano.png"
            alt=""
            width={200}
            height={200}
            className="w-full h-auto object-contain collage-element"
            aria-hidden="true"
            priority
          />
        </div>
      </div>

      {/* Conteúdo Principal (Texto) */}
      {/* Atributo auxiliar para acionar animações baseado no isIntersecting via CSS selectors locais */}
      <div
        className="w-full h-full relative z-20 pointer-events-none"
        data-intersecting={isIntersecting}
      >
        {/* Slogan Top Right */}
        <div className="absolute top-[100px] md:top-[120px] right-[4vw] md:right-[6vw] font-poppins font-bold text-[9px] md:text-[clamp(12px,1.2vw,16px)] tracking-[0.25em] text-white/70 uppercase">
          <div
            className="overflow-hidden"
            style={{
              clipPath: isIntersecting ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
              transition: "clip-path 1s cubic-bezier(0.16,1,0.3,1) 0.3s",
            }}
          >
            BRANDING{" "}
            <span className="inline-block w-[0.9em] text-multi-amarelo">✹</span>{" "}
            CONTEÚDO{" "}
            <span className="inline-block w-[0.9em] text-multi-amarelo">✹</span>{" "}
            TRÁFEGO
          </div>
        </div>

        {/* Bloco Bottom Left */}
        <div className="absolute bottom-[10%] md:bottom-[15%] left-[4vw] w-full max-w-[90vw]">
          {/* Título GIGANTE */}
          <h1 className="font-display text-[var(--text-hero)] text-multi-amarelo leading-[0.88] tracking-[-0.02em] lowercase m-0 p-0">
            <span className="split-line">
              <span style={{ transitionDelay: "0.00s" }}>m</span>
            </span>
            <span className="split-line -ml-[2%]">
              <span style={{ transitionDelay: "0.065s" }}>u</span>
            </span>
            <span className="split-line -ml-[2%]">
              <span style={{ transitionDelay: "0.130s" }}>l</span>
            </span>
            <span className="split-line -ml-[2%]">
              <span style={{ transitionDelay: "0.195s" }}>t</span>
            </span>
            <span className="split-line -ml-[2%]">
              <span style={{ transitionDelay: "0.260s" }}>i</span>
            </span>
          </h1>

          {/* Subtítulo */}
          <div
            className={`mt-4 font-poppins font-normal text-white text-base md:text-[clamp(16px,1.8vw,22px)] max-w-[460px] transition-all duration-700 ease-out ${
              isIntersecting
                ? "opacity-100 translate-y-0 delay-500"
                : "opacity-0 translate-y-5"
            }`}
          >
            Estratégia digital sem enrolação.
          </div>

          {/* Botões CTA */}
          <div
            className={`mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 pointer-events-auto transition-all duration-700 ease-out ${
              isIntersecting
                ? "opacity-100 translate-y-0 delay-700"
                : "opacity-0 translate-y-4"
            }`}
          >
            {/* Primário Amarelo com HoverSweep */}
            <a
              href="#contato"
              className="group relative overflow-hidden bg-multi-amarelo text-multi-roxo font-poppins font-bold text-sm md:text-base px-9 py-4 rounded-md border-none flex items-center justify-center gap-2"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Vamos conversar?
              </span>
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white group-hover:translate-x-1">
                ▶
              </span>
              <div className="absolute inset-0 bg-multi-rosa rounded-full transform scale-0 origin-center transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.5]" />
            </a>

            {/* Secundário Outline Animado */}
            <a
              href="#servicos"
              className="group relative bg-transparent text-white font-poppins font-normal text-sm md:text-base px-9 py-4 rounded-md border-[1.5px] border-white/50 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              Conheça os serviços →
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
          <span className="font-poppins font-normal text-[10px] uppercase tracking-[0.3em] text-white/40">
            Scroll
          </span>
          <div className="text-white/40 text-[10px] animate-bounce">↓</div>
        </div>
      </div>
    </section>
  );
}

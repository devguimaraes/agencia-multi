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

      {/* Elementos da Colagem (Parallax) */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden mix-blend-normal">
        {/* 1. Rio (Fundo Direita/Baixo) */}
        <div
          data-parallax="0.02"
          className={cn(
            "absolute right-[-5%] bottom-[-5%] w-[300px] md:w-[45vw] max-w-[600px] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-500",
            isIntersecting ? "opacity-40 scale-100" : "opacity-0 scale-95",
          )}
        >
          <Image
            src="/assets/brasilidades/rio.png"
            alt="Rio de Janeiro Decorativo"
            width={600}
            height={600}
            className="w-full h-auto object-contain drop-shadow-lg"
            aria-hidden="true"
            priority
          />
        </div>

        {/* 2. Pássaros (Esquerda/Cima) */}
        <div
          data-parallax="0.06"
          className={cn(
            "absolute left-[5%] md:left-[10%] top-[10%] md:top-[15%] w-[120px] md:w-[20vw] max-w-[250px] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-600",
            isIntersecting ? "opacity-80 scale-100" : "opacity-0 scale-95",
          )}
        >
          <Image
            src="/assets/brasilidades/passaros_v2.png"
            alt="Pássaros voando"
            width={250}
            height={250}
            className="w-full h-auto object-contain drop-shadow-xl"
            aria-hidden="true"
            priority
          />
        </div>

        {/* 3. Folhas Gigantes (Esquerda/Baixo) */}
        <div
          data-parallax="0.05"
          className={cn(
            "absolute left-[-5%] bottom-[-5%] md:bottom-0 w-[200px] md:w-[35vw] max-w-[450px] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-700",
            isIntersecting ? "opacity-100 scale-100" : "opacity-0 scale-95",
          )}
        >
          <Image
            src="/assets/brasilidades/folhas_v2.png"
            alt="Folha decorativa"
            width={450}
            height={450}
            className="w-full h-auto object-contain drop-shadow-2xl"
            aria-hidden="true"
            priority
          />
        </div>

        {/* 4. Caju (Direita/Cima) */}
        <div
          data-parallax="0.08"
          className={cn(
            "absolute right-[-2%] top-[5%] md:top-[10%] w-[150px] md:w-[22vw] max-w-[300px] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-900",
            isIntersecting ? "opacity-100 scale-100" : "opacity-0 scale-95",
          )}
        >
          <Image
            src="/assets/brasilidades/caju_v2.png"
            alt="Caju decorativo"
            width={300}
            height={300}
            className="w-full h-auto object-contain drop-shadow-2xl transform -rotate-12"
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
        {/* Conteúdo Central */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4 flex flex-col items-center text-center">
          {/* Logo da Multi Centralizada */}
          <div
            className={cn(
              "mb-8 opacity-0 scale-95 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300",
              isIntersecting && "opacity-100 scale-100",
            )}
          >
            <Image
              src="/brand/logomarca-preta.png"
              alt="Agência Multi BR Logo"
              width={420}
              height={140}
              priority
              className="w-full max-w-[240px] md:max-w-[320px] lg:max-w-[420px] h-auto object-contain brightness-0 invert drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
            />
          </div>

          {/* Slogan Top Row */}
          <h1 className="font-balgin text-[clamp(16px,2vw,28px)] text-white uppercase leading-none tracking-normal flex items-center justify-center gap-2 sm:gap-4 whitespace-nowrap drop-shadow-md opacity-0 animate-slide-up stagger-2">
            <span
              className={cn(
                "transition-all duration-700 ease-out",
                isIntersecting
                  ? "opacity-100 translate-y-0 delay-500"
                  : "opacity-0 translate-y-5",
              )}
            >
              Branding
            </span>
            <span
              className={cn(
                "text-multi-amarelo transition-all duration-700 ease-out",
                isIntersecting
                  ? "opacity-100 translate-y-0 delay-600"
                  : "opacity-0 translate-y-5",
              )}
            >
              ✹ Conteúdo ✹
            </span>
            <span
              className={cn(
                "transition-all duration-700 ease-out",
                isIntersecting
                  ? "opacity-100 translate-y-0 delay-700"
                  : "opacity-0 translate-y-5",
              )}
            >
              Tráfego
            </span>
          </h1>

          {/* Subtítulo Descritivo */}
          <div
            className={`mt-6 font-poppins font-normal text-white text-base md:text-xl lg:text-2xl max-w-2xl mx-auto transition-all duration-700 ease-out drop-shadow-md ${
              isIntersecting
                ? "opacity-100 translate-y-0 delay-800"
                : "opacity-0 translate-y-5"
            }`}
          >
            Marketing digital sem enrolação para multiplicar os resultados do
            seu negócio.
          </div>

          {/* Botões CTA */}
          <div
            className={`mt-10 md:mt-14 flex flex-col sm:flex-row items-center gap-4 md:gap-6 pointer-events-auto transition-all duration-700 ease-out ${
              isIntersecting
                ? "opacity-100 translate-y-0 delay-900"
                : "opacity-0 translate-y-4"
            }`}
          >
            {/* Primário Amarelo */}
            <a
              href="#contato"
              className="group relative overflow-hidden bg-multi-amarelo text-multi-roxo font-poppins font-bold text-sm md:text-lg px-8 py-4 md:px-10 md:py-5 rounded-sm border-none shadow-xl flex items-center justify-center gap-2"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Vamos conversar?
              </span>
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white group-hover:translate-x-1">
                ▶
              </span>
              <div className="absolute inset-0 bg-multi-rosa rounded-full transform scale-0 origin-center transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.5]" />
            </a>

            {/* Secundário Branco Outline */}
            <a
              href="#servicos"
              className="group relative text-white font-poppins font-semibold text-sm md:text-lg px-8 py-4 md:px-10 md:py-5 rounded-sm border-2 border-white/80 hover:border-white hover:bg-white/10 hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              Conheça os serviços
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

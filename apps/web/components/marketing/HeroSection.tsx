"use client";

import { Magnetic } from "@/components/ui/Magnetic";
import { gsap, useGSAP } from "@/hooks/use-gsap";
import { ANIM, EASE_OUT } from "@/lib/animations";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Lazy-load Three.js canvas — só carrega quando Hero monta
const HeroBackground = dynamic(
  () =>
    import("@/components/three/HeroBackground").then(
      (mod) => mod.HeroBackground,
    ),
  { ssr: false },
);

/**
 * Collage elements — brasilidades posicionadas em torno do Hero.
 * Cada uma tem velocidade de parallax e delay de entrada diferentes.
 */
type CollageItem = {
  src: string;
  alt: string;
  position: string;
  parallaxSpeed: number;
  delay: number;
  opacity: string;
  rotate?: string;
};

const COLLAGE: readonly CollageItem[] = [
  {
    src: "/assets/brasilidades/rio.png",
    alt: "Rio de Janeiro",
    position: "right-[-5%] bottom-[-5%] w-[280px] md:w-[45vw] max-w-[580px]",
    parallaxSpeed: -0.15,
    delay: 0.1,
    opacity: "opacity-40",
  },
  {
    src: "/assets/brasilidades/tucano_v2.png",
    alt: "Tucano tropical",
    position:
      "left-[3%] top-[5%] md:top-[10%] w-[100px] md:w-[15vw] max-w-[220px]",
    parallaxSpeed: -0.3,
    delay: 0.2,
    opacity: "opacity-80",
  },
  {
    src: "/assets/brasilidades/hero_folha_bananeira.png",
    alt: "Folha de Bananeira",
    position:
      "left-[-8%] bottom-[-8%] md:bottom-[-4%] w-[250px] md:w-[40vw] max-w-[550px]",
    parallaxSpeed: -0.2,
    delay: 0.15,
    opacity: "opacity-90",
    rotate: "-rotate-6",
  },
  {
    src: "/assets/brasilidades/caju_v2.png",
    alt: "Caju",
    position:
      "left-[-1%] bottom-[-2%] md:bottom-[4%] w-[130px] md:w-[13vw] max-w-[200px]",
    parallaxSpeed: -0.35,
    delay: 0.25,
    opacity: "opacity-100",
    rotate: "rotate-[-10deg]",
  },
  {
    src: "/assets/brasilidades/hero_beijaflor.png",
    alt: "Beija-flor",
    position:
      "right-[-2%] top-[5%] md:top-[10%] w-[130px] md:w-[15vw] max-w-[180px]",
    parallaxSpeed: -0.5,
    delay: 0.3,
    opacity: "opacity-100",
  },
];

export function HeroSection({ className }: { className?: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLElement>(null);
  const secondaryHeadlineRef = useRef<HTMLSpanElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const collageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [loaderDone, setLoaderDone] = useState(false);

  // Escutar evento do Loader para iniciar animações de entrada
  useEffect(() => {
    // Se o loader já rodou nesta sessão, ativa direto
    if (sessionStorage.getItem("multi:loader-done") === "true") {
      setLoaderDone(true);
      return;
    }

    const handler = () => {
      setLoaderDone(true);
      sessionStorage.setItem("multi:loader-done", "true");
    };

    window.addEventListener("loader:complete", handler);
    window.addEventListener("loader:start-exit", handler); // Antecipa reveal

    // Fallback mais curto: se o evento não disparar em 1s, inicia mesmo assim
    const fallback = setTimeout(() => {
      setLoaderDone(true);
      sessionStorage.setItem("multi:loader-done", "true");
    }, 1500);

    return () => {
      window.removeEventListener("loader:complete", handler);
      window.removeEventListener("loader:start-exit", handler);
      clearTimeout(fallback);
    };
  }, []);

  // ═══════════════════════════════════════════
  // ENTRANCE TIMELINE — dispara quando loader completa
  // ═══════════════════════════════════════════
  useGSAP(
    () => {
      if (!loaderDone || !sectionRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        // Immediate reveal for reduced motion
        gsap.set(
          [
            logoRef.current,
            labelRef.current,
            headlineRef.current?.querySelectorAll("[data-word]"),
            secondaryHeadlineRef.current,
            subtitleRef.current,
            ctaRef.current?.children,
            collageRefs.current,
            scrollRef.current,
          ],
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
          },
        );
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: EASE_OUT },
      });

      // 1. Logo scale-in com bounce
      if (logoRef.current) {
        tl.fromTo(
          logoRef.current,
          { scale: 0.7, opacity: 0, y: 20 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "back.out(1.4)",
          },
          0.1,
        );
      }

      // 2. Label "Agência de Marketing Digital" — sobe e aparece
      if (labelRef.current) {
        tl.fromTo(
          labelRef.current,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          0.2,
        );
      }

      // 3. Split-text reveal no headline — palavra por palavra
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll("[data-word]");
        tl.fromTo(
          words,
          {
            y: 40,
            opacity: 0,
            rotationX: -10,
          },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: "power3.out",
          },
          0.3,
        );
      }

      // 4. Sub-headline (Presença, Escala, Vendas) — fade in
      if (secondaryHeadlineRef.current) {
        tl.fromTo(
          secondaryHeadlineRef.current,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          0.6,
        );
      }

      // 5. Subtítulo — fade up
      if (subtitleRef.current) {
        tl.from(subtitleRef.current, { ...ANIM.fadeUp, duration: 0.6 }, 0.7);
      }

      // 5. CTAs — fade up com stagger
      if (ctaRef.current) {
        const buttons = ctaRef.current.children;
        tl.fromTo(
          buttons,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
          },
          0.8,
        );
      }

      // 6. Colagem — stagger in com direções diferentes
      const validCollageEls = collageRefs.current.filter(Boolean);
      if (validCollageEls.length > 0) {
        validCollageEls.forEach((el, i) => {
          if (!el) return;
          const collageItem = COLLAGE[i];
          if (!collageItem) return;
          tl.fromTo(
            el,
            {
              scale: 0.7,
              opacity: 0,
              y: 40 + i * 10,
            },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: 1.0,
              ease: "power2.out",
            },
            0.5 + collageItem.delay,
          );
        });
      }

      // 7. Scroll indicator
      if (scrollRef.current) {
        tl.from(
          scrollRef.current,
          {
            opacity: 0,
            y: -10,
            duration: 0.6,
          },
          "-=0.3",
        );
      }
    },
    { scope: sectionRef, dependencies: [loaderDone] },
  );

  // ═══════════════════════════════════════════
  // SCROLL PARALLAX — ScrollTrigger scrub
  // ═══════════════════════════════════════════
  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) return;

      // Parallax nos elementos da colagem (velocidades diferentes)
      collageRefs.current.forEach((el, i) => {
        if (!el || !COLLAGE[i]) return;
        gsap.to(el, {
          y: COLLAGE[i].parallaxSpeed * 200,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });

      // Texto sobe e desaparece ao scrollar
      if (contentRef.current) {
        gsap.to(contentRef.current, {
          y: -80,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "20% top",
            end: "60% top",
            scrub: 1,
          },
        });
      }

      // Sol watermark — rotação acelerada no scroll
      const solEl = sectionRef.current?.querySelector("[data-sol-watermark]");
      if (solEl) {
        gsap.to(solEl, {
          rotation: 90,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 2,
          },
        });
      }
    },
    { scope: sectionRef },
  );

  /**
   * Renderiza headline com data-word spans para split-text animation.
   */
  const renderSplitHeadline = () => (
    <h1
      ref={headlineRef}
      className="flex flex-col items-center justify-center gap-3 drop-shadow-md w-full"
      style={{ perspective: "600px" }}
    >
      <strong
        ref={labelRef}
        className="font-poppins font-semibold uppercase tracking-[0.2em] md:tracking-[0.25em] text-[10px] md:text-sm text-white/90"
        style={{ opacity: 0 }}
      >
        <span data-word="" className="inline-block">
          Agência
        </span>{" "}
        <span data-word="" className="inline-block">
          de
        </span>{" "}
        <span data-word="" className="inline-block">
          Marketing
        </span>{" "}
        <span data-word="" className="inline-block">
          Digital
        </span>
      </strong>

      <span className="font-display text-[clamp(24px,8vw,42px)] text-white uppercase leading-[1.1] md:leading-none tracking-tight md:tracking-normal flex flex-wrap md:flex-nowrap items-center justify-center gap-x-3 md:gap-x-4 gap-y-1 text-center max-w-[90vw] md:max-w-none md:whitespace-nowrap">
        <span data-word="" className="inline-block will-change-transform">
          Marketing
        </span>
        <span
          data-word=""
          className="text-multi-amarelo inline-block font-bold will-change-transform"
        >
          ✹ Branding ✹
        </span>
        <span data-word="" className="inline-block will-change-transform">
          Social Media
        </span>
      </span>

      {/* Texto de apoio */}
      <span
        ref={secondaryHeadlineRef}
        className="font-poppins font-medium text-white/50 text-[clamp(10px,3vw,14px)] md:text-[clamp(10px,1.2vw,14px)] uppercase tracking-[0.15em] md:tracking-[0.2em] mt-3 px-4 md:px-0 max-w-[320px] md:max-w-none leading-relaxed"
        style={{ opacity: 0 }}
      >
        Marketing digital sem enrolação para multiplicar os resultados do seu
        negócio
      </span>
    </h1>
  );

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative overflow-hidden w-full h-svh flex items-center justify-center isolate",
        className,
      )}
      style={{ background: "#5D018A" }} // fallback enquanto shader carrega
    >
      {/* Three.js Shader Background */}
      <HeroBackground />

      {/* Sol watermark girando no background */}
      <div
        data-sol-watermark
        className="absolute right-[-15%] md:right-[-5%] top-1/2 -translate-y-1/2 w-[120vw] md:w-[60vw] max-w-[800px] opacity-[0.06] z-1 pointer-events-none"
      >
        <svg
          viewBox="0 0 200 200"
          fill="currentColor"
          className="w-full h-full text-multi-amarelo"
        >
          <title>Elemento decorativo sol</title>
          <g>
            {Array.from({ length: 18 }).map((_, i) => {
              const id = `hero-ray-${i * 20}`;
              return (
                <path
                  key={id}
                  d="M100 20L108 80L100 90L92 80L100 20Z"
                  transform={`rotate(${i * 20} 100 100)`}
                />
              );
            })}
            <circle cx="100" cy="100" r="40" />
          </g>
        </svg>
      </div>

      {/* Elementos da Colagem (Parallax via ScrollTrigger) */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {COLLAGE.map((item, idx) => (
          <div
            key={item.src}
            ref={(el) => {
              collageRefs.current[idx] = el;
            }}
            className={cn(
              "absolute will-change-transform",
              item.position,
              item.opacity,
              item.rotate,
            )}
            style={{ opacity: 0 }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={600}
              height={600}
              className="w-full h-auto object-contain drop-shadow-2xl"
              aria-hidden="true"
              priority
              loading="eager"
              sizes="(max-width: 768px) 40vw, 30vw"
              style={{ height: "auto" }}
            />
          </div>
        ))}
      </div>

      {/* Conteúdo Principal */}
      <div
        ref={contentRef}
        className="w-full h-full relative z-20 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4 mt-20 md:mt-0 flex flex-col items-center text-center">
          {/* Logo centralizada */}
          <div
            ref={logoRef}
            className="mb-6 md:mb-8 will-change-transform"
            style={{ opacity: 0 }}
          >
            <Image
              src="/brand/logo-branca.png"
              alt="Agência Multi BR Logo"
              width={420}
              height={140}
              priority
              loading="eager"
              className="w-full max-w-[240px] md:max-w-[320px] lg:max-w-[420px] h-auto object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
              sizes="(max-width: 768px) 240px, (max-width: 1024px) 320px, 420px"
              style={{ height: "auto" }}
            />
          </div>

          {/* Headline com split-text */}
          {renderSplitHeadline()}

          {/* Subtítulo */}
          <div
            ref={subtitleRef}
            className="mt-5 font-poppins font-light text-white/90 text-base md:text-xl max-w-2xl mx-auto drop-shadow-md"
            style={{ opacity: 0 }}
          >
            Sua marca assumindo o controle do mercado. Da atração visual até as
            vendas na sua operação.
          </div>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className="mt-8 md:mt-14 flex flex-col sm:flex-row items-center gap-4 md:gap-6 pointer-events-auto"
          >
            {/* Primário Amarelo */}
            <Magnetic strength={0.3} radius={60}>
              <a
                href="#contato"
                className="group relative overflow-hidden bg-multi-amarelo text-multi-roxo font-poppins font-bold text-sm md:text-lg px-8 py-4 md:px-10 md:py-5 rounded-sm border-none shadow-xl flex items-center justify-center gap-2"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Fale com a gente agora
                </span>
                <span className="relative z-10 transition-all duration-300 group-hover:text-white group-hover:translate-x-1">
                  ▶
                </span>
                <div className="absolute inset-0 bg-multi-rosa rounded-full transform scale-0 origin-center transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.5]" />
              </a>
            </Magnetic>

            {/* Secundário Outline */}
            <Magnetic strength={0.2} radius={50}>
              <a
                href="#servicos"
                className="group relative text-white font-poppins font-semibold text-sm md:text-lg px-8 py-4 md:px-10 md:py-5 rounded-sm border-2 border-white/80 hover:border-white hover:bg-white/10 hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                Veja como trabalhamos
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          ref={scrollRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
          style={{ opacity: 0 }}
        >
          <span className="font-poppins font-normal text-[10px] uppercase tracking-[0.3em] text-white/40">
            Scroll
          </span>
          <div className="w-px h-8 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 w-full h-1/2 bg-multi-amarelo animate-[scroll-line_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </section>
  );
}

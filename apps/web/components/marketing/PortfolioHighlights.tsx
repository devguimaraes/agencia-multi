"use client";

import { TextScramble } from "@/components/ui/TextScramble";
import { gsap, useGSAP } from "@/hooks/use-gsap";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRef } from "react";

const HIGHLIGHTS = [
  {
    title: "Estratégia Digital",
    cat: "Consultoria & Growth",
    image: "/assets/portfolio/multi-estrategia.png",
    className: "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto",
  },
  {
    title: "Social Media",
    cat: "Gestão de Presença",
    image: "/assets/portfolio/3-1920w.webp",
    className: "md:col-span-1 md:row-span-1 aspect-[3/4] md:aspect-auto",
  },
  {
    title: "Design & Branding",
    cat: "Identidade Visual",
    image: "/assets/portfolio/identidadeVisual-.webp",
    hoverImage: "/assets/portfolio/identidadeVisual-2.webp",
    className: "md:col-span-1 md:row-span-1 aspect-square md:aspect-auto",
  },
  {
    title: "Marketing 360°",
    cat: "Performance & Vendas",
    image: "/assets/portfolio/5-1920w.webp",
    className: "md:col-span-2 aspect-[16/9] md:aspect-[21/9]",
  },
];

export function PortfolioHighlights({ className }: { className?: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !headerRef.current || !gridRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // Header Animation
      tl.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      );

      // Cards Reveal (Stagger)
      const cards = gsap.utils.toArray(gridRef.current.children);

      // Animating curtain and then scaling image
      for (const [i, cardNode] of cards.entries()) {
        const card = cardNode as HTMLElement;
        const curtain = card.querySelector(".curtain-reveal");
        const imgContainer = card.querySelector(".img-container");
        const content = card.querySelectorAll(".card-content");

        const cardTl = gsap.timeline();

        cardTl.fromTo(
          curtain,
          { scaleY: 1 },
          { scaleY: 0, duration: 0.8, ease: "cubic-bezier(0.19,1,0.22,1)" },
          0,
        );

        cardTl.fromTo(
          imgContainer,
          { scale: 1.2 },
          { scale: 1, duration: 1.2, ease: "cubic-bezier(0.19,1,0.22,1)" },
          0,
        );

        cardTl.fromTo(
          content,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.1 },
          0.4,
        );

        tl.add(cardTl, 0.2 + i * 0.15);
      }

      // Tilt Effect on Hover
      for (const cardNode of cards) {
        const card = cardNode as HTMLElement;
        const handleMouseMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const rotateX = ((y - centerY) / centerY) * -10;
          const rotateY = ((x - centerX) / centerX) * 10;

          gsap.to(card, {
            rotateX,
            rotateY,
            transformPerspective: 1000,
            ease: "power2.out",
            duration: 0.4,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            ease: "power3.out",
            duration: 0.8,
          });
        };

        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);
      }
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative bg-multi-black text-white py-24 md:py-32 w-full overflow-hidden isolate",
        className,
      )}
    >
      {/* Grain Overlay */}
      <div className="grain low-opacity" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
        {/* HEADER EDITORIAL */}
        <div
          ref={headerRef}
          className="mb-16 md:mb-24 flex flex-col items-start opacity-0"
        >
          <TextScramble
            text="Nosso"
            className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-white/40 mb-2"
          />
          <div className="relative">
            <h2 className="font-display text-[clamp(48px,6vw,84px)] text-multi-amarelo leading-none m-0">
              Portfólio
            </h2>
            {/* Linha sob o título animada pelo headerTl ou mantida CSS trigger (vamos usar w-full para simplificar ao revelar o block) */}
            <div className="absolute -bottom-2 md:-bottom-4 left-0 h-[2px] bg-multi-amarelo w-[80%] origin-left" />
          </div>
        </div>

        {/* GRID MASONRY */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[minmax(220px,auto)] md:auto-rows-[280px]"
        >
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              data-cursor-text="Ver Projeto"
              className={cn(
                "group relative overflow-visible cursor-pointer rounded-sm transform-gpu", // overflow-visible para o tilt funcionar bem se houver shadow, mas internamente imgs overflow-hidden
                item.className,
              )}
            >
              <div className="absolute inset-0 overflow-hidden rounded-sm">
                {/* Curtain Wipe Reveal */}
                <div className="curtain-reveal absolute inset-0 z-20 bg-multi-black origin-top transform-gpu" />

                {/* Container da imagem com zoom */}
                <div className="img-container absolute inset-0 w-full h-full transform-gpu">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    quality={100}
                    priority={[0, 3].includes(HIGHLIGHTS.indexOf(item))}
                    className={cn(
                      "object-cover transition-all duration-700 ease-out group-hover:scale-[1.04]",
                      item.hoverImage && "group-hover:opacity-0",
                    )}
                    sizes={
                      item.className.includes("md:col-span-2")
                        ? "(max-width: 768px) 100vw, (max-width: 1280px) 66vw, 850px"
                        : "(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 420px"
                    }
                  />
                  {item.hoverImage && (
                    <Image
                      src={item.hoverImage}
                      alt={`${item.title} — alternativa`}
                      fill
                      quality={100}
                      className="object-cover absolute inset-0 opacity-0 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-[1.04]"
                      sizes={
                        item.className.includes("md:col-span-2")
                          ? "(max-width: 768px) 100vw, (max-width: 1280px) 66vw, 850px"
                          : "(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 420px"
                      }
                    />
                  )}
                </div>

                {/* Gradient overlay permanente (texto sempre visível) */}
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent pointer-events-none z-10 transition-opacity duration-500 group-hover:from-black/85" />

                {/* Textos — sempre visíveis, hover intensifica */}
                <div className="absolute bottom-5 md:bottom-8 left-5 md:left-8 right-5 z-30 flex flex-col items-start pointer-events-none">
                  <span className="card-content inline-block px-3 py-1 bg-multi-amarelo text-multi-black text-[10px] md:text-xs font-poppins font-bold uppercase tracking-wider rounded-sm mb-2">
                    {item.cat}
                  </span>
                  <h3 className="card-content text-2xl md:text-4xl font-display text-white leading-tight lowercase tracking-tight m-0">
                    {item.title}
                  </h3>
                </div>

                {/* Arrow no hover (canto superior direito) */}
                <div className="absolute top-5 right-5 z-30 w-10 h-10 flex items-center justify-center bg-multi-amarelo text-multi-roxo rounded-full opacity-0 scale-50 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100">
                  <span className="text-lg font-bold">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Editorial com Arrow */}
        <div className="mt-16 sm:mt-24 flex justify-center">
          <a
            href="#projetos"
            className="group relative inline-flex items-center gap-4 font-poppins font-semibold text-sm md:text-base text-multi-amarelo hover:text-white transition-colors duration-300"
          >
            <span>Todos os projetos</span>
            <span className="inline-flex items-center justify-center w-10 h-10 border border-multi-amarelo/30 rounded-full transition-all duration-300 group-hover:bg-multi-amarelo group-hover:text-multi-roxo group-hover:border-multi-amarelo">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

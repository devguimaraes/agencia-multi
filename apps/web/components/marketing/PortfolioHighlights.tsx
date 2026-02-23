"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import Image from "next/image";

const HIGHLIGHTS = [
  {
    title: "Multi Estratégia",
    cat: "Growth & Digital",
    image: "/assets/portfolio/4-1.webp",
    className: "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto", // Landscape Grande
  },
  {
    title: "Conteúdo Diário",
    cat: "Gestão de Redes",
    image: "/assets/portfolio/3-1920w.webp",
    className: "md:col-span-1 md:row-span-2 aspect-[3/4] md:aspect-auto", // Portrait
  },
  {
    title: "Branding Multi",
    cat: "Identidade Visual",
    image: "/assets/portfolio/identidadeVisual-.webp",
    hoverImage: "/assets/portfolio/identidadeVisual-2.webp",
    className: "md:col-span-3 aspect-[16/9] md:aspect-[21/9]", // Full width banner
  },
];

export function PortfolioHighlights({ className }: { className?: string }) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className={cn(
        "bg-multi-black text-white py-24 md:py-32 w-full",
        className,
      )}
      data-intersecting={isIntersecting}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        {/* HEADER DA SEÇÃO */}
        <div
          className={cn(
            "mb-16 md:mb-24 flex flex-col items-start opacity-0 translate-y-8 transition-all duration-1000 ease-out",
            isIntersecting && "opacity-100 translate-y-0",
          )}
        >
          <span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-white/40 mb-2">
            Nosso
          </span>
          <div className="relative">
            <h2 className="font-display text-[clamp(48px,6vw,84px)] text-multi-amarelo leading-none m-0">
              Portfólio
            </h2>
          </div>
        </div>

        {/* GRID MASONRY */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(250px,auto)] md:auto-rows-[300px]">
          {HIGHLIGHTS.map((item, idx) => (
            <div
              key={item.title}
              className={cn(
                "group relative overflow-hidden bg-multi-black cursor-pointer rounded-sm collage-element",
                item.className,
              )}
            >
              {/* Div de Cobertura para Animação de Reveal (Curtain wipe vertical) */}
              <div
                className={cn(
                  "absolute inset-0 z-20 bg-[#1A1A1A] origin-top transition-transform duration-1200 ease-[cubic-bezier(0.19,1,0.22,1)]",
                  isIntersecting ? "scale-y-0" : "scale-y-100",
                )}
                style={{ transitionDelay: `${200 + idx * 150}ms` }}
              />

              {/* Container da Imagem c/ Escala Inicial */}
              <div
                className={cn(
                  "absolute inset-0 w-full h-full transition-transform duration-1200 ease-[cubic-bezier(0.19,1,0.22,1)]",
                  isIntersecting ? "scale-100" : "scale-110",
                )}
                style={{ transitionDelay: `${200 + idx * 150}ms` }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  quality={100}
                  unoptimized
                  className={cn(
                    "object-cover transition-all duration-800 ease-out grayscale group-hover:grayscale-0 group-hover:scale-[1.03]",
                    item.hoverImage && "group-hover:opacity-0",
                  )}
                />
                {item.hoverImage && (
                  <Image
                    src={item.hoverImage}
                    alt={`${item.title} hover layer`}
                    fill
                    quality={100}
                    unoptimized
                    className="object-cover absolute inset-0 opacity-0 transition-opacity duration-800 ease-out grayscale group-hover:grayscale-0 group-hover:opacity-100"
                  />
                )}
              </div>

              {/* Overlay Escuro no Hover para legibilidade do texto */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none z-10" />

              {/* Textos Revelados no Hover */}
              <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 z-30 flex flex-col items-start translate-y-8 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none">
                <span className="inline-block px-3 py-1 bg-multi-amarelo text-multi-black text-xs md:text-sm font-poppins font-bold uppercase tracking-wider rounded-sm mb-3">
                  {item.cat}
                </span>
                <h3 className="text-3xl md:text-5xl font-display text-white leading-tight lowercase tracking-tight m-0">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div
          className={cn(
            "mt-16 sm:mt-24 flex justify-center opacity-0 transition-all duration-1000 ease-out",
            isIntersecting && "opacity-100 delay-700",
          )}
        >
          <a
            href="#projetos"
            className="group relative inline-flex items-center justify-center gap-2 bg-transparent text-white font-poppins font-normal text-sm md:text-base px-10 py-5 rounded-sm border border-white/20 hover:border-white transition-all duration-300 hover:bg-white/5"
          >
            Todos os projetos →
          </a>
        </div>
      </div>
    </section>
  );
}

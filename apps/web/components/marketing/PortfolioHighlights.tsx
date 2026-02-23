"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import Image from "next/image";

const HIGHLIGHTS = [
  {
    title: "Multi Estratégia",
    cat: "Growth & Digital",
    image: "/assets/portfolio/4-1.webp",
    className: "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto",
  },
  {
    title: "Conteúdo Diário",
    cat: "Gestão de Redes",
    image: "/assets/portfolio/3-1920w.webp",
    className: "md:col-span-1 md:row-span-1 aspect-[3/4] md:aspect-auto",
  },
  {
    title: "Branding Multi",
    cat: "Identidade Visual",
    image: "/assets/portfolio/identidadeVisual-.webp",
    hoverImage: "/assets/portfolio/identidadeVisual-2.webp",
    className: "md:col-span-1 md:row-span-1 aspect-square md:aspect-auto",
  },
  {
    title: "Campanha 360°",
    cat: "Marketing Digital",
    image: "/assets/portfolio/banner-multi.jpg",
    className: "md:col-span-2 aspect-[16/9] md:aspect-[21/9]",
  },
];

export function PortfolioHighlights({ className }: { className?: string }) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.08 });

  return (
    <section
      ref={ref}
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
            {/* Linha animada abaixo do título */}
            <div
              className={cn(
                "absolute -bottom-2 md:-bottom-4 left-0 h-[2px] bg-multi-amarelo w-[80%] origin-left transition-transform duration-800 ease-out",
                isIntersecting ? "scale-x-100 delay-300" : "scale-x-0",
              )}
            />
          </div>
        </div>

        {/* GRID MASONRY */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[minmax(220px,auto)] md:auto-rows-[280px]">
          {HIGHLIGHTS.map((item, idx) => (
            <div
              key={item.title}
              className={cn(
                "group relative overflow-hidden cursor-pointer rounded-sm",
                item.className,
              )}
            >
              {/* Curtain Wipe Reveal */}
              <div
                className={cn(
                  "absolute inset-0 z-20 bg-multi-black origin-top transition-transform duration-1200 ease-[cubic-bezier(0.19,1,0.22,1)]",
                  isIntersecting ? "scale-y-0" : "scale-y-100",
                )}
                style={{ transitionDelay: `${250 + idx * 180}ms` }}
              />

              {/* Container da imagem com zoom */}
              <div
                className={cn(
                  "absolute inset-0 w-full h-full transition-transform duration-1200 ease-[cubic-bezier(0.19,1,0.22,1)]",
                  isIntersecting ? "scale-100" : "scale-110",
                )}
                style={{ transitionDelay: `${250 + idx * 180}ms` }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  quality={90}
                  className={cn(
                    "object-cover transition-all duration-700 ease-out group-hover:scale-[1.04]",
                    item.hoverImage && "group-hover:opacity-0",
                  )}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {item.hoverImage && (
                  <Image
                    src={item.hoverImage}
                    alt={`${item.title} — alternativa`}
                    fill
                    quality={90}
                    className="object-cover absolute inset-0 opacity-0 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
              </div>

              {/* Gradient overlay permanente (texto sempre visível) */}
              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent pointer-events-none z-10 transition-opacity duration-500 group-hover:from-black/85" />

              {/* Textos — sempre visíveis, hover intensifica */}
              <div className="absolute bottom-5 md:bottom-8 left-5 md:left-8 right-5 z-30 flex flex-col items-start pointer-events-none">
                <span
                  className={cn(
                    "inline-block px-3 py-1 bg-multi-amarelo text-multi-black text-[10px] md:text-xs font-poppins font-bold uppercase tracking-wider rounded-sm mb-2 opacity-0 translate-y-3 transition-all duration-600 ease-out",
                    isIntersecting && "opacity-100 translate-y-0",
                  )}
                  style={{ transitionDelay: `${500 + idx * 180}ms` }}
                >
                  {item.cat}
                </span>
                <h3
                  className={cn(
                    "text-2xl md:text-4xl font-display text-white leading-tight lowercase tracking-tight m-0 opacity-0 translate-y-3 transition-all duration-600 ease-out",
                    isIntersecting && "opacity-100 translate-y-0",
                  )}
                  style={{ transitionDelay: `${600 + idx * 180}ms` }}
                >
                  {item.title}
                </h3>
              </div>

              {/* Arrow no hover (canto superior direito) */}
              <div className="absolute top-5 right-5 z-30 w-10 h-10 flex items-center justify-center bg-multi-amarelo text-multi-roxo rounded-full opacity-0 scale-50 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100">
                <span className="text-lg font-bold">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Editorial com Arrow */}
        <div
          className={cn(
            "mt-16 sm:mt-24 flex justify-center opacity-0 transition-all duration-1000 ease-out",
            isIntersecting && "opacity-100 delay-700",
          )}
        >
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

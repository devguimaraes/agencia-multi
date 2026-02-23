"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRef, useState } from "react";

export function MentorshipTeaser({ className }: { className?: string }) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.15 });
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // Array preparado para expansão do carrossel no futuro
  const carouselItems = [
    {
      id: 1,
      image: "/assets/brasilidades/media__1771615197792.png",
      alt: "Mentoria de Escala",
    },
  ];

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const scrollPosition = scrollContainerRef.current.scrollLeft;
    const slideWidth = scrollContainerRef.current.offsetWidth;
    const currentIndex = Math.round(scrollPosition / slideWidth);
    setActiveSlide(currentIndex);
  };

  const scrollToSlide = (index: number) => {
    if (!scrollContainerRef.current) return;
    const slideWidth = scrollContainerRef.current.offsetWidth;
    scrollContainerRef.current.scrollTo({
      left: slideWidth * index,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={ref}
      className={cn(
        "relative py-24 md:py-32 bg-white text-multi-black overflow-hidden",
        className,
      )}
      data-intersecting={isIntersecting}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
        {/* Top Label */}
        <div
          className={cn(
            "mb-12 md:mb-16 opacity-0 transition-opacity duration-700 ease-out",
            isIntersecting && "opacity-100",
          )}
        >
          <span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-multi-black/40">
            Mentoria de Escala
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Esquerda: Texto Carta Aberta */}
          <div
            className={cn(
              "w-full lg:w-1/2 flex flex-col items-start opacity-0 translate-y-8 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
              isIntersecting && "opacity-100 translate-y-0 delay-200",
            )}
          >
            <div className="text-[clamp(24px,4vw,42px)] leading-[1.2] font-poppins font-light text-multi-black/90">
              <p className="mb-6 font-display text-[clamp(42px,5vw,56px)] leading-none text-multi-roxo">
                Maturidade para
                <br />
                crescer sem caos.
              </p>
              <p className="mb-6 text-lg font-poppins">
                Você já validou seu modelo. Agora o desafio é estruturar a
                <span className="relative inline-block font-medium text-white px-2 mx-1 whitespace-nowrap">
                  {/* Marker Amarelo */}
                  <span
                    className={cn(
                      "absolute inset-0 bg-multi-amarelo -z-10 origin-left scale-x-0 transition-transform duration-800 ease-out",
                      isIntersecting && "scale-x-100 delay-600",
                    )}
                  />
                  operação comercial
                </span>
                e o posicionamento para a próxima fase.
              </p>
              <p className="opacity-70 text-[clamp(18px,2vw,22px)] font-poppins italic">
                Cultura de execução, alinhamento de branding e vendas
                previsíveis. Sem rodeios.
              </p>
            </div>

            {/* Call to Action */}
            <div
              className={cn(
                "mt-12 md:mt-16 opacity-0 transition-all duration-800 ease-out",
                isIntersecting && "opacity-100 delay-800",
              )}
            >
              <a
                href="#mentoria"
                className="group relative inline-flex items-center justify-center gap-2 bg-multi-roxo text-white font-poppins font-bold text-sm md:text-base px-8 py-4 md:px-10 md:py-5 overflow-hidden rounded-sm transition-colors duration-300 hover:bg-multi-amarelo hover:text-multi-roxo"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-10">
                  Estruturar meu negócio
                </span>
                <span className="absolute inset-0 flex items-center justify-center z-10 transition-transform duration-300 translate-y-10 group-hover:translate-y-0">
                  Aplicar agora →
                </span>
              </a>
            </div>
          </div>

          {/* Direita: Carrossel de Fotos (Preparado para N imagens) */}
          <div
            className={cn(
              "w-full lg:w-1/2 flex flex-col justify-center lg:justify-end opacity-0 scale-95 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
              isIntersecting && "opacity-100 scale-100 delay-300",
            )}
          >
            {/* Viewport do Carrossel */}
            <div className="relative w-full max-w-[540px] aspect-square lg:aspect-4/5 overflow-hidden rounded-xl bg-gray-100 ring-1 ring-multi-black/5 mx-auto shadow-2xl">
              <div
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="flex w-full h-full overflow-x-auto snap-x snap-mandatory hide-scrollbar touch-pan-x"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {carouselItems.map((item) => (
                  <div
                    key={item.id}
                    className="w-full h-full flex-none snap-center relative group"
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      priority
                    />
                    {/* Dark gradient overlay em cada slide */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/60 to-transparent pointer-events-none opacity-60 mix-blend-multiply" />
                  </div>
                ))}
              </div>
            </div>

            {/* Controles do Carrossel (Visíveis caso > 1 slide) */}
            {carouselItems.length > 1 && (
              <div className="flex items-center justify-center gap-3 mt-6">
                {carouselItems.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSlide(index)}
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-all duration-300",
                      activeSlide === index
                        ? "bg-multi-roxo w-8"
                        : "bg-multi-black/20 hover:bg-multi-black/40",
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

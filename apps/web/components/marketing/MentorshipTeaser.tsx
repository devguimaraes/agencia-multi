"use client";

import { Magnetic } from "@/components/ui/Magnetic";
import { TextScramble } from "@/components/ui/TextScramble";
import { gsap, useGSAP } from "@/hooks/use-gsap";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRef } from "react";

export function MentorshipTeaser({ className }: { className?: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const { ref, isIntersecting } = useIntersectionObserver<HTMLElement>({
    threshold: 0.15,
  });

  useGSAP(
    () => {
      if (!sectionRef.current || !gridRef.current) return;

      // Revela os itens do grid com efeito de escala
      const gridItems = gridRef.current.querySelectorAll(".grid-item");
      gsap.fromTo(
        gridItems,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        },
      );

      // Parallax sutil no background (ícones flutuantes)
      const icons = sectionRef.current.querySelectorAll(".brand-icon");
      icons.forEach((icon, i) => {
        gsap.to(icon, {
          y: i % 2 === 0 ? -40 : 40,
          rotation: i % 2 === 0 ? 15 : -15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Revela o conteúdo editorial (texto) com staggered reveal
      const contentItems =
        sectionRef.current.querySelectorAll(".editorial-content");
      gsap.fromTo(
        contentItems,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={(node) => {
        if (node) {
          sectionRef.current = node;
          (ref as React.MutableRefObject<HTMLElement | null>).current = node;
        }
      }}
      className={cn(
        "relative min-h-dvh flex items-center py-20 md:py-32 bg-multi-cream text-multi-black overflow-hidden isolate border-t border-multi-roxo/10",
        className,
      )}
    >
      {/* BACKGROUND BRANDING ASSETS — Reforço da marca */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="brand-icon absolute top-[2%] left-[2%] w-48 md:w-64 opacity-10 grayscale brightness-0">
          <Image
            src="/rebranding/LOGO BRANCA TRANSPARENTE.png"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="brand-icon absolute bottom-[10%] right-[2%] w-56 md:w-80 opacity-10 grayscale brightness-0 rotate-12">
          <Image
            src="/rebranding/ÍCONE BRANCO TRANSPARENTE.png"
            alt=""
            width={400}
            height={400}
          />
        </div>

        {/* Assets de Brasilidades solicitados — Posicionamento refinado nas pontas */}
        <div className="brand-icon absolute bottom-[12%] left-[2%] w-48 md:w-72 opacity-20 -rotate-12">
          <Image
            src="/assets/brasilidades/flor_hibisco_v5.png"
            alt=""
            width={350}
            height={350}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="brand-icon absolute bottom-[2%] md:bottom-[5%] left-[5%] md:left-[15%] w-40 md:w-72 opacity-20 rotate-12">
          <Image
            src="/assets/brasilidades/hero_mesacadeiras.png"
            alt=""
            width={350}
            height={350}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="brand-icon absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen opacity-[0.02] mix-blend-overlay">
          <Image
            src="/rebranding/ÍCONE TRANSPARENTE.png"
            alt=""
            fill
            className="object-cover scale-150 rotate-45"
          />
        </div>

        {/* Pássaros solicitados — Canto superior direito */}
        <div className="brand-icon absolute top-[2%] right-[2%] w-48 md:w-72 opacity-20">
          <Image
            src="/assets/brasilidades/passaros_v2.png"
            alt=""
            width={350}
            height={200}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          {/* LADO ESQUERDO: TEXTO EDITORIAL */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center">
            <div className="mb-6 editorial-content opacity-0">
              <TextScramble
                text="Para Social Medias"
                className="font-poppins font-bold text-label tracking-[0.3em] uppercase text-multi-rosa border-b-2 border-multi-rosa/30 pb-1"
              />
            </div>

            <h2 className="font-display text-[clamp(42px,5.5vw,72px)] leading-[0.85] text-multi-roxo mb-6 editorial-content opacity-0">
              De Freelancer <br />
              <span className="text-multi-rosa italic">
                para Dono de Agência
              </span>
            </h2>

            {/* Barra de progresso visual (estilo padrão solicitado) */}
            <div className="w-48 h-[2px] bg-multi-roxo/10 mb-8 relative overflow-hidden editorial-content opacity-0">
              <div
                className={cn(
                  "absolute inset-y-0 left-0 w-1/2 bg-multi-roxo transition-transform duration-1000 origin-left scale-x-0",
                  isIntersecting && "scale-x-100 delay-500",
                )}
              />
            </div>

            <p className="font-poppins text-lg md:text-xl text-multi-black/80 leading-relaxed mb-8 max-w-lg editorial-content opacity-0">
              Você entrega resultado para os clientes dos outros. Está na hora
              de construir a sua estrutura — equipe, processo e recorrência. O{" "}
              <strong>Método Multi</strong> transforma Social Medias
              sobrecarregados em donos de agência.
            </p>

            <div className="editorial-content opacity-0">
              <Magnetic strength={0.3} radius={60}>
                <a
                  href="/mentoria"
                  className="group relative overflow-hidden bg-multi-rosa text-white font-poppins font-bold text-sm md:text-lg px-8 py-4 md:px-10 md:py-5 rounded-sm border-none shadow-xl flex items-center justify-center gap-2"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    Conhecer a Mentoria
                  </span>
                  <span className="relative z-10 transition-all duration-300 group-hover:text-white group-hover:translate-x-1">
                    ▶
                  </span>
                  <div className="absolute inset-0 bg-multi-roxo rounded-full transform scale-0 origin-center transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.5]" />
                </a>
              </Magnetic>
            </div>
          </div>

          {/* LADO DIREITO: GRID 2X2 COM LOGO CENTRAL */}
          <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
            <div
              ref={gridRef}
              className="relative grid grid-cols-2 gap-4 md:gap-6 w-full max-w-[550px] aspect-square"
            >
              <div className="grid-item relative rounded-tl-[40px] md:rounded-tl-[60px] rounded-bl-xl rounded-tr-xl overflow-hidden aspect-square">
                <Image
                  src="/assets/mentoria/mentoria-agencia-multi-br-00.jpg"
                  alt="Mentoria 1"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 300px"
                />
              </div>

              {/* ITEM 2 (Top Right) */}
              <div className="grid-item relative rounded-tr-[40px] md:rounded-tr-[60px] rounded-tl-xl rounded-br-xl overflow-hidden aspect-square">
                <Image
                  src="/assets/mentoria/mentoria-agencia-multi-br-1.jpg"
                  alt="Mentoria 2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 300px"
                />
              </div>

              {/* ITEM 3 (Bottom Left) */}
              <div className="grid-item relative rounded-bl-[40px] md:rounded-bl-[60px] rounded-tl-xl rounded-br-xl overflow-hidden aspect-square">
                <Image
                  src="/assets/mentoria/mentoria-agencia-multi-br-02.jpg"
                  alt="Mentoria 3"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 300px"
                />
              </div>

              {/* ITEM 4 (Bottom Right) */}
              <div className="grid-item relative rounded-br-[40px] md:rounded-br-[60px] rounded-tr-xl rounded-bl-xl overflow-hidden aspect-square">
                <Image
                  src="/assets/mentoria/mentoria-agencia-multi-br-03.jpg"
                  alt="Mentoria 4"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 300px"
                />
              </div>

              {/* LOGO CENTRAL COM RECORTE */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div
                  className={cn(
                    "w-24 h-24 md:w-40 md:h-40 bg-multi-cream rounded-full flex items-center justify-center p-3 md:p-5 shadow-[0_0_50px_rgba(0,0,0,0.15)] border border-multi-roxo/5 transition-all duration-700 delay-1000 scale-0",
                    isIntersecting && "scale-100",
                  )}
                >
                  <Image
                    src="/rebranding/LOGO TRANSPARENTE.png"
                    alt="Logo Multi"
                    width={140}
                    height={140}
                    className="w-[85%] h-auto object-contain animate-float-slow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

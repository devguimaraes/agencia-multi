"use client";

import { gsap, useGSAP } from "@/hooks/use-gsap";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const POSTS = [
  { id: 1, src: "/assets/feed/feed-multi.jpg", alt: "Case Multi 1" },
  { id: 2, src: "/assets/feed/feed-multi-2.jpg", alt: "Case Multi 2" },
  { id: 3, src: "/assets/feed/feed-multi-3.jpg", alt: "Case Multi 3" },
  { id: 4, src: "/assets/feed/feed-multi-4.jpg", alt: "Case Multi 4" },
  { id: 5, src: "/assets/feed/feed-multi-5.jpg", alt: "Case Multi 5" },
  { id: 6, src: "/assets/feed/feed-multi-6.jpg", alt: "Case Multi 6" },
  { id: 7, src: "/assets/feed/feed-multi-7.jpg", alt: "Case Multi 7" },
  { id: 8, src: "/assets/feed/feed-multi-8.jpg", alt: "Case Multi 8" },
  { id: 9, src: "/assets/feed/feed-multi-09.jpg", alt: "Case Multi 9" },
  { id: 10, src: "/assets/feed/feed-multi-10.jpg", alt: "Case Multi 10" },
  { id: 11, src: "/assets/feed/feed-multi-11.png", alt: "Case Multi 11" },
  { id: 12, src: "/assets/feed/feed-multi-12.png", alt: "Case Multi 12" },
];

interface SomosDoRioProps {
  className?: string;
  variant?: "default" | "content-showcase";
}

export function SomosDoRio({ className, variant = "default" }: SomosDoRioProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef1 = useRef<HTMLDivElement>(null);
  const marqueeRef2 = useRef<HTMLDivElement>(null);

  const isContentShowcase = variant === "content-showcase";

  const content = {
    title: isContentShowcase ? (
      <>
        Criação de Conteúdo <br />
        <span className="text-white/40">de Alto</span> <br />
        Impacto
      </>
    ) : (
      <>
        Expertise <br />
        <span className="text-white/40">Carioca em</span> <br />
        Marketing
      </>
    ),
    description1: isContentShowcase 
      ? "Transformamos o feed da sua marca com posts estratégicos que geram desejo e autoridade instantânea. Cada imagem ao lado é um caso real de como unimos design premium e copy focada em conversão."
      : "Entendemos o ritmo, a cultura e o comportamento de consumo de quem vive e empreende no Rio. Unimos estratégia global com o \"borogodó\" local para transformar marcas em referências.",
    description2: isContentShowcase
      ? "Sua vitrine digital sendo o maior diferencial competitivo do seu negócio."
      : "Sua agência parceira, direto da Cidade Maravilhosa para impulsionar seus resultados.",
    linkText: isContentShowcase ? "Conheça nosso portfólio" : "Conheça nossa história",
    linkHref: isContentShowcase ? "/portfolio" : "/sobre",
  };

  useGSAP(
    () => {
      if (!marqueeRef1.current || !marqueeRef2.current) return;

      // Vertical Marquee Animation — Column 1 (Up)
      const col1 = marqueeRef1.current;
      const col1Height = col1.scrollHeight / 2;
      gsap.to(col1, {
        y: -col1Height,
        duration: 25,
        ease: "none",
        repeat: -1,
      });

      // Vertical Marquee Animation — Column 2 (Down)
      const col2 = marqueeRef2.current;
      const col2Height = col2.scrollHeight / 2;
      gsap.fromTo(
        col2,
        { y: -col2Height },
        {
          y: 0,
          duration: 30,
          ease: "none",
          repeat: -1,
        },
      );

      // ScrollReveal for text content
      gsap.from(".rio-content > *", {
        opacity: 0,
        x: -50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className={cn(
        "w-full bg-multi-roxo text-white py-16 md:py-32 overflow-hidden relative isolate",
        className,
      )}
    >
      {/* Background Icon — Branding Refinement */}
      <div className="absolute top-[-10%] left-[-10%] w-[120%] md:w-[70%] aspect-square opacity-10 pointer-events-none z-0">
        <Image
          src="/rebranding/ÍCONE BRANCO TRANSPARENTE.png"
          alt=""
          fill
          className="object-contain -rotate-12 scale-150"
          priority
          sizes="(max-width: 768px) 100vw, 70vw"
        />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[600px]">
          {/* LADO ESQUERDO: CONTEÚDO EDITORIAL */}
          <div className="rio-content flex flex-col gap-6 md:gap-8 z-20">
            <h2 className="font-display text-[clamp(42px,6vw,84px)] leading-[0.9] text-white">
              {content.title}
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-white/80 font-poppins font-light leading-relaxed max-w-lg">
              <p>
                {content.description1}
              </p>
              <p className="text-multi-amarelo font-medium">
                {content.description2}
              </p>
            </div>

            <div className="pt-4">
              <Link
                href={content.linkHref}
                className="group inline-flex items-center gap-4 bg-transparent text-white font-poppins font-bold text-lg hover:text-multi-amarelo transition-colors duration-300"
              >
                {content.linkText}
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-multi-amarelo group-hover:bg-multi-amarelo group-hover:text-multi-roxo transition-all duration-300">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>

          {/* LADO DIREITO: MARQUEE VERTICAL DE POSTS */}
          <div className="relative h-[500px] md:h-[700px] flex gap-4 md:gap-6 pointer-events-none">
            {/* Gradientes de fade (top/bottom) */}
            <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-multi-roxo to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-multi-roxo to-transparent z-10" />

            {/* Coluna 1 — Sobe */}
            <div className="flex-1 overflow-hidden">
              <div ref={marqueeRef1} className="flex flex-col gap-4 md:gap-6">
                {[...POSTS, ...POSTS].map((post, i) => (
                  <div
                    key={`${post.id}-up-${i}`}
                    className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                  >
                    <Image
                      src={post.src}
                      alt={post.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 250px"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Coluna 2 — Desce */}
            <div className="flex-1 overflow-hidden mt-12 md:mt-24">
              <div ref={marqueeRef2} className="flex flex-col gap-4 md:gap-6">
                {[...POSTS, ...POSTS].map((post, i) => (
                  <div
                    key={`${post.id}-down-${i}`}
                    className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                  >
                    <Image
                      src={post.src}
                      alt={post.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 250px"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Elemento Decorativo: Sol Carioca */}
            <div className="absolute -right-20 md:-right-40 top-1/2 -translate-y-1/2 w-[400px] md:w-[600px] opacity-[0.03] z-0 pointer-events-none">
              <svg
                viewBox="0 0 200 200"
                fill="currentColor"
                className="w-full h-full text-multi-amarelo animate-sol-spin"
              >
                <circle cx="100" cy="100" r="40" />
                {Array.from({ length: 18 }).map((_, i) => (
                  <path
                    key={i}
                    d="M100 20L108 80L100 90L92 80L100 20Z"
                    transform={`rotate(${i * 20} 100 100)`}
                  />
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

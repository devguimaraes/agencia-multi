"use client";

import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function HeroSection({ className }: { className?: string }) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className={cn(
        "relative overflow-hidden bg-linear-to-br from-multi-roxo to-multi-rosa min-h-[90vh] flex items-center justify-center pt-24 pb-32",
        className,
      )}
    >
      {/* Background Assets Composition - Mobile First Approach */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Blurs (Present everywhere) */}
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-multi-amarelo rounded-full blur-[140px] opacity-20" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-multi-roxo rounded-full blur-[120px] opacity-20" />

        {/* Level 1: Subtle Brand Shapes (Mobile+) */}
        <div className="absolute inset-0 opacity-10 md:opacity-15">
          <div className="absolute top-[10%] left-[5%] w-32 md:w-64 rotate-12">
            <Image
              src="/brand/icone-branco-transparente.png"
              alt=""
              width={256}
              height={256}
              aria-hidden="true"
              className="w-full h-auto opacity-20 grayscale brightness-200"
            />
          </div>
          <div className="absolute bottom-[10%] right-[5%] w-40 md:w-72 -rotate-12">
            <Image
              src="/brand/icone-branco-transparente.png"
              alt=""
              width={288}
              height={288}
              aria-hidden="true"
              className="w-full h-auto opacity-10 grayscale brightness-200"
            />
          </div>
        </div>

        {/* Level 2: Tropical Leaves (Universal Visibility) */}
        <div className="absolute inset-0">
          {/* Top Right Leaf */}
          <div className="absolute top-[-5%] right-[-8%] w-[200px] md:w-[400px] lg:w-[600px] opacity-20 md:opacity-40 rotate-[25deg]">
            <Image
              src="/assets/brasilidades/folhas_v2.png"
              alt=""
              width={600}
              height={600}
              aria-hidden="true"
              className="w-full h-auto object-contain"
            />
          </div>
          {/* Bottom Left Leaf */}
          <div className="absolute bottom-[-10%] left-[-10%] w-[180px] md:w-[350px] lg:w-[500px] opacity-20 md:opacity-30 -rotate-[15deg] scale-x-[-1]">
            <Image
              src="/assets/brasilidades/folhas_v2.png"
              alt=""
              width={500}
              height={500}
              aria-hidden="true"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Level 3: Colorful Icons & Fauna (Universal Visibility) */}
        <div className="absolute inset-0">
          {/* Colorful Brand Icon - Floating */}
          <div className="absolute top-[28%] left-[10%] lg:left-[20%] w-16 lg:w-24 opacity-40 lg:opacity-60 animate-float-slow">
            <Image
              src="/brand/icone-colorido-transparente.png"
              alt=""
              width={128}
              height={128}
              aria-hidden="true"
              className="grayscale-[0.5] lg:grayscale-0"
            />
          </div>

          {/* Pássaros */}
          <div
            className="absolute top-[12%] right-[5%] lg:right-[15%] w-[180px] md:w-[250px] lg:w-[350px] opacity-40 lg:opacity-70 animate-float-slow"
            style={{ animationDelay: "1s" }}
          >
            <Image
              src="/assets/brasilidades/passaros_v2.png"
              alt="Pássaros tropicais ilustrativos"
              width={350}
              height={350}
            />
          </div>

          {/* Ícone Rio: Pão de Açúcar (Oposto aos pássaros) */}
          <div className="absolute top-[18%] left-[2%] lg:left-[12%] w-[150px] md:w-[250px] lg:w-[350px] opacity-30 lg:opacity-60 animate-float-slow">
            <Image
              src="/assets/brasilidades/rio.png"
              alt="Ilustração do Pão de Açúcar, Rio de Janeiro"
              width={350}
              height={350}
              className="object-contain"
            />
          </div>

          {/* Ícone Único: O Caju */}
          <div className="absolute bottom-[8%] left-[10%] lg:left-[20%] w-24 md:w-32 lg:w-48 opacity-40 lg:opacity-70 hover:opacity-100 transition-opacity duration-500 -rotate-12">
            <Image
              src="/assets/brasilidades/caju_v2.png"
              alt="Ilustração de um Caju tropical"
              width={200}
              height={200}
              className="drop-shadow-xl"
            />
          </div>

          {/* Ícone Complementar: O Abacaxi (Oposto ao Caju) */}
          <div className="absolute bottom-[10%] right-[8%] lg:right-[18%] w-24 md:w-32 lg:w-48 opacity-40 lg:opacity-70 hover:opacity-100 transition-opacity duration-500 rotate-12">
            <Image
              src="/assets/brasilidades/abacaxi.png"
              alt="Ilustração de um Abacaxi tropical"
              width={200}
              height={200}
              className="drop-shadow-xl"
            />
          </div>

          {/* Novos Assets de Colagem - Expansão (Cache Busting + Transparência Real) */}
          <div className="absolute top-[8%] left-[2%] md:left-[4%] w-24 md:w-44 animate-float-slow delay-700 opacity-40 lg:opacity-70">
            <Image
              src="/assets/brasilidades/flor_hibisco_v5.png"
              alt="Flor Hibisco"
              width={240}
              height={240}
              className="object-contain rotate-12"
            />
          </div>

          <div className="absolute bottom-[20%] left-[-2%] md:left-[5%] w-28 md:w-52 animate-float-slow delay-1000 opacity-40 lg:opacity-70">
            <Image
              src="/assets/brasilidades/tucano_v3.png"
              alt="Tucano"
              width={240}
              height={240}
              className="object-contain -rotate-12"
            />
          </div>

          <div className="absolute top-[60%] right-[2%] md:right-[10%] w-24 md:w-48 animate-float-slow delay-500 opacity-40 lg:opacity-70">
            <Image
              src="/assets/brasilidades/ramo_cafe_v3.png"
              alt="Ramo de Café"
              width={220}
              height={220}
              className="object-contain rotate-6"
            />
          </div>
        </div>

        {/* Level 4: Subtle Mobile Texture Texture Overlay */}
        <div className="md:hidden absolute inset-0 opacity-10">
          <div className="absolute top-[40%] right-[-5%] w-32 rotate-45">
            <Image
              src="/assets/brasilidades/folhas_v2.png"
              alt=""
              width={150}
              height={150}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Final Polish: Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="w-full h-full"
            role="img"
            aria-label="Textura de ruído de grãos visuais"
          >
            <filter id="grain-noise-rosa">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.65"
                numOctaves="3"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#grain-noise-rosa)" />
          </svg>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center gap-8">
          <div className="flex flex-col items-center gap-3 max-w-5xl mx-auto z-20 relative">
            {/* Logo */}
            <div
              className={cn(
                "flex justify-center drop-shadow-lg opacity-0",
                isIntersecting && "animate-slide-up stagger-1",
              )}
            >
              <Image
                src="/brand/logomarca-branca-menor.png"
                alt="Agência Multi BR Logo"
                width={460}
                height={160}
                priority
                className="w-full max-w-[200px] md:max-w-[320px] lg:max-w-[420px] h-auto object-contain"
              />
            </div>

            {/* Subtítulo em Linha Única */}
            <h1
              className={cn(
                "font-balgin text-[1rem] sm:text-xl md:text-2xl lg:text-3xl text-white uppercase leading-none tracking-normal flex items-center justify-center gap-1 sm:gap-2 whitespace-nowrap drop-shadow-md opacity-0",
                isIntersecting && "animate-slide-up stagger-2",
              )}
            >
              <span>Branding</span>
              <span className="text-multi-amarelo">✹ Conteúdo ✹</span>
              <span>Tráfego</span>
            </h1>
          </div>

          <p
            className={cn(
              "font-poppins text-base md:text-lg lg:text-xl text-white/90 max-w-xl mx-auto font-medium px-4 opacity-0",
              isIntersecting && "animate-slide-up stagger-3",
            )}
          >
            Estratégia digital sem enrolação para multiplicar os resultados do
            seu negócio.
          </p>

          <div
            className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto opacity-0",
              isIntersecting && "animate-slide-up stagger-4",
            )}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto text-lg px-8 h-14 bg-multi-amarelo text-multi-roxo hover:bg-white transition-colors duration-300 shadow-xl"
            >
              Vamos conversar?
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto text-lg px-8 h-14 border-2 border-white text-white hover:bg-white hover:text-multi-rosa transition-colors duration-300"
            >
              Conheça nossos serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

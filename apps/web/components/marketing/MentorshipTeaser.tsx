"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function MentorshipTeaser({ className }: { className?: string }) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      className={cn(
        "relative py-24 md:py-32 bg-multi-black text-white overflow-hidden",
        className,
      )}
      data-intersecting={isIntersecting}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
        {/* Top Label */}
        <div
          className={cn(
            "mb-12 md:mb-20 opacity-0 transition-opacity duration-700 ease-out",
            isIntersecting && "opacity-100",
          )}
        >
          <span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-white/40">
            Mentoria
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
            <div className="text-[clamp(24px,4vw,42px)] leading-[1.2] font-poppins font-light text-white/90">
              <p className="mb-6">
                Já estivemos aí.{" "}
                <span className="font-display tracking-tight text-white">
                  Patinando
                </span>{" "}
                nos mesmos problemas.
              </p>
              <p className="mb-6">
                A mentoria aborda{" "}
                <span className="relative inline-block font-medium text-multi-roxo px-2 mx-1 whitespace-nowrap">
                  {/* Marker Amarelo */}
                  <span
                    className={cn(
                      "absolute inset-0 bg-multi-amarelo -z-10 origin-left scale-x-0 transition-transform duration-800 ease-out",
                      isIntersecting && "scale-x-100 delay-600",
                    )}
                  />
                  processos
                </span>
                , posicionamento e vendas.
              </p>
              <p className="opacity-60 text-[clamp(18px,2.5vw,28px)] font-poppins italic">
                Sem fórmula mágica.
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
                className="group relative inline-flex items-center justify-center gap-2 bg-white text-multi-black font-poppins font-bold text-sm md:text-base px-8 py-4 md:px-10 md:py-5 overflow-hidden rounded-sm transition-colors duration-300 hover:bg-multi-amarelo"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-10">
                  Quero estruturar meu negócio
                </span>
                <span className="absolute inset-0 flex items-center justify-center z-10 transition-transform duration-300 translate-y-10 group-hover:translate-y-0">
                  Saber mais →
                </span>
              </a>
            </div>
          </div>

          {/* Direita: Foto com Máscara e Efeito Hover */}
          <div
            className={cn(
              "w-full lg:w-1/2 flex justify-center lg:justify-end opacity-0 scale-95 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
              isIntersecting && "opacity-100 scale-100 delay-300",
            )}
          >
            <div className="relative w-full max-w-[480px] aspect-3/4 group cursor-pointer overflow-hidden rounded-sm mask-image-reveal">
              {/* Imagem Base */}
              <Image
                src="/assets/brasilidades/mentoria_blur.png"
                alt="Mentoria Multi"
                fill
                className="object-cover grayscale contrast-125 transition-transform duration-800 ease-out group-hover:scale-110"
                priority
              />

              {/* Overlay Noise/Grain local hover intensificador */}
              <div className="absolute inset-0 opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-[0.15] pointer-events-none bg-multi-roxo" />

              {/* Gradient escuro embaixo para contraste */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/80 to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 font-display text-[clamp(20px,3vw,32px)] text-white m-0 p-0 transform translate-y-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                Confissão
                <br />
                Direta
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Mask Reveal Style Injector (Since it's highly specific to this component) */}
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: Needed for custom CSS mask animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
				.mask-image-reveal {
				  -webkit-mask-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg>');
				  mask-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg>');
				  -webkit-mask-size: 0%;
				  mask-size: 0%;
				  -webkit-mask-position: center;
				  mask-position: center;
				  -webkit-mask-repeat: no-repeat;
				  mask-repeat: no-repeat;
				  transition: -webkit-mask-size 1.2s cubic-bezier(0.16, 1, 0.3, 1), mask-size 1.2s cubic-bezier(0.16, 1, 0.3, 1), border-radius 1.2s ease;
				  border-radius: 50%;
				}
				section[data-intersecting="true"] .mask-image-reveal {
				  -webkit-mask-size: 200%;
				  mask-size: 200%;
				  border-radius: 4px;
				}
			`,
        }}
      />
    </section>
  );
}

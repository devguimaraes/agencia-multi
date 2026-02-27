import { HeroPageBackground } from "@/components/layout/HeroPageBackground";
import { FaqIntegrado } from "@/components/marketing/FaqIntegrado";
import { SomosDoRio } from "@/components/marketing/SomosDoRio";
import { RevealSection, StaggerContainer } from "@/components/ui/Reveal";
import { SERVICES } from "@/data/services";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Serviço não encontrado",
    };
  }

  return {
    title: `${service.title} | Agência Multi BR`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* --- 1. HERO DO SERVIÇO --- */}
      <section className="relative min-h-[60vh] flex flex-col justify-end bg-multi-roxo text-white overflow-hidden pt-32 pb-20 md:pb-24">
        {/* Three.js Background Animado */}
        <HeroPageBackground />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-multi-black via-multi-roxo/40 to-transparent opacity-85 z-1" />
        <div className="grain high-opacity z-2" />

        {/* Asset decorativo — Folha bananeira (canto sup. direito) */}
        <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[340px] md:h-[340px] opacity-[0.10] md:opacity-[0.15] mix-blend-overlay pointer-events-none z-3 rotate-30 hidden sm:block">
          <Image
            src="/assets/brasilidades/hero_folha_bananeira.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Asset decorativo — Folhas (canto inf. esquerdo) */}
        <div className="absolute bottom-0 left-0 w-[180px] h-[180px] md:w-[280px] md:h-[280px] opacity-[0.08] md:opacity-[0.12] mix-blend-overlay pointer-events-none z-3 -rotate-12 hidden sm:block">
          <Image
            src="/assets/brasilidades/folhas_v2.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Blob de luz rosa */}
        <div className="absolute top-1/2 -right-20 md:right-0 -translate-y-1/2 w-[300px] h-[300px] bg-multi-rosa/20 rounded-full blur-[80px] pointer-events-none z-1" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
          <RevealSection>
            <nav className="mb-8 md:mb-12 font-poppins text-sm md:text-base text-white/50 tracking-wide uppercase">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="mx-3">/</span>
              <Link
                href="/servicos"
                className="hover:text-white transition-colors"
              >
                Serviços
              </Link>
              <span className="mx-3">/</span>
              <span className="text-multi-amarelo font-medium">
                {service.title}
              </span>
            </nav>
          </RevealSection>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-16">
            <RevealSection delay className="max-w-4xl">
              <div className="flex items-center gap-6 mb-6">
                <span className="text-5xl md:text-6xl text-multi-amarelo bg-white/10 p-4 rounded-2xl w-fit">
                  {service.icon}
                </span>
              </div>
              <h1 className="font-display flex flex-col gap-4">
                <span className="font-poppins font-semibold uppercase tracking-[0.2em] text-xs md:text-sm text-white/60">
                  Agência de Marketing Digital
                </span>
                <span className="text-[clamp(48px,6vw,80px)] leading-[0.9] text-white">
                  {service.title.split(" ")[0]} <br />
                  <span className="text-multi-amarelo">
                    {service.title.substring(service.title.indexOf(" ") + 1)}
                  </span>
                </span>
              </h1>
            </RevealSection>

            <RevealSection delay className="max-w-md pb-2">
              <p className="font-poppins text-lg md:text-xl text-white/80 leading-relaxed border-l-2 border-multi-amarelo/50 pl-6">
                {service.details.hero}
              </p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* --- 2. O PROBLEMA vs A SOLUÇÃO MULTI + ENTREGÁVEIS --- */}
      <section className="min-h-screen flex items-center py-24 md:py-32 bg-multi-cream relative">
        {/* Wrapper com overflow-hidden apenas para os elementos decorativos para não quebrar o sticky */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Asset decorativo — Caju (canto inf. direito) */}
          <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] opacity-[0.10] rotate-15 hidden md:block">
            <Image
              src="/assets/brasilidades/caju_v2.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 relative">
            {/* Coluna Esquerda: Contexto */}
            <div className="lg:col-span-8 space-y-12">
              <StaggerContainer>
                {/* Problema */}
                <div className="relative">
                  <span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-multi-roxo/40 mb-4 block">
                    O Problema
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl text-multi-black leading-tight mb-4 max-w-2xl">
                    {service.details.problem}
                  </h2>
                </div>

                {/* Solução Full Width */}
                <div className="relative pl-6 md:pl-8 border-l-[3px] border-multi-rosa bg-white/50 p-6 md:p-8 rounded-xl shadow-sm mt-12 mb-8">
                  <span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-multi-rosa/80 mb-4 block">
                    A Solução Multi
                  </span>
                  <p className="font-poppins text-xl md:text-2xl text-gray-800 leading-relaxed font-semibold">
                    {service.details.solution}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                  {/* Bloco 1: Primeira Metade dos Parágrafos */}
                  <div className="space-y-6">
                    {service.details.content &&
                      service.details.content.length > 0 && (
                        <>
                          {service.details.content
                            .slice(
                              0,
                              Math.ceil(service.details.content.length / 2),
                            )
                            .map((paragraph, index) => (
                              <p
                                key={`col1-${index}`}
                                className="font-poppins text-lg text-gray-700 leading-relaxed"
                              >
                                {paragraph}
                              </p>
                            ))}
                        </>
                      )}
                  </div>

                  {/* Bloco 2: Segunda Metade dos Parágrafos */}
                  <div className="space-y-6">
                    {service.details.content &&
                      service.details.content.length > 1 && (
                        <>
                          {service.details.content
                            .slice(
                              Math.ceil(service.details.content.length / 2),
                            )
                            .map((paragraph, index) => (
                              <p
                                key={`col2-${index}`}
                                className="font-poppins text-lg text-gray-700 leading-relaxed"
                              >
                                {paragraph}
                              </p>
                            ))}
                        </>
                      )}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-8">
                  <a
                    href="/contato"
                    className="group relative inline-flex overflow-hidden bg-multi-roxo text-white font-poppins font-bold text-lg px-8 py-5 rounded-sm shadow-xl items-center justify-center transition-transform hover:-translate-y-1"
                  >
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-multi-roxo flex items-center">
                      Conheça nossa agência de marketing digital
                      <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-multi-amarelo rounded-sm transform scale-0 origin-center transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.5]" />
                  </a>
                </div>
              </StaggerContainer>
            </div>

            {/* Coluna Direita: Box de Entregáveis */}
            <div className="lg:col-span-4 flex items-center justify-center">
              <RevealSection delay className="w-full">
                <div className="bg-white rounded-2xl p-10 md:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-black/5 relative overflow-hidden">
                  {/* Decorator */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-multi-amarelo/10 rounded-bl-full -mr-20 -mt-20" />

                  <h3 className="font-display text-3xl text-multi-roxo mb-10 relative z-10">
                    O que entregamos
                  </h3>

                  <StaggerContainer className="space-y-6 relative z-10 text-left">
                    {service.details.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-5 group">
                        <div className="w-8 h-8 rounded-full bg-multi-cream flex items-center justify-center shrink-0 group-hover:bg-multi-amarelo transition-colors duration-300">
                          <CheckCircle2 className="w-5 h-5 text-multi-roxo" />
                        </div>
                        <span className="text-gray-700 text-lg font-poppins pt-1 leading-tight group-hover:text-multi-black transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </StaggerContainer>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. SHOWCASE DE CONTEÚDO --- */}
      {(service.slug === "gestao-de-redes-sociais" ||
        service.slug === "conteudo") && (
        <SomosDoRio variant="content-showcase" />
      )}

      {/* --- 4. FAQ ESPECÍFICO DO SERVIÇO --- */}
      <FaqIntegrado items={service.details.faq} />

      {/* --- 5. CTA FINAL (Específico do Serviço) --- */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-multi-roxo text-white overflow-hidden py-24 md:py-32">
        <div className="grain" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-multi-rosa/20 rounded-full blur-[100px] pointer-events-none" />

        {/* Asset Decorativo — Ícone Branco */}
        <div className="absolute top-[-15%] -left-[15%] w-[90%] md:w-[60%] aspect-square opacity-[0.06] pointer-events-none z-0">
          <Image
            src="/assets/brand/icone-branco-transparente.png"
            alt=""
            fill
            className="object-contain -rotate-12 scale-125"
            aria-hidden="true"
            sizes="(max-width: 768px) 90vw, 60vw"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center max-w-4xl">
          <RevealSection>
            <h2 className="font-display text-[clamp(40px,6vw,80px)] text-white leading-[0.9] mb-8">
              Pronto para{" "}
              <span className="text-multi-amarelo text-outline-yellow">
                começar?
              </span>
            </h2>
          </RevealSection>

          <RevealSection delay>
            <p className="font-poppins text-xl md:text-2xl mb-12 text-white/80 max-w-2xl mx-auto">
              Transforme seus resultados com nossa expertise em{" "}
              <strong className="text-multi-amarelo font-medium">
                {service.title}
              </strong>
              .
            </p>
          </RevealSection>

          <RevealSection delay>
            <a
              href="/contato"
              className="group relative overflow-hidden bg-white text-multi-roxo font-poppins font-bold text-lg px-10 py-6 rounded-sm shadow-xl flex items-center justify-center transition-transform hover:-translate-y-1"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Falar com Consultor
              </span>
              <div className="absolute inset-0 bg-multi-roxo rounded-sm transform scale-0 origin-center transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.5]" />
            </a>
          </RevealSection>
        </div>
      </section>
    </>
  );
}

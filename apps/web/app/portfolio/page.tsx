import { RevealSection, StaggerContainer } from "@/components/ui/Reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PROJECTS } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Portfolio | Agência Multi BR",
  description:
    "Confira nossos cases de sucesso em Branding, Tráfego e Conteúdo.",
};

export default function PortfolioPage() {
  const categories = ["Todos", "Branding", "Tráfego", "Conteúdo", "Web Design"];

  return (
    <>
      {/* --- 1. HERO PORTFOLIO --- */}
      <section className="relative min-h-[50vh] flex flex-col justify-end bg-multi-black text-white overflow-hidden pt-32 pb-20 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-multi-roxo)_0%,_transparent_50%)] opacity-30" />
        <div className="grain high-opacity" />

        {/* Huge background text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none">
          <h2 className="font-display text-[25vw] leading-none whitespace-nowrap">
            WORK
          </h2>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
          <RevealSection>
            <span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-multi-amarelo mb-6 block">
              Nossos Projetos
            </span>
          </RevealSection>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-16">
            <RevealSection delay className="max-w-4xl">
              <h1 className="font-display text-[var(--text-section)] md:text-[clamp(64px,8vw,120px)] leading-[0.9] text-white">
                Cases de <br />
                <span className="text-multi-rosa">Sucesso</span>
              </h1>
            </RevealSection>

            <RevealSection delay className="max-w-md pb-2">
              <p className="font-poppins text-lg md:text-xl text-white/70 leading-relaxed border-l-2 border-multi-rosa/50 pl-6">
                Projetos que transformaram negócios e multiplicaram vendas
                através de inteligência e design.
              </p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* --- 2. GRID & FILTROS --- */}
      <section className="py-24 md:py-40 bg-[#FDFCFB] relative overflow-hidden isolate min-h-screen">
        <div className="grain light opacity-30 z-0" />

        {/* Blobs Luminosos */}
        <div className="absolute top-[5%] left-[-8%] w-[500px] h-[500px] bg-multi-amarelo/5 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-[10%] right-[-8%] w-[600px] h-[600px] bg-multi-roxo/5 blur-[150px] rounded-full pointer-events-none -z-10" />

        {/* Marca d'água tipográfica */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none -z-10 overflow-hidden">
          <span className="font-display text-[25vw] leading-none text-multi-roxo/[0.012] whitespace-nowrap uppercase tracking-[-0.05em] block">
            Cases · Work · Multi
          </span>
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <Tabs defaultValue="Todos" className="w-full">
            <RevealSection className="flex justify-center mb-20">
              <TabsList className="bg-white/60 backdrop-blur-xl border border-multi-roxo/10 h-auto p-2 flex-wrap justify-center rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] gap-2">
                {categories.map((cat) => (
                  <TabsTrigger
                    key={cat}
                    value={cat}
                    className="data-[state=active]:bg-multi-roxo data-[state=active]:text-white data-[state=active]:shadow-[0_4px_15px_rgba(93,1,138,0.25)] font-poppins text-sm md:text-base px-6 py-3 rounded-full transition-all duration-500 hover:bg-multi-roxo/5 text-multi-black/70"
                  >
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </RevealSection>

            {categories.map((cat) => (
              <TabsContent key={cat} value={cat} className="mt-0 outline-none">
                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                  {PROJECTS.filter(
                    (p) => cat === "Todos" || p.category === cat,
                  ).map((project) => (
                    <div
                      key={project.slug}
                      className="group relative flex flex-col bg-white rounded-3xl overflow-hidden hover:-translate-y-3 transition-all duration-700 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_60px_-15px_rgba(93,1,138,0.12)] border border-multi-roxo/5"
                    >
                      {/* Imagem Container */}
                      <div className="aspect-[4/3] relative overflow-hidden bg-multi-roxo/5">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.06]"
                        />

                        {/* Overlay Premium */}
                        <div className="absolute inset-0 bg-linear-to-t from-multi-black/70 via-multi-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex flex-col items-center justify-center gap-4">
                          <div className="w-14 h-14 rounded-full bg-multi-amarelo text-multi-roxo flex items-center justify-center transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100 shadow-[0_8px_25px_rgba(250,195,42,0.3)]">
                            <ArrowRight className="w-5 h-5 -rotate-45" />
                          </div>
                          <span className="font-poppins font-bold text-white tracking-widest uppercase text-xs transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                            Ver Projeto
                          </span>
                        </div>

                        {/* Badge da Categoria (Canto Superior) */}
                        <div className="absolute top-4 left-4 z-10">
                          <span className="inline-block px-4 py-1.5 bg-multi-amarelo text-multi-roxo text-[10px] font-poppins font-bold uppercase tracking-widest rounded-full shadow-sm">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Info Container */}
                      <div className="p-8 flex flex-col flex-1">
                        <p className="font-poppins font-bold text-[10px] tracking-[0.3em] uppercase text-multi-rosa/60 mb-3">
                          {project.client}
                        </p>
                        <h3 className="font-display text-2xl text-multi-black mb-3 group-hover:text-multi-roxo transition-colors duration-500">
                          {project.title}
                        </h3>
                        <p className="font-poppins text-gray-500 line-clamp-2 text-sm leading-relaxed mb-5">
                          {project.description}
                        </p>

                        {/* Tags de Serviços */}
                        {project.services && (
                          <div className="flex flex-wrap gap-2 mt-auto">
                            {project.services.map((s) => (
                              <span
                                key={s}
                                className="text-[10px] font-poppins font-medium text-multi-roxo/60 bg-multi-roxo/5 px-3 py-1 rounded-full border border-multi-roxo/10"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </StaggerContainer>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* --- 3. CTA FINAL --- */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-multi-roxo text-white overflow-hidden py-32 md:py-48 isolate">
        <div className="grain opacity-20" />

        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-multi-rosa/10 blur-[150px] -z-10 rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-multi-amarelo/5 blur-[120px] -z-10 rounded-full" />

        {/* Asset Decorativo — Ícone Branco */}
        <div className="absolute top-[-15%] -right-[15%] w-[90%] md:w-[60%] aspect-square opacity-[0.06] pointer-events-none z-0">
          <Image
            src="/assets/brand/icone-branco-transparente.png"
            alt=""
            fill
            className="object-contain rotate-12 scale-125"
            aria-hidden="true"
            sizes="(max-width: 768px) 90vw, 60vw"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center max-w-5xl">
          <RevealSection>
            <span className="font-poppins font-bold text-label tracking-[0.5em] uppercase text-multi-amarelo mb-12 block">
              Próximo Passo
            </span>
          </RevealSection>

          <RevealSection delay className="max-w-5xl">
            <h2 className="font-display text-[clamp(44px,8vw,110px)] text-white leading-[0.85] mb-12 tracking-tighter">
              Pronto para ser <br />
              <span className="text-multi-amarelo italic font-light">
                nosso próximo case?
              </span>
            </h2>
            <p className="font-poppins text-xl text-white/70 max-w-2xl mx-auto mb-16 leading-relaxed">
              Cada projeto começa com uma conversa. Conte o que precisa e vamos
              transformar sua marca em referência.
            </p>
          </RevealSection>

          <RevealSection delay>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <a
                href="/contato"
                className="group relative overflow-hidden bg-multi-amarelo text-multi-roxo font-poppins font-bold text-lg px-12 py-7 rounded-lg shadow-[0_20px_40px_-10px_rgba(250,195,42,0.3)] flex items-center justify-center transition-all hover:-translate-y-1 hover:shadow-[0_25px_50px_-12px_rgba(250,195,42,0.4)]"
              >
                <span className="relative z-10">Fale com a Multi agora</span>
                <div className="absolute inset-0 bg-white rounded-lg transform scale-0 origin-center transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.5]" />
              </a>

              <a
                href="/servicos"
                className="group flex items-center justify-center gap-4 font-poppins font-bold text-lg px-10 py-6 text-white border-2 border-white/20 rounded-lg hover:border-multi-amarelo hover:text-multi-amarelo transition-all"
              >
                Nossos Serviços
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}

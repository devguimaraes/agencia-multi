import { RevealSection, StaggerContainer } from "@/components/ui/Reveal";
import { ArrowRight, Rocket, Target, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre a Agência | Agência Multi BR",
  description:
    "Conheça a história, valores e a equipe por trás da Agência Multi BR.",
};

export default function SobrePage() {
  return (
    <>
      {/* --- 1. HERO SOBRE --- */}
      <section className="relative min-h-[60vh] flex flex-col justify-end bg-multi-roxo text-white overflow-hidden pt-32 pb-20 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-tr from-multi-black via-multi-roxo to-multi-rosa/20 opacity-95" />
        <div className="grain high-opacity" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
          <RevealSection>
            <span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-multi-amarelo mb-6 block">
              Quem Somos
            </span>
          </RevealSection>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-16">
            <RevealSection delay className="max-w-4xl">
              <h1 className="font-display text-[var(--text-section)] md:text-[clamp(64px,8vw,120px)] leading-[0.9] text-white">
                Nossa <br />
                <span className="text-multi-rosa">História</span>
              </h1>
            </RevealSection>

            <RevealSection delay className="max-w-md pb-2">
              <p className="font-poppins text-lg md:text-xl text-white/70 leading-relaxed border-l-2 border-multi-rosa/50 pl-6">
                Transformando ideias em resultados digitais com estratégia,
                criatividade e dados reais.
              </p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* --- 2. HISTÓRIA --- */}
      <section className="py-24 md:py-32 bg-multi-cream relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <RevealSection>
              <div className="relative aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden bg-multi-black group">
                {/* Placeholder Pattern Premium */}
                <div className="absolute inset-0 bg-multi-roxo mix-blend-multiply opacity-20 group-hover:opacity-0 transition-opacity duration-700" />
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--color-multi-amarelo)_0%,_transparent_70%)]" />

                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                  <Target className="w-16 h-16 text-multi-amarelo mb-6 opacity-50" />
                  <span className="text-multi-amarelo font-display text-2xl tracking-wide uppercase opacity-50">
                    Placeholder Imagem QG
                  </span>
                </div>

                {/* Decorator Outline */}
                <div className="absolute inset-4 rounded-[1.5rem] border border-white/10" />
              </div>
            </RevealSection>

            <div className="space-y-10">
              <RevealSection delay>
                <span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-multi-roxo/40 mb-4 block">
                  Manifesto
                </span>
                <h2 className="font-display text-[clamp(40px,5vw,64px)] text-multi-black leading-[1] mb-8">
                  Do Bilhete ao <br />
                  <span className="text-multi-roxo">Digital</span>
                </h2>
              </RevealSection>

              <RevealSection delay>
                <div className="prose prose-lg text-gray-700 font-poppins leading-relaxed">
                  <p>
                    A Agência Multi BR nasceu da paixão por comunicação e da
                    necessidade de levar soluções reais para o mercado.
                    Começamos pequenos, mas com uma visão gigante:{" "}
                    <strong>conectar marcas ao seu público ideal</strong> sem
                    fórmulas mágicas, apenas com trabalho duro e visão
                    analítica.
                  </p>
                  <p>
                    Hoje, somos uma referência em Branding, Conteúdo e Tráfego
                    Pago. Nosso propósito é ajudar empresas a escaparem da
                    mediocridade visual e estratégica, escalando seus resultados
                    através de processos validadas e uma criatividade focada no
                    que importa: <strong>conversão</strong>.
                  </p>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. VALORES / PILARES --- */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl text-center">
          <RevealSection className="mb-20">
            <span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-multi-roxo/40 mb-4 block">
              Nossos Pilares
            </span>
            <h2 className="font-display text-[var(--text-section)] text-multi-roxo leading-none mb-6">
              O que nos Move
            </h2>
            <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
              Estes são os valores inegociáveis que direcionam nossas entregas e
              o relacionamento com cada parceiro.
            </p>
          </RevealSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: Target,
                title: "Foco em Resultado",
                desc: "Não entregamos apenas likes ou posts bonitos. Entregamos crescimento real para o seu faturamento e expansão da sua marca.",
              },
              {
                icon: Users,
                title: "Parceria Real",
                desc: "Diferente de agências tradicionais, jogamos junto. Tratamos o budget do cliente com o mesmo rigor que tratamos o nosso.",
              },
              {
                icon: Rocket,
                title: "Inovação Contínua",
                desc: "Estamos obcecados por melhorias. Testamos novas features, novas dores e novos ângulos todos os dias para sair na frente.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="group bg-multi-cream rounded-[2rem] p-10 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(93,1,138,0.15)] relative overflow-hidden"
              >
                {/* Blobs de fundo no hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-multi-roxo/5 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-[1.5]" />

                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 relative z-10 text-multi-roxo shadow-sm group-hover:text-multi-rosa transition-colors">
                  <value.icon className="w-8 h-8" />
                </div>

                <h3 className="font-display text-3xl text-multi-black mb-4 relative z-10 group-hover:text-multi-roxo transition-colors">
                  {value.title}
                </h3>

                <p className="font-poppins text-gray-600 leading-relaxed relative z-10">
                  {value.desc}
                </p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* --- 4. CTA FINAL SOBRE --- */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-multi-roxo text-white overflow-hidden py-24 md:py-32">
        <div className="grain" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-multi-rosa/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <RevealSection>
            <span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-multi-amarelo mb-8 block">
              Próximos Passos
            </span>
          </RevealSection>

          <RevealSection delay className="max-w-4xl">
            <h2 className="font-display text-[clamp(40px,7vw,90px)] text-white leading-[0.9] mb-10">
              Pronto para escalar <br />
              <span className="text-multi-amarelo text-outline-yellow">
                seu negócio?
              </span>
            </h2>
          </RevealSection>

          <RevealSection delay>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contato"
                className="group relative overflow-hidden bg-white text-multi-roxo font-poppins font-bold text-lg px-10 py-6 rounded-sm shadow-xl flex items-center justify-center transition-transform hover:-translate-y-1"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Falar com Consultor
                </span>
                <div className="absolute inset-0 bg-multi-roxo rounded-sm transform scale-0 origin-center transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.5]" />
              </a>

              <a
                href="/servicos"
                className="group flex items-center justify-center gap-3 font-poppins font-bold text-lg px-8 py-5 text-white border-2 border-white/20 rounded-sm hover:border-multi-amarelo hover:text-multi-amarelo transition-colors"
              >
                Ver Serviços
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}

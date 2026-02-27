import { RevealSection, StaggerContainer } from "@/components/ui/Reveal";
import { CheckCircle2, Target, TrendingUp, Users } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Mentoria para Social Media | Saia do Freelancer para Agência | Multi BR",
  description:
    "Mentoria exclusiva para Social Medias que querem estruturar uma agência real: equipe, processos e contratos de alto ticket. Método Multi BR.",
};

export default function MentorshipPage() {
  return (
    <>
      {/* --- 1. HERO EDITORIAL --- */}
      <section className="relative min-h-[90vh] flex items-center bg-multi-roxo text-white overflow-hidden pt-32 pb-20">
        {/* Fundo imersivo com gradiente e grain */}
        <div className="absolute inset-0 bg-[var(--grad-hero)] opacity-90" />
        <div className="grain high-opacity" />

        {/* Elementos botânicos sutis (reutilizando da Home) */}
        <div className="absolute -top-10 -right-10 w-[300px] opacity-10 rotate-12 mix-blend-overlay pointer-events-none">
          <Image
            src="/assets/brasilidades/flor_hibisco_v5.png"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="absolute -bottom-20 -left-10 w-[400px] opacity-15 -rotate-15 mix-blend-overlay pointer-events-none">
          <Image
            src="/assets/brasilidades/ramo_cafe_v3.png"
            alt=""
            width={400}
            height={400}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center max-w-5xl">
          <RevealSection>
            <span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-white/50 mb-6 block">
              Para Social Medias que ousam mais
            </span>
          </RevealSection>

          <RevealSection delay>
            <h1 className="font-display text-[clamp(48px,10vw,120px)] leading-[0.9] text-white mb-8">
              De Freelancer Solo <br className="hidden md:block" />
              <span className="text-multi-amarelo">para Dono de Agência</span>
            </h1>
          </RevealSection>

          <RevealSection delay>
            <p className="font-poppins text-lead text-white/80 max-w-2xl mx-auto mb-12">
              Você entrega resultado para os clientes dos outros. Está na hora
              de construir a sua estrutura. Mentoria prática para Social Medias
              que querem montar uma agência com equipe, processo e ticket acima
              de R$&nbsp;10k/mês.
            </p>
          </RevealSection>

          <RevealSection delay>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-[slide-up_0.8s_ease_0.6s_forwards]">
              <a
                href="/contato"
                className="group relative overflow-hidden bg-multi-amarelo text-multi-roxo font-poppins font-bold text-sm md:text-lg px-8 py-5 md:px-10 md:py-6 rounded-sm shadow-xl flex items-center justify-center gap-3 w-full sm:w-auto transition-transform hover:-translate-y-1"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Quero Estruturar Minha Agência
                </span>
                <div className="absolute inset-0 bg-multi-rosa rounded-sm transform scale-0 origin-center transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.5]" />
              </a>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* --- 2. DORES (LISTA EDITORIAL) --- */}
      <section className="py-24 md:py-32 bg-multi-cream text-multi-black relative border-b border-black/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Coluna Esquerda: Contexto */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <RevealSection>
                  <span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-multi-roxo/40 mb-4 block">
                    Esse é você hoje?
                  </span>
                  <h2 className="font-display text-[clamp(42px,3.5vw,52px)] text-multi-roxo leading-[0.95] mb-6">
                    Você faz tudo.
                    <br className="md:hidden" />
                    <br className="hidden md:block" /> E ainda assim
                    <br className="hidden md:block" />{" "}
                    <span className="text-multi-rosa">falta dinheiro?</span>
                  </h2>
                  <p className="font-poppins text-lg text-gray-600">
                    Social Media que faz tudo sozinho não tem agência — tem um
                    emprego disfarçado. O problema não é dedicação. É que você
                    nunca aprendeu a montar{" "}
                    <strong>uma estrutura que trabalhe por você</strong>.
                  </p>
                </RevealSection>
              </div>
            </div>

            {/* Coluna Direita: Lista Interativa */}
            <div className="lg:col-span-7">
              <StaggerContainer className="flex flex-col border-t border-black/10">
                {[
                  {
                    title:
                      "Você é designer, copy, analista e atendimento ao mesmo tempo",
                    desc: "No modelo 'eu agência', você não tem horário. Tem urgência permanente e cliente que não respeita limite — porque nunca assinou um processo.",
                  },
                  {
                    title:
                      "Seus clientes pagam R$ 800, R$ 1.500. E acham caro.",
                    desc: "Sem case documentado, posicionamento claro e processo comercial, qualquer preço parece alto. Você concorre com freelancer, não com agência.",
                  },
                  {
                    title:
                      "Você ganha mais, gasta mais energia — o lucro não muda",
                    desc: "Cada cliente novo é mais trabalho para o mesmo modelo quebrado. Sem processo, escalar só aumenta o caos — não o faturamento líquido.",
                  },
                ].map((item, idx) => (
                  <div
                    key={item.title}
                    className="group relative flex flex-col py-8 md:py-10 border-b border-black/10 hover:bg-multi-roxo/5 transition-colors duration-300 px-4 md:px-8"
                  >
                    <div className="flex items-start gap-4 md:gap-6 mb-4">
                      <span className="font-poppins font-bold text-xl text-multi-rosa/50 group-hover:text-multi-rosa transition-colors">
                        {(idx + 1).toString().padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-2xl md:text-3xl text-multi-black group-hover:text-multi-roxo transition-colors m-0">
                        {item.title}
                      </h3>
                    </div>
                    <p className="font-poppins text-gray-600 max-w-lg ml-8 md:ml-12">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. METODOLOGIA (GRID COM ICONS) --- */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <RevealSection className="text-center mb-16 md:mb-24">
            <span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-multi-roxo/40 mb-4 block">
              O Método Multi
            </span>
            <h2 className="font-display text-[clamp(40px,5vw,64px)] text-multi-roxo leading-none relative inline-block">
              4 Pilares Para Sair do Freelancer
              <div className="absolute -bottom-2 left-0 h-[2px] bg-multi-amarelo w-[80%]" />
            </h2>
          </RevealSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Posicionamento de Autoridade",
                text: "Como se especializar em um nicho, criar cases documentados e ser percebido como referência — não como 'mais um social media'.",
              },
              {
                icon: TrendingUp,
                title: "Funil Comercial Próprio",
                text: "Do primeiro contato ao contrato assinado: pitch, proposta e followup que vendem serviços acima de R$ 3.500/mês sem precisar dar desconto.",
              },
              {
                icon: CheckCircle2,
                title: "Operação Sem Você no Centro",
                text: "Briefings, aprovações e relatórios no piloto automático. Como documentar seu processo para que outra pessoa execute — e você supervisione.",
              },
              {
                icon: Users,
                title: "Primeiro Colaborador",
                text: "Quando e quem contratar primeiro, como precificar o serviço absorvendo o custo e como delegar sem perder a qualidade entregue.",
              },
            ].map((mod) => (
              <div
                key={mod.title}
                className="group bg-multi-cream p-10 rounded-lg hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
              >
                {/* Decorator background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-multi-amarelo/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150" />

                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 relative z-10 text-multi-roxo group-hover:text-multi-rosa transition-colors">
                  <mod.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl text-multi-roxo mb-3 relative z-10">
                  {mod.title}
                </h3>
                <p className="font-poppins text-gray-600 relative z-10 leading-relaxed">
                  {mod.text}
                </p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* --- 4. CTA FINAL (MONUMENTAL) --- */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-multi-roxo text-white overflow-hidden py-24 md:py-32">
        <div className="grain" />

        {/* Circulo decorativo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-multi-rosa/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <RevealSection>
            <span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-multi-amarelo mb-8 block">
              Turma com vagas contadas
            </span>
          </RevealSection>

          <RevealSection delay>
            <h2 className="font-display text-[clamp(40px,7vw,90px)] text-white leading-[0.9] mb-10">
              Você pode continuar <br />
              fazendo sozinho. <br className="hidden md:block" />
              <span className="text-multi-amarelo text-outline-yellow">
                Ou aprender como a Multi faz.
              </span>
            </h2>
          </RevealSection>

          <RevealSection delay>
            <a
              href="/contato"
              className="group relative overflow-hidden bg-white text-multi-roxo font-poppins font-bold text-lg px-10 py-6 rounded-sm shadow-xl flex items-center justify-center transition-transform hover:-translate-y-1"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Garantir Minha Vaga Agora
              </span>
              <div className="absolute inset-0 bg-multi-roxo rounded-sm transform scale-0 origin-center transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.5]" />
            </a>
            <p className="font-poppins text-sm text-white/40 mt-6 max-w-xs mx-auto text-center leading-relaxed">
              Últimas vagas para acompanhamento próximo. Sem promessa de milagre
              — só método que funciona.
            </p>
          </RevealSection>
        </div>
      </section>
    </>
  );
}

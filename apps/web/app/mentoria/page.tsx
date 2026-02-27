import { RevealSection, StaggerContainer } from "@/components/ui/Reveal";
import {
  CheckCircle2,
  LineChart,
  Target,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
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

      {/* --- 2. DORES (LISTA EDITORIAL DARK OBERVABLE) --- */}
      <section className="py-24 md:py-32 bg-multi-black text-white relative border-b border-white/5 overflow-hidden">
        {/* Glow de fundo */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-multi-roxo/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Coluna Esquerda: Contexto */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <RevealSection>
                  <span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-white/30 mb-6 block">
                    Esse é você hoje?
                  </span>
                  <h2 className="font-display text-[clamp(42px,4vw,64px)] text-white leading-[0.95] mb-8">
                    Você faz tudo.
                    <br className="md:hidden" />
                    <br className="hidden md:block" /> E ainda assim
                    <br className="hidden md:block" />{" "}
                    <span className="text-multi-rosa">falta dinheiro?</span>
                  </h2>
                  <p className="font-poppins text-xl text-white/60 leading-relaxed border-l-2 border-multi-rosa/50 pl-6">
                    Social Media que faz tudo sozinho não tem agência — tem um
                    emprego disfarçado. O problema não é dedicação. É que você
                    nunca aprendeu a montar{" "}
                    <strong className="text-multi-amarelo font-medium">
                      uma estrutura que trabalhe por você
                    </strong>
                    .
                  </p>
                </RevealSection>
              </div>
            </div>

            {/* Coluna Direita: Lista Interativa Editorial */}
            <div className="lg:col-span-7">
              <StaggerContainer className="flex flex-col border-t border-white/10 mt-10 lg:mt-0">
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
                    title: "Você ganha mais, gasta energia — o lucro não muda",
                    desc: "Cada cliente novo é mais trabalho para o mesmo modelo quebrado. Sem processo, escalar só aumenta o caos — não o faturamento líquido.",
                  },
                ].map((item, idx) => (
                  <div
                    key={item.title}
                    className="group relative flex flex-col py-10 md:py-12 border-b border-white/10 hover:bg-multi-roxo/10 transition-colors duration-400 ease-out px-4 md:px-8"
                  >
                    <div className="flex items-start gap-4 md:gap-8 mb-6">
                      <div className="flex items-center gap-3 pt-1">
                        {/* Indicador Hover (Seta Invisível) */}
                        <span className="text-multi-amarelo text-xl font-bold opacity-0 -translate-x-4 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 hidden sm:block">
                          →
                        </span>
                        <span className="font-poppins font-light text-xl text-white/30 tracking-[0.2em] shrink-0 group-hover:text-multi-amarelo/50 transition-colors">
                          {(idx + 1).toString().padStart(2, "0")} —
                        </span>
                      </div>

                      <h3 className="font-display text-2xl md:text-[32px] md:leading-[1.1] text-white group-hover:text-multi-amarelo transition-colors duration-400 m-0 w-full group-hover:translate-x-1">
                        {item.title}
                      </h3>
                    </div>

                    <p className="font-poppins text-lg text-white/50 max-w-lg ml-0 sm:ml-12 md:ml-[100px] leading-relaxed group-hover:text-white/80 transition-colors duration-400">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. METODOLOGIA (GRID COM 6 PILARES) --- */}
      <section className="py-24 md:py-32 bg-multi-cream/30 relative">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <RevealSection className="text-center mb-16 md:mb-24">
            <span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-multi-roxo/40 mb-4 block">
              O Método Multi
            </span>
            <h2 className="font-display text-[clamp(40px,5vw,64px)] text-multi-roxo leading-none relative inline-block">
              6 Pilares Para Sair do Freelancer
              <div className="absolute -bottom-2 left-0 h-[2px] bg-multi-amarelo w-[80%]" />
            </h2>
          </RevealSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
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
                text: "Briefings, aprovações e relatórios no piloto automático. Como documentar processo para que outra pessoa execute e você supervisione.",
              },
              {
                icon: Users,
                title: "Primeiro Colaborador",
                text: "Quando e quem contratar primeiro, como precificar o serviço absorvendo o custo e como delegar sem perder a qualidade entregue.",
              },
              {
                icon: LineChart,
                title: "Escala e Precificação",
                text: "Como reestruturar seus pacotes, aumentar o ticket cobrado e parar de vender horas, conectando preço ao valor percebido e resultado entregue.",
              },
              {
                icon: Wallet,
                title: "Gestão Financeira da Agência",
                text: "A separação definitiva entre PF e PJ. Como provisionar caixa, calcular margem de contribuição e finalmente ver lucro no final do mês.",
              },
            ].map((mod) => (
              <div
                key={mod.title}
                className="group bg-multi-cream rounded-[2.5rem] p-10 hover:-translate-y-2 transition-all duration-700 hover:shadow-[0_20px_40px_-15px_rgba(93,1,138,0.12)] relative overflow-hidden flex flex-col items-start"
              >
                {/* Blobs de fundo no hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-multi-roxo/5 rounded-bl-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-[1.5]" />

                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 relative z-10 text-multi-roxo shadow-sm group-hover:text-multi-rosa transition-colors duration-500">
                  <mod.icon className="w-8 h-8" />
                </div>

                <h3 className="font-display text-2xl text-multi-black mb-4 relative z-10 group-hover:text-multi-roxo transition-colors duration-500">
                  {mod.title}
                </h3>

                <p className="font-poppins text-gray-600 leading-relaxed relative z-10">
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

        {/* Asset Decorativo — Logomarca Branca */}
        <div className="absolute top-1/2 -translate-y-1/2 -right-[20%] w-[80%] md:w-[55%] aspect-3/1 opacity-[0.06] pointer-events-none z-0">
          <Image
            src="/assets/brand/logomarca-branca.png"
            alt=""
            fill
            className="object-contain rotate-12"
            aria-hidden="true"
            sizes="(max-width: 768px) 80vw, 55vw"
          />
        </div>

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

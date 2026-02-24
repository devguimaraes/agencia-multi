import { ContactForm } from "@/components/marketing/ContactForm";
import { RevealSection, StaggerContainer } from "@/components/ui/Reveal";
import {
  ArrowRight,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Agência Multi BR",
  description: "Fale conosco e impulsione seu negócio.",
};

export default function ContactPage() {
  return (
    <>
      {/* --- 1. HERO CONTATO --- */}
      <section className="relative min-h-[50vh] flex flex-col justify-end bg-multi-black text-white overflow-hidden pt-32 pb-20 md:pb-24">
        <div className="absolute inset-0 bg-linear-to-t from-multi-black to-multi-roxo/40 opacity-90" />
        <div className="grain high-opacity" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
          <RevealSection>
            <span className="font-poppins font-bold text-label tracking-[0.4em] uppercase text-multi-amarelo mb-6 block">
              Fale Conosco
            </span>
          </RevealSection>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-16">
            <RevealSection delay className="max-w-4xl">
              <h1 className="font-display text-white md:text-[clamp(64px,8vw,120px)] leading-[0.9]">
                Vamos <br />
                <span className="text-multi-rosa">Conversar?</span>
              </h1>
            </RevealSection>

            <RevealSection delay className="max-w-md pb-2">
              <p className="font-poppins text-lg md:text-xl text-white/70 leading-relaxed border-l-2 border-multi-rosa/50 pl-6">
                Estamos prontos para ouvir seus desafios e criar soluções
                personalizadas que colocam sua empresa no próximo nível.
              </p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* --- 2. FORMAS DE CONTATO & FORMULÁRIO --- */}
      <section className="py-24 md:py-32 bg-multi-cream relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">
            {/* Coluna Esquerda: Informações de Contato */}
            <div className="lg:col-span-5 space-y-16">
              <StaggerContainer>
                <div>
                  <h2 className="font-display text-4xl text-multi-roxo mb-10">
                    Nossos canais
                  </h2>
                  <div className="space-y-6">
                    {[
                      {
                        icon: Mail,
                        label: "E-mail",
                        value: "contato@agenciamultibr.com",
                        href: "mailto:contato@agenciamultibr.com",
                      },
                      {
                        icon: Phone,
                        label: "WhatsApp",
                        value: "(21) 99999-9999",
                        href: "https://wa.me/5521999999999",
                      },
                      {
                        icon: MapPin,
                        label: "Endereço",
                        value:
                          "Rio de Janeiro, RJ\nAtendimento em todo o Brasil",
                        href: null,
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="group flex items-start gap-6 p-6 bg-white rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition-shadow"
                      >
                        <div className="w-14 h-14 bg-multi-cream rounded-xl flex items-center justify-center shrink-0 group-hover:bg-multi-amarelo transition-colors duration-300">
                          <item.icon className="w-6 h-6 text-multi-roxo" />
                        </div>
                        <div>
                          <h3 className="font-poppins font-medium text-gray-500 mb-1">
                            {item.label}
                          </h3>
                          {item.href ? (
                            <a
                              href={item.href}
                              target={
                                item.href.startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                              rel={
                                item.href.startsWith("http")
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className="font-poppins text-lg text-multi-black hover:text-multi-rosa transition-colors font-medium flex items-center gap-2"
                            >
                              {item.value}
                              {item.href && (
                                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-multi-rosa" />
                              )}
                            </a>
                          ) : (
                            <p className="font-poppins text-lg text-multi-black font-medium whitespace-pre-line">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Redes Sociais */}
                <div>
                  <h2 className="font-display text-2xl text-multi-roxo mb-6">
                    Siga a Multi
                  </h2>
                  <div className="flex gap-4">
                    {[
                      {
                        icon: Instagram,
                        href: "#instagram",
                        name: "instagram",
                      },
                      { icon: Linkedin, href: "#linkedin", name: "linkedin" },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        className="w-14 h-14 bg-white border border-black/10 rounded-full flex items-center justify-center text-multi-black hover:bg-multi-roxo hover:text-white hover:border-transparent transition-all hover:-translate-y-1 shadow-sm"
                      >
                        <social.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </div>
              </StaggerContainer>
            </div>

            {/* Coluna Direita: Formulário */}
            <div className="lg:col-span-7">
              <RevealSection delay>
                <div className="bg-white rounded-4xl p-10 md:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-black/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-multi-amarelo/10 rounded-bl-full -mr-16 -mt-16" />
                  <h2 className="font-display text-4xl text-multi-roxo mb-8 relative z-10">
                    Envie uma mensagem
                  </h2>
                  <div className="relative z-10">
                    <ContactForm />
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

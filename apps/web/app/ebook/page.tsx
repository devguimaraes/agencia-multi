import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'E-book Social Media | Agência Multi BR',
  description: 'Guia definitivo para iniciantes em Social Media.',
}

export default function EbookPage() {
  return (
    <>
      <section className="py-20 md:py-32 bg-multi-roxo text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-multi-roxo to-multi-rosa opacity-90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <span className="bg-multi-amarelo text-multi-roxo px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                Material Gratuito
              </span>
              <h1 className="font-display text-4xl md:text-6xl leading-tight">
                O Guia Definitivo do Social Media Iniciante
              </h1>
              <p className="text-xl opacity-90 leading-relaxed">
                Descubra os 5 passos essenciais para começar sua carreira e conquistar seus primeiros clientes em 30 dias.
              </p>
              
              <div className="space-y-4 pt-4">
                {[
                  "Como precificar seus serviços",
                  "Ferramentas indispensáveis",
                  "Como criar portfólio sem clientes",
                  "Scripts de vendas validados",
                ].map((item, idx) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-multi-amarelo w-6 h-6" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <Button size="lg" className="bg-multi-amarelo text-multi-roxo hover:bg-white hover:text-multi-roxo font-bold w-full md:w-auto h-auto py-4 px-8 text-lg">
                  <Download className="mr-2 w-5 h-5" /> Baixar E-book Agora
                </Button>
                <p className="text-sm mt-4 opacity-70">
                  🔒 Seus dados estão seguros. Não enviamos spam.
                </p>
              </div>
            </div>

            <div className="relative animate-fade-in-up stagger-1 flex justify-center">
              <div className="w-[300px] md:w-[400px] aspect-[3/4] bg-white rounded-xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 relative">
                 {/* Book Mockup Placeholder */}
                 <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-xl border-8 border-white">
                   <div className="text-center">
                     <div className="font-display text-4xl text-multi-roxo mb-2">E-BOOK</div>
                     <div className="font-sans text-gray-500">Capa do Livro</div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

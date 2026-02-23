import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mentoria para Agências | Agência Multi BR',
  description: 'Acelere o crescimento da sua agência ou carreira como Social Media.',
}

export default function MentorshipPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-multi-roxo text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-multi-roxo to-multi-rosa opacity-90" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-6xl mb-6 animate-fade-in-up">
            Domine o Digital e Escale sua Agência
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in-up stagger-1">
            Mentoria exclusiva para profissionais que querem sair do operacional e focar na estratégia e vendas.
          </p>
          <Button asChild size="lg" className="bg-multi-amarelo text-multi-roxo hover:bg-white hover:text-multi-roxo font-bold text-lg px-8 py-6 h-auto animate-fade-in-up stagger-2">
            <Link href="/contato">Aplicar para Mentoria</Link>
          </Button>
        </div>
      </section>

      {/* Problems */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-display text-3xl md:text-4xl text-multi-roxo mb-4">
              Você se identifica?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
             {[
               "Cliente pede alteração toda hora",
               "Não consegue cobrar mais caro",
               "Vive apagando incêndio",
             ].map((item, idx) => (
               <Card key={item} className="bg-red-50 border-none animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                 <CardContent className="pt-6 text-center">
                   <p className="text-lg font-medium text-red-600">{item}</p>
                 </CardContent>
               </Card>
             ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 md:py-24 bg-multi-cinza-claro">
        <div className="container mx-auto px-4">
           <h2 className="font-display text-3xl md:text-4xl text-multi-roxo text-center mb-16 animate-fade-in-up">
             O que você vai aprender
           </h2>
           <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
             {[
               "Posicionamento de Mercado",
               "Processos de Vendas",
               "Gestão de Projetos",
               "Precificação Estratégica",
               "Contratação e Delegação",
               "Escala e Crescimento",
             ].map((mod, idx) => (
               <div key={mod} className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-sm animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                 <CheckCircle2 className="text-multi-verde w-6 h-6" />
                 <span className="text-lg font-medium text-gray-800">{mod}</span>
               </div>
             ))}
           </div>
        </div>
      </section>
      
      {/* Testimonials Placeholder */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
           <h2 className="font-display text-3xl md:text-4xl text-multi-roxo mb-12 animate-fade-in-up">
             Quem já passou por aqui
           </h2>
           <div className="grid md:grid-cols-3 gap-8">
             {[1, 2, 3].map((i) => (
               <Card key={i} className="animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                 <CardContent className="pt-8">
                   <div className="flex justify-center mb-4">
                     {[...Array(5)].map((_, j) => (
                       <Star key={j} className="w-5 h-5 text-multi-amarelo fill-current" />
                     ))}
                   </div>
                   <p className="text-gray-600 mb-6 italic">
                     "A mentoria mudou minha visão sobre agência. Dobrei meu faturamento em 3 meses."
                   </p>
                   <div className="font-bold text-multi-roxo">Aluno {i}</div>
                 </CardContent>
               </Card>
             ))}
           </div>
        </div>
      </section>

      {/* CTA Final */}
       <section className="py-20 bg-multi-roxo text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl mb-6 animate-fade-in-up">
            Vagas Limitadas
          </h2>
          <Button asChild size="lg" className="bg-multi-amarelo text-multi-roxo hover:bg-white hover:text-multi-roxo font-bold animate-fade-in-up stagger-1">
            <Link href="/contato">Garantir minha vaga</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

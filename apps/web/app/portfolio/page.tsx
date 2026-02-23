import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHeader } from '@/components/layout/PageHeader'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PROJECTS } from '@/data/portfolio'

export const metadata: Metadata = {
  title: 'Portfolio | Agência Multi BR',
  description: 'Confira nossos cases de sucesso em Branding, Tráfego e Conteúdo.',
}

export default function PortfolioPage() {
  const categories = ['Todos', 'Branding', 'Tráfego', 'Conteúdo', 'Web Design']

  return (
    <>
      <PageHeader
        title="Nossos Projetos"
        description="Cases que transformaram marcas e geraram resultados reais."
        breadcrumbs={[{ label: 'Portfolio', href: '/portfolio' }]}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="Todos" className="w-full">
            <div className="flex justify-center mb-12 animate-fade-in-up">
              <TabsList className="bg-multi-cinza-claro h-auto p-1 flex-wrap justify-center">
                {categories.map((cat) => (
                  <TabsTrigger key={cat} value={cat} className="data-[state=active]:bg-multi-roxo data-[state=active]:text-white transition-all px-6 py-2 rounded-md text-base">
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((cat) => (
              <TabsContent key={cat} value={cat} className="animate-fade-in-up stagger-1 mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {PROJECTS.filter((p) => cat === 'Todos' || p.category === cat).map((project) => (
                    <Card key={project.slug} className="overflow-hidden border-none shadow-card hover:shadow-card-hover transition-all duration-smooth group bg-white h-full flex flex-col">
                      <div className="aspect-video relative overflow-hidden bg-gray-100">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-multi-roxo/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                           {/* Placeholder for future link */}
                           <span className="text-white font-medium border border-white px-4 py-2 rounded-full">Ver Case</span>
                        </div>
                      </div>
                      <CardHeader className="flex-1">
                        <div className="text-sm font-medium text-multi-rosa mb-2 uppercase tracking-wide">
                          {project.category}
                        </div>
                        <CardTitle className="font-display text-xl text-multi-roxo">
                          {project.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600 line-clamp-2 text-base">
                          {project.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      
      {/* CTA */}
       <section className="py-20 bg-multi-cinza-claro text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl text-multi-roxo mb-6">
            Quer seu projeto aqui?
          </h2>
          <Button asChild size="lg" className="bg-multi-roxo text-white hover:bg-multi-rosa">
            <Link href="/contato">Iniciar Projeto</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

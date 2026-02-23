import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Target, Users } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Sobre a Agência | Agência Multi BR",
	description: "Conheça a história, valores e a equipe por trás da Agência Multi BR.",
};

export default function SobrePage() {
	return (
		<>
			<PageHeader
				title="Nossa História"
				description="Transformando ideias em resultados digitais com estratégia, criatividade e dados."
				breadcrumbs={[{ label: "Sobre", href: "/sobre" }]}
			/>

			{/* History Section */}
			<section className="py-16 md:py-24">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up bg-multi-roxo/5">
							{/* Placeholder until real image */}
							<div className="absolute inset-0 flex items-center justify-center">
								<span className="text-multi-roxo font-display text-2xl opacity-50">
									Foto da Agência
								</span>
							</div>
						</div>
						<div className="space-y-6 animate-fade-in-up stagger-1">
							<h2 className="font-display text-3xl md:text-4xl text-multi-roxo">
								Do Bilhete ao Digital
							</h2>
							<div className="prose prose-lg text-gray-600">
								<p>
									A Agência Multi BR nasceu da paixão por comunicação e da necessidade de levar
									soluções reais para o mercado. Começamos pequenos, mas com uma visão gigante:
									conectar marcas ao seu público ideal.
								</p>
								<p>
									Hoje, somos uma referência em Branding, Conteúdo e Tráfego Pago, ajudando empresas
									a escalarem seus resultados através de estratégias validadas e criatividade que
									converte.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Values Section */}
			<section className="py-16 md:py-24 bg-multi-cinza-claro">
				<div className="container mx-auto px-4">
					<div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
						<h2 className="font-display text-3xl md:text-4xl text-multi-roxo mb-4">
							Nossos Pilares
						</h2>
						<p className="text-lg text-gray-600">
							O que nos move todos os dias para entregar o melhor resultado.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								icon: Target,
								title: "Foco em Resultado",
								desc: "Não entregamos apenas likes, entregamos crescimento real para o seu negócio.",
							},
							{
								icon: Users,
								title: "Parceria Real",
								desc: "Jogamos junto com o cliente. O seu sucesso é o nosso sucesso.",
							},
							{
								icon: Rocket,
								title: "Inovação Constante",
								desc: "Estamos sempre atentos às novas tendências e tecnologias do mercado.",
							},
						].map((value, idx) => (
							<Card
								key={value.title}
								className="border-none shadow-card hover:shadow-card-hover transition-all duration-smooth animate-fade-in-up"
								style={{ animationDelay: `${idx * 100}ms` }}
							>
								<CardHeader>
									<div className="w-12 h-12 bg-multi-roxo/10 rounded-lg flex items-center justify-center mb-4">
										<value.icon className="w-6 h-6 text-multi-roxo" />
									</div>
									<CardTitle className="font-display text-xl text-multi-roxo">
										{value.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-gray-600">{value.desc}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-multi-roxo text-white text-center">
				<div className="container mx-auto px-4">
					<h2 className="font-display text-3xl md:text-4xl mb-6 animate-fade-in-up">
						Pronto para escalar seu negócio?
					</h2>
					<p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in-up stagger-1">
						Entre em contato e descubra como podemos ajudar sua empresa a crescer.
					</p>
					<div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up stagger-2">
						<Button
							asChild
							size="lg"
							className="bg-multi-amarelo text-multi-roxo hover:bg-white hover:text-multi-roxo font-bold"
						>
							<Link href="/contato">Falar com Consultor</Link>
						</Button>
						<Button
							asChild
							variant="outline"
							size="lg"
							className="border-white text-white hover:bg-white hover:text-multi-roxo"
						>
							<Link href="/servicos">Ver Serviços</Link>
						</Button>
					</div>
				</div>
			</section>
		</>
	);
}

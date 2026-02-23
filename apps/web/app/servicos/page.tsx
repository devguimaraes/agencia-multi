import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { SERVICES } from "@/data/services";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Nossos Serviços | Agência Multi BR",
	description: "Conheça nossas soluções em Marketing Digital, Tráfego Pago e Branding.",
};

export default function ServicesPage() {
	return (
		<>
			<PageHeader
				title="Nossas Soluções"
				description="Estratégias completas para posicionar sua marca e escalar suas vendas."
				breadcrumbs={[{ label: "Serviços", href: "/servicos" }]}
			/>

			<section className="py-16 md:py-24">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{SERVICES.map((service, index) => (
							<Card
								key={service.slug}
								className="group hover:shadow-card-hover transition-all duration-smooth animate-fade-in-up flex flex-col"
								style={{ animationDelay: `${index * 100}ms` }}
							>
								<CardHeader>
									<div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-smooth w-fit">
										{service.icon}
									</div>
									<CardTitle className="font-display text-2xl text-multi-roxo group-hover:text-multi-rosa transition-colors">
										{service.title}
									</CardTitle>
								</CardHeader>
								<CardContent className="flex-1">
									<CardDescription className="text-base text-gray-600">
										{service.description}
									</CardDescription>
								</CardContent>
								<CardFooter>
									<Button
										asChild
										variant="outline"
										className="w-full group-hover:bg-multi-roxo group-hover:text-white transition-colors"
									>
										<Link href={`/servicos/${service.slug}`}>Saiba mais</Link>
									</Button>
								</CardFooter>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Final CTA */}
			<section className="py-20 bg-multi-cinza-claro text-center">
				<div className="container mx-auto px-4">
					<h2 className="font-display text-3xl md:text-4xl text-multi-roxo mb-6">
						Não encontrou o que procura?
					</h2>
					<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
						Entre em contato para uma consultoria personalizada.
					</p>
					<Button asChild size="lg" className="bg-multi-roxo text-white hover:bg-multi-rosa">
						<Link href="/contato">Falar com Especialista</Link>
					</Button>
				</div>
			</section>
		</>
	);
}

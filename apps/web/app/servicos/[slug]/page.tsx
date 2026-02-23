import { PageHeader } from "@/components/layout/PageHeader";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/data/services";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export async function generateStaticParams() {
	return SERVICES.map((service) => ({
		slug: service.slug,
	}));
}

export async function generateMetadata({
	params,
}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params;
	const service = SERVICES.find((s) => s.slug === slug);

	if (!service) {
		return {
			title: "Serviço não encontrado",
		};
	}

	return {
		title: `${service.title} | Agência Multi BR`,
		description: service.description,
	};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const service = SERVICES.find((s) => s.slug === slug);

	if (!service) {
		notFound();
	}

	return (
		<>
			<PageHeader
				title={service.title}
				description={service.details.hero}
				breadcrumbs={[
					{ label: "Serviços", href: "/servicos" },
					{ label: service.title, href: `/servicos/${service.slug}` },
				]}
			/>

			<section className="py-16 md:py-24">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
						{/* Problem/Solution */}
						<div className="space-y-8 animate-fade-in-up">
							<div>
								<h2 className="font-display text-2xl text-multi-roxo mb-2">O Problema</h2>
								<p className="text-xl text-gray-700 font-medium leading-relaxed">
									{service.details.problem}
								</p>
							</div>

							<div className="relative pl-6 border-l-4 border-multi-amarelo">
								<h2 className="font-display text-2xl text-multi-roxo mb-2">A Solução Multi</h2>
								<p className="text-lg text-gray-600 leading-relaxed">{service.details.solution}</p>
							</div>

							<div className="pt-4">
								<Button asChild size="lg" className="bg-multi-roxo text-white hover:bg-multi-rosa">
									<Link href="/contato">
										Solicitar Orçamento <ArrowRight className="ml-2 w-4 h-4" />
									</Link>
								</Button>
							</div>
						</div>

						{/* Deliverables */}
						<div className="bg-multi-cinza-claro rounded-2xl p-8 md:p-10 shadow-card animate-fade-in-up stagger-1">
							<h3 className="font-display text-2xl text-multi-roxo mb-6">O que entregamos</h3>
							              <ul className="space-y-4">
							                {service.details.deliverables.map((item) => (
							                  <li key={item} className="flex items-start gap-3">										<CheckCircle2 className="w-6 h-6 text-multi-verde shrink-0" />
										<span className="text-gray-700 text-lg">{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			{service.details.faq.length > 0 && (
				<section className="py-16 md:py-24 bg-white border-t border-gray-100">
					<div className="container mx-auto px-4 max-w-3xl">
						<h2 className="font-display text-3xl text-multi-roxo text-center mb-12 animate-fade-in-up">
							Perguntas Frequentes
						</h2>
						<Accordion type="single" collapsible className="w-full animate-fade-in-up stagger-1">
							{service.details.faq.map((item, idx) => (
								<AccordionItem key={item.question} value={`item-${idx}`}>
									<AccordionTrigger className="text-lg font-medium text-gray-800">
										{item.question}
									</AccordionTrigger>
									<AccordionContent className="text-gray-600 text-base">
										{item.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</section>
			)}

			{/* CTA Section */}
			<section className="py-20 bg-multi-roxo text-white text-center">
				<div className="container mx-auto px-4">
					<h2 className="font-display text-3xl md:text-4xl mb-6 animate-fade-in-up">
						Pronto para começar?
					</h2>
					<p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in-up stagger-1">
						Transforme seus resultados com nossa expertise em {service.title}.
					</p>
					<Button
						asChild
						size="lg"
						className="bg-multi-amarelo text-multi-roxo hover:bg-white hover:text-multi-roxo font-bold animate-fade-in-up stagger-2"
					>
						<Link href="/contato">Falar com Consultor</Link>
					</Button>
				</div>
			</section>
		</>
	);
}

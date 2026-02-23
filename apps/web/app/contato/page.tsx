import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactForm } from "@/components/marketing/ContactForm";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";

export const metadata: Metadata = {
	title: "Contato | Agência Multi BR",
	description: "Fale conosco e impulsione seu negócio.",
};

export default function ContactPage() {
	return (
		<>
			<PageHeader
				title="Fale Conosco"
				description="Estamos prontos para ouvir seus desafios e criar soluções personalizadas."
				breadcrumbs={[{ label: "Contato", href: "/contato" }]}
			/>

			<section className="py-16 md:py-24">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
						{/* Contact Info */}
						<div className="space-y-12 animate-fade-in-up">
							<div>
								<h2 className="font-display text-2xl text-multi-roxo mb-6">
									Informações de Contato
								</h2>
								<div className="space-y-6">
									<div className="flex items-start gap-4">
										<div className="w-12 h-12 bg-multi-roxo/10 rounded-lg flex items-center justify-center shrink-0">
											<Mail className="w-6 h-6 text-multi-roxo" />
										</div>
										<div>
											<h3 className="font-medium text-gray-900 mb-1">E-mail</h3>
											<a
												href="mailto:contato@agenciamultibr.com"
												className="text-gray-600 hover:text-multi-roxo transition-colors"
											>
												contato@agenciamultibr.com
											</a>
										</div>
									</div>

									<div className="flex items-start gap-4">
										<div className="w-12 h-12 bg-multi-roxo/10 rounded-lg flex items-center justify-center shrink-0">
											<Phone className="w-6 h-6 text-multi-roxo" />
										</div>
										<div>
											<h3 className="font-medium text-gray-900 mb-1">WhatsApp</h3>
											<a
												href="https://wa.me/5521999999999"
												target="_blank"
												rel="noopener noreferrer"
												className="text-gray-600 hover:text-multi-roxo transition-colors"
											>
												(21) 99999-9999
											</a>
										</div>
									</div>

									<div className="flex items-start gap-4">
										<div className="w-12 h-12 bg-multi-roxo/10 rounded-lg flex items-center justify-center shrink-0">
											<MapPin className="w-6 h-6 text-multi-roxo" />
										</div>
										<div>
											<h3 className="font-medium text-gray-900 mb-1">Endereço</h3>
											<p className="text-gray-600">
												Rio de Janeiro, RJ
												<br />
												Atendimento em todo o Brasil
											</p>
										</div>
									</div>
								</div>
							</div>

							<div>
								<h2 className="font-display text-2xl text-multi-roxo mb-6">Siga a Multi</h2>
								<div className="flex gap-4">
									<a
										href="#"
										className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-multi-roxo hover:text-white transition-all"
									>
										<Instagram className="w-6 h-6" />
									</a>
									<a
										href="#"
										className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-multi-roxo hover:text-white transition-all"
									>
										<Linkedin className="w-6 h-6" />
									</a>
								</div>
							</div>
						</div>

						{/* Form */}
						<div className="bg-white p-8 md:p-10 rounded-2xl shadow-card animate-fade-in-up stagger-1">
							<h2 className="font-display text-2xl text-multi-roxo mb-6">Envie uma mensagem</h2>
							<ContactForm />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

const FAQ_ITEMS = [
	{
		question: "Quanto tempo demora para ver o retorno (ROI)?",
		answer:
			"O tráfego pago pode trazer vendas na primeira semana, enquanto o SEO local constrói autoridade de 3 a 6 meses. Nosso foco é mesclar estratégias para que o seu caixa gire rápido enquanto construímos sua dominância a longo prazo no mercado carioca.",
	},
	{
		question: "Vocês atendem negócios fora do Rio de Janeiro?",
		answer:
			"Sim! Nosso DNA e base forte estão no mercado carioca, mas aplicamos nossa metodologia de escalabilidade com sucesso em empresas de todo o Brasil.",
	},
	{
		question: "Por que não contrato apenas um 'faz-tudo'?",
		answer:
			"O mercado mudou. Um profissional isolado raramente consegue dominar estratégia, tráfego, design e conversão. Contratando a Multi, você tem um ecossistema de especialistas trabalhando em sincronia pelo preço de um funcionário pleno.",
	},
	{
		question: "Eu preciso fechar contratos longos de fidelidade?",
		answer:
			"Acreditamos que o resultado garante a parceria, não multas contratuais. Trabalhamos com modelos flexíveis que fazem sentido para o momento de caixa da sua empresa.",
	},
];

export function FaqIntegrado({ className }: { className?: string }) {
	return (
		<section className={cn("w-full py-16 md:py-24 bg-gray-50", className)}>
			<div className="container px-4 mx-auto max-w-4xl">
				<div className="text-center mb-10 md:mb-16">
					<h2 className="font-balgin text-3xl md:text-4xl lg:text-5xl text-multi-roxo mb-6">
						Perguntas Frequentes
					</h2>
					<p className="font-poppins text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
						Respostas diretas para quem não tem tempo a perder. Entenda como nossa parceria em
						marketing digital pode acelerar seu faturamento.
					</p>
				</div>

				<div className="bg-white rounded-xl md:rounded-2xl shadow-xl border border-gray-100 p-6 md:p-10 mb-12">
					<Accordion type="single" collapsible className="w-full">
						{FAQ_ITEMS.map((item, index) => (
							<AccordionItem key={`faq-${index.toString()}`} value={`item-${index.toString()}`}>
								<AccordionTrigger className="text-base md:text-lg font-bold py-5 hover:text-multi-rosa data-[state=open]:text-multi-roxo">
									{item.question}
								</AccordionTrigger>
								<AccordionContent className="text-sm md:text-base text-gray-600 pb-6 pt-2 leading-relaxed font-poppins">
									{item.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>

				<div className="text-center flex flex-col items-center justify-center gap-4">
					<p className="font-poppins text-gray-600 text-sm md:text-base">
						Ainda tem dúvidas sobre o plano ideal para sua empresa?
					</p>
					<Link
						href="/contato"
						className="inline-flex items-center gap-2 font-poppins font-bold text-multi-roxo text-base md:text-lg underline decoration-[3px] underline-offset-4 decoration-multi-amarelo hover:text-multi-rosa hover:decoration-multi-roxo transition-all duration-300"
					>
						<MessageCircle className="w-5 h-5" />
						Converse com um consultor
					</Link>
				</div>
			</div>
		</section>
	);
}

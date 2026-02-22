import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const SERVICES = [
	{
		title: "Tráfego Pago",
		description: "Anúncios otimizados em Google Ads e Meta Ads para máxima visibilidade.",
		icon: "🎯",
	},
	{
		title: "Criação de Conteúdo",
		description: "Mídias sociais e artigos que engajam e criam autoridade.",
		icon: "✍️",
	},
	{
		title: "Gestão de Redes",
		description: "Planejamento e estratégia 360° para seus perfis sociais.",
		icon: "📱",
	},
	{
		title: "Design Gráfico",
		description: "Peças publicitárias, portfólios e banners impactantes.",
		icon: "🎨",
	},
	{
		title: "Criação de Sites",
		description: "Destaque digital com sites performáticos e modernos.",
		icon: "💻",
	},
	{
		title: "Identidade Visual",
		description: "Da marca ao manual: um posicionamento inesquecível.",
		icon: "👁️",
	},
];

export function ServicesOverview({ className }: { className?: string }) {
	return (
		<section className={cn("py-24 bg-white", className)}>
			<div className="container mx-auto px-4 sm:px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-balgin text-multi-roxo mb-4">Nossos Serviços</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto font-poppins">
						Um mix de estratégias de presença digital focado em escalar os resultados da sua empresa
						no digital de forma eficaz.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{SERVICES.map((service) => (
						<Card
							key={service.title}
							className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-multi-rosa group"
						>
							<CardHeader>
								<div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
									{service.icon}
								</div>
								<CardTitle className="font-poppins text-2xl font-bold text-multi-roxo">
									{service.title}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-base text-gray-600 font-poppins h-12">
									{service.description}
								</CardDescription>
							</CardContent>
							<CardFooter>
								<Button
									variant="secondary"
									className="w-full font-poppins font-medium mt-4 border-multi-roxo text-multi-roxo hover:bg-multi-roxo hover:text-multi-amarelo"
								>
									Saiba mais
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}

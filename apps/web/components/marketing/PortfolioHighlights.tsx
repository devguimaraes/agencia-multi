import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HIGHLIGHTS = [
	{ title: "Lançamento X", cat: "Tráfego Pago", bg: "bg-multi-rosa" },
	{
		title: "Rebranding Y",
		cat: "Identidade Visual",
		bg: "bg-multi-roxo",
	},
	{ title: "Campanha Z", cat: "Gestão Social", bg: "bg-multi-amarelo" },
];

export function PortfolioHighlights({ className }: { className?: string }) {
	return (
		<section className={cn("py-24 bg-gray-50", className)}>
			<div className="container mx-auto px-4 sm:px-6">
				<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
					<div className="max-w-xl">
						<h2 className="text-4xl md:text-5xl font-balgin text-multi-roxo mb-4">
							Nosso Portfolio
						</h2>
						<p className="text-lg text-gray-600 font-poppins">
							Projetos reais que geraram resultados reais.
						</p>
					</div>
					<Button
						variant="secondary"
						className="hidden md:flex font-poppins text-lg border-2 border-multi-roxo text-multi-roxo hover:bg-multi-roxo hover:text-white px-8"
					>
						Ver todos
					</Button>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{HIGHLIGHTS.map((item) => (
						<div
							key={item.title}
							className={cn(
								"group relative aspect-square overflow-hidden rounded-xl border-4 cursor-pointer transition-transform duration-500 hover:scale-[1.02]",
								item.bg,
								"border-multi-roxo",
							)}
						>
							<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
							<div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
								<span className="inline-block px-3 py-1 bg-white text-multi-roxo text-sm font-poppins font-bold rounded-full mb-3">
									{item.cat}
								</span>
								<h3 className="text-3xl font-balgin text-white leading-tight">{item.title}</h3>
							</div>
						</div>
					))}
				</div>

				<Button
					variant="secondary"
					className="w-full mt-10 md:hidden font-poppins text-lg border-2 border-multi-roxo text-multi-roxo hover:bg-multi-roxo hover:text-white"
				>
					Ver todos os projetos
				</Button>
			</div>
		</section>
	);
}

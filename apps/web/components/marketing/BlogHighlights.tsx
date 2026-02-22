import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const POSTS = [
	{
		tag: "Marketing",
		title: "Guia de sobrevivência para o Social Media no Carnaval",
	},
	{
		tag: "Estratégia",
		title: "Como estruturar o funil de vendas da sua agência em 5 dias e sem burocracias pesadas",
	},
	{
		tag: "Branding",
		title: "As embalagens minimalistas que custaram milhões e o porquê de elas funcionarem tão bem",
	},
];

export function BlogHighlights({ className }: { className?: string }) {
	return (
		<section className={cn("py-24 bg-white", className)}>
			<div className="container mx-auto px-4 sm:px-6">
				<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b-2 border-multi-roxo pb-6">
					<h2 className="text-4xl md:text-5xl font-balgin text-multi-roxo">
						<span className="text-multi-rosa">#</span> Blog da Multi
					</h2>
					<Button
						variant="ghost"
						className="hidden md:flex font-poppins text-lg text-multi-roxo hover:bg-multi-amarelo mt-4 md:mt-0"
					>
						Acessar todas as publicações <ArrowUpRight className="ml-2 w-5 h-5" />
					</Button>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{POSTS.map((post, idx) => (
						<article key={post.title} className="group cursor-pointer">
							{/* Image Placeholder */}
							<div className="aspect-video bg-gray-100 rounded-xl mb-6 overflow-hidden relative border-2 border-multi-roxo">
								<div className="absolute inset-0 bg-multi-roxo/5 opacity-0 group-hover:opacity-100 transition-opacity" />
								{/* Colocando placeholders de cor simulando as imagens do feed */}
								<div
									className={cn(
										"w-full h-full",
										idx === 0
											? "bg-multi-rosa/10"
											: idx === 1
												? "bg-multi-amarelo/20"
												: "bg-multi-roxo/10",
									)}
								/>
							</div>

							<span className="inline-block px-3 py-1 bg-multi-roxo text-multi-amarelo font-poppins font-bold text-xs uppercase tracking-wider rounded-sm mb-4">
								{post.tag}
							</span>

							<h3 className="font-poppins text-xl font-bold text-multi-roxo leading-snug group-hover:text-multi-rosa transition-colors">
								{post.title}
							</h3>
						</article>
					))}
				</div>

				<Button
					variant="ghost"
					className="w-full mt-10 md:hidden font-poppins text-lg text-multi-roxo bg-multi-amarelo"
				>
					Acessar todas as publicações <ArrowUpRight className="ml-2 w-5 h-5" />
				</Button>
			</div>
		</section>
	);
}

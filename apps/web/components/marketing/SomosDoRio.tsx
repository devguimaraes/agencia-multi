import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function SomosDoRio({ className }: { className?: string }) {
	return (
		<section
			className={cn(
				"w-full bg-multi-roxo text-white py-16 md:py-24 overflow-hidden relative",
				className,
			)}
		>
			<div className="container mx-auto px-4 max-w-6xl relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					<div className="flex flex-col gap-6 md:gap-8">
						<div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full w-fit border border-white/20 backdrop-blur-sm">
							<span className="w-2.5 h-2.5 rounded-full bg-multi-amarelo pulse-amarelo" />
							<span className="font-poppins font-medium text-xs md:text-sm tracking-wide text-white/90">
								Direto do Rio de Janeiro
							</span>
						</div>

						<h2 className="font-balgin text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-white">
							Entendemos o{" "}
							<span className="text-multi-amarelo block mt-1">ritmo do seu mercado.</span>
						</h2>

						<div className="space-y-4 text-base md:text-lg text-white/80 font-poppins font-light leading-relaxed max-w-lg">
							<p>
								Não basta estar na internet. É preciso entender como a sua cidade consome. Entender
								o mercado carioca, seu ritmo e sua cultura é o que diferencia campanhas que
								viralizam das que de fato viram faturamento.
							</p>
							<p className="font-medium text-white">
								Somos uma agência parceira, feita no Rio para negócios que querem dominar a região.
							</p>
						</div>

						<div className="pt-2 md:pt-4">
							<Link
								href="/contato"
								className="group inline-flex w-fit items-center justify-center gap-3 bg-multi-amarelo text-multi-roxo font-poppins font-bold px-6 py-4 md:px-8 md:py-4 border-2 border-multi-roxo rounded-sm hover:bg-white transition-colors duration-300 shadow-[4px_4px_0px_#FF8CBA] hover:shadow-[2px_2px_0px_#FF8CBA] hover:translate-x-[2px] hover:translate-y-[2px]"
							>
								Fale com nossos especialistas locais
								<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
							</Link>
						</div>
					</div>

					{/* Visual Element */}
					<div className="relative h-[350px] md:h-[450px] lg:h-[550px] w-full rounded-2xl overflow-hidden border-4 border-multi-rosa shadow-2xl group isolate">
						<div className="absolute inset-0 bg-multi-roxo/40 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-700" />
						<div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-multi-roxo/90 via-multi-roxo/40 to-transparent z-10 pointer-events-none" />

						{/* Em vez de usar fill que pode quebrar a proporcao, usamos o svg do sol como fall-back + parallax de passaro */}
						<div className="absolute inset-0 bg-multi-roxo flex items-center justify-center -z-10 group-hover:scale-105 transition-transform duration-1000">
							<svg
								viewBox="0 0 200 200"
								fill="currentColor"
								className="w-[150%] h-[150%] text-multi-amarelo opacity-10 animate-sol-spin"
								role="img"
								aria-label="Sol girando decorativo"
							>
								<title>Sol girando decorativo</title>
								<circle cx="100" cy="100" r="40" />
								{Array.from({ length: 18 }).map((_, i) => (
									<path
										// biome-ignore lint/suspicious/noArrayIndexKey: simple shape
										key={`ray-${i}`}
										d="M100 20L108 80L100 90L92 80L100 20Z"
										transform={`rotate(${i * 20} 100 100)`}
									/>
								))}
							</svg>
						</div>

						<Image
							src="/assets/brasilidades/rio.png"
							alt="Paisagem Rio de Janeiro - Agência Multi"
							fill
							className="object-contain scale-125 translate-y-[10%] group-hover:scale-[1.35] group-hover:-translate-y-[5%] transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] drop-shadow-2xl"
							priority
						/>
					</div>
				</div>
			</div>

			{/* Decorative Elements */}
			<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-multi-rosa/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none z-0" />
			<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-multi-amarelo/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none z-0" />
		</section>
	);
}

import { cn } from "@/lib/utils";

export function ResultadoRapido({ className }: { className?: string }) {
	return (
		<section
			className={cn(
				"w-full bg-multi-amarelo py-12 md:py-16 text-multi-roxo border-y-[3px] border-multi-roxo",
				className,
			)}
		>
			<div className="container px-4 mx-auto max-w-6xl">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y-2 md:divide-y-0 md:divide-x-2 divide-multi-roxo/20 text-center">
					<div className="flex flex-col items-center justify-start pt-4 md:pt-0 px-4 group">
						<span className="font-balgin text-5xl md:text-6xl lg:text-7xl font-black mb-2 leading-none group-hover:scale-110 transition-transform duration-300">
							34+
						</span>
						<p className="font-poppins font-semibold text-base md:text-lg max-w-[250px] leading-tight">
							negócios do RJ com presença digital validada
						</p>
					</div>
					<div className="flex flex-col items-center justify-start pt-8 md:pt-0 px-4 group">
						<span className="font-balgin text-5xl md:text-6xl lg:text-7xl font-black mb-2 leading-none group-hover:scale-110 transition-transform duration-300">
							15+
						</span>
						<p className="font-poppins font-semibold text-base md:text-lg max-w-[250px] leading-tight">
							nichos de mercado atendidos com sucesso
						</p>
					</div>
					<div className="flex flex-col items-center justify-start pt-8 md:pt-0 px-4 group">
						<span className="font-balgin text-5xl md:text-6xl lg:text-7xl font-black mb-2 leading-none group-hover:scale-110 transition-transform duration-300">
							100%
						</span>
						<p className="font-poppins font-semibold text-base md:text-lg max-w-[250px] leading-tight">
							foco em resultado mensurável e escala real
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

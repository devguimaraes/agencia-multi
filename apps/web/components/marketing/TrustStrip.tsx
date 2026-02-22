import { cn } from "@/lib/utils";

export function TrustStrip({ className }: { className?: string }) {
	const benefits = [
		"Atendimento rápido",
		"✧",
		"Foco em métricas",
		"✧",
		"Estratégia comprovada",
		"✧",
		"Suporte humanizado",
		"✧",
		"Sem asteriscos",
		"✧",
		"Design premium",
	];

	return (
		<div
			className={cn(
				"w-full bg-multi-amarelo py-4 overflow-hidden border-y-[3px] border-multi-roxo flex items-center",
				className,
			)}
		>
			<div className="relative flex w-full flex-row overflow-hidden flex-nowrap">
				{/* Infinite scrolling animation implementation */}
				<div className="flex w-max animate-marquee space-x-8 items-center justify-start pr-8">
					{[...benefits, ...benefits, ...benefits].map((benefit, i) => (
						<div
							key={`${benefit}-${i}`}
							className={cn(
								"flex items-center text-xl font-balgin text-multi-roxo tracking-widest uppercase",
								benefit === "✧" ? "text-multi-rosa text-2xl" : "",
							)}
						>
							{benefit}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

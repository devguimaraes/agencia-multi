import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-8 px-4 text-center">
			{/* 404 tipográfico */}
			<div className="relative select-none">
				<span
					className="block font-display text-[120px] font-bold leading-none text-multi-roxo/10 sm:text-[180px]"
					aria-hidden="true"
				>
					404
				</span>
				<div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
					<p className="font-semibold text-multi-roxo text-xs uppercase tracking-[0.3em]">
						Página não encontrada
					</p>
					<h1 className="font-bold text-2xl text-gray-800 sm:text-3xl">Essa página sumiu</h1>
				</div>
			</div>

			<p className="max-w-sm text-gray-500 text-sm leading-relaxed">
				O endereço que você acessou não existe ou foi removido. Mas a gente tem muito mais para você
				explorar.
			</p>

			<div className="flex flex-col items-center gap-3 sm:flex-row">
				<Link
					href="/"
					className="rounded-full bg-multi-roxo px-6 py-2.5 font-semibold text-sm text-white transition-all hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-multi-roxo"
				>
					Voltar para Home
				</Link>
				<Link
					href="/servicos"
					className="rounded-full border border-gray-200 px-6 py-2.5 font-semibold text-gray-700 text-sm transition-all hover:border-multi-roxo hover:text-multi-roxo"
				>
					Ver nossos serviços
				</Link>
			</div>
		</div>
	);
}

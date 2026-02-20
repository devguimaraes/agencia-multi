"use client";

import Link from "next/link";

interface ErrorPageProps {
	error: Error & { digest?: string };
	reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
			<div className="flex h-16 w-16 items-center justify-center rounded-full bg-multi-rosa/10">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth={1.5}
					className="h-8 w-8 text-multi-rosa"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
					/>
				</svg>
			</div>

			<div className="flex flex-col gap-2">
				<h1 className="font-bold text-2xl text-gray-800">Ocorreu um erro</h1>
				<p className="max-w-sm text-gray-500 text-sm">
					Algo deu errado. Tente novamente ou volte para a página inicial.
				</p>
				{process.env.NODE_ENV === "development" && error?.message && (
					<p className="mt-2 font-mono text-multi-rosa text-xs">{error.message}</p>
				)}
			</div>

			<div className="flex flex-col items-center gap-3 sm:flex-row">
				<button
					type="button"
					onClick={reset}
					className="rounded-full bg-multi-roxo px-6 py-2.5 font-semibold text-sm text-white transition-all hover:brightness-110"
				>
					Tentar novamente
				</button>
				<Link
					href="/"
					className="rounded-full border border-gray-200 px-6 py-2.5 font-semibold text-gray-700 text-sm transition-all hover:border-multi-roxo hover:text-multi-roxo"
				>
					Voltar para Home
				</Link>
			</div>
		</div>
	);
}

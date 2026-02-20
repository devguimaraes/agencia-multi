export default function Loading() {
	return (
		<div className="flex min-h-screen items-center justify-center">
			<div
				role="status"
				aria-label="Carregando..."
				className="h-12 w-12 animate-spin rounded-full border-4 border-multi-roxo border-t-transparent"
			>
				<span className="sr-only">Carregando...</span>
			</div>
		</div>
	);
}

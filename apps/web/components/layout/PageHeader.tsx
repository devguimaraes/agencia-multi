import Link from "next/link";

interface BreadcrumbItem {
	label: string;
	href: string;
}

interface PageHeaderProps {
	title: string;
	description?: string;
	breadcrumbs?: BreadcrumbItem[];
	className?: string;
}

export function PageHeader({ title, description, breadcrumbs, className = "" }: PageHeaderProps) {
	return (
		<section className={`bg-multi-cinza-claro pt-32 pb-12 md:pt-40 md:pb-20 ${className}`}>
			<div className="container mx-auto px-4">
				{breadcrumbs && breadcrumbs.length > 0 && (
					<nav className="mb-6 text-sm font-sans text-gray-500 animate-fade-in-up">
						<ul className="flex items-center flex-wrap gap-2">
							<li>
								<Link href="/" className="hover:text-multi-roxo transition-colors">
									Home
								</Link>
							</li>
							{breadcrumbs.map((crumb, index) => (
								<li key={crumb.href} className="flex items-center gap-2">
									<span className="text-gray-400">/</span>
									<Link
										href={crumb.href}
										className={`hover:text-multi-roxo transition-colors ${
											index === breadcrumbs.length - 1 ? "text-multi-roxo font-medium" : ""
										}`}
										aria-current={index === breadcrumbs.length - 1 ? "page" : undefined}
									>
										{crumb.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				)}

				<h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-multi-roxo mb-6 animate-fade-in-up stagger-1">
					{title}
				</h1>

				{description && (
					<p className="font-sans text-lg md:text-xl text-gray-600 max-w-2xl animate-fade-in-up stagger-2 leading-relaxed">
						{description}
					</p>
				)}
			</div>
		</section>
	);
}

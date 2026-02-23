import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Blog | Agência Multi BR",
	description: "Dicas e insights sobre Marketing Digital, Branding e Tráfego.",
};

export default async function BlogPage() {
	const posts = await getAllPosts();

	return (
		<>
			<PageHeader
				title="Blog da Multi"
				description="Conteúdos que transformam. Fique por dentro das novidades do digital."
				breadcrumbs={[{ label: "Blog", href: "/blog" }]}
			/>

			<section className="py-16 md:py-24">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{posts.map((post, index) => (
							<Card
								key={post.slug}
								className="overflow-hidden border-none shadow-card hover:shadow-card-hover transition-all duration-smooth group animate-fade-in-up flex flex-col"
								style={{ animationDelay: `${index * 100}ms` }}
							>
								<Link
									href={`/blog/${post.slug}`}
									className="block aspect-video relative overflow-hidden bg-gray-100"
								>
									<Image
										src={post.image}
										alt={post.title}
										fill
										className="object-cover transition-transform duration-700 group-hover:scale-105"
									/>
									<div className="absolute top-4 left-4 bg-multi-roxo/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
										{post.category}
									</div>
								</Link>
								<CardHeader>
									<div className="text-sm text-gray-500 mb-2 font-medium">
										{post.date} • {post.author}
									</div>
									<CardTitle className="font-display text-xl text-multi-roxo group-hover:text-multi-rosa transition-colors line-clamp-2">
										<Link href={`/blog/${post.slug}`}>{post.title}</Link>
									</CardTitle>
								</CardHeader>
								<CardContent className="flex-1">
									<CardDescription className="text-gray-600 line-clamp-3 text-base">
										{post.excerpt}
									</CardDescription>
								</CardContent>
								<CardFooter>
									<Button
										asChild
										variant="ghost"
										className="p-0 h-auto hover:bg-transparent text-multi-roxo hover:text-multi-rosa font-medium"
									>
										<Link href={`/blog/${post.slug}`}>Ler artigo completo →</Link>
									</Button>
								</CardFooter>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Newsletter (Placeholder) */}
			<section className="py-20 bg-multi-roxo text-white text-center">
				<div className="container mx-auto px-4 max-w-2xl">
					<h2 className="font-display text-3xl md:text-4xl mb-6 animate-fade-in-up">
						Receba insights exclusivos
					</h2>
					<p className="text-xl mb-8 opacity-90 animate-fade-in-up stagger-1">
						Cadastre-se para receber nossas melhores dicas de marketing diretamente no seu e-mail.
					</p>
					{/* Form Placeholder */}
					<div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-2">
						<input
							type="email"
							placeholder="Seu melhor e-mail"
							className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-multi-amarelo"
						/>
						<Button
							size="lg"
							className="bg-multi-amarelo text-multi-roxo hover:bg-white hover:text-multi-roxo font-bold"
						>
							Inscrever-se
						</Button>
					</div>
				</div>
			</section>
		</>
	);
}

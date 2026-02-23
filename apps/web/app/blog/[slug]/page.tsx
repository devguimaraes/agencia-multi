import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamicParams = true;

export async function generateStaticParams() {
	const posts = await getAllPosts();
	return posts.map((post) => ({
		slug: post.slug,
	}));
}

export async function generateMetadata({
	params,
}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params;
	const post = await getPostBySlug(slug);

	if (!post) {
		return {
			title: "Post não encontrado",
		};
	}

	return {
		title: `${post.title} | Blog Multi BR`,
		description: post.excerpt,
	};
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const post = await getPostBySlug(slug);

	if (!post) {
		notFound();
	}

	return (
		<>
			<PageHeader
				title={post.title}
				description={post.excerpt}
				breadcrumbs={[
					{ label: "Blog", href: "/blog" },
					{ label: post.title, href: `/blog/${post.slug}` },
				]}
			/>

			<article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
				<div className="relative aspect-video rounded-2xl overflow-hidden mb-12 shadow-2xl animate-fade-in-up">
					<Image src={post.image} alt={post.title} fill className="object-cover" priority />
				</div>

				<div className="flex items-center gap-4 mb-8 text-gray-500 animate-fade-in-up stagger-1">
					<span>{post.date}</span>
					<span>•</span>
					<span className="bg-multi-roxo/10 text-multi-roxo px-3 py-1 rounded-full text-sm font-medium">
						{post.category}
					</span>
					<span>•</span>
					<span>{post.author}</span>
				</div>

				<div
					className="prose prose-lg prose-headings:font-display prose-headings:text-multi-roxo prose-p:text-gray-700 prose-a:text-multi-rosa prose-a:no-underline hover:prose-a:underline max-w-none animate-fade-in-up stagger-2"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: Blog content is trusted
					dangerouslySetInnerHTML={{ __html: post.content }}
				/>

				<div className="mt-16 pt-8 border-t border-gray-200 animate-fade-in-up stagger-3">
					<Button asChild variant="outline" className="group">
						<Link href="/blog">
							<ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />{" "}
							Voltar para o Blog
						</Link>
					</Button>
				</div>
			</article>
		</>
	);
}

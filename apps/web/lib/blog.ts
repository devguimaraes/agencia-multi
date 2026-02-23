import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export interface Post {
	slug: string;
	title: string;
	excerpt: string;
	date: string;
	author: string;
	category: string;
	image: string;
	content: string;
}

const postsDirectory = path.join(process.cwd(), "content/posts");

export async function getAllPosts(): Promise<Post[]> {
	try {
		const files = await fs.readdir(postsDirectory);
		const posts = await Promise.all(
			files.map(async (filename) => {
				const slug = filename.replace(/\.md$/, "");
				const filePath = path.join(postsDirectory, filename);
				const fileContent = await fs.readFile(filePath, "utf-8");
				const { data, content } = matter(fileContent);

				return {
					slug,
					title: data.title,
					excerpt: data.excerpt,
					date: data.date,
					author: data.author,
					category: data.category,
					image: data.image,
					content,
				};
			}),
		);

		return posts;
	} catch (error) {
		console.error("Error reading posts:", error);
		return [];
	}
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
	try {
		const filePath = path.join(postsDirectory, `${slug}.md`);
		const fileContent = await fs.readFile(filePath, "utf-8");
		const { data, content } = matter(fileContent);

		return {
			slug,
			title: data.title,
			excerpt: data.excerpt,
			date: data.date,
			author: data.author,
			category: data.category,
			image: data.image,
			content,
		};
	} catch (error) {
		console.error(`Error reading post ${slug}:`, error);
		return null;
	}
}

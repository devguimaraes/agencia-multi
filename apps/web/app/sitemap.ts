import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://multibr.com.br";

	const routes = [
		"",
		"/sobre",
		"/servicos",
		"/mentoria",
		"/portfolio",
		"/blog",
		"/contato",
		"/ebook",
	];

	return routes.map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
		changeFrequency: route === "" ? "daily" : "weekly",
		priority: route === "" ? 1 : 0.8,
	}));
}

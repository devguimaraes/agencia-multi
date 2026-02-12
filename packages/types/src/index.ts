// @multi-br/types — Tipos compartilhados do projeto

export type Service = {
	slug: string;
	title: string;
	description: string;
	icon: string;
};

export type BlogPost = {
	slug: string;
	title: string;
	excerpt: string;
	category: string;
	publishedAt: string;
	readingTimeMinutes: number;
	featuredImage: string;
};

export type Testimonial = {
	name: string;
	company: string;
	role: string;
	quote: string;
	avatar?: string;
	rating: 1 | 2 | 3 | 4 | 5;
};

export type ContactFormData = {
	name: string;
	email: string;
	company?: string;
	service?: string;
	message: string;
};

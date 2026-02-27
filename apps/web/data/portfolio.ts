export interface Project {
	slug: string;
	title: string;
	category: "Branding" | "Tráfego" | "Conteúdo" | "Web Design";
	image: string;
	description: string;
	client: string;
	services?: string[];
}

export const PROJECTS: Project[] = [
	{
		slug: "iorb-conteudo",
		title: "IORB — Criação de Conteúdo",
		category: "Conteúdo",
		image: "/assets/clients/iorb-brand.png",
		description:
			"Produção de conteúdo educativo e institucional para o IORB, referência em ortopedia e traumatologia na Barra da Tijuca há 30 anos. Foco em humanização e autoridade médica no digital.",
		client: "IORB – Instituto de Ortopedia do RJ",
		services: ["Criação de Conteúdo", "Social Media", "Fotografia"],
	},
	{
		slug: "asbac-rj-social",
		title: "ASBAC RJ — Gestão de Redes",
		category: "Conteúdo",
		image: "/assets/clients/asbac-brand.png",
		description:
			"Gestão completa das redes sociais da ASBAC RJ, promovendo atividades esportivas, culturais e de lazer para associados nas sedes de Praça XI, Andaraí e Comary (Teresópolis).",
		client: "ASBAC RJ – Assoc. Servidores do Banco Central",
		services: ["Gestão de Redes", "Planejamento de Pauta", "Design"],
	},
	{
		slug: "centro-odonto-seo",
		title: "Centro Odontológico Carioca — SEO",
		category: "Tráfego",
		image: "/assets/clients/centro-odonto-brand.png",
		description:
			"Otimização orgânica de SEO e Google Meu Negócio para clínica odontológica na Av. Rio Branco, aumentando visibilidade local para buscas de ortodontia, implantes e estética dental.",
		client: "Centro Odontológico Carioca",
		services: ["SEO Local", "Google Meu Negócio", "Conteúdo"],
	},
	{
		slug: "tm-gourmet-seo",
		title: "TM Gourmet — SEO & Presença Digital",
		category: "Tráfego",
		image: "/assets/clients/tm-gourmet-brand.png",
		description:
			"Estratégia de SEO e presença digital para buffet de eventos com +10 anos no mercado carioca, especializado em casamentos, festas e eventos corporativos em Taquara/Jacarepaguá.",
		client: "TM Gourmet Buffet RJ",
		services: ["SEO", "Google Meu Negócio", "Presença Digital"],
	},
	{
		slug: "ancora-verde-seo",
		title: "Âncora Verde — SEO & Google",
		category: "Tráfego",
		image: "/assets/clients/ancora-verde-brand.png",
		description:
			"Otimização orgânica de SEO e Google Meu Negócio para escritório de contabilidade no Centro do RJ, especializado em consultoria fiscal, trabalhista e assessoria empresarial.",
		client: "Âncora Verde Contabilidade",
		services: ["SEO Local", "Google Meu Negócio", "Consultoria Digital"],
	},
];

export interface Service {
	slug: string;
	title: string;
	description: string;
	icon: string;
	details: {
		hero: string;
		problem: string;
		solution: string;
		deliverables: string[];
		faq: { question: string; answer: string }[];
	};
}

export const SERVICES: Service[] = [
	{
		slug: "trafego-pago",
		title: "Tráfego Pago",
		description: "Anúncios otimizados em Google Ads e Meta Ads para máxima visibilidade.",
		icon: "🎯",
		details: {
			hero: "Alcance seu público ideal no momento certo.",
			problem: "Você está gastando com anúncios sem ver retorno?",
			solution:
				"Nossa gestão de tráfego é focada em dados e conversão. Otimizamos cada centavo investido para trazer leads qualificados.",
			deliverables: [
				"Planejamento de campanhas",
				"Gestão de Google Ads e Meta Ads",
				"Análise de métricas e relatórios mensais",
				"Otimização contínua de ROI",
			],
			faq: [
				{
					question: "Quanto preciso investir?",
					answer:
						"Recomendamos um investimento mínimo inicial para testes, mas a estratégia é adaptável ao seu orçamento.",
				},
				{
					question: "Em quanto tempo vejo resultados?",
					answer:
						"Campanhas de tráfego podem gerar resultados imediatos, mas a otimização ideal ocorre nos primeiros 3 meses.",
				},
			],
		},
	},
	{
		slug: "conteudo",
		title: "Criação de Conteúdo",
		description: "Mídias sociais e artigos que engajam e criam autoridade.",
		icon: "✍️",
		details: {
			hero: "Conteúdo que conecta e converte.",
			problem: "Seu perfil tem seguidores mas não tem engajamento?",
			solution:
				"Criamos estratégias de conteúdo alinhadas com a jornada do seu cliente, transformando seguidores em fãs e compradores.",
			deliverables: [
				"Calendário editorial",
				"Roteiros para Reels e TikTok",
				"Legendas persuasivas (Copywriting)",
				"Design de posts estáticos e carrosséis",
			],
			faq: [
				{
					question: "Vocês fazem a postagem?",
					answer: "Sim, podemos incluir o agendamento e postagem no pacote de gestão de redes.",
				},
			],
		},
	},
	// ... other services
	{
		slug: "social-media",
		title: "Gestão de Redes",
		description: "Planejamento e estratégia 360° para seus perfis sociais.",
		icon: "📱",
		details: {
			hero: "Sua marca presente e ativa nas redes.",
			problem: "Falta de consistência nas postagens?",
			solution: "Cuidamos de tudo, do planejamento à interação com o público.",
			deliverables: ["Planejamento", "Criação", "Agendamento", "Relatórios"],
			faq: [],
		},
	},
	{
		slug: "design",
		title: "Design Gráfico",
		description: "Peças publicitárias, portfólios e banners impactantes.",
		icon: "🎨",
		details: {
			hero: "Design que vende.",
			problem: "Sua marca não transmite profissionalismo?",
			solution: "Criamos peças visuais que destacam sua empresa no mercado.",
			deliverables: ["Posts", "Banners", "Apresentações"],
			faq: [],
		},
	},
	{
		slug: "sites",
		title: "Criação de Sites",
		description: "Destaque digital com sites performáticos e modernos.",
		icon: "💻",
		details: {
			hero: "Seu site é sua loja 24h.",
			problem: "Seu site é lento ou não funciona no celular?",
			solution: "Desenvolvemos sites rápidos, responsivos e otimizados para conversão.",
			deliverables: ["Landing Pages", "Sites Institucionais", "E-commerce"],
			faq: [],
		},
	},
	{
		slug: "identidade-visual",
		title: "Identidade Visual",
		description: "Da marca ao manual: um posicionamento inesquecível.",
		icon: "👁️",
		details: {
			hero: "Uma marca forte começa pelo visual.",
			problem: "Sua empresa não tem uma cara definida?",
			solution: "Criamos identidades visuais completas e memoráveis.",
			deliverables: ["Logo", "Manual da Marca", "Papelaria"],
			faq: [],
		},
	},
];

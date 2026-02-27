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
		description: "Mais pessoas qualificadas encontrando e comprando do seu negócio todos os dias.",
		icon: "🎯",
		details: {
			hero: "Anúncios que escalam seu faturamento de forma previsível.",
			problem:
				"Você está gastando com anúncios genéricos sem ver o retorno voltar rápido pro caixa?",
			solution:
				"Nossa gestão de tráfego é focada em conversão real. Escalonamos campanhas no Google e Meta Ads para dominar seu mercado local ou nacional.",
			deliverables: [
				"Estratégia focada no momento do negócio",
				"Gestão de Google Ads e Meta Ads",
				"Análise de CPA (Custo por Aquisição)",
				"Escala de resultados com dados precisos",
			],
			faq: [],
		},
	},
	{
		slug: "conteudo",
		title: "Criação de Conteúdo",
		description: "Sua marca presente todo dia na timeline do cliente certo, gerando autoridade.",
		icon: "✍️",
		details: {
			hero: "Seu perfil trabalhando como a melhor vitrine pro seu bolso.",
			problem: "Seu perfil só atrai curiosos que nunca compram de você?",
			solution:
				"Desenvolvemos conteúdo intencional. Não apenas posts bonitos, mas criativos baseados no que o seu público alvo de fato consome e precisa.",
			deliverables: [
				"Mapeamento de jornada de compra",
				"Roteiros magnéticos para vídeos curtos",
				"Copywriting orientado à conversão",
				"Design focado na identidade da marca",
			],
			faq: [],
		},
	},
	{
		slug: "social-media",
		title: "Gestão de Redes",
		description: "Posicionamento consistente que transforma seguidores em clientes fiéis.",
		icon: "📱",
		details: {
			hero: "Sua empresa sendo a principal escolha dos consumidores.",
			problem: "Perde clientes pra concorrência por não ter um Instagram atrativo?",
			solution: "Cuidamos da percepção de valor do seu serviço digitalmente. De ponta a ponta.",
			deliverables: [
				"Posicionamento estratégico",
				"Atração de audiência qualificada",
				"Constância nas publicações",
				"Monitoramento de métricas",
			],
			faq: [],
		},
	},
	{
		slug: "design",
		title: "Design Gráfico",
		description:
			"Um visual premium que transmite a confiança necessária para fechar bons negócios.",
		icon: "🎨",
		details: {
			hero: "O profissionalismo que aumenta a sua conversão.",
			problem: "O visual do seu negócio afasta os clientes classe A?",
			solution: "Desenvolvemos materiais que elevam sua marca e facilitam a decisão de compra.",
			deliverables: [
				"Materiais para Redes Sociais",
				"Apresentações Institucionais",
				"Banners para Campanhas",
			],
			faq: [],
		},
	},
	{
		slug: "sites",
		title: "Criação de Sites",
		description: "Um vendedor automático que capta clientes para seu time 24 horas por dia.",
		icon: "💻",
		details: {
			hero: "A base mais sólida pra sua empresa digital.",
			problem: "Seu negócio depende apenas do Instagram e de favores do algoritmo?",
			solution: "Sites velozes, com design focado em converter tráfego em orçamentos.",
			deliverables: [
				"Landing Pages de Alta Conversão",
				"Sites Institucionais Otimizados",
				"Integração com WhatsApp e CRM",
			],
			faq: [],
		},
	},
	{
		slug: "identidade-visual",
		title: "Identidade Visual",
		description: "Posicionamento claro que separa o seu negócio do resto da concorrência.",
		icon: "👁️",
		details: {
			hero: "Arquitetura visual desenhada para marcas líderes.",
			problem: "As pessoas não lembram de você depois que saem da sua loja ou perfil?",
			solution:
				"Criamos identidades que causam impacto imediato e geram credibilidade desde o primeiro contato.",
			deliverables: [
				"Brandbook Completo",
				"Aplicações Gráficas",
				"Estratégia de Cores e Tipografia",
			],
			faq: [],
		},
	},
];

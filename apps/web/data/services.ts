export interface Service {
	slug: string;
	title: string;
	description: string;
	icon: string;
	details: {
		hero: string;
		problem: string;
		solution: string;
		content: string[];
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
			hero: "Escala real com inteligência de dados.",
			problem:
				"Você sente que está apenas patrocinando as plataformas sem ver o retorno real no caixa?",
			solution:
				"Gerenciamos seu budget com foco total em faturamento. No Rio ou em todo o país, escalamos sua marca com previsibilidade e análise de dados.",
			content: [
				"Gastar em anúncio é um processo simples; o desafio real é fazer cada centavo retornar como lucro. Cliques irrelevantes não fazem parte da entrega; o foco é venda direta no caixa.",
				"A jornada de compra é analisada para identificar exatamente onde o cliente está. Seja no Google ou no Meta Ads, a operação é cirúrgica para atrair quem já possui intenção de compra.",
				"Mais do que relatórios, entregamos clareza estratégica. Cada etapa da escala é acompanhada de perto, permitindo entender exatamente o destino e o rendimento do investimento.",
				"O objetivo é único: reduzir o custo por aquisição e maximizar o lucro, dominando o mercado com uma estratégia de anúncios que opera 24h por dia para a empresa.",
			],
			deliverables: [
				"Estratégia personalizada de escala",
				"Gestão avançada de Google e Meta Ads",
				"Análise constante de CPA e ROI",
				"Otimização diária baseada em dados reais",
				"Dashboards de acompanhamento transparentes",
			],
			faq: [
				{
					question: "Por que contratar uma agência de tráfego pago no Rio de Janeiro?",
					answer:
						"Contratar uma agência local como a Multi BR garante que sua estratégia considere as nuances do mercado carioca e brasileiro. Nossa inteligência de dados otimiza o investimento em Google e Meta Ads para atrair o público certo com o menor custo por aquisição (CPA).",
				},
				{
					question: "Qual o investimento ideal para anúncios online?",
					answer:
						"O budget é definido com base nos seus objetivos de escala. A Multi BR trabalha com uma estrutura de publicidade que visa a máxima previsibilidade de lucro, garantindo que cada real investido impulsione o faturamento real do negócio.",
				},
				{
					question: "Em quanto tempo vejo resultados com tráfego pago?",
					answer:
						"Diferente do orgânico, o tráfego pago gera visibilidade imediata. No entanto, a fase de aprendizado e otimização de dados leva cerca de 30 a 60 dias para consolidar uma escala sustentável e ROI positivo.",
				},
				{
					question: "Quais canais de anúncios são mais eficientes hoje?",
					answer:
						"Depende do comportamento do seu cliente. Dominamos Meta Ads (Instagram/Facebook) para gerar desejo e Google Ads para capturar a intenção de busca imediata. Integramos esses canais para uma cobertura completa da jornada de compra.",
				},
				{
					question: "Como a Multi BR escala o ROI de marcas em crescimento?",
					answer:
						"Através da análise constante de métricas de performance e testes de criativos. Não paramos na configuração inicial; otimizamos diariamente as campanhas para identificar padrões de sucesso e alocar o orçamento onde o retorno é maior.",
				},
			],
		},
	},
	{
		slug: "conteudo",
		title: "Criação de Conteúdo",
		description: "Sua marca presente todo dia na timeline do cliente certo, gerando autoridade.",
		icon: "✍️",
		details: {
			hero: "Conteúdo que prende a atenção e impulsiona decisões.",
			problem: "Você está postando todo dia e continua com o engajamento (e as vendas) estagnados?",
			solution:
				"Desenvolvemos conteúdo intencional. Do iPhone ao estúdio, o foco são roteiros e designs que geram desejo real e autoridade imediata no mercado.",
			content: [
				"A atenção é a moeda mais valiosa do digital. O foco não é 'encher feed', mas sim criar ativos de atenção que posicionam a marca como líder do seu segmento.",
				"Roteiros, copy e design são pensados para quebrar objeções e motivar a ação do público. O objetivo é transformar visualizações em intenção de compra real.",
				"Com profunda compreensão do ritmo do Rio e da sofisticação exigida pelo mercado nacional, entregamos uma linha editorial que fortalece o branding enquanto vende o serviço.",
				"Enquanto o cliente foca no core business, a produção fica sob nossa responsabilidade. Da pesquisa de tendências à edição final, garantimos que a marca nunca passe despercebida.",
			],
			deliverables: [
				"Linha editorial estratégica",
				"Roteiros de alta retenção para Reels e TikTok",
				"Copywriting focado em conversão",
				"Design premium para redes sociais",
				"Produção e curadoria de conteúdo visual",
			],
			faq: [
				{
					question: "Como o conteúdo estratégico ajuda na publicidade da minha marca?",
					answer:
						"O conteúdo intencional é a base para qualquer estratégia de marketing digital. Ele educa o cliente, quebra objeções e constrói a autoridade necessária para que sua empresa se destaque da concorrência no cenário digital brasileiro.",
				},
				{
					question: "Vocês produzem conteúdo para nichos específicos?",
					answer:
						"Sim, a Multi BR atende empresas que buscam um posicionamento premium. Adaptamos a linguagem e a estética para nichos de alto valor, unindo criatividade à inteligência de mercado para gerar desejo real pelo seu serviço.",
				},
				{
					question: "Qual a diferença entre posts comuns e conteúdo de alto impacto?",
					answer:
						"Conteúdo de alto impacto utiliza design premium e roteiros de conversão. Não é sobre quantidade, mas sobre a qualidade estratégica de cada peça para transformar seguidores em clientes fiéis através de uma narrativa de marca sólida.",
				},
				{
					question: "Por que Reels e TikTok são fundamentais para autoridade hoje?",
					answer:
						"Vídeos curtos possuem o maior alcance orgânico e capacidade de viralização. Roteiros bem estruturados nesses formatos permitem humanizar a marca e transmitir conhecimento rápido, estabelecendo liderança de mercado em poucos segundos.",
				},
				{
					question: "O cliente precisa aparecer nos conteúdos produzidos?",
					answer:
						"Não é obrigatório, mas rostos geram conexão. Desenvolvemos estratégias tanto com porta-vozes da empresa quanto produções focadas em produto ou locução profissional, sempre priorizando o que melhor comunica a autoridade da marca.",
				},
			],
		},
	},
	{
		slug: "gestao-de-redes-sociais",
		title: "Gestão de Redes Sociais",
		description: "Posicionamento consistente que transforma seguidores em clientes fiéis.",
		icon: "📱",
		details: {
			hero: "A vitrine que separa sua marca do amadorismo.",
			problem:
				"Você perde clientes para a concorrência porque seu perfil digital não transmite o valor real do seu serviço?",
			solution:
				"Elevamos o nível do seu posicionamento digital. Cuidamos da marca de ponta a ponta, com constância e estratégia orientada a resultados.",
			content: [
				"O perfil no Instagram ou TikTok é a recepção digital de qualquer negócio. Garantimos uma primeira impressão impecável, transmitindo profissionalismo desde o primeiro contato.",
				"A presença digital é gerenciada com foco em autoridade. As publicações seguem uma narrativa estratégica que sustenta e valoriza o que a empresa entrega diariamente.",
				"Trabalhamos na retenção e no engajamento da audiência qualificada. A marca estará presente onde o cliente está, preparada para converter seguidores em compradores fiéis.",
				"O monitoramento de cada interação e os ajustes estratégicos são feitos em tempo real. A empresa ganha um braço estratégico que cuida da imagem com rigor e inteligência.",
			],
			deliverables: [
				"Gestão completa de presença digital",
				"Planejamento mensal de conteúdo",
				"Atendimento e interação com a comunidade",
				"Relatórios mensais de performance",
				"Acompanhamento de tendências do mercado",
			],
			faq: [
				{
					question: "Por que investir na gestão profissional de redes sociais?",
					answer:
						"Uma gestão profissional, como a oferecida pela Multi BR no Rio de Janeiro, garante constância e autoridade. É a diferença entre ter um perfil 'morto' e uma vitrine digital que atrai orçamentos e gera fechamentos reais de negócio.",
				},
				{
					question: "Como é feita a estratégia de posicionamento digital?",
					answer:
						"Analisamos seu mercado, público-alvo e diferenciais competitivos para criar uma linha de comunicação que valorize seu serviço. O objetivo é posicionar sua marca como líder do segmento, aumentando a percepção de valor.",
				},
				{
					question: "A Multi BR responde mensagens e comentários?",
					answer:
						"Sim, nossa gestão inclui o monitoramento ativo para garantir que cada interação seja uma oportunidade de conversão, mantendo a marca humanizada e próxima do seu cliente ideal.",
				},
				{
					question: "Como mensurar o sucesso da presença digital?",
					answer:
						"Focamos em KPIs de qualidade: crescimento de audiência qualificada, taxa de engajamento e, principalmente, o volume de leads e orçamentos gerados diretamente através dos canais sociais gerenciados.",
				},
				{
					question: "Qual a importância da constância no algoritmo de 2026?",
					answer:
						"O algoritmo prioriza marcas que mantêm a audiência ativa. Nossa gestão assegura um fluxo contínuo de conteúdo relevante, garantindo que sua marca seja sempre priorizada no feed do seu potencial cliente.",
				},
			],
		},
	},
	{
		slug: "design",
		title: "Design Gráfico",
		description:
			"Um visual premium que transmite a confiança necessária para fechar bons negócios.",
		icon: "🎨",
		details: {
			hero: "O silêncio visual que transmite confiança absoluta.",
			problem: "O visual do seu negócio afasta os clientes que buscam excelência e exclusividade?",
			solution:
				"Construímos visuais premium que comunicam excelência. Elevamos o padrão da marca para facilitar e acelerar a decisão de compra do cliente.",
			content: [
				"Design não é apenas estética, é construção de confiança. Resolvemos o desafio da desvalorização visual com design de alto nível e pensamento estratégico.",
				"Elevamos o padrão de todas as suas comunicações, desde posts estratégicos até apresentações comerciais que consolidam negócios pela credibilidade transmitida.",
				"Design que elimina o ruído é a base do nosso trabalho. Cada cor, fonte e elemento gráfico é selecionado para gerar autoridade absoluta à primeira vista.",
				"Entregamos um design estratégico que prepara o terreno para o time comercial, projetando a imagem de uma marca sólida e líder de mercado.",
			],
			deliverables: [
				"Materiais premium para Redes Sociais",
				"Apresentações Comerciais de alto impacto",
				"Materiais impressos e institucionais",
				"Criativos para campanhas de tráfego",
				"Peças de comunicação visual interna e externa",
			],
			faq: [
				{
					question: "Como o design premium impacta a venda de serviços?",
					answer:
						"O design é a primeira camada de confiança entre sua empresa e o cliente. Um visual premium eleva a percepção de autoridade, permitindo que você cobre o valor justo pelo seu serviço sem objeções de preço.",
				},
				{
					question: "Vocês criam materiais para apresentações comerciais?",
					answer:
						"Sim, desenvolvemos apresentações institucionais e comerciais de alto impacto que ajudam a fechar negociações complexas, transmitindo profissionalismo e solidez em cada slide.",
				},
				{
					question: "Qual o diferencial do design da Multi BR?",
					answer:
						"Nossa agência de marketing e publicidade não entrega apenas 'beleza'. Criamos peças estratégicas fundamentadas em psicologia visual e arquitetura de marca para impulsionar a conversão do seu negócio.",
				},
				{
					question: "O design gráfico ajuda a reduzir a objeção de preço?",
					answer:
						"Sim. Quando a marca possui uma estética superior, o cliente percebe maior valor agregado. O design premium justifica o posicionamento de mercado e reduz a necessidade de descontos para fechar vendas.",
				},
				{
					question: "Quais os formatos entregues para campanhas publicitárias?",
					answer:
						"Entregamos artes otimizadas para todos os formatos: Stories, Reels, Feed, banners para Google Display e materiais para YouTube, garantindo que a identidade visual seja preservada em todos os canais.",
				},
			],
		},
	},
	{
		slug: "sites",
		title: "Criação de Sites",
		description: "Um vendedor automático que capta clientes para seu time 24 horas por dia.",
		icon: "💻",
		details: {
			hero: "Sua sede própria no ambiente digital.",
			problem:
				"Seu faturamento depende apenas da sorte e do humor instável dos algoritmos das redes sociais?",
			solution:
				"Construímos sites velozes e focados em conversão. Criamos um ecossistema digital que opera ininterruptamente para captar novos orçamentos.",
			content: [
				"Rede social é terreno alugado. O site é a sede própria na internet. Criamos plataformas onde a marca dita as regras e domina a atenção total do cliente.",
				"Focamos em engenharia de conversão. Os sites são desenvolvidos para carregamento instantâneo, guiando o visitante diretamente para a conversão final.",
				"Seja uma Landing Page ou um Site Institucional, garantimos integração total ao CRM ou WhatsApp, mantendo um fluxo de leads constante para a operação comercial.",
				"A performance técnica e a estética impecável caminham juntas. O site será encontrado pelo Google e admirado pelo cliente, trabalhando 24h por dia.",
			],
			deliverables: [
				"Landing Pages de alta conversão",
				"Sites Institucionais e Portfólios",
				"Otimização extrema de velocidade (PageSpeed)",
				"Integrações com ferramentas de vendas e CRM",
				"Manutenção e suporte técnico contínuo",
			],
			faq: [
				{
					question: "Por que minha empresa precisa de um site profissional?",
					answer:
						"Um site é sua sede digital definitiva. Diferente das redes sociais, ele oferece controle total sobre a jornada do cliente, além de ser essencial para o SEO e descoberta através de buscas por IA e Google.",
				},
				{
					question: "Os sites da Multi BR são otimizados para SEO e Mobile?",
					answer:
						"Sim, todos os nossos projetos seguem o padrão mobile-first e são otimizados tecnicamente para que o Google e assistentes de IA encontrem sua empresa com facilidade, garantindo visibilidade orgânica.",
				},
				{
					question: "O site carrega rápido no celular?",
					answer:
						"Priorizamos a performance técnica. Utilizamos engenharia de ponta para que seu site tenha carregamento instantâneo, reduzindo a taxa de rejeição e aumentando drasticamente as chances de conversão em orçamentos.",
				},
				{
					question: "Como é feita a integração com ferramentas de vendas?",
					answer:
						"Conectamos seu site diretamente ao WhatsApp, CRM ou sistemas de e-mail marketing. O objetivo é que cada contato seja registrado e processado pelo seu time comercial sem perda de dados ou tempo.",
				},
				{
					question: "O site pertence à minha empresa após o desenvolvimento?",
					answer:
						"Sim, a propriedade total do código e do domínio é do cliente. Oferecemos suporte técnico contínuo, mas garantimos autonomia total para que sua empresa tenha controle sobre seu principal ativo digital.",
				},
			],
		},
	},
	{
		slug: "identidade-visual",
		title: "Identidade Visual",
		description: "Posicionamento claro que separa o seu negócio do resto da concorrência.",
		icon: "👁️",
		details: {
			hero: "Arquitetura visual para marcas que vieram para liderar.",
			problem: "As pessoas esquecem da sua marca assim que saem do seu perfil ou da sua loja?",
			solution:
				"Criamos identidades que causam impacto e permanecem na memória. Um universo visual completo que transmite autoridade e valor imediatos.",
			content: [
				"Marcas que lideram são lembradas. Mais do que um logo, entregamos um Brandbook completo que traduz a alma e a estratégia real do negócio.",
				"Cores, tipografia e elementos gráficos são desenhados para estabelecer um rastro de confiança imediato em quem interage com a empresa.",
				"Desenvolvemos identidades que impõem respeito e simplificam processos de negociação de alto valor, profissionalizando a comunicação de ponta a ponta.",
				"Construímos o universo visual que abre portas e posiciona o negócio em um nível superior de mercado, destacando-o da concorrência direta.",
			],
			deliverables: [
				"Logo principal e variações estratégicas",
				"Manual de Identidade Visual (Brandbook)",
				"Paleta de cores e tipografias exclusivas",
				"Papelaria institucional e digital",
				"Guia de aplicação e tom de voz da marca",
			],
			faq: [
				{
					question: "Qual a importância de uma identidade visual estratégica?",
					answer:
						"Uma identidade visual bem construída separa amadores de líderes. Ela garante que sua marca seja lembrada e respeitada, transmitindo os valores e a autoridade da sua empresa antes mesmo da primeira conversa.",
				},
				{
					question: "O que está incluso no projeto de branding da Multi BR?",
					answer:
						"Entregamos um universo visual completo: logotipo, variações, manual de cores, tipografia e guia de aplicação. O objetivo é criar um lastro de confiança e autoridade em todos os pontos de contato da sua marca.",
				},
				{
					question: "Quanto tempo leva para criar uma nova marca?",
					answer:
						"Nosso processo de construção de marca leva em média 3 a 5 semanas. É uma imersão estratégica para garantir que o resultado final reflita a alma do seu negócio e esteja pronto para dominar o mercado brasileiro.",
				},
				{
					question: "Como o redesign de marca impacta marcas consolidadas?",
					answer:
						"O redesign profissional renova a percepção de mercado, alinhando a empresa às expectativas atuais de consumo sem perder a sua história. É o caminho para aumentar o valor percebido e atrair clientes de maior ticket médio.",
				},
				{
					question: "Posso usar a nova identidade em canais de publicidade impressa?",
					answer:
						"Sim, entregamos arquivos de alta resolução e guias técnicos para aplicações em qualquer meio, seja digital ou impresso (papelaria, fachadas, uniformes), garantindo fidelidade visual em todos os suportes.",
				},
			],
		},
	},
];

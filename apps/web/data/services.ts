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
                        hero: "Anúncios que escalam seu faturamento de forma previsível.",
                        problem:
                                "Você está gastando com anúncios genéricos sem ver o retorno voltar rápido pro caixa?",
                        solution:
                                "Nossa gestão de tráfego é focada em conversão real. Escalonamos campanhas no Google e Meta Ads para dominar seu mercado local ou nacional.",
                        			content: [
                        				"Não adianta ter o melhor produto ou serviço se as pessoas certas não sabem que ele existe. O tráfego pago não é sobre gastar dinheiro em plataformas, é sobre comprar dados e escalar de forma inteligente e mensurável.",
                        				"Na Multi, não operamos com achismos. Analisamos o momento da sua empresa, entendemos sua jornada de conversão e criamos campanhas direcionadas para atrair clientes prontos para comprar, seja no Google ou no Meta Ads.",
                        				"Nosso foco é claro: reduzir o seu custo por aquisição e aumentar a previsibilidade de vendas, transformando visitantes em receita sólida todos os meses.",
                        				"Monitoramos e otimizamos diariamente suas campanhas para que cada centavo investido volte em formato de lucro real, dominando o mercado que você escolheu atuar."
                        			],                        deliverables: [
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
                        			content: [
                        				"O conteúdo da sua marca não deve ser um mural de avisos ignorado, mas uma ferramenta ativa de vendas e autoridade. Quando criamos para o seu negócio, nosso alvo é a atenção qualificada.",
                        				"Esquecemos métricas de vaidade e focamos em roteiros, copy e design que geram desejo e quebram objeções. É a ponte perfeita entre o que o seu cliente busca e a solução que você entrega.",
                        				"Seu perfil será nutrido com uma linha editorial desenhada exclusivamente para fortalecer seu posicionamento, conduzindo o seu público de forma sutil até o momento da compra.",
                        				"Tudo isso sem que você precise passar horas do seu dia tentando descobrir o que postar. Nosso time assume a responsabilidade pela pesquisa e pela criatividade, do início ao fim."
                        			],                        deliverables: [
                                "Mapeamento de jornada de compra",
                                "Roteiros magnéticos para vídeos curtos",
                                "Copywriting orientado à conversão",
                                "Design focado na identidade da marca",
                        ],
                        faq: [],
                },
        },
        {
                slug: "gestao-de-redes-sociais",
                title: "Gestão de Redes Sociais",
                description: "Posicionamento consistente que transforma seguidores em clientes fiéis.",
                icon: "📱",
                details: {
                        hero: "Sua empresa sendo a principal escolha dos consumidores.",
                        problem: "Perde clientes pra concorrência por não ter um Instagram atrativo?",
                        solution: "Cuidamos da percepção de valor do seu serviço digitalmente. De ponta a ponta.",
                        			content: [
                        				"A primeira impressão do seu cliente atual acontece no seu perfil. Uma vitrine desatualizada ou sem estratégia grita amadorismo e manda o cliente direto para o concorrente.",
                        				"Nossa gestão assume a responsabilidade de elevar a percepção de valor do seu negócio no digital. Cuidamos do seu posicionamento, garantindo constância, qualidade e foco no que realmente importa.",
                        				"Criamos um ecossistema que não apenas atrai, mas retém e engaja a audiência certa. Sua marca estará presente, relevante e sempre preparada para converter seguidores em clientes fiéis.",
                        				"Acompanhamos o fluxo de interação, monitoramos respostas e garantimos que sua marca se comporte como líder do seu segmento no ambiente digital todos os dias."
                        			],                        deliverables: [
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
                        			content: [
                        				"Em um mercado saturado, o bom design não é luxo, é a linguagem silenciosa que transmite confiança instantânea. Materiais visuais mal executados desvalorizam o seu serviço, não importa o quão bom ele seja.",
                        				"Nós construímos visuais premium, pensados para destacar sua marca e comunicar o nível de excelência do que você oferece, desde posts de redes sociais até apresentações comerciais robustas.",
                        				"Eleve o padrão das suas comunicações. Entregamos um design estratégico que facilita a decisão de compra, eliminando o atrito visual e gerando credibilidade à primeira vista.",
                        				"Não se trata apenas de deixar o seu negócio 'mais bonito'. Cada detalhe gráfico que aplicamos é intencional e focado em aumentar a sua taxa de fechamento e conversão de negócios."
                        			],                        deliverables: [
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
                        			content: [
                        				"Depender apenas de redes sociais é alugar um terreno. O seu site é a sua sede própria na internet: o lugar onde não há concorrência disputando a atenção do seu cliente, nem algoritmo ditando as regras.",
                        				"Desenvolvemos plataformas extremamente rápidas e estruturadas para conversão. Transformamos cliques em contatos reais, construindo páginas que respondem às dúvidas do cliente antes mesmo que ele pergunte.",
                        				"Seja uma Landing Page ou um Site Institucional completo, focamos em um design impecável integrado perfeitamente ao seu time comercial ou CRM, trabalhando por você 24 horas por dia.",
                        				"A nossa engenharia de sites garante não só estética, mas performance técnica para que suas páginas carreguem instantaneamente e sejam bem ranqueadas nos motores de busca do Google."
                        			],                        deliverables: [
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
                        			content: [
                        				"Marcas fortes não nascem por acaso. Elas possuem uma arquitetura visual consistente que permite serem reconhecidas e lembradas sem esforço, destacando-se automaticamente no mercado.",
                        				"Nosso desenvolvimento de marca não entrega apenas um 'logo bonito', mas um universo visual completo: tipografia, cores e elementos gráficos desenhados estrategicamente para o seu público.",
                        				"Transmita a autoridade e a grandeza do seu negócio antes mesmo de dizer a primeira palavra. Criamos identidades que impõem respeito e profissionalizam toda a sua comunicação.",
                        				"Do papel de carta à foto de perfil da empresa, nossa construção criará um lastro de confiança imediato, abrindo portas e simplificando o processo de negociação de alto valor."
                        			],                        deliverables: [
                                "Brandbook Completo",
                                "Aplicações Gráficas",
                                "Estratégia de Cores e Tipografia",
                        ],
                        faq: [],
                },
        },
];

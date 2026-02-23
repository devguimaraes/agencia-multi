export interface Project {
  slug: string
  title: string
  category: "Branding" | "Tráfego" | "Conteúdo" | "Web Design"
  image: string
  description: string
  client: string
}

export const PROJECTS: Project[] = [
  {
    slug: "iorb-branding",
    title: "Rebranding IORB",
    category: "Branding",
    image: "/assets/clients/iorb.webp",
    description: "Modernização da identidade visual para escritório de advocacia.",
    client: "IORB Advogados",
  },
  {
    slug: "campanha-verao",
    title: "Campanha de Verão",
    category: "Tráfego",
    image: "/assets/multi/feed-1.png",
    description: "Gestão de tráfego para e-commerce de moda praia, ROI 5x.",
    client: "Moda Praia",
  },
  {
    slug: "conteudo-tech",
    title: "Estratégia LinkedIn",
    category: "Conteúdo",
    image: "/assets/multi/feed-1.png", // Placeholder
    description: "Posicionamento executivo e criação de autoridade.",
    client: "Tech Solutions",
  },
  {
    slug: "site-imobiliaria",
    title: "Site Institucional",
    category: "Web Design",
    image: "/assets/multi/banner.jpg",
    description: "Desenvolvimento de site responsivo e otimizado para SEO.",
    client: "Imob Prime",
  },
]

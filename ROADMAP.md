# 🗺️ Roadmap — Agência Multi BR

> Guia de progresso da implementação do site institucional Multi BR.
> Baseado no `PLANO-IMPLEMENTACAO.md` com 7 fases (F0–F6).

---

## Fase 0 — Setup Inicial ✅

**Status:** Concluído · **Data:** 12/02/2026

### O que foi feito

| Item | Status | Detalhes |
|------|--------|---------|
| Branch de trabalho | ✅ | `feat/fase-0-setup` criada a partir da `main` |
| Monorepo com Bun workspaces | ✅ | `apps/*` + `packages/*`, Bun 1.3.4 |
| Turborepo | ✅ | Pipelines: `dev`, `build`, `lint`, `type-check`, `test`, `test:e2e` |
| Next.js App | ✅ | Next.js **16.1.6**, React **19.2.3**, App Router, Turbopack |
| Tailwind CSS | ✅ | v4 com `@theme inline` — tokens de cores Multi BR já registrados |
| Biome (lint + format) | ✅ | Regras strict: no `any`, no unused imports, no console.log, a11y |
| TypeScript | ✅ | Strict mode em todos os 4 workspaces |
| Package `@multi-br/ui` | ✅ | Seed — componentes serão adicionados na Fase 1 |
| Package `@multi-br/config` | ✅ | `SITE_CONFIG` com nome, slogan, tagline, URL |
| Package `@multi-br/types` | ✅ | Types: `Service`, `BlogPost`, `Testimonial`, `ContactFormData` |
| VS Code settings | ✅ | Biome formatter, format on save, Tailwind IntelliSense |
| `.gitignore` | ✅ | Node/Next.js/Bun/Turbo/Playwright completo |
| Vitest + Testing Library | ✅ | jsdom, path aliases, setup com jest-dom |
| Playwright | ✅ | 3 browsers (Chromium, Firefox, WebKit), webServer auto |
| Smoke test | ✅ | 2 testes passando (heading + slogan) |

### Verificação

| Comando | Resultado |
|---------|-----------|
| `bun install` | ✅ 446 packages instalados |
| `bun lint` | ✅ 21 arquivos, 0 erros |
| `bun type-check` | ✅ 4/4 packages passando |
| `vitest run` | ✅ 2/2 testes passando |
| `bun run build` | ✅ Build concluído (Turbopack) |

### Estrutura criada

```
multi-br/
├── apps/web/                 # Next.js 16 (App Router + Turbopack)
│   ├── app/
│   │   ├── layout.tsx        # Poppins, metadata Multi BR, lang pt-BR
│   │   ├── page.tsx          # Home mínima
│   │   ├── globals.css       # Tailwind v4 + tokens de cores brand
│   │   └── __tests__/        # Vitest smoke tests
│   ├── e2e/                  # Playwright (vazio)
│   ├── vitest.config.ts
│   ├── vitest.setup.ts
│   └── playwright.config.ts
├── packages/
│   ├── ui/                   # @multi-br/ui (seed)
│   ├── config/               # @multi-br/config (SITE_CONFIG)
│   └── types/                # @multi-br/types (Service, BlogPost, etc.)
├── .vscode/                  # Biome + Tailwind IntelliSense
├── biome.json                # Lint + format strict
├── turbo.json                # Pipelines monorepo
├── package.json              # Bun workspaces
└── .gitignore
```

---

## Fase 1 — Design System (Tokens + Componentes Base) 🔜

**Status:** Próxima fase

- Implementar tokens completos (escala tipográfica, espaçamentos, sombras, gradientes)
- Carregar fonte Balgin Black (local)
- Inicializar shadcn/ui com tema Multi
- Customizar 10+ componentes (Button, Card, Form, Sheet, Toast, Accordion, Tabs, Dialog, Dropdown)
- Implementar animações base (fade-in, slide-up, IntersectionObserver)

---

## Fase 2 — Layout Global ⏳

- Header responsivo (sticky, blur, nav, CTA)
- Footer completo
- Menu mobile (Sheet)
- WhatsApp floating button
- Loading/Error/404 global

---

## Fase 3 — Home Page ⏳

- Hero Section, Serviços, Mentoria, Portfolio
- Depoimentos, Blog highlights, CTA final
- Scroll animations, Trust badges

---

## Fase 4 — Páginas Internas ⏳

- Sobre, 6× Serviço (template), Portfolio, Blog
- Mentoria (landing), Contato (formulário)
- Rotas dinâmicas `/servicos/[slug]`, `/blog/[slug]`

---

## Fase 5 — Qualidade e Otimização ⏳

- Testes unitários (70%+), integração, E2E
- Auditoria a11y (WCAG AA), Core Web Vitals
- SEO: meta tags, schema markup, sitemap

---

## Fase 6 — Deploy e Go-Live ⏳

- Vercel: projeto, domínio, env vars, analytics
- GitHub Actions CI pipeline
- Smoke test em produção

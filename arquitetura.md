# Arquitetura Técnica - Agência Multi BR

> **Importante:** Este documento define a arquitetura técnica e stack do projeto. O foco está em diretrizes, princípios e o que precisa ser configurado - não em código específico de implementação. As decisões detalhadas de implementação serão tomadas durante o desenvolvimento.

---

## 📋 Índice

1. [Visão Geral da Stack](#visão-geral-da-stack)
2. [Arquitetura do Projeto](#arquitetura-do-projeto)
3. [Stack Técnica Detalhada](#stack-técnica-detalhada)
4. [Estrutura Monorepo](#estrutura-monorepo)
5. [Configurações Necessárias](#configurações-necessárias)
6. [Estratégia de Testes](#estratégia-de-testes)
7. [Sistema de Eventos](#sistema-de-eventos)
8. [Observabilidade](#observabilidade)
9. [Deploy e Hosting (Vercel)](#deploy-e-hosting-vercel)
10. [Fluxo de Desenvolvimento](#fluxo-de-desenvolvimento)
11. [Preparação para Backend](#preparação-para-backend)

---

## 🎯 Visão Geral da Stack

### Stack Principal

| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| **Next.js** | 15.x | Framework React com SSR/SSG |
| **React** | 19.x | Biblioteca UI |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 3.x | Styling utility-first |
| **shadcn/ui** | Latest | Componentes UI |
| **Bun** | 1.x | Runtime e package manager |

### Ferramentas de Desenvolvimento

| Ferramenta | Propósito |
|------------|-----------|
| **Biome** | Linter + Formatter (substitui ESLint e Prettier) |
| **Vitest** | Testes unitários e de integração |
| **Playwright** | Testes E2E |
| **Turbo** | Build system para monorepo |
| **Vercel** | Plataforma de deploy e hosting |

---

## 🏗️ Arquitetura do Projeto

### Princípios Arquiteturais

**1. Separação de Responsabilidades**
- Cada camada tem uma responsabilidade clara
- Componentes desacoplados e reutilizáveis
- Lógica de negócio separada da apresentação

**2. Escalabilidade**
- Estrutura preparada para crescimento
- Monorepo facilita compartilhamento de código
- Componentes e utilities reutilizáveis

**3. Manutenibilidade**
- Código limpo e autodocumentado
- Padrões consistentes
- Type safety em todo o projeto

**4. Performance**
- SSR/SSG quando apropriado
- Code splitting automático
- Otimizações do Next.js
- Imagens otimizadas

**5. Developer Experience**
- Fast refresh
- Type checking
- Linting e formatting automáticos
- Testes integrados

---

## 🛠️ Stack Técnica Detalhada

### Next.js 15.x

**Por que Next.js:**
- SSR (Server-Side Rendering) para SEO
- SSG (Static Site Generation) para performance
- App Router (nova arquitetura)
- API Routes integradas
- Otimizações automáticas de imagens
- File-based routing

**Recursos a Utilizar:**
- App Router (nova estrutura de rotas)
- Server Components onde apropriado
- Client Components para interatividade
- Metadata API para SEO
- Image optimization
- Font optimization

**Estrutura de Páginas:**
```
/app
  /page.tsx                    # Home
  /sobre/page.tsx              # Sobre
  /servicos/
    /page.tsx                  # Lista de serviços
    /[slug]/page.tsx           # Serviço individual
  /mentoria/page.tsx           # Mentoria
  /ebook/page.tsx              # E-book (futuro)
  /portfolio/page.tsx          # Portfolio
  /blog/
    /page.tsx                  # Lista de posts
    /[slug]/page.tsx           # Post individual
  /contato/page.tsx            # Contato
```

---

### React 19.x

**Recursos:**
- Hooks (useState, useEffect, useContext, custom hooks)
- Server Components (Next.js 15)
- Suspense para loading states
- Error boundaries

**Padrões de Componentes:**
- Componentes funcionais
- Props tipadas com TypeScript
- Composição sobre herança
- Single Responsibility Principle

---

### TypeScript 5.x

**Configuração Necessária:**
- Strict mode habilitado
- Path aliases configurados
- Type checking rigoroso

**Uso:**
- Tipar todos os componentes
- Tipar props e estados
- Tipar API responses (futuro)
- Tipar eventos
- Evitar `any` - usar `unknown` quando necessário

---

### Tailwind CSS 3.x

**Configuração Necessária:**
- Cores da marca configuradas no `tailwind.config`
- Fontes customizadas (Balgin Black, Poppins)
- Breakpoints personalizados
- Plugins necessários (forms, typography)

**Cores da Marca (configurar):**
```
Roxo: #5D018A
Amarelo: #FAC32A
Rosa: #E60057
Verde: #138910
Azul: #014FCD
Vermelho: #D62D0E
Laranja: #EC8B20
```

**Princípios de Uso:**
- Utility-first approach
- Componentes reutilizáveis com Tailwind
- Responsive design mobile-first
- Dark mode preparado (futuro)

---

### shadcn/ui

**Por que shadcn/ui:**
- Componentes copiáveis (não uma biblioteca)
- Totalmente customizável
- Já vem com Tailwind
- Acessibilidade built-in
- Type-safe

**Componentes a Utilizar:**
- Button
- Card
- Form (com react-hook-form)
- Input, Textarea
- Dialog/Modal
- Dropdown
- Tabs
- Toast/Notifications
- Accordion
- Sheet (mobile menu)

**Customização:**
- Adaptar cores ao brand
- Ajustar estilos padrão
- Manter acessibilidade

---

### Bun

**Por que Bun:**
- Extremamente rápido (até 4x mais que npm/pnpm)
- Runtime JavaScript/TypeScript nativo
- Package manager integrado
- Bundler integrado
- Test runner integrado

**Uso:**
- Package manager principal
- Scripts de desenvolvimento
- Build process
- Testes (junto com Vitest)

**Comandos Principais:**
```
bun install       # Instalar dependências
bun dev           # Desenvolvimento
bun build         # Build produção
bun test          # Rodar testes
```

---

### Biome ⚠️ PRECISA CONFIGURAR

**Por que Biome:**
- Substitui ESLint + Prettier em uma ferramenta
- 25x mais rápido que ESLint
- Zero configuração padrão
- Escrito em Rust
- Formatação e linting unificados

**CONFIGURAÇÃO OBRIGATÓRIA:**

Arquivo `biome.json` precisa ser criado na raiz do projeto com:
- Regras de linting
- Regras de formatação
- Arquivos/pastas a ignorar
- Integração com o monorepo

**Regras a Configurar:**
- Indentação (2 espaços)
- Aspas simples ou duplas
- Semicolons
- Line length
- Import sorting
- Unused variables
- Console.log em produção

**Integração:**
- CI/CD pipeline (GitHub Actions)
- IDE/Editor (VSCode extension)
- Rodar manualmente antes de commit

**Scripts Necessários:**
```
bun biome:check    # Verificar código
bun biome:fix      # Corrigir automaticamente
bun biome:format   # Formatar código
```

---

## 📦 Estrutura Monorepo

### Por que Monorepo:

**Vantagens:**
- Compartilhamento de código entre apps
- Versionamento unificado
- Deploy independente de cada app
- Reutilização de componentes
- Configurações compartilhadas

**Estrutura Proposta:**

```
multi-br/
├── apps/
│   ├── web/                    # Site principal (Next.js)
│   │   ├── app/
│   │   ├── components/
│   │   ├── lib/
│   │   └── public/
│   │
│   ├── admin/                  # Admin/Dashboard (futuro)
│   │   └── ...
│   │
│   └── blog/                   # Blog separado (opcional futuro)
│       └── ...
│
├── packages/
│   ├── ui/                     # Componentes compartilhados
│   │   ├── src/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── ...
│   │   └── package.json
│   │
│   ├── config/                 # Configurações compartilhadas
│   │   ├── tailwind.config.js
│   │   ├── typescript.config.json
│   │   └── biome.json
│   │
│   ├── utils/                  # Utilitários compartilhados
│   │   ├── src/
│   │   │   ├── formatters.ts
│   │   │   ├── validators.ts
│   │   │   └── ...
│   │   └── package.json
│   │
│   └── types/                  # Types compartilhados
│       ├── src/
│       │   ├── service.ts
│       │   ├── blog.ts
│       │   └── ...
│       └── package.json
│
├── tools/
│   └── scripts/                # Scripts de build e deploy
│
├── biome.json                  # ⚠️ PRECISA CONFIGURAR
├── turbo.json                  # Configuração Turborepo
├── package.json                # Root package
└── bun.lockb                   # Lockfile do Bun
```

---

### Bun Workspaces

**Workspaces** é o recurso do Bun (e npm/pnpm/yarn) para gerenciar monorepos:

**Propósito:**
- Gerenciar múltiplos packages em um único repositório
- Compartilhar dependências entre packages
- Instalar tudo com um único comando
- Linkar packages localmente automaticamente

**Configuração Necessária:**

Arquivo `package.json` na raiz:
```json
{
  "workspaces": [
    "apps/*",
    "packages/*"
  ]
}
```

**Funcionamento:**
- Cada workspace (app ou package) tem seu próprio `package.json`
- Dependências compartilhadas ficam na raiz
- Dependências específicas ficam em cada workspace
- `bun install` na raiz instala tudo

**Vantagens:**
- Um único `node_modules` compartilhado (economia de espaço)
- Instalação mais rápida
- Versionamento unificado
- Fácil importar entre packages
- Builds otimizados com Turbo

**Exemplo de Uso:**
```bash
# Instalar dependências de todos os workspaces
bun install

# Rodar comando em workspace específico
bun --filter web dev

# Rodar comando em todos os workspaces
bun --filter "*" build
```

---

### Turborepo

**Configuração Necessária:**

Arquivo `turbo.json` para orquestrar builds no monorepo:
- Pipeline de builds
- Cache de builds
- Dependências entre packages
- Tasks paralelas

**Tasks:**
- `dev`: Desenvolvimento de todos os apps
- `build`: Build de produção
- `test`: Rodar todos os testes
- `lint`: Lint de todo o código
- `format`: Format de todo o código

---

## ⚙️ Configurações Necessárias

### 1. Biome (PRIORITÁRIO) ⚠️

**Arquivo:** `biome.json`

**Precisa Configurar:**
- Formatter rules
- Linter rules
- Organize imports
- Files to ignore
- Integration com monorepo

**Integração:**
- VSCode extension
- Pre-commit hooks
- CI/CD checks

---

### 2. TypeScript

**Arquivo:** `tsconfig.json` (raiz e cada workspace)

**Precisa Configurar:**
- Strict mode
- Path aliases (`@/components`, `@/lib`, etc.)
- Module resolution
- JSX settings
- Include/exclude patterns

---

### 3. Tailwind CSS

**Arquivo:** `tailwind.config.ts`

**Precisa Configurar:**
- Theme colors (paleta Multi BR)
- Fonts (Balgin Black, Poppins)
- Breakpoints
- Spacing customizado
- Plugins (forms, typography)
- Content paths para monorepo

---

### 4. Next.js

**Arquivo:** `next.config.js`

**Precisa Configurar:**
- Image domains permitidos
- Redirects/Rewrites
- Environment variables
- Build optimizations
- Experimental features (quando necessário)

---

### 5. Package.json

**Scripts Necessários:**
```json
{
  "dev": "turbo dev",
  "build": "turbo build",
  "test": "turbo test",
  "lint": "biome check .",
  "lint:fix": "biome check --apply .",
  "format": "biome format --write .",
  "type-check": "turbo type-check"
}
```

---

---

## 🧪 Estratégia de Testes

### Pirâmide de Testes

```
        /\
       /E2E\        Poucos, lentos, end-to-end
      /------\
     /Integ.  \     Médios, casos críticos
    /----------\
   /  Unit      \   Muitos, rápidos, isolados
  /--------------\
```

---

### Testes Unitários (Vitest)

**O que testar:**
- Componentes isolados
- Funções utilitárias
- Hooks customizados
- Formatadores e validators
- Lógica de negócio

**Estrutura:**
```
src/
  components/
    button.tsx
    button.test.tsx
  utils/
    format.ts
    format.test.ts
```

**Configuração Necessária:**
- Vitest config
- Testing Library (React)
- Mock de Next.js Router
- Mock de fetch/API calls

---

### Testes de Integração (Vitest + Testing Library)

**O que testar:**
- Fluxos de múltiplos componentes
- Formulários completos
- Navegação entre páginas
- Interação com APIs (mock)

---

### Testes E2E (Playwright)

**O que testar:**
- Fluxos críticos do usuário
- Formulário de contato
- Navegação completa
- Fluxo de conversão (mentoria, e-book)

**Browsers:**
- Chromium
- Firefox
- WebKit (Safari)

**Configuração Necessária:**
- Playwright config
- URLs de teste (local, staging)
- Screenshots em falhas
- Vídeos de testes

---

### Cobertura de Testes

**Metas:**
- Componentes UI: 70%+
- Utilities/Helpers: 90%+
- Hooks: 80%+
- E2E: Fluxos críticos 100%

**Comandos:**
```
bun test              # Rodar testes
bun test:watch        # Watch mode
bun test:coverage     # Cobertura
bun test:e2e          # E2E
```

---

## 📡 Sistema de Eventos

### Por que Eventos:

- Desacoplamento de componentes
- Analytics e tracking
- Log de ações do usuário
- Preparação para backend real-time
- Debugging e monitoramento

---

### Tipos de Eventos

**1. Eventos de UI:**
```typescript
// Exemplos
'button:click'
'form:submit'
'modal:open'
'navigation:change'
```

**2. Eventos de Negócio:**
```typescript
'service:request'
'mentoria:interest'
'ebook:download'
'contact:sent'
```

**3. Eventos de Analytics:**
```typescript
'page:view'
'cta:click'
'scroll:depth'
'time:spent'
```

---

### Implementação

**Event Bus Simples:**
- Sistema de pub/sub
- Type-safe com TypeScript
- Middleware para logging
- Preparado para integração com analytics

**Estrutura:**
```typescript
// Não é código, apenas conceito
EventBus.emit('service:request', { service: 'mentoria' })
EventBus.on('service:request', handler)
```

---

### Integração com Analytics (Futuro)

**Preparar para:**
- Google Analytics 4
- Facebook Pixel
- Custom events
- Conversion tracking
- A/B testing

---

## 📊 Observabilidade

### Por que Observabilidade:

- Entender comportamento do usuário
- Detectar problemas em produção
- Medir performance
- Debug de issues
- Tomada de decisões baseada em dados

---

### Logs

**Níveis de Log:**
```
ERROR   - Erros críticos
WARN    - Avisos importantes
INFO    - Informações gerais
DEBUG   - Debug (apenas desenvolvimento)
```

**O que Logar:**
- Erros de API (futuro)
- Falhas de formulário
- Performance issues
- Eventos importantes de negócio

**Onde NÃO logar:**
- Dados sensíveis
- Senhas
- Tokens
- Informações pessoais (LGPD)

---

### Performance Monitoring

**Métricas a Monitorar:**

**Core Web Vitals:**
- LCP (Largest Contentful Paint)
- FID (First Input Delay)
- CLS (Cumulative Layout Shift)

**Outras Métricas:**
- Time to Interactive (TTI)
- Total Blocking Time (TBT)
- Page Load Time
- API Response Time (futuro)

**Ferramentas:**
- Next.js Analytics (built-in)
- Vercel Analytics (se hospedar na Vercel)
- Google Lighthouse
- Custom monitoring (futuro)

---

### Error Tracking

**O que Rastrear:**
- JavaScript errors
- API errors (futuro)
- Failed requests
- Render errors
- Boundary errors

**Ferramentas (futuro):**
- Sentry
- LogRocket
- Custom solution

**Implementação:**
- Error Boundaries no React
- Global error handler
- Logging service

---

### User Analytics

**Dados a Coletar:**
- Page views
- User flow
- Bounce rate
- Time on page
- Click maps (futuro)
- Scroll depth

**LGPD Compliance:**
- Cookie consent
- Opt-out option
- Dados anonimizados
- Privacy policy clara

---

## 🚀 Deploy e Hosting (Vercel)

### Por que Vercel:

**Otimizações para Next.js:**
- Criadores do Next.js
- Otimizações automáticas
- Edge Network global
- Zero config para Next.js

**Recursos:**
- Deploy automático do Git
- Preview deployments
- Rollbacks instantâneos
- Analytics integrado
- Edge Functions
- Image Optimization automática
- Incremental Static Regeneration (ISR)

**Performance:**
- CDN global automático
- Cache inteligente
- Compression automática
- HTTP/3 support

---

### Configuração do Projeto

**Projeto na Vercel:**

**Nome:** Multi BR Web
**Framework:** Next.js
**Build Command:** `cd ../.. && turbo build --filter=web`
**Output Directory:** `apps/web/.next`
**Install Command:** `bun install`
**Root Directory:** `apps/web`

**Git Integration:**
- Repositório: GitHub
- Production Branch: `main`
- Preview Branches: Todos os PRs

---

### Variáveis de Ambiente

**Configuração Necessária:**

**Production:**
```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://agenciamultibr.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX (quando configurado)
NEXT_PUBLIC_FB_PIXEL=XXXXXXXXXX (quando configurado)
```

**Preview:**
```
NODE_ENV=preview
NEXT_PUBLIC_SITE_URL=(gerado automaticamente pela Vercel)
```

**Como Configurar:**
1. Dashboard Vercel → Projeto → Settings → Environment Variables
2. Adicionar variável
3. Escolher ambiente (Production, Preview, Development)
4. Redeploy se necessário

**Importante:**
- Variáveis com `NEXT_PUBLIC_` são expostas no browser
- Variáveis sem prefixo são server-only
- Nunca commitar variáveis sensíveis no código

---

### Workflow de Deploy

**Feature Development:**
```
1. Create branch: feature/nova-pagina
2. Develop locally
3. Push to GitHub
4. Vercel creates preview deploy automatically
5. Comment in PR with preview URL
6. Test in preview environment
7. Request review
8. Merge to main
9. Automatic production deploy
```

**Preview Deployments:**
- URL: `multi-br-web-[hash]-multi.vercel.app`
- Criado para cada commit no PR
- Ambiente isolado para testar
- Mesmas configs de preview environment vars

**Production Deployments:**
- URL: `agenciamultibr.com`
- Trigger: Merge/push to main
- Build time: ~2-4 minutos
- Promoção automática ou manual

---

### Domínio Customizado

**Configuração:**

1. Adicionar domínio na Vercel:
   - Dashboard → Projeto → Settings → Domains
   - Adicionar: `agenciamultibr.com`
   - Adicionar: `www.agenciamultibr.com`

2. Configurar DNS:
   - Registrador: [onde o domínio foi comprado]
   - Adicionar registros conforme instruções Vercel
   - Aguardar propagação (até 48h, geralmente menos)

3. SSL/HTTPS:
   - Automático e gratuito
   - Let's Encrypt certificate
   - Renovação automática

---

### Monitoramento e Analytics

**Vercel Analytics (opcional):**
- Web Vitals
- Performance metrics
- Page views
- Core Web Vitals score

**Como Habilitar:**
1. Dashboard → Projeto → Analytics
2. Enable Vercel Analytics
3. Instalar `@vercel/analytics` (se não estiver)
4. Ver métricas em tempo real

**Speed Insights:**
- Real User Monitoring (RUM)
- Performance score
- Comparação entre deploys
- Alertas de degradação

---

### Rollbacks

**Como Fazer Rollback:**

1. Dashboard → Projeto → Deployments
2. Encontrar deploy anterior estável
3. Três pontos (⋯) → Promote to Production
4. Confirmação
5. Rollback imediato

**Importante:**
- Mantém histórico de todos os deploys
- Rollback não afeta código no Git
- Pode promover qualquer deploy anterior
- Sem downtime

---

### Logs e Debugging

**Function Logs:**
- Dashboard → Projeto → Logs
- Logs em tempo real
- Filtros por severity
- Busca por texto

**Build Logs:**
- Visível durante build
- Acessível após build completo
- Útil para debugar build failures

**Runtime Logs:**
- Server-side logs de API Routes
- Edge Function logs
- Erros e warnings

---

### Limites e Considerações

**Plano Free (Hobby):**
- Bandwidth: 100GB/mês
- Build time: 6000 minutos/mês
- Edge Functions: Ilimitadas
- Deployments: Ilimitados
- Colaboradores: 1

**Se Exceder Limites:**
- Considerar upgrade para Pro
- Pro: ~$20/mês por membro
- Mais bandwidth, build time, e recursos

**Otimizações:**
- Cache agressivo de assets
- Otimizar imagens (next/image)
- ISR para páginas semi-estáticas
- Edge caching quando apropriado

---

## 🔄 Fluxo de Desenvolvimento

### GitHub Flow

**Por que GitHub Flow:**
- Mais simples que Git Flow
- Adequado para deploy contínuo
- Integração natural com Vercel
- Branch única de produção (main)
- Features desenvolvidas em branches

**Estrutura de Branches:**
```
main              # Produção (deploy automático na Vercel)
feature/*         # Features novas
fix/*             # Correções de bugs
hotfix/*          # Correções urgentes
```

**Workflow:**

1. **Criar Branch de Feature/Fix**
   ```bash
   git checkout -b feature/mentoria-page
   # ou
   git checkout -b fix/contact-form-validation
   ```

2. **Desenvolver Localmente**
   - Fazer commits pequenos e frequentes
   - Seguir Conventional Commits
   - Rodar testes localmente

3. **Push e Criar Pull Request**
   ```bash
   git push origin feature/mentoria-page
   ```
   - Criar PR no GitHub
   - Preencher template (descrição, screenshots, etc)
   - Vercel cria preview deploy automaticamente

4. **Code Review**
   - Revisão por pelo menos 1 pessoa
   - CI passa (lint, tests, build)
   - Preview deploy testado

5. **Merge para Main**
   - Squash and merge (recomendado)
   - Delete branch após merge
   - Deploy automático para produção na Vercel

6. **Hotfix (quando necessário)**
   - Branch direto de main
   - Fix rápido
   - PR + merge rápido
   - Deploy imediato

**Proteções da Branch Main:**
- Require pull request antes de merge
- Require review de pelo menos 1 pessoa
- Require status checks (CI) passarem
- Não permitir push direto

---

### Commits Convencionais

**Formato:**
```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
```
feat:     Nova feature
fix:      Bug fix
docs:     Documentação
style:    Formatação
refactor: Refatoração
test:     Testes
chore:    Manutenção
```

**Exemplos:**
```
feat(mentoria): add mentoria landing page
fix(form): resolve validation on contact form
docs(readme): update installation instructions
```

---

### CI/CD com GitHub Actions + Vercel

**Integração Vercel:**
- Deploy automático de production (branch main)
- Preview deploys para cada PR
- Build e deploy gerenciados pela Vercel
- Zero configuração para Next.js

**GitHub Actions (CI):**

Arquivo `.github/workflows/ci.yml` precisa ser criado

**Jobs do CI:**

**Job 1 - Quality Check:**
```yaml
Passos:
1. Checkout código
2. Setup Bun
3. Install dependências
4. Biome check (lint + format)
5. TypeScript type check
```

**Job 2 - Tests:**
```yaml
Passos:
1. Checkout código
2. Setup Bun
3. Install dependências
4. Rodar testes unitários
5. Rodar testes de integração
6. Upload coverage (opcional)
```

**Job 3 - Build Test:**
```yaml
Passos:
1. Checkout código
2. Setup Bun
3. Install dependências
4. Build todos os workspaces
5. Verificar se build foi sucesso
```

**Quando Roda:**
- Em todo PR
- Em push para main
- Opcionalmente em schedule (diário)

**Vercel Deploy:**

**Production Deploy (main):**
- Trigger automático em push/merge para main
- Build na infraestrutura Vercel
- Deploy para domínio de produção
- Rollback disponível no dashboard

**Preview Deploy (PRs):**
- Criado automaticamente para cada PR
- URL única para testar
- Atualizado a cada push no PR
- Comentário automático no PR com URL

**Variáveis de Ambiente:**
- Configuradas no dashboard da Vercel
- Diferentes para production e preview
- Encriptadas e seguras
- Accessíveis via `process.env`

**Configuração Necessária:**

Arquivo `vercel.json` (opcional, para customizações):
```json
{
  "buildCommand": "turbo build",
  "installCommand": "bun install",
  "framework": "nextjs"
}
```

---

### Monorepo na Vercel

**Configuração de Deploy:**

Cada app no monorepo pode ter seu próprio projeto na Vercel:

**apps/web (site principal):**
- Projeto: "multi-br-web"
- Domínio: agenciamultibr.com
- Build command: `cd ../.. && turbo build --filter=web`
- Output directory: `apps/web/.next`

**apps/admin (futuro):**
- Projeto: "multi-br-admin"
- Domínio: admin.agenciamultibr.com
- Build command: `cd ../.. && turbo build --filter=admin`
- Output directory: `apps/admin/.next`

**Vantagens:**
- Deploy independente de cada app
- Preview URLs separados
- Rollback independente
- Configurações específicas por app

---

## 🔌 Preparação para Backend

### API Layer Abstrata

**Princípios:**
- Camada de abstração entre frontend e backend
- Fácil trocar implementação
- Type-safe com TypeScript
- Error handling consistente

**Estrutura Futura:**
```
lib/
  api/
    client.ts           # HTTP client
    services/
      contact.ts        # Contact service
      blog.ts           # Blog service
      mentoria.ts       # Mentoria service
    types/
      responses.ts      # API response types
```

---

### Estado Global (quando necessário)

**Opções Consideradas:**
- React Context (para estado simples)
- Zustand (recomendado - simples e performático)
- React Query / TanStack Query (para data fetching)

**Princípios:**
- Evitar state global desnecessário
- Server state vs Client state separados
- Cache strategies

---

### Autenticação (futuro - Admin)

**Preparação:**
- JWT tokens
- Refresh tokens
- Protected routes
- Role-based access

---

## 📝 Convenções de Código

### Naming Conventions

**Arquivos:**
- Componentes: `PascalCase.tsx`
- Utilities: `camelCase.ts`
- Hooks: `useCamelCase.ts`
- Types: `PascalCase.types.ts`
- Tests: `*.test.tsx`

**Variáveis e Funções:**
- Variables: `camelCase`
- Constants: `UPPER_SNAKE_CASE`
- Components: `PascalCase`
- Types/Interfaces: `PascalCase`

---

### Estrutura de Componentes

```typescript
// Props type
interface ButtonProps {
  // ...
}

// Component
export function Button({ ...props }: ButtonProps) {
  // Hooks no topo
  // Event handlers
  // Render logic
  return (...)
}
```

---

### Imports

**Ordem:**
1. React imports
2. Third-party libraries
3. Internal components
4. Internal utilities
5. Types
6. Styles

**Aliases:**
```typescript
import { Button } from '@/components/ui/button'
import { formatDate } from '@/lib/utils'
import type { Service } from '@/types/service'
```

---

## 🚀 Performance Best Practices

### Next.js Específico

- Usar Server Components quando possível
- Client Components apenas quando necessário interatividade
- `loading.tsx` e `error.tsx` em cada rota
- Metadata export para SEO
- Dynamic imports para code splitting

---

### React Best Practices

- Evitar re-renders desnecessários
- Memoization quando apropriado (useMemo, useCallback)
- Lazy loading de componentes pesados
- Virtualization para listas longas

---

### Assets

- Sempre usar `next/image`
- Formatos modernos (WebP, AVIF)
- Lazy loading de imagens
- Placeholder blur
- Otimização de fontes

---

## 📚 Documentação

### O que Documentar

**README.md:**
- Setup do projeto
- Comandos disponíveis
- Estrutura do projeto
- Como contribuir

**ARCHITECTURE.md:**
- Este documento

**CONTRIBUTING.md:**
- Guidelines de contribuição
- Code review process
- Git workflow

**Componentes:**
- Props documentation
- Usage examples
- Storybook (futuro opcional)

---

## ✅ Checklist de Setup Inicial

### Configuração Base
- [ ] Inicializar monorepo
- [ ] Configurar Bun como package manager
- [ ] Configurar Bun Workspaces no package.json raiz
- [ ] Setup Turborepo
- [ ] Configurar TypeScript
- [ ] Configurar Next.js 15

### Biome (PRIORITÁRIO) ⚠️
- [ ] Instalar Biome
- [ ] Criar biome.json
- [ ] Configurar regras de linting
- [ ] Configurar regras de formatação
- [ ] Integrar com VSCode
- [ ] Testar comando biome check

### Styling
- [ ] Setup Tailwind CSS
- [ ] Configurar cores da marca
- [ ] Configurar fontes customizadas
- [ ] Instalar shadcn/ui
- [ ] Configurar componentes base

### Testing
- [ ] Setup Vitest
- [ ] Configurar Testing Library
- [ ] Setup Playwright
- [ ] Criar primeiros testes

### Git & CI/CD
- [ ] Configurar repositório GitHub
- [ ] Configurar branch protection (main)
- [ ] Criar workflow GitHub Actions (.github/workflows/ci.yml)
- [ ] Configurar jobs de CI (lint, test, build)

### Vercel
- [ ] Criar conta/projeto na Vercel
- [ ] Conectar repositório GitHub
- [ ] Configurar build settings para monorepo
- [ ] Configurar variáveis de ambiente
- [ ] Testar preview deploy em PR
- [ ] Configurar domínio customizado (quando disponível)

### Observabilidade
- [ ] Sistema de logging
- [ ] Error boundaries
- [ ] Performance monitoring base
- [ ] Habilitar Vercel Analytics (opcional)

### Documentação
- [ ] README completo
- [ ] Documentar comandos
- [ ] Guidelines de contribuição
- [ ] Documentar workflow de deploy

---

## 🎯 Próximos Passos

### Curto Prazo (Semana 1-2)
1. Setup inicial do monorepo
2. Configurar Biome
3. Configurar Tailwind com cores da marca
4. Criar componentes base do design system
5. Setup de testes

### Médio Prazo (Semana 3-4)
1. Implementar páginas principais
2. Integrar shadcn/ui components
3. Sistema de eventos básico
4. Logging e error tracking
5. CI/CD pipeline

### Longo Prazo (Mês 2+)
1. Observabilidade completa
2. Testes E2E de todos os fluxos
3. Performance optimization
4. Preparação para backend
5. Analytics integrados

---

## 📞 Notas Finais

### Stack Escolhida - Justificativa

**Next.js 15:** Framework maduro, excelente DX, SEO built-in, perfeito para sites institucionais e blogs.

**TypeScript:** Type safety reduz bugs, melhora DX com autocomplete, facilita refactoring.

**Tailwind CSS:** Produtividade alta, bundle pequeno, facilmente customizável para o design system da Multi.

**shadcn/ui:** Componentes de alta qualidade, acessíveis, customizáveis, sem overhead de biblioteca.

**Bun:** Performance excepcional, DX moderno, tudo-em-um (runtime, package manager, bundler, test runner).

**Biome:** Ferramenta única para linting e formatting, extremamente rápida, configuração simples.

**Monorepo + Workspaces:** Compartilhamento de código, builds otimizados, gerenciamento unificado de dependências, preparado para crescimento (admin, blog separado, etc).

**Vercel:** Plataforma nativa para Next.js (criadores do framework), deploy automático, preview deployments, edge network global, zero config.

**GitHub Flow:** Simplicidade, adequado para deploy contínuo, integração natural com Vercel, sem complexidade desnecessária de múltiplas branches de longa duração.

---

### Princípios do Projeto

1. **Developer Experience em Primeiro Lugar**
   - Ferramentas modernas e rápidas
   - Feedback rápido (hot reload, testes rápidos)
   - Type safety
   - Linting e formatting automáticos

2. **Performance**
   - Core Web Vitals otimizados
   - SSR/SSG para SEO
   - Code splitting automático
   - Assets otimizados

3. **Manutenibilidade**
   - Código limpo
   - Testes abrangentes
   - Documentação clara
   - Padrões consistentes

4. **Escalabilidade**
   - Arquitetura preparada para crescimento
   - Separação de responsabilidades
   - Fácil adicionar novos apps no monorepo

5. **Observabilidade**
   - Logs estruturados
   - Error tracking
   - Performance monitoring
   - Analytics preparados

---

**Versão:** 1.0  
**Data:** Fevereiro 2026  
**Última Atualização:** Definição inicial da stack e arquitetura

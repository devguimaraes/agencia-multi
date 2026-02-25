# Design System — Agência Multi BR

> **Versão:** 1.0 · **Data:** Fevereiro 2026
>
> Fonte única de verdade para tokens, componentes e padrões visuais do projeto.
> Baseado nos documentos `arquitetura.md` e `briefing_multi_br v0.1.md`.

---

## 📋 Índice

1. [Princípios de Design](#princípios-de-design)
2. [Design Tokens](#design-tokens)
3. [Cores](#cores)
4. [Tipografia](#tipografia)
5. [Espaçamento](#espaçamento)
6. [Elevação e Sombras](#elevação-e-sombras)
7. [Bordas e Raios](#bordas-e-raios)
8. [Breakpoints e Grid](#breakpoints-e-grid)
9. [Gradientes](#gradientes)
10. [Animações e Transições](#animações-e-transições)
11. [Componentes](#componentes)
12. [Ícones e Assets](#ícones-e-assets)
13. [Acessibilidade](#acessibilidade)
14. [Implementação Tailwind](#implementação-tailwind)

---

## 🎯 Princípios de Design

| # | Princípio | Descrição |
|---|-----------|-----------|
| 1 | **Energia vibrante** | Paleta multicolorida e contrastes fortes que transmitem dinamismo |
| 2 | **Brasilidade autêntica** | Estética brasileira natural, sem clichês, com referências ao RJ |
| 3 | **Sem enrolação** | Interfaces diretas, hierarquia clara, componentes objetivos |
| 4 | **Mobile-first** | Layout, touch targets e tipografia pensados primeiro para mobile |
| 5 | **Conversão** | Cada seção tem um propósito claro no funil de conversão |
| 6 | **Acessibilidade** | WCAG 2.0 AA — contraste, navegação por teclado, ARIA |

---

## 🎨 Design Tokens

Tokens são as unidades atômicas do sistema visual. Devem ser configurados como variáveis CSS (`:root`) e mapeados no `tailwind.config.ts`.

### Nomenclatura

```
--multi-{categoria}-{variante}

Exemplos:
--multi-color-roxo
--multi-font-display
--multi-spacing-lg
--multi-shadow-card
```

---

## 🟣 Cores

### Paleta Primária

| Token | Nome | HEX | RGB | Uso |
|-------|------|-----|-----|-----|
| `--multi-color-roxo` | Roxo Multi | `#5D018A` | `rgb(93, 1, 138)` | Cor principal, backgrounds, header, ênfase |
| `--multi-color-amarelo` | Amarelo Multi | `#FAC32A` | `rgb(250, 195, 42)` | CTAs primários, logotipo, destaques |
| `--multi-color-rosa` | Rosa Multi | `#E60057` | `rgb(230, 0, 87)` | Logo alternativo, acentos, seções energéticas |

### Paleta Secundária

| Token | Nome | HEX | RGB | Uso |
|-------|------|-----|-----|-----|
| `--multi-color-verde` | Verde | `#138910` | `rgb(19, 137, 16)` | Sucesso, validação, aprovação |
| `--multi-color-azul` | Azul | `#014FCD` | `rgb(1, 79, 205)` | Links, informação, confiabilidade |
| `--multi-color-vermelho` | Vermelho | `#D62D0E` | `rgb(214, 45, 14)` | Erros, alertas, urgência |
| `--multi-color-laranja` | Laranja | `#EC8B20` | `rgb(236, 139, 32)` | Criatividade, CTAs secundários |

### Neutros

| Token | HEX | Uso |
|-------|-----|-----|
| `--multi-color-white` | `#FFFFFF` | Fundos, texto sobre cores escuras |
| `--multi-color-gray-50` | `#F5F5F5` | Fundos alternados, cards suaves |
| `--multi-color-gray-200` | `#CCCCCC` | Bordas de inputs, divisores |
| `--multi-color-gray-600` | `#666666` | Texto secundário, small text |
| `--multi-color-gray-800` | `#333333` | Texto corpo, labels |
| `--multi-color-black` | `#111111` | Texto de máximo contraste |

### Externos

| Token | HEX | Uso |
|-------|-----|-----|
| `--multi-color-whatsapp` | `#25D366` | Botão floating WhatsApp |

### Combinações Recomendadas

| Nome | Fundo | Texto/Elemento | Contexto |
|------|-------|-----------------|----------|
| **Primária** | Roxo `#5D018A` | Amarelo `#FAC32A` | Logo principal, hero |
| **Energética** | Rosa `#E60057` | Amarelo `#FAC32A` | Destaque mentoria, promoções |
| **Profissional** | Roxo `#5D018A` | Azul `#014FCD` | Seções informativas |
| **Criativa** | Laranja `#EC8B20` | Rosa `#E60057` | Seções de portfólio |
| **Clean** | Branco `#FFFFFF` | Roxo `#5D018A` | Corpo do site, formulários |

### Regras de Uso

- **Fundo primário:** Roxo `#5D018A` sólido
- **Fundo alternativo:** Rosa `#E60057` sólido
- **Fundo clean:** Branco `#FFFFFF` ou Cinza `#F5F5F5`
- **Fundo gradiente:** Roxo → Rosa (aplicações digitais)
- **Links:** Azul `#014FCD`, underline on hover
- **Contraste mínimo:** 4.5:1 para texto normal, 3:1 para texto grande (WCAG AA)

---

## 🔤 Tipografia

### Famílias

| Token | Fonte | Fallback | Uso |
|-------|-------|----------|-----|
| `--multi-font-display` | **Balgin Black** | `Arial Black, sans-serif` | Títulos, headlines, impacto |
| `--multi-font-brand` | **Generic** | `sans-serif` | Logotipo, assinatura de marca |
| `--multi-font-body` | **Poppins** | `system-ui, sans-serif` | Corpo, UI, botões, menus |

### Pesos de Poppins

| Peso | Valor | Uso |
|------|-------|-----|
| Regular | `400` | Corpo de texto, parágrafos |
| Medium | `500` | Ênfase sutil, menus |
| SemiBold | `600` | Subtítulos (H3), labels, destaques |
| Bold | `700` | Botões, CTAs, ênfase forte |

### Escala Tipográfica

| Nível | Fonte | Tamanho (desktop) | Tamanho (mobile) | Peso | Cor padrão | Line-height |
|-------|-------|--------------------|-------------------|------|------------|-------------|
| **H1** | Balgin Black | `48–72px` | `32–40px` | 900 | `#5D018A` | `1.1` |
| **H2** | Balgin Black | `36–48px` | `28–36px` | 900 | `#5D018A` / `#E60057` | `1.2` |
| **H3** | Poppins | `24–32px` | `20–24px` | 600 | `#5D018A` | `1.3` |
| **H4** | Poppins | `20–24px` | `18–20px` | 600 | `#333333` | `1.4` |
| **Body** | Poppins | `16–18px` | `16px` | 400 | `#333333` | `1.6` |
| **Small** | Poppins | `14px` | `14px` | 400 | `#666666` | `1.5` |
| **Caption** | Poppins | `12px` | `12px` | 400 | `#666666` | `1.4` |

### Regras de Tipografia

- Máximo **1 `<h1>` por página**
- Títulos de seção usam `H2` em Balgin Black
- Subtítulos de componentes usam `H3` em Poppins SemiBold
- Corpo nunca menor que `16px` em mobile
- Line-height de corpo: `1.5–1.6` para legibilidade
- Botões: Poppins Bold, `16–18px`, `uppercase` opcional

---

## 📐 Espaçamento

Sistema baseado em múltiplos de `4px` para consistência.

| Token | Valor | Uso |
|-------|-------|-----|
| `--multi-space-1` | `4px` | Micro gaps, ícone-texto |
| `--multi-space-2` | `8px` | Gaps internos de componentes |
| `--multi-space-3` | `12px` | Padding de inputs |
| `--multi-space-4` | `16px` | Gaps entre elementos, padding padrão |
| `--multi-space-6` | `24px` | Padding de cards, gap entre itens de lista |
| `--multi-space-8` | `32px` | Padding de seções menores, gap H3→conteúdo |
| `--multi-space-10` | `40px` | Gap entre cards (desktop) |
| `--multi-space-12` | `48px` | Padding generoso de CTAs |
| `--multi-space-16` | `64px` | Padding vertical de seções (mobile) |
| `--multi-space-20` | `80px` | Padding vertical de seções (desktop) |
| `--multi-space-24` | `96px` | Padding vertical generoso |
| `--multi-space-30` | `120px` | Padding de seções impactantes (hero, conversão) |

### Padrões de Espaçamento

| Contexto | Desktop | Mobile |
|----------|---------|--------|
| **Padding vertical de seção** | `80–120px` | `60–80px` |
| **Gap entre elementos dentro de seção** | `24–32px` | `16–24px` |
| **Gap entre cards** | `24–40px` | `16–24px` |
| **Título → Subtítulo** | `16px` | `12px` |
| **Subtítulo → Conteúdo/CTAs** | `32px` | `24px` |
| **Padding de cards** | `24–32px` | `16–24px` |

---

## 🌑 Elevação e Sombras

| Token | Valor CSS | Uso |
|-------|-----------|-----|
| `--multi-shadow-sm` | `0 1px 3px rgba(0,0,0,0.08)` | Inputs, badges |
| `--multi-shadow-card` | `0 2px 8px rgba(0,0,0,0.1)` | Cards de serviço baseline |
| `--multi-shadow-card-hover` | `0 8px 24px rgba(0,0,0,0.15)` | Cards em hover (elevados) |
| `--multi-shadow-modal` | `0 16px 48px rgba(0,0,0,0.2)` | Modais, dialogs |
| `--multi-shadow-whatsapp` | `0 4px 16px rgba(37,211,102,0.4)` | Botão flutuante WhatsApp |

### Regras de Elevação

- Cards possuem sombra baseline; **hover aumenta** a sombra
- Modais usam overlay `rgba(93, 1, 138, 0.8)` (roxo com opacidade)
- Toasts usam `--multi-shadow-card`
- Sticky nav ganha sombra somente ao scroll

---

## 🔲 Bordas e Raios

| Token | Valor | Uso |
|-------|-------|-----|
| `--multi-radius-sm` | `4px` | Inputs, tags |
| `--multi-radius-md` | `8px` | Botões, cards padrão |
| `--multi-radius-lg` | `12px` | Modais, dialogs, cards destacados |
| `--multi-radius-full` | `9999px` | Avatares, botão WhatsApp flutuante |

### Bordas Padrão

- **Input default:** `1px solid #CCCCCC`
- **Input focus:** `2px solid #5D018A` + sombra sutil roxo
- **Card default:** `1px solid #CCCCCC` ou sem borda
- **Card destaque:** `2px solid #FAC32A`
- **Validação sucesso:** `border-color: #138910`
- **Validação erro:** `border-color: #D62D0E`

---

## 📱 Breakpoints e Grid

### Breakpoints

| Token | Valor | Nome |
|-------|-------|------|
| `--multi-bp-sm` | `640px` | Mobile landscape |
| `--multi-bp-md` | `768px` | Tablet |
| `--multi-bp-lg` | `1024px` | Desktop |
| `--multi-bp-xl` | `1280px` | Desktop large |
| `--multi-bp-2xl` | `1536px` | Wide screen |

### Grid

- **Mobile:** Stack vertical, 1 coluna
- **Tablet:** 2 colunas para cards, grids parciais
- **Desktop:** 3 colunas para cards de serviço, multi-CTA

### Container

| Tela | `max-width` |
|------|-------------|
| Conteúdo padrão | `1280px` |
| Formulários | `600px` |
| Confirmações/dialogs | `400px` |
| Full-width sections | `100%` (conteúdo em container interno) |

---

## 🌈 Gradientes

| Nome | Valor CSS | Uso |
|------|-----------|-----|
| **Principal** | `linear-gradient(135deg, #5D018A 0%, #E60057 100%)` | Seções de conversão, hero alt |
| **Energético** | `linear-gradient(135deg, #E60057 0%, #EC8B20 100%)` | Destaque mentoria, promos |
| **Profissional** | `linear-gradient(135deg, #5D018A 0%, #014FCD 100%)` | Seções informativas |
| **Overlay** | `linear-gradient(180deg, transparent 0%, rgba(93,1,138,0.6) 100%)` | Sobre imagens de fundo |

---

## ✨ Animações e Transições

### Transições

| Token | Valor | Uso |
|-------|-------|-----|
| `--multi-transition-fast` | `150ms ease` | Focus states, toggles |
| `--multi-transition-base` | `200ms ease` | Botões, hover gerais |
| `--multi-transition-smooth` | `300ms ease` | Cards, elevações, cor |

### Efeitos Padrão

| Elemento | Hover | Active |
|----------|-------|--------|
| **Botão** | `scale(1.02)` + sombra aumenta | `scale(0.98)` |
| **Card** | `scale(1.02)` + elevação | — |
| **Link** | Underline + transição de cor | — |

### Animações de Scroll

| Tipo | Descrição | Duração |
|------|-----------|---------|
| **Fade in** | Elementos surgem com opacidade `0→1` ao entrar no viewport | `400–600ms` |
| **Slide up** | Deslizam de baixo (`translateY(20px) → 0`) | `400–600ms` |
| **Stagger** | Múltiplos elementos com `animation-delay` incremental | `100ms` entre itens |

### Loading States

- **Spinner:** Circular, cor da marca
- **Skeleton:** Placeholders animados com shimmer
- **Progress bar:** Quando tempo previsível

---

## 🧩 Componentes

### Botões

#### Primário (Amarelo)

```
Background:    #FAC32A
Texto:         #5D018A (roxo)
Font:          Poppins Bold, 16–18px
Padding:       16px 32px (vertical, horizontal)
Border-radius: 8px
Min-height:    48px (touch-friendly)

Hover:         background → #E60057, texto → branco
Active:        scale(0.98)
Disabled:      opacity 50%, cursor not-allowed
Loading:       spinner + "Aguarde..."
```

#### Secundário (Outline)

```
Background:    Transparente
Border:        2px solid #5D018A
Texto:         #5D018A
Font:          Poppins Bold, 16–18px
Padding:       16px 32px
Border-radius: 8px
Min-height:    48px

Hover:         background → #5D018A, texto → branco
```

#### Terciário (Ghost/Link)

```
Background:    Transparente
Border:        Nenhuma
Texto:         #5D018A ou #014FCD
Text-decoration: underline on hover
```

#### WhatsApp Flutuante

```
Position:      fixed, bottom: 20px, right: 20px
Size:          56px × 56px (círculo)
Background:    #25D366
Icon:          Branco, centralizado
Shadow:        --multi-shadow-whatsapp
Z-index:       999
Animation:     Pulse sutil (opcional)
```

---

### Cards

#### Card de Serviço

```
Background:    Branco
Border:        1px solid #CCCCCC (ou sem borda)
Padding:       24px
Shadow:        --multi-shadow-card
Border-radius: --multi-radius-md (8px)

Hover:         shadow → --multi-shadow-card-hover, borda colorida opcional
Layout:        Ícone + Título + Descrição(2-3 linhas) + Link "Saiba mais"
Grid:          2 colunas mobile, 3 colunas desktop
```

#### Card de Mentoria (Destaque)

```
Background:    Gradiente roxo→rosa OU rosa sólido
Texto:         Branco
Border:        2px amarelo (opcional)
Padding:       32px+
Shadow:        --multi-shadow-card-hover
Border-radius: --multi-radius-lg (12px)

Hover:         elevação aumenta, scale(1.02)
Layout:        2 colunas desktop, stack mobile
```

#### Card de Blog

```
Background:    Branco
Elementos:     Imagem featured + Categoria tag + Título + Excerpt + Data + Tempo de leitura
Shadow:        --multi-shadow-card
Border-radius: --multi-radius-md
```

---

### Formulários

#### Campos de Input

```
Border:        1px solid #CCCCCC
Border-radius: 4px
Padding:       12px 16px
Font:          Poppins Regular, 16px
Min-height:    48px (touch)

Focus:         border → 2px solid #5D018A, shadow sutil roxo
```

#### Labels

```
Font:          Poppins SemiBold, 14px
Cor:           #333333
Margin-bottom: 8px
```

#### Validação

| Estado | Border color | Ícone | Mensagem |
|--------|-------------|-------|----------|
| Sucesso | `#138910` | ✓ checkmark | Verde, 14px |
| Erro | `#D62D0E` | ✕ error | Vermelho, 14px |

#### Submit

```
Estilo:        Botão primário (amarelo)
Mobile:        Full-width
Loading:       Spinner + "Enviando..."
Success:       Transição para verde + "Enviado!"
```

---

### Navegação

#### Header

```
Background:    #5D018A
Opacidade:     Ganha backdrop-blur ao scroll
Shadow:        Aparece ao scroll
CTA always:    Visível no header
Logo:          Amarelo (#FAC32A) sobre roxo
```

#### Menu Mobile

```
Componente:    Sheet (shadcn/ui)
Overlay:       Roxo com opacidade
Slide:         Da direita
```

---

### Toast / Notificações

```
Position:      Fixed, top-right
Width:         320px
Border-radius: 8px
Padding:       16px
Shadow:        --multi-shadow-card
Animation:     Slide in da direita, fade out
```

| Tipo | Background | Ícone |
|------|-----------|-------|
| Sucesso | `#138910` | ✓ |
| Erro | `#D62D0E` | ✕ |
| Info | `#014FCD` | ℹ |
| Warning | `#EC8B20` | ⚠ |

---

### Modais

```
Overlay:       rgba(93, 1, 138, 0.8)
Backdrop-blur: 4px (opcional)
Container:     Branco, max-width 600px, border-radius 12px, padding 32px
Close button:  32px × 32px, top-right, hover → vermelho (#D62D0E)
```

---

### Seção de Conversão

```
Layout:        Full-width ou container
Background:    Gradiente roxo→rosa OU roxo sólido
Padding-y:     80–120px (desktop), 60–80px (mobile)
Texto:         Branco
Título:        Balgin Black, 48–64px
Subtítulo:     Poppins Regular, 18–20px
CTAs:          1–2 botões (amarelo + outline branco)
```

---

### Trust Badges

```
Layout:        Inline, próximo aos CTAs
Ícone:         Emoji ou SVG + texto
Font:          Poppins Regular, 14px
Exemplos:      ⚡ Resposta em até 24h · ✅ Sem compromisso · 💜 Atendimento personalizado
```

---

## 🖼️ Ícones e Assets

### Logo

| Variante | Fundo | Cor logo | Uso |
|----------|-------|----------|-----|
| Principal | Roxo `#5D018A` | Amarelo `#FAC32A` | Uso padrão |
| Alternativo | Rosa `#E60057` | Branco `#FFFFFF` | Variações |
| Clean | Branco `#FFFFFF` | Roxo `#5D018A` | Fundos claros |
| Ícone isolado | Qualquer | Pêssego/coral | Favicon, redes |

### Regras do Logo

- **Área de proteção:** Altura da letra "i" ao redor
- **Tamanho mínimo digital:** `120px` de largura
- ❌ Não alterar cores, distorcer, aplicar efeitos ou rotacionar

### Formatos Necessários

- SVG (principal, vetorial)
- PNG (redes sociais, transparência)
- Favicon (16×16, 32×32, apple-touch-icon)

---

## ♿ Acessibilidade (WCAG 2.0 AA)

### Contraste

| Par de cores | Ratio | Status |
|-------------|-------|--------|
| Branco sobre Roxo `#5D018A` | ~12:1 | ✅ AAA |
| Amarelo `#FAC32A` sobre Roxo `#5D018A` | ~6.5:1 | ✅ AA |
| Branco sobre Rosa `#E60057` | ~5.5:1 | ✅ AA |
| `#333333` sobre Branco | ~12.6:1 | ✅ AAA |

### Checklist

- [x] Contraste ≥ 4.5:1 para texto normal
- [x] Contraste ≥ 3:1 para texto grande (≥18px bold)
- [ ] Navegação completa por teclado
- [ ] Focus indicators visíveis (outline roxo)
- [ ] ARIA labels em elementos interativos
- [ ] `alt` em todas as imagens
- [ ] Semantic HTML (`<nav>`, `<main>`, `<article>`, `<section>`)
- [ ] Touch targets mínimos de `44×44px`
- [ ] Skip-to-content link
- [ ] Reduced-motion media query respeitada

---

## ⚙️ Implementação Tailwind

### tailwind.config.ts (tokens mapeados)

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    // packages do monorepo
    '../../packages/ui/src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        multi: {
          roxo: '#5D018A',
          amarelo: '#FAC32A',
          rosa: '#E60057',
          verde: '#138910',
          azul: '#014FCD',
          vermelho: '#D62D0E',
          laranja: '#EC8B20',
          whatsapp: '#25D366',
        },
      },
      fontFamily: {
        display: ['Balgin Black', 'Arial Black', 'sans-serif'],
        body: ['Poppins', 'system-ui', 'sans-serif'],
        brand: ['Generic', 'sans-serif'],
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
      },
      boxShadow: {
        card: '0 2px 8px rgba(0,0,0,0.1)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.15)',
        modal: '0 16px 48px rgba(0,0,0,0.2)',
        whatsapp: '0 4px 16px rgba(37,211,102,0.4)',
      },
      transitionDuration: {
        fast: '150ms',
        base: '200ms',
        smooth: '300ms',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

export default config
```

### CSS Variables (globals.css)

```css
:root {
  /* Cores */
  --multi-color-roxo: #5D018A;
  --multi-color-amarelo: #FAC32A;
  --multi-color-rosa: #E60057;
  --multi-color-verde: #138910;
  --multi-color-azul: #014FCD;
  --multi-color-vermelho: #D62D0E;
  --multi-color-laranja: #EC8B20;

  /* Tipografia */
  --multi-font-display: 'Balgin Black', 'Arial Black', sans-serif;
  --multi-font-body: 'Poppins', system-ui, sans-serif;
  --multi-font-brand: 'Generic', sans-serif;

  /* Gradientes */
  --multi-gradient-principal: linear-gradient(135deg, #5D018A 0%, #E60057 100%);
  --multi-gradient-energetico: linear-gradient(135deg, #E60057 0%, #EC8B20 100%);
  --multi-gradient-profissional: linear-gradient(135deg, #5D018A 0%, #014FCD 100%);
}
```

---

## 📝 Referência Rápida de Componentes shadcn/ui

Componentes a instalar e customizar com os tokens Multi BR:

| Componente | Uso |
|------------|-----|
| `Button` | CTAs primários, secundários, terciários |
| `Card` | Serviços, portfólio, blog, mentoria |
| `Form` + `Input` + `Textarea` | Formulários de contato, newsletter, mentoria |
| `Dialog` / `Modal` | Confirmações, detalhes de serviço |
| `Sheet` | Menu mobile (slide) |
| `Tabs` | Filtros de portfólio, serviços agrupados |
| `Toast` | Feedback de formulários, notificações |
| `Accordion` | FAQ nas páginas de serviço e mentoria |
| `Dropdown` | Menu de serviços no header |

Todos os componentes devem ser customizados para usar as cores, tipografia e espaçamentos definidos neste design system.

---

> **Manutenção:** Este documento deve ser atualizado sempre que tokens, componentes ou padrões visuais forem adicionados ou modificados. Alterações devem ser refletidas simultaneamente no `tailwind.config.ts` e no `globals.css`.

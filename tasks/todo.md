# Plano de Revisão de Copy - Multi BR

Bem-vindo à todo list do refatoramento da copy. O foco é aplicar os 3 pilares da Multi BR: **confiança, resultado e pertencimento carioca**.

## Fase 1: Fundações e Setup

- [x] Criar novos componentes obrigatórios: `SomosDoRio.tsx` e `ResultadoRapido.tsx` em `apps/web/components/marketing/`.
- [x] Criar o componente `FaqIntegrado.tsx` em `apps/web/components/marketing/` para uso nas páginas de Serviço.

## Fase 2: Layout Principal e Home

- [x] Atualizar H1 da Home (`app/page.tsx` ou `HeroSection.tsx`) para incluir "Agência de Marketing Digital".
- [x] Revisar descrição e frases iniciais da Home com as novas palavras-chave de resultado ("o que você conquista").
- [x] Inserir bloco "Resultado Rápido" na Home (logo abaixo do Hero).
- [x] Inserir bloco "Somos do Rio" estrategicamente na Home.
- [x] Revisar copy do Componente `Footer.tsx` e `Header.tsx`.

## Fase 3: Páginas de Serviços (O Core do Negócio)

- [x] Revisar copy de `app/servicos/page.tsx` para focar em resultado e não na descrição da feature.
- [x] Revisar copy de `app/servicos/[slug]/page.tsx` (Service Detail).
- [x] Incluir termo "Agência de Marketing Digital" em pelo menos 2 páginas de serviço nos H1s.
- [x] Integrar o `FaqIntegrado.tsx` ao final das páginas de serviço com perguntas focadas nas objeções do dono do negócio.
- [x] Usar âncoras locais contextuais ("mercado carioca", "RJ") (máx 1 por bloco) sem forçar SEO.

## Fase 4: Portfolio e Contato

- [x] Melhorar CTA de contato em `app/contato/page.tsx` para ser direcionado ao funil (ex: "Fale com a gente agora").
- [x] Ajustar textos de prova social no `portfolio/page.tsx` e `PortfolioHighlights.tsx`.

## Fase 5: Atração (Institucional, Blog, Mentoria, Ebook)

- [x] Revisar `app/sobre/page.tsx`, focando na credibilidade e parceria local.
- [x] Ajustar copy em `app/mentoria/page.tsx`.
- [x] Ajustar copy em `app/ebook/page.tsx`.
- [x] Revisar estrutura de blog (`blog/page.tsx` e `blog/[slug]/page.tsx`) com CTA's de topo/meio de funil ("conheça como trabalhamos").

## Checklist Final de Segurança Qualitativa

- [x] Executar `bun run build` para testar se há páginas quebrandos.
- [x] Executar `bun run lint` / test suite.
- [x] Fazer uma leitura final visual.e **nenhum CTA está genérico ("clique aqui")**.
- [ ] Verifiquei que os CTAs usam links em texto focados na intenção ("conheça nossa agência de marketing digital").
- [ ] Gerei build (`bun run build`) para verificar se nenhuma página quebrou.
- [ ] Os testes E2E do cypress/playwright ou vitest estão passando sem erros.

---
**Status Final:** Tudo a verificar.

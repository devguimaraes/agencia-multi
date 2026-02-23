# Lições Aprendidas

## Animações e Tailwind v4

- **tailwindcss-animate**: Evitar o uso do plugin legiado com Tailwind v4. Preferir `tw-animate-css` ou configurar keyframes nativos no CSS, pois o v4 mudou a forma como as diretivas de animação são processadas.
- **Dinamismo**: Para animações complexas baseadas em estado (como barras de progresso de stories), usar keyframes CSS nativos com manipulação de `style`/`animation` via React é mais performático e menos propenso a bugs de linter do que tentar abstrair via classes utilitárias dinâmicas.

## Padrões de React

- **Auto-advance Timers**: Ao implementar carrosséis com auto-advance e override manual, usar `setTimeout` em vez de `setInterval` dentro do `useEffect`. Isso garante que o timer seja resetado de forma limpa a cada mudança de estado (manual ou automática) e satisfaz as regras de dependência do linter sem hacks.

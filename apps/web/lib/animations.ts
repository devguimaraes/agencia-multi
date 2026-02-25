/**
 * Presets de animação reutilizáveis para GSAP.
 *
 * Importar e compor:
 * ```ts
 * gsap.from(el, ANIM.fadeUp);
 * gsap.from(el, { ...ANIM.fadeUp, scrollTrigger: { ... } });
 * ```
 */

/** Curva de ease padrão do projeto (expo out) */
export const EASE_OUT = "power3.out";
export const EASE_IN_OUT = "power2.inOut";

/** Durações padrão */
export const DURATION = {
	fast: 0.4,
	base: 0.7,
	slow: 1.0,
	dramatic: 1.4,
} as const;

/** Presets de animação (propriedades "from") */
export const ANIM = {
	/** Fade + slide up — reveal padrão */
	fadeUp: {
		y: 40,
		opacity: 0,
		duration: DURATION.base,
		ease: EASE_OUT,
	},

	/** Fade + slide up maior — para headlines */
	fadeUpDramatic: {
		y: 80,
		opacity: 0,
		duration: DURATION.dramatic,
		ease: EASE_OUT,
	},

	/** Fade in puro */
	fadeIn: {
		opacity: 0,
		duration: DURATION.base,
		ease: EASE_OUT,
	},

	/** Scale in — para elementos decorativos */
	scaleIn: {
		scale: 0.8,
		opacity: 0,
		duration: DURATION.slow,
		ease: EASE_OUT,
	},

	/** Slide da esquerda */
	slideLeft: {
		x: -60,
		opacity: 0,
		duration: DURATION.base,
		ease: EASE_OUT,
	},

	/** Slide da direita */
	slideRight: {
		x: 60,
		opacity: 0,
		duration: DURATION.base,
		ease: EASE_OUT,
	},

	/** Clip-path wipe (curtain reveal vertical) */
	clipRevealY: {
		clipPath: "inset(100% 0% 0% 0%)",
		duration: DURATION.dramatic,
		ease: EASE_IN_OUT,
	},

	/** Clip-path wipe horizontal */
	clipRevealX: {
		clipPath: "inset(0% 100% 0% 0%)",
		duration: DURATION.dramatic,
		ease: EASE_IN_OUT,
	},
} as const;

/**
 * ScrollTrigger defaults para reutilização.
 *
 * Uso:
 * ```ts
 * gsap.from(el, {
 *   ...ANIM.fadeUp,
 *   scrollTrigger: { trigger: el, ...SCROLL_DEFAULTS },
 * });
 * ```
 */
export const SCROLL_DEFAULTS = {
	start: "top 85%",
	end: "bottom 15%",
	toggleActions: "play none none none",
} as const;

/**
 * Stagger padrão para listas/grids.
 */
export const STAGGER = {
	fast: 0.06,
	base: 0.1,
	slow: 0.15,
	dramatic: 0.2,
} as const;

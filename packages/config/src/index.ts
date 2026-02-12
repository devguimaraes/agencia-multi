// @multi-br/config — Configurações compartilhadas
// Tokens e configurações de design serão adicionados na Fase 1

const DEFAULT_URL = "https://agenciamultibr.com";

export const SITE_CONFIG = {
	name: "Multi BR",
	slogan: "Branding ✹ Conteúdo ✹ Tráfego",
	tagline: "Estratégia digital sem enrolação",
	defaultUrl: DEFAULT_URL,
} as const;

/** Retorna a URL do site, priorizando env var quando disponível (Next.js runtime) */
export function getSiteUrl(): string {
	return process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_URL;
}

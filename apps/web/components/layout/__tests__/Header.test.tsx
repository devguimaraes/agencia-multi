import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Header } from "../Header";

// Mock next/image
vi.mock("next/image", () => ({
	default: ({ alt, ...props }: { alt: string; [key: string]: unknown }) => (
		// biome-ignore lint/a11y/useAltText: mock do next/image para testes
		<img alt={alt} {...props} />
	),
}));

// Mock next/link
vi.mock("next/link", () => ({
	default: ({
		children,
		href,
		...props
	}: {
		children: React.ReactNode;
		href: string;
		[key: string]: unknown;
	}) => (
		<a href={href} {...props}>
			{children}
		</a>
	),
}));

describe("Header", () => {
	it("renderiza o logo da Multi BR", () => {
		render(<Header />);
		// Header + MobileMenu ambos renderizam o logo
		const logos = screen.getAllByAltText("Multi BR");
		expect(logos.length).toBeGreaterThan(0);
	});

	it("renderiza os links de navegação", () => {
		render(<Header />);
		// Links existem tanto no nav desktop quanto no MobileMenu
		const servicosLinks = screen.getAllByText("Serviços");
		expect(servicosLinks.length).toBeGreaterThan(0);
		const mentoriaLinks = screen.getAllByText("Mentoria");
		expect(mentoriaLinks.length).toBeGreaterThan(0);
		const portfolioLinks = screen.getAllByText("Portfólio");
		expect(portfolioLinks.length).toBeGreaterThan(0);
	});

	it("renderiza o CTA de WhatsApp", () => {
		render(<Header />);
		// CTA desktop + CTA no MobileMenu
		const ctaLinks = screen.getAllByText("Falar no WhatsApp");
		expect(ctaLinks.length).toBeGreaterThan(0);
	});

	it("renderiza o botão hamburguer para mobile", () => {
		render(<Header />);
		// Pode haver múltiplos botões (hamburguer + fechar dentro do MobileMenu fechado)
		const buttons = screen.getAllByRole("button");
		const hamburger = buttons.find((b) => b.getAttribute("aria-label")?.match(/abrir menu/i));
		expect(hamburger).toBeDefined();
	});
});

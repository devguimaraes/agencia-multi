import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Footer } from "../Footer";

vi.mock("next/image", () => ({
	default: ({ alt, ...props }: { alt: string; [key: string]: unknown }) => (
		// biome-ignore lint/a11y/useAltText: mock do next/image para testes
		<img alt={alt} {...props} />
	),
}));

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

describe("Footer", () => {
	it("renderiza o logo da Multi BR", () => {
		render(<Footer />);
		expect(screen.getByAltText("Multi BR")).toBeDefined();
	});

	it("renderiza o CNPJ real", () => {
		render(<Footer />);
		const elements = screen.getAllByText(/37\.070\.956\/0001-70/);
		expect(elements.length).toBeGreaterThan(0);
	});

	it("renderiza o copyright", () => {
		render(<Footer />);
		const elements = screen.getAllByText(/Multi BR\. Todos os direitos reservados/);
		expect(elements.length).toBeGreaterThan(0);
	});

	it("renderiza os links de navegação rápida", () => {
		render(<Footer />);
		const servicosLinks = screen.getAllByRole("link", { name: "Serviços" });
		expect(servicosLinks.length).toBeGreaterThan(0);
		const portfolioLinks = screen.getAllByRole("link", { name: "Portfólio" });
		expect(portfolioLinks.length).toBeGreaterThan(0);
	});

	it("renderiza o email de contato", () => {
		render(<Footer />);
		const elements = screen.getAllByText("atendimento@agenciamultibr.com");
		expect(elements.length).toBeGreaterThan(0);
	});

	it("renderiza o link de WhatsApp", () => {
		render(<Footer />);
		const links = screen.getAllByRole("link") as HTMLAnchorElement[];
		const whatsappLink = links.find((l) => l.href?.includes("wa.me"));
		expect(whatsappLink).toBeDefined();
	});
});

import { expect, test } from "@playwright/test";

test.describe("Mobile Menu E2E", () => {
	// Força uma viewport mobile para assegurar os testes independentemente dos profiles globais
	test.use({ viewport: { width: 390, height: 844 } });

	test.beforeEach(async ({ page }) => {
		await page.goto("/");
	});

	test("O ícone do Hamburger deve estar visível no Mobile", async ({ page }) => {
		const menuButton = page.locator('button[aria-controls="mobile-menu"]');

		// Verifica hitbox presente
		await expect(menuButton).toBeVisible();

		// O Menu CTA de Desktop (`Falar no WhatsApp`) deve estar omitido (classe lg:block -> hidden)
		const ctaDesktop = page.locator('a:has-text("Falar no WhatsApp")').first();
		await expect(ctaDesktop).toBeHidden();
	});

	test("Deve expandir a navegação Mobile e interagir com links", async ({ page }) => {
		const menuButton = page.locator('button[aria-controls="mobile-menu"]');

		// O Menu Inicia Escondido
		const mobileMenu = page.locator("#mobile-menu");

		// Simulando o User Hit: Tocar no Botão
		await menuButton.click();

		// Checa se as tags e transições trocaram de estado e invadiram o viewport
		await expect(mobileMenu).toBeVisible();

		// Links Essenciais devem existir ali
		const portfolioLink = mobileMenu.locator('a:has-text("Portfólio")');
		await expect(portfolioLink).toBeVisible();

		const contatoButton = mobileMenu.locator('a:has-text("Vamos conversar")');
		await expect(contatoButton).toBeVisible();
	});

	test("Deve fechar a navegação ao tocar novamente no botão do Header", async ({ page }) => {
		const menuButton = page.locator('button[aria-controls="mobile-menu"]');
		const mobileMenu = page.locator("#mobile-menu");

		// Abre
		await menuButton.click();
		await expect(mobileMenu).toBeVisible();

		// Toca pra Colapsar
		await menuButton.click();

		// Verificamos se a classe de colapso recolheu ao lado direito da interface
		await expect(mobileMenu).toHaveClass(/translate-x-full/);
	});
});

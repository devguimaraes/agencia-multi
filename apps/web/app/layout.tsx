import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Loader } from "@/components/ui/Loader";

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://multibr.com.br"),
	title: {
		default: "Multi BR | Branding ✹ Conteúdo ✹ Tráfego",
		template: "%s | Multi BR",
	},
	description: "Estratégia digital sem enrolação. Agência de marketing digital no Rio de Janeiro.",
	openGraph: {
		type: "website",
		locale: "pt_BR",
		siteName: "Multi BR",
		title: "Multi BR | Branding ✹ Conteúdo ✹ Tráfego",
		description:
			"Estratégia digital sem enrolação. Agência de marketing digital no Rio de Janeiro.",
		images: [
			{
				url: "/brand/logo-colorida.png",
				width: 1200,
				height: 630,
				alt: "Multi BR",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Multi BR | Branding ✹ Conteúdo ✹ Tráfego",
		description:
			"Estratégia digital sem enrolação. Agência de marketing digital no Rio de Janeiro.",
		images: ["/brand/logo-colorida.png"],
	},
};

import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR" className="overflow-x-hidden">
			<body className={`${poppins.variable} antialiased min-h-screen overflow-x-hidden`}>
				{/* Skip to content — acessibilidade por teclado */}
				<a
					href="#main-content"
					className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-9999 focus:rounded-md focus:bg-multi-amarelo focus:px-4 focus:py-2 focus:font-semibold focus:text-multi-black focus:text-sm"
				>
					Ir para o conteúdo principal
				</a>
				<Loader />
				<CustomCursor />
				{/* Global grain fixo - Base (opacity menor que as seções coloridas para n atrapalhar texto normal) */}
				<div className="grain low-opacity" aria-hidden="true" />
				<Header />

				<main id="main-content">{children}</main>
				<Toaster />

				<Footer />

				<WhatsAppButton />
			</body>
		</html>
	);
}

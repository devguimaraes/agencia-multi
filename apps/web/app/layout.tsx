import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		default: "Multi BR | Branding ✹ Conteúdo ✹ Tráfego",
		template: "%s | Multi BR",
	},
	description: "Estratégia digital sem enrolação. Agência de marketing digital no Rio de Janeiro.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${poppins.variable} antialiased`}>{children}</body>
		</html>
	);
}

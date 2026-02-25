import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Loader } from "@/components/ui/Loader";
import { PageTransition } from "@/components/ui/PageTransition";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

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
  description:
    "Estratégia digital sem enrolação. Agência de marketing digital no Rio de Janeiro especializada em Branding, Conteúdo e Tráfego Pago.",
  keywords: [
    "marketing digital rio de janeiro",
    "agência de branding rj",
    "gestão de tráfego pago",
    "criação de conteúdo multi",
    "estratégia digital rj",
    "marketing carioca",
  ],
  authors: [{ name: "Multi BR" }],
  creator: "Multi BR",
  publisher: "Multi BR",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://multibr.com.br",
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
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
      <body
        className={`${poppins.variable} antialiased min-h-screen overflow-x-hidden`}
      >
        {/* Skip to content — acessibilidade por teclado */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-9999 focus:rounded-md focus:bg-multi-amarelo focus:px-4 focus:py-2 focus:font-semibold focus:text-multi-black focus:text-sm"
        >
          Ir para o conteúdo principal
        </a>
        <Loader />
        <ScrollProgress />
        <PageTransition />
        <CustomCursor />
        {/* Global grain fixo - Base (opacity menor que as seções coloridas para n atrapalhar texto normal) */}
        <div className="grain low-opacity" aria-hidden="true" />
        <SmoothScrollProvider>
          <Header />

          <main id="main-content">{children}</main>
          <Toaster />

          <Footer />

          <WhatsAppButton />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

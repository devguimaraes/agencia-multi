"use client";

import { gsap, useGSAP } from "@/hooks/use-gsap";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MobileMenu } from "./MobileMenu";

const NAV_LINKS = [
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/mentoria", label: "Mentoria" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
] as const;

const WHATSAPP_URL = "https://wa.me/5521969715247";

function useScrollEffect(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

export function Header() {
  const scrolled = useScrollEffect();
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Entrance animation triggered by loader events
  useEffect(() => {
    if (sessionStorage.getItem("multi:loader-done") === "true") {
      setIsVisible(true);
      return;
    }

    const showHeader = () => setIsVisible(true);
    window.addEventListener("loader:start-exit", showHeader);
    window.addEventListener("loader:complete", showHeader);

    return () => {
      window.removeEventListener("loader:start-exit", showHeader);
      window.removeEventListener("loader:complete", showHeader);
    };
  }, []);

  useGSAP(
    () => {
      if (!isVisible || !headerRef.current) return;

      gsap.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          delay: 0.2, // Small delay for the loader panels to clear a bit
        },
      );
    },
    { scope: headerRef, dependencies: [isVisible] },
  );

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 -translate-y-full opacity-0",
          isVisible && "translate-y-0 opacity-100",
          scrolled
            ? "bg-multi-roxo/95 shadow-md backdrop-blur-md border-b border-white/5 py-0"
            : "bg-transparent py-4 lg:py-2",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8 lg:px-12">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Multi BR — Página inicial"
            className="shrink-0 transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/brand/logo-branca.png"
              alt="Multi BR"
              width={120}
              height={40}
              priority
              className="h-10 w-auto object-contain drop-shadow-md"
              style={{ height: "auto" }}
            />
          </Link>

          {/* Nav desktop */}
          <nav
            aria-label="Navegação principal"
            className="hidden lg:flex lg:items-center lg:gap-8"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="group relative font-poppins font-medium text-white/90 text-[15px] transition-colors duration-300 hover:text-white"
              >
                {label}
                {/* Animating Underline (Awwwards Style) */}
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-multi-amarelo origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden lg:block">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center gap-2 rounded-sm bg-multi-amarelo px-6 py-2.5 font-poppins font-bold text-multi-roxo text-[14px] transition-all duration-300 shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-multi-amarelo"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white flex items-center gap-2">
                <WhatsAppIcon />
                Falar no WhatsApp
              </span>
              <div className="absolute inset-0 bg-multi-rosa rounded-sm transform scale-0 origin-center transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.5]" />
            </a>
          </div>

          {/* Hamburguer mobile */}
          <button
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="inline-flex items-center justify-center rounded-md p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>
      </header>

      <MobileMenu
        id="mobile-menu"
        open={menuOpen}
        links={NAV_LINKS}
        whatsappUrl={WHATSAPP_URL}
        onNavigate={() => setMenuOpen(false)}
      />
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.977-1.417A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.964 7.964 0 01-4.437-1.337l-.318-.19-3.01.858.857-2.96-.208-.33A7.96 7.96 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 transition-transform duration-200"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
    </svg>
  );
}

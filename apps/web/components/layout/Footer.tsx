"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const QUICK_LINKS = [
  { href: "/servicos", label: "Serviços" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre", label: "Sobre" },
  { href: "/mentoria", label: "Mentoria" },
] as const;

const SOCIAL_LINKS = [
  {
    href: "https://instagram.com/agenciamultibr",
    label: "Instagram",
    icon: InstagramIcon,
  },
  {
    href: "https://linkedin.com/company/agenciamultibr",
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
  {
    href: "https://tiktok.com/@agenciamultibr",
    label: "TikTok",
    icon: TikTokIcon,
  },
  {
    href: "https://pinterest.com/agenciamultibr",
    label: "Pinterest",
    icon: PinterestIcon,
  },
] as const;

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.15 });

  return (
    <footer
      ref={ref}
      className="relative bg-multi-black text-white overflow-hidden isolate pb-4"
    >
      {/* Grain Texture */}
      <div className="grain low-opacity pointer-events-none" />

      {/* Parallax Sol/Watermark Monumental no Background */}
      <div
        className={cn(
          "absolute bottom-0 right-[-10%] sm:right-[-5%] w-[120vw] max-w-[800px] md:max-w-[1200px] opacity-[0.03] z-0 pointer-events-none transition-transform duration-1200 ease-out",
          isIntersecting
            ? "translate-y-10 scale-100"
            : "translate-y-32 scale-95",
        )}
      >
        <svg
          viewBox="0 0 200 200"
          fill="currentColor"
          className="w-full h-full text-multi-amarelo animate-sol-spin"
        >
          <title>Background Decorativo</title>
          <g>
            {Array.from({ length: 18 }).map((_, i) => (
              <path
                key={`footer-ray-${i * 20}`}
                d="M100 20L108 80L100 90L92 80L100 20Z"
                transform={`rotate(${i * 20} 100 100)`}
              />
            ))}
            <circle cx="100" cy="100" r="40" />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Col 1: Logo + tagline */}
          <div
            className={cn(
              "flex flex-col gap-4 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] translate-y-8",
              isIntersecting && "opacity-100 translate-y-0 delay-200",
            )}
          >
            <Link
              href="/"
              aria-label="Multi BR — Página inicial"
              className="group"
            >
              <Image
                src="/brand/logo-branca.png"
                alt="Multi BR"
                width={180}
                height={60}
                className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105 origin-left"
                style={{ height: "auto" }}
              />
            </Link>
            <p className="max-w-xs text-white/50 text-[15px] font-poppins leading-relaxed">
              Agência de marketing digital no Rio de Janeiro. Estratégia digital sem enrolação: presença, escala e vendas para quem quer resultado.
            </p>
            {/* Redes sociais */}
            <div className="flex items-center gap-3 pt-2">
              {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-multi-amarelo hover:bg-multi-amarelo hover:text-multi-roxo hover:-translate-y-1 hover:shadow-lg"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Links rápidos */}
          <div
            className={cn(
              "opacity-0 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] translate-y-8",
              isIntersecting && "opacity-100 translate-y-0 delay-400",
            )}
          >
            <h3 className="mb-6 font-poppins font-bold text-[13px] text-white/90 uppercase tracking-[0.2em]">
              Links rápidos
            </h3>
            <nav aria-label="Links rápidos">
              <ul className="flex flex-col gap-3">
                {QUICK_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="group relative inline-flex font-poppins font-normal text-white/50 text-[15px] transition-colors hover:text-white"
                    >
                      {label}
                      <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-multi-amarelo origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Col 3: Contato */}
          <div
            className={cn(
              "opacity-0 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] translate-y-8",
              isIntersecting && "opacity-100 translate-y-0 delay-500",
            )}
          >
            <h3 className="mb-6 font-poppins font-bold text-[13px] text-white/90 uppercase tracking-[0.2em]">
              Contato
            </h3>
            <ul className="flex flex-col gap-4 text-[15px] font-poppins text-white/50">
              <li>
                <a
                  href="https://wa.me/5521969715247"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 transition-colors hover:text-white"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-multi-amarelo group-hover:bg-multi-amarelo group-hover:text-multi-roxo transition-all duration-300">
                    <PhoneIcon />
                  </span>
                  (21) 96971-5247
                </a>
              </li>
              <li>
                <a
                  href="mailto:atendimento@agenciamultibr.com"
                  className="group flex items-center gap-3 transition-colors hover:text-white"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-multi-amarelo group-hover:bg-multi-amarelo group-hover:text-multi-roxo transition-all duration-300">
                    <MailIcon />
                  </span>
                  atendimento@agenciamultibr.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-multi-amarelo">
                  <MapPinIcon />
                </span>
                Todos os Santos, Rio de Janeiro/RJ
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div
          className={cn(
            "mt-16 md:mt-24 flex flex-col items-center justify-between gap-4 border-white/10 border-t pt-8 text-white/30 font-poppins text-[13px] md:flex-row opacity-0 transition-all duration-1000 ease-out",
            isIntersecting && "opacity-100 delay-700",
          )}
        >
          <p>© {CURRENT_YEAR} Multi BR. Todos os direitos reservados.</p>
          <p>CNPJ 37.070.956/0001-70</p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324A6.162 6.162 0 0012 5.838zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.74a4.84 4.84 0 01-1.01-.05z" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.013 3.5-4.72 3.5-8.077 0-4.694-3.806-8.5-8.5-8.5s-8.5 3.806-8.5 8.5c0 3.357 1.556 6.064 3.5 8.077a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

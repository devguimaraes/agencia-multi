"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

type NavLink = { readonly href: string; readonly label: string };

interface MobileMenuProps {
	id: string;
	open: boolean;
	links: readonly NavLink[];
	whatsappUrl: string;
	onNavigate: () => void;
}

export function MobileMenu({ id, open, links, whatsappUrl, onNavigate }: MobileMenuProps) {
	// Impede scroll do body quando menu aberto
	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);

	return (
		<>
			{/* Overlay — aria-hidden pois é decorativo; keyboard users gerem via Escape no dialog */}
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: overlay decorativo com aria-hidden; foco é gerenciado pelo dialog */}
			<div
				aria-hidden="true"
				onClick={onNavigate}
				className={[
					"fixed inset-0 z-40 bg-multi-roxo/80 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
					open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
				].join(" ")}
			/>

			<div
				id={id}
				role="dialog"
				aria-modal="true"
				aria-label="Menu de navegação"
				className={[
					"fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-multi-roxo shadow-2xl transition-transform duration-300 ease-out lg:hidden",
					open ? "translate-x-0" : "translate-x-full",
				].join(" ")}
			>
				{/* Header do painel */}
				<div className="flex h-16 items-center justify-between border-white/10 border-b px-6">
					<Link href="/" onClick={onNavigate} aria-label="Multi BR — Página inicial">
						<Image
							src="/brand/logo-branca.png"
							alt="Multi BR"
							width={100}
							height={32}
							className="h-8 w-auto object-contain"
						/>
					</Link>
					<button
						type="button"
						aria-label="Fechar menu"
						onClick={onNavigate}
						className="rounded-md p-2 text-white transition-colors hover:bg-white/10"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
							aria-hidden="true"
						>
							<line x1="18" y1="6" x2="6" y2="18" />
							<line x1="6" y1="6" x2="18" y2="18" />
						</svg>
					</button>
				</div>

				{/* Nav links */}
				<nav
					aria-label="Menu mobile"
					className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6"
				>
					{links.map(({ href, label }) => (
						<Link
							key={href}
							href={href}
							onClick={onNavigate}
							className="rounded-lg px-4 py-3 font-medium text-base text-white/90 transition-colors hover:bg-white/10 hover:text-multi-amarelo"
						>
							{label}
						</Link>
					))}
				</nav>

				{/* CTA WhatsApp */}
				<div className="border-white/10 border-t px-6 py-6">
					<a
						href={whatsappUrl}
						target="_blank"
						rel="noopener noreferrer"
						onClick={onNavigate}
						className="flex w-full items-center justify-center gap-2 rounded-full bg-multi-amarelo px-5 py-3 font-semibold text-multi-black text-sm transition-all hover:brightness-110"
					>
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
						Falar no WhatsApp
					</a>
				</div>
			</div>
		</>
	);
}

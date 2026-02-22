"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import Image from "next/image";

const CLIENTS = [
	{ src: "/assets/clients/iorb.webp", alt: "IORB" },
	{ src: "/assets/clients/1.png", alt: "Cliente 1" },
	{ src: "/assets/clients/4.png", alt: "Cliente 4" },
	{ src: "/assets/clients/6.png", alt: "Cliente 6" },
];

export function TrustStrip({ className }: { className?: string }) {
	const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

	// We repeat the clients enough times to ensure the loop is seamless
	// 4 logos * 4 repetitions = 16 items. The translateX(-50%) will land perfectly.
	const marqueeItems = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];

	return (
		<section
			ref={ref}
			className={cn(
				"relative z-20 w-full bg-multi-amarelo py-6 md:py-8 overflow-hidden border-y-[3px] border-multi-roxo flex items-center transition-opacity duration-1000",
				isIntersecting ? "opacity-100" : "opacity-0",
				className,
			)}
		>
			<div className="relative flex w-full overflow-hidden items-center whitespace-nowrap">
				{/* The marquee container holding the logos in a single row */}
				<div className="flex w-max animate-marquee items-center shrink-0">
					{marqueeItems.map((client, i) => (
						<div
							// biome-ignore lint/suspicious/noArrayIndexKey: Standard marquee loop
							key={`${client.src}-${i}`}
							className="flex items-center justify-center shrink-0 w-[160px] md:w-[240px] px-6 md:px-12 h-16 md:h-24 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
						>
							<Image
								src={client.src}
								alt={client.alt}
								width={220}
								height={80}
								className="h-12 md:h-20 w-auto object-contain"
								style={{ width: "auto" }}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

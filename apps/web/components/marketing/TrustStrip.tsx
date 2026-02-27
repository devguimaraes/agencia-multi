"use client";

import { ScrollTrigger, gsap, useGSAP } from "@/hooks/use-gsap";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRef } from "react";

const CLIENTS = [
	{ src: "/assets/clients/iorb.webp", alt: "IORB" },
	{ src: "/assets/clients/1.png", alt: "Cliente 1" },
	{ src: "/assets/clients/4.png", alt: "Cliente 4" },
	{ src: "/assets/clients/6.png", alt: "Cliente 6" },
];

export function TrustStrip({ className }: { className?: string }) {
	const sliderRef = useRef<HTMLDivElement>(null);
	const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

	// We repeat the clients enough times to ensure the loop is seamless
	const marqueeItems = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];

	// Velocity-driven GSAP Marquee
	useGSAP(
		() => {
			if (!sliderRef.current) return;

			let xPercent = 0;
			let direction = -1;

			const tickerFunc = () => {
				if (!sliderRef.current) return;

				if (xPercent <= -50) {
					xPercent = 0;
				}
				if (xPercent > 0) {
					xPercent = -50;
				}

				gsap.set(sliderRef.current, { xPercent: xPercent });

				const speedLevel = 0.05 * direction;
				xPercent += speedLevel;
			};

			// Use GSAP ticker instead of manual RAF for better sync and automatic cleanup guidance
			gsap.ticker.add(tickerFunc);

			const st = ScrollTrigger.create({
				trigger: document.documentElement,
				start: 0,
				end: "bottom bottom",
				onUpdate: (e) => {
					if (!sliderRef.current) return;
					direction = e.direction * -1;

					const velocity = Math.abs(e.getVelocity());
					gsap.to(sliderRef.current, {
						xPercent: `+=${direction * velocity * 0.005}`,
						duration: 0.5,
						ease: "power3.out",
						overwrite: true,
					});
				},
			});

			return () => {
				gsap.ticker.remove(tickerFunc);
				st.kill();
			};
		},
		{ scope: ref },
	);

	return (
		<section
			ref={ref}
			className={cn(
				"relative z-20 w-full bg-multi-amarelo py-6 md:py-8 overflow-hidden border-y-[3px] border-multi-roxo flex items-center shadow-[0_0_30px_rgba(255,183,1,0.3)]",
				isIntersecting
					? "opacity-100 translate-y-0"
					: "opacity-0 translate-y-4 transition-all duration-1000",
				className,
			)}
		>
			<div className="relative flex w-full overflow-hidden items-center whitespace-nowrap group">
				<div ref={sliderRef} className="flex w-max items-center shrink-0">
					{marqueeItems.map((client, i) => (
						<div
							key={`trusted-${client.src}-${i}`}
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

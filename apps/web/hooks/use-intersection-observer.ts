"use client";

import { useEffect, useRef, useState } from "react";

type UseIntersectionObserverOptions = {
	/** Threshold for visibility (0-1). Default: 0.1 */
	threshold?: number;
	/** Root margin (CSS margin string). Default: "0px" */
	rootMargin?: string;
	/** Only trigger once. Default: true */
	triggerOnce?: boolean;
};

/**
 * Hook para detectar elementos entrando no viewport.
 * Use para animações de scroll (fade-in, slide-up).
 *
 * @example
 * ```tsx
 * function MySection() {
 *   const { ref, isIntersecting } = useIntersectionObserver();
 *   return (
 *     <section
 *       ref={ref}
 *       className={isIntersecting ? "animate-slide-up" : "opacity-0"}
 *     >
 *       Conteúdo animado
 *     </section>
 *   );
 * }
 * ```
 */
export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>({
	threshold = 0.1,
	rootMargin = "0px",
	triggerOnce = true,
}: UseIntersectionObserverOptions = {}) {
	const ref = useRef<T>(null);
	const [isIntersecting, setIsIntersecting] = useState(false);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry?.isIntersecting) {
					setIsIntersecting(true);
					if (triggerOnce) {
						observer.unobserve(element);
					}
				} else if (!triggerOnce) {
					setIsIntersecting(false);
				}
			},
			{ threshold, rootMargin },
		);

		observer.observe(element);

		return () => observer.disconnect();
	}, [threshold, rootMargin, triggerOnce]);

	return { ref, isIntersecting };
}

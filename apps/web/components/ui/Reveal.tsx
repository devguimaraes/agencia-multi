"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

export function RevealSection({
	children,
	className,
	delay = false,
}: {
	children: React.ReactNode;
	className?: string;
	delay?: boolean | number;
}) {
	const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
	return (
		<div
			ref={ref}
			className={cn(
				"reveal-up",
				isIntersecting && "is-visible",
				delay === true && "delay-200",
				className,
			)}
			style={typeof delay === "number" ? { transitionDelay: `${delay}s` } : undefined}
		>
			{children}
		</div>
	);
}

export function StaggerContainer({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
	return (
		<div ref={ref} className={cn("stagger-children", isIntersecting && "is-visible", className)}>
			{children}
		</div>
	);
}

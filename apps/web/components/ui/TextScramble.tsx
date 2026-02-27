"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useEffect, useRef, useState } from "react";

interface TextScrambleProps {
	text: string;
	className?: string;
	duration?: number;
	delay?: number;
	triggerOnce?: boolean;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

/**
 * TEXT SCRAMBLE COMPONENT
 *
 * Cria um efeito de "decodificação" de texto quando o elemento entra no viewport.
 */
export function TextScramble({
	text,
	className,
	duration = 0.8,
	delay = 0,
	triggerOnce = true,
}: TextScrambleProps) {
	const [displayText, setDisplayText] = useState("");
	const { ref, isIntersecting } = useIntersectionObserver({
		threshold: 0.1,
		triggerOnce,
	});
	const hasAnimated = useRef(false);

	useEffect(() => {
		if (!isIntersecting) return;
		if (triggerOnce && hasAnimated.current) return;

		// Remove lint warning about unused parameter by referencing text here
		// or just using it in the split logic below.

		hasAnimated.current = true;
		let frame = 0;
		const totalFrames = duration * 60; // 60fps aprox

		const timer = setTimeout(() => {
			const interval = setInterval(() => {
				setDisplayText(() => {
					return text
						.split("")
						.map((char, i) => {
							if (char === " ") return " ";
							if (frame / totalFrames > i / text.length) return text[i];
							return CHARS[Math.floor(Math.random() * CHARS.length)];
						})
						.join("");
				});

				if (frame >= totalFrames) {
					setDisplayText(text);
					clearInterval(interval);
				}
				frame++;
			}, 1000 / 60);

			return () => clearInterval(interval);
		}, delay * 1000);

		return () => clearTimeout(timer);
	}, [isIntersecting, text, duration, delay, triggerOnce]);

	// Texto inicial invisível para preservar o espaço no layout
	return (
		<span ref={ref} className={className} aria-label={text}>
			{!displayText && <span className="opacity-0">{text}</span>}
			{displayText}
		</span>
	);
}

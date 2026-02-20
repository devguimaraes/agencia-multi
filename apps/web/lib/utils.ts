import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes with clsx — use in all component className props */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

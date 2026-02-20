import { cn } from "@/lib/utils";
import type { ComponentPropsWithRef } from "react";

/* ---- Card Root ---- */
type CardProps = ComponentPropsWithRef<"div">;

function Card({ className, ref, ...props }: CardProps) {
	return (
		<div
			ref={ref}
			className={cn(
				"rounded-md border border-gray-200 bg-white p-6",
				"shadow-card transition-all duration-smooth",
				"hover:shadow-card-hover hover:scale-[1.02]",
				className,
			)}
			{...props}
		/>
	);
}

/* ---- Card Header ---- */
function CardHeader({ className, ref, ...props }: CardProps) {
	return <div ref={ref} className={cn("flex flex-col gap-2", className)} {...props} />;
}

/* ---- Card Title ---- */
type CardTitleProps = ComponentPropsWithRef<"h3">;

function CardTitle({ className, ref, ...props }: CardTitleProps) {
	return (
		<h3
			ref={ref}
			className={cn("font-body text-xl font-semibold text-multi-roxo", className)}
			{...props}
		/>
	);
}

/* ---- Card Description ---- */
type CardDescriptionProps = ComponentPropsWithRef<"p">;

function CardDescription({ className, ref, ...props }: CardDescriptionProps) {
	return (
		<p ref={ref} className={cn("text-sm text-gray-600 leading-relaxed", className)} {...props} />
	);
}

/* ---- Card Content ---- */
function CardContent({ className, ref, ...props }: CardProps) {
	return <div ref={ref} className={cn("pt-4", className)} {...props} />;
}

/* ---- Card Footer ---- */
function CardFooter({ className, ref, ...props }: CardProps) {
	return <div ref={ref} className={cn("flex items-center pt-4", className)} {...props} />;
}

/* ---- Card Highlight (Mentoria) ---- */
function CardHighlight({ className, ref, ...props }: CardProps) {
	return (
		<div
			ref={ref}
			className={cn(
				"rounded-lg p-8 text-white",
				"bg-gradient-principal",
				"shadow-card-hover transition-all duration-smooth",
				"hover:scale-[1.02]",
				className,
			)}
			{...props}
		/>
	);
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardHighlight };

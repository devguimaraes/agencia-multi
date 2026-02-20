"use client";

import { cn } from "@/lib/utils";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { type VariantProps, cva } from "class-variance-authority";
import { AlertTriangle, CheckCircle, Info, X, XCircle } from "lucide-react";
import type { ComponentPropsWithRef } from "react";

const ToastProvider = ToastPrimitive.Provider;

/* ---- Viewport ---- */
type ToastViewportProps = ComponentPropsWithRef<typeof ToastPrimitive.Viewport>;

function ToastViewport({ className, ref, ...props }: ToastViewportProps) {
	return (
		<ToastPrimitive.Viewport
			ref={ref}
			className={cn(
				"fixed top-4 right-4 z-100",
				"flex flex-col gap-2",
				"w-full max-w-[320px]",
				className,
			)}
			{...props}
		/>
	);
}

/* ---- Toast ---- */
const toastVariants = cva(
	[
		"group pointer-events-auto relative",
		"flex items-start gap-3",
		"w-full rounded-md p-4",
		"shadow-card",
		"transition-all duration-smooth",
		"data-[state=open]:animate-slide-up",
		"data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]",
		"data-[swipe=cancel]:translate-x-0",
		"data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)]",
	],
	{
		variants: {
			variant: {
				success: "bg-multi-verde text-white",
				error: "bg-multi-vermelho text-white",
				info: "bg-multi-azul text-white",
				warning: "bg-multi-laranja text-white",
			},
		},
		defaultVariants: {
			variant: "info",
		},
	},
);

const TOAST_ICONS = {
	success: CheckCircle,
	error: XCircle,
	info: Info,
	warning: AlertTriangle,
} as const;

type ToastProps = ComponentPropsWithRef<typeof ToastPrimitive.Root> &
	VariantProps<typeof toastVariants>;

function Toast({ className, variant, ref, children, ...props }: ToastProps) {
	const Icon = TOAST_ICONS[variant ?? "info"];

	return (
		<ToastPrimitive.Root ref={ref} className={cn(toastVariants({ variant }), className)} {...props}>
			<Icon className="size-5 shrink-0 mt-0.5" />
			<div className="flex-1">{children}</div>
		</ToastPrimitive.Root>
	);
}

/* ---- Title ---- */
type ToastTitleProps = ComponentPropsWithRef<typeof ToastPrimitive.Title>;

function ToastTitle({ className, ref, ...props }: ToastTitleProps) {
	return (
		<ToastPrimitive.Title ref={ref} className={cn("text-sm font-semibold", className)} {...props} />
	);
}

/* ---- Description ---- */
type ToastDescriptionProps = ComponentPropsWithRef<typeof ToastPrimitive.Description>;

function ToastDescription({ className, ref, ...props }: ToastDescriptionProps) {
	return (
		<ToastPrimitive.Description
			ref={ref}
			className={cn("text-sm opacity-90", className)}
			{...props}
		/>
	);
}

/* ---- Close ---- */
type ToastCloseProps = ComponentPropsWithRef<typeof ToastPrimitive.Close>;

function ToastClose({ className, ref, ...props }: ToastCloseProps) {
	return (
		<ToastPrimitive.Close
			ref={ref}
			className={cn(
				"absolute top-2 right-2",
				"size-6 flex items-center justify-center rounded-sm",
				"opacity-70 hover:opacity-100",
				"transition-opacity duration-fast",
				"focus:outline-2 focus:outline-white",
				className,
			)}
			{...props}
		>
			<X className="size-4" />
			<span className="sr-only">Fechar</span>
		</ToastPrimitive.Close>
	);
}

/* ---- Action ---- */
type ToastActionProps = ComponentPropsWithRef<typeof ToastPrimitive.Action>;

function ToastAction({ className, ref, ...props }: ToastActionProps) {
	return (
		<ToastPrimitive.Action
			ref={ref}
			className={cn(
				"inline-flex items-center justify-center rounded-sm",
				"border border-white/30 bg-white/10 px-3 py-1",
				"text-sm font-medium",
				"transition-colors duration-fast",
				"hover:bg-white/20",
				"focus:outline-2 focus:outline-white",
				className,
			)}
			{...props}
		/>
	);
}

export {
	ToastProvider,
	ToastViewport,
	Toast,
	ToastTitle,
	ToastDescription,
	ToastClose,
	ToastAction,
	toastVariants,
};
export type { ToastProps };

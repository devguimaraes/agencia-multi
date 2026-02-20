"use client";

import { cn } from "@/lib/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { ComponentPropsWithRef } from "react";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

/* ---- Overlay ---- */
type DialogOverlayProps = ComponentPropsWithRef<typeof DialogPrimitive.Overlay>;

function DialogOverlay({ className, ref, ...props }: DialogOverlayProps) {
	return (
		<DialogPrimitive.Overlay
			ref={ref}
			className={cn(
				"fixed inset-0 z-50",
				"bg-multi-roxo/80 backdrop-blur-sm",
				"data-[state=open]:animate-fade-in",
				className,
			)}
			{...props}
		/>
	);
}

/* ---- Content ---- */
type DialogContentProps = ComponentPropsWithRef<typeof DialogPrimitive.Content>;

function DialogContent({ className, children, ref, ...props }: DialogContentProps) {
	return (
		<DialogPortal>
			<DialogOverlay />
			<DialogPrimitive.Content
				ref={ref}
				className={cn(
					"fixed top-1/2 left-1/2 z-50",
					"-translate-x-1/2 -translate-y-1/2",
					"w-full max-w-[600px]",
					"bg-white rounded-lg p-8",
					"shadow-modal",
					"data-[state=open]:animate-slide-up",
					className,
				)}
				{...props}
			>
				{children}
				<DialogPrimitive.Close
					className={cn(
						"absolute top-4 right-4",
						"size-8 flex items-center justify-center rounded-sm",
						"text-gray-600 transition-colors duration-fast",
						"hover:text-multi-vermelho",
						"focus:outline-2 focus:outline-multi-roxo",
					)}
				>
					<X className="size-5" />
					<span className="sr-only">Fechar</span>
				</DialogPrimitive.Close>
			</DialogPrimitive.Content>
		</DialogPortal>
	);
}

/* ---- Header/Footer/Title/Description ---- */
type DivProps = ComponentPropsWithRef<"div">;

function DialogHeader({ className, ...props }: DivProps) {
	return (
		<div className={cn("flex flex-col gap-2 text-center sm:text-left", className)} {...props} />
	);
}

function DialogFooter({ className, ...props }: DivProps) {
	return (
		<div
			className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
			{...props}
		/>
	);
}

type DialogTitleProps = ComponentPropsWithRef<typeof DialogPrimitive.Title>;

function DialogTitle({ className, ref, ...props }: DialogTitleProps) {
	return (
		<DialogPrimitive.Title
			ref={ref}
			className={cn("font-body text-xl font-semibold text-multi-roxo", className)}
			{...props}
		/>
	);
}

type DialogDescriptionProps = ComponentPropsWithRef<typeof DialogPrimitive.Description>;

function DialogDescription({ className, ref, ...props }: DialogDescriptionProps) {
	return (
		<DialogPrimitive.Description
			ref={ref}
			className={cn("text-sm text-gray-600", className)}
			{...props}
		/>
	);
}

export {
	Dialog,
	DialogPortal,
	DialogOverlay,
	DialogClose,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogFooter,
	DialogTitle,
	DialogDescription,
};

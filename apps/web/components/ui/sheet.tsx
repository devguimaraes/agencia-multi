"use client";

import { cn } from "@/lib/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { ComponentPropsWithRef } from "react";

const Sheet = DialogPrimitive.Root;
const SheetTrigger = DialogPrimitive.Trigger;
const SheetClose = DialogPrimitive.Close;
const SheetPortal = DialogPrimitive.Portal;

/* ---- Overlay ---- */
type SheetOverlayProps = ComponentPropsWithRef<typeof DialogPrimitive.Overlay>;

function SheetOverlay({ className, ref, ...props }: SheetOverlayProps) {
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

/* ---- Content (slide from right) ---- */
type SheetContentProps = ComponentPropsWithRef<typeof DialogPrimitive.Content>;

function SheetContent({ className, children, ref, ...props }: SheetContentProps) {
	return (
		<SheetPortal>
			<SheetOverlay />
			<DialogPrimitive.Content
				ref={ref}
				className={cn(
					"fixed inset-y-0 right-0 z-50",
					"w-3/4 max-w-sm",
					"bg-white shadow-modal",
					"transition-transform duration-smooth",
					"data-[state=open]:translate-x-0",
					"data-[state=closed]:translate-x-full",
					"flex flex-col p-6",
					className,
				)}
				{...props}
			>
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
					<span className="sr-only">Fechar menu</span>
				</DialogPrimitive.Close>
				{children}
			</DialogPrimitive.Content>
		</SheetPortal>
	);
}

/* ---- Header/Footer/Title/Description ---- */
type DivProps = ComponentPropsWithRef<"div">;

function SheetHeader({ className, ...props }: DivProps) {
	return <div className={cn("flex flex-col gap-2 pt-8", className)} {...props} />;
}

function SheetFooter({ className, ...props }: DivProps) {
	return <div className={cn("mt-auto flex flex-col gap-2", className)} {...props} />;
}

type SheetTitleProps = ComponentPropsWithRef<typeof DialogPrimitive.Title>;

function SheetTitle({ className, ref, ...props }: SheetTitleProps) {
	return (
		<DialogPrimitive.Title
			ref={ref}
			className={cn("font-body text-lg font-semibold text-multi-roxo", className)}
			{...props}
		/>
	);
}

type SheetDescriptionProps = ComponentPropsWithRef<typeof DialogPrimitive.Description>;

function SheetDescription({ className, ref, ...props }: SheetDescriptionProps) {
	return (
		<DialogPrimitive.Description
			ref={ref}
			className={cn("text-sm text-gray-600", className)}
			{...props}
		/>
	);
}

export {
	Sheet,
	SheetPortal,
	SheetOverlay,
	SheetTrigger,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetFooter,
	SheetTitle,
	SheetDescription,
};

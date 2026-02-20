"use client";

import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import type { ComponentPropsWithRef } from "react";

/* ---- Root ---- */
const Accordion = AccordionPrimitive.Root;

/* ---- Item ---- */
type AccordionItemProps = ComponentPropsWithRef<typeof AccordionPrimitive.Item>;

function AccordionItem({ className, ref, ...props }: AccordionItemProps) {
	return (
		<AccordionPrimitive.Item
			ref={ref}
			className={cn("border-b border-gray-200", className)}
			{...props}
		/>
	);
}

/* ---- Trigger ---- */
type AccordionTriggerProps = ComponentPropsWithRef<typeof AccordionPrimitive.Trigger>;

function AccordionTrigger({ className, children, ref, ...props }: AccordionTriggerProps) {
	return (
		<AccordionPrimitive.Header className="flex">
			<AccordionPrimitive.Trigger
				ref={ref}
				className={cn(
					"flex flex-1 items-center justify-between",
					"py-4 text-left",
					"font-body text-base font-semibold text-gray-800",
					"cursor-pointer",
					"transition-colors duration-fast",
					"hover:text-multi-roxo",
					"[&[data-state=open]>svg]:rotate-180",
					className,
				)}
				{...props}
			>
				{children}
				<ChevronDown
					className="size-5 shrink-0 text-gray-600 transition-transform duration-smooth"
					aria-hidden
				/>
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	);
}

/* ---- Content ---- */
type AccordionContentProps = ComponentPropsWithRef<typeof AccordionPrimitive.Content>;

function AccordionContent({ className, children, ref, ...props }: AccordionContentProps) {
	return (
		<AccordionPrimitive.Content
			ref={ref}
			className={cn(
				"overflow-hidden",
				"text-sm text-gray-600 leading-relaxed",
				"data-[state=open]:animate-slide-up",
				"data-[state=closed]:animate-[slide-down_200ms_ease]",
				className,
			)}
			{...props}
		>
			<div className="pb-4 pt-0">{children}</div>
		</AccordionPrimitive.Content>
	);
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

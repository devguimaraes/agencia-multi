"use client";

import { cn } from "@/lib/utils";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import type { ComponentPropsWithRef } from "react";

/* ---- Root ---- */
const Tabs = TabsPrimitive.Root;

/* ---- List ---- */
type TabsListProps = ComponentPropsWithRef<typeof TabsPrimitive.List>;

function TabsList({ className, ref, ...props }: TabsListProps) {
	return (
		<TabsPrimitive.List
			ref={ref}
			className={cn("inline-flex items-center gap-1", "rounded-md bg-gray-50 p-1", className)}
			{...props}
		/>
	);
}

/* ---- Trigger ---- */
type TabsTriggerProps = ComponentPropsWithRef<typeof TabsPrimitive.Trigger>;

function TabsTrigger({ className, ref, ...props }: TabsTriggerProps) {
	return (
		<TabsPrimitive.Trigger
			ref={ref}
			className={cn(
				"inline-flex items-center justify-center",
				"rounded-sm px-4 py-2",
				"font-body text-sm font-medium text-gray-600",
				"cursor-pointer select-none",
				"transition-all duration-fast",
				"hover:text-multi-roxo",
				"focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-multi-roxo",
				"data-[state=active]:bg-white data-[state=active]:text-multi-roxo data-[state=active]:shadow-sm",
				className,
			)}
			{...props}
		/>
	);
}

/* ---- Content ---- */
type TabsContentProps = ComponentPropsWithRef<typeof TabsPrimitive.Content>;

function TabsContent({ className, ref, ...props }: TabsContentProps) {
	return (
		<TabsPrimitive.Content
			ref={ref}
			className={cn(
				"mt-4",
				"focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-multi-roxo",
				"data-[state=active]:animate-fade-in",
				className,
			)}
			{...props}
		/>
	);
}

export { Tabs, TabsList, TabsTrigger, TabsContent };

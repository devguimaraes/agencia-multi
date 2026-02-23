import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import type { ComponentPropsWithRef } from "react";

const buttonVariants = cva(
	[
		"inline-flex items-center justify-center gap-2",
		"font-body font-bold text-base",
		"rounded-md",
		"min-h-12",
		"cursor-pointer select-none",
		"transition-all duration-base",
		"focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-multi-roxo",
		"disabled:pointer-events-none disabled:opacity-50",
		"active:scale-[0.98]",
	],
	{
		variants: {
			variant: {
				primary: [
					"bg-multi-amarelo text-multi-roxo",
					"hover:bg-multi-rosa hover:text-white",
					"shadow-sm hover:shadow-card",
				],
				secondary: [
					"bg-transparent text-multi-roxo",
					"border-2 border-multi-roxo",
					"hover:bg-multi-roxo hover:text-white",
				],
				outline: [
					"bg-transparent text-multi-roxo",
					"border-2 border-multi-roxo",
					"hover:bg-multi-roxo hover:text-white",
				],
				ghost: [
					"bg-transparent text-multi-roxo",
					"hover:text-multi-azul",
					"underline-offset-4 hover:underline",
				],
				whatsapp: ["bg-multi-whatsapp text-white", "hover:brightness-110", "shadow-whatsapp"],
			},
			size: {
				default: "px-8 py-4",
				sm: "px-4 py-2 text-sm min-h-9",
				lg: "px-12 py-5 text-lg",
				icon: "size-12 p-0",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "default",
		},
	},
);

type ButtonProps = ComponentPropsWithRef<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
		isLoading?: boolean;
	};

function Button({
	className,
	variant,
	size,
	asChild = false,
	isLoading = false,
	disabled,
	children,
	ref,
	...props
}: ButtonProps) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			className={cn(buttonVariants({ variant, size, className }))}
			disabled={disabled || isLoading}
			ref={ref}
			{...props}
		>
			{isLoading ? (
				<>
					<span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
					<span>Aguarde...</span>
				</>
			) : (
				children
			)}
		</Comp>
	);
}

export { Button, buttonVariants };
export type { ButtonProps };

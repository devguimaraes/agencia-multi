import { cn } from "@/lib/utils";
import type { ComponentPropsWithRef } from "react";

type InputProps = ComponentPropsWithRef<"input">;

function Input({ className, type, ref, ...props }: InputProps) {
	return (
		<input
			type={type}
			className={cn(
				"flex w-full rounded-sm border border-gray-200 bg-white",
				"px-4 py-3 min-h-12",
				"font-body text-base text-gray-800",
				"placeholder:text-gray-600",
				"transition-all duration-fast",
				"focus:border-2 focus:border-multi-roxo focus:shadow-sm focus:outline-none",
				"disabled:cursor-not-allowed disabled:opacity-50",
				"aria-invalid:border-multi-vermelho",
				className,
			)}
			ref={ref}
			{...props}
		/>
	);
}

export { Input };
export type { InputProps };

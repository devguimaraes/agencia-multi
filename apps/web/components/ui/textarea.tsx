import { cn } from "@/lib/utils";
import type { ComponentPropsWithRef } from "react";

type TextareaProps = ComponentPropsWithRef<"textarea">;

function Textarea({ className, ref, ...props }: TextareaProps) {
	return (
		<textarea
			className={cn(
				"flex w-full rounded-sm border border-gray-200 bg-white",
				"px-4 py-3 min-h-24",
				"font-body text-base text-gray-800",
				"placeholder:text-gray-600",
				"transition-all duration-fast",
				"focus:border-2 focus:border-multi-roxo focus:shadow-sm focus:outline-none",
				"disabled:cursor-not-allowed disabled:opacity-50",
				"aria-invalid:border-multi-vermelho",
				"resize-y",
				className,
			)}
			ref={ref}
			{...props}
		/>
	);
}

export { Textarea };
export type { TextareaProps };

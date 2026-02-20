"use client";

import { cn } from "@/lib/utils";
import * as LabelPrimitive from "@radix-ui/react-label";
import type { ComponentPropsWithRef } from "react";

type LabelProps = ComponentPropsWithRef<typeof LabelPrimitive.Root>;

function Label({ className, ref, ...props }: LabelProps) {
	return (
		<LabelPrimitive.Root
			ref={ref}
			className={cn(
				"font-body text-sm font-semibold text-gray-800",
				"peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
				className,
			)}
			{...props}
		/>
	);
}

export { Label };
export type { LabelProps };

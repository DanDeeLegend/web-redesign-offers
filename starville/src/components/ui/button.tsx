import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-azure-500 text-white shadow-[0_10px_30px_-10px_rgba(26,128,232,.8)] hover:bg-azure-600 hover:shadow-[0_14px_34px_-10px_rgba(26,128,232,.9)]",
  light: "bg-white text-navy-900 hover:bg-azure-50",
  ghost: "border border-white/30 text-white hover:border-white hover:bg-white/10",
  outline: "border border-navy-900/15 text-navy-900 hover:border-navy-900 hover:bg-navy-900 hover:text-white",
} as const;

const sizes = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-[15px]",
} as const;

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

export function ButtonLink({ variant = "primary", size = "md", className, ...props }: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "group/btn inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}

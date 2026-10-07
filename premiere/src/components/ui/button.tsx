import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const variants = {
  crimson: "bg-crimson-600 text-paper hover:bg-ink",
  ink: "bg-ink text-paper hover:bg-crimson-600",
  outline: "border border-ink text-ink hover:bg-ink hover:text-paper",
  "outline-light": "border border-paper/60 text-paper hover:bg-paper hover:text-ink",
  paper: "bg-paper text-ink hover:bg-gold-400",
} as const;

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: keyof typeof variants };

/** Square-cornered, editorial button: label left, arrow pushed right. */
export function ButtonLink({ variant = "crimson", className, ...props }: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "group/btn inline-flex h-13 items-center justify-between gap-6 px-6 font-mono text-[13px] font-semibold tracking-wider whitespace-nowrap uppercase transition-colors duration-300",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}

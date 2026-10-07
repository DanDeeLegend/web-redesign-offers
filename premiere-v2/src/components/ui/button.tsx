import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const variants = {
  navy: "bg-navy-900 text-white hover:bg-crimson-600",
  crimson: "bg-crimson-600 text-white hover:bg-navy-900",
  white: "bg-white text-navy-900 hover:bg-gold-400",
  outline: "border-2 border-white text-white hover:bg-white hover:text-crimson-700",
} as const;

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: keyof typeof variants; chevron?: boolean };

/** Solid block button: chevron + widely tracked capitals. */
export function ButtonLink({ variant = "navy", chevron = true, className, children, ...props }: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "group/btn inline-flex h-15 items-center gap-4 px-7 font-display text-[15px] font-extrabold tracking-[.2em] whitespace-nowrap uppercase transition-colors duration-300 [font-variation-settings:'wdth'_112]",
        variants[variant],
        className,
      )}
      {...props}
    >
      {chevron && <ChevronRight className="size-5 transition-transform group-hover/btn:translate-x-1" strokeWidth={3} aria-hidden />}
      {children}
    </Link>
  );
}

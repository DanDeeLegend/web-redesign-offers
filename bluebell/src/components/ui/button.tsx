import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const variants = {
  navy: "bg-navy text-cream hover:bg-navy-800 hover:shadow-[0_8px_24px_-8px_rgba(10,27,62,.6)]",
  sun: "bg-sun text-navy hover:bg-sun-deep",
  coral: "bg-coral text-white hover:bg-coral-deep",
  ghost: "bg-white/70 text-navy ring-2 ring-navy/10 hover:ring-navy/30 hover:bg-white",
} as const;

type Props = ComponentProps<typeof Link> & { variant?: keyof typeof variants; size?: "md" | "lg" };

/** Chunky rounded button with a gentle squish on press. */
export function Button({ variant = "navy", size = "md", className, ...props }: Props) {
  return (
    <Link
      className={cn(
        "group/btn inline-flex items-center justify-center gap-2 rounded-full font-display font-bold tracking-tight whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[.97]",
        size === "lg" ? "h-14 px-7 text-[17px]" : "h-12 px-5 text-[15px]",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}

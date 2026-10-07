import Image from "next/image";
import { cn } from "@/lib/utils";

/** Crest + wordmark. The crest file is a small crop from a screenshot: replace /img/logo-small.png with the original. */
export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span className="grid size-12 shrink-0 place-items-center rounded-full bg-white shadow-sm ring-1 ring-navy/10">
        <Image src="/img/logo-small.png" alt="" width={46} height={46} className="size-10 rounded-full" priority />
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("display text-[1.7rem]", light ? "text-cream" : "text-navy")}>Bluebell</span>
        <span className={cn("mt-0.5 text-[10.5px] font-extrabold tracking-[.14em] uppercase", light ? "text-cream/70" : "text-navy-600")}>
          Montessori International School
        </span>
      </span>
    </span>
  );
}

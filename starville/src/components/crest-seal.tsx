import Image from "next/image";
import { cn } from "@/lib/utils";

/** The school crest wrapped in slowly rotating ring text. */
export function CrestSeal({ className }: { className?: string }) {
  const text = "STARVILLE SCHOOL ✦ CHILDREN, GOD'S HERITAGE ✦ EST. 2007 ✦ ";
  return (
    <div className={cn("relative grid aspect-square place-items-center rounded-full bg-navy-900 shadow-2xl ring-1 ring-white/10", className)}>
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-spin-slow text-cream-300" aria-hidden="true">
        <defs>
          <path id="seal-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text className="fill-current font-brand text-[13.5px] font-semibold tracking-[.18em]">
          <textPath href="#seal-circle">{text}</textPath>
        </text>
      </svg>
      <Image src="/img/logo-crest.png" alt="" width={130} height={130} className="w-[52%] rounded-full" />
    </div>
  );
}

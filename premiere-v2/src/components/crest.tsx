import Image from "next/image";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/** The school crest, or a brand-coloured placeholder until `site.logo` is set. */
export function Crest({ className }: { className?: string }) {
  if (site.logo) {
    return <Image src={site.logo} alt="" width={96} height={96} priority className={cn("rounded-full", className)} />;
  }
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="31" fill="#fff" stroke="#141b42" strokeWidth="1.5" />
      <path d="M32 12c-8 0-14 6-14 13.5C18 35 32 50 32 50s14-15 14-24.5C46 18 40 12 32 12z" fill="#00a8e8" />
      <path d="M25 22l7 13 7-13" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 51c6 4 26 4 32 0" fill="none" stroke="#141b42" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

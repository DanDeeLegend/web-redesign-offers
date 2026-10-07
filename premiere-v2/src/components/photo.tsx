import Image from "next/image";
import { ImageIcon } from "lucide-react";
import type { Pic } from "@/lib/site";
import { cn } from "@/lib/utils";

const tones = {
  navy: "bg-[linear-gradient(150deg,#2e3a78_0%,#141b42_70%)] text-white/75",
  crimson: "bg-[linear-gradient(150deg,#c02a3c_0%,#6b1520_75%)] text-white/80",
  mist: "bg-[linear-gradient(150deg,#e9e9e5_0%,#d4d4cf_100%)] text-navy-900/60",
} as const;

/**
 * A real photo when `pic.image` is set, otherwise a branded placeholder that names the photo it needs.
 * To add a photo: put the file in /public/img and set `image` in src/lib/site.ts.
 */
export function Photo({
  pic,
  sizes,
  className,
  position,
  priority,
  tone = "navy",
}: {
  pic: Pic;
  sizes: string;
  className?: string;
  position?: string;
  priority?: boolean;
  tone?: keyof typeof tones;
}) {
  if (pic.image) {
    return (
      <div className={cn("relative overflow-hidden bg-mist", className)}>
        <Image src={pic.image} alt={pic.alt} fill sizes={sizes} priority={priority} className="object-cover" style={{ objectPosition: position }} />
      </div>
    );
  }
  return (
    <div role="img" aria-label={`Photo placeholder: ${pic.alt}`} className={cn("relative grid place-items-center overflow-hidden", tones[tone], className)}>
      <span className="mx-4 flex max-w-[85%] items-center gap-2 text-center text-xs font-semibold tracking-wide uppercase">
        <ImageIcon className="size-4 shrink-0" aria-hidden /> {pic.label}
      </span>
    </div>
  );
}

/**
 * Cut-out figure (a student photographed against a plain background, background removed),
 * shown standing on a crimson panel. Placeholder is a soft silhouette until a transparent PNG is supplied.
 */
export function Cutout({ pic, sizes, className }: { pic: Pic; sizes: string; className?: string }) {
  if (pic.image) {
    return (
      <div className={cn("relative", className)}>
        <Image src={pic.image} alt={pic.alt} fill sizes={sizes} className="object-contain object-bottom drop-shadow-[0_30px_30px_rgba(0,0,0,.35)]" />
      </div>
    );
  }
  return (
    <div role="img" aria-label={`Photo placeholder: ${pic.alt}`} className={cn("relative flex flex-col items-center justify-end", className)}>
      <svg viewBox="0 0 120 300" className="h-[88%] w-auto text-white/14" aria-hidden>
        <circle cx="60" cy="38" r="26" fill="currentColor" />
        <path d="M24 82c0-8 7-14 15-14h42c8 0 15 6 15 14l8 104c1 7-4 12-10 12h-6l-5 96H43l-5-96h-6c-6 0-11-5-10-12z" fill="currentColor" />
      </svg>
      <span className="absolute top-1/3 bg-white/15 px-3 py-1.5 text-center text-[11px] font-semibold tracking-wide text-white uppercase backdrop-blur">
        {pic.label}
      </span>
    </div>
  );
}

/** The angled "stage" a cut-out stands on. */
export function Pedestal({ className }: { className?: string }) {
  return <div aria-hidden className={cn("absolute bottom-0 bg-crimson-500 [clip-path:polygon(0_0,72%_0,100%_100%,0_100%)]", className)} />;
}

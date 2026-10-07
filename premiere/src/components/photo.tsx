import Image from "next/image";
import type { Pic } from "@/lib/site";
import { cn } from "@/lib/utils";

type PhotoProps = {
  pic: Pic;
  sizes: string;
  className?: string;
  position?: string;
  priority?: boolean;
  /** Duotone tint for the placeholder. */
  tone?: "ink" | "crimson";
};

/**
 * A real photo when `pic.image` is set, otherwise a halftone duotone placeholder,
 * styled like a printed photograph so the page still reads as finished.
 * To add a photo: put the file in /public/img and set `image` in src/lib/site.ts.
 */
export function Photo({ pic, sizes, className, position, priority, tone = "ink" }: PhotoProps) {
  if (pic.image) {
    return (
      <div className={cn("relative overflow-hidden bg-paper-deep", className)}>
        <Image src={pic.image} alt={pic.alt} fill sizes={sizes} priority={priority} className="object-cover" style={{ objectPosition: position }} />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Photo placeholder: ${pic.alt}`}
      className={cn("relative overflow-hidden", tone === "ink" ? "bg-ink" : "bg-crimson-700", className)}
    >
      <div className="halftone absolute inset-0" />
      <div
        className={cn(
          "absolute inset-0",
          tone === "ink"
            ? "bg-[linear-gradient(160deg,transparent_30%,rgba(0,168,232,.25)_100%)]"
            : "bg-[linear-gradient(160deg,transparent_30%,rgba(242,194,48,.25)_100%)]",
        )}
      />
      <span className="absolute bottom-3 left-3 max-w-[85%] bg-paper px-2 py-1 font-mono text-[10px] leading-tight tracking-wider text-ink uppercase">
        Photo · {pic.caption.replace(/\.$/, "")}
      </span>
    </div>
  );
}

/** Photo with a newspaper-style caption underneath. */
export function Figure({ caption, className, ...props }: PhotoProps & { caption?: string }) {
  return (
    <figure className={className}>
      <Photo {...props} />
      <figcaption className="mt-2 flex gap-2 border-t border-ink/20 pt-2 font-mono text-[11px] leading-snug text-ink/60">
        <span className="text-crimson-600">▲</span>
        {caption ?? props.pic.caption}
      </figcaption>
    </figure>
  );
}

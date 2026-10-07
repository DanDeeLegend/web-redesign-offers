import { Reveal } from "@/components/reveal";
import { Petal } from "@/components/doodles";
import { cn } from "@/lib/utils";

/** Pill label + headline + intro, shared by every section. */
export function SectionHead({
  label,
  title,
  intro,
  id,
  center = false,
  className,
}: {
  label: string;
  title: React.ReactNode;
  intro?: string;
  id: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={cn("mb-12 max-w-2xl sm:mb-16", center && "mx-auto text-center", className)}>
      <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-extrabold tracking-wide text-navy-600 uppercase shadow-sm ring-1 ring-navy/5">
        <Petal className="size-4 text-coral" /> {label}
      </span>
      <h2 id={id} className="display mt-5 text-[clamp(2.4rem,1.5rem+3.4vw,4.4rem)]">
        {title}
      </h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-navy-600">{intro}</p>}
    </Reveal>
  );
}

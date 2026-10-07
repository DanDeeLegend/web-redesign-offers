import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

/** "§ II ─── The Curriculum" chapter opener with a heavy rule, like a newspaper section front. */
export function ChapterHead({
  num,
  kicker,
  title,
  id,
  light = false,
  className,
}: {
  num: string;
  kicker: string;
  title: React.ReactNode;
  id: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={cn("mb-12 sm:mb-16", className)}>
      <div className={cn("flex items-center gap-4 border-t-4 pt-3 font-mono text-xs tracking-[.2em] uppercase", light ? "border-paper text-paper/70" : "border-ink text-ink/60")}>
        <span className={light ? "text-gold-400" : "text-crimson-600"}>§ {num}</span>
        <span className={cn("h-px flex-1", light ? "bg-paper/30" : "bg-ink/25")} />
        <span>{kicker}</span>
      </div>
      <h2 id={id} className={cn("mt-6 max-w-4xl font-display text-[clamp(2.4rem,1.4rem+3.6vw,4.8rem)] leading-[.98] font-bold tracking-[-.025em]", light ? "text-paper" : "text-ink")}>
        {title}
      </h2>
    </Reveal>
  );
}

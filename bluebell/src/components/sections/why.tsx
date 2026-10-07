import { Award, BookOpen, Flag, GraduationCap, ShieldCheck, Sparkles, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHead } from "@/components/section-head";
import { Petal } from "@/components/doodles";
import { why } from "@/lib/site";
import { cn } from "@/lib/utils";

const icons: Record<(typeof why)[number]["icon"], LucideIcon> = {
  book: BookOpen,
  teacher: GraduationCap,
  shield: ShieldCheck,
  award: Award,
  flag: Flag,
  sparkles: Sparkles,
};
const tints = { sky: "bg-sky", mint: "bg-mint", lilac: "bg-lilac", butter: "bg-butter", blush: "bg-blush", lime: "bg-lime" };
const iconColor = { sky: "text-bluebell", mint: "text-emerald-600", lilac: "text-violet-600", butter: "text-amber-600", blush: "text-coral", lime: "text-lime-700" };

export function Why() {
  return (
    <section aria-labelledby="why-title" className="relative bg-white py-28 sm:py-36">
      <div className="container-x">
        <SectionHead id="why-title" label="Why choose us" title={<>Why <span className="text-bluebell">Bluebell?</span></>} intro="Discover the qualities that make Bluebell a home for growing minds." center />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {why.map((w, i) => {
            const Icon = icons[w.icon];
            return (
              <li key={w.title} className={cn(i % 3 === 1 && "lg:translate-y-10")}>
                <Reveal delay={(i % 3) * 0.08} className={cn("group relative h-full overflow-hidden rounded-[32px] p-8 transition duration-500 hover:-translate-y-1.5 hover:-rotate-1", tints[w.tint])}>
                  <Petal className="absolute -top-10 -right-10 size-44 text-white/60 transition-transform duration-700 group-hover:rotate-45" />
                  <span className={cn("relative grid size-16 place-items-center rounded-2xl bg-white shadow-sm", iconColor[w.tint])}>
                    <Icon className="size-8" strokeWidth={1.8} aria-hidden />
                  </span>
                  <h3 className="display relative mt-8 text-2xl leading-tight">{w.title}</h3>
                  <p className="relative mt-3 text-lg leading-relaxed text-navy-600">{w.body}</p>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

import { ArrowRight, CalendarHeart, ClipboardPen, PartyPopper, PencilRuler } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHead } from "@/components/section-head";
import { Button } from "@/components/ui/button";
import { admissionSteps, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const icons = [CalendarHeart, ClipboardPen, PencilRuler, PartyPopper];
const tints = ["bg-sky", "bg-butter", "bg-mint", "bg-blush"];

export function Admissions() {
  return (
    <section id="admissions" aria-labelledby="admissions-title" className="bg-navy py-28 text-cream sm:py-36">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHead
            id="admissions-title"
            label="Admissions"
            title={<span className="text-cream">Four simple <span className="text-sun">steps</span> to Bluebell</span>}
            intro="Our admission process is straightforward and designed to ensure the best fit for your child."
            className="mb-0 sm:mb-0 [&_p]:text-cream/75"
          />
          <Button href={site.links.admissions} variant="sun" size="lg" className="shrink-0 self-start lg:self-auto">
            Begin admission process <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" aria-hidden />
          </Button>
        </div>

        <ol className="relative mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* connecting line */}
          <span aria-hidden className="absolute top-10 right-[25%] left-[3%] hidden border-t-4 border-dashed border-cream/20 lg:block" />
          {admissionSteps.map((s, i) => {
            const Icon = icons[i];
            return (
              <li key={s.title} className="relative">
                <Reveal delay={i * 0.1} className="flex h-full flex-col items-start">
                  <span className={cn("relative z-10 grid size-20 place-items-center rounded-full text-navy ring-8 ring-navy", tints[i])}>
                    <Icon className="size-9" strokeWidth={1.8} aria-hidden />
                    <span className="display absolute -top-1 -right-1 grid size-8 place-items-center rounded-full bg-coral text-sm text-white">{i + 1}</span>
                  </span>
                  <h3 className="display mt-6 text-2xl">{s.title}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-cream/75">{s.body}</p>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

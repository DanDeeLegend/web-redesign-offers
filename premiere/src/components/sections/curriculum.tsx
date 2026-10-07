"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Photo } from "@/components/photo";
import { useMediaQuery } from "@/components/use-media-query";
import { curriculum, site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * § II: the curriculum as a sideways-scrolling timetable.
 * Desktop: the section pins and vertical scroll drives the track horizontally.
 * Mobile / reduced motion: a native swipeable row with snap points.
 */
export function Curriculum() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const desktop = useMediaQuery("(min-width: 1024px)");
  const reduced = useReducedMotion();
  const pinned = desktop && !reduced;
  const [distance, setDistance] = useState(0);

  useLayoutEffect(() => {
    if (!pinned) return;
    const measure = () => {
      const track = trackRef.current;
      if (track) setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [pinned]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="curriculum"
      aria-labelledby="curriculum-title"
      className="relative bg-paper-deep"
      style={pinned ? { height: `calc(100vh + ${distance}px)` } : undefined}
    >
      <div className={cn(pinned && "sticky top-0 flex h-screen flex-col justify-center overflow-hidden")}>
        {/* Chapter rule + progress */}
        <div className="container-x w-full pt-16 lg:pt-20">
          <div className="flex items-center gap-4 border-t-4 border-ink pt-3 font-mono text-xs tracking-[.2em] text-ink/60 uppercase">
            <span className="text-crimson-600">§ II</span>
            <span className="relative h-px flex-1 bg-ink/25">
              {pinned && <motion.span style={{ width: progress }} className="absolute inset-y-[-1px] left-0 bg-crimson-600" />}
            </span>
            <span>The curriculum</span>
          </div>
        </div>

        <motion.div
          ref={trackRef}
          style={pinned ? { x } : undefined}
          className={cn(
            "flex w-max items-stretch gap-0 pt-10 pb-16",
            !pinned && "w-full snap-x snap-mandatory overflow-x-auto [scrollbar-width:thin]",
          )}
        >
          {/* Intro panel */}
          <div className="flex w-[86vw] shrink-0 snap-start flex-col justify-between pr-10 pl-4 sm:w-[520px] sm:pl-6 lg:w-[560px] lg:pl-[max(2.5rem,calc((100vw-1320px)/2+2.5rem))]">
            <div>
              <h2 id="curriculum-title" className="font-display text-[clamp(2.4rem,1.4rem+3.4vw,4.6rem)] leading-[.95] font-black tracking-[-.03em]">
                Tomorrow&rsquo;s skills, on <span className="text-crimson-600 italic">today&rsquo;s</span> timetable.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">{curriculum.intro}</p>
            </div>
            <div className="mt-10">
              <p className="font-mono text-[11px] tracking-[.2em] text-ink/55 uppercase">Comprehensive test prep</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {curriculum.testPrep.map((t) => (
                  <li key={t} className="border border-ink px-3 py-1.5 font-mono text-xs font-semibold">
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-6 hidden items-center gap-2 font-mono text-xs tracking-[.15em] text-ink/50 uppercase lg:flex">
                Keep scrolling <ArrowRight className="size-4 animate-pulse" aria-hidden />
              </p>
            </div>
          </div>

          {/* Subject panels */}
          {curriculum.subjects.map((s, i) => (
            <article key={s.title} className="group flex w-[78vw] shrink-0 snap-start flex-col border-l border-ink/25 px-6 sm:w-[340px] lg:w-[360px] lg:px-8">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-7xl leading-none font-black text-transparent [-webkit-text-stroke:1.5px_var(--color-ink)] transition-colors duration-500 group-hover:text-crimson-600 group-hover:[-webkit-text-stroke-color:var(--color-crimson-600)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[10px] tracking-[.2em] text-ink/50 uppercase">Period {i + 1}</span>
              </div>
              <Photo pic={s.pic} tone={i % 2 ? "crimson" : "ink"} sizes="360px" className="mt-6 aspect-[4/5] w-full transition-transform duration-700 group-hover:-rotate-1" />
              <h3 className="mt-5 font-display text-3xl font-bold">{s.title}</h3>
              <p className="mt-2 text-ink/70">{s.line}</p>
            </article>
          ))}

          {/* Closing panel: leadership */}
          <div className="flex w-[86vw] shrink-0 snap-start flex-col justify-between bg-crimson-600 p-8 text-paper sm:w-[420px] lg:mr-[max(2.5rem,calc((100vw-1320px)/2+2.5rem))] lg:p-10">
            <div>
              <p className="font-mono text-[11px] tracking-[.2em] text-gold-300 uppercase">Leadership development</p>
              <p className="mt-5 font-display text-4xl leading-[1.05] font-black">Empower your child to lead with confidence.</p>
              <p className="mt-5 text-paper/80">At our renowned co-education boarding school, leadership runs through every day.</p>
            </div>
            <ButtonLink href={site.links.enrol} variant="paper" className="mt-10">
              Enrol now <ArrowUpRight className="size-4" aria-hidden />
            </ButtonLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

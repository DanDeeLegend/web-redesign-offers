"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { ChapterHead } from "@/components/chapter-head";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { useMediaQuery } from "@/components/use-media-query";
import { why } from "@/lib/site";

/** § III: an editorial index. On desktop, hovering a row floats its photo beside the cursor. */
export function Why() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const finePointer = useMediaQuery("(hover: hover) and (pointer: fine)");
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 26 });
  const y = useSpring(my, { stiffness: 220, damping: 26 });

  const onMove = (e: React.MouseEvent) => {
    const box = ref.current?.getBoundingClientRect();
    if (!box) return;
    mx.set(e.clientX - box.left);
    my.set(e.clientY - box.top);
  };

  return (
    <section id="why" aria-labelledby="why-title" className="relative overflow-hidden bg-crimson-700 py-24 text-paper sm:py-32">
      <div className="container-x">
        <ChapterHead
          num="III"
          kicker="Why Premiere"
          id="why-title"
          light
          title={
            <>
              Why parents choose <span className="text-gold-400 italic">Premiere.</span>
            </>
          }
        />
        <Reveal className="-mt-4 mb-14 max-w-2xl text-lg leading-relaxed text-paper/75">{why.intro}</Reveal>

        <div ref={ref} onMouseMove={onMove} onMouseLeave={() => setActive(null)} className="relative">
          <ol className="border-t-2 border-paper">
            {why.reasons.map((r, i) => (
              <li key={r.title} onMouseEnter={() => setActive(i)} className="group relative border-b border-paper/30">
                {/* Ink wipe on hover */}
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-y-100" aria-hidden />
                <Reveal delay={i * 0.06} className="relative grid gap-3 py-8 sm:grid-cols-[5rem_1fr] sm:py-10 lg:grid-cols-[6rem_1.1fr_1fr] lg:items-baseline lg:gap-8 lg:px-4">
                  <span className="font-mono text-sm text-gold-400">0{i + 1}</span>
                  <h3 className="font-display text-[clamp(2rem,1.3rem+2.6vw,3.8rem)] leading-none font-black tracking-[-.02em] transition-transform duration-500 group-hover:translate-x-3">
                    {r.title}
                  </h3>
                  <p className="leading-relaxed text-paper/80 sm:col-start-2 lg:col-start-auto">{r.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>

          {/* Cursor-following photo (desktop only) */}
          {finePointer && (
            <motion.div style={{ x, y }} className="pointer-events-none absolute top-0 left-0 z-20 hidden lg:block">
              {/* Static wrapper holds the offset; Motion's own transform would override translate classes */}
              <div className="-translate-x-1/2 -translate-y-[115%]">
              <AnimatePresence mode="wait">
                {active !== null && (
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
                    animate={{ opacity: 1, scale: 1, rotate: -3 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                    className="shadow-2xl ring-4 ring-paper"
                  >
                    <Photo pic={why.reasons[active].pic} tone="ink" sizes="280px" className="aspect-[4/3] w-[280px]" />
                  </motion.div>
                )}
              </AnimatePresence>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

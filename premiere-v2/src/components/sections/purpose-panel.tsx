"use client";

import { motion, useTransform } from "motion/react";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { useScroller } from "@/components/horizontal-scroller";
import { purpose } from "@/lib/site";

const tones = ["navy", "crimson", "mist"] as const;

/** Panel 4: three photo columns drifting in opposite directions, then the purpose statement. */
export function PurposePanel() {
  const { progress, active } = useScroller();
  const up = useTransform(progress, [0, 1], [180, -420]);
  const down = useTransform(progress, [0, 1], [-420, 180]);

  return (
    <section id="purpose" aria-labelledby="purpose-title" className="relative flex shrink-0 flex-col h-mode:h-screen h-mode:flex-row">
      {/* Photo columns */}
      <div data-theme="dark" className="grid grid-cols-3 gap-3 overflow-hidden bg-white p-3 h-mode:h-full h-mode:w-[min(56vw,1000px)] h-mode:gap-3 h-mode:p-0 h-mode:pl-8">
        {purpose.columns.map((col, c) => (
          <motion.ul key={c} style={active ? { y: c === 1 ? down : up } : undefined} className="flex flex-col gap-3">
            {col.map((pic, i) => (
              <li key={pic.label}>
                <Photo pic={pic} tone={tones[(c + i) % 3]} sizes="320px" className="aspect-[4/5] w-full h-mode:aspect-auto h-mode:h-[44vh]" />
              </li>
            ))}
          </motion.ul>
        ))}
      </div>

      {/* Statement */}
      <div data-theme="light" className="flex items-center bg-mist px-5 py-20 sm:px-10 h-mode:w-[min(50vw,900px)] h-mode:py-0 h-mode:pr-[7vw] h-mode:pl-[6vw]">
        <Reveal>
          <p className="eyebrow text-crimson-600">{purpose.eyebrow}</p>
          <h2 id="purpose-title" className="headline mt-4 text-[clamp(2.8rem,1.6rem+4.4vw,6.4rem)] text-navy-900">
            {purpose.headline}
          </h2>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-navy-900/80">{purpose.body}</p>
        </Reveal>
      </div>
    </section>
  );
}

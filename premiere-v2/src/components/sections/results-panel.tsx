"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { Cutout, Pedestal } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { results } from "@/lib/site";

/** Panel 3: a cut-out student on a crimson stage, then the headline result with a "Read more" expander. */
export function ResultsPanel() {
  const [open, setOpen] = useState(false);
  const moreId = useId();

  return (
    <section id="results" aria-labelledby="results-title" className="relative flex shrink-0 flex-col h-mode:h-screen h-mode:flex-row">
      {/* Crimson stage with the cut-out */}
      <div data-theme="dark" className="relative h-[70vh] min-h-[460px] overflow-hidden bg-crimson-700 h-mode:h-full h-mode:w-[min(30vw,460px)]">
        <Pedestal className="left-0 h-[14%] w-full" />
        <Cutout pic={results.cutout} sizes="460px" className="absolute inset-x-0 bottom-[6%] h-[78%]" />
      </div>

      {/* Story */}
      <div data-theme="light" className="flex items-center bg-white px-5 py-20 sm:px-10 h-mode:w-[min(62vw,1040px)] h-mode:py-0 h-mode:pr-[6vw] h-mode:pl-[9vw]">
        <Reveal className="w-full">
          <p className="eyebrow text-crimson-600">{results.eyebrow}</p>
          <h2 id="results-title" className="headline mt-4 text-[clamp(3rem,1.6rem+5.6vw,7.4rem)] text-navy-900">
            {results.headline}
          </h2>
          <div className="mt-8 max-h-[34vh] max-w-3xl overflow-y-auto pr-6 text-xl leading-relaxed text-navy-900/80 [scrollbar-color:var(--color-navy-900)_transparent] [scrollbar-width:thin] h-mode:border-r-4 h-mode:border-navy-900/15">
            <p>{results.body}</p>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={moreId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  {results.more.map((p) => (
                    <p key={p} className="mt-5">
                      {p}
                    </p>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls={moreId}
            className="group mt-8 flex w-full max-w-3xl items-center justify-between border-t border-navy-900/15 pt-6 text-crimson-600"
          >
            <span className="eyebrow text-lg">{open ? "Read less" : "Read more"}</span>
            <Plus className={`size-8 transition-transform duration-300 ${open ? "rotate-45" : ""}`} strokeWidth={1.5} aria-hidden />
          </button>
        </Reveal>
      </div>
    </section>
  );
}

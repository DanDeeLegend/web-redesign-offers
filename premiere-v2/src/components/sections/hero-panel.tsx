"use client";

import { motion } from "motion/react";
import { Photo } from "@/components/photo";
import { hero, site } from "@/lib/site";

const ease = [0.2, 0.7, 0.2, 1] as const;

/** Panel 1: full-bleed video, the intro bottom-left, and one giant word rising from the bottom edge. */
export function HeroPanel() {
  const letters = hero.word.toUpperCase().split("");
  return (
    <section
      id="welcome"
      data-theme="dark"
      aria-label="Welcome to Premiere Academy"
      className="relative isolate h-[100svh] w-full shrink-0 overflow-hidden bg-navy-900 text-white h-mode:h-screen h-mode:w-screen"
    >
      {/* Background media */}
      <motion.div className="absolute inset-0 -z-20" initial={{ scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: 2.4, ease }}>
        {site.heroVideo ? (
          <video className="h-full w-full object-cover" src={site.heroVideo} autoPlay muted loop playsInline aria-hidden />
        ) : (
          <Photo pic={hero.media} sizes="100vw" priority tone="crimson" className="h-full w-full" />
        )}
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/70 via-black/10 to-black/30" />

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-6 px-5 sm:px-10 lg:flex-row lg:items-end lg:gap-[2.5vw] lg:pl-[6vw]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease }}
          className="max-w-md text-lg leading-snug font-semibold [text-shadow:0_2px_12px_rgba(0,0,0,.5)] sm:text-xl lg:mb-[3.4vw] lg:max-w-[21rem] lg:shrink-0 lg:text-right"
        >
          {hero.intro}
        </motion.p>
        <h1 className="headline -mb-[.12em] flex overflow-hidden text-[clamp(2.6rem,10.5vw,7rem)] leading-[.86] lg:text-[6.9vw]">
          <span className="sr-only">Education beyond academic excellence</span>
          {letters.map((ch, i) => (
            <motion.span
              key={i}
              aria-hidden
              className="inline-block"
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.75 + i * 0.05, ease }}
            >
              {ch}
            </motion.span>
          ))}
        </h1>
      </div>
    </section>
  );
}

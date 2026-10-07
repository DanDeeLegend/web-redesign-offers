"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Bluebell, CurlyArrow, Petal, Squiggle, Sun } from "@/components/doodles";
import { hero, site } from "@/lib/site";

const ease = [0.2, 0.7, 0.2, 1] as const;
// Resting tilt and offset for each position in the deck (top card first)
const slots = [
  { rotate: -3, x: 0, y: 0 },
  { rotate: 6, x: 34, y: 18 },
  { rotate: -9, x: -30, y: 30 },
  { rotate: 3, x: 8, y: 44 },
];

/** A stack of photo "stickers": the top one flicks to the back every few seconds, or on tap. */
function PhotoDeck() {
  const [order, setOrder] = useState(() => hero.deck.map((_, i) => i));
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const next = () => setOrder((o) => [...o.slice(1), o[0]]);

  useEffect(() => {
    if (paused || reduced) return;
    const id = window.setInterval(next, 4200);
    return () => window.clearInterval(id);
  }, [paused, reduced]);

  return (
    <div
      className="relative mx-auto aspect-[4/5] w-[min(78vw,420px)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {order
        .map((photoIndex, slot) => ({ photoIndex, slot }))
        .reverse()
        .map(({ photoIndex, slot }) => {
          const s = slots[slot];
          const p = hero.deck[photoIndex];
          return (
            <motion.figure
              key={p.src}
              className="absolute inset-0 overflow-hidden rounded-[32px] bg-white p-2.5 pb-14 shadow-[0_30px_60px_-28px_rgba(10,27,62,.55)]"
              initial={false}
              animate={{ rotate: s.rotate, x: s.x, y: s.y, scale: 1 - slot * 0.04, zIndex: 10 - slot }}
              transition={{ duration: 0.7, ease }}
              drag={slot === 0 ? "x" : false}
              dragSnapToOrigin
              onDragEnd={(_, info) => Math.abs(info.offset.x) > 80 && next()}
              style={{ cursor: slot === 0 ? "grab" : "default" }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[24px]">
                <Image src={p.src} alt={p.alt} fill priority={slot < 2} sizes="420px" className="pointer-events-none object-cover" />
              </div>
              <figcaption className="absolute inset-x-0 bottom-3 text-center font-hand text-2xl text-navy-600">{p.caption}</figcaption>
            </motion.figure>
          );
        })}

      <button
        type="button"
        onClick={next}
        className="absolute -bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full bg-navy px-4 py-2.5 text-sm font-bold text-cream shadow-lg transition hover:bg-coral"
      >
        <Shuffle className="size-4" aria-hidden /> Next photo
      </button>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-36 lg:pt-40 lg:pb-32">
      {/* Background shapes */}
      <div className="absolute -top-40 -right-40 -z-10 size-[620px] animate-blob bg-sun/45" aria-hidden />
      <div className="absolute -bottom-52 -left-40 -z-10 size-[520px] animate-blob bg-sky [animation-delay:-5s]" aria-hidden />
      <Petal className="absolute top-36 left-[46%] -z-10 size-16 animate-spin-slow text-coral/25" />

      <div className="container-x grid items-center gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-3 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-navy/5"
          >
            <Image src="/img/cambridge.png" alt="Cambridge Assessment International Education" width={220} height={39} className="h-6 w-auto" />
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="display mt-7 text-[clamp(3rem,1.6rem+5.6vw,6.2rem)] text-navy"
          >
            Education that{" "}
            <span className="relative inline-block text-bluebell">
              inspires
              <Squiggle className="absolute -bottom-2 left-0 h-4 w-full text-sun" />
            </span>{" "}
            <span className="relative inline-block">
              excellence
              <Bluebell className="absolute -top-8 -right-10 size-12 animate-sway text-bluebell sm:-right-14 sm:size-16" />
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="mt-7 max-w-xl text-xl leading-relaxed text-navy-600"
          >
            {hero.lead}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45, ease }} className="mt-9 flex flex-wrap gap-3">
            <Button href="#admissions" size="lg">
              Book a tour <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" aria-hidden />
            </Button>
            <Button href="#programmes" variant="sun" size="lg">
              Explore programmes
            </Button>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-10 flex flex-wrap items-center gap-5">
            <div className="flex -space-x-3">
              {["bg-sun", "bg-mint", "bg-blush", "bg-sky"].map((c, i) => (
                <span key={c} className={`grid size-11 place-items-center rounded-full ring-4 ring-cream ${c}`}>
                  <Petal className="size-5 text-navy/70" style={{ rotate: `${i * 20}deg` }} />
                </span>
              ))}
            </div>
            <p className="font-bold">
              Trusted by 100+ students
              <span className="block text-sm font-semibold text-navy-600">Preschool to Secondary · Since {site.founded}</span>
            </p>
          </motion.div>
        </div>

        <div className="relative">
          <Sun className="absolute -top-10 -left-4 z-0 size-20 animate-spin-slow text-sun-deep" />
          <motion.div initial={{ opacity: 0, scale: 0.9, rotate: 4 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, delay: 0.25, ease }}>
            <PhotoDeck />
          </motion.div>
          <div className="pointer-events-none absolute -bottom-2 left-0 hidden items-end gap-1 text-coral sm:flex lg:-left-10">
            <span className="mb-10 -rotate-6 font-hand text-[1.7rem] leading-none">swipe me!</span>
            <CurlyArrow className="size-16 -scale-x-100 rotate-12" />
          </div>
        </div>
      </div>

    </section>
  );
}

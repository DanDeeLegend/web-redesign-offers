"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type Photo = { src: string; alt: string; position?: string };

/**
 * Crossfades through a list of photos on a timer.
 * Works with any number of photos; a single photo simply stays put.
 * Pauses while hovered or focused, and doesn't auto-advance for reduced-motion users.
 */
export function PhotoShuffle({
  photos,
  interval = 4500,
  sizes,
  className,
}: {
  photos: readonly Photo[];
  interval?: number;
  sizes: string;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const count = photos.length;

  useEffect(() => {
    if (count < 2 || paused || reduced) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => window.clearInterval(id);
  }, [count, paused, reduced, interval]);

  const photo = photos[index];

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={photo.src}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <Image src={photo.src} alt={photo.alt} fill sizes={sizes} className="object-cover" style={{ objectPosition: photo.position }} />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-linear-to-t from-navy-950/45 via-transparent to-transparent" />

      {count > 1 && (
        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2" role="group" aria-label="Choose photo">
          {photos.map((p, i) => (
            <button
              key={p.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show photo ${i + 1} of ${count}`}
              aria-current={i === index}
              className="grid h-6 place-items-center px-0.5"
            >
              <span className={cn("block h-1.5 rounded-full bg-white transition-all duration-500", i === index ? "w-6 opacity-100" : "w-1.5 opacity-50")} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

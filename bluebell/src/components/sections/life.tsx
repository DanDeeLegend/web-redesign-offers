"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { SectionHead } from "@/components/section-head";
import { Button } from "@/components/ui/button";
import { gallery, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const tilts = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2", "rotate-1"];
const tapes = ["bg-sun/80", "bg-sky/90", "bg-blush/90", "bg-mint/90", "bg-lilac/90", "bg-butter/90"];

/** Polaroid wall with a lightbox (arrows, keyboard and swipe). */
export function Life() {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const step = useCallback((d: 1 | -1) => setIndex((i) => (i === null ? i : (i + d + gallery.length) % gallery.length)), []);

  useEffect(() => {
    if (!open) return;
    const on = (e: KeyboardEvent) => (e.key === "ArrowRight" ? step(1) : e.key === "ArrowLeft" ? step(-1) : null);
    window.addEventListener("keydown", on);
    return () => window.removeEventListener("keydown", on);
  }, [open, step]);

  const current = index !== null ? gallery[index] : null;

  return (
    <section id="life" aria-labelledby="life-title" className="relative bg-white py-28 sm:py-36">
      <div className="container-x">
        <SectionHead
          id="life-title"
          label="Gallery"
          title={<>Life at <span className="text-bluebell">Bluebell</span></>}
          intro="Beyond academics, our students learn teamwork, responsibility, leadership, and creativity through engaging activities and events."
          center
        />

        <ul className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-8 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <motion.li
              key={g.src}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
              className={cn("relative", tilts[i], i % 3 === 1 && "lg:translate-y-10")}
            >
              <span aria-hidden className={cn("absolute -top-3 left-1/2 z-10 h-7 w-24 -translate-x-1/2 rotate-[-4deg] shadow-sm", tapes[i])} />
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group block w-full rounded-md bg-white p-3 pb-4 text-left shadow-[0_20px_40px_-20px_rgba(10,27,62,.5)] ring-1 ring-navy/5 transition duration-300 hover:-translate-y-1 hover:rotate-0"
                aria-label={`Open photo: ${g.caption}`}
              >
                <span className="relative block aspect-[4/3] overflow-hidden rounded-sm bg-cream">
                  <Image src={g.src} alt={g.alt} fill sizes="(max-width: 1024px) 45vw, 380px" className="object-cover transition duration-700 group-hover:scale-105" />
                </span>
                <span className="mt-3 block text-center font-hand text-2xl text-navy-600 sm:text-[1.7rem]">{g.caption}</span>
              </button>
            </motion.li>
          ))}
        </ul>

        <div className="mt-20 text-center">
          <Button href={site.links.gallery} variant="sun" size="lg">
            View the full gallery <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" aria-hidden />
          </Button>
        </div>
      </div>

      <Dialog.Root open={open} onOpenChange={(o) => !o && setIndex(null)}>
        <AnimatePresence>
          {open && current && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild forceMount>
                <motion.div className="fixed inset-0 z-[60] bg-navy/85 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
              </Dialog.Overlay>
              <Dialog.Content asChild forceMount>
                <motion.div
                  className="fixed inset-0 z-[60] grid place-items-center p-4"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  onClick={(e) => e.target === e.currentTarget && setIndex(null)}
                >
                  <Dialog.Title className="sr-only">{current.caption}</Dialog.Title>
                  <Dialog.Description className="sr-only">{current.alt}</Dialog.Description>
                  <motion.figure
                    key={current.src}
                    drag="x"
                    dragSnapToOrigin
                    onDragEnd={(_, info) => (info.offset.x < -80 ? step(1) : info.offset.x > 80 ? step(-1) : null)}
                    initial={{ opacity: 0, rotate: -3 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    className="w-full max-w-4xl cursor-grab rounded-lg bg-white p-4 pb-6 shadow-2xl"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded">
                      <Image src={current.src} alt={current.alt} fill sizes="100vw" className="pointer-events-none object-cover" />
                    </div>
                    <figcaption className="mt-4 text-center font-hand text-3xl text-navy">
                      {current.caption} <span className="font-sans text-base text-navy-600">· {index! + 1} of {gallery.length}</span>
                    </figcaption>
                  </motion.figure>
                  <button onClick={() => step(-1)} className="absolute top-1/2 left-3 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white text-navy shadow-lg sm:left-8" aria-label="Previous photo">
                    <ChevronLeft className="size-6" aria-hidden />
                  </button>
                  <button onClick={() => step(1)} className="absolute top-1/2 right-3 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white text-navy shadow-lg sm:right-8" aria-label="Next photo">
                    <ChevronRight className="size-6" aria-hidden />
                  </button>
                  <Dialog.Close className="absolute top-4 right-4 grid size-12 place-items-center rounded-full bg-sun text-navy shadow-lg" aria-label="Close">
                    <X className="size-6" aria-hidden />
                  </Dialog.Close>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </section>
  );
}

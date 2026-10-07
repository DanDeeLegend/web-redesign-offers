"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Maximize2, Play, X } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Sparkle } from "@/components/icons";
import { gallery, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Life() {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + gallery.length) % gallery.length)),
    [],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  const current = index !== null ? gallery[index] : null;

  return (
    <section id="life" aria-labelledby="life-title" className="bg-white py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="mb-12 grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-4 flex items-center gap-2 text-xs font-bold tracking-[.2em] text-azure-600 uppercase">
              <Sparkle className="size-3" /> Life at Starville
            </p>
            <h2 id="life-title" className="font-display text-[clamp(2.2rem,1.5rem+2.6vw,3.6rem)] leading-[1.05] tracking-[-.02em]">
              A community that celebrates <em className="text-azure-600">every child.</em>
            </h2>
          </div>
          <p className="text-navy-900/65 md:max-w-md md:justify-self-end">
            Our community is filled with inspiring teachers, young future leaders and a culture that celebrates our cultural
            uniqueness while respecting and honouring our diversity.
          </p>
        </Reveal>

        <ul className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {gallery.map((g, i) => (
            <li key={g.src + i} className={cn("first:col-span-2 first:row-span-2", g.className)}>
              <Reveal delay={(i % 4) * 0.06} className="h-full">
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  className="group relative block h-full w-full overflow-hidden rounded-3xl bg-navy-50 text-left"
                  aria-label={`View photo: ${g.caption}`}
                >
                  <Image src={g.src} alt={g.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-linear-to-t from-navy-950/70 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />
                  <span className="absolute bottom-4 left-4 text-sm font-semibold text-white">{g.caption}</span>
                  <span className="absolute top-3 right-3 grid size-9 place-items-center rounded-full bg-white/90 text-navy-900 opacity-0 transition group-hover:opacity-100">
                    <Maximize2 className="size-4" aria-hidden />
                  </span>
                </button>
              </Reveal>
            </li>
          ))}

          {/* Tour tile */}
          <li className="col-span-2">
            <Reveal delay={0.2} className="h-full">
              <Link
                href={site.links.tour}
                className="group relative flex h-full items-center gap-5 overflow-hidden rounded-3xl bg-navy-900 p-6 text-white sm:p-8"
              >
                <div className="absolute inset-0 bg-[radial-gradient(500px_300px_at_100%_0%,rgba(26,128,232,.45),transparent_60%)]" />
                <span className="relative grid size-16 shrink-0 place-items-center rounded-full bg-azure-500 shadow-[0_0_0_10px_rgba(26,128,232,.2)] transition duration-500 group-hover:scale-110 group-hover:shadow-[0_0_0_16px_rgba(26,128,232,.15)]">
                  <Play className="ml-1 size-6 fill-current" aria-hidden />
                </span>
                <span className="relative">
                  <span className="block font-display text-2xl sm:text-3xl">Take a tour</span>
                  <span className="text-sm text-white/65">See our classrooms, corridors and play spaces</span>
                </span>
              </Link>
            </Reveal>
          </li>
        </ul>
      </div>

      {/* Lightbox */}
      <Dialog.Root open={open} onOpenChange={(o) => !o && setIndex(null)}>
        <AnimatePresence>
          {open && current && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild forceMount>
                <motion.div className="fixed inset-0 z-[60] bg-navy-950/90 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
              </Dialog.Overlay>
              <Dialog.Content asChild forceMount>
                <motion.div
                  className="fixed inset-0 z-[60] flex flex-col items-center justify-center p-4 sm:p-10"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  onClick={(e) => e.target === e.currentTarget && setIndex(null)}
                >
                  <Dialog.Title className="sr-only">{current.caption}</Dialog.Title>
                  <Dialog.Description className="sr-only">{current.alt}</Dialog.Description>
                  <div className="relative h-[70vh] w-full max-w-5xl">
                    <AnimatePresence mode="wait">
                      <motion.div key={current.src} className="absolute inset-0" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.25 }}>
                        <Image src={current.src} alt={current.alt} fill sizes="100vw" className="rounded-2xl object-contain" />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <p className="mt-5 text-white/80">
                    {current.caption} <span className="text-white/40">· {index! + 1} / {gallery.length}</span>
                  </p>

                  <button onClick={() => step(-1)} className="absolute top-1/2 left-3 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6" aria-label="Previous photo">
                    <ChevronLeft className="size-6" aria-hidden />
                  </button>
                  <button onClick={() => step(1)} className="absolute top-1/2 right-3 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6" aria-label="Next photo">
                    <ChevronRight className="size-6" aria-hidden />
                  </button>
                  <Dialog.Close className="absolute top-4 right-4 grid size-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20" aria-label="Close">
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

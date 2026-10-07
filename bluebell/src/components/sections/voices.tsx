"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Bluebell, Petal } from "@/components/doodles";
import { testimonials } from "@/lib/site";

/** Testimonials in a big speech bubble. Arrows appear automatically once there's more than one. */
export function Voices() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const many = testimonials.length > 1;
  return (
    <section aria-labelledby="voices-title" className="relative overflow-hidden py-28 sm:py-36">
      <div className="container-x">
        <h2 id="voices-title" className="sr-only">What parents are saying</h2>
        <Reveal className="relative mx-auto max-w-4xl">
          <Petal className="absolute -top-12 -left-6 size-24 animate-spin-slow text-sun" />
          <Bluebell className="absolute -right-4 -bottom-16 size-20 animate-sway text-bluebell" />
          <div className="relative rounded-[48px] bg-lilac px-8 pt-16 pb-12 text-center sm:px-16">
            <span className="display absolute top-2 left-1/2 -translate-x-1/2 text-[8rem] leading-none text-bluebell/25" aria-hidden>
              &ldquo;
            </span>
            <p className="font-hand text-2xl text-coral">What parents are saying</p>
            <AnimatePresence mode="wait">
              <motion.figure key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }}>
                <blockquote className="display mt-4 text-[clamp(1.7rem,1.2rem+1.8vw,2.8rem)] leading-tight font-semibold">{t.quote}</blockquote>
                <figcaption className="mt-8 flex items-center justify-center gap-4">
                  <Image src={t.photo} alt="" width={62} height={61} className="size-14 rounded-full object-cover ring-4 ring-white" />
                  <span className="text-left">
                    <span className="display block text-xl">{t.name}</span>
                    <span className="text-navy-600">{t.role}</span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
            {many && (
              <div className="mt-8 flex justify-center gap-3">
                <button onClick={() => setI((i - 1 + testimonials.length) % testimonials.length)} className="grid size-11 place-items-center rounded-full bg-white shadow" aria-label="Previous testimonial">
                  <ChevronLeft className="size-5" aria-hidden />
                </button>
                <button onClick={() => setI((i + 1) % testimonials.length)} className="grid size-11 place-items-center rounded-full bg-white shadow" aria-label="Next testimonial">
                  <ChevronRight className="size-5" aria-hidden />
                </button>
              </div>
            )}
            {/* speech-bubble tail */}
            <span aria-hidden className="absolute -bottom-6 left-[18%] size-12 rotate-45 rounded-md bg-lilac" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

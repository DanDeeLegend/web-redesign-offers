"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { ArrowUpRight, Compass, Target } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Sparkle } from "@/components/icons";
import { site } from "@/lib/site";

const text =
  "Welcome to Starville School, one of Nigeria's premier educational institutions, dedicated to child development and enriching extracurricular activities. We have thoughtfully created a learning community focused on the holistic growth of each child.";
const highlight = new Set(["Starville", "School,", "holistic", "growth", "each", "child."]);

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const accent = highlight.has(children);
  return (
    <span className="relative mr-[.25em] inline-block">
      <motion.span style={{ opacity }} className={accent ? "text-azure-600 italic" : undefined}>
        {children}
      </motion.span>
    </span>
  );
}

export function Statement() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");

  return (
    <section id="about" aria-labelledby="about-title" className="bg-paper py-24 sm:py-32">
      <div className="container-x">
        <p className="mb-8 flex items-center gap-2 text-xs font-bold tracking-[.2em] text-azure-600 uppercase">
          <Sparkle className="size-3" /> <span id="about-title">About our school</span>
        </p>
        <p ref={ref} className="max-w-5xl font-display text-[clamp(1.75rem,1.1rem+2.6vw,3.4rem)] leading-[1.18] tracking-[-.015em] text-navy-900">
          {words.map((w, i) => (
            <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
              {w}
            </Word>
          ))}
        </p>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          <Reveal className="rounded-[28px] bg-white p-8 shadow-[0_1px_2px_rgba(2,37,71,.06),0_12px_40px_-20px_rgba(2,37,71,.25)] sm:p-10">
            <span className="mb-6 grid size-12 place-items-center rounded-2xl bg-azure-50 text-azure-600">
              <Compass className="size-6" aria-hidden />
            </span>
            <h3 className="text-xs font-bold tracking-[.2em] text-navy-900/50 uppercase">Our vision</h3>
            <p className="mt-3 font-display text-xl leading-snug sm:text-2xl">
              To provide a well-rounded education that equips all learners with lifelong skills to face the challenges and demands of the 21st century and beyond.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-[28px] bg-navy-900 p-8 text-white sm:p-10">
            <span className="mb-6 grid size-12 place-items-center rounded-2xl bg-white/10 text-azure-300">
              <Target className="size-6" aria-hidden />
            </span>
            <h3 className="text-xs font-bold tracking-[.2em] text-cream-300 uppercase">Our mission</h3>
            <p className="mt-3 font-display text-xl leading-snug sm:text-2xl">
              To provide all learners with outstanding learning experiences through quality teaching and world-class facilities, where every child feels safe, happy and motivated to excel.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <Link href={site.links.about} className="group inline-flex items-center gap-2 font-semibold text-azure-600">
            <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
              More about Starville
            </span>
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

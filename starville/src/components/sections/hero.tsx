"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Starfield } from "@/components/starfield";
import { CrestSeal } from "@/components/crest-seal";
import { Sparkle } from "@/components/icons";
import { site } from "@/lib/site";

const ease = [0.2, 0.7, 0.2, 1] as const;

function Arch({
  src,
  alt,
  position,
  className,
  delay,
  priority = false,
}: {
  src: string;
  alt: string;
  position: string;
  className: string;
  delay: number;
  priority?: boolean;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 40, clipPath: "inset(100% 0 0 0 round 999px 999px 28px 28px)" }}
      animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0 round 999px 999px 28px 28px)" }}
      transition={{ duration: 1.1, delay, ease }}
      className={`absolute overflow-hidden rounded-t-full rounded-b-[28px] bg-navy-800 shadow-[0_40px_80px_-30px_rgba(0,0,0,.7)] ring-1 ring-white/15 ${className}`}
    >
      <Image src={src} alt={alt} fill priority={priority} sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" style={{ objectPosition: position }} />
      <div className="absolute inset-0 bg-linear-to-t from-navy-950/40 to-transparent" />
    </motion.figure>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const words = ["Welcoming", "you"];

  return (
    <section ref={ref} className="grain relative isolate overflow-hidden bg-navy-900 text-white">
      {/* Sky */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_700px_at_85%_-10%,rgba(26,128,232,.35),transparent_60%),radial-gradient(900px_600px_at_-10%_110%,rgba(26,128,232,.18),transparent_60%)]" />
      <Starfield className="-z-10" />

      <div className="container-x grid min-h-[100svh] items-center gap-12 pt-32 pb-28 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pt-28">
        {/* Copy */}
        <div className="relative z-10 max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-7 inline-flex items-center gap-2 rounded-full bg-white/[.07] py-1.5 pr-4 pl-1.5 text-xs font-medium text-white/85 ring-1 ring-white/15 backdrop-blur"
          >
            <span className="rounded-full bg-cream-300 px-2.5 py-1 text-[11px] font-bold tracking-wider text-navy-900 uppercase">Est. {site.founded}</span>
            {site.motto}
          </motion.p>

          <h1 className="font-display text-[clamp(3.2rem,2rem+5.5vw,6.6rem)] leading-[.95] font-normal tracking-[-.03em]">
            {words.map((w, i) => (
              <span key={w} className="mr-[.22em] inline-block overflow-hidden pb-[.08em] align-bottom">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
            <span className="relative inline-block align-bottom">
              <span className="inline-block overflow-hidden pb-[.08em] align-bottom">
                <motion.em
                  className="inline-block pr-2 text-azure-400 italic"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.42, ease }}
                >
                  home.
                </motion.em>
              </span>
              <motion.span
                aria-hidden
                initial={{ opacity: 0, scale: 0, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 1, ease }}
                className="absolute top-[.02em] -right-[.3em]"
              >
                <Sparkle className="size-[.3em] text-cream-300" />
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
            className="mt-7 max-w-md text-lg leading-relaxed text-white/75"
          >
            A Christian, Cambridge International School in Jahi, Abuja, where every child is known, cared for and inspired to
            shine, from Crèche to Secondary.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href={site.links.enrol} size="lg">
              Start your application
              <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" aria-hidden />
            </ButtonLink>
            <ButtonLink href="#admissions" size="lg" variant="ghost">
              Book a school visit
            </ButtonLink>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60"
          >
            <li className="flex items-center gap-2"><Sparkle className="size-3 text-azure-400" />Crèche to Secondary</li>
            <li className="flex items-center gap-2"><Sparkle className="size-3 text-azure-400" />Cambridge International School</li>
            <li className="flex items-center gap-2"><MapPin className="size-3.5 text-azure-400" aria-hidden />Jahi, Abuja</li>
          </motion.ul>
        </div>

        {/* Arched photo collage */}
        <div className="relative mx-auto aspect-[1/1.02] w-full max-w-[560px] lg:max-w-none">
          <motion.div style={{ y: ySlow }} className="absolute inset-0">
            <Arch src="/img/early-years.jpg" alt="An Early Years pupil absorbed in a craft activity" position="30% 55%" className="top-[14%] left-0 h-[62%] w-[34%]" delay={0.35} priority />
          </motion.div>
          <motion.div style={{ y: yFast }} className="absolute inset-0">
            <Arch src="/img/secondary.jpg" alt="A secondary student conducting a science experiment" position="62% 40%" className="top-0 left-[33%] h-[80%] w-[38%]" delay={0.2} priority />
          </motion.div>
          <motion.div style={{ y: ySlow }} className="absolute inset-0">
            <Arch src="/img/primary.jpg" alt="Primary pupils playing hopscotch" position="50% 8%" className="top-[24%] right-0 h-[62%] w-[31%]" delay={0.5} priority />
          </motion.div>

          {/* Floating seal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.9, ease }}
            className="absolute bottom-[2%] left-[22%] z-10 w-[24%] min-w-[96px]"
          >
            <CrestSeal />
          </motion.div>

          {/* Floating promise chip */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease }}
            className="absolute right-[2%] bottom-[6%] z-10 animate-float"
          >
            <div className="flex items-center gap-3 rounded-2xl bg-white/95 p-3 pr-5 text-navy-900 shadow-2xl">
              <span className="grid size-10 place-items-center rounded-xl bg-azure-50 text-azure-600">
                <ShieldCheck className="size-5" aria-hidden />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-bold">Safe. Valued. Protected.</span>
                <span className="text-xs text-navy-900/60">Safeguarding comes first</span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Curved horizon into the next section */}
      <svg className="absolute inset-x-0 -bottom-px h-10 w-full text-white sm:h-16" viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden>
        <path d="M0 64V40C240 8 480 0 720 0s480 8 720 40v24z" fill="currentColor" />
      </svg>
    </section>
  );
}

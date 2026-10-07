"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHead } from "@/components/section-head";
import { Button } from "@/components/ui/button";
import { Bluebell, Sun } from "@/components/doodles";
import { programmes, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const tints = { butter: "bg-butter", sky: "bg-sky", blush: "bg-blush" } as const;

/** The three stages as stops along a winding path that draws itself as you scroll. */
export function Programmes() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.6"] });
  const draw = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="programmes" aria-labelledby="programmes-title" className="relative overflow-hidden py-28 sm:py-36">
      <div className="container-x">
        <SectionHead
          id="programmes-title"
          label="Grade levels"
          title={<>Our academic <span className="text-bluebell">journey</span></>}
          intro="Our curriculum evolves with your child, ensuring a seamless and enriching educational journey."
          center
        />

        <div ref={ref} className="relative">
          {/* The path (desktop) */}
          <svg viewBox="0 0 1200 420" preserveAspectRatio="none" className="absolute inset-x-0 top-6 hidden h-[420px] w-full lg:block" aria-hidden>
            <path d="M40 330 C 220 330, 260 80, 420 90 S 640 330, 800 320 S 1020 70, 1170 80" fill="none" stroke="var(--color-navy)" strokeOpacity=".12" strokeWidth="6" strokeLinecap="round" strokeDasharray="2 16" />
            <motion.path
              d="M40 330 C 220 330, 260 80, 420 90 S 640 330, 800 320 S 1020 70, 1170 80"
              fill="none"
              stroke="var(--color-coral)"
              strokeWidth="6"
              strokeLinecap="round"
              style={{ pathLength: draw }}
            />
          </svg>
          <Bluebell className="absolute -top-6 right-0 hidden size-16 animate-sway text-bluebell lg:block" />

          <ol className="relative grid gap-10 lg:grid-cols-3 lg:gap-8">
            {programmes.map((p, i) => (
              <li key={p.title} className={cn(i === 1 && "lg:mt-36", i === 2 && "lg:-mt-6", i === 0 && "lg:mt-20")}>
                <Reveal delay={i * 0.12} className={cn("group rounded-[36px] p-3 shadow-[0_24px_50px_-30px_rgba(10,27,62,.45)] transition duration-500 hover:-translate-y-2", tints[p.tint])}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[28px]">
                    <Image src={p.pic.src} alt={p.pic.alt} fill sizes="(max-width: 1024px) 90vw, 380px" className="object-cover transition duration-700 group-hover:scale-105" style={{ objectPosition: "position" in p.pic ? p.pic.position : undefined }} />
                    <span className="absolute top-3 left-3 grid size-12 place-items-center rounded-full bg-white display text-xl shadow">{i + 1}</span>
                  </div>
                  <div className="px-4 pt-5 pb-4">
                    <span className="rounded-full bg-white px-3 py-1 text-sm font-extrabold">{p.ages}</span>
                    <h3 className="display mt-3 text-3xl">{p.title}</h3>
                    <p className="mt-2 text-navy-600">{p.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        {/* Call to action */}
        <Reveal className="relative mt-24 overflow-hidden rounded-[40px] bg-sun p-8 sm:p-12">
          <Sun className="absolute -top-10 -right-8 size-44 animate-spin-slow text-sun-deep" />
          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <h3 className="display text-[clamp(2rem,1.4rem+2vw,3.2rem)]">Ready to begin your child&rsquo;s journey?</h3>
              <p className="mt-3 max-w-xl text-lg text-navy-800">A supportive learning environment where children grow with confidence and purpose.</p>
            </div>
            <Button href={site.links.admissions} size="lg" className="shrink-0">
              Explore our programmes <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" aria-hidden />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

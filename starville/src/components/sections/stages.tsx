"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Tabs from "@radix-ui/react-tabs";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Starfield } from "@/components/starfield";
import { Sparkle } from "@/components/icons";
import { stages } from "@/lib/site";

const ease = [0.2, 0.7, 0.2, 1] as const;

export function Stages() {
  const [active, setActive] = useState<string>(stages[0].id);

  return (
    <section id="stages" aria-labelledby="stages-title" className="grain relative isolate overflow-hidden bg-navy-900 py-24 text-white sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_500px_at_100%_0%,rgba(26,128,232,.25),transparent_60%)]" />
      <Starfield className="-z-10 opacity-60" density={0.00008} />

      <div className="container-x">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-4 flex items-center gap-2 text-xs font-bold tracking-[.2em] text-cream-300 uppercase">
            <Sparkle className="size-3" /> Academics
          </p>
          <h2 id="stages-title" className="font-display text-[clamp(2.2rem,1.5rem+2.6vw,3.6rem)] leading-[1.05] tracking-[-.02em]">
            One journey, from first steps to <em className="text-azure-400">final exams.</em>
          </h2>
        </Reveal>

        <Tabs.Root value={active} onValueChange={setActive} orientation="vertical" className="grid items-stretch gap-6 lg:grid-cols-[.9fr_1.1fr] lg:gap-10">
          <Tabs.List aria-label="School stages" className="flex flex-col gap-3">
            {stages.map((s) => (
              <Tabs.Trigger
                key={s.id}
                value={s.id}
                className="group relative overflow-hidden rounded-3xl p-6 text-left ring-1 ring-white/10 transition-colors duration-300 hover:bg-white/[.04] data-[state=active]:bg-white data-[state=active]:text-navy-900 data-[state=active]:ring-white sm:p-7"
              >
                <div className="flex items-start gap-5">
                  <span className="font-display text-sm text-white/40 group-data-[state=active]:text-azure-600">{s.number}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-brand text-2xl font-semibold tracking-wide text-azure-300 group-data-[state=active]:text-navy-900 sm:text-3xl">
                        {s.title}
                      </span>
                      <span className="grid size-10 shrink-0 place-items-center rounded-full ring-1 ring-white/20 transition group-data-[state=active]:bg-azure-500 group-data-[state=active]:text-white group-data-[state=active]:ring-azure-500">
                        <ArrowRight className="size-4" aria-hidden />
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-white/55 group-data-[state=active]:text-navy-900/60">{s.tag}</p>
                    <p className="mt-3 hidden text-navy-900/75 group-data-[state=active]:block">{s.blurb}</p>
                  </div>
                </div>
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          <div className="relative min-h-[460px] overflow-hidden rounded-[32px] bg-navy-800 sm:min-h-[560px]">
            {stages.map((s) => (
              <Tabs.Content key={s.id} value={s.id} forceMount className="data-[state=inactive]:hidden" tabIndex={-1}>
                <AnimatePresence mode="wait">
                  {active === s.id && (
                    <motion.div key={s.id} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
                      <motion.div className="absolute inset-0" initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.2, ease }}>
                        <Image src={s.image} alt={s.alt} fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" style={{ objectPosition: s.position }} />
                      </motion.div>
                      <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-navy-950/30 to-transparent" />
                      <motion.div
                        className="absolute inset-x-0 bottom-0 p-7 sm:p-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15, ease }}
                      >
                        <p className="max-w-lg text-lg leading-relaxed text-white/85">{s.body}</p>
                        <Link
                          href={s.href}
                          className="group/l mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy-900 transition hover:bg-azure-50"
                        >
                          Explore {s.title}
                          <ArrowRight className="size-4 transition-transform group-hover/l:translate-x-0.5" aria-hidden />
                        </Link>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Tabs.Content>
            ))}
          </div>
        </Tabs.Root>
      </div>
    </section>
  );
}

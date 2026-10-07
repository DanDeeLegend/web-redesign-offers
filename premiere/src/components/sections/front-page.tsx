"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Phone, Play } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Figure } from "@/components/photo";
import { chapters, frontPage, site } from "@/lib/site";

const ease = [0.2, 0.7, 0.2, 1] as const;

/** The homepage as a newspaper front page: headline, contents, lead photo and the vision as the lead story. */
export function FrontPage() {
  return (
    <section aria-labelledby="headline" className="newsprint bg-paper pb-20 sm:pb-28">
      <div className="container-x">
        {/* Headline */}
        <div className="border-b border-ink/25 py-8 sm:py-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-5 flex items-center gap-3 font-mono text-xs tracking-[.2em] text-crimson-600 uppercase"
          >
            <span className="relative flex size-2.5">
              <span className="absolute inset-0 animate-ping-slow rounded-full bg-crimson-500" />
              <span className="relative size-2.5 rounded-full bg-crimson-600" />
            </span>
            Front page · Admissions open {site.session}
          </motion.p>
          <h1 id="headline" className="font-display text-[clamp(3rem,1.2rem+7.4vw,9.2rem)] leading-[.9] font-black tracking-[-.04em] text-ink">
            <span className="block overflow-hidden pb-[.05em]">
              <motion.span className="block" initial={{ y: "102%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.1, ease }}>
                Education beyond
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[.08em]">
              <motion.span className="block text-crimson-600 italic" initial={{ y: "102%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.22, ease }}>
                academic excellence.
              </motion.span>
            </span>
          </h1>
        </div>

        {/* Three-column front page */}
        <div className="grid gap-10 pt-8 lg:grid-cols-12 lg:gap-0">
          {/* Lead photo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease }}
            className="relative lg:order-2 lg:col-span-6 lg:border-x lg:border-ink/20 lg:px-8"
          >
            <Figure pic={frontPage.lead} sizes="(max-width: 1024px) 100vw, 50vw" priority className="w-full [&>div]:aspect-[4/3]" tone="ink" />
            {/* Rubber stamp */}
            <motion.div
              initial={{ opacity: 0, scale: 1.6, rotate: -24 }}
              animate={{ opacity: 1, scale: 1, rotate: -9 }}
              transition={{ duration: 0.5, delay: 1.1, ease: [0.3, 1.4, 0.5, 1] }}
              className="absolute -top-5 right-2 border-[3px] border-double border-crimson-600 bg-paper/90 px-4 py-2 text-center font-mono text-crimson-600 uppercase shadow-sm sm:right-4 lg:right-2"
            >
              <span className="block text-[10px] tracking-[.25em]">Admissions</span>
              <span className="block font-display text-2xl leading-none font-black tracking-tight normal-case">Now open</span>
              <span className="block text-[10px] tracking-[.25em]">{site.session}</span>
            </motion.div>
          </motion.div>

          {/* Lead story: the vision */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease }}
            className="flex flex-col lg:order-3 lg:col-span-3 lg:pl-8"
          >
            <p className="font-mono text-[11px] tracking-[.2em] text-ink/55 uppercase">Our vision</p>
            <p className="dropcap mt-3 text-lg leading-relaxed text-ink/85">{frontPage.vision}</p>
            <div className="mt-8 grid gap-3">
              <ButtonLink href={site.links.enrol}>
                Enrol your child <ArrowUpRight className="size-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" aria-hidden />
              </ButtonLink>
              <ButtonLink href={site.links.tour} variant="outline">
                Virtual tour <Play className="size-4 fill-current" aria-hidden />
              </ButtonLink>
            </div>
            <a href={site.phones[0].href} className="mt-6 flex items-center gap-3 border-t border-ink/20 pt-4 hover:text-crimson-600">
              <Phone className="size-4 text-crimson-600" aria-hidden />
              <span>
                <span className="block font-mono text-[10px] tracking-[.2em] text-ink/55 uppercase">Admissions desk</span>
                <span className="font-bold">{site.phones[0].label}</span>
              </span>
            </a>
          </motion.article>

          {/* Contents */}
          <motion.nav
            aria-label="In this edition"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75, ease }}
            className="lg:order-1 lg:col-span-3 lg:pr-8"
          >
            <p className="border-b-2 border-ink pb-2 font-mono text-[11px] tracking-[.2em] uppercase">In this edition</p>
            <ol>
              {chapters.map((c) => (
                <li key={c.href} className="border-b border-ink/15">
                  <Link href={c.href} className="group flex items-baseline gap-3 py-3.5">
                    <span className="w-7 shrink-0 font-mono text-xs text-crimson-600">{c.num}</span>
                    <span className="font-display text-lg font-bold transition-colors group-hover:text-crimson-600">{c.label}</span>
                    <span className="mb-1 flex-1 border-b border-dotted border-ink/30" />
                    <ArrowUpRight className="size-4 shrink-0 text-ink/40 transition group-hover:text-crimson-600" aria-hidden />
                  </Link>
                </li>
              ))}
            </ol>
          </motion.nav>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { Crest } from "@/components/crest";
import { ButtonLink } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/icons";
import { chapters, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const noop = () => () => {};

/** Today's date, rendered on the client only (the static HTML can't know it). */
function useToday() {
  return useSyncExternalStore(
    noop,
    () => new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" }),
    () => "",
  );
}

function Ticker() {
  const items = [
    ["Admissions", `The ${site.session} session is now open`],
    ["Results", "92% credit pass in WAEC 2025"],
    ["Boarding", "A renowned co-education boarding school"],
    ["Future skills", "Robotics, AI, coding and 3-D printing on the timetable"],
  ];
  const row = (
    <span className="flex shrink-0 items-center">
      {items.map(([k, v]) => (
        <span key={k} className="flex items-center gap-3 pr-12">
          <span className="bg-gold-400 px-1.5 py-0.5 text-[10px] font-semibold text-ink">{k}</span>
          <span>{v}</span>
          <span className="text-crimson-400">✦</span>
        </span>
      ))}
    </span>
  );
  return (
    <div className="flex items-stretch overflow-hidden bg-ink font-mono text-xs tracking-wide text-paper uppercase">
      <span className="z-10 flex shrink-0 items-center bg-crimson-600 px-4 font-semibold">Latest</span>
      <div className="relative flex-1 overflow-hidden">
        <div className="flex w-max animate-ticker py-2.5 pl-6 hover:[animation-play-state:paused]">
          {row}
          <span aria-hidden className="flex">{row}</span>
        </div>
      </div>
    </div>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="flex h-11 items-center gap-2 border border-ink px-4 font-mono text-xs font-semibold tracking-wider uppercase lg:hidden">
        <Menu className="size-4" aria-hidden /> Contents
      </Dialog.Trigger>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Content asChild forceMount>
              <motion.div
                className="newsprint fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-paper p-5"
                initial={{ clipPath: "inset(0 0 100% 0)" }}
                animate={{ clipPath: "inset(0 0 0% 0)" }}
                exit={{ clipPath: "inset(0 0 100% 0)" }}
                transition={{ duration: 0.5, ease: [0.7, 0, 0.2, 1] }}
              >
                <div className="flex items-center justify-between border-b-4 border-ink pb-4">
                  <span className="font-mono text-xs tracking-[.2em] uppercase">In this edition</span>
                  <Dialog.Close className="grid size-11 place-items-center border border-ink" aria-label="Close contents">
                    <X className="size-5" aria-hidden />
                  </Dialog.Close>
                </div>
                <Dialog.Title className="sr-only">Contents</Dialog.Title>
                <Dialog.Description className="sr-only">Jump to a section of the Premiere Academy homepage</Dialog.Description>
                <nav aria-label="Mobile">
                  <ol>
                    {chapters.map((c, i) => (
                      <motion.li
                        key={c.href}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 + i * 0.05 }}
                        className="border-b border-ink/20"
                      >
                        <Link href={c.href} onClick={() => setOpen(false)} className="flex items-baseline gap-4 py-4">
                          <span className="w-12 shrink-0 font-mono text-xs whitespace-nowrap text-crimson-600">§ {c.num}</span>
                          <span className="font-display text-3xl font-bold">{c.label}</span>
                        </Link>
                      </motion.li>
                    ))}
                  </ol>
                </nav>
                <div className="mt-auto grid gap-3 pt-10">
                  <ButtonLink href={site.links.enrol} onClick={() => setOpen(false)}>
                    Enrol now <ArrowUpRight className="size-4" aria-hidden />
                  </ButtonLink>
                  <ButtonLink href={site.whatsapp} variant="outline">
                    Chat on WhatsApp <WhatsappIcon className="size-4" />
                  </ButtonLink>
                  <a href={site.phones[0].href} className="flex items-center gap-2 pt-2 font-mono text-sm">
                    <Phone className="size-4 text-crimson-600" aria-hidden /> {site.phones[0].label}
                  </a>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}

export function SiteHeader() {
  const today = useToday();
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 340);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Ticker />

      <header className="newsprint bg-paper">
        <div className="container-x">
          {/* Dateline */}
          <div className="flex items-center justify-between gap-4 border-b border-ink/25 py-2.5 font-mono text-[11px] tracking-wider text-ink/70 uppercase">
            <span className="min-w-0 truncate">{today || site.city}</span>
            <span className="hidden sm:block">Co-education boarding school</span>
            <a href={site.phones[0].href} className="hidden items-center gap-1.5 hover:text-crimson-600 md:flex">
              <Phone className="size-3" aria-hidden /> {site.phones[0].label}
            </a>
          </div>

          {/* Nameplate */}
          <div className="flex flex-col items-center py-6 text-center sm:py-8">
            <Link href="/" className="flex items-center gap-3 sm:gap-5" aria-label={`${site.name}, home`}>
              <Crest className="size-12 shrink-0 sm:size-16 lg:size-20" />
              <span className="font-display text-[clamp(2.1rem,1rem+5vw,5.6rem)] leading-none font-black tracking-[-.03em] text-ink">
                Premiere Academy
              </span>
            </Link>
            <p className="mt-3 flex w-full max-w-xl items-center gap-4 font-display text-base text-crimson-600 italic sm:text-lg">
              <span className="h-px flex-1 bg-ink/30" />
              {site.tagline}
              <span className="h-px flex-1 bg-ink/30" />
            </p>
          </div>

          {/* Chapter navigation */}
          <div className="flex items-stretch justify-between gap-3 border-y-[3px] border-double border-ink py-1.5">
            <nav aria-label="Main" className="hidden lg:block">
              <ul className="flex items-stretch">
                {chapters.map((c) => (
                  <li key={c.href} className="border-r border-ink/20 last:border-r-0">
                    <Link href={c.href} className="group flex h-full items-baseline gap-2 px-4 py-2.5 transition-colors hover:bg-ink hover:text-paper xl:px-5">
                      <span className="font-mono text-[10px] text-crimson-600 group-hover:text-gold-400">§ {c.num}</span>
                      <span className="text-[15px] font-bold">{c.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <MobileMenu />
            <ButtonLink href={site.links.enrol} className="h-11">
              Enrol now <ArrowUpRight className="size-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" aria-hidden />
            </ButtonLink>
          </div>
        </div>
      </header>

      {/* Compact bar once the masthead has scrolled away */}
      <AnimatePresence>
        {compact && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
            className="newsprint fixed inset-x-0 top-0 z-50 border-b-2 border-ink bg-paper/95 backdrop-blur"
          >
            <div className="container-x flex h-16 items-center gap-6">
              <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label={`${site.name}, home`}>
                <Crest className="size-9" />
                <span className="font-display text-xl font-black tracking-tight">Premiere Academy</span>
              </Link>
              <nav aria-label="Sections" className={cn("ml-auto hidden lg:block")}>
                <ul className="flex">
                  {chapters.map((c) => (
                    <li key={c.href}>
                      <Link href={c.href} className="px-3 py-2 text-sm font-bold hover:text-crimson-600">
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="ml-auto flex items-center gap-2 lg:ml-0">
                <MobileMenu />
                <ButtonLink href={site.links.enrol} className="hidden h-11 sm:inline-flex">
                  Enrol <ArrowUpRight className="size-4" aria-hidden />
                </ButtonLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

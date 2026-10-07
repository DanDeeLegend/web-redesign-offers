"use client";

import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, LogIn, Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Petal } from "@/components/doodles";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center gap-4 rounded-[28px] px-3 py-2.5 transition-all duration-500 sm:px-4",
          scrolled ? "bg-white/90 shadow-[0_14px_40px_-18px_rgba(10,27,62,.35)] ring-1 ring-navy/5 backdrop-blur-xl" : "bg-transparent",
        )}
      >
        <a href="#top" aria-label={`${site.fullName}, home`}>
          <Logo />
        </a>

        <nav aria-label="Main" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="group relative block rounded-full px-3.5 py-2 font-bold text-navy/80 transition-colors hover:text-navy">
                  {n.label}
                  <Petal className="absolute -top-0.5 left-1/2 size-3 -translate-x-1/2 scale-0 text-coral transition-transform duration-300 group-hover:scale-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-2">
          <a href={site.links.eskool} className="hidden items-center gap-1.5 rounded-full px-3 py-2 text-sm font-bold text-bluebell hover:bg-bluebell/10 xl:flex">
            <LogIn className="size-4" aria-hidden /> EsKool
          </a>
          <Button href={site.links.admissions} variant="coral" className="hidden sm:inline-flex">
            Enrol now <ArrowUpRight className="size-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" aria-hidden />
          </Button>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger className="grid size-12 place-items-center rounded-full bg-navy text-cream lg:hidden" aria-label="Open menu">
              <Menu className="size-5" aria-hidden />
            </Dialog.Trigger>
            <AnimatePresence>
              {open && (
                <Dialog.Portal forceMount>
                  <Dialog.Overlay asChild forceMount>
                    <motion.div className="fixed inset-0 z-50 bg-navy/40 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
                  </Dialog.Overlay>
                  <Dialog.Content asChild forceMount>
                    <motion.div
                      className="fixed inset-x-2 bottom-2 z-50 max-h-[90dvh] overflow-y-auto rounded-[32px] bg-cream p-6 shadow-2xl"
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "110%" }}
                      transition={{ type: "spring", damping: 28, stiffness: 260 }}
                    >
                      <div className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-navy/15" aria-hidden />
                      <div className="flex items-center justify-between">
                        <Logo />
                        <Dialog.Close className="grid size-11 place-items-center rounded-full bg-white ring-1 ring-navy/10" aria-label="Close menu">
                          <X className="size-5" aria-hidden />
                        </Dialog.Close>
                      </div>
                      <Dialog.Title className="sr-only">Menu</Dialog.Title>
                      <Dialog.Description className="sr-only">Navigate the Bluebell homepage</Dialog.Description>
                      <ul className="mt-6 grid grid-cols-2 gap-2">
                        {nav.map((n, i) => (
                          <motion.li key={n.href} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + i * 0.04 }}>
                            <a
                              href={n.href}
                              onClick={() => setOpen(false)}
                              className={cn(
                                "display block rounded-2xl px-4 py-5 text-xl",
                                ["bg-sky", "bg-mint", "bg-lilac", "bg-butter", "bg-blush", "bg-lime"][i % 6],
                              )}
                            >
                              {n.label}
                            </a>
                          </motion.li>
                        ))}
                      </ul>
                      <div className="mt-5 grid gap-2">
                        <Button href={site.links.admissions} variant="coral" size="lg" onClick={() => setOpen(false)}>
                          Enrol now
                        </Button>
                        <Button href={site.links.eskool} variant="ghost" size="lg">
                          <LogIn className="size-4" aria-hidden /> EsKool portal
                        </Button>
                        <a href={site.phone.href} className="mt-2 flex items-center justify-center gap-2 font-bold">
                          <Phone className="size-4 text-coral" aria-hidden /> {site.phone.label}
                        </a>
                      </div>
                    </motion.div>
                  </Dialog.Content>
                </Dialog.Portal>
              )}
            </AnimatePresence>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}

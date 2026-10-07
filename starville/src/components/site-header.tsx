"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { nav, site, stages } from "@/lib/site";
import { cn } from "@/lib/utils";

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Starville School, home">
      <Image
        src="/img/logo-crest.png"
        alt=""
        width={130}
        height={130}
        priority
        className={cn("rounded-full ring-2 ring-white/15 transition-all duration-300", compact ? "size-11" : "size-12")}
      />
      <span className="flex flex-col font-brand leading-none uppercase">
        <span className="text-[19px] font-bold tracking-[.08em] text-azure-400">Starville</span>
        <span className="text-[13px] font-semibold tracking-[.32em] text-white">School</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center gap-6 rounded-full py-2 pr-2 pl-3 transition-all duration-500 sm:pl-4",
          scrolled
            ? "bg-navy-900/85 shadow-[0_20px_50px_-20px_rgba(1,21,42,.7)] ring-1 ring-white/10 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <Brand compact={scrolled} />

        {/* Desktop navigation */}
        <NavigationMenu.Root className="relative ml-auto hidden lg:block" delayDuration={80}>
          <NavigationMenu.List className="flex items-center gap-1">
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="group flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white data-[state=open]:bg-white/10 data-[state=open]:text-white">
                Academics
                <ChevronDown className="size-3.5 transition-transform duration-300 group-data-[state=open]:rotate-180" aria-hidden />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="absolute top-0 left-0 w-[640px] p-3">
                <ul className="grid grid-cols-3 gap-3">
                  {stages.map((s) => (
                    <li key={s.id}>
                      <NavigationMenu.Link asChild>
                        <Link href={s.href} className="group/card block overflow-hidden rounded-2xl bg-navy-50 transition hover:bg-azure-50">
                          <div className="relative h-32 overflow-hidden">
                            <Image
                              src={s.image}
                              alt=""
                              fill
                              sizes="200px"
                              className="object-cover transition duration-700 group-hover/card:scale-105"
                              style={{ objectPosition: s.position }}
                            />
                          </div>
                          <div className="p-4">
                            <p className="font-brand text-lg font-semibold text-navy-900">{s.title}</p>
                            <p className="text-xs text-navy-900/60">{s.tag}</p>
                          </div>
                        </Link>
                      </NavigationMenu.Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            {nav.map((item) => (
              <NavigationMenu.Item key={item.label}>
                <NavigationMenu.Link asChild>
                  <Link href={item.href} className="block rounded-full px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white">
                    {item.label}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>

          <div className="absolute top-full right-0 left-0 flex justify-center perspective-[2000px]">
            <NavigationMenu.Viewport className="relative mt-3 shrink-0 h-(--radix-navigation-menu-viewport-height) w-(--radix-navigation-menu-viewport-width) origin-top overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_-20px_rgba(1,21,42,.5)] transition-[width,height] duration-300" />
          </div>
        </NavigationMenu.Root>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <ButtonLink href={site.links.enrol} className="hidden sm:inline-flex">
            Enrol Now
            <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-0.5" aria-hidden />
          </ButtonLink>

          {/* Mobile navigation */}
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger
              className="grid size-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/15 backdrop-blur transition hover:bg-white/20 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" aria-hidden />
            </Dialog.Trigger>
            <AnimatePresence>
              {open && (
                <Dialog.Portal forceMount>
                  <Dialog.Overlay asChild forceMount>
                    <motion.div
                      className="fixed inset-0 z-50 bg-navy-950/60 backdrop-blur-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  </Dialog.Overlay>
                  <Dialog.Content asChild forceMount>
                    <motion.div
                      className="fixed inset-2 z-50 flex flex-col overflow-y-auto rounded-[28px] bg-navy-900 p-5 text-white shadow-2xl"
                      initial={{ opacity: 0, y: -16, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -16, scale: 0.98 }}
                      transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
                    >
                      <div className="flex items-center justify-between">
                        <Brand />
                        <Dialog.Close className="grid size-11 place-items-center rounded-full bg-white/10" aria-label="Close menu">
                          <X className="size-5" aria-hidden />
                        </Dialog.Close>
                      </div>
                      <Dialog.Title className="sr-only">Site menu</Dialog.Title>
                      <Dialog.Description className="sr-only">Navigate Starville School</Dialog.Description>

                      <p className="mt-8 mb-3 text-xs font-semibold tracking-[.2em] text-cream-300 uppercase">Academics</p>
                      <div className="grid grid-cols-3 gap-2">
                        {stages.map((s, i) => (
                          <motion.div key={s.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + i * 0.05 }}>
                            <Link href={s.href} onClick={() => setOpen(false)} className="block overflow-hidden rounded-2xl bg-white/5">
                              <div className="relative aspect-square">
                                <Image src={s.image} alt="" fill sizes="33vw" className="object-cover" style={{ objectPosition: s.position }} />
                              </div>
                              <p className="px-2 py-2 text-center font-brand text-sm font-semibold">{s.title}</p>
                            </Link>
                          </motion.div>
                        ))}
                      </div>

                      <nav aria-label="Mobile" className="mt-6">
                        <ul>
                          {nav.map((item, i) => (
                            <motion.li
                              key={item.label}
                              initial={{ opacity: 0, x: -12 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 + i * 0.05 }}
                              className="border-b border-white/10"
                            >
                              <Link
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="flex items-center justify-between py-4 font-display text-2xl"
                              >
                                {item.label}
                                <ArrowRight className="size-5 text-azure-400" aria-hidden />
                              </Link>
                            </motion.li>
                          ))}
                        </ul>
                      </nav>

                      <div className="mt-auto grid gap-3 pt-8">
                        <ButtonLink href={site.links.enrol} size="lg" onClick={() => setOpen(false)}>
                          Enrol Now <ArrowRight className="size-4" aria-hidden />
                        </ButtonLink>
                        <ButtonLink href={site.phones[0].href} variant="ghost" size="lg">
                          <Phone className="size-4" aria-hidden /> {site.phones[0].label}
                        </ButtonLink>
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

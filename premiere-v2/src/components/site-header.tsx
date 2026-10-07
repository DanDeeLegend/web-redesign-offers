"use client";

import { useEffect, useMemo, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Mail, MapPin, Phone, Search, X } from "lucide-react";
import { Crest } from "@/components/crest";
import { ButtonLink } from "@/components/ui/button";
import { FacebookIcon, InstagramIcon, LinkedinIcon, WhatsappIcon, XIcon, YoutubeIcon } from "@/components/icons";
import { facts, menu, news, offer, site, utilityLinks, why } from "@/lib/site";
import { cn } from "@/lib/utils";

type Tone = "light" | "dark";

/**
 * Which background is behind a point of the header? Panels declare `data-theme="dark"` (white text on top)
 * or `data-theme="light"` (crimson text on top). Logo and links are checked separately, so each can change
 * colour on its own as panels slide underneath.
 */
function useToneAt(xFrom: "left" | "right", inset: number): Tone {
  const [tone, setTone] = useState<Tone>("dark");
  useEffect(() => {
    let frame = 0;
    const check = () => {
      frame = 0;
      const x = xFrom === "left" ? inset : window.innerWidth - inset;
      const hit = document.elementsFromPoint(x, 60).find((el) => el instanceof HTMLElement && el.dataset.theme);
      setTone(((hit as HTMLElement | undefined)?.dataset.theme as Tone) ?? "light");
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    check();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [xFrom, inset]);
  return tone;
}

const socials = [
  { href: site.socials.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: site.socials.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: site.socials.x, label: "X", Icon: XIcon },
  { href: site.socials.youtube, label: "YouTube", Icon: YoutubeIcon },
  { href: site.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
];

/** Full-screen search over everything on the homepage. */
function SearchDialog({ tone }: { tone: Tone }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const index = useMemo(
    () => [
      ...menu.map((m) => ({ title: m.label, kind: "Section", href: m.href })),
      ...offer.map((o) => ({ title: o.title, kind: "What we offer", href: "#offer", text: o.body })),
      ...why.map((w) => ({ title: w.title, kind: "Why Premiere", href: "#why", text: w.body })),
      ...facts.map((f) => ({ title: `${f.value.toLocaleString("en-GB")}${f.suffix} ${f.label}`, kind: "The facts", href: "#facts" })),
      ...news.map((n) => ({ title: n.title, kind: "News", href: "#news", text: n.excerpt })),
      { title: "Contact the admissions office", kind: "Contact", href: "#contact", text: `${site.phones[0].label} ${site.email}` },
    ],
    [],
  );
  const results = q.trim()
    ? index.filter((i) => `${i.title} ${"text" in i ? i.text : ""}`.toLowerCase().includes(q.trim().toLowerCase()))
    : index.slice(0, menu.length);

  return (
    <Dialog.Root open={open} onOpenChange={(o) => (setOpen(o), o || setQ(""))}>
      <Dialog.Trigger aria-label="Search" className={cn("grid size-11 place-items-center transition-colors", tone === "dark" ? "text-white hover:text-gold-400" : "text-crimson-600 hover:text-navy-900")}>
        <Search className="size-6" strokeWidth={2.5} aria-hidden />
      </Dialog.Trigger>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Content asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[70] overflow-y-auto bg-white"
              >
                <div className="mx-auto max-w-4xl px-5 pt-10 pb-20 sm:px-8 sm:pt-16">
                  <div className="flex items-center justify-between">
                    <Dialog.Title className="eyebrow text-crimson-600">Search Premiere Academy</Dialog.Title>
                    <Dialog.Close className="grid size-12 place-items-center bg-navy-900 text-white" aria-label="Close search">
                      <X className="size-6" aria-hidden />
                    </Dialog.Close>
                  </div>
                  <Dialog.Description className="sr-only">Search this page</Dialog.Description>
                  <label className="mt-8 flex items-center gap-4 border-b-4 border-navy-900 pb-3">
                    <Search className="size-8 shrink-0 text-crimson-600" aria-hidden />
                    <span className="sr-only">Search</span>
                    <input
                      autoFocus
                      value={q}
                      onChange={(e) => setQ(e.target.value)}
                      placeholder="Try “boarding” or “WAEC”"
                      className="headline w-full bg-transparent text-3xl outline-none placeholder:text-navy-900/25 sm:text-5xl"
                    />
                  </label>
                  <ul className="mt-8 divide-y divide-navy-900/10" aria-live="polite">
                    {results.length === 0 && <li className="py-6 text-lg text-navy-900/60">No matches. Try another word, or call us on {site.phones[0].label}.</li>}
                    {results.map((r) => (
                      <li key={r.kind + r.title}>
                        <Dialog.Close asChild>
                          <a href={r.href} className="group flex items-center justify-between gap-6 py-5">
                            <span>
                              <span className="eyebrow block text-xs text-crimson-600">{r.kind}</span>
                              <span className="mt-1 block text-xl font-semibold group-hover:text-crimson-600 sm:text-2xl">{r.title}</span>
                            </span>
                            <ArrowRight className="size-6 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden />
                          </a>
                        </Dialog.Close>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}

/** Full-screen crimson menu. */
function MenuDialog({ tone }: { tone: Tone }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className={cn("flex items-center gap-3 transition-colors", tone === "dark" ? "text-white hover:text-gold-400" : "text-crimson-600 hover:text-navy-900")}>
        <span className="eyebrow hidden sm:block">Menu</span>
        <span className="flex w-9 flex-col gap-[5px]" aria-hidden>
          <span className="h-[5px] rounded-full bg-current" />
          <span className="h-[5px] rounded-full bg-current" />
          <span className="h-[5px] rounded-full bg-current" />
        </span>
        <span className="sr-only sm:hidden">Open menu</span>
      </Dialog.Trigger>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Content asChild forceMount>
              <motion.div
                initial={{ clipPath: "inset(0 0 0 100%)" }}
                animate={{ clipPath: "inset(0 0 0 0%)" }}
                exit={{ clipPath: "inset(0 0 0 100%)" }}
                transition={{ duration: 0.6, ease: [0.7, 0, 0.2, 1] }}
                className="fixed inset-0 z-[70] overflow-y-auto bg-crimson-600 text-white"
              >
                <div className="mx-auto grid min-h-full max-w-[1500px] gap-12 px-5 py-8 sm:px-10 lg:grid-cols-[1.4fr_1fr] lg:px-16 lg:py-12">
                  <div>
                    <div className="flex items-center justify-between lg:justify-start">
                      <a href="#welcome" onClick={() => setOpen(false)} className="flex items-center gap-3">
                        <Crest className="size-12" />
                        <span className="font-serif text-2xl sm:text-3xl">Premiere Academy</span>
                      </a>
                      <Dialog.Close className="grid size-12 place-items-center bg-white text-crimson-600 lg:hidden" aria-label="Close menu">
                        <X className="size-6" aria-hidden />
                      </Dialog.Close>
                    </div>
                    <Dialog.Title className="sr-only">Menu</Dialog.Title>
                    <Dialog.Description className="sr-only">Navigate the Premiere Academy homepage</Dialog.Description>
                    <nav aria-label="Main" className="mt-12">
                      <ul>
                        {menu.map((m, i) => (
                          <motion.li
                            key={m.href}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.25 + i * 0.04, duration: 0.5 }}
                          >
                            <a href={m.href} onClick={() => setOpen(false)} className="headline group flex items-center gap-4 py-1.5 text-[clamp(2rem,1.2rem+3vw,4.2rem)] transition-colors hover:text-gold-400">
                              {m.label}
                              <ArrowRight className="size-[.6em] -translate-x-3 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" strokeWidth={3} aria-hidden />
                            </a>
                          </motion.li>
                        ))}
                      </ul>
                    </nav>
                  </div>

                  <div className="flex flex-col lg:border-l lg:border-white/25 lg:pl-12">
                    <Dialog.Close className="ml-auto hidden size-14 place-items-center bg-white text-crimson-600 transition hover:bg-gold-400 lg:grid" aria-label="Close menu">
                      <X className="size-7" aria-hidden />
                    </Dialog.Close>
                    <div className="mt-auto space-y-8 pt-6">
                      <div className="grid gap-3">
                        <ButtonLink href={site.links.enrol} variant="white" onClick={() => setOpen(false)}>
                          Enrol now
                        </ButtonLink>
                        <ButtonLink href={site.whatsapp} variant="outline" chevron={false}>
                          <WhatsappIcon className="size-5" /> Chat on WhatsApp
                        </ButtonLink>
                      </div>
                      <address className="space-y-3 text-lg not-italic">
                        {site.phones.map((p) => (
                          <a key={p.href} href={p.href} className="flex items-center gap-3 hover:text-gold-400">
                            <Phone className="size-5" aria-hidden /> {p.label}
                          </a>
                        ))}
                        <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-gold-400">
                          <Mail className="size-5" aria-hidden /> {site.email}
                        </a>
                        <a href={site.mapsUrl} target="_blank" rel="noopener" className="flex items-center gap-3 hover:text-gold-400">
                          <MapPin className="size-5" aria-hidden /> {site.address}
                        </a>
                      </address>
                      <ul className="flex gap-2">
                        {socials.map(({ href, label, Icon }) => (
                          <li key={label}>
                            <a href={href} aria-label={`Premiere Academy on ${label}`} className="grid size-11 place-items-center border-2 border-white/40 transition hover:border-white hover:bg-white hover:text-crimson-600">
                              <Icon className="size-4" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
  const leftTone = useToneAt("left", 140);
  const rightTone = useToneAt("right", 160);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto flex max-w-[1700px] items-center justify-between gap-6 px-5 py-3 transition-colors duration-300 sm:px-10 lg:bg-transparent lg:px-[7vw] lg:pt-12 lg:pb-0 lg:shadow-none lg:backdrop-blur-none",
          // Phones/tablets: solid bar over light sections so the header never sits on top of body text
          leftTone === "light" && "pointer-events-auto bg-white/95 shadow-sm backdrop-blur",
        )}
      >
        <a
          href="#welcome"
          aria-label={`${site.name}, home`}
          className={cn("pointer-events-auto flex items-center gap-3 transition-colors duration-300", leftTone === "dark" ? "text-white" : "text-crimson-600")}
        >
          <Crest className="size-11 shrink-0 sm:size-14" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-[1.55rem] sm:text-[2.2rem]">Premiere Academy</span>
            <span className="mt-1 hidden font-serif text-sm italic opacity-80 sm:block">{site.tagline}</span>
          </span>
        </a>

        <div className={cn("pointer-events-auto flex items-center gap-2 transition-colors duration-300 sm:gap-5", rightTone === "dark" ? "text-white" : "text-crimson-600")}>
          <nav aria-label="Quick links" className="hidden xl:block">
            <ul className="flex items-center gap-5">
              {utilityLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={cn("eyebrow transition-colors", rightTone === "dark" ? "hover:text-gold-400" : "hover:text-navy-900")}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <SearchDialog tone={rightTone} />
          <MenuDialog tone={rightTone} />
        </div>
      </div>
    </header>
  );
}

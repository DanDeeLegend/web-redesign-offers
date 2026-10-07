import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { FacebookIcon, InstagramIcon, Sparkle, XIcon } from "@/components/icons";
import { Starfield } from "@/components/starfield";
import { CurrentYear } from "@/components/current-year";
import { site, stages } from "@/lib/site";

const socials = [
  { href: site.socials.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: site.socials.x, label: "X", Icon: XIcon },
  { href: site.socials.instagram, label: "Instagram", Icon: InstagramIcon },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="grain relative isolate overflow-hidden bg-navy-950 text-white/70">
      <Starfield className="-z-10 opacity-50" density={0.00007} />

      <div className="container-x pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3" aria-label="Starville School, home">
              <Image src="/img/logo-crest.png" alt="" width={130} height={130} className="size-16 rounded-full" />
              <span className="flex flex-col font-brand leading-none uppercase">
                <span className="text-2xl font-bold tracking-[.08em] text-azure-400">Starville</span>
                <span className="text-sm font-semibold tracking-[.32em] text-white">School</span>
              </span>
            </Link>
            <p className="mt-6 font-display text-xl text-white italic">&ldquo;{site.motto}.&rdquo;</p>
            <ul className="mt-6 flex gap-2">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a href={href} aria-label={`Starville School on ${label}`} className="grid size-10 place-items-center rounded-full ring-1 ring-white/15 transition hover:bg-azure-500 hover:ring-azure-500">
                    <Icon className="size-4 text-white" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-5 text-xs font-bold tracking-[.2em] text-cream-300 uppercase">Visit us</h2>
            <address className="leading-relaxed not-italic">
              {site.address.map((l) => (
                <span key={l} className="block">{l}</span>
              ))}
            </address>
            <a href={site.mapsUrl} target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-1.5 font-semibold text-azure-300 hover:text-white">
              Get directions <ArrowUpRight className="size-4" aria-hidden />
            </a>
            <p className="mt-6 text-sm">{site.hours}</p>
          </div>

          <div>
            <h2 className="mb-5 text-xs font-bold tracking-[.2em] text-cream-300 uppercase">Enquiries</h2>
            <ul className="space-y-4">
              {site.emails.map((e) => (
                <li key={e.value}>
                  <span className="block text-xs text-white/45">{e.label}</span>
                  <a href={`mailto:${e.value}`} className="break-all text-white/85 hover:text-white hover:underline">{e.value}</a>
                </li>
              ))}
              {site.phones.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="text-white/85 hover:text-white hover:underline">{p.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-5 text-xs font-bold tracking-[.2em] text-cream-300 uppercase">Explore</h2>
            <ul className="space-y-3">
              {stages.map((s) => (
                <li key={s.id}><Link href={s.href} className="hover:text-white">{s.title}</Link></li>
              ))}
              <li><Link href={site.links.about} className="hover:text-white">About us</Link></li>
              <li><Link href="#admissions" className="hover:text-white">Admissions</Link></li>
              <li><Link href={site.links.enrol} className="hover:text-white">Admission enquiry</Link></li>
            </ul>
          </div>
        </div>

        {/* Oversized wordmark */}
        <p aria-hidden className="mt-20 flex items-center justify-center gap-[2vw] font-brand text-[13.5vw] leading-none font-bold tracking-[.04em] text-transparent select-none [-webkit-text-stroke:1px_rgba(124,184,245,.35)]">
          STARVILLE
          <Sparkle className="size-[4vw] shrink-0 text-azure-500/50" />
        </p>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row">
          <p>&copy; <CurrentYear fallback={2026} /> Starville School. All rights reserved.</p>
          <a href="#top" className="inline-flex items-center gap-1.5 hover:text-white">
            Back to top <ArrowUp className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}

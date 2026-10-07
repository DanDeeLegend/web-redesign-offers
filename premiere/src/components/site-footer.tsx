import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Crest } from "@/components/crest";
import { CurrentYear } from "@/components/current-year";
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon, YoutubeIcon } from "@/components/icons";
import { chapters, site } from "@/lib/site";

const socials = [
  { href: site.socials.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: site.socials.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: site.socials.x, label: "X", Icon: XIcon },
  { href: site.socials.youtube, label: "YouTube", Icon: YoutubeIcon },
  { href: site.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
];

/** The back page: colophon, contacts and an oversized nameplate. */
export function SiteFooter() {
  return (
    <footer id="contact" className="overflow-hidden bg-ink text-paper/70">
      <div className="container-x pt-16">
        <div className="grid gap-10 border-t-4 border-paper pt-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2 lg:pr-12">
            <p className="font-mono text-[11px] tracking-[.2em] text-gold-400 uppercase">Colophon</p>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-paper/80">
              Published by Premiere Academy, an international co-education boarding school in Lugbe, Abuja, shaping students through critical thinking, high achievement, ethical principles and discipline.
            </p>
            <ul className="mt-6 flex gap-2">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a href={href} aria-label={`Premiere Academy on ${label}`} className="grid size-10 place-items-center border border-paper/30 transition-colors hover:border-gold-400 hover:bg-gold-400 hover:text-ink">
                    <Icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-[11px] tracking-[.2em] text-gold-400 uppercase">Sections</p>
            <ul className="mt-4 space-y-2">
              {chapters.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="flex gap-3 hover:text-paper">
                    <span className="w-6 font-mono text-xs text-paper/40">{c.num}</span> {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[11px] tracking-[.2em] text-gold-400 uppercase">Contact</p>
            <address className="mt-4 space-y-2 not-italic">
              {site.phones.map((p) => (
                <a key={p.href} href={p.href} className="block hover:text-paper">{p.label}</a>
              ))}
              <a href={`mailto:${site.email}`} className="block [overflow-wrap:anywhere] hover:text-paper">{site.email}</a>
              <a href={site.mapsUrl} target="_blank" rel="noopener" className="block hover:text-paper">{site.address}</a>
            </address>
          </div>
        </div>

        {/* Oversized nameplate */}
        <div className="mt-16 flex items-center gap-[2vw] border-y-[3px] border-double border-paper/40 py-4" aria-hidden>
          <Crest className="size-[8vw] max-w-28 shrink-0" />
          <p className="font-display text-[clamp(2.4rem,8.4vw,8.8rem)] leading-none font-black tracking-[-.04em] whitespace-nowrap text-paper">
            Premiere Academy
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-6 font-mono text-[11px] tracking-wider text-paper/45 uppercase sm:flex-row">
          <p>
            © <CurrentYear fallback={2026} /> Premiere Academy · {site.tagline}
          </p>
          <a href="#top" className="inline-flex items-center gap-1.5 hover:text-paper">
            Back to the front page <ArrowUp className="size-3.5" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}

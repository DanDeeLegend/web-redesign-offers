import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { CurrentYear } from "@/components/current-year";
import { Petal } from "@/components/doodles";
import { FacebookIcon, InstagramIcon, WhatsappIcon } from "@/components/icons";
import { footerBlurb, nav, site } from "@/lib/site";

const socials = [
  { href: site.socials.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: site.whatsapp, label: "WhatsApp", Icon: WhatsappIcon },
  { href: site.socials.facebook, label: "Facebook", Icon: FacebookIcon },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="relative overflow-hidden rounded-t-[48px] bg-navy text-cream/80">
      <div className="container-x grid gap-12 pt-20 pb-10 lg:grid-cols-[1.3fr_1fr_1.3fr]">
        <div>
          <Logo light />
          <p className="mt-6 max-w-sm text-lg">{footerBlurb}</p>
          <ul className="mt-6 flex gap-2">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a href={href} aria-label={`Bluebell on ${label}`} className="grid size-11 place-items-center rounded-full bg-white/10 text-cream transition hover:bg-sun hover:text-navy">
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label="Footer">
          <p className="display text-xl text-sun">Quick links</p>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 lg:grid-cols-1">
            {nav.map((n) => (
              <li key={n.href}><a href={n.href} className="hover:text-white">{n.label}</a></li>
            ))}
            <li><a href={site.links.eskool} className="hover:text-white">EsKool portal</a></li>
            <li><a href={site.links.privacy} className="hover:text-white">Privacy policy</a></li>
          </ul>
        </nav>
        <div>
          <p className="display text-xl text-sun">Get in touch</p>
          <address className="mt-5 space-y-4 text-lg not-italic">
            <a href={site.phone.href} className="flex items-start gap-3 hover:text-white"><Phone className="mt-1 size-5 shrink-0 text-coral" aria-hidden /> {site.phone.label}</a>
            <a href={`mailto:${site.email}`} className="flex items-start gap-3 [overflow-wrap:anywhere] hover:text-white"><Mail className="mt-1 size-5 shrink-0 text-coral" aria-hidden /> {site.email}</a>
            <a href={site.mapsUrl} target="_blank" rel="noopener" className="flex items-start gap-3 hover:text-white"><MapPin className="mt-1 size-5 shrink-0 text-coral" aria-hidden /> {site.address}</a>
          </address>
        </div>
      </div>

      {/* Big wordmark, kept from the live site */}
      <div className="container-x relative" aria-hidden>
        <p className="display flex items-center justify-center gap-[1vw] text-[19vw] leading-[.8] text-cream lg:text-[15rem]">
          Bluebell
          <Petal className="size-[11vw] shrink-0 animate-spin-slow text-sun lg:size-40" />
        </p>
      </div>

      <div className="container-x flex flex-col justify-between gap-3 border-t border-white/10 py-6 text-sm text-cream/50 sm:flex-row">
        <p>© <CurrentYear fallback={2026} /> {site.fullName}. All rights reserved.</p>
        <a href="#top" className="hover:text-white">Back to top ↑</a>
      </div>
    </footer>
  );
}

import { Crest } from "@/components/crest";
import { CurrentYear } from "@/components/current-year";
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon, YoutubeIcon } from "@/components/icons";
import { menu, site } from "@/lib/site";

const socials = [
  { href: site.socials.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: site.socials.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: site.socials.x, label: "X", Icon: XIcon },
  { href: site.socials.youtube, label: "YouTube", Icon: YoutubeIcon },
  { href: site.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
];

export function SiteFooter() {
  return (
    <footer id="contact" data-theme="dark" className="bg-navy-950 text-white/75">
      <div className="mx-auto grid max-w-[1500px] gap-12 px-5 pt-28 pb-12 sm:px-10 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-[7vw]">
        <div>
          <a href="#welcome" className="flex items-center gap-3 text-white">
            <Crest className="size-14" />
            <span className="flex flex-col leading-none">
              <span className="font-serif text-3xl">Premiere Academy</span>
              <span className="mt-1 font-serif text-sm italic opacity-75">{site.tagline}</span>
            </span>
          </a>
          <p className="mt-6 max-w-sm text-lg">An international co-education boarding school in Lugbe, Abuja.</p>
          <ul className="mt-6 flex gap-2">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a href={href} aria-label={`Premiere Academy on ${label}`} className="grid size-11 place-items-center bg-white/10 text-white transition hover:bg-crimson-600">
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label="Footer">
          <p className="eyebrow text-sm text-gold-400">Explore</p>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 lg:grid-cols-1">
            {menu.map((m) => (
              <li key={m.href}>
                <a href={m.href} className="hover:text-white">{m.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="eyebrow text-sm text-gold-400">Contact</p>
          <address className="mt-5 space-y-3 not-italic">
            {site.phones.map((p) => (
              <a key={p.href} href={p.href} className="block hover:text-white">{p.label}</a>
            ))}
            <a href={`mailto:${site.email}`} className="block [overflow-wrap:anywhere] hover:text-white">{site.email}</a>
            <a href={site.mapsUrl} target="_blank" rel="noopener" className="block hover:text-white">{site.address}</a>
          </address>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-3 border-t border-white/10 px-5 py-6 text-sm text-white/45 sm:flex-row sm:px-10 lg:px-[7vw]">
        <p>© <CurrentYear fallback={2026} /> Premiere Academy. All rights reserved.</p>
        <a href="#welcome" className="hover:text-white">Back to top ↑</a>
      </div>
    </footer>
  );
}

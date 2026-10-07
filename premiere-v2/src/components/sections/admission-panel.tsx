import { Mail, MapPin, Phone } from "lucide-react";
import { Pedestal } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/icons";
import { admission, site } from "@/lib/site";

/** Final panel: the admissions call to action. */
export function AdmissionPanel() {
  return (
    <section
      id="admission"
      data-theme="dark"
      aria-labelledby="admission-title"
      className="relative isolate shrink-0 overflow-hidden bg-crimson-700 px-5 pt-28 pb-24 text-white sm:px-10 h-mode:flex h-mode:h-screen h-mode:w-screen h-mode:items-center h-mode:px-[8vw] h-mode:py-0"
    >
      <Pedestal className="right-0 -z-10 h-[30%] w-[38%] rotate-180 bg-crimson-600" />
      <div className="grid w-full gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <Reveal>
          <p className="eyebrow text-gold-400">Admissions open · {site.session}</p>
          <h2 id="admission-title" className="headline mt-4 text-[clamp(3rem,1.6rem+5.6vw,7.6rem)]">
            {admission.headline}
          </h2>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/85">{admission.body}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={site.links.enrol} variant="white">
              Enrol now
            </ButtonLink>
            <ButtonLink href={site.links.tour} variant="outline">
              Virtual tour
            </ButtonLink>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <address className="space-y-5 border-l-4 border-gold-400 pl-6 text-lg not-italic">
            {site.phones.map((p) => (
              <a key={p.href} href={p.href} className="flex items-center gap-3 font-semibold hover:text-gold-300">
                <Phone className="size-5 text-gold-400" aria-hidden /> {p.label}
              </a>
            ))}
            <a href={site.whatsapp} className="flex items-center gap-3 font-semibold hover:text-gold-300">
              <WhatsappIcon className="size-5 text-gold-400" /> Chat on WhatsApp
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 font-semibold [overflow-wrap:anywhere] hover:text-gold-300">
              <Mail className="size-5 shrink-0 text-gold-400" aria-hidden /> {site.email}
            </a>
            <a href={site.mapsUrl} target="_blank" rel="noopener" className="flex items-center gap-3 font-semibold hover:text-gold-300">
              <MapPin className="size-5 shrink-0 text-gold-400" aria-hidden /> {site.address}
            </a>
          </address>
        </Reveal>
      </div>
    </section>
  );
}

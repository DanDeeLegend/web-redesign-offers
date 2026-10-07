import { ArrowUpRight } from "lucide-react";
import { ChapterHead } from "@/components/chapter-head";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/icons";
import { site } from "@/lib/site";

/** Decorative barcode for the ticket stub. */
function Barcode() {
  const bars = [3, 1, 2, 1, 3, 2, 1, 1, 3, 1, 2, 2, 1, 3, 1, 2, 1, 1, 2, 3, 1, 2, 1, 3, 1, 1, 2];
  return (
    <div className="flex h-14 items-stretch gap-[3px]" aria-hidden>
      {bars.map((w, i) => (
        <span key={i} className="bg-ink" style={{ width: w * 2 }} />
      ))}
    </div>
  );
}

/** § VI: admission, presented as an admission ticket with a tear-off stub. */
export function Admission() {
  return (
    <section id="admission" aria-labelledby="admission-title" className="newsprint overflow-x-clip bg-paper py-24 sm:py-32">
      <div className="container-x">
        <ChapterHead
          num="VI"
          kicker="Admission"
          id="admission-title"
          title={
            <>
              Admit one <span className="text-crimson-600 italic">future leader.</span>
            </>
          }
        />

        <Reveal className="relative flex flex-col drop-shadow-[0_30px_40px_rgba(20,27,66,.18)] lg:flex-row">
          {/* Main ticket */}
          <div className="relative flex-1 border-2 border-ink bg-white p-7 max-lg:border-b-0 sm:p-12 lg:border-r-0">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-dashed border-ink/30 pb-6">
              <p className="font-mono text-xs tracking-[.2em] text-crimson-600 uppercase">Admission ticket · Session {site.session}</p>
              <p className="font-mono text-xs tracking-[.2em] text-ink/50 uppercase">Enrolment open</p>
            </div>

            <p className="mt-8 max-w-2xl font-display text-2xl leading-snug sm:text-3xl">
              We are proud of our reputation for academic excellence, and of our role in developing children into leaders over the years.
            </p>

            <dl className="mt-10 grid gap-6 border-t border-ink/15 pt-8 sm:grid-cols-3">
              <div>
                <dt className="font-mono text-[10px] tracking-[.2em] text-ink/50 uppercase">Admissions desk</dt>
                {site.phones.map((p) => (
                  <dd key={p.href}>
                    <a href={p.href} className="font-bold hover:text-crimson-600">{p.label}</a>
                  </dd>
                ))}
              </div>
              <div className="min-w-0">
                <dt className="font-mono text-[10px] tracking-[.2em] text-ink/50 uppercase">Write to</dt>
                <dd>
                  <a href={`mailto:${site.email}`} className="font-bold [overflow-wrap:anywhere] hover:text-crimson-600">{site.email}</a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] tracking-[.2em] text-ink/50 uppercase">Venue</dt>
                <dd>
                  <a href={site.mapsUrl} target="_blank" rel="noopener" className="font-bold hover:text-crimson-600">
                    {site.address} ↗
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={site.links.enrol}>
                Enrol now <ArrowUpRight className="size-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href={site.whatsapp} variant="outline">
                Chat with admissions <WhatsappIcon className="size-4" />
              </ButtonLink>
            </div>
          </div>

          {/* Perforation with notches */}
          <div className="relative h-0 border-t-2 border-dashed border-ink/40 lg:h-auto lg:w-0 lg:border-t-0 lg:border-l-2" aria-hidden>
            {/* Notches at either end of the tear line */}
            <span className="absolute -top-[17px] -left-[17px] size-8 rounded-full bg-paper" />
            <span className="absolute -top-[17px] -right-[17px] size-8 rounded-full bg-paper lg:top-auto lg:right-auto lg:-bottom-[17px] lg:-left-[17px]" />
          </div>

          {/* Stub */}
          <div className="flex items-center justify-between gap-6 border-2 border-ink bg-gold-400 p-7 max-lg:border-t-0 lg:w-64 lg:flex-col lg:items-start lg:border-l-0 lg:p-8">
            <div>
              <p className="font-mono text-[10px] tracking-[.2em] uppercase">Admit</p>
              <p className="font-display text-6xl leading-none font-black">One</p>
              <p className="mt-2 font-mono text-[10px] tracking-[.2em] uppercase">{site.session}</p>
            </div>
            <Barcode />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

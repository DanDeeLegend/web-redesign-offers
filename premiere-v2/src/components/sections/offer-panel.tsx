import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { offer, site } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Panel 2: four photo columns (the third raised), like a schools/divisions row. */
export function OfferPanel() {
  return (
    <section
      id="offer"
      data-theme="light"
      aria-labelledby="offer-title"
      className="relative shrink-0 bg-white px-5 pt-32 pb-20 sm:px-10 h-mode:flex h-mode:h-screen h-mode:flex-col h-mode:justify-end h-mode:pt-0 h-mode:pr-48 h-mode:pb-[6vh] h-mode:pl-[7vw]"
    >
      <Reveal>
        <h2 id="offer-title" className="headline mb-10 text-[clamp(2.6rem,1.6rem+3.6vw,4.6rem)] text-navy-900 h-mode:mb-[5vh]">
          What we offer
        </h2>
      </Reveal>
      <ul className="grid gap-x-3 gap-y-12 sm:grid-cols-2 h-mode:flex h-mode:items-end h-mode:gap-3">
        {offer.map((o, i) => {
          const raised = i === 2;
          return (
            <li key={o.title} className="h-mode:w-[min(25vw,440px)]">
              <Reveal delay={i * 0.08}>
                <Photo
                  pic={o.pic}
                  tone={i % 2 ? "crimson" : "navy"}
                  sizes="440px"
                  className={cn("aspect-[7/6] w-full h-mode:aspect-auto h-mode:h-[38vh]", raised && "h-mode:h-[62vh]")}
                />
                <h3 className="headline mt-6 text-[1.9rem] text-crimson-600">{o.title}</h3>
                <p className="mt-3 max-w-sm text-lg leading-relaxed text-navy-900/75 h-mode:min-h-[5.5em]">{o.body}</p>
                <Link
                  href={site.links.about}
                  className="group mt-5 inline-flex h-14 items-center gap-4 bg-navy-900 px-6 font-display text-[14px] font-extrabold tracking-[.2em] text-white uppercase transition-colors hover:bg-crimson-600 [font-variation-settings:'wdth'_112]"
                >
                  <ChevronRight className="size-5 transition-transform group-hover:translate-x-1" strokeWidth={3} aria-hidden />
                  Learn more <span className="sr-only">about {o.title}</span>
                </Link>
              </Reveal>
            </li>
          );
        })}
      </ul>

      {/* Angled crimson block on the right edge, leading into the next panel */}
      <div aria-hidden data-theme="dark" className="absolute inset-y-0 right-0 hidden w-24 bg-crimson-700 h-mode:block" />
      <div aria-hidden data-theme="dark" className="absolute right-0 bottom-0 hidden h-[22vh] w-40 bg-crimson-500 [clip-path:polygon(60%_0,100%_0,100%_100%,0_100%)] h-mode:block" />
    </section>
  );
}

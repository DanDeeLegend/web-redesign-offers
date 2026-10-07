import Link from "next/link";
import { Play } from "lucide-react";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { film, site } from "@/lib/site";

/** A row of film-strip sprocket holes. */
function Sprockets() {
  return (
    <div className="flex justify-between gap-3 overflow-hidden px-3 py-2.5" aria-hidden>
      {Array.from({ length: 32 }).map((_, i) => (
        <span key={i} className="h-3 w-5 shrink-0 rounded-[3px] bg-paper/85" />
      ))}
    </div>
  );
}

/** § V: "Premiere Academy in 60 Seconds" presented as a strip of film. */
export function Film() {
  return (
    <section id="film" aria-labelledby="film-title" className="bg-navy-950 py-24 text-paper sm:py-32">
      <div className="container-x">
        <Reveal className="mb-10 grid gap-6 lg:grid-cols-[auto_1fr] lg:items-end lg:gap-16">
          <div>
            <p className="flex items-center gap-3 font-mono text-xs tracking-[.2em] text-paper/60 uppercase">
              <span className="text-gold-400">§ V</span> Now showing
            </p>
            <h2 id="film-title" className="mt-4 font-display text-[clamp(2.4rem,1.4rem+3.6vw,4.8rem)] leading-[.95] font-black tracking-[-.025em]">
              Premiere Academy <br className="hidden sm:block" />
              <span className="text-gold-400 italic">in 60 seconds.</span>
            </h2>
          </div>
          <p className="max-w-xl font-display text-xl leading-relaxed text-paper/75 italic lg:justify-self-end">&ldquo;{film.quote}&rdquo;</p>
        </Reveal>

        <Reveal delay={0.1} className="bg-black">
          <Sprockets />
          <Link href={site.links.video60} className="group relative block" aria-label="Watch Premiere Academy in 60 seconds">
            <Photo pic={film.still} tone="crimson" sizes="100vw" className="aspect-[16/9] w-full sm:aspect-[21/9]" />
            <span className="absolute inset-0 grid place-items-center">
              <span className="flex items-center gap-4 bg-paper px-5 py-4 text-ink transition-colors duration-300 group-hover:bg-gold-400 sm:px-7">
                <Play className="size-6 fill-current" aria-hidden />
                <span className="font-mono text-sm font-semibold tracking-[.18em] uppercase">Play film · 1:00</span>
              </span>
            </span>
          </Link>
          <Sprockets />
        </Reveal>
      </div>
    </section>
  );
}

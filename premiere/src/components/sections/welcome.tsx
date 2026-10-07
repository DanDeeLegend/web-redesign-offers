import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ChapterHead } from "@/components/chapter-head";
import { Figure } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { site, welcome } from "@/lib/site";

const numerals = ["i", "ii", "iii", "iv"];

export function Welcome() {
  return (
    <section id="welcome" aria-labelledby="welcome-title" className="newsprint bg-paper py-24 sm:py-32">
      <div className="container-x">
        <ChapterHead
          num="I"
          kicker="Welcome"
          id="welcome-title"
          title={
            <>
              Welcome to <span className="text-crimson-600 italic">Premiere Academy.</span>
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-0">
          {/* Story, set in two columns with a pull quote */}
          <Reveal className="lg:col-span-7 lg:border-r lg:border-ink/20 lg:pr-12">
            <div className="gap-10 text-lg leading-[1.75] text-ink/80 md:columns-2 md:[column-rule:1px_solid_rgb(20_27_66/0.15)]">
              <p className="dropcap mb-5">{welcome.body[0]}</p>
              <blockquote className="my-8 break-inside-avoid border-y-2 border-ink py-6 font-display text-[1.7rem] leading-tight font-bold text-crimson-600 italic">
                &ldquo;{welcome.pullQuote}&rdquo;
              </blockquote>
              <p className="mb-5">{welcome.body[1]}</p>
            </div>
            <Link href={site.links.about} className="group mt-6 inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[.18em] uppercase">
              <span className="border-b-2 border-crimson-600 pb-1">Continue reading</span>
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
            </Link>
          </Reveal>

          {/* Portrait */}
          <Reveal delay={0.1} className="lg:col-span-5 lg:pl-12">
            <Figure pic={welcome.portrait} tone="crimson" sizes="(max-width: 1024px) 100vw, 40vw" className="w-full [&>div]:aspect-[4/5]" />
          </Reveal>
        </div>

        {/* Four things to know */}
        <div className="mt-20 border-t-4 border-ink">
          <p className="py-3 font-mono text-xs tracking-[.2em] text-ink/60 uppercase">Four things to know</p>
          <ol className="grid border-t border-ink/20 sm:grid-cols-2 lg:grid-cols-4">
            {welcome.features.map((f, i) => (
              <li key={f.title} className="border-ink/20 py-8 max-lg:border-b sm:odd:pr-8 sm:even:pl-8 sm:max-lg:odd:border-r lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0">
                <Reveal delay={i * 0.08}>
                  <span className="font-display text-5xl font-black text-crimson-600/90 italic">{numerals[i]}.</span>
                  <h3 className="mt-4 font-display text-2xl leading-tight font-bold">{f.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink/70">{f.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

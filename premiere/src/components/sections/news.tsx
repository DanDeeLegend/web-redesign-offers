import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ChapterHead } from "@/components/chapter-head";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { news, site } from "@/lib/site";

function Dateline({ kicker, date }: { kicker: string; date: string | null }) {
  return (
    <p className="font-mono text-[11px] tracking-[.18em] uppercase">
      <span className="text-crimson-600">{kicker}</span>
      {date && <span className="text-ink/50"> · {date}</span>}
    </p>
  );
}

/** § IV: news laid out like a front page: one lead story, two in the side column. */
export function News() {
  const [lead, ...rest] = news;
  return (
    <section id="news" aria-labelledby="news-title" className="newsprint bg-paper py-24 sm:py-32">
      <div className="container-x">
        <ChapterHead num="IV" kicker="News" id="news-title" title={<>Life at Premiere.</>} />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-0">
          {/* Lead story */}
          <Reveal className="lg:col-span-7 lg:border-r lg:border-ink/20 lg:pr-12">
            <Link href={lead.href} className="group block">
              <div className="overflow-hidden">
                <Photo pic={lead.pic} tone="ink" sizes="(max-width: 1024px) 100vw, 55vw" className="aspect-[16/10] transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="mt-6">
                <Dateline kicker={lead.kicker} date={lead.date} />
                <h3 className="mt-3 font-display text-[clamp(1.9rem,1.3rem+2vw,3rem)] leading-[1.05] font-black tracking-[-.02em] decoration-crimson-600 decoration-2 underline-offset-[6px] group-hover:underline">
                  {lead.title}
                </h3>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/70">{lead.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs font-semibold tracking-[.18em] uppercase">
                  Read the story <ArrowUpRight className="size-4" aria-hidden />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Side column */}
          <div className="flex flex-col lg:col-span-5 lg:pl-12">
            {rest.map((n, i) => (
              <Reveal key={n.title} delay={0.1 + i * 0.08} className="border-ink/20 py-8 first:pt-0 not-last:border-b">
                <Link href={n.href} className="group grid grid-cols-[1fr_auto] gap-5 sm:grid-cols-[1fr_9rem]">
                  <div>
                    <Dateline kicker={n.kicker} date={n.date} />
                    <h3 className="mt-2 font-display text-xl leading-snug font-bold decoration-crimson-600 decoration-2 underline-offset-4 group-hover:underline sm:text-2xl">
                      {n.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink/65">{n.excerpt}</p>
                  </div>
                  <Photo pic={n.pic} tone={i === 0 ? "crimson" : "ink"} sizes="144px" className="hidden aspect-square w-36 sm:block" />
                </Link>
              </Reveal>
            ))}
            <ButtonLink href={site.links.news} variant="outline" className="mt-auto">
              All news & events <ArrowUpRight className="size-4" aria-hidden />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

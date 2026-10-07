import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { news, site } from "@/lib/site";

/** Panel 7: latest news. */
export function NewsPanel() {
  return (
    <section
      id="news"
      data-theme="light"
      aria-labelledby="news-title"
      className="relative shrink-0 bg-mist px-5 pt-28 pb-20 sm:px-10 h-mode:flex h-mode:h-screen h-mode:flex-col h-mode:justify-end h-mode:pt-0 h-mode:pr-[7vw] h-mode:pb-[8vh] h-mode:pl-[6vw]"
    >
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <h2 id="news-title" className="headline text-[clamp(2.6rem,1.6rem+3.6vw,4.6rem)] text-navy-900">
          News & events
        </h2>
        <ButtonLink href={site.links.news}>All news</ButtonLink>
      </Reveal>
      <ul className="mt-10 grid gap-8 md:grid-cols-3 h-mode:flex h-mode:gap-6">
        {news.map((n, i) => (
          <li key={n.title} className="h-mode:w-[min(26vw,420px)]">
            <Reveal delay={i * 0.08}>
              <Link href={n.href} className="group block bg-white">
                <div className="overflow-hidden">
                  <Photo pic={n.pic} tone={i === 1 ? "crimson" : "navy"} sizes="420px" className="aspect-[16/10] transition-transform duration-700 group-hover:scale-105 h-mode:aspect-auto h-mode:h-[30vh]" />
                </div>
                <div className="p-7">
                  {n.date && <p className="eyebrow text-xs text-crimson-600">{n.date}</p>}
                  <h3 className="mt-2 text-2xl leading-snug font-bold group-hover:text-crimson-600">{n.title}</h3>
                  <p className="mt-3 line-clamp-2 text-navy-900/65">{n.excerpt}</p>
                  <span className="eyebrow mt-5 inline-flex items-center gap-2 text-xs">
                    Read more <ArrowUpRight className="size-4" aria-hidden />
                  </span>
                </div>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHead } from "@/components/section-head";
import { Button } from "@/components/ui/button";
import { news, site } from "@/lib/site";

export function News() {
  return (
    <section id="news" aria-labelledby="news-title" className="bg-cream-deep py-28 sm:py-36">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHead id="news-title" label="News" title={<>A vibrant school <span className="text-bluebell">community</span></>} className="mb-0 sm:mb-0" />
          <Button href={site.links.blog} variant="ghost" className="self-start lg:self-auto">
            All news <ArrowUpRight className="size-4" aria-hidden />
          </Button>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {news.map((n, i) => (
            <li key={n.pic.src}>
              <Reveal delay={i * 0.08} className="h-full">
                <a href={site.links.blog} className="group flex h-full flex-col overflow-hidden rounded-[32px] bg-white p-3 shadow-[0_20px_40px_-30px_rgba(10,27,62,.5)] transition duration-500 hover:-translate-y-1.5">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-[24px]">
                    <Image src={n.pic.src} alt={n.pic.alt} fill sizes="(max-width: 768px) 90vw, 400px" className="object-cover transition duration-700 group-hover:scale-105" />
                    <span className="absolute top-3 left-3 rounded-full bg-sun px-3 py-1 text-xs font-extrabold tracking-wide uppercase">News</span>
                  </div>
                  <div className="flex flex-1 flex-col px-4 pt-5 pb-4">
                    <p className="text-sm font-bold text-coral">{n.date}</p>
                    <h3 className="display mt-2 text-2xl leading-tight">{n.title}</h3>
                    <p className="mt-2 flex-1 text-navy-600">{n.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 font-bold text-bluebell">
                      Read more <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                    </span>
                  </div>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

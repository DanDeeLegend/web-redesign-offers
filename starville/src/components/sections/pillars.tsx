import Image from "next/image";
import { GraduationCap, Sun } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { YearsCountUp } from "@/components/count-up";
import { Sparkle } from "@/components/icons";
import { PhotoShuffle } from "@/components/photo-shuffle";
import { environmentPhotos, site } from "@/lib/site";

export function Pillars() {
  return (
    <section aria-labelledby="pillars-title" className="bg-white pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="container-x">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="mb-4 flex items-center gap-2 text-xs font-bold tracking-[.2em] text-azure-600 uppercase">
              <Sparkle className="size-3" /> Our promise
            </p>
            <h2 id="pillars-title" className="max-w-xl font-display text-[clamp(2.2rem,1.5rem+2.6vw,3.6rem)] leading-[1.05] tracking-[-.02em]">
              What every Starville family can count on.
            </h2>
          </div>
          <p className="max-w-sm text-navy-900/65">
            Our children come first. They are treated as family and brought up with the utmost care possible.
          </p>
        </Reveal>

        <div className="grid auto-rows-[minmax(220px,auto)] gap-4 md:grid-cols-6 lg:grid-cols-12">
          {/* Quality teaching: large photo tile */}
          <Reveal className="group relative overflow-hidden rounded-[28px] md:col-span-6 md:row-span-2 lg:col-span-7">
            <Image src="/img/hero-classroom.jpg" alt="Secondary students working in a bright classroom" fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover transition duration-1000 group-hover:scale-105" style={{ objectPosition: "60% 50%" }} />
            <div className="absolute inset-0 bg-linear-to-t from-navy-950/95 via-navy-900/40 to-transparent" />
            <div className="relative flex h-full min-h-[420px] flex-col justify-end p-7 text-white sm:p-10">
              <span className="mb-5 grid size-12 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/20 backdrop-blur">
                <GraduationCap className="size-6" aria-hidden />
              </span>
              <h3 className="font-display text-3xl sm:text-4xl">Quality Teaching</h3>
              <p className="mt-2 max-w-sm text-white/75">High-quality teaching that inspires excellence in every lesson, every day.</p>
            </div>
          </Reveal>

          {/* Years counter */}
          <Reveal delay={0.1} className="relative overflow-hidden rounded-[28px] bg-navy-900 p-7 text-white md:col-span-3 lg:col-span-5">
            <Sparkle className="absolute -top-6 -right-6 size-32 text-azure-500/15" />
            <p className="font-display text-7xl leading-none text-cream-300 sm:text-8xl">
              <YearsCountUp since={site.founded} fallbackYear={2026} suffix="+" />
            </p>
            <p className="mt-4 max-w-[16rem] text-white/70">years nurturing children in Abuja, since {site.founded}.</p>
          </Reveal>

          {/* Motto */}
          <Reveal delay={0.2} className="relative flex flex-col justify-between overflow-hidden rounded-[28px] bg-cream-100 p-7 md:col-span-3 lg:col-span-5">
            <Sparkle className="size-6 text-cream-500" />
            <p className="mt-8 font-display text-3xl leading-tight italic sm:text-[2.1rem]">&ldquo;{site.motto}.&rdquo;</p>
            <p className="mt-4 text-xs font-bold tracking-[.2em] text-navy-900/50 uppercase">Our motto</p>
          </Reveal>

          {/* Learning environment: full-width row, photos shuffle */}
          <Reveal delay={0.1} className="group relative overflow-hidden rounded-[28px] bg-navy-50 md:col-span-6 lg:col-span-12">
            <div className="grid h-full md:grid-cols-[1fr_1.2fr]">
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                <span className="mb-6 grid size-12 place-items-center rounded-2xl bg-white text-azure-600 shadow-sm">
                  <Sun className="size-6" aria-hidden />
                </span>
                <h3 className="font-display text-3xl sm:text-4xl">Outstanding Learning Environment</h3>
                <p className="mt-3 max-w-md text-navy-900/65">A safe and inspiring environment for learning, at our purpose-built site in Jahi.</p>
              </div>
              <PhotoShuffle photos={environmentPhotos} sizes="(max-width: 768px) 100vw, 55vw" className="min-h-[280px] md:min-h-[380px]" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Petal } from "@/components/doodles";
import { about, site } from "@/lib/site";

export function About() {
  const facts = [
    { k: `Since ${site.founded}`, v: "Over a decade of nurturing", tint: "bg-butter" },
    { k: "Preschool → Secondary", v: "One school, every stage", tint: "bg-sky" },
    { k: "Co-educational", v: "Boys and girls learning together", tint: "bg-mint" },
  ];
  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden py-28 sm:py-36">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2">
        <Reveal className="relative mx-auto aspect-square w-full max-w-[560px]">
          <div className="absolute inset-[4%] animate-blob overflow-hidden bg-sky shadow-[0_40px_80px_-40px_rgba(10,27,62,.5)]">
            <Image src={about.photos[0].src} alt={about.photos[0].alt} fill sizes="(max-width: 1024px) 90vw, 560px" className="object-cover" />
          </div>
          <div className="absolute -right-2 -bottom-4 size-[42%] animate-blob overflow-hidden border-8 border-cream bg-blush [animation-delay:-7s] sm:-right-6">
            <Image src={about.photos[1].src} alt={about.photos[1].alt} fill sizes="240px" className="object-cover" />
          </div>
          <div className="absolute top-4 -left-2 grid size-28 rotate-[-10deg] place-items-center rounded-full bg-coral text-center text-white shadow-xl sm:-left-6">
            <span className="leading-tight">
              <span className="block font-hand text-xl">est.</span>
              <span className="display block text-3xl">{site.founded}</span>
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-extrabold tracking-wide text-navy-600 uppercase shadow-sm ring-1 ring-navy/5">
            <Petal className="size-4 text-coral" /> About us
          </span>
          <h2 id="about-title" className="display mt-5 text-[clamp(2.4rem,1.5rem+3.4vw,4.4rem)]">
            Welcome to <span className="text-bluebell">Bluebell</span>
            <span className="font-hand font-medium text-coral"> ✿</span>
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-navy-600">{about.body}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {facts.map((f) => (
              <li key={f.k} className={`rounded-3xl p-5 ${f.tint}`}>
                <p className="display text-lg">{f.k}</p>
                <p className="mt-1 text-sm font-semibold text-navy-600">{f.v}</p>
              </li>
            ))}
          </ul>
          <Button href={site.links.about} variant="sun" size="lg" className="mt-9">
            Learn more about us <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" aria-hidden />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

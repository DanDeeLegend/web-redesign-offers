import { CountUp } from "@/components/count-up";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { facts } from "@/lib/site";

/** Panel 6: "The facts": giant figures, each over a photo and a label. */
export function FactsPanel() {
  return (
    <section
      id="facts"
      data-theme="light"
      aria-labelledby="facts-title"
      className="relative shrink-0 bg-white px-5 pt-28 pb-20 sm:px-10 h-mode:flex h-mode:h-screen h-mode:flex-col h-mode:justify-end h-mode:pt-0 h-mode:pr-[7vw] h-mode:pb-[8vh] h-mode:pl-[3vw]"
    >
      <Reveal>
        <h2 id="facts-title" className="headline text-[clamp(2.6rem,1.6rem+3.6vw,4.6rem)] text-navy-900">
          The facts
        </h2>
      </Reveal>
      <ul className="mt-6 grid gap-x-6 gap-y-14 sm:grid-cols-2 h-mode:flex h-mode:gap-10">
        {facts.map((f, i) => (
          <li key={f.label} className="h-mode:w-[min(24vw,400px)]">
            <Reveal delay={i * 0.08}>
              <p className="headline text-[clamp(2.8rem,1.4rem+3vw,4.4rem)] whitespace-nowrap text-crimson-600">
                <CountUp to={f.value} suffix={f.suffix} />
              </p>
              <Photo pic={f.pic} tone={i % 2 ? "crimson" : "navy"} sizes="400px" className="mt-4 aspect-[4/3] w-full h-mode:aspect-auto h-mode:h-[38vh]" />
              <p className="headline mt-6 text-[1.6rem] leading-tight text-crimson-600">{f.label}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}

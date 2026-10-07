import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";
import { ledger } from "@/lib/site";

/** "By the numbers": results set like a financial ledger across a full-width ink band. */
export function Ledger() {
  return (
    <section aria-labelledby="ledger-title" className="bg-ink text-paper">
      <div className="container-x">
        <div className="flex items-center gap-4 border-b border-paper/20 py-4 font-mono text-xs tracking-[.2em] uppercase">
          <h2 id="ledger-title" className="text-gold-400">By the numbers</h2>
          <span className="h-px flex-1 bg-paper/20" />
          <span className="text-paper/50">Results & records</span>
        </div>
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {ledger.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className="border-paper/20 py-10 pr-5 odd:border-r max-lg:even:pl-5 max-lg:[&:nth-child(n+3)]:border-t sm:py-14 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0"
            >
              <dt className="font-mono text-[10px] tracking-[.2em] text-paper/45 uppercase">
                No. 0{i + 1}
              </dt>
              <dd>
                <span className="mt-3 block font-display text-[clamp(3.2rem,2rem+4.6vw,6.4rem)] leading-none font-black tracking-[-.04em] text-gold-400">
                  <CountUp to={s.value} suffix={s.suffix} />
                </span>
                <span className="mt-4 block text-lg font-bold">{s.label}</span>
                <span className="mt-1 block font-mono text-xs text-paper/55">{s.note}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

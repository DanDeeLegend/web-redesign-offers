import Image from "next/image";
import { partners } from "@/lib/site";

export function Partners() {
  const loop = [...partners, ...partners, ...partners, ...partners];
  return (
    <section aria-labelledby="partners-title" className="bg-white py-10">
      <div className="container-x flex flex-col items-center gap-6 md:flex-row md:gap-10">
        <h2 id="partners-title" className="shrink-0 text-xs font-semibold tracking-[.2em] text-navy-900/50 uppercase">
          In partnership with
        </h2>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <ul className="flex w-max animate-marquee items-center gap-16 hover:[animation-play-state:paused]">
            {loop.map((p, i) => (
              <li key={i} aria-hidden={i >= partners.length || undefined} className="shrink-0">
                <Image
                  src={p.src}
                  alt={i < partners.length ? p.alt : ""}
                  width={p.w}
                  height={p.h}
                  className="h-11 w-auto opacity-60 mix-blend-multiply grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

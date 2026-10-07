"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { Cutout } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { why } from "@/lib/site";
import { cn } from "@/lib/utils";

function WhyCard({ item, index }: { item: (typeof why)[number]; index: number }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <li data-theme="dark" className="relative isolate h-[78vh] min-h-[520px] overflow-hidden bg-[radial-gradient(90%_70%_at_50%_40%,#c43a4a_0%,#a3202e_55%,#861a26_100%)] h-mode:h-full h-mode:w-[min(26vw,430px)]">
      <Cutout pic={item.cutout} sizes="430px" className="absolute inset-x-6 bottom-0 h-[82%]" />
      <h3 className="headline absolute top-[16%] inset-x-6 text-center text-[1.7rem] text-white/95 lg:top-[18%]">{item.title}</h3>

      {/* Story overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            id={id}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
            className="absolute inset-0 z-10 flex flex-col justify-center bg-navy-900/95 p-8 text-white backdrop-blur-sm"
          >
            <span className="eyebrow text-gold-400">0{index + 1}</span>
            <p className="headline mt-3 text-3xl">{item.title}</p>
            <p className="mt-5 text-xl leading-relaxed text-white/85">{item.body}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={id}
        aria-label={open ? `Close ${item.title}` : `Read about ${item.title}`}
        className={cn(
          "absolute bottom-[7%] left-1/2 z-20 grid size-14 -translate-x-1/2 place-items-center rounded-full shadow-xl transition duration-300 hover:scale-110",
          open ? "bg-gold-400 text-navy-900" : index % 2 ? "bg-crimson-700 text-white ring-2 ring-white/40" : "bg-white text-crimson-600",
        )}
      >
        <Plus className={cn("size-7 transition-transform duration-300", open && "rotate-45")} strokeWidth={2.5} aria-hidden />
      </button>
    </li>
  );
}

/** Panel 5: tall crimson cards with cut-out students; "+" reveals each story. */
export function WhyPanel() {
  return (
    <section id="why" aria-labelledby="why-title" className="relative flex shrink-0 flex-col bg-white h-mode:h-screen h-mode:flex-row h-mode:items-stretch">
      <div data-theme="light" className="flex items-end px-5 pt-24 pb-10 sm:px-10 h-mode:w-[min(38vw,600px)] h-mode:pr-10 h-mode:pb-[12vh] h-mode:pl-[5vw]">
        <Reveal>
          <p className="eyebrow text-crimson-600">Why parents choose</p>
          <h2 id="why-title" className="headline mt-4 text-[clamp(2.8rem,1.4rem+3.2vw,4.6rem)] text-navy-900">
            Premiere
          </h2>
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-navy-900/70">Four reasons to choose Premiere Academy. Tap a card to read more.</p>
        </Reveal>
      </div>
      <ul className="grid gap-4 px-5 pb-20 sm:grid-cols-2 sm:px-10 h-mode:flex h-mode:gap-6 h-mode:px-0 h-mode:pr-[6vw] h-mode:pb-0">
        {why.map((item, i) => (
          <WhyCard key={item.title} item={item} index={i} />
        ))}
      </ul>
    </section>
  );
}

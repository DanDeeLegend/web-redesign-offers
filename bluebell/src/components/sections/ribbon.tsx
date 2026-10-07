import { Petal } from "@/components/doodles";

const words = ["Montessori", "Cambridge curriculum", "Preschool to Secondary", "Port Harcourt", "Since 2009", "Co-educational"];

/** A slightly tilted yellow ribbon of words scrolling past. */
export function Ribbon() {
  const row = (
    <span className="flex shrink-0 items-center">
      {words.map((w) => (
        <span key={w} className="flex items-center gap-6 pr-6">
          <span className="display text-2xl sm:text-3xl">{w}</span>
          <Petal className="size-6 text-coral" />
        </span>
      ))}
    </span>
  );
  return (
    <div className="relative z-10 -my-4 -rotate-2 overflow-hidden bg-sun py-4 shadow-[0_10px_30px_-12px_rgba(10,27,62,.35)]" aria-hidden>
      <div className="flex w-max animate-marquee">
        {row}
        {row}
      </div>
    </div>
  );
}

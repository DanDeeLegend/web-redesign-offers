import { MotionProvider } from "@/components/motion-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Partners } from "@/components/sections/partners";
import { Pillars } from "@/components/sections/pillars";
import { Statement } from "@/components/sections/statement";
import { Stages } from "@/components/sections/stages";
import { Life } from "@/components/sections/life";
import { Admissions } from "@/components/sections/admissions";

export default function Home() {
  return (
    <MotionProvider>
      <a href="#main" className="fixed top-3 left-3 z-[70] -translate-y-24 rounded-full bg-azure-500 px-4 py-2 font-semibold text-white focus:translate-y-0">
        Skip to content
      </a>
      <div id="top" />
      <SiteHeader />
      <main id="main">
        <Hero />
        <Partners />
        <Pillars />
        <Statement />
        <Stages />
        <Life />
        <Admissions />
      </main>
      <SiteFooter />
    </MotionProvider>
  );
}

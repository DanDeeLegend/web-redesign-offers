import { MotionProvider } from "@/components/motion-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsappButton } from "@/components/whatsapp-button";
import { Hero } from "@/components/sections/hero";
import { Ribbon } from "@/components/sections/ribbon";
import { About } from "@/components/sections/about";
import { Why } from "@/components/sections/why";
import { Programmes } from "@/components/sections/programmes";
import { Admissions } from "@/components/sections/admissions";
import { Life } from "@/components/sections/life";
import { Voices } from "@/components/sections/voices";
import { News } from "@/components/sections/news";

export default function Home() {
  return (
    <MotionProvider>
      <a href="#main" className="fixed top-3 left-3 z-[80] -translate-y-24 rounded-full bg-sun px-4 py-2 font-bold focus:translate-y-0">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="overflow-x-clip">
        <Hero />
        <Ribbon />
        <About />
        <Why />
        <Programmes />
        <Admissions />
        <Life />
        <Voices />
        <News />
      </main>
      <SiteFooter />
      <WhatsappButton />
    </MotionProvider>
  );
}

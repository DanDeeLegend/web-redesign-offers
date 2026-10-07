import { MotionProvider } from "@/components/motion-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsappButton } from "@/components/whatsapp-button";
import { FrontPage } from "@/components/sections/front-page";
import { Ledger } from "@/components/sections/ledger";
import { Welcome } from "@/components/sections/welcome";
import { Curriculum } from "@/components/sections/curriculum";
import { Why } from "@/components/sections/why";
import { News } from "@/components/sections/news";
import { Film } from "@/components/sections/film";
import { Admission } from "@/components/sections/admission";

export default function Home() {
  return (
    <MotionProvider>
      <a href="#main" className="fixed top-3 left-3 z-[70] -translate-y-24 bg-crimson-600 px-4 py-2 font-mono text-sm text-paper focus:translate-y-0">
        Skip to content
      </a>
      <div id="top" />
      <SiteHeader />
      <main id="main">
        <FrontPage />
        <Ledger />
        <Welcome />
        <Curriculum />
        <Why />
        <News />
        <Film />
        <Admission />
      </main>
      <SiteFooter />
      <WhatsappButton />
    </MotionProvider>
  );
}

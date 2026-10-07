import { MotionProvider } from "@/components/motion-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsappButton } from "@/components/whatsapp-button";
import { HorizontalScroller } from "@/components/horizontal-scroller";
import { HeroPanel } from "@/components/sections/hero-panel";
import { OfferPanel } from "@/components/sections/offer-panel";
import { ResultsPanel } from "@/components/sections/results-panel";
import { PurposePanel } from "@/components/sections/purpose-panel";
import { WhyPanel } from "@/components/sections/why-panel";
import { FactsPanel } from "@/components/sections/facts-panel";
import { NewsPanel } from "@/components/sections/news-panel";
import { AdmissionPanel } from "@/components/sections/admission-panel";

export default function Home() {
  return (
    <MotionProvider>
      <a href="#main" className="fixed top-3 left-3 z-[80] -translate-y-24 bg-gold-400 px-4 py-2 font-bold text-navy-900 focus:translate-y-0">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <HorizontalScroller>
          <HeroPanel />
          <OfferPanel />
          <ResultsPanel />
          <PurposePanel />
          <WhyPanel />
          <FactsPanel />
          <NewsPanel />
          <AdmissionPanel />
        </HorizontalScroller>
      </main>
      <SiteFooter />
      <WhatsappButton />
    </MotionProvider>
  );
}

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { StickyServicesNav } from "@/components/StickyServicesNav";
import { ContentSections } from "@/components/ContentSections";
import { SliderSection } from "@/components/SliderSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <StickyServicesNav />
      <ContentSections />
      <SliderSection />
      <Footer />
    </main>
  );
}

import { Navbar } from "@/components/Navbar";
import { HeroConversion } from "@/components/lg/HeroConversion";
import { TrustBand } from "@/components/lg/TrustBand";
import { MethodSection } from "@/components/lg/MethodSection";
import { MetricsSection } from "@/components/lg/MetricsSection";
import { FaqSection } from "@/components/lg/FaqSection";
import { DarkCtaSection } from "@/components/lg/DarkCtaSection";
import { StickyFooter } from "@/components/ui/sticky-footer";
import { AuditModal } from "@/components/AuditModal";
import { GlassBackground } from "@/components/lg/GlassBackground";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroConversion />

      {/* ── Glassmorphism wrapper — pure CSS, zero network cost ── */}
      <div style={{ position: "relative", background: "var(--conv-ivory)" }}>
        <GlassBackground />
        <TrustBand />
        <MethodSection />
        <MetricsSection />
        <FaqSection />
        <DarkCtaSection />
        <StickyFooter />
      </div>

      <AuditModal />
    </main>
  );
}

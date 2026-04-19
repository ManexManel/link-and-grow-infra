"use client";

import Image from "next/image";

const logos = [
  { src: "/images/remax.png", alt: "Remax" },
  { src: "/images/era-1.png", alt: "ERA" },
  { src: "/images/Feel-Porto.png", alt: "Feel Porto" },
  { src: "/images/Shoppingpt.png", alt: "Shoppingpt" },
  { src: "/images/ornimundo.png", alt: "Ornimundo" },
  { src: "/images/Lastsole.png", alt: "Lastsole" },
  { src: "/images/decisoes-e-solucoes.png", alt: "Decisões e Soluções" },
  { src: "/images/ambar.png", alt: "Ambar" },
  { src: "/images/liderac.png", alt: "Liderac" },
  { src: "/images/phyto.png", alt: "Phyto" },
  { src: "/images/molaflex.png", alt: "Molaflex" },
  { src: "/images/IHTP.png", alt: "IHTP" },
  { src: "/images/Go-Gym.png", alt: "Go Gym" },
  { src: "/images/xarao.png", alt: "Xarão" },
  { src: "/images/replica.png", alt: "Réplica" },
];

// Duplicate for seamless marquee loop
const track = [...logos, ...logos];

export function TrustBand() {
  return (
    <section
      style={{
        background: "rgba(250,250,247,0.65)",
        backdropFilter: "blur(40px)",
        WebkitBackdropFilter: "blur(40px)",
        borderTop: "1px solid rgba(25,86,201,0.06)",
        borderBottom: "1px solid rgba(25,86,201,0.06)",
        padding: "56px 0",
        overflow: "hidden",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", textAlign: "center", marginBottom: "36px" }}>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "13px",
            fontWeight: 500,
            color: "#9CA3AF",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
          }}
        >
          Os líderes B2B confiam-nos o seu crescimento
        </p>
      </div>

      <div style={{ overflow: "hidden", position: "relative" }}>
        {/* Fade edges */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "120px",
            background: "linear-gradient(to right, rgba(255,255,255,0.92), transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "120px",
            background: "linear-gradient(to left, rgba(255,255,255,0.92), transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        <div
          className="trust-marquee-track"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "64px",
            width: "max-content",
          }}
        >
          {track.map((logo, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "40px",
                filter: "grayscale(100%) opacity(0.4)",
                transition: "filter 0.3s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.filter = "grayscale(0%) opacity(1)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.filter = "grayscale(100%) opacity(0.4)"; }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                style={{ objectFit: "contain", maxHeight: "40px", width: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes trustMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .trust-marquee-track {
          animation: trustMarquee 40s linear infinite;
        }
        .trust-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

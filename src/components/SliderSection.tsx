"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  "/images/home-omedia-slider-1.jpg",
  "/images/home-omedia-slider-2.jpg",
  "/images/home-omedia-slider-3.jpg",
  "/images/home-omedia-slider-4.jpg",
];

export function SliderSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes kenBurns {
          from { transform: scale(1); }
          to { transform: scale(1.06); }
        }
      `}</style>
      <section
        style={{
          display: "flex",
          height: "500px",
          width: "100%",
          overflow: "hidden",
          background: "#fff",
        }}
      >
        {/* Left: building illustration */}
        <div
          style={{
            width: "35%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
            borderRight: "1px solid #e5e5e5",
          }}
        >
          <Image
            src="/images/home-omedia-building.jpg"
            alt="Omedia Paris Haussmann"
            width={240}
            height={320}
            style={{ objectFit: "contain" }}
          />
          <Image
            src="/images/logo-omedia.png"
            alt="Omedia Paris"
            width={120}
            height={24}
            style={{ objectFit: "contain", marginTop: "16px" }}
          />
        </div>

        {/* Right: carousel */}
        <div
          style={{
            width: "65%",
            position: "relative",
            overflow: "hidden",
            height: "100%",
          }}
        >
          {slides.map((src, i) => (
            <div
              key={src}
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: active === i ? 1 : 0,
                transition: "opacity 0.8s ease",
                animation: active === i ? "kenBurns 6s ease forwards" : "none",
              }}
            />
          ))}

          {/* Dots */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "8px",
              zIndex: 10,
            }}
          >
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background:
                    active === i
                      ? "rgba(255,255,255,1)"
                      : "rgba(255,255,255,0.5)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

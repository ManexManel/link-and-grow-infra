"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";

/* ─── SVG Network Background ─────────────────────────────────────────────── */
const NODES = [
  { cx: 80,  cy: 120 }, { cx: 220, cy: 60  }, { cx: 380, cy: 140 },
  { cx: 160, cy: 260 }, { cx: 320, cy: 300 }, { cx: 480, cy: 200 },
  { cx: 560, cy: 80  }, { cx: 440, cy: 360 }, { cx: 600, cy: 280 },
  { cx: 240, cy: 400 }, { cx: 100, cy: 380 }, { cx: 680, cy: 160 },
];

const EDGES = [
  [0,1],[1,2],[2,5],[5,8],[3,4],[4,5],[4,7],[6,5],[6,11],[8,11],
  [0,3],[3,10],[7,9],[9,10],[1,6],[2,6],
];

function NetworkSVG() {
  return (
    <svg
      viewBox="0 0 780 460"
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
      aria-hidden="true"
    >
      {/* Edges */}
      {EDGES.map(([a, b], i) => {
        const na = NODES[a], nb = NODES[b];
        const length = Math.hypot(nb.cx - na.cx, nb.cy - na.cy);
        return (
          <motion.line
            key={`e-${i}`}
            x1={na.cx} y1={na.cy} x2={nb.cx} y2={nb.cy}
            stroke="rgba(25,86,201,0.18)"
            strokeWidth="1"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { duration: 1.4, delay: 0.4 + i * 0.06, ease: "easeOut" },
              opacity:    { duration: 0.4, delay: 0.4 + i * 0.06 },
            }}
            style={{ pathLength: undefined }}
          />
        );
      })}

      {/* Pulse rings */}
      {NODES.slice(0, 5).map((n, i) => (
        <motion.circle
          key={`ring-${i}`}
          cx={n.cx} cy={n.cy} r={14}
          fill="none"
          stroke="rgba(25,86,201,0.12)"
          strokeWidth="1"
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ scale: [1, 2.2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{
            duration: 3,
            delay: i * 0.7,
            repeat: Infinity,
            ease: "easeOut",
          }}
          style={{ originX: `${n.cx}px`, originY: `${n.cy}px`, transformBox: "fill-box" } as React.CSSProperties}
        />
      ))}

      {/* Nodes */}
      {NODES.map((n, i) => (
        <motion.circle
          key={`n-${i}`}
          cx={n.cx} cy={n.cy} r={i < 4 ? 5 : 3.5}
          fill={i < 4 ? "rgba(25,86,201,0.55)" : "rgba(25,86,201,0.3)"}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 + i * 0.05, ease: "backOut" }}
        />
      ))}
    </svg>
  );
}

/* ─── Stagger container variants ─────────────────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const slideUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

/* ─── Component ──────────────────────────────────────────────────────────── */
export function HeroConversion() {
  const { setOpen } = useModal();

  return (
    <section
      style={{
        background: "var(--conv-ivory)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "108px",
      }}
    >
      {/* Network animation */}
      <NetworkSVG />

      {/* Radial overlay so text stays readable */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 80% at 30% 50%, rgba(250,250,247,0.75) 0%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px 100px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "64px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* ── Left: copy ── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ flex: "1 1 55%", maxWidth: "640px" }}
        >
          {/* Pill badge */}
          <motion.div variants={slideUp}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(25,86,201,0.08)",
                border: "1px solid rgba(25,86,201,0.2)",
                borderRadius: "100px",
                padding: "6px 14px",
                marginBottom: "28px",
                backdropFilter: "blur(8px)",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#1956C9",
                  flexShrink: 0,
                  boxShadow: "0 0 6px rgba(25,86,201,0.7)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#1956C9",
                  letterSpacing: "0.5px",
                }}
              >
                Porto · Lisboa · Paris
              </span>
            </div>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={slideUp}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(48px, 6vw, 76px)",
              fontWeight: 400,
              lineHeight: 1.05,
              color: "var(--conv-text)",
              margin: "0 0 28px",
              letterSpacing: "-0.5px",
            }}
          >
            Construímos a{" "}
            <em style={{ color: "#1956C9", fontStyle: "italic" }}>autoridade digital</em>{" "}
            da sua empresa B2B.
          </motion.h1>

          {/* Body */}
          <motion.p
            variants={slideUp}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "18px",
              lineHeight: 1.75,
              color: "#4B5563",
              margin: "0 0 40px",
              maxWidth: "520px",
            }}
          >
            Inbound Marketing &amp; Link Building cirúrgico para dominar o seu mercado. Mais de{" "}
            <strong style={{ color: "var(--conv-text)", fontWeight: 600 }}>500 empresas</strong>{" "}
            já alavancaram o seu crescimento com a Link&amp;Grow.
          </motion.p>

          {/* CTA row */}
          <motion.div
            variants={slideUp}
            style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}
          >
            <button
              onClick={() => setOpen(true)}
              className="btn-liquid-glass"
            >
              Obter o meu Audit Estratégico →
            </button>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                color: "#9CA3AF",
              }}
            >
              Relatório gratuito · 48h
            </span>
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            variants={slideUp}
            style={{
              marginTop: "52px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              borderTop: "1px solid rgba(25,86,201,0.12)",
              paddingTop: "28px",
            }}
          >
            <div style={{ display: "flex" }}>
              {["#304763", "#1956C9", "#304763"].map((c, i) => (
                <div
                  key={i}
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: c,
                    border: "2px solid var(--conv-ivory)",
                    marginLeft: i > 0 ? "-8px" : "0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    color: "#fff",
                    fontWeight: 700,
                  }}
                >
                  {["R", "M", "J"][i]}
                </div>
              ))}
            </div>
            <div>
              <div style={{ display: "flex", gap: "2px", marginBottom: "2px" }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: "#F59E0B", fontSize: "14px" }}>★</span>
                ))}
              </div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "#6B7280", margin: 0 }}>
                <strong style={{ color: "var(--conv-text)" }}>900+ campanhas</strong> com resultados comprovados
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Right: visual ── */}
        <motion.div
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          style={{
            flex: "1 1 45%",
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
          className="hero-visual"
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "440px",
              aspectRatio: "4/3",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow:
                "0 2px 0 1px rgba(255,255,255,0.6) inset, 0 32px 80px rgba(25,86,201,0.14), 0 8px 20px rgba(0,0,0,0.08)",
              border: "1px solid rgba(255,255,255,0.5)",
            }}
          >
            <Image
              src="/images/linkandgrow-1-1.jpg"
              alt="Link&Grow equipa de marketing digital"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            {/* Glass overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%)",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Floating metric card */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              bottom: "-20px",
              left: "-20px",
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.7)",
              borderRadius: "16px",
              padding: "16px 20px",
              boxShadow: "0 16px 40px rgba(0,0,0,0.10)",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              minWidth: "180px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "rgba(25,86,201,0.1)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                flexShrink: 0,
              }}
            >
              📈
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "20px", fontWeight: 700, color: "#1956C9", lineHeight: 1 }}>
                +247%
              </div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "#6B7280", marginTop: "3px" }}>
                Tráfego orgânico médio
              </div>
            </div>
          </motion.div>

          {/* 2nd floating badge */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            style={{
              position: "absolute",
              top: "16px",
              right: "-16px",
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.7)",
              borderRadius: "12px",
              padding: "12px 16px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span style={{ fontSize: "16px" }}>🔗</span>
            <div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 700, color: "var(--conv-text)", lineHeight: 1 }}>
                500+
              </div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "10px", color: "#9CA3AF", marginTop: "2px" }}>
                Clientes ativos
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

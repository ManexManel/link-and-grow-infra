"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};
const slideUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export function DarkCtaSection() {
  const { setOpen } = useModal();

  return (
    <section
      style={{
        background: "#0E1220",
        padding: "120px 24px",
        position: "relative",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80vw",
          height: "80vw",
          maxWidth: "900px",
          background: "radial-gradient(circle, rgba(25,86,201,0.18) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      {/* Top border glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "400px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(25,86,201,0.5), transparent)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}
      >
        {/* Logo */}
        <motion.div variants={slideUp} style={{ marginBottom: "40px" }}>
          <Image
            src="/images/linkandgrow-logo.svg"
            alt="Link&Grow"
            width={160}
            height={33}
            style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
          />
        </motion.div>

        <motion.h2
          variants={slideUp}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 400,
            lineHeight: 1.1,
            color: "#FAFAF7",
            margin: "0 0 24px",
            letterSpacing: "-0.5px",
          }}
        >
          Pronto para dominar{" "}
          <em style={{ color: "#6B8EF5", fontStyle: "italic" }}>o seu mercado?</em>
        </motion.h2>

        <motion.p
          variants={slideUp}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "18px",
            lineHeight: 1.75,
            color: "rgba(250,250,247,0.6)",
            margin: "0 auto 48px",
            maxWidth: "520px",
          }}
        >
          Deixe-nos analisar o seu site gratuitamente. Em 48h terá um relatório de autoridade vs. concorrência e um plano de ação claro.
        </motion.p>

        <motion.div variants={slideUp}>
          <button
            onClick={() => setOpen(true)}
            className="btn-liquid-glass btn-liquid-glass-lg"
            style={{ margin: "0 auto", display: "inline-flex" }}
          >
            Obter o meu Audit Estratégico Gratuito →
          </button>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          variants={slideUp}
          style={{
            marginTop: "48px",
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          {[
            { icon: "🔒", text: "100% White-Hat" },
            { icon: "⚡", text: "Relatório em 48h" },
            { icon: "🎯", text: "Sem compromisso" },
          ].map((item) => (
            <div
              key={item.text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                color: "rgba(250,250,247,0.45)",
              }}
            >
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Footer strip */}
        <motion.div
          variants={slideUp}
          className="trust-footer-strip"
          style={{
            marginTop: "80px",
            paddingTop: "32px",
            borderTop: "1px solid rgba(250,250,247,0.08)",
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            flexWrap: "wrap",
          }}
        >
          {["Porto · +351 937 366 484", "joao.oliveira@linkandgrow.pt", "Lisboa · Paris"].map((item) => (
            <span
              key={item}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "12px",
                color: "rgba(250,250,247,0.25)",
                letterSpacing: "0.3px",
              }}
            >
              {item}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface Metric {
  prefix?: string;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

const metrics: Metric[] = [
  { prefix: "+", value: 247, suffix: "%", label: "Tráfego Orgânico Médio", sublabel: "crescimento médio em 12 meses" },
  { value: 900,  suffix: "+", label: "Campanhas Executadas",    sublabel: "com resultados documentados" },
  { value: 500,  suffix: "+", label: "Empresas Clientes",       sublabel: "em Portugal, Espanha e França" },
  { value: 6,    suffix: "x", label: "ROI Médio em Leads",      sublabel: "retorno sobre o investimento" },
];

const testimonials = [
  {
    quote: "À medida que a estratégia delineada é implementada, os nossos resultados têm vindo a melhorar. A equipa Link&Grow demonstra conhecimento técnico e do mercado. É super proativa e faz uma excelente gestão do budget disponível.",
    author: "Manuel Sousa",
    role: "Cliente Link&Grow",
    avatar: null,
  },
  {
    quote: "Trabalhar com a Link&Grow foi um divisor de águas para a nossa empresa. Em menos de 6 meses passámos da página 3 para o top 3 nas nossas keywords estratégicas. O ROI é claramente positivo.",
    author: "Ricardo Ferreira",
    role: "CEO, Empresa B2B",
    avatar: null,
  },
  {
    quote: "A metodologia deles é diferente. Não são apenas 'links' — é uma estratégia de autoridade real. Os nossos prospects começaram a mencionar artigos em que aparecemos durante as reuniões de venda.",
    author: "Joana Moreira",
    role: "Directora de Marketing",
    avatar: null,
  },
];

/* ── Animated counter ─────────────────────────────────────────────────────── */
function CountUp({ target, prefix = "", suffix = "", start }: {
  target: number; prefix?: string; suffix?: string; start: boolean;
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const duration = 1800, steps = 60;
    const increment = target / steps;
    let current = 0;
    const id = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(id); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(id);
  }, [start, target]);
  return <span>{prefix}{count}{suffix}</span>;
}

/* ── Stagger variants ─────────────────────────────────────────────────────── */
const sectionVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

/* ── Testimonial card ─────────────────────────────────────────────────────── */
function TestimonialCard({ t, delay }: { t: typeof testimonials[0]; delay: number }) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      style={{
        flex: "1 1 280px",
        textAlign: "left",
        padding: "36px 32px",
        background: "var(--conv-ivory)",
        borderRadius: "20px",
        border: "1px solid #E5E7EB",
        position: "relative",
        overflow: "hidden",
        margin: 0,
      }}
    >
      {/* Top accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #1956C9, rgba(25,86,201,0.2))",
        }}
      />
      <div style={{ fontSize: "28px", color: "#1956C9", marginBottom: "16px", lineHeight: 1, fontFamily: "var(--font-serif)" }}>
        &ldquo;
      </div>
      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "16px",
          fontStyle: "italic",
          lineHeight: 1.7,
          color: "var(--conv-text)",
          margin: "0 0 24px",
        }}
      >
        {t.quote}
      </p>
      <footer style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "rgba(25,86,201,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
            fontWeight: 700,
            color: "#1956C9",
            fontFamily: "var(--font-sans)",
            flexShrink: 0,
          }}
        >
          {t.author[0]}
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 600, color: "var(--conv-text)" }}>
            {t.author}
          </div>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: "12px", color: "#9CA3AF" }}>
            {t.role}
          </div>
        </div>
      </footer>
    </motion.blockquote>
  );
}

/* ── Component ────────────────────────────────────────────────────────────── */
export function MetricsSection() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(triggerRef, { once: true, amount: 0.3 });

  return (
    <section ref={triggerRef} style={{ background: "rgba(250,250,247,0.65)", backdropFilter: "blur(40px)", WebkitBackdropFilter: "blur(40px)", padding: "100px 24px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Heading */}
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          style={{ textAlign: "center", marginBottom: "72px" }}
        >
          <motion.span variants={headingVariants} className="section-label">
            Resultados Comprovados
          </motion.span>
          <motion.h2
            variants={headingVariants}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(36px, 4vw, 52px)",
              fontWeight: 400,
              color: "var(--conv-text)",
              margin: "0 0 16px",
              lineHeight: 1.1,
            }}
          >
            Potencie os seus resultados digitais
          </motion.h2>
          <motion.p
            variants={headingVariants}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "17px",
              color: "#6B7280",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Diagnóstico, planeamento e execução. Estratégias que funcionam na vida real.
          </motion.p>
        </motion.div>

        {/* Metric cards */}
        <motion.div
          className="metrics-grid"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
          }}
        >
          {metrics.map((m) => (
            <motion.div
              key={m.label}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{
                background: "var(--conv-ivory)",
                borderRadius: "20px",
                padding: "36px 28px",
                border: "1px solid #F3F4F6",
                textAlign: "center",
                cursor: "default",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(44px, 4vw, 60px)",
                  fontWeight: 400,
                  color: "#1956C9",
                  lineHeight: 1,
                  marginBottom: "12px",
                }}
              >
                <CountUp target={m.value} prefix={m.prefix} suffix={m.suffix} start={inView} />
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "var(--conv-text)",
                  marginBottom: "6px",
                }}
              >
                {m.label}
              </div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "#9CA3AF", lineHeight: 1.5 }}>
                {m.sublabel}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CEO Photo + Testimonials */}
        <div style={{ marginTop: "72px" }}>
          {/* CEO feature */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            style={{
              display: "flex",
              gap: "40px",
              alignItems: "center",
              background: "var(--conv-ivory)",
              borderRadius: "24px",
              border: "1px solid #E5E7EB",
              padding: "40px 48px",
              marginBottom: "32px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flexShrink: 0, position: "relative", width: "100px", height: "100px" }}>
              <Image
                src="/images/joao-oliveira-ceo_linkandgrow.png"
                alt="João Oliveira — CEO Link&Grow"
                width={100}
                height={100}
                style={{ borderRadius: "50%", objectFit: "cover", border: "3px solid rgba(25,86,201,0.15)" }}
              />
            </div>
            <div style={{ flex: 1, minWidth: "240px" }}>
              <div style={{ fontSize: "28px", color: "#1956C9", marginBottom: "12px", lineHeight: 1, fontFamily: "var(--font-serif)" }}>
                &ldquo;
              </div>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "18px",
                  fontStyle: "italic",
                  lineHeight: 1.75,
                  color: "var(--conv-text)",
                  margin: "0 0 20px",
                }}
              >
                À medida que a estratégia delineada é implementada, os nossos resultados têm vindo a melhorar. A equipa Link&amp;Grow demonstra conhecimento técnico e do mercado. É super proativa e faz uma excelente gestão do budget disponível.
              </p>
              <div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 600, color: "var(--conv-text)" }}>
                  Manuel Sousa
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "#9CA3AF" }}>
                  Cliente Link&amp;Grow
                </div>
              </div>
            </div>
            {/* Accent line */}
            <div
              style={{
                position: "absolute" as const,
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "80px",
                height: "3px",
                background: "linear-gradient(90deg, transparent, #1956C9, transparent)",
                borderRadius: "2px",
              }}
            />
          </motion.div>

          {/* 3 testimonial cards */}
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.author} t={t} delay={0.1 + i * 0.12} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

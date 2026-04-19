"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, MouseEvent } from "react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    icon: "🔍",
    title: "Audit IA Semântico",
    subtitle: "Encontrar as falhas dos seus concorrentes",
    description:
      "Mapeamos o território de conteúdo do seu setor com IA. Identificamos os tópicos de autoridade que os seus concorrentes ignoram — e que o Google premia com tráfego qualificado.",
    tags: ["Análise Semântica", "Gap de Conteúdo", "Keyword Research", "Competitor Intel"],
    image: "/images/LinkandGrow-ContentMarketing.png",
  },
  {
    number: "02",
    icon: "✍️",
    title: "Criação de Conteúdo de Elite",
    subtitle: "Redigir o que o Google e os seus clientes adoram",
    description:
      "A nossa equipa editorial cria conteúdo de profundidade técnica e clareza B2B. Artigos que rankeiam, educam e convertem — não thin content gerado em massa.",
    tags: ["Inbound Marketing", "SEO Editorial", "Content Strategy", "Lead Nurturing"],
    image: "/images/LinkandGrow-Inbound.png",
  },
  {
    number: "03",
    icon: "🔗",
    title: "Aquisição de Links Premium",
    subtitle: "Aumentar a sua Autoridade de Domínio",
    description:
      "Colocamos a sua marca nas publicações que os seus prospects leem. Backlinks editoriais de alta autoridade que constroem confiança no Google e credibilidade no mercado.",
    tags: ["Link Building", "PR Digital", "Domain Authority", "White-Hat"],
    image: "/images/LinkandGrow-Leads.png",
  },
];

/* ── Stagger variants ─────────────────────────────────────────────────────── */
const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

/* ── 3D tilt card ─────────────────────────────────────────────────────────── */
function MethodCard({ step }: { step: typeof steps[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 280, damping: 28 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 280, damping: 28 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ boxShadow: "0 28px 64px rgba(25,86,201,0.14)" }}
      style={{
        flex: "1 1 300px",
        background: "#fff",
        borderRadius: "20px",
        padding: "0",
        border: "1px solid #F3F4F6",
        boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
        cursor: "default",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Service image */}
      <div style={{ position: "relative", width: "100%", height: "180px", background: "#F8F8F6", overflow: "hidden" }}>
        <Image
          src={step.image}
          alt={step.title}
          fill
          style={{ objectFit: "contain", padding: "20px" }}
        />
        {/* Subtle overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, transparent 60%, rgba(255,255,255,0.6) 100%)",
            pointerEvents: "none",
          }}
        />
      </div>

      <div style={{ padding: "28px 32px 32px" }}>
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(25,86,201,0.2), transparent)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "40px",
            fontWeight: 400,
            color: "#E5E7EB",
            lineHeight: 1,
            marginBottom: "12px",
            userSelect: "none",
          }}
        >
          {step.number}
        </div>

        <div style={{ fontSize: "26px", marginBottom: "12px" }}>{step.icon}</div>

        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "24px",
            fontWeight: 400,
            color: "var(--conv-text)",
            margin: "0 0 6px",
            lineHeight: 1.2,
          }}
        >
          {step.title}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "13px",
            fontWeight: 600,
            color: "#1956C9",
            margin: "0 0 16px",
            letterSpacing: "0.3px",
          }}
        >
          {step.subtitle}
        </p>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "15px",
            lineHeight: 1.7,
            color: "#4B5563",
            margin: "0 0 24px",
          }}
        >
          {step.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {step.tags.map((tag) => (
            <span
              key={tag}
              style={{
                background: "#EEF3FF",
                color: "#1956C9",
                fontFamily: "var(--font-sans)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.5px",
                padding: "4px 10px",
                borderRadius: "100px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Section ──────────────────────────────────────────────────────────────── */
export function MethodSection() {
  return (
    <section style={{ background: "rgba(250,250,247,0.65)", backdropFilter: "blur(40px)", WebkitBackdropFilter: "blur(40px)", padding: "100px 24px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Heading */}
        <motion.div
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <motion.span variants={headingVariants} className="section-label">
            A Nossa Metodologia
          </motion.span>
          <motion.h2
            variants={headingVariants}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 400,
              color: "var(--conv-text)",
              margin: "0 0 20px",
              lineHeight: 1.1,
            }}
          >
            Como ligamos a sua empresa{" "}
            <em style={{ color: "#1956C9", fontStyle: "italic" }}>ao digital</em>
          </motion.h2>
          <motion.p
            variants={headingVariants}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "17px",
              color: "#6B7280",
              maxWidth: "540px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            3 pilares que transformam a sua presença online em máquina de geração de leads qualificados.
          </motion.p>
        </motion.div>

        {/* Cards with stagger */}
        <motion.div
          className="method-grid"
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          style={{
            display: "flex",
            gap: "24px",
            perspective: "1200px",
            flexWrap: "wrap",
          }}
        >
          {steps.map((step) => (
            <MethodCard key={step.number} step={step} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

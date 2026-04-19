"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    q: "Existe risco de penalização do Google?",
    a: "Zero risco. A nossa metodologia é 100% White-Hat — sem PBN, sem redes de links artificiais. Trabalhamos com conteúdo editorial genuíno e outreach orgânico. O Google premia exatamente o que fazemos: conteúdo de profundidade com backlinks de relevância real.",
  },
  {
    q: "Quando verei o ROI?",
    a: "O SEO tem efeito cumulativo. Nos primeiros 3 meses construímos a fundação (audit, conteúdo, primeiros links). A partir do 4.º–6.º mês a visibilidade orgânica começa a crescer de forma mensurável. A dominância de mercado é visível aos 12 meses. Os clientes que permanecem connosco veem crescimento contínuo ano após ano.",
  },
  {
    q: "Porque é que a vossa tarifação é premium?",
    a: "A qualidade editorial e a autoridade dos nossos parceiros mediáticos têm um custo. Um bom link editorial vale 100 links de baixa qualidade — e não cria risco. Trabalhamos com publicações B2B de referência em Portugal e internacionalmente. O investimento é premium porque os resultados também o são.",
  },
  {
    q: "Trabalham com que tipo de empresas?",
    a: "Especializamo-nos em empresas B2B e em setores com alta concorrência digital: tecnologia, serviços profissionais, saúde, educação, e-commerce e retail. Com mais de 500 clientes e 900 campanhas executadas, conhecemos os padrões de cada setor.",
  },
  {
    q: "O que inclui a auditoria gratuita?",
    a: "A auditoria inclui: análise do Domain Authority atual vs. concorrentes, mapa de gaps de conteúdo do seu setor, top 10 oportunidades de keywords com volume e dificuldade, e um plano de ação prioritário. Entregamos em 48h, sem compromisso.",
  },
  {
    q: "Estão presentes só em Portugal?",
    a: "Somos uma agência com escritórios em Porto, Lisboa e Paris. Trabalhamos com clientes em Portugal, Espanha, França e mercados internacionais. O nosso modelo é remote-first, pelo que a localização não é uma barreira.",
  },
];

function FaqItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      style={{ borderBottom: "1px solid #E5E7EB" }}
    >
      {/* Semantic <details>/<summary> for AI/SEO optimization */}
      <details style={{ listStyle: "none" }}>
        <summary
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "24px 0",
            cursor: "pointer",
            gap: "24px",
            listStyle: "none",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "17px",
              fontWeight: 500,
              color: "var(--conv-text)",
              lineHeight: 1.4,
            }}
          >
            {faq.q}
          </span>
          <span
            className="faq-icon"
            style={{
              flexShrink: 0,
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              background: "#F3F4F6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s, transform 0.3s",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <line x1="6" y1="0" x2="6" y2="12" stroke="#374151" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="0" y1="6" x2="12" y2="6" stroke="#374151" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </span>
        </summary>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "15px",
            lineHeight: 1.75,
            color: "#4B5563",
            margin: "0 0 24px",
            paddingRight: "52px",
          }}
        >
          {faq.a}
        </p>
      </details>
    </motion.div>
  );
}

export function FaqSection() {
  return (
    <section
      aria-label="Perguntas Frequentes"
      style={{
        background: "rgba(250,250,247,0.65)",
        backdropFilter: "blur(40px)",
        WebkitBackdropFilter: "blur(40px)",
        padding: "100px 24px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "12px",
              fontWeight: 600,
              color: "#1956C9",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Perguntas Frequentes
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(36px, 4vw, 52px)",
              fontWeight: 400,
              color: "var(--conv-text)",
              margin: "0 0 16px",
              lineHeight: 1.1,
            }}
          >
            As suas dúvidas,{" "}
            <em style={{ color: "#1956C9", fontStyle: "italic" }}>respondidas</em>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "17px",
              color: "#6B7280",
              lineHeight: 1.6,
            }}
          >
            Respondemos às objeções mais comuns antes mesmo de falarmos.
          </p>
        </motion.div>

        {/* Semantic article wrapping FAQ items for AI parsers */}
        <article aria-label="FAQ Link&Grow">
          {faqs.map((faq, i) => (
            <FaqItem key={faq.q} faq={faq} index={i} />
          ))}
        </article>
      </div>

      <style>{`
        details[open] summary .faq-icon {
          background: #1956C9 !important;
          transform: rotate(45deg);
        }
        details[open] summary .faq-icon svg line {
          stroke: #fff !important;
        }
        details[open] summary span:first-child {
          color: #1956C9;
        }
        details summary::-webkit-details-marker { display: none; }
        details summary::marker { display: none; }
      `}</style>
    </section>
  );
}

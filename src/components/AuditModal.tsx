"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export function AuditModal() {
  const { open, setOpen } = useModal();
  const [form, setForm] = useState({ nome: "", email: "", empresa: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
      setForm({ nome: "", email: "", empresa: "" });
    }, 3000);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    border: "1.5px solid #E5E7EB",
    borderRadius: "10px",
    padding: "14px 16px",
    fontFamily: "var(--font-sans)",
    fontSize: "15px",
    color: "#111827",
    outline: "none",
    background: "#fff",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(14,18,32,0.88)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          <motion.div
            key="card"
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#FAFAF7",
              borderRadius: "20px",
              padding: "52px 48px 44px",
              maxWidth: "500px",
              width: "100%",
              position: "relative",
              boxShadow: "0 40px 100px rgba(0,0,0,0.4)",
            }}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Fechar"
              style={{
                position: "absolute",
                top: "18px",
                right: "18px",
                background: "rgba(0,0,0,0.06)",
                border: "none",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#6B7280",
              }}
            >
              <X size={14} />
            </button>

            {!submitted ? (
              <>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "#1956C9",
                    margin: "0 0 12px",
                  }}
                >
                  Auditoria Estratégica Gratuita
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "34px",
                    fontWeight: 400,
                    lineHeight: 1.15,
                    color: "#0E1220",
                    margin: "0 0 10px",
                  }}
                >
                  Vamos analisar o seu negócio
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "14px",
                    color: "#6B7280",
                    margin: "0 0 32px",
                    lineHeight: 1.6,
                  }}
                >
                  Entraremos em contacto em 48h com um diagnóstico personalizado da sua presença digital vs. concorrência.
                </p>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <input
                    type="text"
                    required
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    placeholder="Nome completo"
                    style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "#1956C9"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "#E5E7EB"; }}
                  />
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Email profissional"
                    style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "#1956C9"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "#E5E7EB"; }}
                  />
                  <input
                    type="text"
                    required
                    value={form.empresa}
                    onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                    placeholder="Nome da empresa"
                    style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "#1956C9"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "#E5E7EB"; }}
                  />
                  <button
                    type="submit"
                    className="btn-liquid-glass"
                    style={{ width: "100%", justifyContent: "center", marginTop: "4px" }}
                  >
                    Pedir a minha auditoria gratuita →
                  </button>
                </form>

                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "12px",
                    color: "#9CA3AF",
                    textAlign: "center",
                    marginTop: "18px",
                  }}
                >
                  Sem compromisso · Relatório em 48h · 100% confidencial
                </p>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: "center", padding: "20px 0" }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    background: "rgba(25,86,201,0.1)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    fontSize: "28px",
                  }}
                >
                  ✓
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "28px",
                    color: "#0E1220",
                    margin: "0 0 10px",
                  }}
                >
                  Pedido recebido!
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "15px", color: "#6B7280", lineHeight: 1.6 }}>
                  A nossa equipa entrará em contacto consigo em menos de 48h com a sua auditoria personalizada.
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

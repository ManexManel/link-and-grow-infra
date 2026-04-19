"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";

const LANGUAGES = [
  { code: "PT", label: "Português", abbr: "PT" },
  { code: "FR", label: "Français",  abbr: "FR" },
  { code: "EN", label: "English",   abbr: "EN" },
];

export function Navbar() {
  const { setOpen } = useModal();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState(LANGUAGES[0]);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function onOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 7px 0px",
        height: "108px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "108px",
        }}
      >
        {/* Logo */}
        <a href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <Image
            src="/images/linkandgrow-logo.svg"
            alt="Link&amp;Grow"
            width={180}
            height={37}
            style={{ width: "180px", height: "auto" }}
            priority
          />
        </a>

        {/* Desktop Nav */}
        <nav
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <NavLink href="https://linkandgrow.pt/solucoes/">Soluções ▾</NavLink>
          <NavLink href="https://linkandgrow.pt/como-fazemos/">Como Fazemos ▾</NavLink>
          <NavLink href="https://linkandgrow.pt/agencia/">Agência ▾</NavLink>

          {/* Franchising + badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <NavLink href="https://linkandgrow.pt/franchising/">Franchising</NavLink>
            <span
              style={{
                backgroundColor: "#1F7BFF",
                color: "#fff",
                fontSize: "10px",
                fontWeight: 700,
                padding: "2px 6px",
                borderRadius: "3px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                whiteSpace: "nowrap",
              }}
            >
              NOVIDADE
            </span>
          </div>

          {/* Language switcher */}
          <div ref={langRef} style={{ position: "relative" }}>
            <button
              onClick={() => setLangOpen((v) => !v)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                cursor: "pointer",
                fontFamily: "Rubik, sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                color: "rgb(48, 71, 99)",
                background: langOpen ? "rgba(25,86,201,0.07)" : "transparent",
                border: `1px solid ${langOpen ? "rgba(25,86,201,0.3)" : "rgba(0,0,0,0.15)"}`,
                padding: "5px 10px",
                borderRadius: "6px",
                transition: "background 0.2s, border-color 0.2s",
                letterSpacing: "0.5px",
              }}
              onMouseEnter={(e) => { if (!langOpen) { e.currentTarget.style.background = "rgba(0,0,0,0.04)"; } }}
              onMouseLeave={(e) => { if (!langOpen) { e.currentTarget.style.background = "transparent"; } }}
            >
              <span>{lang.abbr}</span>
              <svg width="9" height="6" viewBox="0 0 9 6" fill="none" style={{ opacity: 0.5, transform: langOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
                <path d="M1 1l3.5 3.5L8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {langOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  right: 0,
                  background: "#fff",
                  border: "1px solid #E5E7EB",
                  borderRadius: "10px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                  overflow: "hidden",
                  minWidth: "160px",
                  zIndex: 1000,
                }}
              >
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l); setLangOpen(false); }}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "10px 16px",
                      background: l.code === lang.code ? "rgba(25,86,201,0.06)" : "none",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "Rubik, sans-serif",
                      fontSize: "14px",
                      color: l.code === lang.code ? "#1956C9" : "rgb(48,71,99)",
                      fontWeight: l.code === lang.code ? 600 : 400,
                      textAlign: "left",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) => { if (l.code !== lang.code) e.currentTarget.style.background = "rgba(0,0,0,0.04)"; }}
                    onMouseLeave={(e) => { if (l.code !== lang.code) e.currentTarget.style.background = "none"; }}
                  >
                    <span style={{
                      width: "28px", height: "20px", background: "#E5E7EB", borderRadius: "3px",
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      fontSize: "11px", fontWeight: 700, color: "#374151", flexShrink: 0,
                      ...(l.code === lang.code ? { background: "rgba(25,86,201,0.15)", color: "#1956C9" } : {})
                    }}>{l.abbr}</span>
                    <span>{l.label}</span>
                    {l.code === lang.code && <span style={{ marginLeft: "auto", color: "#1956C9", fontSize: "14px" }}>✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search icon */}
          <button
            aria-label="Pesquisar"
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              color: "rgb(48, 71, 99)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.8" />
              <line x1="12.8" y1="12.8" x2="17" y2="17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </nav>

        {/* CTA button — opens modal */}
        <button
          onClick={() => setOpen(true)}
          className="cta-btn desktop-cta"
        >
          PEDIR PROPOSTA
        </button>

        {/* Hamburger (mobile) */}
        <button
          className="hamburger"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "28px",
            color: "rgb(48, 71, 99)",
            padding: "4px",
            display: "none",
          }}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div
          className="mobile-menu"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.98)",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px 0px",
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <MobileNavLink href="https://linkandgrow.pt/solucoes/">Soluções</MobileNavLink>
          <MobileNavLink href="https://linkandgrow.pt/como-fazemos/">Como Fazemos</MobileNavLink>
          <MobileNavLink href="https://linkandgrow.pt/agencia/">Agência</MobileNavLink>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <MobileNavLink href="https://linkandgrow.pt/franchising/">Franchising</MobileNavLink>
            <span
              style={{
                backgroundColor: "#1F7BFF",
                color: "#fff",
                fontSize: "10px",
                fontWeight: 700,
                padding: "2px 6px",
                borderRadius: "3px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              NOVIDADE
            </span>
          </div>
          <button
            onClick={() => { setOpen(true); setMobileOpen(false); }}
            className="cta-btn"
            style={{ textAlign: "center", width: "100%", border: "none" }}
          >
            PEDIR PROPOSTA
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 992px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @media (min-width: 993px) {
          .mobile-menu { display: none !important; }
        }
        .nav-link {
          font-family: Rubik, sans-serif;
          font-size: 16px;
          font-weight: 400;
          color: rgb(48, 71, 99);
          text-decoration: none;
          cursor: pointer;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .nav-link:hover { color: rgb(31, 123, 255); }
        .cta-btn {
          position: relative;
          overflow: hidden;
          background: rgba(25, 86, 201, 0.9);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          font-family: var(--font-inter, 'Inter', sans-serif);
          letter-spacing: 1.2px;
          text-transform: uppercase;
          border-radius: 8px;
          padding: 11px 24px;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
          transition: background 0.25s, transform 0.15s, box-shadow 0.25s;
          display: inline-block;
          box-shadow: 0 4px 20px rgba(25,86,201,0.4), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.1);
        }
        .cta-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -60%;
          width: 40%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shimmer 3s ease-in-out infinite;
          pointer-events: none;
        }
        .cta-btn:hover {
          background: rgba(25,86,201,1);
          transform: translateY(-1px);
          box-shadow: 0 8px 28px rgba(25,86,201,0.55), inset 0 1px 0 rgba(255,255,255,0.3);
        }
      `}</style>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="nav-link" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontFamily: "Rubik, sans-serif",
        fontSize: "16px",
        fontWeight: 400,
        color: "rgb(48, 71, 99)",
        textDecoration: "none",
        cursor: "pointer",
      }}
    >
      {children}
    </a>
  );
}

"use client";

import { useEffect, useState } from "react";

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: "À PROPOS", href: "#a-propos", id: "a-propos" },
  { label: "STRATÉGIE DE MARQUE", href: "#strategie", id: "strategie" },
  { label: "BRANDING", href: "#branding-naming", id: "branding-naming" },
  { label: "IMAGE", href: "#image", id: "image" },
  { label: "BRAND CONTENT", href: "#brand-content", id: "brand-content" },
  { label: "DIGITAL", href: "#digital", id: "digital" },
  { label: "SOCIAL MEDIA & INFLUENCE", href: "#social", id: "social" },
  { label: "EDITION", href: "#edition", id: "edition" },
];

export function StickyServicesNav() {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(id);
            }
          });
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 99,
        backgroundColor: "rgb(239, 239, 239)",
        height: "50px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "0 160px",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {navItems.map(({ label, href, id }) => {
          const isActive = activeId === id;
          return (
            <li key={id}>
              <a
                href={href}
                style={{
                  fontFamily: '"Din Pro", sans-serif',
                  fontSize: "12px",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "#000" : "#333",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  padding: "0 15px",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  borderBottom: isActive ? "2px solid #000" : "2px solid transparent",
                  boxSizing: "border-box",
                }}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

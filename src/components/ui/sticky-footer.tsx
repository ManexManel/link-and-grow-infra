"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
/* Social SVG icons — lucide-react v1.6 doesn't ship brand icons */
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
    </svg>
  );
}
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.56A3.02 3.02 0 0 0 .5 6.2C0 8.06 0 12 0 12s0 3.94.5 5.8a3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.14C24 15.94 24 12 24 12s0-3.94-.5-5.8zM9.75 15.5v-7l6.25 3.5-6.25 3.5z"/>
    </svg>
  );
}
interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}
interface FooterLinkGroup {
  label: string;
  links: FooterLink[];
}

type StickyFooterProps = React.ComponentProps<"footer">;

export function StickyFooter({ className, ...props }: StickyFooterProps) {
  return (
    <footer
      className={cn("relative h-[780px] w-full", className)}
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      {...props}
    >
      <div className="fixed bottom-0 h-[780px] w-full">
        <div className="sticky top-[calc(100vh-780px)] h-full overflow-y-auto">
          <div
            className="relative flex size-full flex-col justify-between gap-5 border-t px-4 py-8 md:px-12"
            style={{
              background: "#0E1220",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            {/* Ambient radial glows */}
            <div aria-hidden className="absolute inset-0 isolate z-0 contain-strict">
              <div
                className="absolute top-0 left-0 -translate-y-1/2 -rotate-45 rounded-full"
                style={{
                  width: "560px",
                  height: "560px",
                  background:
                    "radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(25,86,201,0.07) 0, rgba(100,100,100,0.02) 50%, rgba(25,86,201,0.01) 80%)",
                }}
              />
              <div
                className="absolute top-0 left-0 -rotate-45 rounded-full"
                style={{
                  width: "240px",
                  height: "560px",
                  translate: "5% -50%",
                  background:
                    "radial-gradient(50% 50% at 50% 50%, rgba(25,86,201,0.04) 0, rgba(25,86,201,0.01) 80%, transparent 100%)",
                }}
              />
            </div>

            {/* Main content row */}
            <div className="relative z-10 mt-10 flex flex-col gap-8 md:flex-row xl:mt-0">
              {/* Brand column */}
              <AnimatedContainer className="w-full max-w-xs min-w-48 space-y-4">
                <Image
                  src="/images/linkandgrow-logo.svg"
                  alt="Link&Grow"
                  width={160}
                  height={33}
                  style={{ filter: "brightness(0) invert(1)", opacity: 0.9 }}
                />
                <p style={{ color: "rgba(250,250,247,0.55)", fontSize: "14px", lineHeight: 1.7, marginTop: "16px" }}>
                  Agência de Marketing Digital focada em resultados e performance. Inbound Marketing para alavancar o seu negócio digital.
                </p>
                <div className="flex gap-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.title}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.title}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "32px",
                        height: "32px",
                        borderRadius: "6px",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "rgba(250,250,247,0.6)",
                        transition: "background 0.2s, color 0.2s",
                        textDecoration: "none",
                        flexShrink: 0,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(25,86,201,0.3)";
                        (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)";
                        (e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,250,247,0.6)";
                      }}
                    >
                      <link.icon className="size-4" />
                    </a>
                  ))}
                </div>
              </AnimatedContainer>

              {/* Link groups */}
              {footerLinkGroups.map((group, index) => (
                <AnimatedContainer
                  key={group.label}
                  delay={0.1 + index * 0.1}
                  className="w-full"
                >
                  <div className="mb-10 md:mb-0">
                    <h3
                      style={{
                        fontSize: "11px",
                        fontFamily: "var(--font-sans)",
                        fontWeight: 600,
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                        color: "rgba(250,250,247,0.4)",
                        marginBottom: "16px",
                      }}
                    >
                      {group.label}
                    </h3>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      {group.links.map((link) => (
                        <li key={link.title}>
                          <a
                            href={link.href}
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: "13px",
                              color: "rgba(250,250,247,0.55)",
                              textDecoration: "none",
                              display: "inline-flex",
                              alignItems: "center",
                              transition: "color 0.2s",
                            }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,250,247,0.95)";
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,250,247,0.55)";
                            }}
                          >
                            {link.icon && <link.icon className="me-1 size-4" />}
                            {link.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedContainer>
              ))}
            </div>

            {/* Bottom bar */}
            <div
              className="relative z-10 flex flex-col items-center justify-between gap-2 pt-4 text-sm md:flex-row"
              style={{
                borderTop: "1px solid rgba(255,255,255,0.08)",
                fontFamily: "var(--font-sans)",
                color: "rgba(250,250,247,0.3)",
                fontSize: "12px",
              }}
            >
              <p>© 2026 Link&amp;Grow. Todos os direitos reservados.</p>
              <p>Porto · Lisboa · Paris</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── Data ─────────────────────────────────────────────────────────────────── */
const socialLinks = [
  { title: "Facebook",  href: "https://www.facebook.com/linkandgrow/",        icon: FacebookIcon  },
  { title: "Instagram", href: "https://www.instagram.com/linkandgrow/",       icon: InstagramIcon },
  { title: "LinkedIn",  href: "https://www.linkedin.com/company/linkandgrow/",icon: LinkedinIcon  },
  { title: "Twitter/X", href: "#",                                             icon: XIcon         },
  { title: "YouTube",   href: "#",                                             icon: YoutubeIcon   },
];

const footerLinkGroups: FooterLinkGroup[] = [
  {
    label: "Soluções",
    links: [
      { title: "Inbound Marketing",  href: "#" },
      { title: "E-Commerce",         href: "#" },
      { title: "Web Design",         href: "#" },
      { title: "Automação",          href: "#" },
      { title: "Geração de Leads",   href: "#" },
      { title: "Conteúdo",           href: "#" },
      { title: "SEO",                href: "#" },
      { title: "Vendas e CRM",       href: "#" },
      { title: "Social Media",       href: "#" },
      { title: "Email Marketing",    href: "#" },
      { title: "Campanhas PPC",      href: "#" },
      { title: "Tecnologia",         href: "#" },
    ],
  },
  {
    label: "Como Fazemos",
    links: [
      { title: "Metodologia",            href: "#" },
      { title: "Cases de Sucesso",       href: "#" },
      { title: "Parceiros Tecnológicos", href: "#" },
      { title: "Blog",                   href: "#" },
      { title: "Recursos",               href: "#" },
    ],
  },
  {
    label: "Agência",
    links: [
      { title: "Sobre Nós",    href: "#" },
      { title: "Equipa",       href: "#" },
      { title: "Franchising",  href: "#" },
      { title: "Carreiras",    href: "#" },
      { title: "Contacto",     href: "#" },
      { title: "Imprensa",     href: "#" },
    ],
  },
  {
    label: "Legal",
    links: [
      { title: "Política de Privacidade", href: "#" },
      { title: "Termos e Condições",      href: "#" },
      { title: "Política de Cookies",     href: "#" },
    ],
  },
];

/* ── AnimatedContainer ────────────────────────────────────────────────────── */
type AnimatedContainerProps = React.ComponentProps<typeof motion.div> & {
  children?: React.ReactNode;
  delay?: number;
};

function AnimatedContainer({ delay = 0.1, children, ...props }: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div {...(props as React.ComponentProps<"div">)}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

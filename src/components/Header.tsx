"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "ACCUEIL", href: "/fr/" },
  { label: "L'AGENCE", href: "/fr/lagence/" },
  { label: "EXPERTISES", href: "/fr/expertises/" },
  { label: "PROJETS", href: "/fr/projets/" },
  { label: "OMEDIATALK", href: "/fr/omediatalk/" },
  { label: "TALENTS", href: "/fr/talents/" },
  { label: "CONTACT", href: "/fr/contact/" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="absolute top-0 left-0 w-full flex items-center justify-between"
      style={{ zIndex: 1000, height: "80px" }}
    >
      {/* Logo */}
      <div className="pl-10 flex items-center">
        <Link href="/fr/">
          <Image
            src="/images/logo-omedia-blanc.png"
            alt="Omedia Paris"
            width={160}
            height={60}
            style={{ height: "60px", width: "auto" }}
            priority
          />
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-white uppercase tracking-[2px] text-[12px] font-light hover:opacity-70 transition-opacity"
            style={{ fontFamily: "Avenir, sans-serif" }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Language Switcher */}
      <div
        className="hidden md:flex items-center gap-2 pr-10"
        style={{ fontFamily: "Avenir, sans-serif" }}
      >
        <Link
          href="/fr/"
          className="text-white uppercase tracking-[2px] text-[12px] font-light hover:opacity-70 transition-opacity"
        >
          FR
        </Link>
        <span className="text-white text-[12px] font-light">|</span>
        <Link
          href="/en/"
          className="text-white uppercase tracking-[2px] text-[12px] font-light hover:opacity-70 transition-opacity"
        >
          EN
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col justify-center items-center gap-[5px] pr-6 cursor-pointer bg-transparent border-none"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-[1px] bg-white transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`}
        />
        <span
          className={`block w-6 h-[1px] bg-white transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-6 h-[1px] bg-white transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
        />
      </button>
    </header>
  );
}

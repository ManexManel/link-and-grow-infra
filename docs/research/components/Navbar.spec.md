# Navbar Specification

## Overview
- **Target file:** `src/components/Navbar.tsx`
- **Screenshot:** `docs/design-references/navbar.png`
- **Interaction model:** hover dropdowns, fixed position

## DOM Structure
```
<header> fixed, full-width, height 108px
  <div> container max-width ~1200px, flex, align-items center, justify-content space-between
    <a href="/"> logo image (SVG, 300x62 visual but rendered smaller ~180px wide)
    <nav> flex row, gap ~32px, align-items center
      <a>Soluções ▾</a>
      <a>Como Fazemos ▾</a>
      <a>Agência ▾</a>
      <a>Franchising <span class="badge">NOVIDADE</span></a>
      <span> flag icon PT ▾  (language switcher)
      <svg> search icon
    <a href="/pedir-proposta/" class="cta-btn">PEDIR PROPOSTA</a>
```

## Computed Styles (exact values from getComputedStyle)

### Header container
- position: fixed
- top: 0
- left: 0
- right: 0
- zIndex: 999
- backgroundColor: rgba(255, 255, 255, 0.95)
- boxShadow: rgba(0, 0, 0, 0.1) 0px 0px 7px 0px
- height: 108px
- display: flex
- alignItems: center

### Inner container
- maxWidth: 1200px
- margin: 0 auto
- padding: 0 24px
- display: flex
- alignItems: center
- justifyContent: space-between
- width: 100%

### Logo image
- width: ~180px (original SVG 300x62)
- height: auto

### Nav links
- fontSize: 16px
- fontFamily: Rubik, sans-serif
- fontWeight: 400
- color: rgb(48, 71, 99) = #304763
- textDecoration: none
- cursor: pointer
- display: flex
- alignItems: center
- gap: 4px (for dropdown arrow)

### "NOVIDADE" badge
- backgroundColor: rgb(31, 123, 255) = #1F7BFF
- color: rgb(255, 255, 255)
- fontSize: 10px
- fontWeight: 700
- padding: 2px 6px
- borderRadius: 3px
- textTransform: uppercase
- letterSpacing: 0.5px

### CTA Button "PEDIR PROPOSTA"
- backgroundColor: rgb(31, 123, 255) = #1F7BFF
- color: rgb(255, 255, 255)
- fontSize: 13px
- fontWeight: 500
- fontFamily: Rubik, sans-serif
- letterSpacing: 0.2px
- textTransform: uppercase
- borderRadius: 5px
- padding: 12px 24px
- textDecoration: none
- display: inline-block
- whiteSpace: nowrap

## States & Behaviors

### Fixed position
- Always visible, does not scroll away.
- No change between scroll-0 and scrolled states.

### Hover on nav links
- Color darkens slightly (likely #1F7BFF or underline).

### Dropdown menus (simplified — show on hover)
- Soluções submenu: Inbound Marketing, Inbound Commerce, Web Design & Developing, Marketing Automation, Lead Generation, Pay Per Click (PPC), Social Media, Email Marketing, Marketing de Conteúdo, SEO, Inbound Sales e CRM
- Como Fazemos: Coach Me, Make it Happen, Full Service
- Agência: Sobre, Equipa, Clientes, Blog

## Assets
- Logo: `public/images/linkandgrow-logo.svg`

## Text Content (verbatim)
- Nav links: "Soluções", "Como Fazemos", "Agência", "Franchising", badge: "NOVIDADE"
- CTA: "PEDIR PROPOSTA"

## Responsive Behavior
- **Desktop (1440px):** Full navbar with all links visible
- **Mobile (390px):** Hamburger menu icon replaces nav links; logo stays left
- **Breakpoint:** ~992px

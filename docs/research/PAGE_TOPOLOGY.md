# Page Topology — omediaparis.com/fr/

## Overview
Single-page scrolling site for OMEDIA PARIS, a luxury communications agency. Dark/elegant aesthetic.
Framework: WordPress + Elementor (we're building in Next.js).

## Sections (top → bottom)

1. **Header** — fixed/absolute, transparent bg, white text. Logo left, nav center, FR/EN right.
2. **Hero** — full-viewport autoplay video (webm showreel), text overlay "SHOWREEL Omedia Paris 24", CTA button "DÉCOUVRIR LA CAMPAGNE"
3. **Sticky Services Nav** — becomes fixed on scroll, #efefef bg, 50px tall, 8 anchor links: À PROPOS | STRATÉGIE DE MARQUE | BRANDING | IMAGE | BRAND CONTENT | DIGITAL | SOCIAL MEDIA & INFLUENCE | EDITION. Active item shows underline.
4. **À Propos** — id="a-propos". 2-col: left (heading + body text + link), right (photo). Mini-footer below.
5. **Stratégie de Marque** — id="strategie". 2-col: left (heading + body + link), right (B&W photo). Mini-footer.
6. **Branding** — id="branding-naming". 2-col: left (heading + body + link), right (3-image triptych grid). Mini-footer.
7. **Image** — id="image". REVERSED 2-col: left (large heading), right (body text + link). Image full-width below heading. Mini-footer.
8. **Brand Content** — id="brand-content". 2-col: left (heading + body + link), right (3-image triptych). Mini-footer.
9. **Digital** — id="digital". 2-col: left (heading + body + link), right (phone mockup image). Mini-footer.
10. **Social Media & Influence** — id="social". 2-col: left (heading + body + link), right (3 stacked images). Mini-footer.
11. **Édition** — id="edition". 2-col: left (heading + body + link), right (book/edition image). Mini-footer.
12. **Slider** — 2-col: left (Haussmann building illustration + OMEDIA PARIS text), right (Swiper carousel with 4 bg-image slides, Ken Burns effect).
13. **Footer** — NEWSLETTER heading + email input + gold button. Social icons. Nav links. Address + phone + email.

## Sticky Elements
- **Header**: position: absolute at top, transitions to fixed-floating style on scroll (needs JS scroll listener)
- **Sticky nav**: bdt-sticky plugin → position fixed on scroll, top: 0, z-index: 99

## Interaction Models
- Header: static interaction (transparent → minimal on scroll)
- Hero: video autoplay, static text overlay
- Sticky nav: scroll-driven highlighting of active section
- Mini-footer: static
- Slider: Swiper.js carousel, auto-advances, has Ken Burns effect on bg images, dot pagination
- Footer: static + newsletter form

## Z-index Layers
- Header: above everything (z-index ~1000)
- Sticky nav: z-index 99
- Page content: z-index 0

## Color Palette
- White: #ffffff (section backgrounds)
- Black: #000000 (text, logo dark version)
- Gray nav: #efefef (rgb(239,239,239)) — sticky services nav
- Gold: rgb(245,191,69) = #f5bf45 — footer CTA button
- Dark section separator: thin line border

## Typography
- **Headings (H2)**: "Din Pro", 64px, 700, black, letter-spacing: -1.728px
- **Body text**: "Din Pro", 16px, 300, line-height: 30px, black on white sections
- **Nav links (main header)**: Avenir, 12px, 300, white, letter-spacing: 2px, uppercase
- **Sticky nav links**: Din Pro, ~13px, 400, dark (#333), padding: 0 15px
- **SERVICES/ADRESSE/CONTACT labels**: Din Pro, ~13px, 700, black, uppercase
- **Services list items**: Din Pro, ~13px, uppercase, black
- **CTA links**: Din Pro, 16px, black, underline decoration (small line below)

## Mini-Footer Pattern (repeated after each section)
4-column layout on white bg:
- Col 1 (~200px): OMEDIA PARIS dark logo (logo-omedia.png)
- Col 2 (~350px): SERVICES label + list of service items (uppercase, small)
- Col 3 (~200px): ADRESSE label + address
- Col 4 (~200px): CONTACT label + phone + email + social icons
Separated from main section by thin horizontal rule. Padding: ~40px 80px.

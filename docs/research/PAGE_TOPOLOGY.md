# Page Topology — linkandgrow.pt

## Overview
- **URL:** https://linkandgrow.pt/
- **Platform:** WordPress + Elementor (we're building in Next.js)
- **Total height:** ~6915px (desktop 1440px)
- **Primary fonts:** Nunito (headings), Rubik (body)
- **Scroll library:** None (standard browser scroll)

## Section Map (top to bottom)

| # | Name | Component | Height | Interaction |
|---|------|-----------|--------|-------------|
| 0 | Navbar | `Navbar.tsx` | 108px fixed | hover dropdowns |
| 1 | Hero | `HeroSection.tsx` | 482px | typing animation |
| 2 | About | `AboutSection.tsx` | 613px | static |
| 3 | Services | `ServicesSection.tsx` | 985px | static |
| 4 | Stats/Team | `StatsSection.tsx` | 435px | static |
| 5 | Testimonials | `TestimonialsSection.tsx` | 344px | auto carousel |
| 6 | Client Logos | `ClientLogosSection.tsx` | 246px | marquee |
| 7 | Franchising | `FranchisingSection.tsx` | 579px | static |
| 8 | Cases de Sucesso | `CasesSection.tsx` | 184+462px | click carousel |
| 9 | Blog Articles | `BlogSection.tsx` | ~400px | static |
| 10 | Contact Form | `ContactFormSection.tsx` | ~700px | static |
| 11 | Footer | `Footer.tsx` | ~540px | static |

## Z-Index Layers
- Navbar: position fixed, always on top
- WhatsApp chat widget: not cloned

## Page Layout
- Max-width inner container: ~1200px centered
- Full-bleed section backgrounds
- Franchising section bg: rgb(48,71,99) = #304763 (navy)
- All other sections: white or transparent over white body

# SectionMiniFooter Specification

## Overview
- **Target file:** `src/components/SectionMiniFooter.tsx`
- **Interaction model:** static
- Reusable component that appears below each main content section (À Propos, Stratégie, Branding, etc.)

## DOM Structure
Separated from section above by thin horizontal rule.
4-column layout:
- Col 1 (~200px): OMEDIA PARIS dark logo
- Col 2 (~350px): SERVICES label + list of service items
- Col 3 (~200px): ADRESSE label + address
- Col 4 (~200px): CONTACT label + phone + email + social icons

## Computed Styles

### Outer wrapper
- background: #ffffff
- border-top: 1px solid #e5e5e5
- padding: 40px 80px
- display: flex
- align-items: flex-start
- gap: 0 (columns use flex or percentage widths)

### Logo image
- src: /images/logo-omedia.png (dark version)
- height: ~40px
- width: auto

### SERVICES label
- font-family: "Din Pro", sans-serif
- font-size: 11px
- font-weight: 700
- letter-spacing: 1.5px
- text-transform: uppercase
- color: #000
- margin-bottom: 12px

### Services list items
- font-family: "Din Pro", sans-serif
- font-size: 11px
- font-weight: 400
- letter-spacing: 1px
- text-transform: uppercase
- color: #000
- line-height: 2
- list-style: none

### ADRESSE / CONTACT labels
- Same as SERVICES label

### Address text, phone, email
- font-family: "Din Pro", sans-serif
- font-size: 13px
- font-weight: 400
- color: #000
- line-height: 1.8

### Social icons (Instagram, LinkedIn)
- Displayed as icon font or SVG
- color: #000
- font-size: ~18px
- margin-top: 12px
- gap: 12px between icons

## Props Interface
```ts
interface SectionMiniFooterProps {
  services: string[];
}
```

## Text Content (varies per section — examples)

### À Propos services:
CONSEIL ET PLANNING STRATÉGIQUE, PLATEFORME DE MARQUE, MANIFESTE

### Stratégie de marque services:
CONSEIL, PLANNING STRATÉGIQUE, PLATEFORME DE MARQUE, MANIFESTE, TERRITOIRE D'EXPRESSION, BRAND BOOK, CREATIVE GUIDELINES

### Branding services:
CRÉATION DE NOM, ICONOGRAPHIE, TERRITOIRE VISUEL, CHARTE GRAPHIQUE, LOGOTYPE, OUTILS DE COMMUNICATION

### Image services:
DIRECTION DE CRÉATION, CRÉATION DE CONCEPT SINGULIER, CAMPAGNE PUBLICITAIRE, PRINT TV ONLINE, PRODUCTION ET ACHAT D'ART, IDENTITÉ VISUELLE, DESIGN

### Brand Content services:
STRATÉGIE DE CONTENU, DIRECTION ARTISTIQUE, STRATÉGIE D'ACTIVATION, STORYTELLING, PRODUCTION PHOTO, PRODUCTION FILM

### Digital services:
STRATÉGIE DIGITALE, UX DESIGN, UI DESIGN, WEBDESIGN, SITE WEB CORPORATE PRODUIT ÉVÉNEMENTIEL, SITE E-COMMERCE, ACQUISITION, SEO SEA, MARKETPLACE, CRM

### Social Media services:
STRATÉGIE DIGITALE, ACTIVATION SOCIALE, MARKETING D'INFLUENCE (micro et macro), SOCIAL MEDIA INFLUENCE, CRÉATION ET PRODUCTION DE CONTENU, COMMUNITY MANAGEMENT, SOCIAL ADVERTISING

### Édition services:
STRATÉGIE ÉDITORIALE, STORYTELLING, ICONOGRAPHIE, ÉDITION DE PRESTIGE, CONCEPTION ET RÉDACTION, FABRICATION, STRATÉGIE DE CONTENUS

## Shared content (all sections)
ADRESSE: 137 BOULEVARD HAUSSMANN / 75008 PARIS
CONTACT: +33 | 44 34 10 40 / contact@omedia.fr
Social: Instagram (https://www.instagram.com/omediaparis/), LinkedIn (https://www.linkedin.com/company/omedia/)

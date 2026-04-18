# Header Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Interaction model:** scroll-driven — transparent at top, remains transparent but hero scrolls away
- **Screenshot:** full page top

## DOM Structure
Fixed/absolute positioned header over hero video. Two rows:
- Row 1: Logo (left) | Nav links (center) | FR/EN (right)
- The nav has a mobile hamburger toggle

## Computed Styles

### Header container
- position: absolute (at scroll 0), then becomes "floating" via JS scroll class
- top: 0
- width: 100%
- z-index: 1000
- background: transparent (rgba(0,0,0,0))
- padding: 0

### Logo image
- src: /images/logo-omedia-blanc.png (white version for dark background)
- height: ~60px
- position: top-left, padding-left: ~40px

### Nav links (main)
- font-family: "Avenir", sans-serif
- font-size: 12px
- font-weight: 300
- color: rgb(255,255,255) — white
- letter-spacing: 2px
- text-transform: uppercase
- padding: 0 (spacing via gap)
- display: flex, gap between items

### Language switcher (FR / EN)
- Same style as nav links (Avenir 12px white)
- FR is active (bold or separator)
- "FR | EN" with separator
- Positioned far right, padding-right: ~40px

## Text Content
Nav: ACCUEIL | L'AGENCE | EXPERTISES | PROJETS | OMEDIATALK | TALENTS | CONTACT
Language: FR  EN

## Links
- ACCUEIL → /fr/
- L'AGENCE → dropdown
- EXPERTISES → dropdown
- PROJETS → dropdown
- OMEDIATALK → /fr/omediatalk/
- TALENTS → /fr/talents/
- CONTACT → /fr/contact/
- FR → /fr/
- EN → /en/

## Responsive
- Desktop 1440px: full horizontal nav
- Mobile: hamburger menu (≡), nav hidden, logo remains

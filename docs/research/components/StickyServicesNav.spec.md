# StickyServicesNav Specification

## Overview
- **Target file:** `src/components/StickyServicesNav.tsx`
- **Interaction model:** scroll-driven — appears fixed at top once hero scrolls out of view. Active item highlights as corresponding section enters viewport.

## DOM Structure
- Horizontal nav bar, full-width
- 8 anchor links separated by spacing
- Active item has bottom underline indicator

## Computed Styles

### Container
- position: sticky, top: 0 (becomes fixed via JS on scroll past hero)
- z-index: 99
- background: rgb(239, 239, 239) = #efefef
- height: 50px
- width: 100%
- display: flex
- align-items: center
- padding: 0 160px (large side padding)
- border-bottom: 1px solid #e0e0e0 (subtle)

### Nav links (ul > li > a)
- font-family: "Din Pro", sans-serif (NOTE: computed shows system font but visual matches Din Pro size)
- font-size: 12px
- font-weight: 400
- color: rgb(51, 51, 51) = #333333
- letter-spacing: 1px
- text-transform: uppercase
- padding: 0 15px
- text-decoration: none
- white-space: nowrap

### Active link state
- color: #000000
- border-bottom: 2px solid #000000
- padding-bottom: 2px (so underline is visible within 50px height)

### Hover state
- color: #000000

## Text Content (8 items)
1. À PROPOS → #a-propos
2. STRATÉGIE DE MARQUE → #strategie
3. BRANDING → #branding-naming
4. IMAGE → #image
5. BRAND CONTENT → #brand-content
6. DIGITAL → #digital
7. SOCIAL MEDIA & INFLUENCE → #social
8. EDITION → #edition

## Behavior Implementation
- Use `useEffect` with `IntersectionObserver` on each section
- rootMargin: "-40% 0px -50% 0px" — triggers when section is centered in viewport
- On observe: set activeSection state, update active class
- Nav becomes sticky: `position: sticky; top: 0` in CSS is sufficient (no JS needed for the sticky itself)

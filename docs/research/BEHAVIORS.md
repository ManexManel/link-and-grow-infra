# Behaviors — omediaparis.com/fr/

## Header
- At scroll 0: absolutely positioned over hero video, transparent background, white text/logo
- On scroll: stays in position, hero video scrolls away underneath

## Sticky Services Nav
- Trigger: appears/sticks at top once the hero section scrolls past
- Mechanism: bdt-sticky (Elementor plugin wrapper) → CSS position: sticky + position: fixed
- Before: relative, hidden behind hero
- After: fixed at top: 0, z-index: 99, bg: rgb(239,239,239), height: 50px
- Active item: underline indicator on current in-view section (IntersectionObserver pattern)
- Implementation: use IntersectionObserver on each section, update active nav item

## Hero Video
- Autoplay, loop, muted webm video
- Text overlaid: "SHOWREEL Omedia Paris 24" (small label above) + "DÉCOUVRIR LA CAMPAGNE" button link
- Full viewport height (100vh)

## Slider (Swiper)
- 4 slides with Ken Burns (pan/zoom) bg-image effect on active slide
- Dot pagination below
- Auto-advances (approximately 5s per slide)
- Background-size: cover, background-position: center

## Section Scroll Highlighting
- As each section (À PROPOS, STRATÉGIE, etc.) enters viewport, the sticky nav highlights that item
- Implemented with IntersectionObserver (rootMargin "-40% 0px -50% 0px" style)

## Hover States
- Nav links: slight opacity change on hover
- CTA links (À propos, Clients et stratégies, etc.): appear with small underline element
- Triptych images: likely subtle scale or brightness on hover (standard pattern)
- Social icons: opacity change
- Footer button: slight darkening of gold on hover

## Responsive
- Desktop 1440px: full 2-column layout
- Mobile: stacks to single column (image goes below text), nav collapses to hamburger

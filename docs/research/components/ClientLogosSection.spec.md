# ClientLogosSection Specification

## Overview
- **Target file:** `src/components/ClientLogosSection.tsx`
- **Screenshot:** `docs/design-references/client-logos.png`
- **Interaction model:** CSS marquee animation (infinite horizontal scroll)

## DOM Structure
```
<section> white bg, padding 40px 0, overflow hidden
  <div> marquee-track (wide flex row, animates translateX left infinitely)
    [logo images × N, repeated twice for seamless loop]
      <img> client logo, grayscale or color
```

## Computed Styles

### Section
- backgroundColor: rgb(255, 255, 255)
- paddingTop: 40px
- paddingBottom: 40px
- overflow: hidden

### Marquee track
- display: flex
- alignItems: center
- gap: 48px
- animation: marquee 30s linear infinite
- width: fit-content

### Logo image
- height: 40px
- width: auto
- objectFit: contain
- filter: grayscale(0) or grayscale(100%) with hover reveal color
- opacity: 0.7 (with hover → 1)

## States & Behaviors
- Continuous left scroll animation, looping seamlessly (duplicate logos for seamless loop)
- `@keyframes marquee { from: translateX(0); to: translateX(-50%) }`

## Client Logo Assets (all in `public/images/`)
- Lastsole.png
- ornimundo.png
- Feel-Porto.png
- Shoppingpt.png
- era-1.png
- xarao.png
- replica.png
- decisoes-e-solucoes.png
- ambar.png
- liderac.png
- phyto.png
- remax.png
- Express-glass-1.png
- molaflex.png
- FCNAUP.png
- IHTP.png
- Go-Gym.png
- Oito-Um.png
- Geometrik.png

## Responsive Behavior
- Same on all viewports, just scrolls continuously

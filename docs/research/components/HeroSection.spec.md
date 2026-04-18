# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** static video autoplay + text overlay
- **Screenshot:** hero at scroll 0

## DOM Structure
Full-viewport section containing:
1. Autoplay looping muted video (webm) fills entire viewport
2. Text overlay in bottom-left area:
   - Small label: "SHOWREEL Omedia Paris 24"
   - Button link: "DÉCOUVRIR LA CAMPAGNE"

## Computed Styles

### Section container
- height: 100vh (794px at 900px window)
- width: 100%
- position: relative
- overflow: hidden
- background: #000 (fallback)

### Video element
- position: absolute or object-cover fill
- width: 100%
- height: 100%
- object-fit: cover
- autoplay, loop, muted, playsInline

### Video fallback image
- /images/home2024-video-fallback.jpg

### Text overlay container
- position: absolute
- bottom: ~80px
- left: ~80px
- color: white

### "SHOWREEL Omedia Paris 24" label
- font-family: "Avenir", sans-serif
- font-size: ~12px
- font-weight: 300
- color: white
- letter-spacing: 2px
- text-transform: uppercase
- margin-bottom: 16px

### "DÉCOUVRIR LA CAMPAGNE" button
- font-family: "Avenir", sans-serif
- font-size: 11px
- font-weight: 300
- color: white
- letter-spacing: 2px
- text-transform: uppercase
- border: 1px solid white
- padding: ~10px 24px
- background: transparent
- display: inline-block

## Assets
- Video: `/videos/showreel.webm`
- Fallback: `/images/home2024-video-fallback.jpg`

## Link
- "DÉCOUVRIR LA CAMPAGNE" → /fr/armanibeaute-cremanera

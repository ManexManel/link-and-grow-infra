# SliderSection Specification

## Overview
- **Target file:** `src/components/SliderSection.tsx`
- **Interaction model:** auto-advancing carousel (Swiper.js style), Ken Burns bg-image effect
- **Screenshot:** bottom of page before footer

## DOM Structure
2-column layout:
- Left col (~35%): Static illustration + OMEDIA PARIS text
- Right col (~65%): Swiper carousel with 4 slides (bg-image based)

## Computed Styles

### Section wrapper
- display: flex
- height: ~500px
- width: 100%
- background: #ffffff
- overflow: hidden

### Left column
- width: 35%
- display: flex
- flex-direction: column
- align-items: center
- justify-content: center
- padding: 40px
- background: #ffffff
- border-right: 1px solid #e5e5e5

### Building illustration image
- src: /images/home-omedia-building.jpg (pen drawing of Haussmann Paris building)
- width: ~280px
- height: auto
- object-fit: contain

### OMEDIA PARIS text below illustration
- font-family: "Avenir", sans-serif (matches logo font)
- font-size: 14px
- letter-spacing: 3px
- color: #000
- text-align: center
- margin-top: 16px
- text-transform: uppercase
(This is actually the dark logo image, not text)
- Actually: use /images/logo-omedia.png below the building illustration

### Right column (carousel)
- width: 65%
- position: relative
- overflow: hidden

### Each slide
- width: 100%
- height: 100%
- position: relative
- overflow: hidden

### Slide background div
- position: absolute
- inset: 0
- background-size: cover
- background-position: center center
- Ken Burns: animation that zooms very slowly (scale 1 → 1.05 over 6s)
- transition: active slide has the animation

### Slide images (4 slides)
- Slide 1: /images/home-omedia-slider-1.jpg
- Slide 2: /images/home-omedia-slider-2.jpg (Moroccan/Mediterranean luxury pool)
- Slide 3: /images/home-omedia-slider-3.jpg (Paris Haussmann building facade)
- Slide 4: /images/home-omedia-slider-4.jpg

### Pagination dots
- position: absolute
- bottom: 20px
- left: 50% (centered within carousel)
- display: flex
- gap: 8px

### Dot
- width: 8px
- height: 8px
- border-radius: 50%
- background: rgba(255,255,255,0.5)
- cursor: pointer

### Active dot
- background: rgba(255,255,255,1)

## Behavior
- Auto-advance every 5000ms
- Fade or slide transition between slides
- Dots click to go to that slide
- Ken Burns: CSS keyframe animation `@keyframes kenBurns { from { transform: scale(1); } to { transform: scale(1.06); } }` applied to active slide bg
- Duration: 6s ease

## Responsive
- Mobile: left column stacks above carousel (or hides)
- Carousel remains full-width on mobile

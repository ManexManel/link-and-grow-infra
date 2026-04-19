# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** `docs/design-references/hero.png`
- **Interaction model:** time-driven (typing animation on subtitle text)

## DOM Structure
```
<section> full-width, white bg, padding-top ~108px (for fixed nav)
  <div> container max-width 1200px, margin 0 auto
    <div> two-column flex layout
      <div> left column (~50% width)
        <h1> "Agência de\nInbound Marketing"
        <div> typing animation row
          <span class="typing-effect-strings"> animated cycling text
          <span class="typed-cursor"> blinking cursor |
        <a href="/pedir-proposta/"> "AGENDAR CONVERSA" button
      <div> right column (~50% width)
        <img src="linkandgrow-1-1.jpg"> hero photo (two women at laptop)
    <img src="element_01-1.png"> decorative orange/yellow element, bottom-left corner
```

## Computed Styles (exact values from getComputedStyle)

### Section
- backgroundColor: rgb(255, 255, 255)
- paddingTop: 108px (accounts for fixed nav)
- paddingBottom: 0
- minHeight: 482px
- overflow: hidden (for decorative element)

### Container
- maxWidth: 1200px
- margin: 0 auto
- padding: 0 24px
- display: flex
- position: relative

### Left column
- width: 50%
- display: flex
- flexDirection: column
- justifyContent: center
- paddingTop: 60px
- paddingBottom: 60px

### H1
- fontFamily: Nunito
- fontSize: 50px
- fontWeight: 800
- lineHeight: 63px
- color: rgb(48, 71, 99) = #304763
- margin: 0 0 16px 0
- Contains a <br> after "Agência de"

### Typing animation container
- display: flex
- alignItems: center
- marginBottom: 32px

### Typing text span (.typing-effect-strings)
- fontFamily: Nunito
- fontSize: 40px
- fontWeight: 800
- color: rgb(31, 123, 255) = #1F7BFF
- lineHeight: 1.3

### Typed cursor (|)
- fontSize: 40px
- color: rgb(31, 123, 255)
- animation: blink 0.7s infinite

### CTA Button "AGENDAR CONVERSA"
- backgroundColor: rgb(31, 123, 255) = #1F7BFF
- color: rgb(255, 255, 255)
- fontSize: 13px
- fontWeight: 700
- fontFamily: Rubik
- letterSpacing: 1.5px
- textTransform: uppercase
- borderRadius: 5px
- padding: 14px 32px
- border: none
- display: inline-block
- textDecoration: none

### Right column
- width: 50%
- position: relative
- display: flex
- alignItems: flex-end

### Hero image (linkandgrow-1-1.jpg)
- width: 100%
- maxWidth: 500px
- height: auto
- objectFit: cover
- borderRadius: 8px (approximate from visual)

### Decorative element (element_01-1.png)
- position: absolute
- bottom: 0
- left: 0
- width: 80px
- height: auto
- zIndex: 1

## States & Behaviors

### Typing animation
- Cycles through phrases, typing character by character, then deleting:
  1. "Focada em resultado"
  2. "Premiada e reconhecida"
  3. "Com equipas especializadas"
  4. "Orientada a resultados"
- Type speed: ~80ms per char, delete speed: ~40ms, pause: 2000ms
- Blinking cursor `|` after text

### Implementation
```tsx
// useEffect cycling through TYPING_STRINGS array
// setInterval for character typing
// CSS @keyframes blink for cursor
```

## Assets
- Hero photo: `public/images/linkandgrow-1-1.jpg` (1002×1500)
- Decorative: `public/images/element_01-1.png` (138×262, orange/yellow swirl)

## Text Content (verbatim)
- H1: "Agência de\nInbound Marketing"
- Typing strings: "Focada em resultado", "Premiada e reconhecida", "Com equipas especializadas", "Orientada a resultados"
- Button: "AGENDAR CONVERSA"

## Responsive Behavior
- **Desktop (1440px):** Two-column side by side, h1 50px
- **Tablet (768px):** Two-column narrower
- **Mobile (390px):** Single column, image below text or hidden, h1 ~32px
- **Breakpoint:** ~992px

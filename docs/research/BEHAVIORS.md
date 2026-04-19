# Behaviors — linkandgrow.pt

## Navbar
- **Fixed** at top at all scroll positions.
- Background: rgba(255,255,255,0.95), box-shadow: rgba(0,0,0,0.1) 0px 0px 7px 0px (always present).
- No scroll-triggered visual change detected.
- Dropdowns appear on hover for: Soluções, Como Fazemos, Agência, Language switcher (PT/FR/EN).

## Hero — Typing Animation
- A `<span class="typing-effect-strings">` sits below "Agência de\nInbound Marketing".
- Color: #1F7BFF, fontSize: 40px, fontWeight: 800 (Nunito).
- It types and deletes cycling phrases: "Focada em resultado", "Premiada e reconhecida", "Com equipas especializadas", "Orientada a resultados".
- **INTERACTION MODEL:** time-driven JS typing animation. Implement with a simple useEffect that cycles text with a blinking cursor.

## Testimonials
- Auto-cycling carousel, dot navigation at bottom.
- Testimonials fade/transition between each other.
- **INTERACTION MODEL:** time-driven auto-play + click dots to jump.

## Client Logos Strip
- Horizontal logo carousel/marquee, scrolls continuously left.
- **INTERACTION MODEL:** CSS animation marquee.

## Cases de Sucesso
- Slider with dot navigation. Shows 3 blue-overlay case cards at a time (or fewer on smaller viewports).
- Each card has "Abrir caso" link with magnifying glass icon.
- **INTERACTION MODEL:** click-driven carousel (dots + arrows if present).

## Scroll-driven animations
- Elements animate into view on scroll (fade-in/slide-up via Elementor's default entrance animations).
- Implement with IntersectionObserver for fade-up effect on section entry.

## Responsive Breakpoints
- ~992px: Navbar collapses to hamburger, hero becomes single column
- ~768px: Services grid 4-col → 2-col; stats 2-col → 1-col
- ~480px: Services grid → 1-col; hero image hidden

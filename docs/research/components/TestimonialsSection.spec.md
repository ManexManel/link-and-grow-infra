# TestimonialsSection Specification

## Overview
- **Target file:** `src/components/TestimonialsSection.tsx`
- **Screenshot:** `docs/design-references/testimonials.png`
- **Interaction model:** auto-cycling carousel (click dots to jump)

## DOM Structure
```
<section> white/light bg, padding 80px 0, textAlign center
  <div> container max-width 900px, margin 0 auto
    <h2> "O que dizem os nossos clientes"
    <div> large orange quote icon "❝" or SVG
    <div> carousel slides (one visible at a time)
      <div> slide
        <p> testimonial quote text
        <p> author name (muted color)
    <div> dot navigation
      <span class="dot active">●</span>
      <span class="dot">●</span>
      ...
```

## Computed Styles

### Section
- backgroundColor: rgb(255, 255, 255)
- paddingTop: 80px
- paddingBottom: 80px
- textAlign: center

### H2
- fontFamily: Nunito
- fontSize: 30px
- fontWeight: 800
- color: rgb(48, 71, 99) = #304763
- marginBottom: 32px

### Quote icon
- color: rgb(244, 117, 20) = #F47514
- fontSize: 48px
- marginBottom: 16px

### Quote text
- fontFamily: Rubik
- fontSize: 18px
- color: rgb(109, 123, 143) = #6D7B8F
- lineHeight: 1.8
- maxWidth: 700px
- margin: 0 auto 16px

### Author name
- fontFamily: Rubik
- fontSize: 16px
- fontWeight: 500
- color: rgb(109, 123, 143) = #6D7B8F

### Dot navigation
- display: flex
- justifyContent: center
- gap: 8px
- marginTop: 32px

### Dot
- width: 10px
- height: 10px
- borderRadius: 50%
- backgroundColor: rgb(242, 242, 242)
- cursor: pointer

### Dot active
- backgroundColor: rgb(31, 123, 255) = #1F7BFF

## States & Behaviors
- Auto-cycles every 4000ms
- On dot click: jump to that slide
- Transition: opacity fade between testimonials

## Testimonial Data
1. Quote: "A Link&Grow ajudou-nos no desenvolvimento da nossa presença digital. Estamos muito satisfeitos com o desempenho e capacidade demonstrada na produção de conteúdos e tratamento SEO." Author: (name not captured)
2. Quote: "À medida que a estratégia delineada é implementada, os nossos resultados têm vindo a melhorar. A equipa Link&Grow demonstra conhecimento técnico e do mercado. É super proativa e faz uma excelente gestão do budget disponível, otimizando o retorno de cada euro investido." Author: Manuel Sousa
3. Quote: "Agência profissional, arrojada e com enorme caráter de progressão. Fez toda a diferença na aceleração do processo de internacionalização da nossa empresa." Author: (name)

## Text Content (verbatim)
- H2: "O que dizem os nossos clientes"

## Responsive Behavior
- **Desktop:** Centered, max-width 700px quote
- **Mobile:** Full width, slightly smaller text

# CasesSection Specification

## Overview
- **Target file:** `src/components/CasesSection.tsx`
- **Screenshot:** `docs/design-references/cases.png`
- **Interaction model:** click-driven carousel (dot navigation)

## DOM Structure
```
<section> white bg, padding 80px 0
  <div> container max-width 1200px
    <p class="label"> "Portfólio"   (small uppercase label)
    <h2> "Casos de Sucesso"
    <div> carousel wrapper
      <div> slides track
        <div> 3 cards visible at once
          [CaseCard × N]
            <div> card, bg blue overlay (#1F7BFF with opacity)
              <img> background photo (full-bleed, object-fit cover)
              <div> overlay content
                <h3> case title
                <p class="category"> category icon + text
                <p class="duration"> calendar icon + duration
                <a> "Abrir caso 🔍"
      <div> dot navigation
```

## Computed Styles

### Section
- backgroundColor: rgb(255, 255, 255)
- paddingTop: 80px
- paddingBottom: 80px

### "Portfólio" label
- fontFamily: Rubik
- fontSize: 14px
- fontWeight: 500
- color: rgb(109, 123, 143) = #6D7B8F
- textTransform: uppercase
- letterSpacing: 2px
- marginBottom: 8px

### H2
- fontFamily: Nunito
- fontSize: 36px
- fontWeight: 800
- color: rgb(48, 71, 99) = #304763
- marginBottom: 40px

### Card
- width: calc(33.333% - 16px)
- height: 309px
- position: relative
- overflow: hidden
- borderRadius: 8px
- backgroundColor: rgb(31, 123, 255) = #1F7BFF (with photo overlay)

### Card background image
- position: absolute
- inset: 0
- objectFit: cover
- width: 100%
- height: 100%
- opacity: 0.4 (image shows through blue overlay)

### Card overlay
- position: absolute
- inset: 0
- backgroundColor: rgba(31, 123, 255, 0.75)
- display: flex
- flexDirection: column
- justifyContent: flex-end
- padding: 24px

### Card H3
- fontFamily: Nunito
- fontSize: 22px
- fontWeight: 700
- color: rgb(255, 255, 255)
- marginBottom: 12px

### Category / Duration text
- fontFamily: Rubik
- fontSize: 14px
- color: rgba(255, 255, 255, 0.85)
- display: flex
- alignItems: center
- gap: 6px

### "Abrir caso" link
- fontFamily: Rubik
- fontSize: 14px
- fontWeight: 500
- color: rgb(255, 255, 255)
- display: flex
- alignItems: center
- gap: 4px
- marginTop: 12px
- textDecoration: underline

## Case Data (all cases)
1. Title: "PPC + SEO: Receita para vingar", Category: "Fabricante de colchões em busca de visibilidade e posicionamento digital"
2. Title: "743 novas leads em 3 meses", Category: "Coaching"
3. Title: "Um empurrão no volume de leads. Prometemos e cumprimos", Category: "Componentes automóveis", Duration: "6 meses"
4. Title: "Parceria duradoura dá frutos a longo prazo!"
5. Title: "O impulso que faltava para alavancar as vendas online"
6. Title: "Gerámos 400 leads por mês em cadeia de ginásios"

## Carousel Behavior
- Show 3 cards at a time on desktop, 2 on tablet, 1 on mobile
- Dot navigation below
- No auto-play (click-driven only)

## Responsive Behavior
- **Desktop:** 3 cards per row
- **Tablet:** 2 cards
- **Mobile:** 1 card

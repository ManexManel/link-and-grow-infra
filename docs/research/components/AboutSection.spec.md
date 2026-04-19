# AboutSection Specification

## Overview
- **Target file:** `src/components/AboutSection.tsx`
- **Screenshot:** `docs/design-references/about.png`
- **Interaction model:** static

## DOM Structure
```
<section> white bg, padding 80px 0
  <div> container max-width 1200px
    <div> two-column flex layout, align-items center
      <div> left column (45%)
        <img src="home6_icon_13.png"> photo of man coaching (258×258)
      <div> right column (55%), padding-left 60px
        <h2> "Sobre nós​"
        <p> description text
        <a href="/agencia/"> "SABER MAIS" button
```

## Computed Styles

### Section
- backgroundColor: rgb(255, 255, 255)
- paddingTop: 80px
- paddingBottom: 80px

### Container
- maxWidth: 1200px
- margin: 0 auto
- padding: 0 24px
- display: flex
- alignItems: center
- gap: 60px

### Left column image
- width: 100%
- maxWidth: 500px
- height: auto
- borderRadius: 8px

### H2
- fontFamily: Nunito
- fontSize: 36px
- fontWeight: 800
- color: rgb(48, 71, 99) = #304763
- marginBottom: 16px
- lineHeight: 1.3

### Body paragraph
- fontFamily: Rubik, sans-serif
- fontSize: 18px
- fontWeight: 400
- color: rgb(109, 123, 143) = #6D7B8F
- lineHeight: 1.7
- marginBottom: 32px

### "SABER MAIS" button
- backgroundColor: rgb(31, 123, 255) = #1F7BFF
- color: rgb(255, 255, 255)
- fontSize: 13px
- fontWeight: 700
- letterSpacing: 1.5px
- textTransform: uppercase
- borderRadius: 5px
- padding: 14px 32px
- textDecoration: none
- display: inline-block

## States & Behaviors
- Static section, no interactive behaviors.
- Button hover: slightly darker blue (darken 10%).

## Assets
- Photo: `public/images/home6_icon_13.png` (258×258)

## Text Content (verbatim)
- H2: "Sobre nós​"
- P: "Somos uma Agência de Marketing Digital focada em resultados e performance. Alavancamos os negócios digitais dos nossos clientes com base em metodologias de Inbound Marketing. Estamos no Porto, Lisboa e Paris."
- Button: "SABER MAIS"

## Responsive Behavior
- **Desktop:** Two-column, image left, text right
- **Mobile (390px):** Single column, image above text
- **Breakpoint:** ~768px

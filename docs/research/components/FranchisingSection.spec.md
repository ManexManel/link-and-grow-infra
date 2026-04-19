# FranchisingSection Specification

## Overview
- **Target file:** `src/components/FranchisingSection.tsx`
- **Screenshot:** `docs/design-references/franchising.png`
- **Interaction model:** static

## DOM Structure
```
<section> bg #304763 (dark navy), padding 80px 0
  <div> container max-width 1200px
    <div> two-column flex, align-items center
      <div> left column (50%): CEO photo
        <img src="joao-oliveira-ceo_linkandgrow.png"> man in suit, arms crossed
      <div> right column (50%), padding-left 60px
        <p class="orange-label"> "Franchising Link&Grow"
        <h2> "Modelo de negócio pronto a aplicar"
        <p> description text (white)
        <a href="/franchising/"> "CONHECER CONDIÇÕES" button (orange)
```

## Computed Styles

### Section
- backgroundColor: rgb(48, 71, 99) = #304763
- paddingTop: 80px
- paddingBottom: 80px

### Container
- maxWidth: 1200px
- margin: 0 auto
- padding: 0 24px
- display: flex
- alignItems: center
- gap: 60px

### CEO image
- width: 100%
- maxWidth: 460px
- height: auto

### Orange label ("Franchising Link&Grow")
- fontFamily: Nunito
- fontSize: 20px
- fontWeight: 800
- color: rgb(244, 117, 20) = #F47514
- marginBottom: 12px

### H2
- fontFamily: Nunito
- fontSize: 36px
- fontWeight: 800
- color: rgb(255, 255, 255)
- marginBottom: 24px
- lineHeight: 1.3

### Body text
- fontFamily: Rubik
- fontSize: 18px
- color: rgba(255, 255, 255, 0.85)
- lineHeight: 1.7
- marginBottom: 32px

### CTA Button "CONHECER CONDIÇÕES"
- backgroundColor: rgb(244, 117, 20) = #F47514
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
- Static section.
- Button hover: darken orange slightly.

## Assets
- CEO photo: `public/images/joao-oliveira-ceo_linkandgrow.png`

## Text Content (verbatim)
- Orange label: "Franchising Link&Grow"
- H2: "Modelo de negócio pronto a aplicar"
- P: "Já pode criar a sua agência de Marketing Digital com o suporte de uma equipa experiente! Receba formação e apoio em todas as etapas para ser dono de um negócio bem-sucedido."
- Button: "CONHECER CONDIÇÕES"

## Responsive Behavior
- **Desktop:** Two columns
- **Mobile:** Single column, image above text

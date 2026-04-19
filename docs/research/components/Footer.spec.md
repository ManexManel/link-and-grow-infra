# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Screenshot:** `docs/design-references/footer.png`
- **Interaction model:** static

## DOM Structure
```
<footer> white bg, padding 60px 0 24px
  <div> container max-width 1200px
    <div> logo row
      <img src="linkandgrow-logo.svg"> (larger logo)
    <div> three-column grid
      <div> column 1: "Sobre"
        <h4> "Sobre"
        <p> about text
        <a> "VER TODAS AS FILIAIS" blue button
        <div> social icons row: Facebook, Instagram, LinkedIn, Pinterest, X (Twitter)
      <div> column 2: "Sede Porto"
        <h4> "Sede Porto"
        <p> phone: "+351 937 366 484" with phone icon
        <p> note: "(chamada para a rede móvel nacional)"
        <p> email: "joao.oliveira@linkandgrow.pt" with mail icon
        <p> address: "Rua da Boavista, nº291, 3º Andar 4050-102 Porto" with pin icon
      <div> column 3: partner badges
        Norte2020, Portugal2020, EU logos
        Clutch badges (3×)
        Google Partner badge
        HubSpot Partner badge
    <div> copyright bar
      <p> "© 2026  Built with passion. All rights reserved Link&Grow. Política de Privacidade"
```

## Computed Styles

### Footer
- backgroundColor: rgb(255, 255, 255)
- paddingTop: 60px
- paddingBottom: 24px
- borderTop: 1px solid rgb(242, 242, 242)

### Three-column grid
- display: grid
- gridTemplateColumns: 1fr 1fr 1fr (or auto sizing)
- gap: 48px
- marginTop: 40px

### Column H4
- fontFamily: Nunito
- fontSize: 18px
- fontWeight: 700
- color: rgb(48, 71, 99) = #304763
- marginBottom: 16px

### Body text
- fontFamily: Rubik
- fontSize: 16px
- color: rgb(109, 123, 143) = #6D7B8F
- lineHeight: 1.7

### "VER TODAS AS FILIAIS" button
- backgroundColor: rgb(31, 123, 255) = #1F7BFF
- color: rgb(255, 255, 255)
- fontSize: 12px
- fontWeight: 700
- letterSpacing: 1.5px
- textTransform: uppercase
- borderRadius: 5px
- padding: 12px 24px
- display: inline-block
- textDecoration: none
- marginBottom: 24px

### Social icons
- display: flex
- gap: 12px
- Social circles: width 36px, height 36px, borderRadius 50%
- Facebook: bg #1F7BFF
- Instagram: bg gradient (#F47514 to purple)
- LinkedIn: bg #0077B5
- Pinterest: bg #E60023
- X/Twitter: bg #000000

### Copyright bar
- borderTop: 1px solid rgb(242, 242, 242)
- paddingTop: 24px
- marginTop: 40px
- fontSize: 14px
- color: rgb(109, 123, 143)
- textAlign: center

## Text Content (verbatim)
- H4 col1: "Sobre"
- P col1: "Alavancamos os negócios digitais dos nossos clientes com base em metodologias de Inbound Marketing."
- Button: "VER TODAS AS FILIAIS"
- H4 col2: "Sede Porto"
- Phone: "+351 937 366 484"
- Note: "(chamada para a rede móvel nacional)"
- Email: "joao.oliveira@linkandgrow.pt"
- Address: "Rua da Boavista, nº291, 3º Andar 4050-102 Porto"
- Copyright: "© 2026  Built with passion. All rights reserved Link&Grow. Política de Privacidade"

## Assets
- Logo: `public/images/linkandgrow-logo.svg`
- Social icons: use Lucide React icons (Facebook, Instagram, Linkedin, etc.)

## Responsive Behavior
- **Desktop:** 3-column grid
- **Mobile:** 1-column stack

# ContactFormSection Specification

## Overview
- **Target file:** `src/components/ContactFormSection.tsx`
- **Screenshot:** `docs/design-references/contact-form.png`
- **Interaction model:** static form

## DOM Structure
```
<section> white bg, padding 80px 0
  <div> container max-width 1200px
    <div> two-column flex layout
      <div> left column (45%): image placeholder or photo
      <div> right column (55%)
        <h2> "Sessão de diagnóstico digital gratuita"
        <p> description text
        <form>
          <label>Nome *</label>
          <input type="text" placeholder="Nome">
          <label>Telefone / Email *</label>
          <input type="tel/email">
          <button type="submit"> orange submit button
```

## Computed Styles

### Section
- backgroundColor: rgb(255, 255, 255)
- paddingTop: 80px
- paddingBottom: 80px

### H2
- fontFamily: Nunito
- fontSize: 36px
- fontWeight: 800
- color: rgb(48, 71, 99) = #304763
- marginBottom: 16px

### Body text
- fontFamily: Rubik
- fontSize: 18px
- color: rgb(109, 123, 143) = #6D7B8F
- lineHeight: 1.7
- marginBottom: 32px

### Form input
- width: 100%
- padding: 12px 16px
- borderRadius: 4px
- border: 1px solid rgb(242, 242, 242)
- fontSize: 16px
- fontFamily: Rubik
- color: rgb(51, 51, 51)
- marginBottom: 16px
- outline: none

### Submit button
- backgroundColor: rgb(244, 117, 20) = #F47514
- color: rgb(255, 255, 255)
- fontSize: 13px
- fontWeight: 700
- letterSpacing: 1.5px
- textTransform: uppercase
- borderRadius: 5px
- padding: 14px 32px
- border: none
- cursor: pointer
- width: 100%

## Text Content (verbatim)
- H2: "Sessão de diagnóstico digital gratuita"
- P: "Quer que a sua empresa alcance melhores resultados digitais? Pergunte aos nossos especialistas a melhor forma de posicionar o seu negócio ou ideia."
- Labels: "Nome *", "Telefone / Email *"
- Button: "AGENDAR SESSÃO" or "ENVIAR"
- Phone placeholder: "+351 90 01 12 34" (visible in screenshot)

## Responsive Behavior
- **Desktop:** Two columns
- **Mobile:** Single column, form full width

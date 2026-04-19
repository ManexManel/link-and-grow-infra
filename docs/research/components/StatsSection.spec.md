# StatsSection Specification

## Overview
- **Target file:** `src/components/StatsSection.tsx`
- **Screenshot:** `docs/design-references/stats.png`
- **Interaction model:** static (or count-up on scroll entry)

## DOM Structure
```
<section> white bg, padding 80px 0
  <div> container max-width 1200px
    <div> two-column flex layout, align-items center
      <div> left column (55%)
        <h2> "Potencie os seus resultados digitais!"
        <p> description text
      <div> right column (45%)
        <div> stats grid, two columns
          <div> stat item: "900+" label "Campanhas"
          <div> stat item: "500+" label "Clientes"
          ...more stats
        <p> "Design thinkers, web developers, accounts e project managers com skills diversas."
```

## Computed Styles

### Section
- backgroundColor: rgb(255, 255, 255)
- paddingTop: 80px
- paddingBottom: 80px

### H2
- fontFamily: Nunito
- fontSize: 30px
- fontWeight: 800
- color: rgb(48, 71, 99) = #304763
- marginBottom: 24px

### Body paragraph
- fontFamily: Rubik
- fontSize: 18px
- color: rgb(109, 123, 143) = #6D7B8F
- lineHeight: 1.7
- marginBottom: 32px

### Stat number
- fontFamily: Nunito
- fontSize: 56px
- fontWeight: 800
- color: rgb(48, 71, 99) = #304763
- lineHeight: 1

### Stat label
- fontFamily: Rubik
- fontSize: 16px
- color: rgb(109, 123, 143) = #6D7B8F
- marginTop: 8px

## States & Behaviors
- Static or count-up animation when entering viewport (IntersectionObserver).

## Text Content (verbatim)
- H2: "Potencie os seus resultados digitais!"
- P: "Ajudamos empresas a alcançarem o sucesso através de estratégias digitais. O nosso trabalho inclui diagnóstico, planeamento e execução."
- Stats: "900+" + label "Campanhas", "500+" + label "Clientes"
- Sub-text: "Design thinkers, web developers, accounts e project managers com skills diversas."

## Assets
- Team photo if present: `public/images/home6_icon_14.png` (833×689)

## Responsive Behavior
- **Desktop:** Two-column
- **Mobile:** Single column, stats above or below text

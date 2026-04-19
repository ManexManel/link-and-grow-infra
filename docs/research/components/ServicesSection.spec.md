# ServicesSection Specification

## Overview
- **Target file:** `src/components/ServicesSection.tsx`
- **Screenshot:** `docs/design-references/services.png`
- **Interaction model:** static (cards with hover effects)

## DOM Structure
```
<section> white bg, padding 80px 0
  <div> container max-width 1200px
    <h2> "Como ligamos a sua empresa ao digital"
    <div> grid, 4 columns (7 cards total)
      [ServiceCard × 7]
        <div> card (white bg, border, padding, border-radius)
          <img> orange PNG icon (96×84 or similar)
          <hr> short horizontal divider line, orange/gray
          <h3> service name
          <p> short description
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

### Section H2
- fontFamily: Nunito
- fontSize: 30px
- fontWeight: 800
- color: rgb(48, 71, 99) = #304763
- textAlign: center
- marginBottom: 48px

### Card grid
- display: grid
- gridTemplateColumns: repeat(4, 1fr) on desktop, repeat(2,1fr) tablet, 1fr mobile
- gap: 24px

### Card
- backgroundColor: rgb(255, 255, 255)
- border: 1px solid rgb(242, 242, 242)
- borderRadius: 8px
- padding: 32px 24px
- display: flex
- flexDirection: column
- alignItems: flex-start
- transition: box-shadow 0.3s ease

### Card icon (img)
- width: 64px
- height: auto
- marginBottom: 16px

### Card divider line
- width: 30px
- height: 3px
- backgroundColor: rgb(109, 123, 143) = #6D7B8F (or orange)
- border: none
- marginBottom: 16px
- marginTop: 8px

### Card H3
- fontFamily: Nunito
- fontSize: 24px
- fontWeight: 700
- color: rgb(37, 42, 63) = #252A3F
- marginBottom: 12px

### Card P
- fontFamily: Rubik
- fontSize: 16px
- color: rgb(109, 123, 143) = #6D7B8F
- lineHeight: 1.6

## States & Behaviors
- Card hover: box-shadow 0 8px 24px rgba(0,0,0,0.1), slight translateY(-4px)

## Service Card Data (7 cards)
1. Icon: `LinkandGrow-Inbound.png`, H3: "Inbound", P: "Oferecemos conteúdo de valor que desperta o interesse do seu público-alvo."
2. Icon: `LinkandGrow-E-Commerce.png`, H3: "E-Commerce", P: "Criamos e gerimos lojas online com excelentes resultados em vendas."
3. Icon: `LinkandGrow-Web-design.png`, H3: "Web Design", P: "Desenvolvemos sites focados em vendas e/ou conversão de leads."
4. Icon: `LinkandGrow-Automacao.png`, H3: "Automação", P: "Automatizamos processos para potenciar as estratégias digitais."
5. Icon: `LinkandGrow-Leads.png`, H3: "Geração de Leads", P: "Entregamos oportunidades de negócio qualificadas às equipas comerciais."
6. Icon: `LinkandGrow-Conteudo.png`, H3: "Conteúdo", P: "Criamos conteúdo relevante que gera tráfego, leads e vendas."
7. Icon: `LinkandGrow-SEO.png`, H3: "SEO", P: "Posicionamos o seu site no topo dos motores de busca."
8. Icon: `LinkandGrow-CRM.png`, H3: "Vendas e CRM", P: "Implementamos metodologias de inbound sales para otimizar o processo comercial."

## Assets
All icons in `public/images/`: LinkandGrow-Inbound.png, LinkandGrow-E-Commerce.png, LinkandGrow-Web-design.png, LinkandGrow-Automacao.png, LinkandGrow-Leads.png, LinkandGrow-Conteudo.png, LinkandGrow-SEO.png, LinkandGrow-CRM.png

## Text Content (verbatim)
- H2: "Como ligamos a sua empresa ao digital"

## Responsive Behavior
- **Desktop (1440px):** 4-column grid
- **Tablet (768px):** 2-column grid
- **Mobile (390px):** 1-column

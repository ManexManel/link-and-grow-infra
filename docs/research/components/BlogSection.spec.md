# BlogSection Specification

## Overview
- **Target file:** `src/components/BlogSection.tsx`
- **Screenshot:** `docs/design-references/blog.png`
- **Interaction model:** static

## DOM Structure
```
<section> white bg, padding 80px 0
  <div> container max-width 1200px
    <h2> "Blog"  (or no heading — articles list)
    <div> grid, 2 or 3 columns
      [ArticleCard × 2-3]
        <div> card
          <img> article thumbnail
          <div> card body
            <h3> article title
            <a> "Ler mais" or similar
```

## Computed Styles

### Section
- backgroundColor: rgb(255, 255, 255)
- paddingTop: 80px
- paddingBottom: 80px

### Article card
- backgroundColor: rgb(255, 255, 255)
- border: 1px solid rgb(242, 242, 242)
- borderRadius: 8px
- overflow: hidden

### Card title H3 (or H2)
- fontFamily: Nunito
- fontSize: 22px
- fontWeight: 700
- color: rgb(48, 71, 99) = #304763

## Article Data
1. Title: "Como criei a Link&Grow, uma rede onde ninguém fica para trás"
2. Title: "Link&Grow: 10 Anos a transformar o Marketing Digital em Portugal"

## Text Content (verbatim)
- Articles: "Como criei a Link&Grow, uma rede onde ninguém fica para trás", "Link&Grow: 10 Anos a transformar o Marketing Digital em Portugal"

## Responsive Behavior
- **Desktop:** 2 columns
- **Mobile:** 1 column

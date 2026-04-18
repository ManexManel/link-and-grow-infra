# Content Sections Specification

## Overview
- **Target file:** `src/components/ContentSections.tsx`
- **Interaction model:** static content + IntersectionObserver for active nav

All 8 expertise sections share the same page layout pattern. Each section has:
1. Main content area (2-col or variant)
2. SectionMiniFooter below

## Section IDs (for anchor nav)
- #a-propos
- #strategie
- #branding-naming
- #image
- #brand-content
- #digital
- #social
- #edition

## GLOBAL Section Layout

### Common section wrapper
- background: #ffffff
- padding: 80px 80px 0
- position: relative

### 2-Column layout (used by: À Propos, Stratégie, Digital, Édition)
- display: flex
- Left col: ~55% width — heading + body text + CTA link
- Right col: ~45% width — full-height image flush to right edge

### Left column
- padding-right: 40px

### H2 heading
- font-family: "Din Pro", sans-serif
- font-size: 64px
- font-weight: 700
- letter-spacing: -1.728px
- line-height: 1.05
- color: #000000
- margin-bottom: 40px

### Divider line (below heading)
- width: ~180px
- height: 1px
- background: #000
- margin-bottom: 32px

### Body text (p)
- font-family: "Din Pro", sans-serif
- font-size: 16px
- font-weight: 300
- line-height: 30px (1.875)
- color: #000000

### CTA link
- font-family: "Din Pro", sans-serif
- font-size: 16px
- font-weight: 400
- color: #000000
- text-decoration: none
- margin-top: 40px
- display: inline-block
- Use class: omedia-cta-link (has ::after underline bar)

### Right image (full-height flush)
- width: 100%
- height: 100%
- object-fit: cover
- display: block

---

## SECTION: À Propos (id="a-propos")
**Layout:** 2-col (heading + text left, image right)
**Heading:** "Conjuguer luxe & créativité"
**Body:**
Nous sommes une agence conseil en communication, dédiée aux Maison de luxe.
Depuis 30 ans, nous accompagnons les Maisons les plus prestigieuses dans leur stratégie de marque et d'image, campagnes de communication publicitaire, stratégie social media et d'influence, brand content…
**CTA:** "À propos" → /agence
**Image:** /images/home202312-vis1.jpg (woman in white turtleneck, warm tones)

---

## SECTION: Stratégie de Marque (id="strategie")
**Layout:** 2-col (heading + text left, image right — image is full viewport height, very tall)
**Heading:** "Conseil en stratégie de marque"
**Body:**
La stratégie de marque : un pouvoir de projection.
L'art de faire d'un territoire de marque un univers aussi singulier qu'intemporel.
D'allier vision stratégique et créativité pour lier valeurs et aspirations.
Omedia Paris imagine le fil rouge et l'histoire qui élèveront la marque au rang d'icône.
Artisans de l'innovation, nous ciselons les idées qui transformeront son esprit en manifeste de son domaine. Et son storytelling en success story.
**CTA:** "Clients et stratégies" → /fr/strategie-de-marque/
**Image:** /images/home-bollinger-bw.jpg (B&W Bollinger champagne bottle photo)

---

## SECTION: Branding (id="branding-naming")
**Layout:** heading + text (left, above) + 3-image triptych (right/below fills width)
**Heading:** "Branding et naming"
**Body:**
Imaginer une marque jamais créée. Dessiner son image, penser sa représentation.
Visualiser son futur. Trouver le nom évocateur qui s'inscrira dans un temps long.
Faire résonner son storytelling sur tous les canaux d'expression.
Pour ancrer son histoire et ses produits dans les esprits.
Du naming à la plateforme de marque, nos experts vous accompagnent dans la construction de votre identité et son déploiement stratégique. Nous développons la personnalité de marque qui restera en mémoire par sa force, sa beauté, sa différence.
**CTA:** "Notre expertise branding & naming" → /fr/branding/
**Triptych images (equal width, ~1/3 each, full-width row):**
- /images/home-triptique-1-1.jpg (woman hand with large sapphire ring, dark bg)
- /images/home-triptique-2.jpg (woman wrist with luxury watch, leather jacket)
- /images/home-triptique-3.jpg (Giorgio Armani Crema Nera beauty products)
**Image height:** ~280px each, object-fit: cover

---

## SECTION: Image — Stratégie d'image et de publicité (id="image")
**Layout:** 2-col BUT heading is on LEFT and body text is on RIGHT (reversed from normal)
Left col: large heading only
Right col: body text + CTA link
Below both: single full-width image (or image takes full right side, very tall)
**Heading:** "Stratégie d'image et de publicité"
**Body:**
Incarner la marque en une idée. Créer une image puissante, unique et singulière.
Développer son charisme, son aura. Montrer ce qu'elle n'a jamais dit.
Faire du produit une promesse tenue. Aligner raison d'être, être et perception.
De la stratégie à la création, nous cultivons l'excellence dans chaque détail.
Notre métier : sublimer l'expertise d'une maison par la force d'une vision.
Donner corps aux valeurs de la marque pour décupler son pouvoir de séduction.
**CTA:** "Nos stratégies d'images et réalisations" → /fr/image-brand-content/
**Image:** /images/home-bollinger-bw.jpg — actually re-check: this section has its own dedicated image. The image visible is likely a different one. Use as placeholder if needed.

---

## SECTION: Brand Content (id="brand-content")
**Layout:** heading + text left, 3-image triptych right
**Heading:** "Brand Content"
**Body:**
Explorer le territoire d'une marque en pionnier.
Révéler sa singularité dans une ligne éditoriale juste et originale.
Enrichir son histoire, sa substance. Orchestrer sa cohérence par les idées.
Développer son existence par un copywriting vecteur de rêve, porteur de sens.
De la vision stratégique à la création, nous imaginons les contenus qui feront de votre marque une expérience unique.
**CTA:** "Notre expertise brand content" → /fr/image-brand-content/
**Triptych images:**
- /images/home-triptique-4.jpg (red archway with luxury bottle, red-toned)
- /images/home-triptique-5.jpg (fork with red berries, black bg)
- /images/home-triptique-6.jpg (blue sapphire tiara/jewelry, white bg)

---

## SECTION: Digital (id="digital")
**Layout:** 2-col — heading + text left, mockup image right
**Heading:** "Plateforme digitale et site web"
**Body:**
Créer un monde virtuel, profond et singulier, intimement connecté à la réalité. Penser la navigation comme le fil d'une pensée. Transformer votre Expertise en visibilité. L'agence Omedia accompagne ses marques dans la création de leur plateforme web et le déploiement de leur stratégie digitale. Nous créons l'expérience utilisateur inédite et intuitive, qu'aucun n'aura jamais vécu. Et orchestrons subtilement la présence en ligne et à l'esprit, pour susciter confiance et adhésion, au-delà de la notoriété.
**CTA:** "Plateformes digitales et sites web luxe" → /fr/site-web-application/
**Image:** /images/home-omedia-mockup.png (phone/device mockup)

---

## SECTION: Social Media & Influence (id="social")
**Layout:** heading + text left, 3 images right (stacked vertically OR grid)
**Heading:** "Stratégie d'influence et social média"
**Body:**
Conjuguer affinité et proximité. Jouer la complémentarité par la co-création.
Nous envisageons le luxe comme une expérience esthétique, une dynamique créative, collaborative et culturelle, riche de sens et source d'influence.
Nos ambitions : développer le sentiment d'appartenance par la complicité.
Susciter l'engagement par une connexion profonde. Cultiver la prestance de la marque, en ligne et dans le monde, à travers les ambassadeurs et médias qui la feront rayonner.
**CTA:** "Nos stratégies d'influence" → /fr/strategie-social-media-et-influence/
**Images (3 stacked or triptych):**
- /images/omedia-swissperfection-featured.jpg
- /images/omedia-bollinger-plateforme-marque-print-v1.jpg
- /images/omedia-christofle-influence-social-media-04.jpg

---

## SECTION: Édition (id="edition")
**Layout:** 2-col — heading + text left, book/edition image right
**Heading:** "Édition"
**Body:**
Penser le concept qui fera la différence. Trouver l'angle d'un autre regard.
Raconter une histoire, les valeurs d'une maison. Faire écho à sa singularité.
Concevoir la forme qui donnera vie au fond. Et créer l'immersion dès la couverture…
Notre sensibilité aux histoires de marque nous permet de les raconter avec passion, d'y insuffler notre ouverture aux tendances et influences qui traversent le monde et la société.
Livre de marque, magazine, dossier de presse : chaque ouvrage est conçu comme un objet d'art. Notre souci du détail porte autant sur la beauté de l'ouvrage et la noblesse des matières que sur l'éco-responsabilité des matériaux et procédés.
**CTA:** "Notre expertise édition" → /fr/edition/
**Image:** /images/home-omedia-edition.png (Helena Rubinstein luxury book/publication)

---

## Responsive (mobile 390px)
- All 2-col layouts stack: image goes below text
- Triptych: stack to single column, each image full-width
- Heading font-size: 36px on mobile
- Section padding: 40px 24px

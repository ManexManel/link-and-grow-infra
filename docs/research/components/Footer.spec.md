# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** static + newsletter form

## DOM Structure
Single section with:
- Left area: NEWSLETTER heading + email input + submit button
- Center-left: Social icons (Instagram, LinkedIn)
- Center-right: Navigation links list
- Right: Address block

## Computed Styles

### Footer container
- background: #ffffff
- border-top: 1px solid #e5e5e5
- padding: 60px 80px
- display: flex
- align-items: flex-start
- gap: 40px (or justify-content: space-between)

### NEWSLETTER heading
- font-family: "Din Pro", sans-serif
- font-size: ~48px (large)
- font-weight: 700
- letter-spacing: 3px
- color: #000000
- text-transform: uppercase
- margin-bottom: 24px

### Email input
- font-family: "Din Pro", sans-serif
- font-size: 14px
- border: 1px solid #000
- border-radius: 30px (pill shape)
- padding: 12px 24px
- width: ~260px
- background: transparent
- color: #000
- placeholder: "Entrez votre email"

### S'INSCRIRE button
- font-family: "Din Pro", sans-serif
- font-size: 15px
- font-weight: 500
- background: rgb(245, 191, 69) = #f5bf45
- color: #ffffff
- border-radius: 6px
- padding: 17px 40px
- border: none
- cursor: pointer
- margin-left: 12px

### Social icons area
- display: flex
- gap: 12px
- margin-top: 24px (below newsletter form)

### Social icon circles
- width: 36px
- height: 36px
- border-radius: 50%
- border: 1px solid #000 (or bg: #000 for filled)
- display: flex
- align-items: center
- justify-content: center
- color: #000 (or white on black bg)

### Nav links list
- list-style: none
- padding: 0
- display: flex
- flex-direction: column
- gap: 8px

### Nav link
- font-family: "Din Pro", sans-serif
- font-size: 13px
- font-weight: 400
- letter-spacing: 1px
- color: #000
- text-transform: uppercase
- text-decoration: none

### Address block
- font-family: "Din Pro", sans-serif
- font-size: 13px
- font-weight: 400
- color: #000
- line-height: 1.8

## Text Content

### Newsletter
- Heading: "NEWSLETTER"
- Input placeholder: "Entrez votre email"
- Button: "S'INSCRIRE"

### Nav links
- L'AGENCE → /fr/agence/
- TALENTS → /fr/talents/
- MENTIONS LÉGALES → /fr/mentions-legales/
- LE SAVOIR-FAIRE → /fr/le-savoir-faire/
- CONTACT → /fr/contact/

### Address
137 BOULEVARD HAUSSMANN 75008 PARIS
+33 | 44 34 10 40
contact@omedia.fr

### Social
- Instagram → https://www.instagram.com/omediaparis/
- LinkedIn → https://www.linkedin.com/company/omedia/

## Responsive
- Mobile: stacks vertically
- Newsletter form: input + button stack

"use client";

import type React from "react";
import Image from "next/image";
import { SectionMiniFooter } from "@/components/SectionMiniFooter";

const headingStyle: React.CSSProperties = {
  fontFamily: '"Din Pro", sans-serif',
  fontSize: "64px",
  fontWeight: 700,
  letterSpacing: "-1.728px",
  lineHeight: 1.05,
};

const bodyStyle: React.CSSProperties = {
  fontFamily: '"Din Pro", sans-serif',
  fontSize: "16px",
  fontWeight: 300,
  lineHeight: "30px",
  color: "#000",
};

export function ContentSections() {
  return (
    <>
      {/* SECTION 1: À Propos */}
      <section id="a-propos" className="bg-white">
        <div className="px-20 pt-20 pb-0">
          <div className="flex">
            <div className="w-[55%] pr-10">
              <h2 style={headingStyle}>Conjuguer luxe &amp; créativité</h2>
              <div className="w-44 h-px bg-black mb-8 mt-2" />
              <p style={bodyStyle}>
                Nous sommes une agence conseil en communication, dédiée aux Maison de luxe.
                <br />
                Depuis 30 ans, nous accompagnons les Maisons les plus prestigieuses dans leur stratégie de marque et d&apos;image, campagnes de communication publicitaire, stratégie social media et d&apos;influence, brand content…
              </p>
              <a href="/agence" className="omedia-cta-link mt-10 block">
                À propos
              </a>
            </div>
            <div className="w-[45%]">
              <div className="relative w-full h-full min-h-[500px]">
                <Image
                  src="/images/home202312-vis1.jpg"
                  alt="À propos Omedia Paris"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <SectionMiniFooter
          services={[
            "CONSEIL ET PLANNING STRATÉGIQUE",
            "PLATEFORME DE MARQUE",
            "MANIFESTE",
          ]}
        />
      </section>

      {/* SECTION 2: Stratégie de Marque */}
      <section id="strategie" className="bg-white">
        <div className="px-20 pt-20 pb-0">
          <div className="flex">
            <div className="w-[55%] pr-10">
              <h2 style={headingStyle}>Conseil en stratégie de marque</h2>
              <div className="w-44 h-px bg-black mb-8 mt-2" />
              <p style={bodyStyle}>
                La stratégie de marque : un pouvoir de projection.
                <br />
                L&apos;art de faire d&apos;un territoire de marque un univers aussi singulier qu&apos;intemporel.
                <br />
                D&apos;allier vision stratégique et créativité pour lier valeurs et aspirations.
                <br />
                Omedia Paris imagine le fil rouge et l&apos;histoire qui élèveront la marque au rang d&apos;icône.
                <br />
                Artisans de l&apos;innovation, nous ciselons les idées qui transformeront son esprit en manifeste de son domaine. Et son storytelling en success story.
              </p>
              <a href="/fr/strategie-de-marque/" className="omedia-cta-link mt-10 block">
                Clients et stratégies
              </a>
            </div>
            <div className="w-[45%]">
              <div className="relative w-full h-full min-h-[500px]">
                <Image
                  src="/images/home-bollinger-bw.jpg"
                  alt="Stratégie de marque"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <SectionMiniFooter
          services={[
            "CONSEIL",
            "PLANNING STRATÉGIQUE",
            "PLATEFORME DE MARQUE",
            "MANIFESTE",
            "TERRITOIRE D'EXPRESSION",
            "BRAND BOOK",
            "CREATIVE GUIDELINES",
          ]}
        />
      </section>

      {/* SECTION 3: Branding */}
      <section id="branding-naming" className="bg-white">
        <div className="px-20 pt-20 pb-0">
          <div className="flex">
            <div className="w-[55%] pr-10">
              <h2 style={headingStyle}>Branding et naming</h2>
              <div className="w-44 h-px bg-black mb-8 mt-2" />
              <p style={bodyStyle}>
                Imaginer une marque jamais créée. Dessiner son image, penser sa représentation.
                <br />
                Visualiser son futur. Trouver le nom évocateur qui s&apos;inscrira dans un temps long.
                <br />
                Faire résonner son storytelling sur tous les canaux d&apos;expression.
                <br />
                Pour ancrer son histoire et ses produits dans les esprits.
                <br />
                Du naming à la plateforme de marque, nos experts vous accompagnent dans la construction de votre identité et son déploiement stratégique. Nous développons la personnalité de marque qui restera en mémoire par sa force, sa beauté, sa différence.
              </p>
              <a href="/fr/branding/" className="omedia-cta-link mt-10 block">
                Notre expertise branding &amp; naming
              </a>
            </div>
            <div className="w-[45%]">
              <div className="flex flex-col gap-2 h-full">
                <div className="relative w-full h-56">
                  <Image
                    src="/images/home-triptique-1-1.jpg"
                    alt="Branding 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full h-56">
                  <Image
                    src="/images/home-triptique-2.jpg"
                    alt="Branding 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full h-56">
                  <Image
                    src="/images/home-triptique-3.jpg"
                    alt="Branding 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <SectionMiniFooter
          services={[
            "CRÉATION DE NOM",
            "ICONOGRAPHIE",
            "TERRITOIRE VISUEL",
            "CHARTE GRAPHIQUE",
            "LOGOTYPE",
            "OUTILS DE COMMUNICATION",
          ]}
        />
      </section>

      {/* SECTION 4: Image */}
      <section id="image" className="bg-white">
        <div className="px-20 pt-20 pb-0">
          <div className="flex">
            <div className="w-[55%] pr-10">
              <h2 style={headingStyle}>Stratégie d&apos;image et de publicité</h2>
              <div className="w-44 h-px bg-black mb-8 mt-2" />
            </div>
            <div className="w-[45%]">
              <p style={bodyStyle}>
                Incarner la marque en une idée. Créer une image puissante, unique et singulière.
                <br />
                Développer son charisme, son aura. Montrer ce qu&apos;elle n&apos;a jamais dit.
                <br />
                Faire du produit une promesse tenue. Aligner raison d&apos;être, être et perception.
                <br />
                De la stratégie à la création, nous cultivons l&apos;excellence dans chaque détail.
                <br />
                Notre métier : sublimer l&apos;expertise d&apos;une maison par la force d&apos;une vision.
                <br />
                Donner corps aux valeurs de la marque pour décupler son pouvoir de séduction.
              </p>
              <a href="/fr/image-brand-content/" className="omedia-cta-link mt-10 block">
                Nos stratégies d&apos;images et réalisations
              </a>
            </div>
          </div>
        </div>
        <SectionMiniFooter
          services={[
            "DIRECTION DE CRÉATION",
            "CRÉATION DE CONCEPT SINGULIER",
            "CAMPAGNE PUBLICITAIRE",
            "PRINT, TV, ONLINE",
            "PRODUCTION ET ACHAT D'ART",
            "IDENTITÉ VISUELLE",
            "DESIGN",
          ]}
        />
      </section>

      {/* SECTION 5: Brand Content */}
      <section id="brand-content" className="bg-white">
        <div className="px-20 pt-20 pb-0">
          <div className="flex">
            <div className="w-[55%] pr-10">
              <h2 style={headingStyle}>Brand Content</h2>
              <div className="w-44 h-px bg-black mb-8 mt-2" />
              <p style={bodyStyle}>
                Explorer le territoire d&apos;une marque en pionnier.
                <br />
                Révéler sa singularité dans une ligne éditoriale juste et originale.
                <br />
                Enrichir son histoire, sa substance. Orchestrer sa cohérence par les idées.
                <br />
                Développer son existence par un copywriting vecteur de rêve, porteur de sens.
                <br />
                De la vision stratégique à la création, nous imaginons les contenus qui feront de votre marque une expérience unique.
              </p>
              <a href="/fr/image-brand-content/" className="omedia-cta-link mt-10 block">
                Notre expertise brand content
              </a>
            </div>
            <div className="w-[45%]">
              <div className="flex w-full mt-8">
                <div className="flex-1 relative h-72">
                  <Image
                    src="/images/home-triptique-4.jpg"
                    alt="Brand Content 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 relative h-72">
                  <Image
                    src="/images/home-triptique-5.jpg"
                    alt="Brand Content 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 relative h-72">
                  <Image
                    src="/images/home-triptique-6.jpg"
                    alt="Brand Content 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <SectionMiniFooter
          services={[
            "STRATÉGIE DE CONTENU",
            "DIRECTION ARTISTIQUE",
            "STRATÉGIE D'ACTIVATION",
            "STORYTELLING",
            "PRODUCTION PHOTO",
            "PRODUCTION FILM",
          ]}
        />
      </section>

      {/* SECTION 6: Digital */}
      <section id="digital" className="bg-white">
        <div className="px-20 pt-20 pb-0">
          <div className="flex">
            <div className="w-[55%] pr-10">
              <h2 style={headingStyle}>Plateforme digitale et site web</h2>
              <div className="w-44 h-px bg-black mb-8 mt-2" />
              <p style={bodyStyle}>
                Créer un monde virtuel, profond et singulier, intimement connecté à la réalité. Penser la navigation comme le fil d&apos;une pensée. Transformer votre Expertise en visibilité. L&apos;agence Omedia accompagne ses marques dans la création de leur plateforme web et le déploiement de leur stratégie digitale. Nous créons l&apos;expérience utilisateur inédite et intuitive, qu&apos;aucun n&apos;aura jamais vécu. Et orchestrons subtilement la présence en ligne et à l&apos;esprit, pour susciter confiance et adhésion, au-delà de la notoriété.
              </p>
              <a href="/fr/site-web-application/" className="omedia-cta-link mt-10 block">
                Plateformes digitales et sites web luxe
              </a>
            </div>
            <div className="w-[45%]">
              <div className="relative w-full h-full min-h-[500px]">
                <Image
                  src="/images/home-omedia-mockup.png"
                  alt="Plateforme digitale"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <SectionMiniFooter
          services={[
            "STRATÉGIE DIGITALE",
            "UX DESIGN",
            "UI DESIGN",
            "WEBDESIGN",
            "SITE WEB CORPORATE, PRODUIT, ÉVÉNEMENTIEL",
            "SITE E-COMMERCE",
            "ACQUISITION",
            "SEO, SEA",
            "MARKETPLACE",
            "CRM",
          ]}
        />
      </section>

      {/* SECTION 7: Social Media */}
      <section id="social" className="bg-white">
        <div className="px-20 pt-20 pb-0">
          <div className="flex">
            <div className="w-[55%] pr-10">
              <h2 style={headingStyle}>Stratégie d&apos;influence et social média</h2>
              <div className="w-44 h-px bg-black mb-8 mt-2" />
              <p style={bodyStyle}>
                Conjuguer affinité et proximité. Jouer la complémentarité par la co-création.
                <br />
                Nous envisageons le luxe comme une expérience esthétique, une dynamique créative, collaborative et culturelle, riche de sens et source d&apos;influence.
                <br />
                Nos ambitions : développer le sentiment d&apos;appartenance par la complicité.
                <br />
                Susciter l&apos;engagement par une connexion profonde. Cultiver la prestance de la marque, en ligne et dans le monde, à travers les ambassadeurs et médias qui la feront rayonner.
              </p>
              <a href="/fr/strategie-social-media-et-influence/" className="omedia-cta-link mt-10 block">
                Nos stratégies d&apos;influence
              </a>
            </div>
            <div className="w-[45%]">
              <div className="flex flex-col gap-2 h-full">
                <div className="relative w-full h-56">
                  <Image
                    src="/images/omedia-swissperfection-featured.jpg"
                    alt="Social Media 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full h-56">
                  <Image
                    src="/images/omedia-bollinger-plateforme-marque-print-v1.jpg"
                    alt="Social Media 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full h-56">
                  <Image
                    src="/images/omedia-christofle-influence-social-media-04.jpg"
                    alt="Social Media 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <SectionMiniFooter
          services={[
            "STRATÉGIE DIGITALE",
            "ACTIVATION SOCIALE",
            "MARKETING D'INFLUENCE (micro et macro)",
            "SOCIAL MEDIA INFLUENCE",
            "CRÉATION ET PRODUCTION DE CONTENU",
            "COMMUNITY MANAGEMENT",
            "SOCIAL ADVERTISING",
          ]}
        />
      </section>

      {/* SECTION 8: Édition */}
      <section id="edition" className="bg-white">
        <div className="px-20 pt-20 pb-0">
          <div className="flex">
            <div className="w-[55%] pr-10">
              <h2 style={headingStyle}>Édition</h2>
              <div className="w-44 h-px bg-black mb-8 mt-2" />
              <p style={bodyStyle}>
                Penser le concept qui fera la différence. Trouver l&apos;angle d&apos;un autre regard.
                <br />
                Raconter une histoire, les valeurs d&apos;une maison. Faire écho à sa singularité.
                <br />
                Concevoir la forme qui donnera vie au fond. Et créer l&apos;immersion dès la couverture…
                <br />
                Notre sensibilité aux histoires de marque nous permet de les raconter avec passion, d&apos;y insuffler notre ouverture aux tendances et influences qui traversent le monde et la société.
                <br />
                Livre de marque, magazine, dossier de presse : chaque ouvrage est conçu comme un objet d&apos;art. Notre souci du détail porte autant sur la beauté de l&apos;ouvrage et la noblesse des matières que sur l&apos;éco-responsabilité des matériaux et procédés.
              </p>
              <a href="/fr/edition/" className="omedia-cta-link mt-10 block">
                Notre expertise édition
              </a>
            </div>
            <div className="w-[45%]">
              <div className="relative w-full h-full min-h-[500px]">
                <Image
                  src="/images/home-omedia-edition.png"
                  alt="Édition Omedia Paris"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <SectionMiniFooter
          services={[
            "STRATÉGIE ÉDITORIALE",
            "STORYTELLING",
            "ICONOGRAPHIE",
            "ÉDITION DE PRESTIGE",
            "CONCEPTION ET RÉDACTION",
            "FABRICATION",
            "STRATÉGIE DE CONTENUS",
          ]}
        />
      </section>
    </>
  );
}

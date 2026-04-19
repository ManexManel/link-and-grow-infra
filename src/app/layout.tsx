import type { Metadata } from "next";
import { Nunito, Rubik, Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-rubik",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = "https://linkandgrow-b2b.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Link & Grow | Agência de Inbound Marketing & Link Building B2B",
  description:
    "Construímos a autoridade digital da sua empresa B2B. Aumente o seu tráfego qualificado e domine o seu mercado com estratégias premium de Inbound Marketing e Link Building.",
  keywords: [
    "inbound marketing",
    "link building",
    "agência marketing digital",
    "SEO B2B",
    "marketing digital Portugal",
    "geração de leads",
    "autoridade de domínio",
    "agência Porto",
    "agência Lisboa",
  ],
  authors: [{ name: "Link&Grow", url: "https://linkandgrow.pt" }],
  creator: "Link&Grow",
  publisher: "Link&Grow",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Link & Grow | Agência de Inbound Marketing & Link Building B2B",
    description:
      "Construímos a autoridade digital da sua empresa B2B. Aumente o seu tráfego qualificado e domine o seu mercado com estratégias premium.",
    url: BASE_URL,
    siteName: "Link&Grow",
    locale: "pt_PT",
    type: "website",
    images: [
      {
        url: "/seo/og-image.png",
        width: 1200,
        height: 630,
        alt: "Link&Grow — Agência de Inbound Marketing & Link Building B2B",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Link & Grow | Agência de Inbound Marketing & Link Building B2B",
    description:
      "Construímos a autoridade digital da sua empresa B2B. Estratégias premium de Inbound Marketing e Link Building.",
    images: ["/seo/og-image.png"],
    creator: "@linkandgrow",
    site: "@linkandgrow",
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "pt-PT": BASE_URL,
      "fr-FR": `${BASE_URL}/fr`,
      "en-GB": `${BASE_URL}/en`,
    },
  },
  verification: {
    google: "linkandgrow-google-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${nunito.variable} ${rubik.variable} ${instrumentSerif.variable} ${inter.variable}`}>
      <body className="min-h-full antialiased">
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}

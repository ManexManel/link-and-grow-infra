import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OMEDIA PARIS I Agence conseil en Communication Luxe",
  description:
    "Nous sommes une agence conseil en communication, dédiée aux Maison de luxe. Depuis 30 ans, nous accompagnons les Maisons les plus prestigieuses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}

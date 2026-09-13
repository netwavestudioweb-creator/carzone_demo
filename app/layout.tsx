import type { Metadata, Viewport } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0D0D0D",
};

export const metadata: Metadata = {
  title: "CARZONE Bénin | La Maison des Voitures Chinoises et Multi-Marques",
  description: "Découvrez la nouvelle génération de véhicules au Bénin (BYD, Jetour, Changan). Showroom moderne, véhicules hybrides et 100% électriques, vente, SAV et conciergerie privée à Cotonou.",
  keywords: ["Voitures Bénin", "Achat véhicule Cotonou", "BYD Bénin", "Jetour Afrique", "Voiture hybride", "Concessionnaire automobile Cotonou", "Topcarzone"],
  openGraph: {
    title: "CARZONE Bénin | Concessionnaire Premium",
    description: "L'avenir de l'automobile en toute confiance au Bénin. BYD, Jetour, Changan et plus.",
    url: "https://www.topcarzone.com",
    siteName: "CARZONE Bénin",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${syne.variable} ${inter.variable} dark scroll-smooth`}>
      <body className="bg-[#0D0D0D] text-[#A1A1AA] font-sans antialiased min-h-screen selection:bg-[#D4AF37] selection:text-[#0D0D0D]">
        {children}
      </body>
    </html>
  );
}

import Header from "@/components/Header";
import DigitalCatalog from "@/components/DigitalCatalog";
import SimpleFooter from "@/components/SimpleFooter";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalogue Véhicules Neufs & Électriques Cotonou | CARZONE Bénin",
  description: "Explorez le catalogue complet de véhicules neufs, électriques, hybrides & thermiques à Cotonou. BYD, Jetour, Changan, Chery, Zeekr & Mercedes. Vente, essais privés & conciergerie.",
  keywords: [
    "Catalogue voiture Bénin",
    "Achat BYD Cotonou",
    "Achat Jetour Cotonou",
    "Changan Bénin",
    "Prix voiture électrique Cotonou",
    "Showroom automobile Bénin",
    "CARZONE catalogue",
  ],
  openGraph: {
    title: "Catalogue Véhicules Premium & Électriques Cotonou | CARZONE Bénin",
    description: "Explorez notre collection exclusive de véhicules BYD, Jetour, Changan, Chery & d'élite au Bénin.",
    url: "https://www.topcarzone.com/catalogue",
    siteName: "CARZONE Bénin",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/hero-chinese-cars.jpg",
        width: 1200,
        height: 630,
        alt: "Catalogue CARZONE Bénin — Véhicules d'Élite à Cotonou",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Catalogue Véhicules Premium & Électriques | CARZONE Bénin",
    description: "BYD, Jetour, Changan, Chery & Marques d'Élite disponibles à Cotonou.",
    images: ["/images/hero-chinese-cars.jpg"],
  },
};

export default function CataloguePage() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-[#E4E4E7] overflow-hidden">
      <Header />
      <div className="pt-24">
        <DigitalCatalog />
      </div>
      <SimpleFooter />
    </main>
  );
}

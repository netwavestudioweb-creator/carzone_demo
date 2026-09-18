import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import SimpleFooter from "@/components/SimpleFooter";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Conciergerie Automobile | SAV, Pièces & Importation | CARZONE Bénin",
  description: "Découvrez nos services d'exception à Cotonou : importation express sur-mesure, maintenance certifiée, pièces détachées d'origine & conciergerie privée VIP.",
  openGraph: {
    title: "Services & Conciergerie Automobile | CARZONE Bénin",
    description: "Importation sur-mesure, pièces certifiées & maintenance spécialisée véhicules électriques et hybrides à Cotonou.",
    url: "https://www.topcarzone.com/services",
    siteName: "CARZONE Bénin",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/hero-chinese-cars.jpg",
        width: 1200,
        height: 630,
        alt: "Services CARZONE Bénin — Conciergerie & Maintenance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services & Conciergerie Automobile | CARZONE Bénin",
    description: "SAV certifié, pièces d'origine & conciergerie automobile VIP à Cotonou.",
    images: ["/images/hero-chinese-cars.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-[#E4E4E7] overflow-hidden">
      <Header />
      <div className="pt-24">
        <ServicesSection />
      </div>
      <SimpleFooter />
    </main>
  );
}

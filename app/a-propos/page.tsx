import Header from "@/components/Header";
import { ExperienceSection } from "@/components/Experience";
import AboutSection from "@/components/AboutSection";
import SimpleFooter from "@/components/SimpleFooter";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos | Maison Automobile & Conciergerie VIP à Cotonou | CARZONE Bénin",
  description: "Découvrez la maison automobile CARZONE à Cotonou. Notre vision, notre showroom exclusif et notre engagement pour l'excellence automobile au Bénin.",
  openGraph: {
    title: "À Propos | CARZONE Bénin — Maison Automobile d'Exception",
    description: "Concessionnaire & Showroom Privé à Cotonou. Découvrez notre histoire et nos services VIP.",
    url: "https://www.topcarzone.com/a-propos",
    siteName: "CARZONE Bénin",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/hero-chinese-cars.jpg",
        width: 1200,
        height: 630,
        alt: "À Propos de CARZONE Bénin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "À Propos | CARZONE Bénin",
    description: "Concessionnaire automobile haut de gamme à Cotonou, Bénin.",
    images: ["/images/hero-chinese-cars.jpg"],
  },
};

export default function AProposPage() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-[#E4E4E7] overflow-hidden">
      <Header />
      <div className="pt-24">
        <AboutSection />
        <ExperienceSection />
      </div>
      <SimpleFooter />
    </main>
  );
}

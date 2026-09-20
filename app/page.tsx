"use client";

import dynamic from "next/dynamic";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DigitalCatalog from "@/components/DigitalCatalog";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesSection from "@/components/ServicesSection";

const AboutSection = dynamic(() => import("@/components/AboutSection"));
const FooterContact = dynamic(() => import("@/components/FooterContact"));

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#07090E] text-[#E4E4E7] overflow-hidden">
      {/* 1. HEADER D'ÉLITE */}
      <Header />

      {/* 2. HERO CARROUSEL INTERACTIF */}
      <HeroSection />

      {/* 3. CATALOGUE DIGITAL VÉHICULES VIP & FICHES DETAILES 360° */}
      <DigitalCatalog />

      {/* 4. PREUVE SOCIALE & TÉMOIGNAGES CLIENTS COTONOU */}
      <TestimonialsSection />

      {/* 5. À PROPOS DU SHOWROOM & ENGAGEMENT CARZONE */}
      <AboutSection />

      {/* 6. SERVICES EXCLUSIFS & CONCIERGERIE */}
      <ServicesSection />

      {/* 7. FOOTER CONTACT & LOCALISATION ST MICHEL */}
      <FooterContact />
    </main>
  );
}

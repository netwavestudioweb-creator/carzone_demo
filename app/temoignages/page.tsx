"use client";

import Header from "@/components/Header";
import FooterContact from "@/components/FooterContact";
import TestimonialsSection from "@/components/TestimonialsSection";
import SimpleFooter from "@/components/SimpleFooter";
import { Award, ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function TemoignagesPage() {
  return (
    <main className="min-h-screen bg-[#07090E] text-[#E4E4E7] pt-24">
      <Header />

      {/* HERO DES TÉMOIGNAGES */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center border-b border-white/5 relative">
        <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2 rounded-full text-xs font-bold tracking-[0.2em] text-[#E5C158] uppercase mb-6 backdrop-blur-md">
          <Award className="w-4 h-4 text-[#E5C158]" />
          <span>Avis Certifiés &amp; Satisfaction Client</span>
        </div>

        <h1 className="font-syne text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
          La Réputation CarZone <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C158] via-[#FFF0B3] to-[#E5C158]">
            À Cotonou &amp; au Bénin.
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed font-light">
          Chaque véhicule livre une histoire d&apos;excellence. Découvrez les retours d&apos;expérience authentiques de nos clients passionnés et professionnels.
        </p>
      </section>

      {/* SECTION TÉMOIGNAGES COMPLÈTE */}
      <TestimonialsSection />

      {/* FOOTER & CONTACT */}
      <FooterContact />
    </main>
  );
}

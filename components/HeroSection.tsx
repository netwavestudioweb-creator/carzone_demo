"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center justify-center pt-24 overflow-hidden">
      {/* ARRIÈRE-PLAN : Image de véhicule de luxe avec effets d'ambiance */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=85"
          alt="Voiture de luxe CARZONE"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 filter brightness-50"
        />

        {/* Gradient overlay sombre spécifié */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/70 via-[#0D0D0D]/85 to-[#0D0D0D]" />

        {/* Effet lueur dorée subtile en arrière-plan */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D4AF37]/10 blur-[130px] rounded-full pointer-events-none" />
      </div>

      {/* CONTENU PRINCIPAL */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 flex flex-col items-center text-center">
        {/* BADGE SUPÉRIEUR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest text-[#D4AF37] uppercase shadow-sm backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>LA MAISON DES VOITURES CHINOISES ET MULTI-MARQUES AU BÉNIN</span>
          </div>
        </motion.div>

        {/* TITRE PRINCIPAL (H1, Police Syne) */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-8 font-syne text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08]"
        >
          Bienvenue chez <span className="text-white">CAR</span>
          <span className="text-[#D4AF37]">ZONE</span>
        </motion.h1>

        {/* SOUS-TITRE */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-4 text-xl sm:text-2xl md:text-3xl font-syne font-semibold text-white/90"
        >
          L&apos;avenir de l&apos;automobile en toute confiance.
        </motion.p>

        {/* PARAGRAPHE DESCRIPTIF */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-6 text-base sm:text-lg text-[#A1A1AA] max-w-3xl leading-relaxed font-normal"
        >
          Chez CARZONE, nous vous ouvrons les portes de la nouvelle génération de véhicules : Design innovant • Technologies de pointe • Performance durable. Un Showroom moderne exposant les meilleurs designs des offres de voitures chinoises et multi-marques.
        </motion.p>

        {/* BOUTONS D'ACTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {/* Bouton Principal */}
          <Link
            href="#marques"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-[#D4AF37] transition duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.15)] text-sm tracking-wide uppercase"
          >
            <span>Explorer les Marques</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          {/* Bouton Secondaire */}
          <Link
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-white/20 hover:border-white text-white font-semibold transition duration-300 backdrop-blur-sm text-sm tracking-wide uppercase hover:bg-white/5"
          >
            <Calendar className="w-4 h-4 text-[#D4AF37]" />
            <span>Prendre Rendez-vous</span>
          </Link>
        </motion.div>
      </div>

      {/* Ligne lumineuse de séparation inférieure */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#262626] to-transparent" />
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="min-h-screen relative flex items-center pt-32 pb-20 overflow-hidden bg-[#0B0D14]">
      {/* ARRIÈRE-PLAN : Effet de Parallax et Zoom Lent */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <motion.div
          animate={{ scale: [1, 1.05] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="w-full h-full relative"
        >
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2500&q=100"
            alt="Showroom Privé CARZONE"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_50%] filter brightness-[0.35] contrast-125 saturate-50"
          />
        </motion.div>

        {/* Dégradés d'intégration avec le fond Noir Obsidienne */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D14] via-[#0B0D14]/70 to-transparent w-full md:w-2/3" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D14] via-transparent to-transparent h-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D14] via-transparent to-transparent h-32" />

        {/* Lueur Dorée Magnétique - Style "Liquid Gold" */}
        {/* Halo supprimé pour les perfs */}
      </motion.div>

      {/* CONTENU PRINCIPAL - Disposition Asymétrique (Avant-Garde) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* COLONNE GAUCHE (Texte imposant) */}
        <div className="lg:col-span-8 flex flex-col items-start text-left pt-12 md:pt-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2 rounded-full text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-[#E5C158] uppercase shadow-sm backdrop-blur-xl mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] animate-pulse" />
              <span>Concessionnaire Multi-Marques Premium • Bénin</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-syne text-5xl sm:text-7xl lg:text-[5.5rem] font-bold text-white tracking-tighter leading-[1.05] uppercase"
          >
            L&apos;Excellence <br />
            <span className="font-light italic text-white/70 lowercase tracking-normal text-4xl sm:text-6xl lg:text-7xl">redéfinie</span> à <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C158] to-[#FFF0B3]">
              Cotonou.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
            className="mt-8 text-base sm:text-lg text-white/50 max-w-xl leading-relaxed font-inter font-light tracking-wide"
          >
            Découvrez une sélection rigoureuse des véhicules les plus avancés au monde (BYD, Jetour, Changan). Une expérience d&apos;achat sur-mesure, de l&apos;importation à la remise des clés VIP.
          </motion.p>

          {/* ACTIONS (Boutons Glassmorphism) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
          >
            <Link
              href="/catalogue"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-4 px-10 py-5 rounded-full bg-white text-[#0B0D14] font-bold uppercase tracking-widest text-xs transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#E5C158] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              <span className="relative z-10 group-hover:text-[#0B0D14]">Explorer la Collection</span>
              <ArrowUpRight className="relative z-10 w-4 h-4 group-hover:rotate-45 transition-transform duration-500" />
            </Link>

            <Link
              href="/#contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 text-white font-semibold uppercase tracking-widest text-xs backdrop-blur-md transition-all duration-500"
            >
              <Play className="w-3.5 h-3.5 text-[#E5C158]" />
              <span>Contact VIP</span>
            </Link>
          </motion.div>
        </div>

        {/* COLONNE DROITE (Carte Flottante Glassmorphism) */}
        <div className="lg:col-span-4 hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            style={{ perspective: 1000 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-[#E5C158]/40 to-transparent rounded-3xl blur-2xl opacity-50 pointer-events-none" />
            <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-[0_30px_60px_rgba(0,0,0,0.5)] transform-gpu hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(229,193,88,0.15)] transition-all duration-700">
              <div className="flex justify-between items-start mb-12">
                <Sparkles className="w-6 h-6 text-[#E5C158]" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/40">Édition Limitée</span>
              </div>
              <div className="space-y-2">
                <h3 className="font-syne text-2xl font-bold text-white">YangWang U8</h3>
                <p className="text-sm text-[#E5C158] font-semibold tracking-wider">BYD PREMIUM</p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <a href="/downloads/carzone-catalog-2025.pdf" download className="group flex items-center gap-3 text-xs text-white/70 hover:text-white transition-colors">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#E5C158] group-hover:text-black transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                  <span className="uppercase tracking-widest font-semibold">Télécharger le Catalogue (12Mo)</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Ligne Lumineuse de Défilement (Scroll Indicator) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 rotate-90 mb-6">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}

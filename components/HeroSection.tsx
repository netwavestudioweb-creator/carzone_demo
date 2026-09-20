"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Zap, Gauge, ShieldCheck, MapPin, PhoneCall } from "lucide-react";

const heroSlides = [
  {
    id: "1",
    brand: "BYD",
    model: "Seal Performance 530ch",
    subtitle: "L'Élite Électrique Mondiale à Cotonou",
    specs: { power: "530 ch", acceleration: "3.8s (0-100)", range: "570 km", type: "100% Électrique" },
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1920&auto=format&fit=crop",
    tagline: "Technologie Blade Battery & Transmission AWD",
  },
  {
    id: "2",
    brand: "JETOUR",
    model: "T2 Traveler 4x4",
    subtitle: "L'Aventurier Luxueux Tout-Terrain",
    specs: { power: "254 ch", acceleration: "Boîte Auto 8", range: "AWD Intelligent", type: "Essence Turbo" },
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1920&auto=format&fit=crop",
    tagline: "Design Dominant & Confort Palace",
  },
  {
    id: "3",
    brand: "CHANGAN",
    model: "UNI-K Flagship SUV",
    subtitle: "Futurisme & Élégance Technologique",
    specs: { power: "233 ch", acceleration: "2.0 Turbo", range: "Écran Triple 3D", type: "Hybride / Essence" },
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop",
    tagline: "Calandre Aérodynamique & Cuir Nappa",
  },
  {
    id: "4",
    brand: "YANGWANG",
    model: "U8 Supercar SUV",
    subtitle: "Le Sommet du Prestige Automobile",
    specs: { power: "1197 ch", acceleration: "3.6s (0-100)", range: "1000 km Hybrid", type: "Quad-Motor AWD" },
    image: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=1920&auto=format&fit=crop",
    tagline: "Technologie E4 & Flottaison d'Urgence",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const currentSlide = heroSlides[currentIndex];

  const whatsappMessage = encodeURIComponent(
    `Bonjour CarZone Showroom Cotonou, je souhaite réserver une présentation VIP et planifier un essai du modèle ${currentSlide.brand} ${currentSlide.model}.`
  );

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-[#07090E]">
      {/* ARRIÈRE-PLAN AVEC CARROUSEL FLUIDE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={currentSlide.image}
            alt={currentSlide.model}
            fill
            priority
            className="object-cover object-center filter brightness-[0.35] contrast-125 saturate-90"
          />

          {/* DÉGRADÉS D'AMBIANCE WARM LUXURY */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07090E] via-[#07090E]/80 to-transparent w-full lg:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-transparent to-transparent h-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07090E] via-transparent to-transparent h-32" />
        </motion.div>
      </AnimatePresence>

      {/* HALO LUMINEUX DORÉ EN ARRIÈRE-PLAN */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#E5C158]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* CONTENU PRINCIPAL DE LA SLIDE */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* COLONNE TEXTE ET ACTIONS */}
        <div className="lg:col-span-8 flex flex-col items-start pt-6 lg:pt-0">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* BADGE DE MARQUE */}
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-bold tracking-[0.25em] text-[#E5C158] uppercase backdrop-blur-xl shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#E5C158] animate-ping" />
                <span>{currentSlide.brand} • {currentSlide.subtitle}</span>
              </div>

              {/* TITRE PRINCIPAL */}
              <h1 className="font-syne text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] uppercase">
                {currentSlide.brand} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C158] via-[#FFF0B3] to-[#E5C158]">
                  {currentSlide.model}
                </span>
              </h1>

              {/* TAGLINE */}
              <p className="text-base sm:text-lg text-white/70 max-w-xl font-light leading-relaxed">
                {currentSlide.tagline}. Disponible pour réservation et essai VIP au Showroom CarZone de Cotonou.
              </p>

              {/* SPÉCIFICATIONS RAPIDES EN SLIDE */}
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-2 text-xs font-bold text-white">
                  <Zap className="w-4 h-4 text-[#E5C158]" />
                  <span>{currentSlide.specs.power}</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-2 text-xs font-bold text-white">
                  <Gauge className="w-4 h-4 text-[#E5C158]" />
                  <span>{currentSlide.specs.acceleration}</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-2 text-xs font-bold text-[#E5C158]">
                  <ShieldCheck className="w-4 h-4 text-[#E5C158]" />
                  <span>{currentSlide.specs.type}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* BOUTONS D'ACTION */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/catalogue"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#E5C158] text-black font-extrabold uppercase tracking-widest text-xs hover:bg-white transition-all shadow-[0_0_25px_rgba(229,193,88,0.3)] group"
            >
              <span>Explorer la Collection</span>
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </Link>

            <a
              href={`https://wa.me/2290192626262?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-bold uppercase tracking-widest text-xs backdrop-blur-md hover:bg-white/20 transition-all"
            >
              <PhoneCall className="w-4 h-4 text-[#E5C158]" />
              <span>Demander un Essai VIP</span>
            </a>
          </div>
        </div>

        {/* COLONNE DROITE : CONTRÔLES CARROUSEL & APERÇU */}
        <div className="lg:col-span-4 hidden lg:flex flex-col items-end space-y-6">
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl max-w-sm w-full shadow-2xl space-y-4">
            <div className="flex justify-between items-center text-xs font-bold uppercase text-white/50 tracking-wider">
              <span>Showroom Cotonou</span>
              <span className="text-[#E5C158]">0{currentIndex + 1} / 0{heroSlides.length}</span>
            </div>

            <div className="relative h-44 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={currentSlide.image}
                alt="Aperçu"
                fill
                className="object-cover transition-all duration-700"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      currentIndex === i ? "w-8 bg-[#E5C158]" : "w-2 bg-white/20 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#E5C158] hover:text-black transition-all flex items-center justify-center text-white"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#E5C158] hover:text-black transition-all flex items-center justify-center text-white"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* BANDEAU DE CONFIANCE ET DE RÉPUTATION EN BAS */}
      <div className="absolute bottom-4 left-0 right-0 max-w-7xl mx-auto px-6 hidden md:flex items-center justify-between border-t border-white/10 pt-4 text-xs font-medium text-white/60">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#E5C158]" />
          <span>Showroom St Michel Kété-kété, Cotonou</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#E5C158]" />
          <span>Garantie Constructeur & Service Informatique 5 Ans</span>
        </div>
        <div className="text-[#E5C158] font-bold">
          +150 Clients Satisfaits au Bénin
        </div>
      </div>
    </section>
  );
}

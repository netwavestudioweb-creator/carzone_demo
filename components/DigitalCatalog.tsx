"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUpRight, CheckCircle2, Download, Search, SlidersHorizontal } from "lucide-react";
import { carsInventory, Car } from "@/data/carsData";

// Helper pour la couleur du glow (lumière) selon la marque
const getGlowColor = (brand: string) => {
  switch (brand) {
    case "BYD": return "rgba(59, 130, 246, 0.4)"; // Bleu électrique
    case "Changan": return "rgba(239, 68, 68, 0.4)"; // Rouge dynamique
    case "Jetour": return "rgba(245, 158, 11, 0.4)"; // Ambre chaleureux
    case "ZEEKR": return "rgba(139, 92, 246, 0.4)"; // Violet tech
    default: return "rgba(229, 193, 88, 0.3)"; // Or par défaut
  }
};

// Suppression des données codées en dur, utilisation de carsInventory importé

const categories = [
  { label: "Tous les Véhicules (Cotonou)", value: "Tous" },
  { label: "BYD Électrique & Hybride", value: "BYD" },
  { label: "Jetour SUV Luxury", value: "Jetour" },
  { label: "Changan Tech & Berlines", value: "Changan" },
  { label: "Chery Crossover", value: "Chery" },
  { label: "Luxe & Flagship (Zeekr, Hongqi, Mercedes)", value: "Premium" },
];

export default function DigitalCatalog() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCars = carsInventory.filter((car) => {
    const isPremium = car.brand === "Hongqi" || car.brand === "ZEEKR" || car.brand === "Mercedes-Benz" || car.brand === "Tank" || car.brand === "LINK&CO";
    const matchesCategory = activeFilter === "Tous" || 
                            car.brand === activeFilter || 
                            (activeFilter === "Premium" && isPremium);
    
    const matchesSearch = car.brand.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          car.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="marques" className="py-24 bg-[#0B0D14] text-white min-h-screen relative overflow-hidden border-t border-white/5">
      {/* Halo allégé pour la performance */}
      {/* Halo supprimé pour les perfs */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* EN-TÊTE DE SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-semibold tracking-widest text-[#E5C158] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] animate-pulse" />
            <span>Showroom Privé &amp; Sélection d&apos;Élite</span>
          </div>

          <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tighter leading-[1.1]">
            Nos Marques &amp; Modèles Vedettes
          </h2>

          <p className="mt-6 text-white/50 text-sm sm:text-base leading-relaxed font-light max-w-2xl mx-auto">
            Explorez notre sélection de véhicules prestigieux électriques, hybrides et thermiques d&apos;exception.
          </p>
        </div>

        {/* BARRE DE RECHERCHE ET FILTRES */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
          {/* Recherche */}
          <div className="relative w-full md:w-1/2 lg:w-1/3">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Rechercher un modèle, marque ou type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-4 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#E5C158] focus:ring-1 focus:ring-[#E5C158] transition-all"
            />
          </div>

          {/* Filtres Rapides (Marques) */}
          <div className="flex overflow-x-auto gap-2 scrollbar-hide w-full md:w-auto">
            {categories.map((cat) => {
              const isActive = activeFilter === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveFilter(cat.value)}
                  className={`px-5 py-2.5 rounded-full border text-[10px] sm:text-xs font-bold tracking-widest transition-colors duration-200 whitespace-nowrap cursor-pointer shrink-0 uppercase ${
                    isActive
                      ? "bg-[#E5C158] text-black border-[#E5C158] shadow-[0_0_15px_rgba(229,193,88,0.3)]"
                      : "bg-white/5 border-white/10 text-white/50 hover:text-white hover:border-white/30"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* GRILLE RESPONSIVE DES VÉHICULES (Optimisation des animations) */}
        <motion.div
          layout
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCars.map((car) => (
              <motion.div
                key={car.id}
                layout
                initial={{ opacity: 0, scale: 0.98, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 group hover:border-white/30 transition-all flex flex-col justify-between shadow-lg"
              >
                {/* Effet de lumière (Glow) coloré */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${getGlowColor(car.brand)}, transparent 70%)` }}
                />
                {/* IMAGE DU VÉHICULE (16:9) */}
                <div className="aspect-video relative overflow-hidden bg-black/80 block">
                  <Image
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    priority={car.id === "2" || car.id === "1"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D14] via-transparent to-transparent opacity-80 pointer-events-none" />
                  
                  {/* Badge de type */}
                  <span className="absolute top-3 left-3 text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-black/60 border border-[#E5C158]/30 text-[#E5C158] shadow-sm">
                    {car.engine}
                  </span>
                </div>

                {/* CONTENU TEXTE */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] uppercase tracking-widest font-extrabold text-[#E5C158] block">
                        {car.brand}
                      </span>
                    </div>
                    <h3 className="font-syne text-lg font-bold text-white group-hover:text-[#E5C158] transition-colors leading-snug">
                      {car.model}
                    </h3>
                    <p className="mt-3 text-[11px] text-white/70 py-2 px-3 rounded-lg bg-black/40 border border-white/10 font-medium leading-relaxed">
                      {car.power ? car.power : car.category} • {car.acceleration ? car.acceleration : car.year}
                    </p>
                  </div>

                  {/* BOUTON UNIQUE : DEMANDER UN DEVIS */}
                  <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">Découvrir le modèle</span>
                    <Link
                      href={`/catalogue/${car.id}`}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-[#E5C158] hover:border-[#E5C158] hover:text-black transition-colors shadow-sm text-xs uppercase tracking-widest font-bold"
                    >
                      Détails
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* BANDEAU RASSURANT EN BAS DE CATALOGUE */}
        <div className="mt-16 p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158] shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-syne text-xl font-bold text-white mb-1">
                Un modèle spécifique en tête ?
              </h4>
              <p className="text-xs text-white/60 font-light">
                Importation directe sous 4 à 6 semaines avec garantie.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 shrink-0">
            <a
              href="/downloads/carzone-catalog-2025.pdf"
              download="Catalogue-CARZONE-2025.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-[#E5C158] text-white hover:text-[#E5C158] font-bold text-[10px] uppercase tracking-widest transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Catalogue PDF</span>
            </a>
            <Link
              href="/catalogue"
              className="px-6 py-3 rounded-full bg-[#E5C158] text-black font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-colors"
            >
              Tout le Catalogue
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

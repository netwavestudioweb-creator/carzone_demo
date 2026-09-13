"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Filter,
  RotateCcw,
  Sparkles,
  ArrowUpRight,
  Check,
  Search,
  Fuel,
  SlidersHorizontal,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/Header";
import FooterContact from "@/components/FooterContact";
import { carsInventory } from "@/data/carsData";
import { Car } from "@/types";

export default function CataloguePage() {
  // États de filtrage multicritères
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("Tous");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedEngine, setSelectedEngine] = useState("Tous");

  // Options dynamiques
  const brands = [
    "Tous",
    "BYD",
    "Jetour",
    "Changan",
    "Hongqi",
    "Zeekr",
    "Volkswagen",
    "Chery",
    "Wuling",
  ];
  const categories = ["Tous", "SUV", "Berline", "Citadine", "Monospace", "Pick-up"];
  const engines = [
    { label: "Tous", value: "Tous" },
    { label: "100% Électrique", value: "100% Électrique" },
    { label: "Hybride", value: "Hybride" },
    { label: "Essence", value: "Essence" },
  ];

  // Filtrage en temps réel
  const filteredCars = useMemo(() => {
    return carsInventory.filter((car) => {
      // Filtre de recherche textuelle
      const matchesSearch =
        searchQuery === "" ||
        car.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.model.toLowerCase().includes(searchQuery.toLowerCase());

      // Filtre de marque
      const matchesBrand =
        selectedBrand === "Tous" ||
        selectedBrand === "Toutes" ||
        car.brand.toLowerCase() === selectedBrand.toLowerCase();

      // Filtre de carrosserie / catégorie
      const matchesCategory =
        selectedCategory === "Tous" ||
        car.category.toLowerCase() === selectedCategory.toLowerCase();

      // Filtre de motorisation
      let matchesEngine = true;
      if (selectedEngine === "100% Électrique") {
        matchesEngine = car.engine.includes("Électrique") && !car.engine.includes("Hybride");
      } else if (selectedEngine === "Hybride") {
        matchesEngine = car.engine.includes("Hybride");
      } else if (selectedEngine === "Essence") {
        matchesEngine = car.engine.includes("Essence") || car.engine.includes("Thermique");
      }

      return matchesSearch && matchesBrand && matchesCategory && matchesEngine;
    });
  }, [searchQuery, selectedBrand, selectedCategory, selectedEngine]);

  const hasActiveFilters =
    (selectedBrand !== "Tous" && selectedBrand !== "Toutes") ||
    selectedCategory !== "Tous" ||
    selectedEngine !== "Tous" ||
    searchQuery !== "";

  const handleResetFilters = () => {
    setSelectedBrand("Tous");
    setSelectedCategory("Tous");
    setSelectedEngine("Tous");
    setSearchQuery("");
  };

  return (
    <main className="relative min-h-screen bg-[#0D0D0D] text-[#A1A1AA] overflow-hidden">
      {/* 1. HEADER GLOBAL */}
      <Header />

      {/* 2. BANNIÈRE TITRE DU CATALOGUE */}
      <div className="relative pt-32 pb-14 border-b border-white/5 bg-gradient-to-b from-[#141414] to-[#0D0D0D]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-[#D4AF37]/5 blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Showroom Privé &amp; Inventaire 2025</span>
            </div>
            <h1 className="font-syne text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Catalogue des Véhicules
            </h1>
            <p className="mt-2 text-sm sm:text-base text-[#A1A1AA] max-w-xl">
              Explorez notre parc automobile exclusif à Cotonou : berlines d&apos;exception, SUV technologiques et sportives hybrides ou électriques.
            </p>
          </div>

          {/* Nombre de résultats en badge */}
          <div className="px-4 py-2 rounded-xl bg-[#161616] border border-white/10 text-xs font-medium text-white self-center sm:self-end shrink-0 shadow-sm">
            <span className="text-[#D4AF37] font-bold text-base mr-1">
              {filteredCars.length}
            </span>
            {filteredCars.length > 1 ? "véhicules disponibles" : "véhicule disponible"}
          </div>
        </div>
      </div>

      {/* 3. SECTION PRINCIPALE AVEC DISPOSITION 2 COLONNES (1/4 Sidebar - 3/4 Grille) */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ========================================================
              COLONNE GAUCHE : SIDEBAR DE FILTRES (3 cols / 12 = 1/4)
              ======================================================== */}
          <aside className="lg:col-span-3 sticky top-28 space-y-6">
            <div className="bg-[#161616] border border-white/5 rounded-2xl p-6 shadow-luxury-card backdrop-blur-md">
              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
                <div className="flex items-center gap-2 font-syne font-bold text-white text-base">
                  <SlidersHorizontal className="w-4 h-4 text-[#D4AF37]" />
                  <span>Filtres Multicritères</span>
                </div>
                {hasActiveFilters && (
                  <button
                    onClick={handleResetFilters}
                    className="text-xs text-[#D4AF37] hover:text-white flex items-center gap-1 transition-colors"
                    title="Réinitialiser tous les filtres"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Effacer</span>
                  </button>
                )}
              </div>

              {/* RECHERCHE LIBRE */}
              <div className="mb-6">
                <label className="block text-xs uppercase tracking-wider text-[#71717A] mb-2 font-semibold">
                  Recherche Rapide
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Modèle ou marque..."
                    className="w-full bg-[#0D0D0D] border border-white/10 rounded-xl px-3.5 py-2.5 pl-9 text-xs text-white placeholder:text-[#52525B] focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition"
                  />
                  <Search className="w-4 h-4 text-[#71717A] absolute left-3 top-3" />
                </div>
              </div>

              {/* FILTRE 1 : MARQUES */}
              <div className="mb-6">
                <label className="block text-xs uppercase tracking-wider text-[#71717A] mb-3 font-semibold">
                  Marques Disponibles
                </label>
                <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1 scrollbar-thin">
                  {brands.map((brand) => {
                    const isSelected = selectedBrand === brand;
                    return (
                      <button
                        key={brand}
                        onClick={() => setSelectedBrand(brand)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all text-left ${
                          isSelected
                            ? "bg-[#D4AF37] text-black font-bold shadow-sm"
                            : "text-[#A1A1AA] hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span>{brand}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-black stroke-[3]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* FILTRE 2 : MOTORISATIONS */}
              <div className="mb-6">
                <label className="block text-xs uppercase tracking-wider text-[#71717A] mb-3 font-semibold flex items-center gap-1.5">
                  <Fuel className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Motorisation</span>
                </label>
                <div className="space-y-1.5">
                  {engines.map((eng) => {
                    const isSelected = selectedEngine === eng.value;
                    return (
                      <button
                        key={eng.value}
                        onClick={() => setSelectedEngine(eng.value)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all text-left ${
                          isSelected
                            ? "bg-[#D4AF37] text-black font-bold shadow-sm"
                            : "text-[#A1A1AA] hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span>{eng.label}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-black stroke-[3]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* FILTRE 3 : CATÉGORIES / CARROSSERIE */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#71717A] mb-3 font-semibold">
                  Silhouette / Carrosserie
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {categories.map((cat) => {
                    const isSelected = selectedCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-2.5 py-2 rounded-lg text-xs font-medium transition-all text-center ${
                          isSelected
                            ? "bg-[#D4AF37] text-black font-bold shadow-sm"
                            : "bg-[#0D0D0D] border border-white/5 text-[#A1A1AA] hover:text-white hover:border-white/20"
                        }`}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* BANDEAU CONCIERGERIE DANS LA SIDEBAR */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#161616] to-[#0D0D0D] border border-[#D4AF37]/30 text-center relative overflow-hidden">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] block mb-1">
                Importation Express
              </span>
              <h4 className="font-syne text-sm font-bold text-white mb-2">
                Modèle sur-mesure ?
              </h4>
              <p className="text-xs text-[#A1A1AA] mb-4">
                Nous commandons votre configuration idéale directement d&apos;usine.
              </p>
              <Link
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white text-black font-bold text-xs hover:bg-[#D4AF37] transition-colors"
              >
                <span>Faire une demande</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </aside>

          {/* ========================================================
              COLONNE DROITE : GRILLE DES RÉSULTATS (9 cols / 12 = 3/4)
              ======================================================== */}
          <section className="lg:col-span-9">
            {/* EN-TÊTE GRILLE & ÉTAT ACTIF */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/5 mb-8 gap-4">
              <div className="text-xs text-[#A1A1AA]">
                Affichage de{" "}
                <strong className="text-white font-semibold">
                  {filteredCars.length}
                </strong>{" "}
                {filteredCars.length > 1 ? "modèles trouvés" : "modèle trouvé"}
              </div>

              {/* Rappel des filtres actifs */}
              {hasActiveFilters && (
                <div className="flex flex-wrap items-center gap-2">
                  {selectedBrand !== "Toutes" && (
                    <span className="px-2.5 py-1 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[11px] font-semibold text-[#D4AF37]">
                      {selectedBrand}
                    </span>
                  )}
                  {selectedCategory !== "Tous" && (
                    <span className="px-2.5 py-1 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[11px] font-semibold text-[#D4AF37]">
                      {selectedCategory}
                    </span>
                  )}
                  {selectedEngine !== "Tous" && (
                    <span className="px-2.5 py-1 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[11px] font-semibold text-[#D4AF37]">
                      {selectedEngine}
                    </span>
                  )}
                  <button
                    onClick={handleResetFilters}
                    className="text-[11px] text-[#71717A] hover:text-white underline ml-1"
                  >
                    Tout réinitialiser
                  </button>
                </div>
              )}
            </div>

            {/* SI AUCUN RÉSULTAT */}
            {filteredCars.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-20 text-center bg-[#161616] border border-white/5 rounded-2xl p-8 shadow-luxury-card flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#0D0D0D] border border-white/10 flex items-center justify-center text-[#D4AF37] mb-4">
                  <Filter className="w-7 h-7" />
                </div>
                <h3 className="font-syne text-xl font-bold text-white mb-2">
                  Aucun véhicule ne correspond à ces critères
                </h3>
                <p className="text-sm text-[#A1A1AA] max-w-md mb-6">
                  Modifiez ou réinitialisez vos filtres pour visualiser l&apos;ensemble de la collection CARZONE.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-2.5 rounded-full bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors"
                >
                  Réinitialiser les filtres
                </button>
              </motion.div>
            ) : (
              /* GRILLE RESPONSIVE DES VÉHICULES (1 col mobile, 3 cols desktop) */
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                <AnimatePresence>
                  {filteredCars.map((car: Car) => (
                    <motion.div
                      key={car.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="bg-[#161616] rounded-2xl overflow-hidden border border-white/5 group hover:border-[#D4AF37]/50 transition-all duration-300 shadow-luxury-card flex flex-col justify-between"
                    >
                      {/* IMAGE AU FORMAT 16:9 (ASPECT-VIDEO) AVEC EFFET ZOOM */}
                      <div className="aspect-video relative overflow-hidden bg-[#1A1A1A]">
                        <Image
                          src={car.image}
                          alt={`${car.brand} ${car.model}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-60 pointer-events-none" />

                        {/* BADGES MOTORISATION & CARROSSERIE */}
                        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                          <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#0D0D0D]/90 border border-[#D4AF37]/40 text-[#D4AF37] backdrop-blur-md shadow-sm">
                            {car.engine}
                          </span>
                          <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-1 rounded-full bg-[#161616]/80 border border-white/10 text-white backdrop-blur-md">
                            {car.category}
                          </span>
                        </div>
                      </div>

                      {/* CONTENU TEXTE CARTE */}
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[11px] uppercase tracking-widest font-bold text-[#D4AF37]">
                              {car.brand}
                            </span>
                            {car.price && (
                              <span className="text-xs font-mono font-bold text-white">
                                {car.price}
                              </span>
                            )}
                          </div>

                          <h3 className="font-syne text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                            {car.model}
                          </h3>

                          {/* CARACTÉRISTIQUES CLÉS */}
                          {car.features && car.features.length > 0 && (
                            <ul className="mt-3 space-y-1 pt-3 border-t border-white/5">
                              {car.features.slice(0, 2).map((feat, idx) => (
                                <li
                                  key={idx}
                                  className="text-[11px] text-[#A1A1AA] flex items-center gap-1.5"
                                >
                                  <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                                  <span className="truncate">{feat}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>

                        {/* BOUTON D'ACTION "DEMANDER UN DEVIS" */}
                        <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                          <Link
                            href="#contact"
                            className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#0D0D0D] border border-white/10 text-xs font-semibold text-white group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300 shadow-sm"
                          >
                            <span>Demander un devis</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </section>

        </div>
      </div>

      {/* 4. FOOTER AVEC FORMULAIRE DE CONTACT & COORDONNÉES */}
      <FooterContact />
    </main>
  );
}

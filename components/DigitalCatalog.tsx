"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, CheckCircle2, Download, Scale, Eye, Sparkles } from "lucide-react";
import { carsInventory, Car } from "@/data/carsData";
import CarDetailModal from "./CarDetailModal";
import CarComparisonModal from "./CarComparisonModal";

const getGlowColor = (brand: string) => {
  switch (brand) {
    case "BYD": return "rgba(59, 130, 246, 0.4)";
    case "Changan": return "rgba(239, 68, 68, 0.4)";
    case "Jetour": return "rgba(245, 158, 11, 0.4)";
    case "ZEEKR": return "rgba(139, 92, 246, 0.4)";
    default: return "rgba(229, 193, 88, 0.3)";
  }
};

const brandFilters = [
  { label: "Tous (Showroom Cotonou)", value: "Tous" },
  { label: "BYD Électrique", value: "BYD" },
  { label: "Jetour 4x4", value: "Jetour" },
  { label: "Changan Tech", value: "Changan" },
  { label: "Chery Flagship", value: "Chery" },
  { label: "Prestige (Zeekr, Hongqi, Benz)", value: "Premium" },
];

export default function DigitalCatalog() {
  const [activeBrand, setActiveBrand] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  
  // Système de comparaison
  const [comparedCars, setComparedCars] = useState<Car[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  const toggleCompareCar = (car: Car) => {
    if (comparedCars.some((c) => c.id === car.id)) {
      setComparedCars(comparedCars.filter((c) => c.id !== car.id));
    } else {
      if (comparedCars.length >= 3) {
        alert("Vous pouvez comparer jusqu'à 3 véhicules simultanément.");
        return;
      }
      setComparedCars([...comparedCars, car]);
    }
  };

  const filteredCars = carsInventory.filter((car) => {
    const isPremium = car.brand === "Hongqi" || car.brand === "ZEEKR" || car.brand === "Mercedes-Benz" || car.brand === "Tank" || car.brand === "LINK&CO";
    const matchesCategory = activeBrand === "Tous" || 
                            car.brand === activeBrand || 
                            (activeBrand === "Premium" && isPremium);
    
    const matchesSearch = car.brand.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          car.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="marques" className="py-24 bg-[#0A0C13] text-white min-h-screen relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* EN-TÊTE DE SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest text-[#E5C158] uppercase mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C158]" />
            <span>Collection Exclusive Cotonou</span>
          </div>

          <h2 className="font-syne text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Le Catalogue Automobiles VIP
          </h2>

          <p className="mt-4 text-white/60 text-sm sm:text-base leading-relaxed font-light max-w-2xl mx-auto">
            Découvrez nos modèles d&apos;exception. Cliquez sur un véhicule pour explorer la fiche technique détaillée ou sélectionnez-en plusieurs pour les comparer.
          </p>
        </div>

        {/* BARRE DE RECHERCHE ET FILTRES */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
          {/* Recherche */}
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Rechercher un modèle, marque, type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-4 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#E5C158] focus:ring-1 focus:ring-[#E5C158] transition-all"
            />
          </div>

          {/* Filtres par Marque */}
          <div className="flex overflow-x-auto gap-2 scrollbar-none w-full md:w-auto pb-2 md:pb-0">
            {brandFilters.map((cat) => {
              const isActive = activeBrand === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveBrand(cat.value)}
                  className={`px-5 py-2.5 rounded-full border text-xs font-bold tracking-wider transition-all duration-200 whitespace-nowrap uppercase ${
                    isActive
                      ? "bg-[#E5C158] text-black border-[#E5C158] shadow-[0_0_15px_rgba(229,193,88,0.3)]"
                      : "bg-white/5 border-white/10 text-white/60 hover:text-white hover:border-white/30"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* GRILLE DES VÉHICULES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCars.map((car) => {
              const isCompared = comparedCars.some((c) => c.id === car.id);
              return (
                <motion.div
                  key={car.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 group hover:border-[#E5C158]/40 transition-all flex flex-col justify-between shadow-xl"
                >
                  {/* Effet Glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${getGlowColor(car.brand)}, transparent 70%)` }}
                  />

                  {/* IMAGE DU VÉHICULE */}
                  <div
                    onClick={() => setSelectedCar(car)}
                    className="aspect-[16/10] relative overflow-hidden bg-black cursor-pointer group/img"
                  >
                    <Image
                      src={car.image}
                      alt={`${car.brand} ${car.model}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover/img:scale-105 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C13] via-transparent to-transparent opacity-80" />
                    
                    {/* STATUT */}
                    <span className="absolute top-4 left-4 text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-black/60 border border-white/20 text-[#E5C158] shadow-md backdrop-blur-md">
                      {car.status}
                    </span>

                    {/* ACTION RECOUVRANTE VUE RAPIDE */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                      <span className="px-5 py-2.5 rounded-full bg-[#E5C158] text-black font-extrabold text-xs uppercase tracking-widest flex items-center gap-2 shadow-lg">
                        <Eye className="w-4 h-4" />
                        <span>Fiche Technique</span>
                      </span>
                    </div>
                  </div>

                  {/* CONTENU TEXTE ET ACTION */}
                  <div className="p-6 flex-1 flex flex-col justify-between relative z-10">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs uppercase font-extrabold tracking-widest text-[#E5C158]">
                          {car.brand}
                        </span>
                        <span className="text-xs text-white/40 font-mono">{car.year}</span>
                      </div>

                      <h3
                        onClick={() => setSelectedCar(car)}
                        className="font-syne text-xl font-bold text-white group-hover:text-[#E5C158] transition-colors cursor-pointer"
                      >
                        {car.model}
                      </h3>

                      <p className="mt-3 text-xs text-white/70 py-2 px-3 rounded-xl bg-black/40 border border-white/10 font-medium">
                        {car.power ? car.power : car.category} • {car.engine}
                      </p>
                    </div>

                    {/* BOUTONS D'ACTION EN BAS DE CARTE */}
                    <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between gap-2">
                      <button
                        onClick={() => toggleCompareCar(car)}
                        className={`py-2 px-3 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                          isCompared
                            ? "bg-[#E5C158] text-black border border-[#E5C158]"
                            : "bg-white/5 text-white/60 hover:text-white border border-white/10"
                        }`}
                      >
                        <Scale className="w-3.5 h-3.5" />
                        <span>{isCompared ? "Sélectionné" : "Comparer"}</span>
                      </button>

                      <button
                        onClick={() => setSelectedCar(car)}
                        className="py-2 px-4 rounded-full bg-white/10 border border-white/20 text-white hover:bg-[#E5C158] hover:text-black hover:border-[#E5C158] transition-all text-xs uppercase font-bold tracking-wider"
                      >
                        Détails
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* BARRE FLOTTANTE DE COMPARAISON */}
        {comparedCars.length > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-[#0D0F17] border border-[#E5C158]/50 shadow-[0_10px_40px_rgba(0,0,0,0.8)] rounded-full py-3 px-6 flex items-center gap-6 backdrop-blur-xl"
          >
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#E5C158]" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                {comparedCars.length} Véhicule{comparedCars.length > 1 ? "s" : ""} dans le comparateur
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsCompareModalOpen(true)}
                className="py-2 px-5 rounded-full bg-[#E5C158] text-black font-extrabold uppercase text-xs tracking-widest hover:bg-white transition-all shadow-md"
              >
                Comparer Maintenant
              </button>
              <button
                onClick={() => setComparedCars([])}
                className="text-xs text-white/50 hover:text-white underline ml-2"
              >
                Annuler
              </button>
            </div>
          </motion.div>
        )}

        {/* MODAL FICHE VÉHICULE */}
        {selectedCar && (
          <CarDetailModal
            car={selectedCar}
            onClose={() => setSelectedCar(null)}
            onCompare={(car) => toggleCompareCar(car)}
          />
        )}

        {/* MODAL COMPARATEUR */}
        {isCompareModalOpen && (
          <CarComparisonModal
            cars={comparedCars}
            onClose={() => setIsCompareModalOpen(false)}
            onRemove={(id) => setComparedCars(comparedCars.filter((c) => c.id !== id))}
            onClear={() => {
              setComparedCars([]);
              setIsCompareModalOpen(false);
            }}
          />
        )}

        {/* BANDEAU TELECHARGEMENT PDF */}
        <div className="mt-20 p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158] shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-syne text-xl font-bold text-white mb-1">
                Besoin d&apos;une configuration spécifique ?
              </h4>
              <p className="text-xs text-white/60 font-light">
                Nous importons le modèle exact de votre choix sous 4 à 6 semaines avec suivi direct WhatsApp.
              </p>
            </div>
          </div>
          
          <a
            href="/downloads/carzone-catalog-2025.pdf"
            download="Catalogue-CARZONE-2025.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 hover:border-[#E5C158] text-white hover:text-[#E5C158] font-bold text-xs uppercase tracking-widest transition-all shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Télécharger le Catalogue PDF</span>
          </a>
        </div>

      </div>
    </section>
  );
}

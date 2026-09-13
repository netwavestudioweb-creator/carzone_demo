"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUpRight, CheckCircle2 } from "lucide-react";

export interface CarModel {
  id: number;
  brand: string;
  model: string;
  type: string;
  category: "BYD" | "Jetour" | "Changan" | "Premium";
  image: string;
  specs?: string;
}

const carsDataset: CarModel[] = [
  {
    id: 1,
    brand: "BYD",
    model: "Seal",
    type: "100% Électrique",
    category: "BYD",
    image: "/images/cars/byd-seal.jpg",
    specs: "530 ch • 570 km autonomie • 0-100 en 3.8s",
  },
  {
    id: 2,
    brand: "BYD",
    model: "Tang EV",
    type: "SUV Électrique",
    category: "BYD",
    image: "/images/cars/byd-tang.jpg",
    specs: "7 Places • 517 ch • AWD Électrique",
  },
  {
    id: 3,
    brand: "Jetour",
    model: "DASHING",
    type: "SUV Premium",
    category: "Jetour",
    image: "/images/cars/jetour-dashing.jpg",
    specs: "Design Futuriste • Boîte DCT • Confort VIP",
  },
  {
    id: 4,
    brand: "Jetour",
    model: "Traveller",
    type: "4x4 Off-Road",
    category: "Jetour",
    image: "/images/cars/jetour-traveller.jpg",
    specs: "AWD Tout-Terrain • Mode X • Puissance Robuste",
  },
  {
    id: 5,
    brand: "Changan",
    model: "UNI-K iDD",
    type: "SUV Hybride",
    category: "Changan",
    image: "/images/cars/changan-unik.jpg",
    specs: "PHEV • 1100 km autonomie • Luxe Lounge",
  },
  {
    id: 6,
    brand: "Hongqi",
    model: "E-HS9",
    type: "Luxe Électrique",
    category: "Premium",
    image: "/images/cars/hongqi-ehs9.jpg",
    specs: "Limousine SUV Flagship • Finitions Royales",
  },
  {
    id: 7,
    brand: "ZEEKR",
    model: "001",
    type: "Shooting Brake",
    category: "Premium",
    image: "/images/cars/zeekr-001.jpg",
    specs: "544 ch • Pack Luxe Extrême • 620 km",
  },
  {
    id: 8,
    brand: "Mercedes-Benz",
    model: "EQE SUV",
    type: "Luxe Électrique",
    category: "Premium",
    image: "/images/cars/benz-eqe.jpg",
    specs: "Hyperscreen • Prestige Allemand • 408 ch",
  },
];

const categories = [
  { label: "Tous", value: "Tous" },
  { label: "BYD", value: "BYD" },
  { label: "Jetour", value: "Jetour" },
  { label: "Changan", value: "Changan" },
  { label: "Premium (Hongqi, Zeekr, Benz)", value: "Premium" },
];

export default function DigitalCatalog() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filteredCars = carsDataset.filter((car) => {
    if (activeFilter === "Tous") return true;
    return car.category === activeFilter;
  });

  return (
    <section id="marques" className="py-24 bg-[#0D0D0D] text-white min-h-screen relative overflow-hidden border-t border-white/5">
      {/* Halo d'ambiance sombre */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D4AF37]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* EN-TÊTE DE SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Catalogue Officiel CARZONE 2025</span>
          </div>

          <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Showroom Digital &amp; Modèles d&apos;Exception
          </h2>

          <p className="mt-4 text-[#A1A1AA] text-sm sm:text-base leading-relaxed font-sans max-w-2xl mx-auto">
            Découvrez notre sélection interactive des meilleurs véhicules électriques, hybrides et premium. Filtrez par marque pour trouver le véhicule adapté à vos exigences.
          </p>
        </div>

        {/* SYSTÈME DE FILTRAGE PAR MARQUE */}
        <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide mb-12 justify-start sm:justify-center">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`px-6 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer shrink-0 ${
                  isActive
                    ? "bg-[#D4AF37] text-black border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.4)] font-bold"
                    : "bg-[#161616] border-white/10 text-white/80 hover:text-white hover:border-white/30"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* GRILLE RESPONSIVE DES VÉHICULES AVEC ANIMATION LAYOUT */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence>
            {filteredCars.map((car) => (
              <motion.div
                key={car.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="bg-[#161616] rounded-2xl overflow-hidden border border-white/5 group hover:border-[#D4AF37]/50 transition-colors flex flex-col justify-between shadow-luxury-card"
              >
                {/* IMAGE DU VÉHICULE (16:9) */}
                <div className="aspect-video relative overflow-hidden bg-[#1A1A1A]">
                  <Image
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-60 pointer-events-none" />
                  
                  {/* Badge de type */}
                  <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#0D0D0D]/85 border border-[#D4AF37]/30 text-[#D4AF37] backdrop-blur-md shadow-sm">
                    {car.type}
                  </span>
                </div>

                {/* CONTENU TEXTE */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-widest font-bold text-[#D4AF37] block mb-1">
                      {car.brand}
                    </span>
                    <h3 className="font-syne text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                      {car.model}
                    </h3>
                    {car.specs && (
                      <p className="mt-2 text-xs text-[#71717A] py-1.5 px-2.5 rounded-lg bg-[#0D0D0D] border border-white/5 line-clamp-1">
                        {car.specs}
                      </p>
                    )}
                  </div>

                  {/* BOUTON "DEMANDER UN DEVIS" */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0D0D0D] border border-white/10 text-xs font-semibold text-white group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-all"
                    >
                      <span>Demander un devis</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-[10px] font-mono text-[#52525B]">2025</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* BANDEAU RASSURANT EN BAS DE CATALOGUE */}
        <div className="mt-16 p-6 rounded-xl bg-[#161616] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-syne text-sm font-bold text-white">
                Un modèle spécifique en tête ?
              </h4>
              <p className="text-xs text-[#A1A1AA]">
                Importation directe sous 4 à 6 semaines avec garantie et formalités douanières complètes.
              </p>
            </div>
          </div>
          <Link
            href="#contact"
            className="px-5 py-2 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-semibold text-xs transition-colors shrink-0 uppercase tracking-wider"
          >
            Commande Spéciale
          </Link>
        </div>
      </div>
    </section>
  );
}

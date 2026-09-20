"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Zap, Gauge, Users, Calendar, ShieldCheck, Sparkles, PhoneCall } from "lucide-react";
import { Car } from "@/data/carsData";

interface CarDetailModalProps {
  car: Car | null;
  onClose: () => void;
  onCompare?: (car: Car) => void;
}

export default function CarDetailModal({ car, onClose, onCompare }: CarDetailModalProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!car) return null;

  const currentImage = selectedImage || car.image;
  const gallery = car.gallery && car.gallery.length > 0 ? car.gallery : [car.image];

  const whatsappMessage = encodeURIComponent(
    `Bonjour CarZone Showroom Cotonou, je suis très intéressé(e) par le véhicule ${car.brand} ${car.model} (${car.year}). Je souhaite recevoir une offre personnalisée et planifier une présentation VIP.`
  );
  const whatsappUrl = `https://wa.me/2290192626262?text=${whatsappMessage}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-4xl bg-[#0D0F17] border border-white/10 rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.8)] my-8 text-[#E4E4E7]"
        >
          {/* BOUTON FERMER */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-[#E5C158] hover:text-black transition-all shadow-lg"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* GALERIE D'IMAGES - GAUCHE */}
            <div className="lg:col-span-6 bg-black/60 p-6 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                <Image
                  src={currentImage}
                  alt={`${car.brand} ${car.model}`}
                  fill
                  className="object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#E5C158] text-black shadow-md">
                  {car.status}
                </span>

                <span className="absolute bottom-4 left-4 text-xs font-semibold text-white/80 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                  {car.brand} • {car.category}
                </span>
              </div>

              {/* THUMBNAILS DE GALERIE */}
              {gallery.length > 1 && (
                <div className="flex gap-3 mt-4 overflow-x-auto pb-2 scrollbar-none">
                  {gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className={`relative w-20 h-14 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all ${
                        currentImage === img
                          ? "border-[#E5C158] scale-105 shadow-[0_0_15px_rgba(229,193,88,0.5)]"
                          : "border-white/10 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image src={img} alt="Vue secondaire" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* INFORMATIONS & DÉTAILS - DROITE */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase font-bold tracking-widest text-[#E5C158]">
                    {car.brand} Flagship Collection
                  </span>
                  <span className="text-xs text-white/40 font-mono">{car.year}</span>
                </div>

                <h2 className="font-syne text-3xl font-extrabold text-white tracking-tight">
                  {car.model}
                </h2>

                <p className="mt-3 text-sm text-white/60 leading-relaxed font-light">
                  {car.description}
                </p>

                {/* GRILLE DE SPÉCIFICATIONS RAPIDES */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {car.power && (
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                      <Zap className="w-4 h-4 text-[#E5C158]" />
                      <div>
                        <span className="text-[10px] text-white/40 block font-semibold uppercase">Puissance</span>
                        <span className="text-xs font-bold text-white">{car.power}</span>
                      </div>
                    </div>
                  )}

                  {car.acceleration && (
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                      <Gauge className="w-4 h-4 text-[#E5C158]" />
                      <div>
                        <span className="text-[10px] text-white/40 block font-semibold uppercase">Accélération</span>
                        <span className="text-xs font-bold text-white">{car.acceleration}</span>
                      </div>
                    </div>
                  )}

                  {car.seats && (
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                      <Users className="w-4 h-4 text-[#E5C158]" />
                      <div>
                        <span className="text-[10px] text-white/40 block font-semibold uppercase">Capacité</span>
                        <span className="text-xs font-bold text-white">{car.seats} Places VIP</span>
                      </div>
                    </div>
                  )}

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4 text-[#E5C158]" />
                    <div>
                      <span className="text-[10px] text-white/40 block font-semibold uppercase">Garantie</span>
                      <span className="text-xs font-bold text-white">5 Ans Local</span>
                    </div>
                  </div>
                </div>

                {/* ÉQUIPEMENTS DE SÉDUCTION */}
                {car.features && car.features.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white/80 mb-3 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#E5C158]" />
                      <span>Équipements & Atouts VIP</span>
                    </h4>
                    <ul className="space-y-2">
                      {car.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-white/70">
                          <CheckCircle2 className="w-4 h-4 text-[#E5C158] flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* ACTIONS EN BAS */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-4 px-6 rounded-full bg-[#25D366] text-black font-extrabold uppercase text-xs tracking-widest hover:bg-[#20ba59] transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(37,211,102,0.3)]"
                >
                  <PhoneCall className="w-4 h-4 fill-black" />
                  <span>Demander une Offre VIP</span>
                </a>

                {onCompare && (
                  <button
                    onClick={() => {
                      onCompare(car);
                      onClose();
                    }}
                    className="w-full sm:w-auto py-4 px-6 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 font-bold uppercase text-xs tracking-widest transition-all"
                  >
                    Comparer
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, ArrowRight } from "lucide-react";
import { Car } from "@/data/carsData";

interface CarComparisonModalProps {
  cars: Car[];
  onClose: () => void;
  onRemove: (carId: string) => void;
  onClear: () => void;
}

export default function CarComparisonModal({ cars, onClose, onRemove, onClear }: CarComparisonModalProps) {
  if (cars.length === 0) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl bg-[#0B0E14] border border-white/10 rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.9)] p-6 sm:p-8 text-[#E4E4E7]"
        >
          {/* HEADER DU COMPARATEUR */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#E5C158] block mb-1">
                Analyse & Match Automobile
              </span>
              <h2 className="font-syne text-2xl sm:text-3xl font-extrabold text-white">
                Comparateur de Véhicules ({cars.length}/3)
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onClear}
                className="text-xs text-white/50 hover:text-red-400 flex items-center gap-1.5 transition-colors px-3 py-1.5 rounded-lg border border-white/10 bg-white/5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Tout Effacer</span>
              </button>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#E5C158] hover:text-black transition-colors flex items-center justify-center text-white"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* TABLEAU DE COMPARAISON */}
          <div className="mt-8 overflow-x-auto">
            <div className="min-w-[600px] grid grid-cols-12 gap-4">
              
              {/* COLONNE DES CRITÈRES */}
              <div className="col-span-3 space-y-6 pt-36 text-xs font-semibold uppercase tracking-wider text-white/40">
                <div className="h-10 flex items-center border-b border-white/5">Motorisation</div>
                <div className="h-10 flex items-center border-b border-white/5">Puissance Moteur</div>
                <div className="h-10 flex items-center border-b border-white/5">Accélération (0-100)</div>
                <div className="h-10 flex items-center border-b border-white/5">Transmission</div>
                <div className="h-10 flex items-center border-b border-white/5">Capacité</div>
                <div className="h-10 flex items-center border-b border-white/5">Statut Disponibilité</div>
              </div>

              {/* COLONNES DES VÉHICULES */}
              {cars.map((car) => {
                const whatsappMsg = encodeURIComponent(
                  `Bonjour CarZone Cotonou, je compare les véhicules et souhaite des infos détaillées sur le modèle ${car.brand} ${car.model}.`
                );
                return (
                  <div key={car.id} className="col-span-3 space-y-6 bg-white/5 rounded-2xl p-4 border border-white/10 relative">
                    <button
                      onClick={() => onRemove(car.id)}
                      className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-black/60 text-white/70 hover:text-red-400 hover:bg-black flex items-center justify-center transition-colors"
                      title="Retirer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>

                    <div className="relative h-28 rounded-xl overflow-hidden bg-black border border-white/10 mb-4">
                      <Image src={car.image} alt={car.model} fill className="object-cover" />
                    </div>

                    <div>
                      <span className="text-[10px] font-bold text-[#E5C158] uppercase block">{car.brand}</span>
                      <h4 className="font-syne text-base font-bold text-white truncate">{car.model}</h4>
                    </div>

                    {/* LIGNES DES VALEURS */}
                    <div className="space-y-6 pt-2 text-xs font-medium text-white">
                      <div className="h-10 flex items-center border-b border-white/5 text-[#E5C158] font-bold">
                        {car.engine}
                      </div>
                      <div className="h-10 flex items-center border-b border-white/5">
                        {car.power || "N/A"}
                      </div>
                      <div className="h-10 flex items-center border-b border-white/5">
                        {car.acceleration || "N/A"}
                      </div>
                      <div className="h-10 flex items-center border-b border-white/5 truncate">
                        {car.transmission || "N/A"}
                      </div>
                      <div className="h-10 flex items-center border-b border-white/5">
                        {car.seats ? `${car.seats} Places` : "N/A"}
                      </div>
                      <div className="h-10 flex items-center border-b border-white/5">
                        <span className="px-2.5 py-1 rounded-full text-[10px] bg-white/10 text-[#E5C158] border border-white/10 font-bold">
                          {car.status}
                        </span>
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/2290192626262?text=${whatsappMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl bg-[#E5C158] text-black font-extrabold uppercase text-[10px] tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2 mt-4"
                    >
                      <span>Obtenir Offre</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

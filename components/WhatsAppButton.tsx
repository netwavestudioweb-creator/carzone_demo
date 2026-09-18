"use client";

import { useState } from "react";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "2290192626262"; // +229 01 92 62 62 62 (St Michel Cotonou)
  const defaultMessage = "Bonjour CARZONE, je souhaite des informations sur vos véhicules disponibles au Showroom.";

  const handleOpenWhatsApp = (customMsg?: string) => {
    const text = encodeURIComponent(customMsg || defaultMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Pop-up de conversation rapide */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-[#161616] border border-[#D4AF37]/30 shadow-[0_15px_40px_rgba(0,0,0,0.8)] overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header de la bulle */}
          <div className="bg-gradient-to-r from-[#1E1E1E] to-[#141414] border-b border-white/10 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
                  <MessageSquare className="w-5 h-5 fill-[#25D366]" />
                </div>
                {/* Pastille verte en ligne */}
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#25D366] ring-2 ring-[#161616]" />
              </div>
              <div>
                <h4 className="font-syne text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Conseiller CARZONE</span>
                  <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                </h4>
                <p className="text-[11px] text-[#25D366] font-medium">
                  En ligne • Showroom Cotonou
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Fermer la fenêtre de chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Corps de la bulle */}
          <div className="p-4 bg-[#0D0D0D]/90 space-y-3 text-xs">
            <div className="bg-[#1A1A1A] border border-white/5 p-3 rounded-xl text-white/90 leading-relaxed">
              Bienvenue chez <span className="font-bold text-[#D4AF37]">CARZONE</span> ! 👋
              <br />
              Un modèle en particulier vous intéresse ou vous souhaitez réserver un essai ? Écrivez-nous directement sur WhatsApp.
            </div>

            {/* Questions rapides */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#71717A] block">
                Suggestions rapides :
              </span>
              <button
                onClick={() =>
                  handleOpenWhatsApp(
                    "Bonjour, quels sont les véhicules disponibles immédiatement au showroom de Cotonou ?"
                  )
                }
                className="w-full text-left p-2 rounded-lg bg-[#161616] hover:bg-[#D4AF37]/10 border border-white/5 hover:border-[#D4AF37]/30 text-white/80 hover:text-[#D4AF37] transition-all"
              >
                🚗 Véhicules disponibles en stock
              </button>
              <button
                onClick={() =>
                  handleOpenWhatsApp(
                    "Bonjour, j'aimerais planifier un essai routier d'un véhicule électrique/hybride."
                  )
                }
                className="w-full text-left p-2 rounded-lg bg-[#161616] hover:bg-[#D4AF37]/10 border border-white/5 hover:border-[#D4AF37]/30 text-white/80 hover:text-[#D4AF37] transition-all"
              >
                ⚡ Réserver un essai routier
              </button>
              <button
                onClick={() =>
                  handleOpenWhatsApp(
                    "Bonjour, comment se déroule l'importation sur commande sous 4 à 6 semaines ?"
                  )
                }
                className="w-full text-left p-2 rounded-lg bg-[#161616] hover:bg-[#D4AF37]/10 border border-white/5 hover:border-[#D4AF37]/30 text-white/80 hover:text-[#D4AF37] transition-all"
              >
                🚢 Importation sur-mesure d'usine
              </button>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="p-3 bg-[#161616] border-t border-white/10">
            <button
              onClick={() => handleOpenWhatsApp()}
              className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <span>Ouvrir WhatsApp</span>
              <Send className="w-3.5 h-3.5 fill-black" />
            </button>
          </div>
        </div>
      )}

      {/* Bouton Rond Flottant */}
      <div className="relative group">
        {/* Pulsation lumineuse discrète */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 blur-sm animate-pulse pointer-events-none" />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-[#161616] border border-[#25D366]/50 hover:border-[#25D366] text-white shadow-[0_8px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(37,211,102,0.4)] transition-all duration-300"
          aria-label="Contacter CARZONE sur WhatsApp"
        >
          <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-black shadow-sm">
            <MessageSquare className="w-4 h-4 fill-black text-black" />
          </div>
          <div className="text-left hidden sm:block">
            <span className="block text-[10px] text-[#25D366] uppercase font-bold tracking-wider leading-none">
              Assistance VIP
            </span>
            <span className="font-syne text-xs font-bold text-white">
              WhatsApp Direct
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}

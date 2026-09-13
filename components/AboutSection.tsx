"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Sparkles, Shield, Compass, Award } from "lucide-react";

export default function AboutSection() {
  const values = [
    { name: "Intégrité", desc: "Transparence totale sur l'origine, l'historique et la tarification de nos véhicules." },
    { name: "Innovation", desc: "Pionnier des technologies hybrides, électriques et des designs d'avant-garde au Bénin." },
    { name: "Satisfaction Client", desc: "Une relation de confiance durable avec un suivi personnalisé à chaque kilomètre." },
    { name: "Qualité Premium", desc: "Des standards d'audit stricts et des finitions d'exception conformes aux exigences VIP." },
  ];

  return (
    <section id="about" className="py-24 bg-[#0A0A0A] text-white relative border-t border-white/5 overflow-hidden">
      {/* Halo d'ambiance sombre */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[350px] bg-[#D4AF37]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* COLONNE GAUCHE : CONTENU INSTITUTIONNEL (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Badge Supérieur */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-4 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Qui Sommes-Nous</span>
              </div>
              <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                L&apos;Excellence Automobile Redéfinie à Cotonou
              </h2>
            </div>

            {/* BLOC 1 : Ce qui nous différencie */}
            <div className="bg-[#161616] border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-[#D4AF37]/30 transition-colors shadow-luxury-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#0D0D0D] border border-white/10 flex items-center justify-center text-[#D4AF37]">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-syne text-xl font-bold text-white">
                  Ce qui nous différencie
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                Chez CarZone, nous croyons en l&apos;excellence, la transparence et le service client irréprochable. Notre sélection rigoureuse de marques d&apos;élite chinoises et internationales garantit à nos clients des véhicules d&apos;une fiabilité remarquable, alliant modernité, puissance et technologies de pointe.
              </p>
            </div>

            {/* BLOC 2 : Notre Vision */}
            <div className="bg-[#161616] border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-[#D4AF37]/30 transition-colors shadow-luxury-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#0D0D0D] border border-white/10 flex items-center justify-center text-[#D4AF37]">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-syne text-xl font-bold text-white">
                  Notre Vision
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                Devenir le leader incontesté de la distribution automobile au Bénin en offrant des véhicules innovants, un accompagnement sur-mesure et une expérience client d&apos;exception qui redéfinit les standards du marché.
              </p>
            </div>

            {/* BLOC 3 : Nos Valeurs */}
            <div className="pt-2">
              <h3 className="font-syne text-xl font-bold text-white mb-5 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#D4AF37]" />
                <span>Nos Valeurs Fondamentales</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-start gap-3 p-4 rounded-xl bg-[#161616]/70 border border-white/5 hover:border-white/15 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-syne text-sm font-bold text-white">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#71717A] mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* COLONNE DROITE : BLOC GRAPHIQUE / VISUEL SHOWROOM (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Cadre image de prestige */}
            <div className="relative rounded-2xl overflow-hidden bg-[#161616] border border-white/10 shadow-2xl p-2 group">
              <div className="relative h-[480px] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=85"
                  alt="Showroom Automobile Privé CARZONE"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-80" />

                {/* Badge d'accréditation flottant */}
                <div className="absolute top-4 right-4 bg-[#0D0D0D]/90 border border-[#D4AF37]/40 px-3.5 py-2 rounded-xl backdrop-blur-md shadow-lg">
                  <div className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">
                    Certifié Concession
                  </div>
                  <div className="text-xs font-semibold text-white">
                    Showroom St Michel
                  </div>
                </div>

                {/* Encart infos clé au bas de l'image */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#161616]/95 border border-white/10 p-4 rounded-xl backdrop-blur-md shadow-luxury-card">
                  <div className="grid grid-cols-2 gap-4 text-center divide-x divide-white/10">
                    <div>
                      <span className="block font-syne text-xl font-black text-[#D4AF37]">
                        100%
                      </span>
                      <span className="text-[11px] text-[#A1A1AA] uppercase tracking-wider">
                        Transparence
                      </span>
                    </div>
                    <div>
                      <span className="block font-syne text-xl font-black text-white">
                        +150
                      </span>
                      <span className="text-[11px] text-[#A1A1AA] uppercase tracking-wider">
                        Points de Contrôle
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Élément décoratif or en arrière-plan */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

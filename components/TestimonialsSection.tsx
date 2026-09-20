"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2, ShieldCheck, MapPin, Award, ThumbsUp } from "lucide-react";
import { testimonialsData } from "@/data/testimonialsData";

export default function TestimonialsSection() {
  return (
    <section id="temoignages" className="py-28 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* EFFET DE FOND LUMINEUX DORÉ */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E5C158]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* TITRE DE SECTION */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 relative z-10">
        <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2 rounded-full text-xs font-semibold tracking-[0.2em] text-[#E5C158] uppercase mb-6 shadow-sm backdrop-blur-md">
          <Award className="w-4 h-4 text-[#E5C158]" />
          <span>La Confiance au Bénin</span>
        </div>

        <h2 className="font-syne text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Témoignages & Livraisons VIP <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C158] via-[#FFF0B3] to-[#E5C158]">
            À Cotonou.
          </span>
        </h2>

        <p className="mt-6 text-base text-white/60 leading-relaxed font-light">
          Découvrez la satisfaction de nos acheteurs, professionnels et passionnés d&apos;automobile qui nous ont fait confiance pour leur véhicule d&apos;exception.
        </p>
      </div>

      {/* STATISTIQUES DE CONFIANCE EN BANDEAU */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 relative z-10">
        {[
          { number: "+150", label: "Véhicules Livrés au Bénin", icon: ThumbsUp },
          { number: "100%", label: "Formalités & Douanes Gérées", icon: ShieldCheck },
          { number: "5 Ans", label: "Garantie Local Showroom", icon: CheckCircle2 },
          { number: "24/7", label: "Conciergerie & Assistance VIP", icon: MapPin },
        ].map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-center flex flex-col items-center justify-center hover:border-[#E5C158]/30 transition-all group"
            >
              <Icon className="w-6 h-6 text-[#E5C158] mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-syne text-3xl font-extrabold text-white group-hover:text-[#E5C158] transition-colors">
                {stat.number}
              </span>
              <span className="text-xs text-white/50 mt-1 font-medium">{stat.label}</span>
            </motion.div>
          );
        })}
      </div>

      {/* GRILLE DES TÉMOIGNAGES CLIENTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {testimonialsData.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl hover:border-[#E5C158]/40 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(229,193,88,0.1)] flex flex-col justify-between"
          >
            <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-[#E5C158]/20 transition-colors pointer-events-none" />

            <div>
              {/* ÉTOILES & VÉHICULE ACHETÉ */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E5C158] text-[#E5C158]" />
                  ))}
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-[#E5C158]/10 text-[#E5C158] border border-[#E5C158]/20">
                  {item.carBought}
                </span>
              </div>

              {/* CITATION */}
              <p className="text-sm text-white/80 leading-relaxed font-light italic mb-8">
                &ldquo;{item.comment}&rdquo;
              </p>
            </div>

            {/* INFOS DU CLIENT */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#E5C158]/40 shadow-md">
                <Image src={item.avatar} alt={item.name} fill className="object-cover" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-syne text-base font-bold text-white group-hover:text-[#E5C158] transition-colors">
                    {item.name}
                  </h4>
                  {item.verifiedBadge && (
                    <span title="Acheteur Certifié Cotonou">
                      <CheckCircle2 className="w-4 h-4 text-[#E5C158]" />
                    </span>
                  )}
                </div>
                <p className="text-xs text-white/50 font-light">
                  {item.role} • <span className="text-[#E5C158]/80 font-medium">{item.location}</span>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

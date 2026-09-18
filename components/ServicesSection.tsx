"use client";

import { motion } from "framer-motion";
import { Car, Wrench, Settings, PenTool, Key, Sparkles, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: typeof Car;
  tag: string;
}

const servicesList: ServiceItem[] = [
  {
    id: "vente",
    title: "Vente de véhicules",
    description:
      "Découvrez notre vaste sélection de véhicules neufs des plus prestigieuses marques chinoises et internationales, disponibles immédiatement au showroom ou sur commande sur-mesure.",
    icon: Car,
    tag: "Showroom & Neuf",
  },
  {
    id: "sav",
    title: "Service après-vente",
    description:
      "Notre équipe d'experts est là pour assurer le bon fonctionnement de votre véhicule au quotidien avec un diagnostic informatisé de pointe et la préservation intégrale de vos garanties.",
    icon: Wrench,
    tag: "Assistance & Suivi",
  },
  {
    id: "pieces",
    title: "Pièces de rechange",
    description:
      "Nous proposons une gamme complète de pièces de rechange d'origine certifiées pour garantir la longévité, la sécurité absolue et les performances optimales de votre automobile.",
    icon: Settings,
    tag: "100% Origine Certifiée",
  },
  {
    id: "entretien",
    title: "Entretien et réparation",
    description:
      "Confiez l'entretien et la réparation de votre véhicule à nos techniciens qualifiés formés aux technologies les plus avancées, sur motorisations thermiques, hybrides et 100% électriques.",
    icon: PenTool,
    tag: "Atelier Haute Précision",
  },
  {
    id: "location",
    title: "Location de véhicules",
    description:
      "Besoin d'un véhicule temporaire pour vos missions d'affaires, délégations VIP ou cérémonies ? Découvrez nos options de location haut de gamme avec ou sans chauffeur dédié.",
    icon: Key,
    tag: "Prestige & Mobilité",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-[#0B0D14] text-white relative border-t border-white/5 overflow-hidden">
      {/* Halo d'ambiance subtil */}
      {/* Halo supprimé pour les perfs */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* EN-TÊTE DE SECTION */}
        <div className="flex flex-col items-start mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-semibold tracking-widest text-[#E5C158] uppercase mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] animate-pulse" />
            <span>Prestations d&apos;Élite</span>
          </div>

          <h2 className="font-syne text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tighter leading-[1.1] max-w-2xl">
            L&apos;excellence, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/10">Au-delà de l&apos;ordinaire.</span>
          </h2>

          <p className="mt-8 text-white/50 text-base leading-relaxed font-light max-w-2xl">
            Que vous cherchiez un véhicule neuf, des pièces de rechange d&apos;origine ou un service d&apos;entretien expert, CarZone répond à vos exigences avec une rigueur absolue.
          </p>
        </div>

        {/* GRILLE DES 5 SERVICES (3 colonnes sur desktop) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group relative bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 transition-all duration-500 shadow-sm hover:shadow-[0_20px_40px_rgba(229,193,88,0.05)] flex flex-col justify-between overflow-hidden backdrop-blur-xl"
              >
                {/* Lueur magnétique au survol */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5C158]/10 blur-[40px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[#E5C158]/20 transition-colors duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center text-[#E5C158] group-hover:scale-110 group-hover:border-[#E5C158]/30 transition-all duration-500 shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-white/40 px-3 py-1.5 rounded-full bg-black/30 border border-white/5">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="font-syne text-2xl font-bold text-white group-hover:text-[#E5C158] transition-colors duration-500 mb-4">
                    {service.title}
                  </h3>

                  <p className="font-light text-sm text-white/50 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between relative z-10">
                  <span className="text-[10px] font-mono tracking-widest text-white/20 uppercase">CARZONE</span>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-[#E5C158] hover:border-[#E5C158] hover:text-black transition-all duration-300 group/btn"
                  >
                    <ArrowUpRight className="w-4 h-4 text-white group-hover/btn:text-black transition-colors" />
                  </Link>
                </div>
              </motion.div>
            );
          })}

          {/* CARTE RAPIDE CONSEIL VIP (Complète élégamment la grille 3x2) */}
          <motion.div
            variants={cardVariants}
            className="group relative bg-gradient-to-br from-[#E5C158]/10 to-transparent border border-[#E5C158]/30 rounded-[2rem] p-8 hover:shadow-[0_20px_40px_rgba(229,193,88,0.15)] transition-all duration-500 flex flex-col justify-between overflow-hidden backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#E5C158]/20 border border-[#E5C158]/50 flex items-center justify-center text-[#E5C158] shadow-[0_0_20px_rgba(229,193,88,0.3)]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-black px-3 py-1.5 rounded-full bg-[#E5C158] shadow-[0_0_15px_rgba(229,193,88,0.5)]">
                  VIP Sur-Mesure
                </span>
              </div>

              <h3 className="font-syne text-2xl font-bold text-white mb-4">
                Une requête spécifique ?
              </h3>

              <p className="font-light text-sm text-white/70 leading-relaxed">
                Nos conseillers privés étudient toute requête sur-mesure : commande spéciale, importation rapide, dédouanement et formalités administratives intégrales.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5C158]/20 flex items-center justify-between relative z-10">
              <span className="text-[10px] font-mono tracking-widest text-[#E5C158]/50 uppercase">CONCIERGERIE</span>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#E5C158] text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors duration-300"
              >
                <span>Contacter</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* 3. BLOC "L'engagement Topcarzone" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 group relative overflow-hidden rounded-[2.5rem] bg-[#0B0D14] border border-white/10 p-12 text-center"
        >
          {/* Lueur dynamique interne */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E5C158]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(229,193,88,0.05),transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E5C158] block mb-4">
              L&apos;engagement CarZone
            </span>
            <h3 className="font-syne text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tighter mb-6">
              Votre satisfaction absolue.
            </h3>
            <p className="font-light text-white/50 text-base leading-relaxed max-w-2xl mx-auto">
              Nous nous engageons à fournir des services de la plus haute qualité, alliant transparence, réactivité et accompagnement sur-mesure pour chaque client à Cotonou et partout au Bénin.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

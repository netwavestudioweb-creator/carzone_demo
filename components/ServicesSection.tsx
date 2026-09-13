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
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#0D0D0D] text-white relative border-t border-white/5 overflow-hidden">
      {/* Halo d'ambiance subtil */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[350px] bg-[#D4AF37]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* EN-TÊTE DE SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Nos Services</span>
          </div>

          {/* Titre (Police Syne) */}
          <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Au-delà de l&apos;ordinaire
          </h2>

          {/* Paragraphe d'intro */}
          <p className="mt-4 text-[#A1A1AA] text-sm sm:text-base leading-relaxed font-sans max-w-2xl mx-auto">
            Que vous cherchiez un véhicule neuf, des pièces de rechange d&apos;origine ou un service d&apos;entretien expert, TopCarZone répond à vos besoins avec rigueur et excellence.
          </p>
        </div>

        {/* GRILLE DES 5 SERVICES (3 colonnes sur desktop) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="bg-[#161616] border-l-2 border-[#D4AF37] border-y border-r border-white/5 rounded-r-xl p-6 hover:bg-[#1A1A1A] transition-all duration-300 shadow-luxury-card flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#0D0D0D] border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37]/50 group-hover:scale-110 transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#A1A1AA] px-2.5 py-1 rounded-full bg-[#0D0D0D] border border-white/5">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="font-syne text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="font-sans text-sm text-[#A1A1AA] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-[#D4AF37] transition-colors"
                  >
                    <span>Solliciter ce service</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                  <span className="text-[10px] font-mono text-[#52525B]">CARZONE</span>
                </div>
              </motion.div>
            );
          })}

          {/* CARTE RAPIDE CONSEIL VIP (Complète élégamment la grille 3x2) */}
          <motion.div
            variants={cardVariants}
            className="bg-gradient-to-br from-[#161616] to-[#121212] border-l-2 border-[#D4AF37] border-y border-r border-white/5 rounded-r-xl p-6 hover:bg-[#1A1A1A] transition-all duration-300 shadow-luxury-card flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#0D0D0D] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#D4AF37] px-2.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                  Sur Mesure
                </span>
              </div>

              <h3 className="font-syne text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-3">
                Besoin d&apos;une demande spécifique ?
              </h3>

              <p className="font-sans text-sm text-[#A1A1AA] leading-relaxed">
                Nos conseillers privés étudient toute requête sur-mesure : commande spéciale, importation rapide, dédouanement et formalités administratives intégrales.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:underline"
              >
                <span>Contacter la conciergerie</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-[10px] font-mono text-[#52525B]">TOPCARZONE</span>
            </div>
          </motion.div>
        </motion.div>

        {/* 3. BLOC "L'engagement Topcarzone" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 p-8 sm:p-10 rounded-xl mt-12 text-center relative overflow-hidden shadow-luxury-card backdrop-blur-sm"
        >
          {/* Lueur subtile en arrière-plan */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15),transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] block mb-2">
              L&apos;engagement Topcarzone
            </span>
            <h3 className="font-syne text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Votre satisfaction est notre priorité
            </h3>
            <p className="font-sans text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
              Nous nous engageons à fournir des services de la plus haute qualité, alliant transparence, réactivité et accompagnement sur-mesure pour chaque client à Cotonou et partout au Bénin.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

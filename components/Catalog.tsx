"use client";

import { motion } from "framer-motion";
import { ChevronRight, Sparkles, Zap, Shield, Compass, Layers } from "lucide-react";
import Link from "next/link";

interface BrandCardData {
  id: string;
  tag: string;
  title: string;
  description: string;
  icon: typeof Zap;
  gradient: string;
  accent: string;
}

const brandOffers: BrandCardData[] = [
  {
    id: "byd",
    tag: "Hybride & 100% Électrique",
    title: "Build Your Dream",
    description:
      "BYD est la meilleure marque chinoise en matière de voiture hybrides et électriques. Numéro 1 en Chine et Europe avec comfort et fiabilité au meilleur prix.",
    icon: Zap,
    gradient: "from-cyan-950/40 via-[#161616] to-[#0D0D0D]",
    accent: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10",
  },
  {
    id: "jetour",
    tag: "Élégance & Puissance",
    title: "Cherry JETOUR",
    description:
      "En elegance, force et caractère automobile, la Jetour est juste imbattable. Une fureur en Arabie Saoudite qui contamine le monde entier avec la joie de conduire.",
    icon: Shield,
    gradient: "from-amber-950/40 via-[#161616] to-[#0D0D0D]",
    accent: "text-[#D4AF37] border-[#D4AF37]/20 bg-[#D4AF37]/10",
  },
  {
    id: "changan-deepal",
    tag: "Designs Futuristes",
    title: "Changan & Deepal",
    description:
      "Une histoire d'amour avec l'Afrique fait de la Changan un nom a ne plus décrire dans nos offres automobiles. CARZONE offre uniquement des designs nouveaux excellents a des prix imbattables.",
    icon: Compass,
    gradient: "from-blue-950/40 via-[#161616] to-[#0D0D0D]",
    accent: "text-blue-400 border-blue-500/20 bg-blue-500/10",
  },
  {
    id: "multi-marques",
    tag: "Sélection Internationale",
    title: "Multi Marques",
    description:
      "Link&Co - Geely - Chery - Xiaomi - Huawei - BMW - Mercedes Benz - Audi - Cadillac - Toyota - Nissan. Toutes marques produites en chine.",
    icon: Layers,
    gradient: "from-purple-950/40 via-[#161616] to-[#0D0D0D]",
    accent: "text-purple-400 border-purple-500/20 bg-purple-500/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Catalog() {
  return (
    <section id="marques" className="py-24 bg-[#0D0D0D] text-white relative">
      {/* En-tête de section */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Gamme Exclusive CARZONE</span>
        </div>

        {/* Titre (Police Syne, H2, centré) */}
        <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Nos Offres
        </h2>

        {/* Sous-titre (Police Inter, centré, text-[#A1A1AA], max-w-2xl mx-auto mb-16) */}
        <p className="font-sans text-[#A1A1AA] text-base sm:text-lg max-w-2xl mx-auto mt-4 mb-16 leading-relaxed">
          Les meilleures voitures produites en Chine au meilleur coût. Voitures hybrides et 100% électriques, ainsi que des véhicules européens, asiatiques et américains.
        </p>
      </div>

      {/* Grille de Cartes avec animation staggerChildren */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 px-6 max-w-7xl mx-auto"
      >
        {brandOffers.map((brand) => {
          const IconComponent = brand.icon;
          return (
            <motion.div
              key={brand.id}
              variants={cardVariants}
              className="bg-[#161616] border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 hover:scale-[1.02] transition-all duration-500 cursor-pointer group shadow-luxury-card relative overflow-hidden"
            >
              {/* Effet lueur de fond au survol */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Zone d'image / Texture sombre haut de gamme */}
                <div
                  className={`relative h-44 rounded-xl mb-6 overflow-hidden bg-gradient-to-br ${brand.gradient} border border-white/5 flex flex-col items-center justify-center p-6 text-center`}
                >
                  {/* Trame de fond géométrique subtile */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(212,175,55,0.08),transparent_65%)] pointer-events-none" />
                  
                  {/* Badge de catégorie */}
                  <span
                    className={`absolute top-3 left-3 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border ${brand.accent} backdrop-blur-md`}
                  >
                    {brand.tag}
                  </span>

                  {/* Icône emblème centrale avec animation discrète au survol */}
                  <div className="w-14 h-14 rounded-2xl bg-[#0D0D0D]/80 border border-white/10 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:border-[#D4AF37]/50 transition-all duration-500">
                    <IconComponent className="w-7 h-7 text-[#D4AF37]" />
                  </div>

                  {/* Ligne d'accent lumineuse en bas de la zone visuelle */}
                  <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-[#D4AF37]/60 transition-all duration-500" />
                </div>

                {/* Titre (Syne) */}
                <h3 className="font-syne text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                  {brand.title}
                </h3>

                {/* Paragraphe descriptif text-[#A1A1AA] */}
                <p className="mt-3 text-sm text-[#A1A1AA] leading-relaxed font-sans">
                  {brand.description}
                </p>
              </div>

              {/* Lien "Découvrir" avec flèche (Lucide-react : ChevronRight) */}
              <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:text-[#D4AF37] transition-colors duration-300"
                >
                  <span>Découvrir</span>
                  <ChevronRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                <span className="text-[10px] uppercase tracking-widest text-[#71717A] group-hover:text-white/60 transition-colors">
                  CARZONE
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

// Export named alias for flexibility
export { Catalog as CatalogSection };

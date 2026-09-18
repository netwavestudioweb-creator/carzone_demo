"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Shield, Compass, Award, Users, ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  const values = [
    { name: "Conformité Officielle", desc: "Homologation et conformité garantie pour le territoire du Bénin." },
    { name: "Importation Clé en Main", desc: "Service complet d'importation avec des délais rapides de 4 à 6 semaines." },
    { name: "SAV & Pièces d'Origine", desc: "Réseau de service après-vente dédié et assurance de pièces certifiées." },
    { name: "Culture d'Entreprise", desc: "Accueil bienveillant, transparence absolue et passion automobile partagée." },
  ];

  const teamMembers = [
    {
      name: "Carine Zogo",
      role: "Business Development Manager",
      badge: "Direction Commerciale",
      image: "/images/team/carine-zogo.png",
      description: "Supervise le développement stratégique, les partenariats d'importation constructeurs et les relations avec les grands comptes institutionnels au Bénin.",
    },
    {
      name: "Fernand Falade",
      role: "Sales Engineer",
      badge: "Ingénierie & Conseil",
      image: "/images/team/fernand-falade.jpg",
      description: "Expert technique en motorisations hybrides et 100% électriques. Il guide les clients dans le choix des configurations sur-mesure et options avancées.",
    },
    {
      name: "Clotilde Toviazon",
      role: "Sales Engineer",
      badge: "Conseil Privé VIP",
      image: "/images/team/clotilde-toviazon.jpg",
      description: "Spécialiste de l'expérience client VIP, de la réservation des essais sur route jusqu'à la remise solennelle des clés au showroom de Cotonou.",
    },
  ];

  return (
    <section id="about" className="py-32 bg-[#0B0D14] text-white relative border-t border-white/5 overflow-hidden">
      {/* Halo d'ambiance sombre et doré */}
      {/* Removed heavy blur halos for performance */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* COLONNE GAUCHE : CONTENU INSTITUTIONNEL (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-12"
          >
            {/* Titre Principal */}
            <div>
              <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest text-[#E5C158] uppercase mb-6">
                <span className="w-8 h-[1px] bg-[#E5C158]"></span>
                <span>L'ADN CarZone</span>
              </div>
              <h2 className="font-syne text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tighter leading-[1.1]">
                L&apos;Excellence Automobile <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/10">Redéfinie à Cotonou</span>
              </h2>
            </div>

            {/* Grille de Blocs Neo-Luxury */}
            <div className="space-y-6">
              {/* BLOC 1 : Ce qui nous différencie */}
              <div className="group bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 hover:border-[#E5C158]/40 hover:bg-white/10 transition-all duration-500 hover:shadow-[0_0_30px_rgba(229,193,88,0.1)]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#E5C158] group-hover:scale-110 transition-transform duration-500">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h3 className="font-syne text-xl font-bold text-white tracking-wide">
                    Ce qui nous différencie
                  </h3>
                </div>
                <p className="text-sm text-white/60 leading-relaxed font-light">
                  Topcarzone se distingue par son expertise de niche, son offre clé en main complète et sa capacité d’homologation et de conformité au Bénin. Nous vous offrons un réseau après-vente fiable, une traçabilité totale et un contrôle qualité rigoureux pour chaque modèle d&apos;exception.
                </p>
              </div>

              {/* BLOC 2 : Notre Vision */}
              <div className="group bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 hover:border-[#E5C158]/40 hover:bg-white/10 transition-all duration-500 hover:shadow-[0_0_30px_rgba(229,193,88,0.1)]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#E5C158] group-hover:scale-110 transition-transform duration-500">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="font-syne text-xl font-bold text-white tracking-wide">
                    Notre Vision &amp; Engagement
                  </h3>
                </div>
                <p className="text-sm text-white/60 leading-relaxed font-light">
                  Rendre accessibles à tous les passionnés et décideurs les véhicules de dernière génération (BYD, Jetour, Changan, Hongqi). Créer un écosystème de mobilité verte et hybride combinant design statutaire, sécurité active et sérénité absolue.
                </p>
              </div>
            </div>

            {/* Les 4 Valeurs Fondamentales (Lignes fines) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-6 border-t border-white/10">
              {values.map((v, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <Award className="w-5 h-5 text-[#E5C158] shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                  <div>
                    <h4 className="font-syne text-sm font-bold text-white mb-2 uppercase tracking-wider">
                      {v.name}
                    </h4>
                    <p className="text-xs text-white/50 leading-relaxed font-light">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* COLONNE DROITE : BLOC GRAPHIQUE / VISUEL SHOWROOM (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 p-2 group">
              <div className="relative h-[600px] rounded-[2rem] overflow-hidden">
                <Image
                  src="/images/showroom/accueil-showroom.jpg"
                  alt="Showroom Automobile Privé CARZONE St Michel"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 opacity-80 group-hover:opacity-100 mix-blend-lighten"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D14] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-[#E5C158]/10 mix-blend-overlay pointer-events-none" />

                {/* Badge d'accréditation flottant (Glassmorphism) */}
                <div className="absolute top-6 right-6 bg-white/10 border border-white/20 px-4 py-2 rounded-full backdrop-blur-xl shadow-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#E5C158] animate-pulse" />
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-white/60">Certifié Concession</span>
                    <span className="text-xs font-semibold text-white">Showroom St Michel</span>
                  </div>
                </div>

                {/* Encart infos clé au bas de l'image (Minimaliste) */}
                <div className="absolute bottom-6 left-6 right-6 bg-black/40 border border-white/10 p-5 rounded-2xl backdrop-blur-2xl">
                  <div className="grid grid-cols-2 gap-4 text-center divide-x divide-white/10">
                    <div>
                      <span className="block font-syne text-2xl font-black text-[#E5C158]">
                        100%
                      </span>
                      <span className="text-[10px] text-white/50 uppercase tracking-widest mt-1 block">
                        Transparence
                      </span>
                    </div>
                    <div>
                      <span className="block font-syne text-2xl font-black text-white">
                        +150
                      </span>
                      <span className="text-[10px] text-white/50 uppercase tracking-widest mt-1 block">
                        Points de Contrôle
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ========================================================
            SOUS-SECTION : L'ÉQUIPE DIRIGEANTE (Obsidian Glass)
            ======================================================== */}
        <div className="mt-40 pt-20 border-t border-white/10 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-[#E5C158]/50 to-transparent" />
          
          <div className="text-center max-w-2xl mx-auto mb-20 relative z-10">
            <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest text-white/50 uppercase mb-4">
              <Users className="w-4 h-4 text-[#E5C158]" />
              <span>Excellence Humaine</span>
            </div>
            <h3 className="font-syne text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              L&apos;Équipe Dirigeante
            </h3>
            <p className="mt-6 text-sm text-white/50 font-light leading-loose max-w-xl mx-auto">
              Derrière chaque accompagnement se trouve une équipe d&apos;ingénieurs commerciaux et experts passionnés, dédiés à concrétiser votre projet automobile avec écoute et discrétion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white/5 rounded-[2rem] overflow-hidden border border-white/10 hover:border-[#E5C158]/30 transition-all duration-700 hover:bg-white/10 backdrop-blur-xl flex flex-col hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              >
                <div className="relative aspect-square overflow-hidden bg-black/50 p-2">
                  <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-1000 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D14] via-[#0B0D14]/20 to-transparent opacity-90" />
                    <span className="absolute top-4 left-4 px-4 py-1.5 rounded-full text-[9px] font-bold tracking-widest uppercase bg-black/40 border border-white/10 text-[#E5C158] backdrop-blur-md">
                      {member.badge}
                    </span>
                    <h4 className="absolute bottom-4 left-4 font-syne text-2xl font-bold text-white group-hover:text-[#E5C158] transition-colors duration-500">
                      {member.name}
                    </h4>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#E5C158] block">
                      {member.role}
                    </span>
                    <p className="mt-4 text-xs text-white/60 leading-relaxed font-light">
                      {member.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-white/30 font-semibold">Cotonou</span>
                    <Link
                      href="/#contact"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-[#E5C158] hover:border-[#E5C158] hover:text-black transition-all duration-300 group/btn"
                    >
                      <ArrowUpRight className="w-4 h-4 text-white group-hover/btn:text-black transition-colors" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

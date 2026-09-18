"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FooterContact from "@/components/FooterContact";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Key,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const featuredCars = [
    {
      id: "2",
      name: "BYD Seal Performance",
      category: "Berline Électrique Ultra-Luxe",
      origin: "Technologie Chinoise d'Élite",
      specs: "530 ch • 0-100 en 3.8s • Transmission Intégrale",
      image: "/images/cars/byd-seal.jpg",
    },
    {
      id: "9",
      name: "Chery Tiggo 9 Prestige",
      category: "SUV Flagship 7 Places",
      origin: "Nouvelle Vague Haut de Gamme",
      specs: "261 ch • Boîte Auto 8 • Intérieur Cuir Nappa",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "19",
      name: "Mercedes-Benz EQE SUV",
      category: "Limousine de Prestige",
      origin: "Excellence Multi-Marques",
      specs: "Hyperscreen MBUX • Prestige Allemand • 292 ch",
      image: "/images/cars/benz-eqe.jpg",
    },
  ];

  const brandValues = [
    {
      icon: ShieldCheck,
      title: "Garantie & Audit 150 Points",
      desc: "Chaque véhicule chinois et multi-marques est rigoureusement certifié avec garantie officielle et suivi informatisé.",
    },
    {
      icon: Award,
      title: "Service Conciergerie VIP Cotonou",
      desc: "Immatriculation personnalisée, formalités douanières complètes et livraison sécurisée à votre domicile ou bureau.",
    },
    {
      icon: Key,
      title: "Disponibilité Immédiate & Commande",
      desc: "Un showroom garni des modèles les plus récents et un service d'importation express pour vos configurations sur-mesure.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#050505] text-[#E4E4E7] overflow-hidden">
      {/* 1. HEADER */}
      <Header />

      {/* 2. HERO SECTION */}
      <HeroSection />

      {/* 3. À PROPOS (Ce que fait la société) */}
      <AboutSection />

      {/* 4. SECTION VÉHICULES EN VEDETTE AU SHOWROOM */}
      <section id="showroom" className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5 relative">
        {/* Halo supprimé pour les perfs */}

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-[#E5C158] mb-4">
              <span className="w-8 h-[1px] bg-[#E5C158]"></span>
              <span>Collection En Exposition</span>
            </div>
            <h2 className="font-syne text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
              Nos Modèles Vedettes
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-base leading-relaxed">
            Le meilleur de l&apos;innovation asiatique et des plus prestigieuses manufactures mondiales réuni en un seul lieu à Cotonou.
          </p>
        </div>

        {/* GRILLE DES VOITURES - Neo-Luxury Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
          {featuredCars.map((car, idx) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden hover:border-[#E5C158]/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(229,193,88,0.15)] flex flex-col"
            >
              <div className="relative h-72 overflow-hidden bg-transparent p-6 flex items-center justify-center">
                {/* Lueur magnétique d'arrière-plan pour détacher la voiture */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#E5C158]/15 blur-[50px] rounded-full group-hover:bg-[#E5C158]/30 group-hover:scale-125 transition-all duration-700" />
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100 mix-blend-lighten"
                />
                {/* Dégradé pour fondre l'image dans le verre */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent opacity-90" />
                
                <span className="absolute top-6 left-6 px-4 py-1.5 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-white/10 border border-white/20 text-[#E5C158] backdrop-blur-md z-20 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  {car.origin}
                </span>
              </div>

              <div className="p-8 pt-2 flex-1 flex flex-col justify-between relative z-20">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold block mb-2">
                    {car.category}
                  </span>
                  <h3 className="font-syne text-2xl font-bold text-white group-hover:text-[#E5C158] transition-colors leading-tight">
                    {car.name}
                  </h3>
                  <p className="mt-5 text-xs text-white/70 py-2.5 px-4 rounded-xl bg-black/40 border border-white/5 backdrop-blur-sm inline-block shadow-inner">
                    {car.specs}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <Link
                    href="/catalogue"
                    className="w-full inline-flex items-center justify-between group/btn"
                  >
                    <span className="text-xs font-semibold uppercase tracking-widest text-white/80 group-hover/btn:text-[#E5C158] transition-colors">
                      Découvrir
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/btn:bg-[#E5C158] group-hover/btn:border-[#E5C158] group-hover/btn:text-black transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.05)] group-hover/btn:shadow-[0_0_15px_rgba(229,193,88,0.4)]">
                       <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. SECTION ENGAGEMENT CARZONE (Garantie & Conciergerie) */}
      <section id="engagement" className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5 my-12 relative overflow-hidden">
        {/* Halo supprimé pour les perfs */}

        <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
          <span className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#E5C158] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] animate-pulse" />
            <span>L&apos;Engagement CarZone</span>
          </span>
          <h2 className="font-syne text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tighter mt-4 leading-[1.1]">
            Une Expérience Automobile <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/10">Inégalée au Bénin.</span>
          </h2>
          <p className="mt-8 text-white/50 text-base leading-relaxed font-light max-w-2xl mx-auto">
            Nous accompagnons passionnés et professionnels dans l&apos;acquisition de véhicules ultramodernes avec un service d&apos;excellence à chaque étape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {brandValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group relative p-10 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#E5C158]/30 transition-all duration-500 backdrop-blur-xl overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(229,193,88,0.05)]"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5C158]/5 blur-[30px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[#E5C158]/15 transition-colors duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center text-[#E5C158] mb-8 group-hover:scale-110 group-hover:border-[#E5C158]/30 transition-all duration-500 shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-syne text-2xl font-bold text-white mb-4">
                    {val.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed font-light">
                    {val.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 5. FOOTER CONTACT & LOCALISATION (Témoignages & Coordonnées St Michel) */}
      <FooterContact />
    </main>
  );
}

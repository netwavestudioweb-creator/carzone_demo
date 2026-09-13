import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DigitalCatalog from "@/components/DigitalCatalog";
import { ExperienceSection } from "@/components/Experience";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FooterContact from "@/components/FooterContact";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Key,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function Home() {
  const featuredCars = [
    {
      id: "byd-seal",
      name: "BYD Seal Performance",
      category: "Berline Électrique Ultra-Luxe",
      origin: "Technologie Chinoise d'Élite",
      price: "36 500 000 FCFA",
      specs: "530 ch • 0-100 en 3.8s • 570 km autonomie",
      image: "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "chery-tiggo-9",
      name: "Chery Tiggo 9 Prestige",
      category: "SUV Flagship 7 Places",
      origin: "Nouvelle Vague Haut de Gamme",
      price: "29 000 000 FCFA",
      specs: "261 ch • Boîte Auto 8 • Intérieur Cuir Nappa",
      image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "mercedes-maybach",
      name: "Mercedes-Maybach Classe S",
      category: "Limousine de Prestige",
      origin: "Excellence Multi-Marques",
      price: "Sur Demande",
      specs: "V12 Bi-Turbo • First-Class Lounge • 612 ch",
      image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
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
    <main className="relative min-h-screen bg-[#0D0D0D] text-[#A1A1AA] overflow-hidden">
      {/* 1. HEADER */}
      <Header />

      {/* 2. HERO SECTION */}
      <HeroSection />

      {/* 3. DIGITAL CATALOG SECTION (Showroom Digital Filtrable 2025) */}
      <DigitalCatalog />

      {/* 4. EXPERIENCE SECTION (Votre Accueil à CarZone - Frise 5 Étapes) */}
      <ExperienceSection />

      {/* 5. ABOUT SECTION (Qui Sommes-Nous : Vision, Différenciation, Valeurs) */}
      <AboutSection />

      {/* 6. SECTION VÉHICULES EN VEDETTE AU SHOWROOM */}
      <section id="showroom" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Collection En Exposition</span>
            </div>
            <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              Découvrez Nos Modèles Vedettes
            </h2>
          </div>
          <p className="text-[#A1A1AA] max-w-md text-sm leading-relaxed">
            Le meilleur de l&apos;innovation asiatique et des plus prestigieuses manufactures mondiales réuni en un seul lieu à Cotonou.
          </p>
        </div>

        {/* GRILLE DES VOITURES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <div
              key={car.id}
              className="group relative rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-[#D4AF37]/50 transition-all duration-300 shadow-luxury-card flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-[#0D0D0D]">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#0D0D0D]/85 border border-[#262626] text-[#D4AF37] backdrop-blur-md">
                  {car.origin}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                    {car.category}
                  </span>
                  <h3 className="font-syne text-xl font-bold text-white mt-1 group-hover:text-[#D4AF37] transition-colors">
                    {car.name}
                  </h3>
                  <p className="mt-3 text-xs text-[#A1A1AA] py-2 px-3 rounded-lg bg-[#0D0D0D] border border-[#262626]">
                    {car.specs}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#262626] flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#A1A1AA]">Prix Indicatif</span>
                    <span className="font-syne text-base font-bold text-white">{car.price}</span>
                  </div>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0D0D0D] border border-[#262626] text-xs font-semibold text-white group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-all"
                  >
                    <span>Fiche Modèle</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. SECTION ENGAGEMENT CARZONE (Garantie & Conciergerie) */}
      <section id="engagement" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>L&apos;Engagement CARZONE</span>
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold text-white">
            Une Expérience Automobile Inégalée au Bénin
          </h2>
          <p className="mt-4 text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
            Nous accompagnons passionnés et professionnels dans l&apos;acquisition de véhicules ultramodernes avec un service d&apos;excellence à chaque étape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brandValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#161616] border border-[#262626] hover:border-[#D4AF37]/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0D0D0D] border border-[#262626] flex items-center justify-center text-[#D4AF37] mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-syne text-xl font-bold text-white mb-3">
                  {val.title}
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. NOS SERVICES (Vente, SAV, Pièces, Entretien, Location) */}
      <ServicesSection />

      {/* 8. FOOTER CONTACT & LOCALISATION (Témoignages & Coordonnées St Michel) */}
      <FooterContact />
    </main>
  );
}

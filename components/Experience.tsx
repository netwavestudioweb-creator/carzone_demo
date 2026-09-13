"use client";

import { motion } from "framer-motion";
import { Coffee, UserCheck, Eye, ShieldCheck, Gift, Sparkles } from "lucide-react";

interface StepItem {
  number: string;
  title: string;
  text: string;
  icon: typeof Coffee;
}

const steps: StepItem[] = [
  {
    number: "01",
    title: "Une première impression soignée",
    text: "Un accueil chaleureux et professionnel, avec une posture ouverte et un ton bienveillant. Un espace d'attente confortable : café, eau, Wi-Fi, brochures, écrans interactifs. Une prise en charge immédiate : “Bienvenue chez CARZONE, comment puis-je vous aider aujourd'hui ?”",
    icon: Coffee,
  },
  {
    number: "02",
    title: "Une écoute personnalisée",
    text: "Nos conseillers prennent le temps de comprendre vos besoins réels: budget, usage, style de conduite, préférences technologiques. Il pose des questions pertinentes sans être insistant, montrant écoute et expertise. Une relation de confiance s'installe, centrée sur la satisfaction plutôt que sur la vente.",
    icon: UserCheck,
  },
  {
    number: "03",
    title: "Une présentation claire et immersive",
    text: "Le client découvre les modèles dans un espace propre et bien organisé, avec mise en valeur des nouveautés. Le conseiller explique les avantages, les différences entre les versions, et propose un essai sur route. Les véhicules sont impeccablement préparés, avec un soin visible dans les détails.",
    icon: Eye,
  },
  {
    number: "04",
    title: "Un accompagnement fluide",
    text: "Le concessionnaire simplifie les démarches : financement, immatriculation, reprise. Chaque étape est expliquée de façon transparente et rassurante. Le client se sent accompagné, pas pressé.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Une sortie mémorable",
    text: "Lors de la livraison, un moment spécial : véhicule dévoilé, fleurs ou petit cadeau, photo souvenir. Le conseiller présente les fonctionnalités du véhicule et rappelle les prochains entretiens. Après la visite, un suivi personnalisé : appel, e-mail ou SMS pour s'assurer de la satisfaction.",
    icon: Gift,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0A0A0A] text-white relative overflow-hidden">
      {/* En-tête */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Parcours Client Privilégié</span>
        </div>

        {/* Titre (Syne, H2, text-center) */}
        <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Votre Accueil à CarZone
        </h2>

        {/* Sous-titre (Inter, text-center, text-[#A1A1AA], mb-20) */}
        <p className="font-sans text-[#A1A1AA] text-base sm:text-lg max-w-2xl mx-auto mt-4 mb-20 leading-relaxed">
          Bien plus qu&apos;un concessionnaire : votre partenaire pour rouler vers l&apos;avenir.
        </p>
      </div>

      {/* STRUCTURE DE LA FRISE (Timeline) */}
      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Ligne verticale centrale (Desktop) ou latérale (Mobile) */}
        <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-[1px] -translate-x-1/2 bg-gradient-to-b from-[#D4AF37]/0 via-[#D4AF37]/30 to-[#D4AF37]/0 pointer-events-none" />

        <div className="space-y-12 md:space-y-20 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* BLOC CARTE CONTENU (alternance gauche/droite sur desktop) */}
                <div
                  className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                    isEven ? "md:pl-12" : "md:pr-12"
                  }`}
                >
                  <div className="bg-[#161616] border border-white/5 rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:border-[#D4AF37]/40 transition-all duration-300 shadow-luxury-card">
                    {/* Numéro en grand filigrane gris très sombre */}
                    <span
                      aria-hidden="true"
                      className="text-[#1A1A1A] text-6xl sm:text-7xl font-black absolute top-2 right-4 -z-10 font-syne select-none pointer-events-none group-hover:text-[#222222] transition-colors"
                    >
                      {step.number}
                    </span>

                    {/* Titre de l'étape */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] px-2.5 py-1 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                        Étape {step.number}
                      </span>
                    </div>

                    <h3 className="font-syne text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors">
                      {step.title}
                    </h3>

                    {/* Texte descriptif strict */}
                    <p className="font-sans text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>

                {/* POINT DE CONNEXION AVEC ICÔNE SUR LA LIGNE CENTRALE */}
                <div className="absolute left-8 md:left-1/2 top-6 -translate-x-1/2 flex items-center justify-center">
                  <div className="bg-[#161616] border border-[#D4AF37]/50 text-[#D4AF37] p-3 rounded-full shadow-gold-glow-sm relative z-10 transition-transform duration-300 hover:scale-110">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Export named alias
export { Experience as ExperienceSection };

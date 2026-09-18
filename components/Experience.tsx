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
    <section id="experience" className="py-32 bg-[#0B0D14] text-white relative overflow-hidden border-t border-white/5">
      {/* Halo d'ambiance */}
      {/* Halo supprimé pour les perfs */}

      {/* En-tête */}
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest text-[#E5C158] uppercase mb-6 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] animate-pulse" />
          <span>Parcours Client Privilégié</span>
        </div>

        {/* Titre */}
        <h2 className="font-syne text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tighter leading-[1.1]">
          Votre Accueil à <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/10">CarZone</span>
        </h2>

        {/* Sous-titre */}
        <p className="font-light text-white/50 text-base sm:text-lg max-w-2xl mx-auto mt-8 mb-24 leading-relaxed">
          Bien plus qu&apos;un concessionnaire : votre partenaire exclusif pour rouler vers l&apos;avenir avec élégance et sérénité.
        </p>
      </div>

      {/* STRUCTURE DE LA FRISE (Timeline) */}
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Ligne verticale centrale (Desktop) ou latérale (Mobile) */}
        <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#E5C158]/30 to-transparent pointer-events-none" />

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
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* BLOC CARTE CONTENU (alternance gauche/droite sur desktop) */}
                <div
                  className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                    isEven ? "md:pl-16" : "md:pr-16"
                  }`}
                >
                  <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 sm:p-10 relative overflow-hidden group hover:bg-white/10 hover:border-[#E5C158]/30 transition-all duration-500 shadow-sm hover:shadow-[0_20px_40px_rgba(229,193,88,0.05)] backdrop-blur-xl">
                    {/* Numéro en grand filigrane sombre */}
                    <span
                      aria-hidden="true"
                      className="text-white/5 text-7xl sm:text-8xl font-black absolute -top-4 -right-4 -z-10 font-syne select-none pointer-events-none group-hover:text-[#E5C158]/10 transition-colors duration-500"
                    >
                      {step.number}
                    </span>

                    {/* Lueur magnétique au survol */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-[#E5C158]/10 blur-[40px] rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:bg-[#E5C158]/20 transition-colors duration-500 pointer-events-none" />

                    {/* Titre de l'étape */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-black px-3 py-1.5 rounded-full bg-[#E5C158] shadow-[0_0_15px_rgba(229,193,88,0.3)]">
                        Étape {step.number}
                      </span>
                    </div>

                    <h3 className="font-syne text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-[#E5C158] transition-colors duration-500">
                      {step.title}
                    </h3>

                    {/* Texte descriptif strict */}
                    <p className="font-light text-sm sm:text-base text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                      {step.text}
                    </p>
                  </div>
                </div>

                {/* POINT DE CONNEXION AVEC ICÔNE SUR LA LIGNE CENTRALE */}
                <div className="absolute left-8 md:left-1/2 top-10 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-14 h-14 bg-[#0B0D14] border-2 border-[#E5C158]/30 text-[#E5C158] flex items-center justify-center rounded-2xl shadow-[0_0_20px_rgba(229,193,88,0.15)] relative z-10 transition-all duration-500 hover:scale-110 hover:bg-[#E5C158]/10 hover:border-[#E5C158]">
                    <Icon className="w-6 h-6" />
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

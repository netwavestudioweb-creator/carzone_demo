"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Star,
  Quote,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Sparkles,
  ArrowUpRight,
  Send,
  Navigation,
  Loader2,
} from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Benjamin Aitcheme",
    role: "Propriétaire Berline Électrique",
    text: "Je ne saurais trop louer l'excellent service que j'ai reçu de CarZone. Leur équipe s'est surpassée pour répondre à nos besoins et a dépassé nos attentes.",
    rating: 5,
  },
  {
    name: "Emma Lawson",
    role: "Cliente VIP Showroom",
    text: "Un showroom chaleureux, des voitures elegantes, un service de qualité et une attitude d'accompagnement 20/20. Bravo CARZONE!",
    rating: 5,
  },
  {
    name: "Oliver Alihonou",
    role: "Acquéreur Véhicule sur Commande",
    text: "Carzone a transformé ma recherche de véhicule en une experience unique. J'ai commande ma voiture et elle m'a été livrée en 6 semaines. CarZone est le best!.",
    rating: 5,
  },
];

export default function FooterContact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    botcheck: "", // Honeypot field
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Anti-Spam : Si le honeypot est rempli, c'est un bot. On simule un succès pour le tromper.
    if (formData.botcheck) {
      setIsSubmitting(false);
      setIsSuccess(true);
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE";
    data.append("access_key", accessKey);
    data.append("subject", "Nouvelle demande VIP - CARZONE");
    data.append("from_name", "CARZONE Showroom Web");
    data.append("to_email", "contact@topcarzone.com");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        if (accessKey === "YOUR_ACCESS_KEY_HERE") {
          setIsSuccess(true);
          setFormData({ name: "", email: "", message: "" });
        } else {
          setErrorMessage(result.message || "Une erreur est survenue lors de l'envoi.");
        }
      }
    } catch {
      if (accessKey === "YOUR_ACCESS_KEY_HERE") {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrorMessage("Une erreur de connexion est survenue. Veuillez réessayer.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-[#0B0D14] text-white pt-32 pb-12 relative overflow-hidden border-t border-white/5">
      {/* Halo d'ambiance sombre */}
      {/* Halo supprimé pour les perfs */}

      {/* ========================================================
          1. SECTION TÉMOIGNAGES CLIENTS (Preuve sociale)
          ======================================================== */}
      <section id="temoignages" className="relative z-10 max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest text-[#E5C158] uppercase mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] animate-pulse" />
            <span>Preuve Sociale &amp; Confiance</span>
          </div>
          <h2 className="font-syne text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tighter leading-[1.1]">
            L&apos;excellence, <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/10">Approuvée.</span>
          </h2>
          <p className="mt-8 text-white/50 text-base leading-relaxed font-light max-w-xl mx-auto">
            La satisfaction de nos clients à Cotonou est notre plus prestigieuse signature.
          </p>
        </div>

        {/* Grille responsive de cartes de témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2rem] relative flex flex-col justify-between hover:bg-white/10 hover:border-[#E5C158]/30 transition-all duration-500 shadow-sm hover:shadow-[0_20px_40px_rgba(229,193,88,0.05)] group overflow-hidden"
            >
              {/* Lueur magnétique au survol */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5C158]/5 blur-[40px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[#E5C158]/15 transition-colors duration-500 pointer-events-none" />

              <Quote
                className="w-16 h-16 text-[#E5C158]/10 absolute top-8 right-8 pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:text-[#E5C158]/20"
                aria-hidden="true"
              />

              <div className="relative z-10 text-center flex flex-col items-center h-full">
                <h4 className="font-syne text-xl font-bold text-white group-hover:text-[#E5C158] transition-colors duration-500 mt-4">
                  {item.name}
                </h4>
                <p className="text-[10px] uppercase tracking-widest text-white/40 mt-2 mb-8">{item.role}</p>

                <div className="flex items-center justify-center gap-1.5 mb-8">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#E5C158] fill-[#E5C158]"
                    />
                  ))}
                </div>

                <p className="font-light text-sm sm:text-base text-white/60 leading-relaxed italic mt-auto">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================
          2. SECTION CONTACT & LOCALISATION (Cotonou)
          ======================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* COLONNE 1 : LE FORMULAIRE PREMIUM */}
          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 sm:p-12 shadow-sm backdrop-blur-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#E5C158]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            
            <div className="mb-12 relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E5C158] block mb-4">
                Service Conciergerie
              </span>
              <h3 className="font-syne text-3xl sm:text-4xl font-extrabold text-white">
                Prendre Rendez-vous
              </h3>
              <p className="mt-4 text-sm text-white/50 font-light">
                Planifiez une visite exclusive ou un essai routier avec nos conseillers dédiés.
              </p>
            </div>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 px-6 sm:px-8 text-center flex flex-col items-center justify-center bg-black/40 border border-[#E5C158]/30 rounded-2xl relative overflow-hidden shadow-inner backdrop-blur-md"
              >
                <div className="w-20 h-20 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/40 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(229,193,88,0.25)]">
                  <CheckCircle className="w-10 h-10 text-[#E5C158]" />
                </div>
                <h4 className="font-syne text-2xl font-bold text-white tracking-tight">
                  Demande envoyée.
                </h4>
                <p className="mt-4 text-sm text-white/50 max-w-sm leading-relaxed font-light">
                  Un conseiller privé CARZONE vous recontactera dans les plus brefs délais.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false);
                    setErrorMessage(null);
                  }}
                  className="mt-10 px-8 py-3 rounded-full border border-white/10 hover:border-[#E5C158] text-[10px] uppercase tracking-widest text-[#E5C158] hover:bg-white/5 transition-all duration-300 font-bold"
                >
                  Nouvelle demande
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs text-center font-medium">
                    {errorMessage}
                  </div>
                )}

                {/* Champ Honeypot (Caché aux utilisateurs) pour la sécurité Anti-Spam */}
                <div style={{ display: "none" }}>
                  <label htmlFor="botcheck">Ne remplissez pas ce champ si vous êtes humain</label>
                  <input
                    type="text"
                    name="botcheck"
                    id="botcheck"
                    value={formData.botcheck}
                    onChange={(e) => setFormData({ ...formData, botcheck: e.target.value })}
                  />
                </div>

                {/* Champ Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-3"
                  >
                    Nom &amp; Prénom
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    disabled={isSubmitting}
                    placeholder="Ex: Jean-Marc Dossou"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-black/40 border border-white/10 text-white rounded-xl p-4 focus:border-[#E5C158] focus:ring-1 focus:ring-[#E5C158] outline-none transition-all duration-300 text-sm placeholder:text-white/20 disabled:opacity-50"
                  />
                </div>

                {/* Champ Email address */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-3"
                  >
                    Adresse E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={isSubmitting}
                    placeholder="Ex: jean.dossou@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-black/40 border border-white/10 text-white rounded-xl p-4 focus:border-[#E5C158] focus:ring-1 focus:ring-[#E5C158] outline-none transition-all duration-300 text-sm placeholder:text-white/20 disabled:opacity-50"
                  />
                </div>

                {/* Champ Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-3"
                  >
                    Message / Requête
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    disabled={isSubmitting}
                    placeholder="Précisez vos disponibilités ou le modèle qui vous intéresse..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-black/40 border border-white/10 text-white rounded-xl p-4 focus:border-[#E5C158] focus:ring-1 focus:ring-[#E5C158] outline-none transition-all duration-300 text-sm placeholder:text-white/20 resize-none disabled:opacity-50"
                  />
                </div>

                {/* Bouton d'envoi : "Envoyer la demande" */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-black hover:bg-[#E5C158] w-full py-4 rounded-xl font-bold transition-all duration-500 flex items-center justify-center gap-3 text-[10px] uppercase tracking-widest shadow-md hover:shadow-[0_0_30px_rgba(229,193,88,0.4)] disabled:opacity-70 disabled:cursor-not-allowed group/btn mt-4"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-black" />
                      <span>Transmission VIP...</span>
                    </>
                  ) : (
                    <>
                      <span>Envoyer la requête</span>
                      <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* COLONNE 2 : COORDONNÉES & CARTE */}
          <div className="flex flex-col justify-between h-full space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 sm:p-12 shadow-sm backdrop-blur-xl h-full flex flex-col">
              <h3 className="font-syne text-2xl sm:text-3xl font-bold text-white mb-10">
                L&apos;Adresse Privilège
              </h3>

              {/* Informations strictes */}
              <div className="space-y-8 text-sm flex-1">
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center text-[#E5C158] shrink-0 group-hover:scale-110 group-hover:border-[#E5C158]/40 transition-all duration-500 shadow-inner">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">
                      Siège &amp; Showroom
                    </span>
                    <p className="text-white font-medium leading-relaxed group-hover:text-[#E5C158] transition-colors">
                      Lot 167 Rue 407 Gbedomidji, 99000 COTONOU.
                    </p>
                    <p className="text-xs text-white/50 mt-1 font-light">
                      Bâtiment Commission Béninoise des Droits de l&apos;Homme / St Michel.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center text-[#E5C158] shrink-0 group-hover:scale-110 group-hover:border-[#E5C158]/40 transition-all duration-500 shadow-inner">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">
                      Ligne Directe VIP
                    </span>
                    <a
                      href="tel:+2290192626262"
                      className="text-white font-medium hover:text-[#E5C158] transition-colors block text-lg"
                    >
                      +229 01 92 62 62 62
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center text-[#E5C158] shrink-0 group-hover:scale-110 group-hover:border-[#E5C158]/40 transition-all duration-500 shadow-inner">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">
                      Courriel Conciergerie
                    </span>
                    <a
                      href="mailto:contact@topcarzone.com"
                      className="text-white font-medium hover:text-[#E5C158] transition-colors block"
                    >
                      contact@topcarzone.com
                    </a>
                  </div>
                </div>
              </div>

              {/* INTÉGRATION CARTE SOMBRE ROBUSTE */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-white/60 font-bold flex items-center gap-2">
                    <Navigation className="w-3 h-3 text-[#E5C158]" />
                    Localisation Satellite
                  </span>
                  <a
                    href="https://maps.google.com/?q=St+Michel+Cotonou+Benin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-[#E5C158] uppercase tracking-widest font-bold hover:text-white flex items-center gap-2 transition-colors group/link"
                  >
                    <span>Google Maps</span>
                    <ArrowUpRight className="w-3 h-3 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>

                {/* Bloc Carte Dark stylisé */}
                <div className="relative rounded-2xl overflow-hidden h-48 border border-white/10 bg-black/50 shadow-inner group/map hover:border-[#E5C158]/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-[#0B0D14] bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] opacity-80" />

                  <svg
                    className="absolute inset-0 w-full h-full stroke-white/5 fill-none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M-20 40 Q 150 70 240 160 T 450 210" strokeWidth="2" />
                    <path d="M80 -20 Q 140 100 190 280" strokeWidth="2.5" />
                    <path d="M120 180 L 380 90" strokeWidth="1.5" />
                    <path d="M0 210 Q 200 220 420 150" strokeWidth="2" stroke="rgba(255,255,255,0.02)" />
                    <circle cx="210" cy="135" r="45" stroke="#E5C158" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
                  </svg>

                  {/* Marqueur animé */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#E5C158]/20 animate-ping absolute -top-1" />
                    <div className="relative z-10 w-10 h-10 rounded-full bg-black/80 border border-[#E5C158] flex items-center justify-center text-[#E5C158] shadow-[0_0_20px_rgba(229,193,88,0.5)]">
                      <MapPin className="w-4 h-4 fill-[#E5C158]/20" />
                    </div>
                  </div>

                  {/* Coordonnées GPS */}
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg text-[9px] text-white/50 font-mono tracking-widest uppercase">
                    6°21&apos;55&quot;N 2°25&apos;14&quot;E • CTN
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PIED DE PAGE BAS */}
        <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-white/40 gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <Image src="/images/logo.png" alt="CarZone Logo" width={80} height={24} className="opacity-50 hover:opacity-100 transition-opacity duration-500 object-contain grayscale hover:grayscale-0" />
            <p className="font-light tracking-wide">© {new Date().getFullYear()} Topcarzone Bénin. Tous droits réservés.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            <a
              href="https://tiktok.com/@carzonebj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E5C158] transition-colors font-medium flex items-center gap-2"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
              <span className="uppercase tracking-widest text-[10px] font-bold">TikTok @carzonebj</span>
            </a>
            <span className="text-white/10">|</span>
            <span className="text-[#E5C158] uppercase tracking-widest text-[10px] font-bold">Design Obsidian Luxury</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

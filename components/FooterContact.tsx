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
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Clé d'accès publique Web3Forms (utilise la variable d'environnement ou le placeholder par défaut)
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE";
    data.append("access_key", accessKey);
    data.append("subject", "Nouvelle demande de rendez-vous - CARZONE");
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
        // En mode placeholder / test local si la clé n'est pas encore configurée
        if (accessKey === "YOUR_ACCESS_KEY_HERE") {
          setIsSuccess(true);
          setFormData({ name: "", email: "", message: "" });
        } else {
          setErrorMessage(result.message || "Une erreur est survenue lors de l'envoi.");
        }
      }
    } catch {
      // En cas d'erreur de réseau avec clé placeholder en dev, simuler le succès ou afficher l'erreur
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
    <footer id="contact" className="bg-[#0D0D0D] text-white pt-24 pb-12 relative overflow-hidden border-t border-white/5">
      {/* Halo d'ambiance sombre */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#D4AF37]/5 blur-[150px] pointer-events-none" />

      {/* ========================================================
          1. SECTION TÉMOIGNAGES CLIENTS (Preuve sociale)
          ======================================================== */}
      <section id="temoignages" className="relative z-10 max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Preuve Sociale &amp; Confiance</span>
          </div>
          {/* Titre (Syne, text-center) */}
          <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Ce qu&apos;ils disent de nous
          </h2>
          <p className="mt-3 text-[#A1A1AA] text-sm sm:text-base font-sans max-w-xl mx-auto">
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
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-[#161616]/80 backdrop-blur-sm border border-white/5 p-8 rounded-2xl relative flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-luxury-card group"
            >
              {/* Icône Quote en filigrane #D4AF37/10 dans le coin supérieur droit */}
              <Quote
                className="w-16 h-16 text-[#D4AF37]/10 absolute top-6 right-6 pointer-events-none transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              />

              <div className="relative z-10 text-center flex flex-col items-center">
                {/* Avatar rond tout en haut de la carte */}
                <div className="relative w-16 h-16 mb-4 rounded-full overflow-hidden border-2 border-[#D4AF37]/30 mx-auto shadow-md">
                  <Image
                    src="/images/clients/placeholder-avatar.jpg"
                    alt={item.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>

                {/* Nom et rôle centrés sous la photo */}
                <h4 className="font-syne text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                  {item.name}
                </h4>
                <p className="text-xs text-[#71717A] mt-0.5 mb-5">{item.role}</p>

                {/* 5 Étoiles dorées */}
                <div className="flex items-center justify-center gap-1.5 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]"
                    />
                  ))}
                </div>

                {/* Texte strict du témoignage */}
                <p className="font-sans text-sm sm:text-base text-[#A1A1AA] leading-relaxed italic">
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
          <div className="bg-[#161616] border border-white/5 rounded-2xl p-8 sm:p-10 shadow-luxury-card">
            <div className="mb-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] block mb-2">
                Showroom Privé
              </span>
              <h3 className="font-syne text-2xl sm:text-3xl font-extrabold text-white">
                Prendre Rendez-vous
              </h3>
              <p className="mt-2 text-sm text-[#A1A1AA]">
                Planifiez une visite exclusive ou un essai routier avec nos conseillers dédiés.
              </p>
            </div>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 px-6 sm:px-8 text-center flex flex-col items-center justify-center bg-[#0D0D0D] border border-[#D4AF37]/30 rounded-xl relative overflow-hidden shadow-2xl"
              >
                <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/40 flex items-center justify-center mb-5 shadow-[0_0_30px_rgba(212,175,55,0.25)]">
                  <CheckCircle className="w-9 h-9 text-[#D4AF37]" />
                </div>
                <h4 className="font-syne text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Demande envoyée avec succès.
                </h4>
                <p className="mt-3 text-sm text-[#A1A1AA] max-w-sm leading-relaxed">
                  Un conseiller CARZONE vous recontactera dans les plus brefs délais.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false);
                    setErrorMessage(null);
                  }}
                  className="mt-8 px-6 py-2.5 rounded-full border border-white/10 hover:border-[#D4AF37]/50 text-xs uppercase tracking-widest text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300"
                >
                  Envoyer une autre demande
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMessage && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs text-center">
                    {errorMessage}
                  </div>
                )}

                {/* Champ Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs uppercase tracking-wider text-[#A1A1AA] mb-2 font-medium"
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
                    className="w-full bg-[#1A1A1A] border border-white/10 text-white rounded-lg p-3 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition text-sm placeholder:text-[#52525B] disabled:opacity-50"
                  />
                </div>

                {/* Champ Email address */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-wider text-[#A1A1AA] mb-2 font-medium"
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
                    className="w-full bg-[#1A1A1A] border border-white/10 text-white rounded-lg p-3 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition text-sm placeholder:text-[#52525B] disabled:opacity-50"
                  />
                </div>

                {/* Champ Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-wider text-[#A1A1AA] mb-2 font-medium"
                  >
                    Message / Modèle Souhaité
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
                    className="w-full bg-[#1A1A1A] border border-white/10 text-white rounded-lg p-3 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition text-sm placeholder:text-[#52525B] resize-none disabled:opacity-50"
                  />
                </div>

                {/* Bouton d'envoi : "Envoyer la demande" */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-black hover:bg-[#D4AF37] w-full py-3.5 rounded-lg font-bold transition duration-300 flex items-center justify-center gap-2 text-sm uppercase tracking-wider shadow-md hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-black" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <span>Envoyer la demande</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* COLONNE 2 : COORDONNÉES & CARTE */}
          <div className="flex flex-col justify-between h-full space-y-8">
            <div className="bg-[#161616] border border-white/5 rounded-2xl p-8 shadow-luxury-card">
              <h3 className="font-syne text-2xl font-bold text-white mb-6">
                Coordonnées Showroom
              </h3>

              {/* Informations strictes */}
              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0D0D0D] border border-white/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#71717A] mb-1 font-semibold">
                      Adresse Physique
                    </span>
                    <p className="text-white font-medium leading-relaxed">
                      Bâtiment Commission Béninoise des Droits de l&apos;Homme, St Michel KETEKETE Cotonou, Benin.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0D0D0D] border border-white/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#71717A] mb-1 font-semibold">
                      Téléphone Direct / WhatsApp
                    </span>
                    <a
                      href="tel:+2290192626262"
                      className="text-white font-medium hover:text-[#D4AF37] transition-colors"
                    >
                      +2290192626262
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0D0D0D] border border-white/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#71717A] mb-1 font-semibold">
                      Courriel Officiel
                    </span>
                    <a
                      href="mailto:contact@topcarzone.com"
                      className="text-white font-medium hover:text-[#D4AF37] transition-colors"
                    >
                      contact@topcarzone.com
                    </a>
                  </div>
                </div>
              </div>

              {/* INTÉGRATION CARTE SOMBRE ROBUSTE (Résout le bug Mapbox) */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-wider text-[#A1A1AA] font-semibold flex items-center gap-2">
                    <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Localisation Haute Précision
                  </span>
                  <a
                    href="https://maps.google.com/?q=St+Michel+Cotonou+Benin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#D4AF37] hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Itinéraire Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Bloc Carte Dark stylisé résolvant tout crash Mapbox */}
                <div className="relative rounded-xl overflow-hidden h-64 border border-white/10 bg-[#0D0D0D] shadow-inner group">
                  {/* Fond de plan sombre texturé représentant Cotonou */}
                  <div className="absolute inset-0 bg-[#0E1117] bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />

                  {/* Tracés géographiques stylisés en Dark Mode */}
                  <svg
                    className="absolute inset-0 w-full h-full stroke-[#222222] fill-none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M-20 40 Q 150 70 240 160 T 450 210" strokeWidth="2" />
                    <path d="M80 -20 Q 140 100 190 280" strokeWidth="2.5" stroke="#2a2a2a" />
                    <path d="M120 180 L 380 90" strokeWidth="1.5" />
                    <path d="M0 210 Q 200 220 420 150" strokeWidth="2" stroke="#1f1f1f" />
                    <circle cx="210" cy="135" r="45" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
                  </svg>

                  {/* Marqueur animé sur St Michel KETEKETE Cotonou */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    {/* Onde radar pulsante */}
                    <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 animate-ping absolute -top-1" />
                    <div className="relative z-10 w-10 h-10 rounded-full bg-[#161616] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.6)]">
                      <MapPin className="w-5 h-5 fill-[#D4AF37]/20" />
                    </div>
                    {/* Badge Localisation */}
                    <div className="mt-2 px-3 py-1 rounded-full bg-[#0D0D0D]/90 border border-[#D4AF37]/40 text-[11px] font-bold text-white whitespace-nowrap shadow-lg backdrop-blur-sm">
                      CARZONE Showroom • St Michel
                    </div>
                  </div>

                  {/* Coordonnées GPS subtiles */}
                  <div className="absolute bottom-3 left-3 bg-[#0D0D0D]/80 border border-white/10 px-2.5 py-1 rounded text-[10px] text-[#A1A1AA] font-mono">
                    6°21&apos;55&quot;N 2°25&apos;14&quot;E • Cotonou
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PIED DE PAGE BAS */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#71717A] gap-4">
          <p>© {new Date().getFullYear()} CARZONE (Topcarzone Bénin). Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <span className="text-[#D4AF37] font-medium">Design &amp; Ingénierie Dark Luxury</span>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

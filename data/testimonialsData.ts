export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  carBought: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
  verifiedBadge: boolean;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Dr. Armand SOSSOU",
    role: "Médecin Spécialiste",
    location: "Cotonou (Haie Vive)",
    carBought: "BYD Seal Performance 530ch",
    rating: 5,
    comment: "Une expérience d'achat incomparable à Cotonou ! Le silence de conduite de la BYD Seal et la réactivité de l'équipe CarZone m'ont bluffé. Formalités douanières et immatriculation réglées en 72h. Je recommande sans hésitation.",
    date: "Août 2026",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    verifiedBadge: true,
  },
  {
    id: "2",
    name: "Mme Clarisse HOUEDANOU",
    role: "Directrice Générale",
    location: "Porto-Novo",
    carBought: "Chery Tiggo 9 Prestige 7 Places",
    rating: 5,
    comment: "Nous cherchions un SUV familial ultra-confortable pour les longs trajets et nos déplacements professionnels. Le Tiggo 9 surpasse toutes nos attentes. Le service VIP à domicile par l'équipe CarZone fait toute la différence.",
    date: "Juillet 2026",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    verifiedBadge: true,
  },
  {
    id: "3",
    name: "M. Rodrigue KPADONOU",
    role: "Entrepreneur BTP",
    location: "Cotonou (Cadjehoun)",
    carBought: "Jetour T2 Traveler 4x4",
    rating: 5,
    comment: "Le Jetour T2 a un look phénoménal et passe partout ! CarZone m'a livré le véhicule directement au showroom avec une révision complète et 5 ans de garantie constructeur. La qualité de service est niveau palace.",
    date: "Septembre 2026",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    verifiedBadge: true,
  },
  {
    id: "4",
    name: "Ing. Christian FADEGNON",
    role: "Consultant International",
    location: "Parakou",
    carBought: "Changan UNI-K Flagship",
    rating: 5,
    comment: "La commande sur-mesure s'est déroulée en toute transparence avec un suivi WhatsApp en direct de chaque étape de l'importation. Le véhicule est arrivé dans un état impeccable. Bravo à toute l'équipe CarZone !",
    date: "Juin 2026",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    verifiedBadge: true,
  },
];

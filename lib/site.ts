export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.topcarzone.com";

// Coordonnées reprises du site actuel topcarzone.com.
// Attention : le numéro WhatsApp (…61 61 61) n'est pas le numéro d'appel (…62 62 62).
export const contact = {
  phoneDisplay: "+229 01 92 62 62 62",
  phoneHref: "tel:+2290192626262",
  whatsappDisplay: "+229 01 92 61 61 61",
  whatsappNumber: "2290192616161",
  email: "contact@topcarzone.com",
  addressLine1: "Bâtiment de la Commission Béninoise des Droits de l'Homme",
  addressLine2: "St Michel Kétékété, Cotonou, Bénin",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Commission+B%C3%A9ninoise+des+Droits+de+l%27Homme+St+Michel+Cotonou",
};

export const socials = [
  { name: "Instagram", href: "https://instagram.com/carzone_229" },
  { name: "LinkedIn", href: "https://linkedin.com/company/carzonebenin/" },
  { name: "TikTok", href: "https://tiktok.com/@carzonebj" },
];

export const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Nos marques", href: "/nos-marques-de-voitures" },
  { label: "Nos services", href: "/nos-services" },
  { label: "Qui sommes-nous ?", href: "/qui-sommes-nous" },
  { label: "Contact", href: "/contactez-nous" },
];

export function whatsappLink(message?: string): string {
  const text = message ?? "Bonjour CARZONE, je souhaite avoir des informations sur vos véhicules.";
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

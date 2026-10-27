// Types et fonctions sans données : utilisables par les composants client
// sans embarquer tout le catalogue dans le JavaScript envoyé au navigateur.

export type Block = { type: "p"; text: string } | { type: "ul"; items: string[] };

export interface Section {
  title: string | null;
  blocks: Block[];
}

export interface Spec {
  label: string;
  value: string;
}

export interface Model {
  slug: string;
  path: string;
  segments: string[];
  brand: string;
  brandSlug: string;
  subBrand: string | null;
  name: string;
  tagline: string | null;
  price: number | null;
  warranty: string | null;
  engine: string;
  category: string;
  seats: number | null;
  specs: Spec[];
  sections: Section[];
  images: string[];
  hasContent: boolean;
  featured?: boolean;
}

export const CATALOGUE_PATH = "/nos-marques-de-voitures";
export const FALLBACK_IMAGE = "/images/catalogue/placeholder.jpg";

export const budgets = [
  { id: "lt15", label: "Moins de 15 M", min: 0, max: 15_000_000 },
  { id: "15-25", label: "15 à 25 M", min: 15_000_000, max: 25_000_000 },
  { id: "gte25", label: "25 M et plus", min: 25_000_000, max: Infinity },
] as const;

export function formatPrice(price: number | null): string {
  if (!price) return "Prix sur demande";
  return `${price.toLocaleString("fr-FR").replace(/[  ]/g, " ")} F CFA`;
}

export function displayName(m: Model): string {
  const name = m.name.trim();
  return name.toLowerCase().startsWith(m.brand.toLowerCase()) ? name : `${m.brand} ${name}`;
}

export function coverImage(m: Model): string {
  return m.images[0] ?? FALLBACK_IMAGE;
}

export function shortSpec(m: Model): string {
  return [m.category, m.seats ? `${m.seats} places` : null, m.engine].filter(Boolean).join(" · ");
}

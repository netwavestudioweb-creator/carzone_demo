import { cache } from "react";
import raw from "@/data/catalogue.json";
import { CATALOGUE_PATH, type Block, type Model, type Section, type Spec } from "@/lib/model";
import { imageUrl, sanityFetch } from "@/lib/sanity";
import { defaultContact, type Contact } from "@/lib/site";
import { isSanityConfigured } from "@/sanity/env";
import { BRANDS } from "@/sanity/brands";

export * from "@/lib/model";

// Modèles mis en avant quand le site lit encore data/catalogue.json.
const FALLBACK_FEATURED = [
  "jetour-2026-t-2-i-dm-2026",
  "byd-leopard-8",
  "changan-deepal-s09",
  "forthing-forthing-s7",
];

type PortableSpan = { text?: string };
type PortableBlock = { _type: string; listItem?: string; children?: PortableSpan[] };

interface SanityModel {
  _id: string;
  name: string;
  brand: string;
  subBrand?: string;
  tagline?: string;
  price?: number;
  warranty?: string;
  engine: string;
  category: string;
  seats?: number;
  featured?: boolean;
  slug?: { current?: string };
  legacyPath?: string;
  images?: unknown[];
  specs?: Spec[];
  sections?: { title?: string; body?: PortableBlock[] }[];
}

/** Convertit le texte riche de Sanity en paragraphes et listes à puces. */
function toBlocks(body: PortableBlock[] = []): Block[] {
  const blocks: Block[] = [];
  for (const b of body) {
    if (b._type !== "block") continue;
    const text = (b.children ?? []).map((c) => c.text ?? "").join("").trim();
    if (!text) continue;
    const last = blocks[blocks.length - 1];
    if (b.listItem) {
      if (last?.type === "ul") last.items.push(text);
      else blocks.push({ type: "ul", items: [text] });
    } else {
      blocks.push({ type: "p", text });
    }
  }
  return blocks;
}

function fromSanity(d: SanityModel): Model {
  const brandSlug = BRANDS.find((b) => b.value === d.brand)?.slug ?? d.brand.toLowerCase();
  const path = d.legacyPath || `${CATALOGUE_PATH}/${brandSlug}/${d.slug?.current ?? d._id}`;
  const segments = path.replace(`${CATALOGUE_PATH}/`, "").split("/");
  const sections: Section[] = (d.sections ?? [])
    .map((s) => ({ title: s.title ?? null, blocks: toBlocks(s.body) }))
    .filter((s) => s.blocks.length);
  return {
    slug: segments.join("-"),
    path,
    segments,
    brand: d.brand,
    brandSlug: segments[0],
    subBrand: d.subBrand ?? null,
    name: d.name,
    tagline: d.tagline ?? null,
    price: d.price ?? null,
    warranty: d.warranty ?? null,
    engine: d.engine,
    category: d.category,
    seats: d.seats ?? null,
    featured: !!d.featured,
    specs: d.specs ?? [],
    sections,
    images: (d.images ?? []).map((i) => imageUrl(i)).filter((u): u is string => !!u),
    hasContent: true,
  };
}

const MODELS_QUERY = `*[_type == "model" && defined(slug.current)] | order(brand asc, name asc) {
  _id, name, brand, subBrand, tagline, price, warranty, engine, category, seats, featured,
  slug, legacyPath, images, specs[]{label, value}, sections[]{title, body}
}`;

function localModels(): Model[] {
  return (raw as Model[])
    .filter((m) => m.hasContent)
    .map((m) => ({ ...m, featured: FALLBACK_FEATURED.includes(m.slug) }));
}

/**
 * Le catalogue : depuis Sanity si le projet est configuré, sinon depuis data/catalogue.json.
 * Si Sanity ne répond pas (panne, projet mal configuré), le site reste en ligne avec le fichier local.
 */
export const getModels = cache(async (): Promise<Model[]> => {
  if (!isSanityConfigured) return localModels();
  try {
    const docs = await sanityFetch<SanityModel[]>(MODELS_QUERY);
    return docs.length ? docs.map(fromSanity) : localModels();
  } catch (err) {
    console.error("Sanity indisponible, catalogue local utilisé :", err instanceof Error ? err.message : err);
    return localModels();
  }
});

export const getContact = cache(async (): Promise<Contact> => {
  if (!isSanityConfigured) return defaultContact;
  try {
    const s = await sanityFetch<Partial<Contact> | null>(
      `*[_type == "settings" && _id == "settings"][0]{phoneDisplay, whatsappDisplay, email, addressLine1, addressLine2}`,
    );
    return { ...defaultContact, ...Object.fromEntries(Object.entries(s ?? {}).filter(([, v]) => !!v)) };
  } catch {
    return defaultContact;
  }
});

export function featuredModels(models: Model[], count = 4): Model[] {
  return models.filter((m) => m.featured).slice(0, count);
}

export function findByPath(models: Model[], segments: string[]): Model | undefined {
  const path = `${CATALOGUE_PATH}/${segments.map(decodeURIComponent).join("/")}`;
  return models.find((m) => m.path === path);
}

export function modelsUnder(models: Model[], segments: string[]): Model[] {
  const prefix = `${CATALOGUE_PATH}/${segments.join("/")}/`;
  return models.filter((m) => m.path.startsWith(prefix));
}

/** Toutes les adresses intermédiaires (marques, gammes) qui regroupent plusieurs fiches. */
export function groupPaths(models: Model[]): string[][] {
  const seen = new Set<string>();
  const groups: string[][] = [];
  for (const m of models) {
    for (let i = 1; i < m.segments.length; i++) {
      const seg = m.segments.slice(0, i);
      const key = seg.join("/");
      if (!seen.has(key)) {
        seen.add(key);
        groups.push(seg);
      }
    }
  }
  return groups;
}

export function brandCounts(models: Model[]): { brand: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const m of models) counts.set(m.brand, (counts.get(m.brand) ?? 0) + 1);
  return Array.from(counts.entries())
    .map(([brand, count]) => ({ brand, count }))
    .sort((a, b) => b.count - a.count || a.brand.localeCompare(b.brand));
}

export function minPrice(models: Model[]): number | null {
  const prices = models.map((m) => m.price).filter((p): p is number => !!p);
  return prices.length ? Math.min(...prices) : null;
}

export function keySpecs(m: Model, limit = 6): Spec[] {
  const wanted = [/puissance/i, /couple/i, /acc[ée]l[ée]ration|0 ?[àa] ?100/i, /autonomie/i, /batterie/i, /moteur/i, /places/i, /garde au sol/i, /transmission|bo[iî]te/i];
  // Les fiches mêlent valeurs courtes (« 610 Nm ») et phrases entières : seules les valeurs courtes vont dans le tableau.
  const short = m.specs.filter((sp) => sp.value.length <= 60);
  const picked: Spec[] = [];
  for (const re of wanted) {
    const s = short.find((sp) => re.test(sp.label) && !picked.includes(sp));
    if (s) picked.push(s);
    if (picked.length >= limit) break;
  }
  return picked;
}

/** Version allégée pour les listes : sans le texte des fiches, envoyé au navigateur. */
export function forListing(list: Model[]): Model[] {
  return list.map((m) => ({ ...m, sections: [], specs: [], images: m.images.slice(0, 1) }));
}

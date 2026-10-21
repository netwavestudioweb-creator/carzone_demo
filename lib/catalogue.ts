import raw from "@/data/catalogue.json";
import { CATALOGUE_PATH, type Model, type Spec } from "@/lib/model";

export * from "@/lib/model";

// Fiches vides sur l'ancien site : elles restent hors catalogue tant qu'elles ne sont pas complétées.
export const models: Model[] = (raw as Model[]).filter((m) => m.hasContent);

export function findByPath(segments: string[]): Model | undefined {
  const path = `${CATALOGUE_PATH}/${segments.join("/")}`;
  return models.find((m) => m.path === path);
}

export function modelsUnder(segments: string[]): Model[] {
  const prefix = `${CATALOGUE_PATH}/${segments.join("/")}/`;
  return models.filter((m) => m.path.startsWith(prefix));
}

/** Toutes les adresses intermédiaires (marques, gammes) qui regroupent plusieurs fiches. */
export function groupPaths(): string[][] {
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

export function brandCounts(): { brand: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const m of models) counts.set(m.brand, (counts.get(m.brand) ?? 0) + 1);
  return Array.from(counts.entries())
    .map(([brand, count]) => ({ brand, count }))
    .sort((a, b) => b.count - a.count || a.brand.localeCompare(b.brand));
}

export function minPrice(): number | null {
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

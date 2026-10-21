"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import CarCard from "@/components/CarCard";
import { budgets, type Model } from "@/lib/model";

const ENGINES = ["Essence", "Diesel", "Hybride", "Hybride rechargeable", "Hybride à prolongateur", "Électrique"];
const TYPES = ["SUV", "Berline", "Monospace", "Pick-up"];
const SORTS = [
  { id: "", label: "Prix croissant" },
  { id: "prix-desc", label: "Prix décroissant" },
  { id: "nom", label: "Nom (A–Z)" },
];

function toggle(list: string[], value: string) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

export default function CatalogueBrowser({ models, title, intro }: { models: Model[]; title: string; intro?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);

  const budget = params.get("budget") ?? "";
  const brands = params.getAll("marque");
  const engines = params.getAll("moteur");
  const types = params.getAll("type");
  const places = params.get("places") ?? "";
  const q = params.get("q") ?? "";
  const sort = params.get("tri") ?? "";

  function update(changes: Record<string, string | string[]>) {
    const next = new URLSearchParams(params.toString());
    for (const [key, value] of Object.entries(changes)) {
      next.delete(key);
      for (const v of Array.isArray(value) ? value : [value]) if (v) next.append(key, v);
    }
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  const matches = (m: Model, skip?: string) => {
    const b = budgets.find((x) => x.id === budget);
    if (skip !== "budget" && b && !(m.price && m.price >= b.min && m.price < b.max)) return false;
    if (skip !== "marque" && brands.length && !brands.includes(m.brand)) return false;
    if (skip !== "moteur" && engines.length && !engines.includes(m.engine)) return false;
    if (skip !== "type" && types.length && !types.includes(m.category)) return false;
    if (skip !== "places" && places === "5" && m.seats !== 5) return false;
    if (skip !== "places" && places === "6+" && !(m.seats && m.seats >= 6)) return false;
    if (q) {
      const hay = `${m.brand} ${m.subBrand ?? ""} ${m.name}`.toLowerCase();
      if (!q.toLowerCase().split(/\s+/).every((w) => hay.includes(w))) return false;
    }
    return true;
  };

  const results = useMemo(() => {
    const list = models.filter((m) => matches(m));
    return list.sort((a, b) => {
      if (sort === "nom") return `${a.brand} ${a.name}`.localeCompare(`${b.brand} ${b.name}`);
      const pa = a.price ?? Infinity;
      const pb = b.price ?? Infinity;
      if (sort === "prix-desc") return (b.price ?? -1) - (a.price ?? -1);
      return pa - pb;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [models, params]);

  const count = (key: string, test: (m: Model) => boolean) => models.filter((m) => matches(m, key) && test(m)).length;
  const brandList = Array.from(new Set(models.map((m) => m.brand))).sort();
  const active = budget || brands.length || engines.length || types.length || places || q;

  const chip = (on: boolean) =>
    `rounded-full border-[1.5px] px-3.5 py-2 text-[13.5px] font-medium transition-colors ${on ? "border-cz-yellow bg-cz-yellow text-cz-dark" : "border-cz-line bg-white hover:border-cz-gold"}`;

  const check = "h-4 w-4 shrink-0 accent-[#CC9000]";

  return (
    <div>
      <div className="border-b border-cz-line">
        <div className="wrap grid gap-4 py-8">
          <h1 className="flex flex-wrap items-baseline gap-x-4 text-3xl font-extrabold sm:text-4xl">
            {title}
            <small className="font-mono text-sm font-normal text-cz-mute" aria-live="polite">
              {results.length} modèle{results.length > 1 ? "s" : ""} sur {models.length}
            </small>
          </h1>
          {intro && <p className="max-w-2xl text-cz-mute">{intro}</p>}
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Budget">
            <button type="button" className={chip(!budget)} aria-pressed={!budget} onClick={() => update({ budget: "" })}>
              Tous · {count("budget", () => true)}
            </button>
            {budgets.map((b) => (
              <button key={b.id} type="button" className={chip(budget === b.id)} aria-pressed={budget === b.id} onClick={() => update({ budget: budget === b.id ? "" : b.id })}>
                {b.label} · {count("budget", (m) => !!m.price && m.price >= b.min && m.price < b.max)}
              </button>
            ))}
            <label className="relative w-full sm:ml-auto sm:w-72">
              <span className="sr-only">Rechercher un modèle</span>
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-cz-mute" aria-hidden="true" />
              <input
                id="recherche-catalogue"
                type="search"
                defaultValue={q}
                onChange={(e) => update({ q: e.target.value })}
                placeholder="Rechercher un modèle, une marque…"
                className="w-full rounded-md border border-cz-line py-2.5 pl-9 pr-3 text-sm focus:border-cz-gold focus:outline-none"
              />
            </label>
          </div>
        </div>
      </div>

      <div className="wrap grid gap-8 py-8 lg:grid-cols-[230px_1fr]">
        <aside aria-label="Filtres" className="grid content-start gap-6">
          <div>
            <button
              type="button"
              onClick={() => setShowFilters((v) => !v)}
              aria-expanded={showFilters}
              aria-controls="filtres"
              className="btn btn-line w-full lg:hidden"
            >
              {showFilters ? "Masquer les filtres" : "Afficher les filtres"}
            </button>
            <div id="filtres" className={`${showFilters ? "grid" : "hidden"} mt-4 gap-6 lg:mt-0 lg:grid`}>
              {brandList.length > 1 && (
                <fieldset className="grid gap-2">
                  <legend className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.07em] text-cz-mute">Marque</legend>
                  {brandList.map((b) => (
                    <label key={b} className="flex items-center gap-2.5 text-sm">
                      <input type="checkbox" className={check} checked={brands.includes(b)} onChange={() => update({ marque: toggle(brands, b) })} />
                      {b}
                      <span className="ml-auto font-mono text-xs text-cz-mute">{count("marque", (m) => m.brand === b)}</span>
                    </label>
                  ))}
                </fieldset>
              )}
              <fieldset className="grid gap-2">
                <legend className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.07em] text-cz-mute">Motorisation</legend>
                {ENGINES.filter((e) => models.some((m) => m.engine === e)).map((e) => (
                  <label key={e} className="flex items-center gap-2.5 text-sm">
                    <input type="checkbox" className={check} checked={engines.includes(e)} onChange={() => update({ moteur: toggle(engines, e) })} />
                    {e}
                    <span className="ml-auto font-mono text-xs text-cz-mute">{count("moteur", (m) => m.engine === e)}</span>
                  </label>
                ))}
              </fieldset>
              <fieldset className="grid gap-2">
                <legend className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.07em] text-cz-mute">Type</legend>
                {TYPES.filter((t) => models.some((m) => m.category === t)).map((t) => (
                  <label key={t} className="flex items-center gap-2.5 text-sm">
                    <input type="checkbox" className={check} checked={types.includes(t)} onChange={() => update({ type: toggle(types, t) })} />
                    {t}
                    <span className="ml-auto font-mono text-xs text-cz-mute">{count("type", (m) => m.category === t)}</span>
                  </label>
                ))}
              </fieldset>
              <fieldset className="grid gap-2">
                <legend className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.07em] text-cz-mute">Places</legend>
                {[
                  { id: "5", label: "5 places" },
                  { id: "6+", label: "6 à 7 places" },
                ].map((p) => (
                  <label key={p.id} className="flex items-center gap-2.5 text-sm">
                    <input type="checkbox" className={check} checked={places === p.id} onChange={() => update({ places: places === p.id ? "" : p.id })} />
                    {p.label}
                  </label>
                ))}
              </fieldset>
            </div>
          </div>
        </aside>

        <section aria-label="Résultats" className="grid content-start gap-5">
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-cz-mute">
            {active ? (
              <button type="button" onClick={() => router.replace(pathname, { scroll: false })} className="inline-flex items-center gap-1 font-medium text-cz-ink hover:text-cz-gold-dark">
                <X className="h-4 w-4" aria-hidden="true" /> Effacer les filtres
              </button>
            ) : (
              <span>Les prix sont indiqués TTC en F CFA. Sans prix affiché : prix sur demande.</span>
            )}
            <label className="flex items-center gap-2">
              Trier :
              <select id="tri-catalogue" value={sort} onChange={(e) => update({ tri: e.target.value })} className="rounded-md border border-cz-line bg-white px-2 py-1.5 font-medium text-cz-ink">
                {SORTS.map((s) => (
                  <option key={s.id} value={s.id}>{s.label}</option>
                ))}
              </select>
            </label>
          </div>
          {results.length ? (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {results.map((m, i) => (
                <CarCard key={m.slug} model={m} priority={i < 3} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-cz-line p-10 text-center text-cz-mute">
              Aucun modèle ne correspond à ces critères.{" "}
              <button type="button" onClick={() => router.replace(pathname, { scroll: false })} className="font-medium text-cz-gold-dark underline">
                Effacer les filtres
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

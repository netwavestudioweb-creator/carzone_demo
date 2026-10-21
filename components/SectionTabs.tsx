"use client";

import { useState } from "react";
import type { Section } from "@/lib/model";

export default function SectionTabs({ sections }: { sections: Section[] }) {
  const tabs = sections.map((s, i) => ({ ...s, label: s.title ?? (i === 0 ? "Présentation" : `Partie ${i + 1}`) }));
  const [active, setActive] = useState(0);
  if (!tabs.length) return null;

  return (
    <div>
      <div role="tablist" aria-label="Détails du modèle" className="-mx-4 flex gap-0 overflow-x-auto border-b border-cz-line px-4 sm:mx-0 sm:px-0">
        {tabs.map((t, i) => (
          <button
            key={t.label + i}
            id={`onglet-${i}`}
            role="tab"
            type="button"
            aria-selected={i === active}
            aria-controls={`panneau-${i}`}
            onClick={() => setActive(i)}
            className={`shrink-0 whitespace-nowrap px-4 py-3 font-display text-sm font-semibold transition-colors ${i === active ? "text-cz-ink shadow-[inset_0_-2px_0_#CC9000]" : "text-cz-mute hover:text-cz-ink"}`}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t, i) => (
        <div key={t.label + i} id={`panneau-${i}`} role="tabpanel" aria-labelledby={`onglet-${i}`} hidden={i !== active} className="prose-cz max-w-4xl pt-6">
          {t.blocks.map((b, j) =>
            b.type === "p" ? (
              <p key={j}>{b.text}</p>
            ) : (
              <ul key={j}>
                {b.items.map((item, k) => (
                  <li key={k}>{item}</li>
                ))}
              </ul>
            ),
          )}
        </div>
      ))}
    </div>
  );
}

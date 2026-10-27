// Transfère data/catalogue.json et les photos de public/images/catalogue vers Sanity.
// À lancer une seule fois, après la création du projet Sanity :
//   node --env-file=.env.local scripts/seed-sanity.mjs
// Variables nécessaires : NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, SANITY_WRITE_TOKEN.
// Le script peut être relancé : chaque fiche garde le même identifiant (model-<slug>) et
// Sanity ne stocke qu'une fois une photo déjà envoyée.

import { createReadStream, readFileSync } from "node:fs";
import { randomUUID } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@sanity/client";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const { NEXT_PUBLIC_SANITY_PROJECT_ID: projectId, NEXT_PUBLIC_SANITY_DATASET: dataset = "production", SANITY_WRITE_TOKEN: token } = process.env;

if (!projectId || !token) {
  console.error("Renseignez NEXT_PUBLIC_SANITY_PROJECT_ID et SANITY_WRITE_TOKEN dans .env.local.");
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion: "2024-10-01", useCdn: false });

const FEATURED = ["jetour-2026-t-2-i-dm-2026", "byd-leopard-8", "changan-deepal-s09", "forthing-forthing-s7"];
const key = () => randomUUID().slice(0, 12);

function toPortableText(blocks) {
  const out = [];
  for (const b of blocks) {
    const items = b.type === "ul" ? b.items : [b.text];
    for (const text of items) {
      out.push({
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [{ _type: "span", _key: key(), text, marks: [] }],
        ...(b.type === "ul" && { listItem: "bullet", level: 1 }),
      });
    }
  }
  return out;
}

async function uploadImage(publicPath) {
  const file = path.join(ROOT, "public", publicPath);
  const asset = await client.assets.upload("image", createReadStream(file), { filename: path.basename(path.dirname(file)) + "-" + path.basename(file) });
  return { _type: "image", _key: key(), asset: { _type: "reference", _ref: asset._id } };
}

const models = JSON.parse(readFileSync(path.join(ROOT, "data", "catalogue.json"), "utf-8")).filter((m) => m.hasContent);
console.log(`${models.length} modèles à transférer vers ${projectId}/${dataset}`);

await client.createIfNotExists({
  _id: "settings",
  _type: "settings",
  phoneDisplay: "+229 01 92 62 62 62",
  whatsappDisplay: "+229 01 92 61 61 61",
  email: "contact@topcarzone.com",
  addressLine1: "Bâtiment de la Commission Béninoise des Droits de l'Homme",
  addressLine2: "St Michel Kétékété, Cotonou, Bénin",
});

let done = 0;
for (const m of models) {
  const images = [];
  for (const img of m.images) {
    try {
      images.push(await uploadImage(img));
    } catch (err) {
      console.warn(`  photo ignorée ${img} : ${err.message}`);
    }
  }
  await client.createOrReplace({
    _id: `model-${m.slug}`,
    _type: "model",
    name: m.name,
    brand: m.brand,
    subBrand: m.subBrand ?? undefined,
    tagline: m.tagline ?? undefined,
    price: m.price ?? undefined,
    warranty: m.warranty ?? undefined,
    engine: m.engine,
    category: m.category,
    seats: m.seats ?? undefined,
    featured: FEATURED.includes(m.slug),
    slug: { _type: "slug", current: m.segments[m.segments.length - 1] },
    legacyPath: m.path,
    images,
    specs: m.specs.map((s) => ({ _type: "spec", _key: key(), label: s.label, value: s.value })),
    sections: m.sections.map((s) => ({ _type: "section", _key: key(), title: s.title ?? undefined, body: toPortableText(s.blocks) })),
  });
  done += 1;
  console.log(`[${done}/${models.length}] ${m.brand} ${m.name} · ${images.length} photos`);
}

console.log("Terminé. Les fiches sont visibles dans /admin.");

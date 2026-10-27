import { defineArrayMember, defineField, defineType } from "sanity";
import { BRANDS } from "../brands";

const ENGINES = ["Essence", "Diesel", "Hybride", "Hybride rechargeable", "Hybride à prolongateur", "Électrique"];
const CATEGORIES = ["SUV", "Berline", "Monospace", "Pick-up"];

export const modelType = defineType({
  name: "model",
  title: "Modèle",
  type: "document",
  groups: [
    { name: "essentiel", title: "Essentiel", default: true },
    { name: "photos", title: "Photos" },
    { name: "fiche", title: "Fiche détaillée" },
    { name: "avance", title: "Avancé" },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Nom du modèle",
      description: "Tel qu'il apparaît sur le site, par exemple « Jetour T2 i-DM 2026 ».",
      type: "string",
      group: "essentiel",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "brand",
      title: "Marque",
      type: "string",
      group: "essentiel",
      options: { list: BRANDS.map(({ title, value }) => ({ title, value })) },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "subBrand",
      title: "Sous-marque (facultatif)",
      description: "Par exemple Deepal ou Kaicene pour Changan.",
      type: "string",
      group: "essentiel",
    }),
    defineField({
      name: "tagline",
      title: "Accroche",
      description: "Une phrase courte, par exemple « L'aventure passe à l'hybride rechargeable ».",
      type: "string",
      group: "essentiel",
    }),
    defineField({
      name: "price",
      title: "Prix (F CFA)",
      description: "Chiffres uniquement, par exemple 26000000. Laissez vide pour afficher « Prix sur demande ».",
      type: "number",
      group: "essentiel",
      validation: (r) => r.min(1_000_000).max(500_000_000).warning("Vérifiez le prix : il semble anormal."),
    }),
    defineField({
      name: "warranty",
      title: "Garantie",
      type: "string",
      group: "essentiel",
      initialValue: "3 ans ou 100 000 km",
    }),
    defineField({
      name: "engine",
      title: "Motorisation",
      type: "string",
      group: "essentiel",
      options: { list: ENGINES, layout: "radio" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Type",
      type: "string",
      group: "essentiel",
      options: { list: CATEGORIES, layout: "radio", direction: "horizontal" },
      initialValue: "SUV",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "seats",
      title: "Nombre de places",
      type: "number",
      group: "essentiel",
      validation: (r) => r.min(2).max(9).integer(),
    }),
    defineField({
      name: "featured",
      title: "Mettre en avant sur l'accueil",
      description: "Les 4 premiers modèles cochés apparaissent dans « Nouveautés 2026 ».",
      type: "boolean",
      group: "essentiel",
      initialValue: false,
    }),
    defineField({
      name: "images",
      title: "Photos",
      description: "La première photo sert de vignette dans le catalogue. Glissez-déposez pour changer l'ordre.",
      type: "array",
      group: "photos",
      of: [defineArrayMember({ type: "image", options: { hotspot: true } })],
      validation: (r) => r.min(1).error("Ajoutez au moins une photo."),
    }),
    defineField({
      name: "specs",
      title: "Caractéristiques",
      description: "Une ligne par caractéristique, par exemple « Puissance » et « 375 ch ».",
      type: "array",
      group: "fiche",
      of: [
        defineArrayMember({
          type: "object",
          name: "spec",
          fields: [
            defineField({ name: "label", title: "Libellé", type: "string", validation: (r) => r.required() }),
            defineField({ name: "value", title: "Valeur", type: "string", validation: (r) => r.required() }),
          ],
          preview: { select: { title: "label", subtitle: "value" } },
        }),
      ],
    }),
    defineField({
      name: "sections",
      title: "Sections de la fiche",
      description: "Chaque section devient un onglet sur la fiche du modèle.",
      type: "array",
      group: "fiche",
      of: [
        defineArrayMember({
          type: "object",
          name: "section",
          fields: [
            defineField({ name: "title", title: "Titre de l'onglet", type: "string" }),
            defineField({
              name: "body",
              title: "Contenu",
              type: "array",
              of: [
                defineArrayMember({
                  type: "block",
                  styles: [{ title: "Paragraphe", value: "normal" }],
                  lists: [{ title: "Liste à puces", value: "bullet" }],
                  marks: { decorators: [{ title: "Gras", value: "strong" }], annotations: [] },
                }),
              ],
            }),
          ],
          preview: { select: { title: "title" }, prepare: ({ title }) => ({ title: title || "Présentation" }) },
        }),
      ],
    }),
    defineField({
      name: "slug",
      title: "Adresse de la page",
      description: "Générée à partir du nom. Ne la changez pas une fois la fiche publiée.",
      type: "slug",
      group: "avance",
      options: { source: "name", maxLength: 80 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "legacyPath",
      title: "Adresse de l'ancien site",
      description: "Rempli automatiquement pour les fiches reprises de l'ancien site, afin de garder la même adresse.",
      type: "string",
      group: "avance",
      readOnly: true,
    }),
  ],
  orderings: [
    { title: "Marque puis nom", name: "brandName", by: [{ field: "brand", direction: "asc" }, { field: "name", direction: "asc" }] },
    { title: "Prix croissant", name: "priceAsc", by: [{ field: "price", direction: "asc" }] },
  ],
  preview: {
    select: { title: "name", brand: "brand", price: "price", media: "images.0" },
    prepare: ({ title, brand, price, media }) => ({
      title,
      subtitle: `${brand ?? ""} · ${price ? `${Number(price).toLocaleString("fr-FR")} F CFA` : "Prix sur demande"}`,
      media,
    }),
  },
});

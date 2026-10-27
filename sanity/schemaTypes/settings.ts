import { defineField, defineType } from "sanity";

export const settingsType = defineType({
  name: "settings",
  title: "Coordonnées du showroom",
  type: "document",
  fields: [
    defineField({ name: "phoneDisplay", title: "Téléphone (affiché)", type: "string", initialValue: "+229 01 92 62 62 62" }),
    defineField({
      name: "whatsappDisplay",
      title: "WhatsApp (affiché)",
      description: "Le numéro utilisé pour les liens WhatsApp est déduit de celui-ci.",
      type: "string",
      initialValue: "+229 01 92 61 61 61",
    }),
    defineField({ name: "email", title: "E-mail", type: "string", initialValue: "contact@topcarzone.com" }),
    defineField({ name: "addressLine1", title: "Adresse, ligne 1", type: "string", initialValue: "Bâtiment de la Commission Béninoise des Droits de l'Homme" }),
    defineField({ name: "addressLine2", title: "Adresse, ligne 2", type: "string", initialValue: "St Michel Kétékété, Cotonou, Bénin" }),
  ],
  preview: { prepare: () => ({ title: "Coordonnées du showroom" }) },
});

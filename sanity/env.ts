// Projet Sanity de CARZONE. Tant que NEXT_PUBLIC_SANITY_PROJECT_ID est vide,
// le site lit data/catalogue.json (données importées de l'ancien site).
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2024-10-01";

export const isSanityConfigured = projectId.length > 0;

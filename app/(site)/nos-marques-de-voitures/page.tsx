import type { Metadata } from "next";
import { Suspense } from "react";
import CatalogueBrowser from "@/components/CatalogueBrowser";
import { forListing, getContact, getModels } from "@/lib/catalogue";

export async function generateMetadata(): Promise<Metadata> {
  const models = await getModels();
  return {
    title: "Nos marques de voitures",
    description: `Catalogue CARZONE : ${models.length} modèles 2026 BAIC, BYD, Changan, Jetour, Forthing… avec prix en F CFA et garantie 3 ans. Recherche par budget, marque et motorisation.`,
    alternates: { canonical: "/nos-marques-de-voitures" },
  };
}

export default async function CataloguePage() {
  const [models, contact] = await Promise.all([getModels(), getContact()]);
  return (
    <Suspense>
      <CatalogueBrowser
        models={forListing(models)}
        whatsapp={contact.whatsappDisplay}
        title="Notre catalogue"
        intro="Les meilleures voitures produites en Chine : marques chinoises, européennes, asiatiques et américaines, en thermique, hybride ou 100 % électrique."
      />
    </Suspense>
  );
}

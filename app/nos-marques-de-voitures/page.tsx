import type { Metadata } from "next";
import { Suspense } from "react";
import CatalogueBrowser from "@/components/CatalogueBrowser";
import { forListing, models } from "@/lib/catalogue";

export const metadata: Metadata = {
  title: "Nos marques de voitures",
  description: `Catalogue CARZONE : ${models.length} modèles 2026 BAIC, BYD, Changan, Jetour, Forthing… avec prix en F CFA et garantie 3 ans. Recherche par budget, marque et motorisation.`,
  alternates: { canonical: "/nos-marques-de-voitures" },
};

export default function CataloguePage() {
  return (
    <Suspense>
      <CatalogueBrowser
        models={forListing(models)}
        title="Notre catalogue"
        intro="Les meilleures voitures produites en Chine : marques chinoises, européennes, asiatiques et américaines, en thermique, hybride ou 100 % électrique."
      />
    </Suspense>
  );
}

import type { Metadata } from "next";
import Header from "@/components/Header";
import DigitalCatalog from "@/components/DigitalCatalog";
import FooterContact from "@/components/FooterContact";

export const metadata: Metadata = {
  title: "Catalogue 2025 | Showroom Digital CARZONE Bénin",
  description:
    "Explorez le catalogue officiel 2025 des véhicules neufs, hybrides et électriques CARZONE au Bénin : BYD, Jetour, Changan, Hongqi, Zeekr, Mercedes-Benz.",
};

export default function CataloguePage() {
  return (
    <main className="relative min-h-screen bg-[#0D0D0D] text-[#A1A1AA] overflow-hidden">
      <Header />
      <div className="pt-16">
        <DigitalCatalog />
      </div>
      <FooterContact />
    </main>
  );
}

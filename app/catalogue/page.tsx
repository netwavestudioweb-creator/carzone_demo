import Header from "@/components/Header";
import DigitalCatalog from "@/components/DigitalCatalog";
import SimpleFooter from "@/components/SimpleFooter";

export const metadata = {
  title: 'Catalogue - CarZone Bénin',
  description: 'Découvrez notre catalogue de véhicules premium et électriques à Cotonou.',
};

export default function CataloguePage() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-[#E4E4E7] overflow-hidden">
      <Header />
      <div className="pt-24">
        <DigitalCatalog />
      </div>
      <SimpleFooter />
    </main>
  );
}

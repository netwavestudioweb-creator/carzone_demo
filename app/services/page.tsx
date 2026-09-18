import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import SimpleFooter from "@/components/SimpleFooter";

export const metadata = {
  title: 'Services - CarZone Bénin',
  description: 'Nos services sur-mesure pour l\'importation et l\'entretien de véhicules premium.',
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-[#E4E4E7] overflow-hidden">
      <Header />
      <div className="pt-24">
        <ServicesSection />
      </div>
      <SimpleFooter />
    </main>
  );
}

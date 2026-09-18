import Header from "@/components/Header";
import { ExperienceSection } from "@/components/Experience";
import AboutSection from "@/components/AboutSection";
import SimpleFooter from "@/components/SimpleFooter";

export const metadata = {
  title: 'À Propos - CarZone Bénin',
  description: 'Découvrez l\'histoire de CarZone et notre parcours d\'accompagnement VIP.',
};

export default function AProposPage() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-[#E4E4E7] overflow-hidden">
      <Header />
      <div className="pt-24">
        <AboutSection />
        <ExperienceSection />
      </div>
      <SimpleFooter />
    </main>
  );
}

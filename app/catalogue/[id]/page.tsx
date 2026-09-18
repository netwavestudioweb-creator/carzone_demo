import { carsInventory } from "@/data/carsData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Zap, Shield, CheckCircle2, Calendar } from "lucide-react";
import SimpleFooter from "@/components/SimpleFooter";
import Header from "@/components/Header";

// Generate static params for all cars to ensure fast SSR/SSG
export async function generateStaticParams() {
  return carsInventory.map((car) => ({
    id: car.id,
  }));
}

export default function CarDetailPage({ params }: { params: { id: string } }) {
  const car = carsInventory.find((c) => c.id === params.id);

  if (!car) {
    notFound();
  }

  return (
    <main className="bg-[#0B0D14] min-h-screen text-white">
      <Header />
      
      {/* HERO SECTION DU VÉHICULE */}
      <section className="relative pt-32 pb-20 px-6 lg:h-[80vh] flex items-center border-b border-white/5">
        {/* Glow dynamique basé sur la marque */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B0D14] z-10" />
        
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            fill
            className="object-cover opacity-60 object-center"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-20 flex flex-col justify-end h-full">
          <Link href="/catalogue" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8 text-xs font-bold uppercase tracking-widest w-fit">
            <ArrowLeft className="w-4 h-4" />
            Retour au Catalogue
          </Link>
          
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] font-semibold tracking-widest text-[#E5C158] uppercase mb-4 w-fit backdrop-blur-md">
            <span>{car.category} • {car.engine}</span>
          </div>
          
          <h1 className="font-syne text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-4">
            <span className="text-[#E5C158]">{car.brand}</span> <br/>
            {car.model}
          </h1>
          
          <div className="flex items-center gap-6 mt-8">
            <a href="#reservation" className="px-8 py-4 bg-[#E5C158] text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white transition-colors">
              Réserver ce véhicule
            </a>
          </div>
        </div>
      </section>

      {/* DÉTAILS TECHNIQUES */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Colonne de gauche (Description) */}
          <div className="lg:col-span-8">
            <h2 className="font-syne text-3xl font-bold mb-8">L'Expérience {car.brand}</h2>
            <p className="text-white/60 leading-relaxed font-light text-lg mb-12">
              {car.description}
            </p>
            
            <h3 className="font-syne text-2xl font-bold mb-6">Équipements & Options Premium</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {car.features?.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-[#E5C158] shrink-0" />
                  <span className="text-sm font-light text-white/80">{feature}</span>
                </div>
              ))}
            </div>

            {/* Galerie Photos (Si disponible) */}
            {car.gallery && car.gallery.length > 0 && (
              <div className="mt-16">
                <h3 className="font-syne text-2xl font-bold mb-6">Galerie</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {car.gallery.map((img, idx) => (
                    <div key={idx} className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                      <Image src={img} alt={`Galerie ${idx}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Colonne de droite (Fiche technique) */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <h3 className="font-syne text-xl font-bold mb-8 flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#E5C158]" />
                Fiche Technique
              </h3>
              
              <div className="space-y-6">
                <div className="flex flex-col border-b border-white/10 pb-4">
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Puissance (Moteur)</span>
                  <span className="text-lg font-medium">{car.power || "N/A"}</span>
                </div>
                <div className="flex flex-col border-b border-white/10 pb-4">
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Accélération</span>
                  <span className="text-lg font-medium flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#E5C158]" /> {car.acceleration || "N/A"}
                  </span>
                </div>
                <div className="flex flex-col border-b border-white/10 pb-4">
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Transmission</span>
                  <span className="text-lg font-medium">{car.transmission || "N/A"}</span>
                </div>
                <div className="flex flex-col border-b border-white/10 pb-4">
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Places & Année</span>
                  <span className="text-lg font-medium">{car.seats} Places • {car.year}</span>
                </div>
              </div>

              <div id="reservation" className="mt-12">
                <p className="text-xs text-white/50 mb-4 font-light text-center">
                  Ce véhicule est actuellement <strong className="text-white">{car.status}</strong>. Prenez rendez-vous pour une présentation privée.
                </p>
                <a href="https://wa.me/22900000000" target="_blank" className="flex items-center justify-center gap-3 w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-[#E5C158] transition-colors">
                  <Calendar className="w-4 h-4" />
                  Prendre Rendez-vous
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <SimpleFooter />
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Car, ClipboardList, KeyRound, Wrench, Cog } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nos services",
  description: "Vente de véhicules neufs et d'occasion, commande sur mesure, pièces de rechange d'origine, maintenance et location à Cotonou.",
  alternates: { canonical: "/nos-services" },
};

const SERVICES = [
  {
    id: "vente",
    icon: Car,
    title: "Vente de véhicules",
    text: "Vente de véhicules neufs et d'occasion : sélection, conseil et présentation des modèles, essais sur route, commande, préparation et livraison du véhicule.",
    message: "Bonjour CARZONE, je souhaite acheter un véhicule.",
  },
  {
    id: "commande",
    icon: ClipboardList,
    title: "Commande sur mesure",
    text: "Commandez votre voiture avec vos couleurs intérieures et extérieures préférées, et des options adaptées à votre goût et à votre budget.",
    message: "Bonjour CARZONE, je souhaite commander un véhicule sur mesure.",
  },
  {
    id: "pieces",
    icon: Cog,
    title: "Pièces de rechange",
    text: "Pièces d'origine garanties, adaptées à tous nos modèles. Un service rapide et fiable pour l'entretien et la réparation de votre véhicule.",
    message: "Bonjour CARZONE, je cherche une pièce de rechange.",
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance",
    text: "Entretien et réparations, révisions périodiques, vidanges, remplacement de pièces, diagnostic électronique, carrosserie et peinture.",
    message: "Bonjour CARZONE, je souhaite prendre rendez-vous pour l'entretien de mon véhicule.",
  },
  {
    id: "location",
    icon: KeyRound,
    title: "Location de voitures",
    // Texte provisoire : celui du site actuel reprenait par erreur la description de la maintenance.
    text: "Location de véhicules de notre gamme, pour un besoin ponctuel ou professionnel. Disponibilités et conditions sur demande auprès de nos conseillers.",
    message: "Bonjour CARZONE, je souhaite louer un véhicule.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-cz-line">
        <div className="wrap grid gap-4 py-10 sm:py-14">
          <span className="kicker">Nos services</span>
          <h1 className="max-w-3xl text-3xl font-extrabold sm:text-4xl">Un seul interlocuteur, de l&apos;achat à l&apos;entretien</h1>
          <p className="max-w-2xl text-cz-mute">
            Des services adaptés à vos besoins, avec des solutions efficaces et pratiques, au showroom de St Michel comme à distance.
          </p>
        </div>
      </section>
      <section className="wrap grid gap-5 py-10 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <article key={s.id} id={s.id} className="grid content-between gap-5 rounded-lg border border-cz-line p-6">
            <div className="grid gap-3">
              <s.icon className="h-7 w-7 text-cz-gold" aria-hidden="true" />
              <h2 className="text-xl font-bold">{s.title}</h2>
              <p className="text-[15px] text-cz-mute">{s.text}</p>
            </div>
            <a href={whatsappLink(s.message)} target="_blank" rel="noopener" className="btn btn-wa w-fit">
              <WhatsAppIcon /> En parler sur WhatsApp
            </a>
          </article>
        ))}
        <article className="grid content-between gap-5 rounded-lg bg-cz-dark p-6 text-white">
          <div className="grid gap-3">
            <h2 className="text-xl font-bold !text-white">L&apos;engagement CARZONE</h2>
            <p className="text-[15px] text-[#CFCAC0]">
              Des services personnalisés, une transparence totale sur les prix et les délais, et un suivi après la livraison.
            </p>
          </div>
          <Link href="/contactez-nous#devis" className="btn btn-yellow w-fit">Demander un devis</Link>
        </article>
      </section>
    </>
  );
}

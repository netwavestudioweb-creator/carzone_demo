import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CATALOGUE_PATH } from "@/lib/catalogue";

export const metadata: Metadata = {
  title: "Qui sommes-nous ?",
  description: "CARZONE rend accessibles à tous, en toute confiance, les voitures chinoises et multi-marques de dernière génération. Showroom à St Michel, Cotonou.",
  alternates: { canonical: "/qui-sommes-nous" },
};

const STRENGTHS = [
  { title: "Une expertise de niche", text: "Les voitures produites en Chine, marques chinoises comme européennes, asiatiques et américaines." },
  { title: "Une offre clé en main", text: "Importation, homologation, mise en conformité, immatriculation et livraison." },
  { title: "Un après-vente fiable", text: "Pièces d'origine, entretien et réparations assurés par nos équipes." },
  { title: "Des prix transparents", text: "Prix compétitifs grâce à une logistique optimisée, et solutions de financement sur mesure." },
];

const WELCOME = [
  { title: "Une première impression soignée", text: "Un accueil chaleureux et un espace d'attente confortable : café, eau, Wi-Fi, brochures." },
  { title: "Une écoute personnalisée", text: "Nos conseillers prennent le temps de comprendre votre budget, votre usage et vos préférences." },
  { title: "Une présentation claire", text: "Les modèles sont exposés dans un espace propre et organisé, avec un essai sur route." },
  { title: "Un accompagnement fluide", text: "Financement, immatriculation, reprise : chaque démarche est expliquée et simplifiée." },
  { title: "Une livraison mémorable", text: "Présentation des fonctionnalités du véhicule, puis un suivi personnalisé après votre visite." },
];

const TEAM = [
  { name: "Carine Zogo", role: "Business Development Manager", image: "/images/team/carine-zogo.png" },
  { name: "Fernand Falade", role: "Sales Engineer", image: "/images/team/fernand-falade.jpg" },
  { name: "Clotilde Toviazon", role: "Sales Engineer", image: "/images/team/clotilde-toviazon.jpg" },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-cz-line">
        <div className="wrap grid gap-4 py-10 sm:py-14">
          <span className="kicker">Qui sommes-nous ?</span>
          <h1 className="max-w-3xl text-3xl font-extrabold sm:text-4xl">L&apos;avenir de l&apos;automobile, en toute confiance</h1>
          <p className="max-w-2xl text-lg text-cz-mute">
            CARZONE rend accessibles à tous les voitures chinoises et multi-marques fabriquées en Chine, de dernière génération.
            Nous vous accompagnons de l&apos;importation à la livraison clé en main, avec transparence, expertise et un service après-vente de qualité.
          </p>
        </div>
      </section>

      <section className="wrap grid gap-6 py-12">
        <h2 className="text-2xl font-extrabold">Ce qui nous différencie</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STRENGTHS.map((s) => (
            <div key={s.title} className="grid content-start gap-2 border-t-2 border-cz-gold pt-4">
              <h3 className="font-bold">{s.title}</h3>
              <p className="text-sm text-cz-mute">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cz-soft">
        <div className="wrap grid gap-6 py-12">
          <h2 className="text-2xl font-extrabold">Votre accueil chez CARZONE</h2>
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {WELCOME.map((w, i) => (
              <li key={w.title} className="grid content-start gap-2">
                <span className="font-display text-3xl font-extrabold text-cz-gold">{i + 1}</span>
                <b className="font-display">{w.title}</b>
                <span className="text-sm text-cz-mute">{w.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wrap grid gap-6 py-12">
        <h2 className="text-2xl font-extrabold">L&apos;équipe</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {TEAM.map((t) => (
            <figure key={t.name} className="grid gap-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-cz-soft">
                <Image src={t.image} alt={t.name} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover object-top" />
              </div>
              <figcaption>
                <b className="font-display text-lg">{t.name}</b>
                <span className="block text-sm text-cz-mute">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <Link href={CATALOGUE_PATH} className="btn btn-yellow mt-4 w-fit">Découvrir nos modèles</Link>
      </section>
    </>
  );
}

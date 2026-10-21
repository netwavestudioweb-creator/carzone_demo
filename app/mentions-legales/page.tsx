import type { Metadata } from "next";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales et données personnelles",
  robots: { index: false },
};

export default function LegalPage() {
  return (
    <div className="wrap grid max-w-3xl gap-8 py-12">
      <h1 className="text-3xl font-extrabold">Mentions légales et données personnelles</h1>
      <p className="rounded-md bg-[#FBF0DF] p-4 text-sm text-[#7A4B00]">
        Page à compléter avec CARZONE : raison sociale, numéro RCCM, IFU, nom du directeur de la publication et hébergeur.
      </p>
      <section className="grid gap-2">
        <h2 className="text-xl font-bold">Éditeur du site</h2>
        <p className="text-cz-mute">
          CARZONE Bénin, {contact.addressLine1}, {contact.addressLine2}. Téléphone : {contact.phoneDisplay}. E-mail : {contact.email}.
        </p>
      </section>
      <section className="grid gap-2">
        <h2 className="text-xl font-bold">Données personnelles</h2>
        <p className="text-cz-mute">
          Les informations envoyées par le formulaire de devis (nom, numéro WhatsApp, e-mail, modèle souhaité, message) servent
          uniquement à répondre à votre demande. Elles ne sont ni vendues ni cédées à des tiers.
        </p>
        <p className="text-cz-mute">
          Conformément au Code du numérique du Bénin, vous pouvez demander l&apos;accès, la rectification ou la suppression de vos données
          en écrivant à {contact.email}. Vous pouvez aussi saisir l&apos;Autorité de Protection des Données à caractère Personnel (APDP).
        </p>
      </section>
      <section className="grid gap-2">
        <h2 className="text-xl font-bold">Prix et caractéristiques</h2>
        <p className="text-cz-mute">
          Les prix sont indiqués en F CFA à titre indicatif et peuvent évoluer. Les caractéristiques sont communiquées par les constructeurs.
          Seul le devis remis par nos conseillers fait foi.
        </p>
      </section>
    </div>
  );
}

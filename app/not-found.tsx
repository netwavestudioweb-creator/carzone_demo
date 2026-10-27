import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CATALOGUE_PATH, getContact } from "@/lib/catalogue";

export default async function NotFound() {
  const contact = await getContact();
  return (
    <>
      <Header contact={contact} />
      <main id="contenu" className="wrap grid justify-items-start gap-4 py-20">
        <span className="kicker">Erreur 404</span>
        <h1 className="text-3xl font-extrabold">Cette page n&apos;existe pas ou plus</h1>
        <p className="text-cz-mute">Le modèle que vous cherchez a peut-être changé d&apos;adresse. Retrouvez-le dans le catalogue.</p>
        <div className="flex flex-wrap gap-3">
          <Link href={CATALOGUE_PATH} className="btn btn-yellow">Voir le catalogue</Link>
          <Link href="/" className="btn btn-line">Retour à l&apos;accueil</Link>
        </div>
      </main>
      <Footer contact={contact} />
    </>
  );
}

import Link from "next/link";
import { CATALOGUE_PATH } from "@/lib/catalogue";

export default function NotFound() {
  return (
    <div className="wrap grid justify-items-start gap-4 py-20">
      <span className="kicker">Erreur 404</span>
      <h1 className="text-3xl font-extrabold">Cette page n&apos;existe pas ou plus</h1>
      <p className="text-cz-mute">Le modèle que vous cherchez a peut-être changé d&apos;adresse. Retrouvez-le dans le catalogue.</p>
      <div className="flex flex-wrap gap-3">
        <Link href={CATALOGUE_PATH} className="btn btn-yellow">Voir le catalogue</Link>
        <Link href="/" className="btn btn-line">Retour à l&apos;accueil</Link>
      </div>
    </div>
  );
}

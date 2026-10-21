import Image from "next/image";
import Link from "next/link";
import CarCard from "@/components/CarCard";
import ContactForm from "@/components/ContactForm";
import { WhatsAppIcon } from "@/components/icons";
import { brandCounts, CATALOGUE_PATH, displayName, formatPrice, minPrice, models } from "@/lib/catalogue";
import { contact, whatsappLink } from "@/lib/site";

const FEATURED = [
  "jetour-2026-t-2-i-dm-2026",
  "byd-leopard-8",
  "changan-deepal-s09",
  "forthing-forthing-s7",
  "baic-baic-b30e-baic-b30e-standard-lv3-suv-hybride-5-places",
  "forthing-forthing-v9-hev",
  "byd-byd-song-plus-2026",
  "toyota-toyota-land-cruiser-prado",
];

const STEPS = [
  { title: "Accueil et conseil", text: "Au showroom ou sur WhatsApp : budget, usage, préférences, essai sur route." },
  { title: "Commande sur mesure", text: "Couleurs intérieures et extérieures, options et solution de financement." },
  { title: "Importation", text: "Homologation, transport et dédouanement pris en charge par CARZONE." },
  { title: "Livraison clé en main", text: "Immatriculation, présentation du véhicule et suivi des entretiens." },
];

export default function Home() {
  const featured = FEATURED.map((slug) => models.find((m) => m.slug === slug)).filter((m) => m !== undefined).slice(0, 4);
  const hero = models.find((m) => m.slug === "jetour-2026-t-2-i-dm-2026");
  const brands = brandCounts();
  const from = minPrice();

  return (
    <>
      <section className="grid lg:grid-cols-[5fr_7fr]">
        <div className="wrap grid content-center gap-5 py-10 lg:max-w-none lg:py-16 lg:pl-10 lg:pr-10 xl:pl-[max(2.5rem,calc((100vw-1240px)/2+2.5rem))]">
          <span className="kicker">CARZONE · Drive your dream</span>
          <h1 className="text-[34px] font-extrabold leading-[1.06] sm:text-5xl">
            La maison des voitures <span className="text-cz-gold">chinoises et multi-marques</span> au Bénin.
          </h1>
          <p className="max-w-xl text-[16.5px] text-cz-mute">
            BAIC, BYD, Changan, Jetour, Forthing… {models.length} modèles 2026
            {from ? ` à partir de ${formatPrice(from)}` : ""}, de l&apos;importation à la livraison clé en main.
            Garantie 3 ans ou 100 000 km.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href={CATALOGUE_PATH} className="btn btn-yellow px-6 py-4 text-[15px]">Voir les {models.length} modèles</Link>
            <a href={whatsappLink()} target="_blank" rel="noopener" className="btn btn-wa px-6 py-4 text-[15px]">
              <WhatsAppIcon /> {contact.whatsappDisplay}
            </a>
          </div>
        </div>
        <div className="relative min-h-[240px] sm:min-h-[360px] lg:min-h-[520px]">
          <Image
            src="/images/models/jetour-traveller-t2.jpg"
            alt="Jetour T2 traversant une rivière"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover"
          />
          {hero && (
            <Link
              href={hero.path}
              className="absolute bottom-4 left-4 grid grid-cols-[auto_1fr] overflow-hidden rounded-md bg-white shadow-[0_8px_28px_rgba(0,0,0,0.22)] sm:bottom-6 sm:left-6"
            >
              <span className="grid place-content-center bg-cz-yellow px-3 text-center font-mono text-[11px] font-medium leading-tight text-cz-dark">NOU-<br />VEAU<br />2026</span>
              <span className="grid gap-0.5 px-4 py-2.5">
                <b className="font-display text-base font-extrabold sm:text-lg">{displayName(hero)}</b>
                <span className="font-mono text-xs text-cz-mute">{hero.engine} · {formatPrice(hero.price)}</span>
              </span>
            </Link>
          )}
        </div>
      </section>

      <section aria-label="CARZONE en chiffres" className="border-y border-cz-line">
        <div className="wrap grid grid-cols-2 lg:grid-cols-4">
          {[
            { value: String(models.length), label: "modèles au catalogue" },
            { value: String(brands.length), label: "marques représentées" },
            { value: from ? `${(from / 1_000_000).toLocaleString("fr-FR", { maximumFractionDigits: 1 })} M F CFA` : "—", label: "premier prix" },
            { value: "3 ans", label: "ou 100 000 km de garantie" },
          ].map((s, i) => (
            <div key={s.label} className={`grid gap-0.5 py-4 ${i % 2 ? "pl-4 sm:pl-6" : ""} ${i < 3 ? "lg:border-r" : ""} ${i % 2 === 0 ? "border-r lg:border-r" : ""} border-cz-line lg:pl-6 lg:first:pl-0`}>
              <b className="font-display text-2xl font-extrabold tabular-nums text-cz-gold-dark sm:text-[28px]">{s.value}</b>
              <span className="text-[13px] text-cz-mute">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <nav aria-label="Marques" className="wrap flex flex-wrap justify-between gap-x-6 gap-y-3 py-6 font-display text-sm font-bold uppercase tracking-[0.1em] text-[#8F8A82]">
        {brands.map((b) => {
          const first = models.find((m) => m.brand === b.brand);
          const href = first ? `${CATALOGUE_PATH}?marque=${encodeURIComponent(b.brand)}` : CATALOGUE_PATH;
          return (
            <Link key={b.brand} href={href} className="hover:text-cz-gold-dark">
              {b.brand}
            </Link>
          );
        })}
      </nav>

      <section className="wrap grid gap-6 py-10 sm:py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-2xl font-extrabold sm:text-3xl">Nouveautés 2026</h2>
          <Link href={CATALOGUE_PATH} className="font-display text-sm font-bold text-cz-gold-dark hover:underline">Tout le catalogue →</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((m) => (
            <CarCard key={m.slug} model={m} />
          ))}
        </div>
      </section>

      <section className="bg-cz-soft">
        <div className="wrap grid gap-8 py-12 sm:py-14">
          <h2 className="max-w-2xl text-2xl font-extrabold sm:text-3xl">Votre voiture, de la commande à la remise des clés</h2>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.title} className="grid content-start gap-2">
                <span className="border-b-2 border-cz-gold pb-2.5 font-display text-[34px] font-extrabold leading-none text-cz-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <b className="font-display">{s.title}</b>
                <span className="text-sm text-cz-mute">{s.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-cz-dark text-white">
        <div className="wrap grid gap-10 py-12 sm:py-14 lg:grid-cols-2 lg:gap-12">
          <div className="grid content-start gap-3">
            <h2 className="text-3xl font-extrabold leading-tight !text-white">Passez au showroom ou écrivez-nous</h2>
            <p className="text-[#CFCAC0]">Un conseiller vous répond sur WhatsApp pendant les heures d&apos;ouverture.</p>
            <dl className="mt-2 grid gap-3">
              {[
                { label: "Adresse", value: <>{contact.addressLine1}, {contact.addressLine2}</> },
                { label: "Téléphone", value: <a href={contact.phoneHref} className="hover:underline">{contact.phoneDisplay}</a> },
                { label: "WhatsApp", value: <a href={whatsappLink()} target="_blank" rel="noopener" className="hover:underline">{contact.whatsappDisplay}</a> },
                { label: "E-mail", value: <a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a> },
              ].map((r) => (
                <div key={r.label} className="grid grid-cols-[100px_1fr] gap-2 border-t border-white/20 pt-2.5">
                  <dt className="pt-0.5 font-mono text-[11px] uppercase tracking-[0.06em] text-cz-yellow">{r.label}</dt>
                  <dd>{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <ContactForm models={models.map(displayName)} />
        </div>
      </section>
    </>
  );
}

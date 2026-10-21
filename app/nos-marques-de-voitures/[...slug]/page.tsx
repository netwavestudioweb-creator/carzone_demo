import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ShieldCheck } from "lucide-react";
import CarCard from "@/components/CarCard";
import CatalogueBrowser from "@/components/CatalogueBrowser";
import Gallery from "@/components/Gallery";
import SectionTabs from "@/components/SectionTabs";
import { WhatsAppIcon } from "@/components/icons";
import {
  CATALOGUE_PATH,
  coverImage,
  displayName,
  findByPath,
  forListing,
  formatPrice,
  groupPaths,
  keySpecs,
  models,
  modelsUnder,
  type Model,
} from "@/lib/catalogue";
import { SITE_URL, whatsappLink } from "@/lib/site";

type Props = { params: { slug: string[] } };

export const dynamicParams = false;

export function generateStaticParams() {
  return [...models.map((m) => ({ slug: m.segments })), ...groupPaths().map((slug) => ({ slug }))];
}

function groupTitle(segments: string[]): string {
  const children = modelsUnder(segments);
  if (segments.length === 1) return children[0]?.brand ?? segments[0];
  const last = segments[segments.length - 1].replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return `${children[0]?.brand ?? ""} · ${last}`;
}

export function generateMetadata({ params }: Props): Metadata {
  const model = findByPath(params.slug);
  if (model) {
    const name = displayName(model);
    const price = model.price ? ` à ${formatPrice(model.price)}` : "";
    return {
      title: name,
      description: `${name}${price} chez CARZONE Cotonou. ${model.tagline ?? ""} Garantie ${model.warranty ?? "constructeur"}.`.trim(),
      alternates: { canonical: model.path },
      openGraph: { title: `${name}${price}`, images: [{ url: coverImage(model) }] },
    };
  }
  const title = groupTitle(params.slug);
  return { title, alternates: { canonical: `${CATALOGUE_PATH}/${params.slug.join("/")}` } };
}

export default function Page({ params }: Props) {
  const model = findByPath(params.slug);
  if (model) return <ModelPage model={model} />;

  const children = modelsUnder(params.slug);
  if (!children.length) notFound();
  return (
    <Suspense>
      <CatalogueBrowser models={forListing(children)} title={groupTitle(params.slug)} />
    </Suspense>
  );
}

function ModelPage({ model }: { model: Model }) {
  const name = displayName(model);
  const specs = keySpecs(model);
  const brandPath = `${CATALOGUE_PATH}/${model.segments[0]}`;
  const message = `Bonjour CARZONE, le ${name}${model.price ? ` à ${formatPrice(model.price)}` : ""} m'intéresse. Est-il disponible ?`;
  const similar = models
    .filter((m) => m.slug !== model.slug && (m.brand === model.brand || m.category === model.category))
    .sort((a, b) => Math.abs((a.price ?? 9e9) - (model.price ?? 0)) - Math.abs((b.price ?? 9e9) - (model.price ?? 0)))
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Car",
    name,
    brand: { "@type": "Brand", name: model.brand },
    image: model.images.map((i) => `${SITE_URL}${i}`),
    description: model.tagline ?? undefined,
    vehicleEngine: { "@type": "EngineSpecification", name: model.engine },
    ...(model.price && {
      offers: {
        "@type": "Offer",
        price: model.price,
        priceCurrency: "XOF",
        availability: "https://schema.org/InStock",
        seller: { "@type": "AutoDealer", name: "CARZONE Bénin" },
      },
    }),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="wrap pt-5">
        <nav aria-label="Fil d'Ariane" className="font-mono text-xs text-cz-mute">
          <Link href="/" className="hover:text-cz-ink">Accueil</Link> /{" "}
          <Link href={CATALOGUE_PATH} className="hover:text-cz-ink">Nos marques</Link> /{" "}
          <Link href={brandPath} className="hover:text-cz-ink">{model.brand}</Link> / <span className="text-cz-ink">{model.name}</span>
        </nav>
      </div>

      <div className="wrap grid gap-8 py-6 lg:grid-cols-[7fr_5fr] lg:gap-10">
        {model.images.length ? <Gallery images={model.images} alt={name} /> : <div className="aspect-[16/10] rounded-lg bg-cz-soft" />}

        <div className="grid content-start gap-4">
          <span className="kicker">{[model.subBrand ?? model.brand, model.category, model.seats ? `${model.seats} places` : null].filter(Boolean).join(" · ")}</span>
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">{name}</h1>
          {model.tagline && <p className="text-lg text-cz-mute">{model.tagline}</p>}

          <div className="flex flex-wrap items-baseline justify-between gap-3 rounded-lg bg-cz-soft px-4 py-3.5">
            <span className={model.price ? "price text-2xl sm:text-[28px]" : "font-display text-xl font-bold text-cz-mute"}>{formatPrice(model.price)}</span>
            {model.warranty && (
              <span className="inline-flex items-center gap-1.5 text-sm text-cz-mute">
                <ShieldCheck className="h-4 w-4 text-cz-gold-dark" aria-hidden="true" /> Garantie {model.warranty}
              </span>
            )}
          </div>

          {specs.length > 0 && (
            <dl className="border-t-2 border-cz-ink">
              {specs.map((s) => (
                <div key={s.label} className="grid grid-cols-[minmax(110px,150px)_1fr] gap-3 border-b border-cz-line py-2.5">
                  <dt className="pt-0.5 font-mono text-[11px] uppercase tracking-wide text-cz-mute">{s.label}</dt>
                  <dd className="font-mono text-[13.5px] tabular-nums">{s.value}</dd>
                </div>
              ))}
            </dl>
          )}

          <div className="grid gap-2.5">
            <Link href={`/contactez-nous?modele=${encodeURIComponent(name)}#devis`} className="btn btn-yellow py-4 text-[15px]">
              Demander un devis pour ce modèle
            </Link>
            <a href={whatsappLink(message)} target="_blank" rel="noopener" className="btn btn-wa py-4 text-[15px]">
              <WhatsAppIcon /> Écrire sur WhatsApp
            </a>
          </div>
          <p className="text-xs text-cz-mute">Motorisation : {model.engine}. Caractéristiques communiquées par le constructeur, à confirmer avec nos conseillers.</p>
        </div>
      </div>

      <div className="wrap pb-12">
        <SectionTabs sections={model.sections} />
      </div>

      {similar.length > 0 && (
        <section className="border-t border-cz-line bg-cz-soft">
          <div className="wrap grid gap-6 py-12">
            <h2 className="text-2xl font-extrabold">Vous aimerez aussi</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {similar.map((m) => (
                <CarCard key={m.slug} model={m} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

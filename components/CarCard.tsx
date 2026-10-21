import Image from "next/image";
import Link from "next/link";
import { coverImage, displayName, formatPrice, shortSpec, type Model } from "@/lib/model";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

export default function CarCard({ model, priority = false }: { model: Model; priority?: boolean }) {
  const name = displayName(model);
  return (
    <article className="group grid grid-rows-[auto_1fr] overflow-hidden rounded-lg border border-cz-line bg-white transition-shadow hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)]">
      <Link href={model.path} className="relative block aspect-[4/3] bg-cz-soft" tabIndex={-1} aria-hidden="true">
        <Image
          src={coverImage(model)}
          alt=""
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-2.5 top-2.5 rounded bg-white px-2 py-1 font-mono text-[10.5px] font-medium uppercase tracking-wide">
          {model.engine}
        </span>
      </Link>
      <div className="grid content-between gap-2 p-4">
        <span className="font-mono text-[11px] uppercase tracking-wide text-cz-mute">
          {model.subBrand ? `${model.brand} · ${model.subBrand}` : model.brand}
        </span>
        <h3 className="text-lg font-bold leading-tight">
          <Link href={model.path} className="hover:text-cz-gold-dark">{name}</Link>
        </h3>
        <span className={model.price ? "price text-[17px]" : "font-display text-sm font-semibold text-cz-mute"}>
          {formatPrice(model.price)}
        </span>
        <p className="border-t border-cz-line pt-2 font-mono text-[11.5px] text-cz-mute">{shortSpec(model)}</p>
        <div className="flex gap-2 pt-1">
          <Link href={model.path} className="btn btn-line flex-1 px-3 py-2 text-[12.5px]">Voir la fiche</Link>
          <a
            href={whatsappLink(`Bonjour CARZONE, le ${name}${model.price ? ` à ${formatPrice(model.price)}` : ""} m'intéresse. Est-il disponible ?`)}
            target="_blank"
            rel="noopener"
            className="btn btn-wa px-3 py-2 text-[12.5px]"
            aria-label={`Écrire sur WhatsApp à propos du ${name}`}
          >
            <WhatsAppIcon />
          </a>
        </div>
      </div>
    </article>
  );
}

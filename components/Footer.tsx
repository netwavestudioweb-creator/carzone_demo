import Image from "next/image";
import Link from "next/link";
import { navLinks, phoneHref, socials, whatsappLink, type Contact } from "@/lib/site";

export default function Footer({ contact }: { contact: Contact }) {
  return (
    <footer className="border-t border-cz-line bg-cz-soft pb-24 lg:pb-0">
      <div className="wrap grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="grid content-start gap-4">
          <Image src="/images/logo.png" alt="CARZONE" width={96} height={66} className="h-[66px] w-[96px] object-cover" />
          <p className="max-w-xs text-sm text-cz-mute">
            La maison des voitures chinoises et multi-marques au Bénin. Drive your dream.
          </p>
        </div>
        <div className="grid content-start gap-2 text-sm">
          <h2 className="mb-1 font-mono text-[11px] font-medium uppercase tracking-[0.07em] text-cz-mute">Navigation</h2>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="w-fit hover:text-cz-gold-dark">{l.label}</Link>
          ))}
          <a href="/downloads/carzone-catalog-2025.pdf" className="w-fit hover:text-cz-gold-dark">Catalogue PDF 2025</a>
        </div>
        <div className="grid content-start gap-2 text-sm">
          <h2 className="mb-1 font-mono text-[11px] font-medium uppercase tracking-[0.07em] text-cz-mute">Showroom</h2>
          <p>{contact.addressLine1}<br />{contact.addressLine2}</p>
          <a href={phoneHref(contact)} className="w-fit hover:text-cz-gold-dark">Tél. {contact.phoneDisplay}</a>
          <a href={whatsappLink(contact.whatsappDisplay)} target="_blank" rel="noopener" className="w-fit hover:text-cz-gold-dark">WhatsApp {contact.whatsappDisplay}</a>
          <a href={`mailto:${contact.email}`} className="w-fit hover:text-cz-gold-dark">{contact.email}</a>
          <div className="mt-2 flex gap-4">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener" className="font-medium text-cz-gold-dark hover:underline">{s.name}</a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-cz-line">
        <div className="wrap flex flex-wrap justify-between gap-2 py-4 text-xs text-cz-mute">
          <span>© {new Date().getFullYear()} CARZONE Bénin</span>
          <Link href="/mentions-legales" className="hover:text-cz-ink">Mentions légales et données personnelles</Link>
        </div>
      </div>
    </footer>
  );
}

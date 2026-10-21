"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { contact, navLinks, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="hidden bg-cz-dark text-[12.5px] text-white md:block">
        <div className="wrap flex gap-8 py-2">
          <span><b className="font-medium text-cz-yellow">Showroom</b> St Michel Kétékété, Cotonou</span>
          <a href={contact.phoneHref} className="hover:underline"><b className="font-medium text-cz-yellow">Tél.</b> {contact.phoneDisplay}</a>
          <a href={whatsappLink()} target="_blank" rel="noopener" className="hover:underline"><b className="font-medium text-cz-yellow">WhatsApp</b> {contact.whatsappDisplay}</a>
          <a href={`mailto:${contact.email}`} className="ml-auto hover:underline">{contact.email}</a>
        </div>
      </div>

      <div className="border-b border-cz-line">
        <div className="wrap flex items-center gap-6 py-2">
          <Link href="/" aria-label="CARZONE, accueil" className="shrink-0">
            <Image src="/images/logo.png" alt="CARZONE" width={76} height={52} priority className="h-[46px] w-[66px] object-cover md:h-[52px] md:w-[76px]" />
          </Link>

          <nav aria-label="Navigation principale" className="hidden flex-1 gap-6 text-[14.5px] font-medium text-[#444] lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`py-2 transition-colors hover:text-cz-gold-dark ${isActive(l.href) ? "text-cz-gold-dark shadow-[inset_0_-2px_0_#CC9000]" : ""}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto hidden items-center gap-3 lg:flex">
            <a href={whatsappLink()} target="_blank" rel="noopener" className="btn btn-wa">
              <WhatsAppIcon /> WhatsApp
            </a>
            <Link href="/contactez-nous#devis" className="btn btn-yellow">Demander un devis</Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="ml-auto rounded-md p-2 lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Menu mobile" className="border-b border-cz-line bg-white lg:hidden">
          <ul className="wrap grid py-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`block border-b border-cz-line py-3.5 font-display text-base font-semibold last:border-0 ${isActive(l.href) ? "text-cz-gold-dark" : ""}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

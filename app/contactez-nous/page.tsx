import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { WhatsAppIcon } from "@/components/icons";
import { displayName, models } from "@/lib/catalogue";
import { contact, socials, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contactez-nous",
  description: "Showroom CARZONE : Bâtiment de la Commission Béninoise des Droits de l'Homme, St Michel Kétékété, Cotonou. Téléphone, WhatsApp et demande de devis.",
  alternates: { canonical: "/contactez-nous" },
};

export default function ContactPage({ searchParams }: { searchParams: { modele?: string } }) {
  const names = models.map(displayName);
  const preset = searchParams.modele && names.includes(searchParams.modele) ? searchParams.modele : undefined;

  return (
    <section className="bg-cz-dark text-white">
      <div className="wrap grid gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-14">
        <div className="grid content-start gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.06em] text-cz-yellow">Contactez-nous</span>
          <h1 className="text-3xl font-extrabold !text-white sm:text-4xl">Passez au showroom ou écrivez-nous</h1>
          <p className="text-[#CFCAC0]">Pour un devis, un essai ou une question sur un modèle, la réponse la plus rapide passe par WhatsApp.</p>
          <a href={whatsappLink()} target="_blank" rel="noopener" className="btn btn-wa w-fit">
            <WhatsAppIcon /> {contact.whatsappDisplay}
          </a>
          <dl className="mt-4 grid gap-3">
            {[
              { label: "Adresse", value: <>{contact.addressLine1}<br />{contact.addressLine2}</> },
              { label: "Téléphone", value: <a href={contact.phoneHref} className="hover:underline">{contact.phoneDisplay}</a> },
              { label: "E-mail", value: <a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a> },
              {
                label: "Réseaux",
                value: (
                  <span className="flex flex-wrap gap-4">
                    {socials.map((s) => (
                      <a key={s.name} href={s.href} target="_blank" rel="noopener" className="hover:underline">{s.name}</a>
                    ))}
                  </span>
                ),
              },
            ].map((r) => (
              <div key={r.label} className="grid grid-cols-[100px_1fr] gap-2 border-t border-white/20 pt-2.5">
                <dt className="pt-0.5 font-mono text-[11px] uppercase tracking-[0.06em] text-cz-yellow">{r.label}</dt>
                <dd>{r.value}</dd>
              </div>
            ))}
          </dl>
          <a href={contact.mapsUrl} target="_blank" rel="noopener" className="w-fit font-medium text-cz-yellow hover:underline">Voir l&apos;itinéraire sur Google Maps →</a>
        </div>
        <ContactForm models={names} defaultModel={preset} />
      </div>
    </section>
  );
}

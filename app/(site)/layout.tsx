import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import { getContact } from "@/lib/catalogue";
import { SITE_URL, socials } from "@/lib/site";

export default async function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const contact = await getContact();
  const dealerJsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: "CARZONE Bénin",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    telephone: contact.phoneDisplay.replace(/\s/g, ""),
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.addressLine1,
      addressLocality: "Cotonou",
      addressCountry: "BJ",
    },
    sameAs: socials.map((s) => s.href),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dealerJsonLd) }} />
      <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-cz-dark focus:px-4 focus:py-2 focus:text-white">
        Aller au contenu
      </a>
      <Header contact={contact} />
      <main id="contenu">{children}</main>
      <Footer contact={contact} />
      <MobileActionBar contact={contact} />
    </>
  );
}

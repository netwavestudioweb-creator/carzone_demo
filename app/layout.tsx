import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import { contact, SITE_URL, socials } from "@/lib/site";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

const description =
  "CARZONE, la maison des voitures chinoises et multi-marques au Bénin. BAIC, BYD, Changan, Jetour, Forthing… modèles 2026 avec prix en F CFA, garantie 3 ans ou 100 000 km, showroom à St Michel, Cotonou.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CARZONE Bénin | La maison des voitures chinoises et multi-marques",
    template: "%s | CARZONE Bénin",
  },
  description,
  openGraph: {
    title: "CARZONE Bénin | La maison des voitures chinoises et multi-marques",
    description,
    url: SITE_URL,
    siteName: "CARZONE Bénin",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/images/models/jetour-traveller-t2.jpg", width: 1020, height: 587, alt: "Jetour T2 chez CARZONE Cotonou" }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

const dealerJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: "CARZONE Bénin",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  telephone: "+2290192626262",
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.addressLine1,
    addressLocality: "Cotonou",
    addressCountry: "BJ",
  },
  sameAs: socials.map((s) => s.href),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${roboto.variable} ${plexMono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dealerJsonLd) }} />
        <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-cz-dark focus:px-4 focus:py-2 focus:text-white">
          Aller au contenu
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.topcarzone.com"),
  title: {
    default: "CARZONE Bénin | Concessionnaire Véhicules Électriques & Multi-Marques Cotonou",
    template: "%s | CARZONE Bénin",
  },
  description: "Découvrez le showroom automobile d'exception à Cotonou, Bénin. Véhicules neufs 100% électriques, hybrides rechargeables & thermiques (BYD, Jetour, Changan, Chery, Zeekr). Vente, pièces d'origine, garantie & conciergerie privée.",
  keywords: [
    "Voiture électrique Bénin",
    "Achat véhicule Cotonou",
    "BYD Bénin",
    "Jetour Cotonou",
    "Changan Bénin",
    "Concessionnaire automobile Bénin",
    "Topcarzone",
    "SUV Hybride Cotonou",
    "Voiture chinoise de luxe",
    "Vente auto Bénin",
  ],
  authors: [{ name: "CARZONE Bénin" }],
  creator: "CARZONE Bénin",
  publisher: "CARZONE Bénin",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: "CARZONE Bénin | Concessionnaire Véhicules Électriques & Luxe à Cotonou",
    description: "Le premier showroom automobile d'exception au Bénin. BYD, Jetour, Changan, Chery & véhicules multi-marques d'élite. Service garanti, importation & conciergerie VIP.",
    url: "https://www.topcarzone.com",
    siteName: "CARZONE Bénin",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/hero-chinese-cars.jpg",
        width: 1200,
        height: 630,
        alt: "CARZONE Bénin — Showroom Automobile Privé & Véhicules Neufs à Cotonou",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CARZONE Bénin | Concessionnaire Premium & Électrique à Cotonou",
    description: "Découvrez la nouvelle génération automobile au Bénin (BYD, Jetour, Changan, Zeekr). Showroom privé & conciergerie VIP.",
    images: ["/images/hero-chinese-cars.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "name": "CARZONE Bénin",
    "image": "https://www.topcarzone.com/images/hero-chinese-cars.jpg",
    "@id": "https://www.topcarzone.com",
    "url": "https://www.topcarzone.com",
    "telephone": "+2290192626262",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Lot 167 Rue 407 Gbedomidji, St Michel",
      "addressLocality": "Cotonou",
      "addressRegion": "Littoral",
      "postalCode": "99000",
      "addressCountry": "BJ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 6.3653,
      "longitude": 2.4206
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://tiktok.com/@carzonebj"
    ]
  };

  return (
    <html lang="fr" className={`${syne.variable} ${inter.variable} dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#050505] text-[#E4E4E7] font-sans antialiased min-h-screen selection:bg-[#E5C158] selection:text-[#050505]">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

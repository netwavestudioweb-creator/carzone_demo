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
  themeColor: "#0D0D0D",
};

export const metadata: Metadata = {
  title: "CARZONE | Concession Automobile de Prestige & Véhicules d'Exception - Cotonou, Bénin",
  description:
    "Découvrez la collection exclusive de CARZONE (Topcarzone Bénin) : Berlines de luxe, SUV d'exception, sportives d'élite et services automobiles sur-mesure à Cotonou.",
  keywords: [
    "CARZONE",
    "Topcarzone Bénin",
    "Voiture de luxe Cotonou",
    "Concessionnaire automobile Bénin",
    "Mercedes",
    "Range Rover",
    "Porsche",
    "Véhicules d'exception",
  ],
  authors: [{ name: "CARZONE Prestige" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${syne.variable} ${inter.variable} dark scroll-smooth`}>
      <body className="bg-[#0D0D0D] text-[#A1A1AA] font-sans antialiased min-h-screen selection:bg-[#D4AF37] selection:text-[#0D0D0D]">
        {children}
      </body>
    </html>
  );
}

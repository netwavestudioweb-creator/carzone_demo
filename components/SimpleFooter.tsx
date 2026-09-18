"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function SimpleFooter() {
  return (
    <footer className="bg-[#0B0D14] text-white pt-20 pb-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div>
            <h3 className="font-syne text-2xl font-bold text-white mb-2">Prêt à passer à l&apos;électrique ?</h3>
            <p className="text-white/50 text-sm">Contactez notre conciergerie pour une offre sur-mesure.</p>
          </div>
          <Link
            href="/#contact"
            className="group flex items-center gap-3 px-8 py-4 rounded-full bg-[#E5C158] text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(229,193,88,0.3)]"
          >
            <span>Contacter le Showroom</span>
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </Link>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-white/40 gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <Image src="/images/logo.png" alt="CarZone Logo" width={80} height={24} className="opacity-50 hover:opacity-100 transition-opacity duration-500 object-contain grayscale hover:grayscale-0" />
            <p className="font-light tracking-wide">© {new Date().getFullYear()} Topcarzone Bénin. Tous droits réservés.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            <a
              href="https://tiktok.com/@carzonebj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E5C158] transition-colors font-medium flex items-center gap-2"
            >
              <span className="uppercase tracking-widest text-[10px] font-bold">TikTok @carzonebj</span>
            </a>
            <span className="text-white/10">|</span>
            <span className="text-[#E5C158] uppercase tracking-widest text-[10px] font-bold">Design Obsidian Luxury</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

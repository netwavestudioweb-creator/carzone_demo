"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ShieldCheck } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Catalogue", href: "/catalogue" },
    { name: "Témoignages", href: "/temoignages" },
    { name: "Nos Services", href: "/services" },
    { name: "Qui Sommes-Nous", href: "/a-propos" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-[#07090E]/90 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
          : "py-6 bg-gradient-to-b from-[#07090E]/80 to-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-[#E5C158] flex items-center justify-center text-black font-syne font-black text-xl shadow-[0_0_15px_rgba(229,193,88,0.4)] group-hover:scale-105 transition-transform">
            CZ
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-syne font-extrabold text-white tracking-widest uppercase leading-none">
              TopCarzone
            </span>
            <span className="text-[9px] font-bold tracking-widest text-[#E5C158] uppercase">
              Cotonou • Bénin
            </span>
          </div>
        </Link>

        {/* NAVIGATION DESKTOP */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-bold tracking-widest uppercase text-white/70 hover:text-[#E5C158] transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA DESKTOP */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/#contact"
            className="rounded-full bg-[#E5C158] hover:bg-white text-black font-extrabold text-xs uppercase tracking-wider px-6 py-3 transition-all duration-300 shadow-[0_0_20px_rgba(229,193,88,0.3)] inline-flex items-center gap-2"
          >
            <span>Demander un Devis</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* HAMBURGER BUTTON MOBILE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:text-[#E5C158] hover:border-[#E5C158]/40 transition-colors backdrop-blur-md"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-[#07090E]/95 backdrop-blur-2xl border-b border-white/10 px-6 pt-4 pb-8 overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-bold tracking-wider uppercase text-white/90 hover:text-[#E5C158] transition-colors py-2.5 border-b border-white/5"
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4">
                <Link
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-[#E5C158] text-black font-extrabold text-xs uppercase tracking-wider px-5 py-3.5 transition-all shadow-md"
                >
                  <span>Demander un Devis VIP</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

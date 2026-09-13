"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Shield } from "lucide-react";

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
    { name: "Qui Sommes-Nous", href: "/#about" },
    { name: "Nos Marques", href: "/#marques" },
    { name: "Nos Services", href: "/#services" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/80 backdrop-blur-md border-b border-white/10 transition-all duration-300 ${
        isScrolled ? "py-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)]" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/images/logo.png"
            alt="CarZone Logo"
            width={140}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* NAVIGATION DESKTOP */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-[#D4AF37] transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA DESKTOP */}
        <div className="hidden lg:flex items-center">
          <Link
            href="#contact"
            className="rounded-full border border-[#D4AF37]/50 text-white hover:bg-[#D4AF37] hover:text-black font-medium text-sm px-5 py-2.5 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] inline-flex items-center gap-2"
          >
            <span>Réserver un Essai</span>
          </Link>
        </div>

        {/* HAMBURGER BUTTON MOBILE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2.5 rounded-lg bg-[#161616] border border-white/10 text-white hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-colors"
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-[#0D0D0D]/95 backdrop-blur-xl border-b border-white/10 px-6 pt-4 pb-8 overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-white/90 hover:text-[#D4AF37] transition-colors py-2 border-b border-white/5"
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-3">
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 rounded-full border border-[#D4AF37]/50 text-white hover:bg-[#D4AF37] hover:text-black font-medium text-sm px-5 py-3 transition-all duration-300"
                >
                  <span>Réserver un Essai</span>
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

"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const navItems = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Uygulamalar", href: "#uygulamalar" },
  { label: "Süreç", href: "#surec" },
  { label: "SSS", href: "#sss" },
  { label: "İletişim", href: "#iletisim" },
] as const;

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      closeMenu();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [closeMenu]
  );

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090B0A]/95 backdrop-blur-md border-b border-[#232A23]"
          : "bg-transparent"
      }`}
    >
      <div className="container-site flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center gap-3 group"
          aria-label="42Torque Detail Lab — ana sayfaya git"
        >
          {/* Geometric icon */}
          <div
            aria-hidden="true"
            className="relative w-8 h-8 flex-shrink-0"
          >
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <circle
                cx="16"
                cy="16"
                r="14"
                stroke="#B8F34A"
                strokeWidth="1.5"
              />
              <path
                d="M10 16 L16 9 L22 16 L16 23 Z"
                stroke="#B8F34A"
                strokeWidth="1.5"
                fill="none"
              />
              <circle cx="16" cy="16" r="2.5" fill="#B8F34A" />
            </svg>
          </div>

          {/* Wordmark */}
          <div>
            <span className="block text-[#F2F4EF] font-bold text-lg leading-none tracking-tight">
              42Torque
            </span>
            <span className="block text-[#B8F34A] text-[0.5rem] font-semibold tracking-[0.18em] uppercase leading-none mt-0.5">
              {siteConfig.brandSuffix}
            </span>
          </div>
        </a>

        {/* Desktop navigation */}
        <nav
          aria-label="Ana gezinme"
          className="hidden lg:flex items-center gap-8"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-[#A3AAA1] text-sm font-medium hover:text-[#F2F4EF] transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#B8F34A] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#hizmetler"
          onClick={(e) => handleNavClick(e, "#hizmetler")}
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-[#B8F34A] text-[#090B0A] text-sm font-semibold rounded-[0.375rem] hover:bg-[#8fc435] transition-colors duration-200"
        >
          Hizmetleri Keşfet
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((v) => !v)}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-[0.375rem] text-[#F2F4EF] hover:bg-[#171B17] transition-colors duration-200"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobil gezinme menüsü"
        className={`lg:hidden fixed inset-0 top-[72px] z-40 transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#090B0A]/80 backdrop-blur-sm"
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-[#111411] border-l border-[#232A23] flex flex-col transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav
            aria-label="Mobil gezinme"
            className="flex flex-col p-6 gap-1 mt-4"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-[#F2F4EF] text-lg font-medium py-3 px-4 rounded-[0.375rem] hover:bg-[#171B17] hover:text-[#B8F34A] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="px-6 mt-2">
            <a
              href="#hizmetler"
              onClick={(e) => handleNavClick(e, "#hizmetler")}
              className="block w-full text-center py-3 bg-[#B8F34A] text-[#090B0A] font-semibold rounded-[0.375rem] hover:bg-[#8fc435] transition-colors duration-200"
            >
              Hizmetleri Keşfet
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

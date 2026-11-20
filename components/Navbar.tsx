"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, CalendarCheck } from "lucide-react";
import RahnileLogo from "./RahnileLogo";
import { HOTEL_INFO } from "@/lib/data";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Rooms & Suites", href: "/rooms" },
  { name: "Dining", href: "/dining" },
  { name: "Facilities", href: "/facilities" },
  { name: "Explore Bahir Dar", href: "/explore" },
  { name: "Gallery", href: "/gallery" },
  { name: "Guest Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  // When transparent, dark hero text or light text depending on scroll
  const navBgClass = isScrolled
    ? "bg-rahnile-aubergine/95 backdrop-blur-md shadow-luxury py-3 border-b border-rahnile-gold/20"
    : isHome
    ? "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
    : "bg-rahnile-aubergine py-4 border-b border-rahnile-gold/20";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBgClass}`}>
        {/* Top announcement bar on desktop before scrolling */}
        {!isScrolled && isHome && (
          <div className="hidden lg:block border-b border-white/10 pb-2 mb-3">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs text-white/80">
              <div className="flex items-center gap-4">
                <span>📍 Kebele 05, Behind EEPCO, Bahir Dar</span>
                <span className="text-rahnile-gold">|</span>
                <span>⭐ 3-Star City Comfort & Lake Tana Access</span>
              </div>
              <div className="flex items-center gap-5">
                <a
                  href={`tel:${HOTEL_INFO.contact.primaryPhone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-1.5 hover:text-rahnile-marigold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-rahnile-gold" />
                  <span>{HOTEL_INFO.contact.primaryPhone}</span>
                </a>
                <span className="text-rahnile-gold">|</span>
                <span className="text-white/60">English & Amharic Service</span>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <RahnileLogo variant="light" size={isScrolled ? "sm" : "md"} />

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 2xl:space-x-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-[0.82rem] uppercase tracking-wider font-medium transition-all duration-200 relative ${
                    isActive
                      ? "text-rahnile-marigold font-semibold"
                      : "text-white/90 hover:text-rahnile-marigold"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-rahnile-gold rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rahnile-marigold text-rahnile-charcoal font-semibold text-xs uppercase tracking-wider hover:bg-rahnile-gold hover:text-white transition-all duration-300 shadow-md hover:shadow-glow-gold active:scale-95"
            >
              <CalendarCheck className="w-4 h-4 text-rahnile-aubergine" />
              <span>Book Your Stay</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex xl:hidden items-center gap-2">
            <Link
              href="/book"
              className="sm:hidden px-3 py-1.5 rounded-full bg-rahnile-marigold text-rahnile-charcoal font-medium text-xs uppercase tracking-wider"
            >
              Book
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-rahnile-gold transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 xl:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu */}
          <div className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-rahnile-aubergine border-l border-rahnile-gold/20 p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <RahnileLogo variant="light" size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-white/70 hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-6 flex flex-col space-y-2">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`px-4 py-2.5 rounded-lg text-sm uppercase tracking-wider font-medium transition-colors ${
                        isActive
                          ? "bg-rahnile-plum text-rahnile-marigold font-semibold"
                          : "text-white/85 hover:bg-white/5 hover:text-rahnile-gold"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-4">
              <Link
                href="/book"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-rahnile-marigold text-rahnile-charcoal font-semibold text-sm uppercase tracking-wider hover:bg-rahnile-gold hover:text-white transition-colors"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Your Stay</span>
              </Link>

              <div className="text-center text-xs text-white/70 space-y-1">
                <p>Bahir Dar, Ethiopia</p>
                <a
                  href={`tel:${HOTEL_INFO.contact.primaryPhone.replace(/\s+/g, "")}`}
                  className="text-rahnile-gold block hover:underline"
                >
                  {HOTEL_INFO.contact.primaryPhone}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

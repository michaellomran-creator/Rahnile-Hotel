import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ExternalLink, ShieldCheck, Heart } from "lucide-react";
import RahnileLogo from "./RahnileLogo";
import { HOTEL_INFO } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-rahnile-aubergine text-white border-t-2 border-rahnile-gold/40 relative overflow-hidden">
      {/* Decorative top Nile gold border gradient */}
      <div className="nile-divider-gold w-full" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Heritage (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <RahnileLogo variant="light" size="md" />
            <p className="text-white/75 text-sm leading-relaxed font-sans pt-2">
              Inspired by the classical Ge'ez root for rest and ease (<em>Rah</em>) and the majestic Blue Nile (<em>Abay</em>), Rahnile Hotel provides an established, comfortable haven in Bahir Dar for international travelers, business guests, and families.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rahnile-plum border border-rahnile-gold/30 text-xs text-rahnile-gold font-medium">
                <span>⭐ Verified 3-Star City Hotel</span>
                <span className="text-white/40">|</span>
                <span>40+ Guest Rooms</span>
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-lg font-semibold tracking-wide text-rahnile-gold uppercase text-xs">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/" className="hover:text-rahnile-marigold transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-rahnile-marigold transition-colors">About Rahnile</Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-rahnile-marigold transition-colors">Rooms & Suites</Link>
              </li>
              <li>
                <Link href="/dining" className="hover:text-rahnile-marigold transition-colors">Dining & Terrace</Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-rahnile-marigold transition-colors">Hotel Facilities</Link>
              </li>
              <li>
                <Link href="/explore" className="hover:text-rahnile-marigold transition-colors">Explore Bahir Dar</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-rahnile-marigold transition-colors">Photo Gallery</Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-rahnile-marigold transition-colors">Guest Reviews</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-rahnile-marigold transition-colors">Contact & Map</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-lg font-semibold tracking-wide text-rahnile-gold uppercase text-xs">
              Location & Contact
            </h4>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rahnile-gold flex-shrink-0 mt-1" />
                <span>
                  {HOTEL_INFO.address.line1},<br />
                  {HOTEL_INFO.address.city}, {HOTEL_INFO.address.region}, {HOTEL_INFO.address.country}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-rahnile-gold flex-shrink-0" />
                <a
                  href={`tel:${HOTEL_INFO.contact.primaryPhone.replace(/\s+/g, "")}`}
                  className="hover:text-rahnile-marigold transition-colors"
                >
                  {HOTEL_INFO.contact.primaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-rahnile-gold flex-shrink-0" />
                <a
                  href={`mailto:${HOTEL_INFO.contact.email}`}
                  className="hover:text-rahnile-marigold transition-colors"
                >
                  {HOTEL_INFO.contact.email}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={HOTEL_INFO.platforms.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-rahnile-marigold hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Verified Travel Channels & Direct Enquiry (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-semibold tracking-wide text-rahnile-gold uppercase text-xs">
              Verified Profiles
            </h4>
            <p className="text-xs text-white/70">
              See what genuine international and domestic guests say about Rahnile Hotel on verified platforms:
            </p>
            <div className="space-y-2">
              <a
                href={HOTEL_INFO.platforms.googleHotels}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium">Google Reviews</span>
                  <span className="text-rahnile-gold font-bold">4.2 ★</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-white/60" />
              </a>

              <a
                href={HOTEL_INFO.platforms.agoda}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium">Agoda</span>
                  <span className="text-rahnile-marigold font-bold">8.3 / 10</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-white/60" />
              </a>

              <a
                href={HOTEL_INFO.platforms.tripadvisorSearch}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium">Tripadvisor</span>
                  <span className="text-rahnile-gold font-bold">Traveler Rec.</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-white/60" />
              </a>
            </div>

            <div className="pt-2">
              <Link
                href="/book"
                className="block text-center w-full py-2.5 px-4 rounded-lg bg-rahnile-gold text-rahnile-charcoal font-semibold text-xs uppercase tracking-wider hover:bg-rahnile-marigold transition-colors"
              >
                Make a Reservation Enquiry
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Staff Access */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div className="flex flex-wrap items-center gap-3">
            <span>© {new Date().getFullYear()} Rahnile Hotel (RahNile Hotel). All rights reserved.</span>
            <span>•</span>
            <span>Bahir Dar, Ethiopia</span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/reviews" className="hover:text-white transition-colors">
              Guest Feedback
            </Link>
            <span>•</span>
            <Link href="/admin" className="hover:text-rahnile-gold flex items-center gap-1 transition-colors">
              <ShieldCheck className="w-3.5 h-3.5 text-rahnile-gold" />
              <span>Staff Portal</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

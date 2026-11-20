"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CalendarCheck, ChevronRight, MapPin, Sparkles, ShieldCheck } from "lucide-react";
import { HOTEL_INFO } from "@/lib/data";

export default function Hero() {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [roomType, setRoomType] = useState("deluxe-double-room");

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = new URLSearchParams();
    if (checkIn) query.set("checkIn", checkIn);
    if (checkOut) query.set("checkOut", checkOut);
    if (guests) query.set("adults", guests);
    if (roomType) query.set("roomType", roomType);
    router.push(`/book?${query.toString()}`);
  };

  // Get tomorrow's date for default minimum
  const today = new Date().toISOString().split("T")[0];

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-24 pb-12 lg:pt-32 lg:pb-16 bg-rahnile-aubergine text-white overflow-hidden">
      {/* Background Hero Image with Atmospheric Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/rahnile/hotel-exterior-evening.webp"
          alt="Rahnile Hotel Bahir Dar exterior at twilight showing illuminated purple facade and sign"
          fill
          priority
          className="object-cover object-center brightness-[0.78] contrast-[1.08] scale-[1.02] transition-transform duration-1000 ease-out"
          sizes="100vw"
        />
        {/* Editorial Gradients: Dark Aubergine fade at top & bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-rahnile-aubergine via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-rahnile-aubergine/80" />
      </div>

      {/* Decorative Gold Nile Wave Motif */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-rahnile-gold/10 blur-3xl pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="max-w-3xl space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-rahnile-plum/80 border border-rahnile-gold/40 backdrop-blur-md text-xs tracking-wider uppercase text-rahnile-gold font-medium animate-fadeIn">
            <Sparkles className="w-3.5 h-3.5 text-rahnile-marigold" />
            <span>Nile Heritage Hospitality • Bahir Dar, Ethiopia</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white">
            A PLACE TO <br />
            <span className="text-rahnile-marigold italic font-normal">FEEL AT EASE.</span>
          </h1>

          {/* Ge'ez Subtext & English Narrative */}
          <div className="space-y-3">
            <p className="text-rahnile-gold font-sans text-xs tracking-[0.25em] uppercase font-semibold">
              ራህናይል — በአባይ ዳርቻ የሚያርፉበት ምቹ ስፍራ
            </p>
            <p className="text-white/90 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-2xl">
              Discover comfort, warm Ethiopian hospitality, and the tranquility of Lake Tana at Rahnile Hotel. Rooted in the ancient Ge&apos;ez spirit of rest (<em>Rah</em>) and situated moments from the legendary Blue Nile.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <Link
              href="/rooms"
              className="px-7 py-3.5 rounded-full bg-rahnile-marigold text-rahnile-charcoal font-semibold text-sm uppercase tracking-wider hover:bg-rahnile-gold hover:text-white transition-all duration-300 shadow-luxury hover:shadow-glow-gold flex items-center gap-2 group"
            >
              <span>Explore Our Rooms</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/book"
              className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm text-white font-medium text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
            >
              <CalendarCheck className="w-4 h-4 text-rahnile-gold" />
              <span>Reserve Your Stay</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Booking Check-in Bar Widget (Elevated on Hero Base) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10">
        <div className="bg-rahnile-aubergine/90 border border-rahnile-gold/30 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-luxury">
          <form onSubmit={handleQuickSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            {/* Check-In */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-rahnile-gold font-semibold mb-1.5">
                Check-In Date
              </label>
              <input
                type="date"
                min={today}
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-rahnile-plum/70 border border-rahnile-gold/30 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-rahnile-marigold"
              />
            </div>

            {/* Check-Out */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-rahnile-gold font-semibold mb-1.5">
                Check-Out Date
              </label>
              <input
                type="date"
                min={checkIn || today}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-rahnile-plum/70 border border-rahnile-gold/30 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-rahnile-marigold"
              />
            </div>

            {/* Guests */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-rahnile-gold font-semibold mb-1.5">
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-rahnile-plum/70 border border-rahnile-gold/30 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-rahnile-marigold"
              >
                <option value="1" className="bg-rahnile-aubergine">1 Adult</option>
                <option value="2" className="bg-rahnile-aubergine">2 Adults</option>
                <option value="3" className="bg-rahnile-aubergine">3 Adults</option>
                <option value="4" className="bg-rahnile-aubergine">4+ (Family)</option>
              </select>
            </div>

            {/* Room Type */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-rahnile-gold font-semibold mb-1.5">
                Preferred Room
              </label>
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="w-full bg-rahnile-plum/70 border border-rahnile-gold/30 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-rahnile-marigold"
              >
                <option value="deluxe-double-room" className="bg-rahnile-aubergine">Deluxe Double Room</option>
                <option value="deluxe-twin-room" className="bg-rahnile-aubergine">Deluxe Twin Room</option>
                <option value="family-executive-suite" className="bg-rahnile-aubergine">Executive & Family Suite</option>
              </select>
            </div>

            {/* Search CTA */}
            <div>
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-lg bg-rahnile-marigold text-rahnile-charcoal font-semibold text-sm uppercase tracking-wider hover:bg-rahnile-gold hover:text-white transition-all duration-300 shadow-md flex items-center justify-center gap-2 active:scale-95"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Check Availability</span>
              </button>
            </div>
          </form>

          {/* Quick Confidence Line */}
          <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-white/70">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-rahnile-gold" />
              Direct Enquiry • Best Local Rate Guarantee • No Prepayment Required
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-rahnile-gold" />
              Kebele 05, Bahir Dar (Behind EEPCO)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

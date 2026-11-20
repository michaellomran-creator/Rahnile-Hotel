import React from "react";
import Link from "next/link";
import { Bed, ShieldCheck, CheckCircle2, CalendarCheck, Sparkles, Filter } from "lucide-react";
import RoomCard from "@/components/RoomCard";
import { VERIFIED_ROOMS, HOTEL_INFO } from "@/lib/data";

export const metadata = {
  title: "Rooms & Suites | Accommodations at Rahnile Hotel Bahir Dar",
  description:
    "Explore comfortable guest rooms and suites at Rahnile Hotel in Bahir Dar, Ethiopia. Featuring Deluxe Double Rooms, Deluxe Twin Rooms, and Executive Suites.",
};

export default function RoomsPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-20 bg-rahnile-parchment">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rahnile-limestone border border-rahnile-gold/40 text-xs font-semibold uppercase tracking-wider text-rahnile-plum">
            <Bed className="w-3.5 h-3.5 text-rahnile-gold" />
            <span>Accommodation Portfolio</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-rahnile-charcoal">
            Rooms & <br />
            <span className="text-rahnile-plum italic font-normal">Suites</span>
          </h1>

          <p className="text-rahnile-charcoal/80 text-base sm:text-lg leading-relaxed pt-2">
            Each room at Rahnile Hotel is appointed with comfortable bedding, en-suite bathroom with continuous hot water shower, private balcony outlooks over Bahir Dar, complimentary high-speed Wi-Fi, and personalized room service.
          </p>
        </div>
      </section>

      {/* Main Rooms Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VERIFIED_ROOMS.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>

      {/* Amenities & Inclusions Summary */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-rahnile-limestone shadow-luxury space-y-8">
          <div className="border-b border-rahnile-limestone pb-6">
            <span className="text-xs uppercase tracking-widest text-rahnile-gold font-bold">
              Standard Across All Rooms
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-rahnile-charcoal mt-1">
              Every Stay at Rahnile Hotel Includes:
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-xs text-rahnile-charcoal">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-rahnile-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm text-rahnile-aubergine">En-Suite Bathroom</p>
                <p className="text-rahnile-charcoal/70">Hot water rainfall shower, vanity mirror, complimentary toiletries, and fresh towels.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-rahnile-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm text-rahnile-aubergine">High-Speed Wi-Fi</p>
                <p className="text-rahnile-charcoal/70">Reliable wireless connectivity accessible in all rooms and public hotel areas.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-rahnile-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm text-rahnile-aubergine">Private Balcony</p>
                <p className="text-rahnile-charcoal/70">Step outside to enjoy fresh lake breezes and city outlooks across Bahir Dar.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-rahnile-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm text-rahnile-aubergine">Satellite Television</p>
                <p className="text-rahnile-charcoal/70">Flat-screen TV with Ethiopian national channels and international news/entertainment.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-rahnile-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm text-rahnile-aubergine">Dedicated Workspace</p>
                <p className="text-rahnile-charcoal/70">Writing desk, chair, and accessible electrical outlets for laptops and devices.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-rahnile-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm text-rahnile-aubergine">Daily Housekeeping</p>
                <p className="text-rahnile-charcoal/70">Attentive daily cleaning, fresh bottled drinking water, and evening turndown care.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Guarantee Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-rahnile-aubergine text-white rounded-3xl p-8 sm:p-12 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs text-rahnile-gold font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Direct Booking Advantage</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Ready to Reserve Your Room in Bahir Dar?
            </h3>
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
              Submit your dates through our direct enquiry form. Our front desk team guarantees direct hotel rates with no booking fees or third-party commissions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <Link
              href="/book"
              className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full bg-rahnile-marigold text-rahnile-charcoal font-bold text-xs uppercase tracking-wider hover:bg-rahnile-gold hover:text-white transition-colors shadow-md"
            >
              Reserve Your Stay
            </Link>
            <a
              href={`tel:${HOTEL_INFO.contact.primaryPhone.replace(/\s+/g, "")}`}
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors text-xs uppercase tracking-wider font-semibold"
            >
              Call Front Desk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

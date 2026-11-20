import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Compass, MapPin, Clock, ExternalLink, CalendarCheck, Waves, Info } from "lucide-react";
import { BAHIR_DAR_DESTINATIONS, HOTEL_INFO } from "@/lib/data";

export const metadata = {
  title: "Explore Bahir Dar & Lake Tana | Destination Guide | Rahnile Hotel",
  description:
    "Discover Bahir Dar's top attractions: Lake Tana island monasteries, Tis Abay (Blue Nile Falls), Bezawit Palace viewpoint, and local cultural markets. Base your journey at Rahnile Hotel.",
};

export default function ExplorePage() {
  return (
    <div className="pt-24 lg:pt-32 pb-20 bg-rahnile-parchment">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rahnile-limestone border border-rahnile-gold/40 text-xs font-semibold uppercase tracking-wider text-rahnile-plum">
            <Compass className="w-3.5 h-3.5 text-rahnile-gold" />
            <span>Regional Destination Guide</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-rahnile-charcoal">
            Explore <br />
            <span className="text-rahnile-plum italic font-normal">Bahir Dar & Lake Tana</span>
          </h1>

          <p className="text-rahnile-charcoal/80 text-base sm:text-lg leading-relaxed pt-2">
            Known as the &ldquo;Ethiopian Riviera,&rdquo; Bahir Dar is a city of palm-lined boulevards situated where the Blue Nile originates from Lake Tana. From ancient monasteries hidden on forested islands to roaring waterfalls, discover the region&apos;s wonders from Rahnile Hotel.
          </p>
        </div>
      </section>

      {/* Main Destination Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 space-y-12">
        {BAHIR_DAR_DESTINATIONS.map((dest, idx) => (
          <div
            key={dest.id}
            className="bg-white rounded-3xl overflow-hidden border border-rahnile-limestone shadow-luxury"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Photo Column */}
              <div
                className={`lg:col-span-5 relative h-72 sm:h-96 w-full ${
                  idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  {dest.amharicTitle && (
                    <p className="text-xs text-rahnile-gold font-sans font-semibold tracking-wider">
                      {dest.amharicTitle}
                    </p>
                  )}
                  <p className="font-serif text-xl font-bold">{dest.title}</p>
                </div>
              </div>

              {/* Details Column */}
              <div
                className={`lg:col-span-7 p-8 sm:p-10 space-y-5 ${
                  idx % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-rahnile-charcoal">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rahnile-parchment border border-rahnile-limestone">
                    <MapPin className="w-3.5 h-3.5 text-rahnile-gold" />
                    {dest.distance}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rahnile-parchment border border-rahnile-limestone">
                    <Clock className="w-3.5 h-3.5 text-rahnile-gold" />
                    {dest.travelTime}
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-rahnile-charcoal">
                  {dest.title}
                </h2>

                <p className="text-rahnile-charcoal/80 text-sm sm:text-base leading-relaxed">
                  {dest.description}
                </p>

                <div className="p-4 rounded-xl bg-rahnile-parchment/60 border border-rahnile-gold/30 text-xs text-rahnile-charcoal space-y-1">
                  <p className="font-bold text-rahnile-plum flex items-center gap-1">
                    <Info className="w-4 h-4 text-rahnile-gold" /> Practical Visitor Guidance:
                  </p>
                  <p className="leading-relaxed text-rahnile-charcoal/80">
                    {dest.practicalTip}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  {dest.directionsUrl && (
                    <a
                      href={dest.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-rahnile-aubergine hover:text-rahnile-gold transition-colors"
                    >
                      <span>Open Location in Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-rahnile-aubergine text-white text-xs uppercase tracking-wider font-semibold hover:bg-rahnile-plum transition-colors ml-auto"
                  >
                    Ask Front Desk for Assistance
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Tour Coordination Transparency Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 rounded-3xl bg-white border border-rahnile-limestone shadow-subtle space-y-3">
          <h3 className="font-serif text-xl font-bold text-rahnile-charcoal">
            Important Information Regarding Tours & Transport
          </h3>
          <p className="text-xs sm:text-sm text-rahnile-charcoal/80 leading-relaxed">
            Please note that Lake Tana boat services, Blue Nile Falls transport, and licensed tour guiding are operated by independent local providers and community cooperatives in Bahir Dar. Rahnile Hotel does not own or operate these attractions. Our front desk concierge is delighted to coordinate reputable boat captains, arrange private vehicular transfers, and connect you with authorized regional guides.
          </p>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-rahnile-aubergine text-white rounded-3xl p-8 sm:p-12 shadow-luxury space-y-4">
          <span className="text-xs uppercase tracking-widest text-rahnile-gold font-bold">
            Stay in Kebele 05
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            Your Comfortable Base for Lake Tana & The Nile
          </h3>
          <p className="text-white/80 text-xs sm:text-sm max-w-lg mx-auto">
            Enjoy clean accommodations, reliable hot water, relaxing terrace dining, and central convenience at Rahnile Hotel.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/book"
              className="px-6 py-3 rounded-full bg-rahnile-marigold text-rahnile-charcoal text-xs uppercase tracking-wider font-bold hover:bg-rahnile-gold hover:text-white transition-colors"
            >
              Book Your Stay
            </Link>
            <Link
              href="/rooms"
              className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 text-xs uppercase tracking-wider font-semibold transition-colors"
            >
              View Available Rooms
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

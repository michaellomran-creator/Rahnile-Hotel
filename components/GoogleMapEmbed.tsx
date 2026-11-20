import React from "react";
import { MapPin, Navigation, ExternalLink, Compass } from "lucide-react";
import { HOTEL_INFO } from "@/lib/data";

interface GoogleMapEmbedProps {
  className?: string;
  showDetails?: boolean;
}

export default function GoogleMapEmbed({
  className = "",
  showDetails = true,
}: GoogleMapEmbedProps) {
  const { lat, lng } = HOTEL_INFO.address.coordinates;

  // Real Google Maps embed URL with exact coordinates
  const mapUrl = `https://maps.google.com/maps?q=${lat},${lng}&hl=en&z=16&output=embed`;

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Map Iframe Container */}
      <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-rahnile-gold/40 shadow-subtle bg-rahnile-limestone">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Rahnile Hotel Bahir Dar Location Map"
          className="w-full h-full grayscale-[10%] contrast-[1.05]"
        />

        {/* Floating badge */}
        <div className="absolute top-4 left-4 z-10 bg-rahnile-aubergine/90 backdrop-blur-md border border-rahnile-gold/40 px-3.5 py-2 rounded-xl text-white shadow-luxury">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rahnile-marigold animate-pulse" />
            <span className="font-serif text-sm font-bold text-white">Rahnile Hotel</span>
          </div>
          <p className="text-[0.68rem] text-rahnile-gold mt-0.5">
            Kebele 05, Behind EEPCO • Bahir Dar
          </p>
        </div>

        {/* Floating directions CTA */}
        <div className="absolute bottom-4 right-4 z-10">
          <a
            href={HOTEL_INFO.platforms.googleMapsDirections}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-rahnile-charcoal font-semibold text-xs shadow-luxury hover:bg-rahnile-marigold transition-colors"
          >
            <Navigation className="w-3.5 h-3.5 text-rahnile-aubergine" />
            <span>Get Directions</span>
            <ExternalLink className="w-3 h-3 text-rahnile-charcoal/60" />
          </a>
        </div>
      </div>

      {/* Location Details & Landmark Distances */}
      {showDetails && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-white border border-rahnile-limestone flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-rahnile-gold flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-rahnile-charcoal">Address & Landmark</p>
              <p className="text-rahnile-charcoal/70">
                Kebele 05, Behind Ethiopian Electric Utility (EEPCO) Building
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-rahnile-limestone flex items-start gap-2.5">
            <Compass className="w-4 h-4 text-rahnile-gold flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-rahnile-charcoal">Lake Tana Jetties</p>
              <p className="text-rahnile-charcoal/70">
                ~700 meters to boat departure docks for island monastery tours
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-rahnile-limestone flex items-start gap-2.5">
            <Navigation className="w-4 h-4 text-rahnile-gold flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-rahnile-charcoal">Airport Access</p>
              <p className="text-rahnile-charcoal/70">
                ~8 km from Bahir Dar Dejazmach Belay Zeleke Airport (BJR)
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

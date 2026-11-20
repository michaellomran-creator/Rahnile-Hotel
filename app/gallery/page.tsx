"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Camera, Maximize2, CalendarCheck, Filter } from "lucide-react";
import GalleryLightbox, { GalleryImage } from "@/components/GalleryLightbox";

const ALL_IMAGES: GalleryImage[] = [
  {
    src: "/images/rahnile/hotel-exterior-evening.webp",
    alt: "Rahnile Hotel building exterior illuminated at twilight with purple facade",
    title: "Twilight Exterior & Illuminated Facade",
    category: "exterior",
  },
  {
    src: "/images/rahnile/hotel-entrance-lobby.webp",
    alt: "Grand glass lobby entrance with chandelier, doorman, and logo doors",
    title: "Main Entrance & Lobby Reception",
    category: "exterior",
  },
  {
    src: "/images/rahnile/facility-front-desk.webp",
    alt: "Front desk reception staff assisting arriving guest",
    title: "24-Hour Reception & Concierge Desk",
    category: "facilities",
  },
  {
    src: "/images/rahnile/room-deluxe-twin.webp",
    alt: "Deluxe Twin room with decorated floral duvets, mosquito nets, and desk",
    title: "Deluxe Twin Guest Room",
    category: "rooms",
  },
  {
    src: "/images/rahnile/room-bed-detail.webp",
    alt: "Deluxe bedding detail with decorative towel swan presentation and floral accents",
    title: "Artistic Bed & Linen Presentation",
    category: "rooms",
  },
  {
    src: "/images/rahnile/view-night-balcony.webp",
    alt: "Night city view from private guest room balcony overlooking Bahir Dar avenues",
    title: "Night View from Private Balcony",
    category: "views",
  },
  {
    src: "/images/rahnile/terrace-rooftop-sunset.webp",
    alt: "Guests on rooftop sunset terrace overlooking Bahir Dar skyline and Lake Tana horizon",
    title: "Rooftop Sunset Vantage Point",
    category: "views",
  },
  {
    src: "/images/rahnile/dining-main-restaurant.webp",
    alt: "Main indoor restaurant with dressed tables and green feature wall",
    title: "Main Indoor Dining Room",
    category: "dining",
  },
  {
    src: "/images/rahnile/dining-terrace-view.webp",
    alt: "Open-air dining veranda with long banquet table and panoramic greenery",
    title: "Veranda & Open-Air Dining Terrace",
    category: "dining",
  },
  {
    src: "/images/rahnile/dining-gourmet-dinner.webp",
    alt: "Gourmet dinner table setting with red wine bottle, steak dish, and rose",
    title: "Gourmet Table Setting & Wine",
    category: "dining",
  },
  {
    src: "/images/rahnile/dining-fresh-salad.webp",
    alt: "Fresh salad culinary presentation with avocado and sliced fruit",
    title: "Fresh Seasonal Salad & Fruit",
    category: "dining",
  },
  {
    src: "/images/rahnile/dining-wine-pairing.webp",
    alt: "Fine wine glasses and plated cuisine on checked tablecloth",
    title: "Wine & Dining Experience",
    category: "dining",
  },
  {
    src: "/images/rahnile/dining-couple-toast.webp",
    alt: "Couple smiling and toasting wine glasses inside the cozy restaurant",
    title: "Evening Atmosphere & Hospitality",
    category: "dining",
  },
  {
    src: "/images/rahnile/facility-lounge-bar.webp",
    alt: "Hotel lounge bar with armchairs, recessed lighting, and relaxing guests",
    title: "Cocktail Lounge & Evening Bar",
    category: "facilities",
  },
  {
    src: "/images/rahnile/facility-conference-hall.webp",
    alt: "Executive conference and meeting hall with U-shape table setup",
    title: "Executive Conference & Meeting Hall",
    category: "facilities",
  },
];

type CategoryFilter = "all" | "exterior" | "rooms" | "dining" | "facilities" | "views";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = ALL_IMAGES.filter((img) => {
    if (selectedCategory === "all") return true;
    return img.category === selectedCategory;
  });

  return (
    <div className="pt-24 lg:pt-32 pb-20 bg-rahnile-parchment">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rahnile-limestone border border-rahnile-gold/40 text-xs font-semibold uppercase tracking-wider text-rahnile-plum">
            <Camera className="w-3.5 h-3.5 text-rahnile-gold" />
            <span>Visual Tour</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-rahnile-charcoal">
            Property <br />
            <span className="text-rahnile-plum italic font-normal">Photo Gallery</span>
          </h1>

          <p className="text-rahnile-charcoal/80 text-base sm:text-lg leading-relaxed pt-2">
            Explore authentic photographs of Rahnile Hotel in Bahir Dar. All images show genuine hotel accommodations, indoor restaurant dining, open veranda terrace, executive conference hall, and rooftop sunset views.
          </p>
        </div>
      </section>

      {/* Category Filter Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-wrap items-center gap-2 border-b border-rahnile-limestone pb-4">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              selectedCategory === "all"
                ? "bg-rahnile-aubergine text-white shadow-sm"
                : "bg-white text-rahnile-charcoal border border-rahnile-limestone hover:bg-rahnile-limestone"
            }`}
          >
            All Photos ({ALL_IMAGES.length})
          </button>
          <button
            onClick={() => setSelectedCategory("rooms")}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              selectedCategory === "rooms"
                ? "bg-rahnile-aubergine text-white shadow-sm"
                : "bg-white text-rahnile-charcoal border border-rahnile-limestone hover:bg-rahnile-limestone"
            }`}
          >
            Rooms & Suites (2)
          </button>
          <button
            onClick={() => setSelectedCategory("dining")}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              selectedCategory === "dining"
                ? "bg-rahnile-aubergine text-white shadow-sm"
                : "bg-white text-rahnile-charcoal border border-rahnile-limestone hover:bg-rahnile-limestone"
            }`}
          >
            Dining & Cuisine (5)
          </button>
          <button
            onClick={() => setSelectedCategory("facilities")}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              selectedCategory === "facilities"
                ? "bg-rahnile-aubergine text-white shadow-sm"
                : "bg-white text-rahnile-charcoal border border-rahnile-limestone hover:bg-rahnile-limestone"
            }`}
          >
            Facilities & Events (3)
          </button>
          <button
            onClick={() => setSelectedCategory("exterior")}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              selectedCategory === "exterior"
                ? "bg-rahnile-aubergine text-white shadow-sm"
                : "bg-white text-rahnile-charcoal border border-rahnile-limestone hover:bg-rahnile-limestone"
            }`}
          >
            Exterior & Lobby (2)
          </button>
          <button
            onClick={() => setSelectedCategory("views")}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              selectedCategory === "views"
                ? "bg-rahnile-aubergine text-white shadow-sm"
                : "bg-white text-rahnile-charcoal border border-rahnile-limestone hover:bg-rahnile-limestone"
            }`}
          >
            Terrace & Views (2)
          </button>
        </div>
      </section>

      {/* Responsive Masonry / Image Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.src}
              onClick={() => {
                // Find true index in ALL_IMAGES
                const trueIndex = ALL_IMAGES.findIndex((img) => img.src === image.src);
                setLightboxIndex(trueIndex >= 0 ? trueIndex : index);
              }}
              className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-rahnile-limestone shadow-subtle hover:shadow-luxury cursor-pointer bg-rahnile-limestone transition-all duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Expand Icon */}
              <div className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white group-hover:bg-rahnile-aubergine transition-colors">
                <Maximize2 className="w-4 h-4 text-rahnile-gold" />
              </div>

              {/* Caption & Category */}
              <div className="absolute bottom-4 left-4 right-4 text-white z-10 space-y-1">
                <span className="text-[0.68rem] text-rahnile-gold uppercase tracking-widest font-bold">
                  {image.category.toUpperCase()}
                </span>
                <h3 className="font-serif text-lg font-bold drop-shadow-sm">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-rahnile-aubergine text-white rounded-3xl p-8 sm:p-12 shadow-luxury space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            Experience Rahnile Hotel in Person
          </h3>
          <p className="text-white/80 text-xs sm:text-sm max-w-lg mx-auto">
            Book your room or enquiry directly for personal attention and current rates.
          </p>
          <div className="pt-2">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-rahnile-marigold text-rahnile-charcoal text-xs uppercase tracking-wider font-bold hover:bg-rahnile-gold hover:text-white transition-colors"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Make a Reservation Enquiry</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          images={ALL_IMAGES}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}

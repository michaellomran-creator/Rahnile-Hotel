"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Check, Bed, Users, CalendarCheck, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { Room } from "@/lib/types";

interface RoomDetailModalProps {
  room: Room;
  onClose: () => void;
}

export default function RoomDetailModal({ room, onClose }: RoomDetailModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = room.galleryImages.length > 0 ? room.galleryImages : [room.image];

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl z-10 border border-rahnile-gold/30">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-rahnile-aubergine text-white backdrop-blur-sm transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery Carousel Header */}
        <div className="relative h-72 sm:h-96 w-full bg-black">
          <Image
            src={images[activeImageIndex]}
            alt={`${room.name} image ${activeImageIndex + 1}`}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 896px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

          {/* Navigation Arrows if multiple photos */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              {/* Photo Indicator Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === activeImageIndex ? "w-6 bg-rahnile-gold" : "w-2 bg-white/60"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Room Title Over Gallery Bottom */}
          <div className="absolute bottom-6 left-6 z-10 text-white">
            <span className="text-rahnile-gold font-sans text-xs tracking-wider uppercase font-semibold">
              {room.amharicName || "ራህናይል ሆቴል"}
            </span>
            <h2 className="font-serif text-3xl font-bold text-white drop-shadow-md">
              {room.name}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Tagline & Specs Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-rahnile-limestone">
            <div className="space-y-1">
              <p className="text-rahnile-plum font-semibold text-sm">
                {room.tagline}
              </p>
              <p className="text-xs text-rahnile-charcoal/70">
                {room.priceNote}
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-medium text-rahnile-charcoal">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rahnile-parchment border border-rahnile-limestone">
                <Bed className="w-4 h-4 text-rahnile-gold" />
                {room.bedType}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rahnile-parchment border border-rahnile-limestone">
                <Users className="w-4 h-4 text-rahnile-gold" />
                {room.occupancy.adults} Adults max
              </span>
              {room.sizeM2 && (
                <span className="px-3 py-1.5 rounded-lg bg-rahnile-parchment border border-rahnile-limestone">
                  ~{room.sizeM2} m²
                </span>
              )}
            </div>
          </div>

          {/* Full Narrative Description */}
          <div className="space-y-2">
            <h4 className="font-serif text-lg font-bold text-rahnile-charcoal">
              Room Overview
            </h4>
            <p className="text-rahnile-charcoal/80 text-sm leading-relaxed">
              {room.description}
            </p>
          </div>

          {/* Verified Amenities List */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-rahnile-charcoal">
              Included Amenities & Room Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.amenities.map((amenity) => (
                <div key={amenity} className="flex items-start gap-2.5 text-xs text-rahnile-charcoal">
                  <div className="w-4 h-4 rounded-full bg-rahnile-parchment border border-rahnile-gold/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-rahnile-gold" />
                  </div>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee & Booking Action */}
          <div className="pt-6 border-t border-rahnile-limestone flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-rahnile-charcoal/70">
              <ShieldCheck className="w-4 h-4 text-rahnile-gold" />
              <span>Direct hotel booking confirmation • No hidden fees</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg border border-rahnile-limestone text-xs uppercase tracking-wider font-semibold text-rahnile-charcoal hover:bg-rahnile-parchment transition-colors"
              >
                Close
              </button>
              <Link
                href={`/book?roomType=${room.id}`}
                onClick={onClose}
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-lg bg-rahnile-marigold text-rahnile-charcoal font-semibold text-xs uppercase tracking-wider hover:bg-rahnile-gold hover:text-white transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Reserve This Room</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

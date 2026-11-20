"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  category: "exterior" | "rooms" | "dining" | "facilities" | "views";
}

interface GalleryLightboxProps {
  images: GalleryImage[];
  initialIndex: number;
  onClose: () => void;
}

export default function GalleryLightbox({
  images,
  initialIndex,
  onClose,
}: GalleryLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length]);

  const current = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Previous button */}
      <button
        onClick={prev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      {/* Next button */}
      <button
        onClick={next}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Next photo"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* Main Image Container */}
      <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center p-4">
        <div className="relative w-full h-[75vh] flex items-center justify-center">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="object-contain"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>

        {/* Caption & Counter */}
        <div className="mt-4 text-center text-white space-y-1 z-10">
          <h3 className="font-serif text-lg font-semibold text-rahnile-gold">
            {current.title}
          </h3>
          <p className="text-xs text-white/70">
            {current.alt} • {currentIndex + 1} of {images.length}
          </p>
        </div>
      </div>
    </div>
  );
}

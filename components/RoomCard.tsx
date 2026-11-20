"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Bed, Check, Eye, CalendarCheck, Maximize2 } from "lucide-react";
import { Room } from "@/lib/types";
import RoomDetailModal from "./RoomDetailModal";

interface RoomCardProps {
  room: Room;
}

export default function RoomCard({ room }: RoomCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl overflow-hidden border border-rahnile-limestone shadow-subtle hover:shadow-luxury transition-all duration-300 flex flex-col group">
        {/* Room Photograph with Zoom on Hover */}
        <div className="relative h-64 w-full overflow-hidden bg-rahnile-limestone">
          <Image
            src={room.image}
            alt={`${room.name} at Rahnile Hotel Bahir Dar`}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 rounded-full bg-rahnile-aubergine/80 text-rahnile-gold border border-rahnile-gold/30 backdrop-blur-sm text-[0.7rem] uppercase tracking-wider font-semibold">
              Verified Accommodation
            </span>
          </div>

          {/* Quick Preview Button */}
          <button
            onClick={() => setModalOpen(true)}
            className="absolute bottom-4 right-4 z-10 p-2.5 rounded-full bg-black/60 hover:bg-rahnile-aubergine text-white backdrop-blur-sm transition-colors opacity-90 hover:opacity-100"
            title="View photos and amenities"
            aria-label={`View full details for ${room.name}`}
          >
            <Maximize2 className="w-4 h-4 text-rahnile-gold" />
          </button>
        </div>

        {/* Content Container */}
        <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
          <div>
            {/* Amharic subtitle */}
            {room.amharicName && (
              <p className="text-rahnile-plum font-sans text-xs tracking-wider mb-1 font-medium">
                {room.amharicName}
              </p>
            )}

            {/* Room Name */}
            <h3 className="font-serif text-2xl font-bold text-rahnile-charcoal group-hover:text-rahnile-aubergine transition-colors">
              {room.name}
            </h3>

            {/* Tagline */}
            <p className="text-rahnile-olive text-xs font-medium tracking-wide mt-1">
              {room.tagline}
            </p>

            {/* Description */}
            <p className="text-rahnile-charcoal/80 text-sm leading-relaxed mt-3 line-clamp-3">
              {room.description}
            </p>

            {/* Room Key Specs */}
            <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-rahnile-limestone text-xs text-rahnile-charcoal/90">
              <div className="flex items-center gap-2">
                <Bed className="w-4 h-4 text-rahnile-gold flex-shrink-0" />
                <span>{room.bedType}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-rahnile-gold flex-shrink-0" />
                <span>Up to {room.occupancy.adults} Adults {room.occupancy.children > 0 ? `+ ${room.occupancy.children} Child` : ""}</span>
              </div>
            </div>

            {/* Key Features Chips */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {room.features.slice(0, 3).map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-1 text-[0.72rem] px-2.5 py-1 rounded-md bg-rahnile-parchment text-rahnile-charcoal font-medium border border-rahnile-limestone"
                >
                  <Check className="w-3 h-3 text-rahnile-gold" />
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Actions & Enquiry */}
          <div className="pt-4 border-t border-rahnile-limestone flex items-center justify-between gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="text-xs uppercase tracking-wider font-semibold text-rahnile-aubergine hover:text-rahnile-plum flex items-center gap-1 py-2"
            >
              <Eye className="w-3.5 h-3.5 text-rahnile-gold" />
              <span>Full Details</span>
            </button>

            <Link
              href={`/book?roomType=${room.id}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-rahnile-marigold text-rahnile-charcoal font-semibold text-xs uppercase tracking-wider hover:bg-rahnile-gold hover:text-white transition-colors"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Enquire</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Modal Dialog */}
      {modalOpen && (
        <RoomDetailModal room={room} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}

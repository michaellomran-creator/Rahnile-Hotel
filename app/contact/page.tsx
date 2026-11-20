import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Navigation,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Send,
  Sparkles
} from "lucide-react";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import { HOTEL_INFO } from "@/lib/data";

export const metadata = {
  title: "Contact & Location | Rahnile Hotel Bahir Dar",
  description:
    "Contact Rahnile Hotel in Bahir Dar, Ethiopia. Kebele 05, Behind EEPCO Building. Verified telephone, email, WhatsApp, and real interactive Google Map.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-20 bg-rahnile-parchment">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rahnile-limestone border border-rahnile-gold/40 text-xs font-semibold uppercase tracking-wider text-rahnile-plum">
            <MapPin className="w-3.5 h-3.5 text-rahnile-gold" />
            <span>Connect & Find Us</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-rahnile-charcoal">
            Contact & <br />
            <span className="text-rahnile-plum italic font-normal">Location</span>
          </h1>

          <p className="text-rahnile-charcoal/80 text-base sm:text-lg leading-relaxed pt-2">
            We are here to assist with room reservations, airport transportation, conference bookings, and local Lake Tana inquiries. Reach our front desk team in Bahir Dar through any of the channels below.
          </p>
        </div>
      </section>

      {/* Primary Contact Channels Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Telephone & WhatsApp */}
          <div className="bg-white rounded-3xl p-8 border border-rahnile-limestone shadow-subtle space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-rahnile-parchment border border-rahnile-gold/40 flex items-center justify-center text-rahnile-aubergine">
                <Phone className="w-6 h-6 text-rahnile-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-rahnile-charcoal">
                Direct Phone & WhatsApp
              </h3>
              <p className="text-xs text-rahnile-charcoal/70">
                Front desk available 24/7 for booking inquiries and arrival assistance.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-rahnile-limestone text-sm">
              <p>
                <strong className="text-xs uppercase text-rahnile-gold font-sans block">Primary Mobile / WhatsApp:</strong>
                <a
                  href={`tel:${HOTEL_INFO.contact.primaryPhone.replace(/\s+/g, "")}`}
                  className="font-bold text-rahnile-aubergine hover:text-rahnile-gold transition-colors"
                >
                  {HOTEL_INFO.contact.primaryPhone}
                </a>
              </p>
              <p>
                <strong className="text-xs uppercase text-rahnile-gold font-sans block">Secondary Contact:</strong>
                <a
                  href={`tel:${HOTEL_INFO.contact.secondaryPhone.replace(/\s+/g, "")}`}
                  className="text-rahnile-charcoal hover:text-rahnile-gold transition-colors"
                >
                  {HOTEL_INFO.contact.secondaryPhone}
                </a>
              </p>
              <p>
                <strong className="text-xs uppercase text-rahnile-gold font-sans block">Hotel Landline:</strong>
                <span className="text-rahnile-charcoal">{HOTEL_INFO.contact.landline}</span>
              </p>
            </div>
          </div>

          {/* Card 2: Email Inquiries */}
          <div className="bg-white rounded-3xl p-8 border border-rahnile-limestone shadow-subtle space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-rahnile-parchment border border-rahnile-gold/40 flex items-center justify-center text-rahnile-aubergine">
                <Mail className="w-6 h-6 text-rahnile-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-rahnile-charcoal">
                Email Communications
              </h3>
              <p className="text-xs text-rahnile-charcoal/70">
                Send formal reservation inquiries, corporate RFP documents, or travel agent requests.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-rahnile-limestone text-sm">
              <p>
                <strong className="text-xs uppercase text-rahnile-gold font-sans block">General Inquiries:</strong>
                <a
                  href={`mailto:${HOTEL_INFO.contact.email}`}
                  className="font-bold text-rahnile-aubergine hover:text-rahnile-gold transition-colors break-all"
                >
                  {HOTEL_INFO.contact.email}
                </a>
              </p>
              <p>
                <strong className="text-xs uppercase text-rahnile-gold font-sans block">Reservations Desk:</strong>
                <a
                  href={`mailto:${HOTEL_INFO.contact.reservationsEmail}`}
                  className="text-rahnile-charcoal hover:text-rahnile-gold transition-colors break-all"
                >
                  {HOTEL_INFO.contact.reservationsEmail}
                </a>
              </p>
            </div>
          </div>

          {/* Card 3: Physical Address & Landmarks */}
          <div className="bg-white rounded-3xl p-8 border border-rahnile-limestone shadow-subtle space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-rahnile-parchment border border-rahnile-gold/40 flex items-center justify-center text-rahnile-aubergine">
                <MapPin className="w-6 h-6 text-rahnile-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-rahnile-charcoal">
                Hotel Location
              </h3>
              <p className="text-xs text-rahnile-charcoal/70">
                Centrally located behind the Ethiopian Electric Utility building in Kebele 05.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-rahnile-limestone text-xs sm:text-sm">
              <p className="font-medium text-rahnile-charcoal">
                {HOTEL_INFO.address.line1}<br />
                {HOTEL_INFO.address.line2}<br />
                {HOTEL_INFO.address.city}, {HOTEL_INFO.address.region}, {HOTEL_INFO.address.country}
              </p>
              <p className="text-xs text-rahnile-charcoal/60 pt-1 font-mono">
                Plus Code: {HOTEL_INFO.address.plusCode}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Google Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-rahnile-limestone shadow-luxury space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-rahnile-limestone pb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-rahnile-gold font-bold">
                Real Interactive Map
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-rahnile-charcoal mt-1">
                Find Rahnile Hotel on Google Maps
              </h2>
            </div>

            <a
              href={HOTEL_INFO.platforms.googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rahnile-aubergine text-white hover:bg-rahnile-plum text-xs uppercase tracking-wider font-semibold transition-colors shadow-sm"
            >
              <Navigation className="w-3.5 h-3.5 text-rahnile-gold" />
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Embedded Google Map Component */}
          <GoogleMapEmbed showDetails={true} />
        </div>
      </section>

      {/* Contact & Enquiry Note */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 rounded-3xl bg-rahnile-cream border border-rahnile-limestone space-y-3">
          <h3 className="font-serif text-2xl font-bold text-rahnile-charcoal">
            Looking to Reserve a Room or Suite?
          </h3>
          <p className="text-xs sm:text-sm text-rahnile-charcoal/80 max-w-lg mx-auto">
            Please use our dedicated booking enquiry portal to select your travel dates, specify number of guests, and receive direct availability confirmation.
          </p>
          <div className="pt-2">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rahnile-marigold text-rahnile-charcoal text-xs uppercase tracking-wider font-bold hover:bg-rahnile-gold hover:text-white transition-colors"
            >
              Go to Booking Reservation Page
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

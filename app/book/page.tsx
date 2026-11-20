import React, { Suspense } from "react";
import Link from "next/link";
import { CalendarCheck, ShieldCheck, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import { HOTEL_INFO, VERIFIED_ROOMS } from "@/lib/data";

export const metadata = {
  title: "Book Your Stay | Reservation Enquiry | Rahnile Hotel Bahir Dar",
  description:
    "Make a direct reservation enquiry for Rahnile Hotel in Bahir Dar, Ethiopia. Best direct rates, verified room categories, and personal confirmation by our front desk.",
};

export default function BookPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-20 bg-rahnile-parchment">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rahnile-limestone border border-rahnile-gold/40 text-xs font-semibold uppercase tracking-wider text-rahnile-plum">
            <CalendarCheck className="w-3.5 h-3.5 text-rahnile-gold" />
            <span>Direct Reservations</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-rahnile-charcoal">
            Reserve Your Stay at <br />
            <span className="text-rahnile-plum italic font-normal">Rahnile Hotel</span>
          </h1>

          <p className="text-rahnile-charcoal/80 text-base sm:text-lg leading-relaxed pt-2">
            Submit your reservation enquiry directly to our front office in Bahir Dar. Enjoy direct rate guarantees, personalized flexibility, and complimentary assistance with Lake Tana excursions or airport transfers.
          </p>
        </div>
      </section>

      {/* Main Reservation Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Booking Form (8 cols) */}
          <div className="lg:col-span-8">
            <Suspense fallback={<div className="p-12 text-center">Loading reservation system...</div>}>
              <BookingForm />
            </Suspense>
          </div>

          {/* Right Column: Direct Booking Advantages & Contact Card (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Why Book Direct Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-rahnile-limestone shadow-subtle space-y-4">
              <span className="text-xs uppercase tracking-widest text-rahnile-gold font-bold">
                Guest Assurance
              </span>
              <h3 className="font-serif text-xl font-bold text-rahnile-charcoal">
                Direct Booking Advantages
              </h3>

              <div className="space-y-3 pt-2 text-xs text-rahnile-charcoal">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-rahnile-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-rahnile-aubergine font-sans">Best Rate Guarantee</strong>
                    <span className="text-rahnile-charcoal/70">Direct hotel rates without third-party commissions.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-rahnile-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-rahnile-aubergine font-sans">No Immediate Credit Card Charge</strong>
                    <span className="text-rahnile-charcoal/70">Payment handled directly at hotel check-in or via confirmed hotel bank transfer.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-rahnile-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-rahnile-aubergine font-sans">Priority Room Allocation</strong>
                    <span className="text-rahnile-charcoal/70">Quiet floor and preferred balcony views assigned first to direct guests.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-rahnile-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-rahnile-aubergine font-sans">Airport Shuttle Coordination</strong>
                    <span className="text-rahnile-charcoal/70">Pickup coordination with Bahir Dar Airport (BJR) upon flight details.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Need Immediate Assistance Card */}
            <div className="bg-rahnile-aubergine text-white rounded-2xl p-6 sm:p-7 shadow-luxury space-y-4">
              <h4 className="font-serif text-lg font-bold text-rahnile-gold">
                Prefer to Speak with Front Desk?
              </h4>
              <p className="text-xs text-white/80 leading-relaxed">
                If you are arriving today or require immediate telephone confirmation, call our front desk directly in Bahir Dar:
              </p>

              <div className="space-y-2 pt-2 text-xs">
                <a
                  href={`tel:${HOTEL_INFO.contact.primaryPhone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-4 h-4 text-rahnile-marigold flex-shrink-0" />
                  <span className="font-bold text-sm text-white">{HOTEL_INFO.contact.primaryPhone}</span>
                </a>

                <a
                  href={`mailto:${HOTEL_INFO.contact.reservationsEmail}`}
                  className="flex items-center gap-2 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Mail className="w-4 h-4 text-rahnile-gold flex-shrink-0" />
                  <span className="text-white/90 break-all">{HOTEL_INFO.contact.reservationsEmail}</span>
                </a>
              </div>

              <div className="pt-2 text-[0.7rem] text-white/60">
                Bilingual assistance in English and Amharic. 24 hours daily.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

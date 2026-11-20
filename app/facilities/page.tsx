import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Users,
  Wifi,
  Car,
  Clock,
  Sparkles,
  Plane,
  ShieldCheck,
  CheckCircle2,
  CalendarCheck
} from "lucide-react";
import { VERIFIED_FACILITIES, HOTEL_INFO } from "@/lib/data";

export const metadata = {
  title: "Hotel Facilities & Services | Rahnile Hotel Bahir Dar",
  description:
    "Explore business and leisure facilities at Rahnile Hotel in Bahir Dar. Executive conference hall, rooftop sunset terrace, lounge bar, 24/7 front desk, and airport transfers.",
};

export default function FacilitiesPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-20 bg-rahnile-parchment">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rahnile-limestone border border-rahnile-gold/40 text-xs font-semibold uppercase tracking-wider text-rahnile-plum">
            <Briefcase className="w-3.5 h-3.5 text-rahnile-gold" />
            <span>Hospitality & Business</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-rahnile-charcoal">
            Hotel Facilities & <br />
            <span className="text-rahnile-plum italic font-normal">Guest Services</span>
          </h1>

          <p className="text-rahnile-charcoal/80 text-base sm:text-lg leading-relaxed pt-2">
            Whether visiting Bahir Dar for corporate workshops, regional meetings, or leisure exploration of Lake Tana, Rahnile Hotel provides comprehensive amenities designed for productivity and relaxation.
          </p>
        </div>
      </section>

      {/* Feature 1: Executive Conference Hall */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-3xl overflow-hidden border border-rahnile-limestone shadow-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 relative h-80 sm:h-[440px] w-full">
              <Image
                src="/images/rahnile/facility-conference-hall.webp"
                alt="Executive conference hall setup at Rahnile Hotel Bahir Dar"
                fill
                className="object-cover object-center"
              />
              <div className="absolute top-4 left-4 bg-rahnile-aubergine/80 text-rahnile-gold border border-rahnile-gold/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                Meeting & Event Venue
              </div>
            </div>

            <div className="lg:col-span-6 p-8 sm:p-10 space-y-4">
              <span className="text-xs uppercase tracking-widest text-rahnile-gold font-bold">
                Business & Corporate Events
              </span>
              <h2 className="font-serif text-3xl font-bold text-rahnile-charcoal">
                Executive Meeting & Conference Hall
              </h2>
              <p className="text-rahnile-charcoal/80 text-sm leading-relaxed">
                Rahnile Hotel hosts regional workshops, NGO seminars, corporate training sessions, and executive board meetings. Configurable in U-shape, classroom, or banquet configurations with comfortable cushioned seating, podium presentation area, writing surfaces, and natural daylight.
              </p>

              <div className="space-y-2 pt-2 border-t border-rahnile-limestone text-xs text-rahnile-charcoal">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rahnile-gold" />
                  <span>Configurable U-Shape, Classroom, or Theatre Seating</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rahnile-gold" />
                  <span>High-Speed Wi-Fi for Attendees & Organizers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rahnile-gold" />
                  <span>Event Catering: Coffee Breaks, Pastries, and Luncheons</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rahnile-gold" />
                  <span>Dedicated Hospitality Coordinator for Your Event</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rahnile-aubergine text-white text-xs uppercase tracking-wider font-semibold hover:bg-rahnile-plum transition-colors"
                >
                  Request Meeting Hall Proposal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Rooftop Sunset Vantage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-3xl overflow-hidden border border-rahnile-limestone shadow-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 p-8 sm:p-10 space-y-4 order-2 lg:order-1">
              <span className="text-xs uppercase tracking-widest text-rahnile-gold font-bold">
                Scenic Vantage Point
              </span>
              <h2 className="font-serif text-3xl font-bold text-rahnile-charcoal">
                Rooftop Sunset Terrace
              </h2>
              <p className="text-rahnile-charcoal/80 text-sm leading-relaxed">
                Rising above the Kebele 05 neighborhood, our rooftop terrace offers an open-sky perspective on Bahir Dar. Watch the sunset illuminate the western sky toward Lake Tana, enjoy quiet evening conversation, or sip a cocktail as the city lights turn on.
              </p>

              <div className="space-y-2 pt-2 border-t border-rahnile-limestone text-xs text-rahnile-charcoal">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rahnile-gold" />
                  <span>Panoramic Views of Lake Tana Horizon & Skyline</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rahnile-gold" />
                  <span>Golden Hour Photography Vantage</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rahnile-gold" />
                  <span>Intimate Rooftop Seating</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-80 sm:h-[440px] w-full order-1 lg:order-2">
              <Image
                src="/images/rahnile/terrace-rooftop-sunset.webp"
                alt="Couple enjoying rooftop sunset terrace at Rahnile Hotel"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase tracking-widest text-rahnile-gold font-bold">
            Essential Guest Services
          </span>
          <h2 className="font-serif text-3xl font-bold text-rahnile-charcoal">
            Conveniences for Every Traveler
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-rahnile-limestone shadow-subtle space-y-3">
            <Clock className="w-8 h-8 text-rahnile-gold" />
            <h4 className="font-serif text-lg font-bold text-rahnile-charcoal">
              24-Hour Front Desk
            </h4>
            <p className="text-xs text-rahnile-charcoal/75 leading-relaxed">
              Continuous reception desk coverage for late flight arrivals, wake-up calls, and express check-out.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-rahnile-limestone shadow-subtle space-y-3">
            <Plane className="w-8 h-8 text-rahnile-gold" />
            <h4 className="font-serif text-lg font-bold text-rahnile-charcoal">
              Airport Transfers
            </h4>
            <p className="text-xs text-rahnile-charcoal/75 leading-relaxed">
              Convenient pickup and drop-off coordination with Bahir Dar Airport (BJR), located approximately 8 km away.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-rahnile-limestone shadow-subtle space-y-3">
            <Wifi className="w-8 h-8 text-rahnile-gold" />
            <h4 className="font-serif text-lg font-bold text-rahnile-charcoal">
              Complimentary Wi-Fi
            </h4>
            <p className="text-xs text-rahnile-charcoal/75 leading-relaxed">
              Wireless fiber connectivity available across all guest rooms, dining halls, and conference spaces.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-rahnile-limestone shadow-subtle space-y-3">
            <Car className="w-8 h-8 text-rahnile-gold" />
            <h4 className="font-serif text-lg font-bold text-rahnile-charcoal">
              Secure On-Site Parking
            </h4>
            <p className="text-xs text-rahnile-charcoal/75 leading-relaxed">
              Complimentary private parking on hotel grounds with 24-hour security personnel.
            </p>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-rahnile-aubergine text-white rounded-3xl p-8 sm:p-12 shadow-luxury space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            Experience Comfort & Professional Service
          </h3>
          <p className="text-white/80 text-xs sm:text-sm max-w-lg mx-auto">
            Book your stay or enquire about meeting room availability directly with our front office team.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/book"
              className="px-6 py-3 rounded-full bg-rahnile-marigold text-rahnile-charcoal text-xs uppercase tracking-wider font-bold hover:bg-rahnile-gold hover:text-white transition-colors"
            >
              Book Your Stay
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 text-xs uppercase tracking-wider font-semibold transition-colors"
            >
              Contact Hotel Staff
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

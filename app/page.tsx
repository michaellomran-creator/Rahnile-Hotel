import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ChevronRight,
  CalendarCheck,
  Star,
  MapPin,
  Utensils,
  Compass,
  ArrowRight,
  Users,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Coffee,
  Wine,
  Waves
} from "lucide-react";
import Hero from "@/components/Hero";
import RoomCard from "@/components/RoomCard";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import { VERIFIED_ROOMS, VERIFIED_FACILITIES, BAHIR_DAR_DESTINATIONS, HOTEL_INFO, INITIAL_APPROVED_REVIEWS } from "@/lib/data";
import { getPublicReviews } from "@/lib/db";

export default async function HomePage() {
  // Fetch real reviews from DB (falls back to initial approved reviews)
  let reviews = await getPublicReviews();
  if (!reviews || reviews.length === 0) {
    reviews = INITIAL_APPROVED_REVIEWS;
  }
  const featuredReviews = reviews.slice(0, 3);

  return (
    <div className="space-y-0">
      {/* 1 & 2. HERO SECTION */}
      <Hero />

      {/* 3. INTRODUCTION: NILE HERITAGE & HOSPITALITY */}
      <section className="py-20 lg:py-28 bg-rahnile-parchment relative overflow-hidden">
        {/* Subtle decorative Nile curve line */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Story Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rahnile-limestone border border-rahnile-gold/40 text-xs font-semibold uppercase tracking-wider text-rahnile-plum">
                <Waves className="w-3.5 h-3.5 text-rahnile-gold" />
                <span>Nile Heritage Modernism</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-rahnile-charcoal leading-tight">
                Rooted in Comfort, <br />
                <span className="text-rahnile-plum italic font-normal">
                  Inspired by the Flow of the Nile.
                </span>
              </h2>

              <div className="space-y-4 text-rahnile-charcoal/85 text-base sm:text-lg leading-relaxed font-sans">
                <p>
                  Rooted in the spirit of comfort and inspired by the Nile, <strong>Rahnile Hotel</strong> offers a welcoming place to stay in Bahir Dar. Whether visiting for business or discovering the timeless beauty of Lake Tana and the Blue Nile Falls, guests enjoy a comfortable setting and attentive hospitality.
                </p>
                <p className="text-sm sm:text-base text-rahnile-charcoal/80">
                  The hotel’s name draws from classical Ge&apos;ez roots where <em>Rāha</em> signifies rest, ease, and peaceful sanctuary, united with the life-giving Nile River that defines Bahir Dar. We invite you to experience city convenience balanced with serene Ethiopian warmth.
                </p>
              </div>

              {/* Three Signature Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-white border border-rahnile-limestone shadow-subtle space-y-1">
                  <span className="font-serif text-2xl font-bold text-rahnile-gold">01</span>
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-rahnile-aubergine">
                    Sanctuary of Rest
                  </h4>
                  <p className="text-xs text-rahnile-charcoal/70">
                    Quiet, air-conditioned rooms dressed in fresh linens with private balconies.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-rahnile-limestone shadow-subtle space-y-1">
                  <span className="font-serif text-2xl font-bold text-rahnile-gold">02</span>
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-rahnile-aubergine">
                    Heart of the City
                  </h4>
                  <p className="text-xs text-rahnile-charcoal/70">
                    Behind EEPCO in Kebele 05, moments from boat jetties and commercial hubs.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-rahnile-limestone shadow-subtle space-y-1">
                  <span className="font-serif text-2xl font-bold text-rahnile-gold">03</span>
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-rahnile-aubergine">
                    Attentive Care
                  </h4>
                  <p className="text-xs text-rahnile-charcoal/70">
                    24/7 bilingual front desk assisting with boat trips and airport transfers.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-rahnile-aubergine hover:text-rahnile-gold transition-colors group"
                >
                  <span>Learn More About Our Philosophy</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Visual Composition (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Image: Lobby & Doorman */}
                <div className="relative h-96 sm:h-[460px] w-full rounded-2xl overflow-hidden shadow-luxury border-2 border-rahnile-gold/30">
                  <Image
                    src="/images/rahnile/hotel-entrance-lobby.webp"
                    alt="Rahnile Hotel Bahir Dar reception lobby and entrance with staff doorman in uniform"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 450px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rahnile-aubergine/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs font-sans text-rahnile-gold font-semibold uppercase tracking-wider">
                      Warm Hospitality on Arrival
                    </p>
                    <p className="font-serif text-lg font-bold">
                      Main Lobby & Reception
                    </p>
                  </div>
                </div>

                {/* Overlapping Floating Card: Front Desk Check-in */}
                <div className="hidden sm:block absolute -bottom-8 -left-8 w-60 h-44 rounded-xl overflow-hidden shadow-2xl border-2 border-white">
                  <Image
                    src="/images/rahnile/facility-front-desk.webp"
                    alt="Rahnile Hotel front desk check in"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-2 left-3 right-3 text-white text-[0.65rem] font-medium">
                    24-Hour Reception Desk
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ACCOMMODATION PREVIEW */}
      <section className="py-20 lg:py-28 bg-rahnile-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-rahnile-gold font-bold">
                Guest Accommodations
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-rahnile-charcoal">
                Rooms Designed for Rest
              </h2>
              <p className="text-rahnile-charcoal/75 text-sm sm:text-base">
                Discover genuine guest rooms tailored for business professionals, couples, and traveling families in Bahir Dar.
              </p>
            </div>

            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-rahnile-plum text-rahnile-plum hover:bg-rahnile-plum hover:text-white transition-colors text-xs uppercase tracking-wider font-semibold"
            >
              <span>View All Categories</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Rooms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VERIFIED_ROOMS.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>

          {/* Bottom Trust Assurance */}
          <div className="mt-12 p-6 rounded-2xl bg-rahnile-parchment border border-rahnile-limestone flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-rahnile-charcoal/80">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-rahnile-gold flex-shrink-0" />
              <span>
                <strong>Direct Rate Guarantee:</strong> Enquire directly with our reception for current seasonal rates, group packages, and personalized arrangements.
              </span>
            </div>
            <Link
              href="/book"
              className="whitespace-nowrap px-4 py-2 rounded-lg bg-rahnile-aubergine text-white hover:bg-rahnile-plum font-semibold uppercase tracking-wider text-[0.72rem] transition-colors"
            >
              Check Availability
            </Link>
          </div>
        </div>
      </section>

      {/* 5. DINING PREVIEW */}
      <section className="py-20 lg:py-28 bg-rahnile-aubergine text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Story Column (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rahnile-plum border border-rahnile-gold/40 text-xs font-semibold uppercase tracking-wider text-rahnile-gold">
                <Utensils className="w-3.5 h-3.5" />
                <span>Culinary & Wine Experience</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Authentic Flavors, <br />
                <span className="text-rahnile-marigold italic font-normal">
                  Open-Air Veranda Dining.
                </span>
              </h2>

              <p className="text-white/80 text-base leading-relaxed">
                At Rahnile Hotel, dining brings together rich Ethiopian culinary traditions and international favorites. Wake up to our morning breakfast buffet, gather with colleagues over fresh regional salads and hearty mains, or savor an evening glass of wine on our elevated terrace overlooking the city.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rahnile-plum border border-rahnile-gold/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Coffee className="w-3 h-3 text-rahnile-gold" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Main Restaurant & Breakfast</h4>
                    <p className="text-xs text-white/70">Indoor dining hall serving breakfast, traditional Ethiopian dishes, and continental specialties.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rahnile-plum border border-rahnile-gold/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Wine className="w-3 h-3 text-rahnile-gold" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Veranda Terrace & Evening Lounge</h4>
                    <p className="text-xs text-white/70">Relax with local beers, curated wines, and refreshing drinks in a breezy open-air setting.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/dining"
                  className="px-6 py-3 rounded-full bg-rahnile-marigold text-rahnile-charcoal font-semibold text-xs uppercase tracking-wider hover:bg-rahnile-gold hover:text-white transition-colors shadow-md"
                >
                  Explore Dining Experience
                </Link>
                <Link
                  href="/book"
                  className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors text-xs uppercase tracking-wider font-semibold"
                >
                  Table Enquiry
                </Link>
              </div>
            </div>

            {/* Right Mosaic of Genuine Food Photography (6 cols) */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden shadow-luxury border border-rahnile-gold/30 group">
                  <Image
                    src="/images/rahnile/dining-gourmet-dinner.webp"
                    alt="Fine dining table setting at Rahnile Hotel with wine, red rose and gourmet steak dish"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs text-white font-serif">Gourmet Dinner</span>
                </div>

                <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden shadow-luxury border border-rahnile-gold/30 group">
                  <Image
                    src="/images/rahnile/dining-fresh-salad.webp"
                    alt="Fresh avocado and vegetable culinary presentation at Rahnile Hotel"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs text-white font-serif">Fresh Seasonal Salads</span>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden shadow-luxury border border-rahnile-gold/30 group">
                  <Image
                    src="/images/rahnile/dining-main-restaurant.webp"
                    alt="Rahnile Hotel main restaurant interior with dressed tables and green accent wall"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs text-white font-serif">Indoor Dining Hall</span>
                </div>

                <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden shadow-luxury border border-rahnile-gold/30 group">
                  <Image
                    src="/images/rahnile/dining-terrace-view.webp"
                    alt="Open air dining terrace with long banquet table and panoramic Bahir Dar view"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs text-white font-serif">Open-Air Veranda</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FACILITIES & EXPERIENCES */}
      <section className="py-20 lg:py-28 bg-rahnile-parchment relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-rahnile-gold font-bold">
              Hotel Amenities & Services
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-rahnile-charcoal">
              Thoughtfully Appointed for Your Stay
            </h2>
            <p className="text-rahnile-charcoal/75 text-sm sm:text-base">
              From executive conference meetings to sunset drinks on the terrace, explore the verified facilities at Rahnile Hotel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VERIFIED_FACILITIES.map((fac) => (
              <div
                key={fac.id}
                className="bg-white rounded-2xl overflow-hidden border border-rahnile-limestone shadow-subtle hover:shadow-luxury transition-all duration-300 flex flex-col group"
              >
                {fac.image && (
                  <div className="relative h-52 w-full overflow-hidden bg-rahnile-limestone">
                    <Image
                      src={fac.image}
                      alt={fac.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-rahnile-aubergine/80 text-rahnile-gold border border-rahnile-gold/30 text-[0.68rem] uppercase tracking-wider font-semibold">
                      {fac.category}
                    </span>
                  </div>
                )}

                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    {fac.amharicName && (
                      <p className="text-rahnile-plum text-xs font-medium tracking-wider mb-1">
                        {fac.amharicName}
                      </p>
                    )}
                    <h3 className="font-serif text-xl font-bold text-rahnile-charcoal group-hover:text-rahnile-aubergine transition-colors">
                      {fac.name}
                    </h3>
                    <p className="text-rahnile-charcoal/75 text-xs sm:text-sm leading-relaxed mt-2">
                      {fac.description}
                    </p>

                    <div className="mt-4 space-y-1.5 pt-3 border-t border-rahnile-limestone">
                      {fac.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 text-xs text-rahnile-charcoal">
                          <CheckCircle2 className="w-3.5 h-3.5 text-rahnile-gold flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/facilities"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-rahnile-aubergine hover:text-rahnile-gold transition-colors"
            >
              <span>Explore All Verified Facilities & Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. DISCOVER BAHIR DAR */}
      <section className="py-20 lg:py-28 bg-rahnile-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-rahnile-gold font-bold">
                Destination Guide
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-rahnile-charcoal">
                Discover Bahir Dar & Lake Tana
              </h2>
              <p className="text-rahnile-charcoal/75 text-sm sm:text-base">
                Bahir Dar is the gateway to ancient island monasteries, the source of the Blue Nile, and scenic Ethiopian landscapes.
              </p>
            </div>

            <Link
              href="/explore"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-rahnile-plum text-rahnile-plum hover:bg-rahnile-plum hover:text-white transition-colors text-xs uppercase tracking-wider font-semibold"
            >
              <span>View Full Destination Guide</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BAHIR_DAR_DESTINATIONS.map((dest) => (
              <div
                key={dest.id}
                className="bg-white rounded-2xl overflow-hidden border border-rahnile-limestone shadow-subtle hover:shadow-luxury transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-44 w-full overflow-hidden bg-rahnile-limestone">
                  <Image
                    src={dest.image}
                    alt={dest.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-3 text-[0.7rem] text-rahnile-gold font-medium">
                    {dest.distance}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-grow justify-between space-y-3">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-rahnile-charcoal group-hover:text-rahnile-aubergine transition-colors">
                      {dest.title}
                    </h3>
                    <p className="text-rahnile-charcoal/75 text-xs leading-relaxed mt-1 line-clamp-3">
                      {dest.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-rahnile-limestone text-[0.7rem] text-rahnile-plum font-semibold">
                    💡 {dest.practicalTip}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-rahnile-parchment border border-rahnile-limestone text-center text-xs text-rahnile-charcoal/75">
            <strong>Excursion Note:</strong> Tours and boat transportation are independent local operations. Our front desk team is pleased to coordinate authorized local captains and guides directly from nearby docks.
          </div>
        </div>
      </section>

      {/* 8. GUEST REVIEWS PREVIEW */}
      <section className="py-20 lg:py-28 bg-rahnile-parchment relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase tracking-widest text-rahnile-gold font-bold">
              Guest Feedback & Credibility
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-rahnile-charcoal">
              Traveler Reviews & Verified Ratings
            </h2>
            <p className="text-rahnile-charcoal/75 text-sm sm:text-base">
              Read real perspectives from domestic and international visitors who have stayed at Rahnile Hotel in Bahir Dar.
            </p>
          </div>

          {/* External Platforms Score Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {HOTEL_INFO.externalRatings.map((ext) => (
              <a
                key={ext.platform}
                href={ext.verifiedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-white border border-rahnile-limestone shadow-subtle hover:shadow-luxury hover:border-rahnile-gold/50 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-lg font-bold text-rahnile-charcoal">
                    {ext.platform}
                  </h4>
                  <ExternalLink className="w-4 h-4 text-rahnile-charcoal/40 group-hover:text-rahnile-gold transition-colors" />
                </div>

                <div className="flex items-baseline gap-2 my-3">
                  <span className="text-3xl font-extrabold text-rahnile-aubergine font-serif">
                    {ext.rating}
                  </span>
                  <span className="text-xs text-rahnile-charcoal/60">
                    / {ext.maxRating}
                  </span>
                  <div className="flex text-rahnile-marigold ml-auto">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-rahnile-charcoal/70 leading-relaxed">
                  {ext.highlight}
                </p>

                <span className="inline-block mt-3 text-[0.7rem] uppercase tracking-wider font-semibold text-rahnile-plum group-hover:underline">
                  View Verified Listing →
                </span>
              </a>
            ))}
          </div>

          {/* Recent Approved Direct Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredReviews.map((rev) => (
              <div
                key={rev.id}
                className="p-6 rounded-2xl bg-white border border-rahnile-limestone shadow-subtle flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-rahnile-marigold">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className={`w-4 h-4 ${
                            s <= rev.rating ? "fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    {rev.dateOfStay && (
                      <span className="text-[0.68rem] text-rahnile-charcoal/60">
                        {rev.dateOfStay}
                      </span>
                    )}
                  </div>

                  <h4 className="font-serif text-base font-bold text-rahnile-charcoal">
                    {rev.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-rahnile-charcoal/80 leading-relaxed italic">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-rahnile-limestone flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-rahnile-aubergine">{rev.guestName}</p>
                    {rev.guestLocation && (
                      <p className="text-[0.68rem] text-rahnile-charcoal/60">{rev.guestLocation}</p>
                    )}
                  </div>
                  <span className="px-2 py-0.5 rounded bg-rahnile-parchment text-rahnile-plum text-[0.65rem] font-medium">
                    Verified Stay
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Review CTAs */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/reviews"
              className="px-6 py-3 rounded-full bg-rahnile-aubergine text-white hover:bg-rahnile-plum transition-colors text-xs uppercase tracking-wider font-semibold"
            >
              Read All Guest Reviews
            </Link>
            <Link
              href="/reviews#share-review"
              className="px-6 py-3 rounded-full border border-rahnile-plum text-rahnile-plum hover:bg-rahnile-plum hover:text-white transition-colors text-xs uppercase tracking-wider font-semibold"
            >
              Share Your Rahnile Experience
            </Link>
          </div>
        </div>
      </section>

      {/* 9. GALLERY PREVIEW */}
      <section className="py-20 lg:py-28 bg-rahnile-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-rahnile-gold font-bold">
                Authentic Photography
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-rahnile-charcoal">
                Life at Rahnile Hotel
              </h2>
              <p className="text-rahnile-charcoal/75 text-sm sm:text-base">
                Explore genuine photographs of our property, accommodations, veranda dining, and rooftop views.
              </p>
            </div>

            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-rahnile-plum text-rahnile-plum hover:bg-rahnile-plum hover:text-white transition-colors text-xs uppercase tracking-wider font-semibold"
            >
              <span>View Full Gallery (15 Photos)</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Curated Grid of Real Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-subtle group">
              <Image
                src="/images/rahnile/hotel-exterior-evening.webp"
                alt="Hotel exterior twilight"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
              <span className="absolute bottom-3 left-3 text-white text-xs font-serif font-bold">Twilight Facade</span>
            </div>

            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-subtle group">
              <Image
                src="/images/rahnile/room-deluxe-twin.webp"
                alt="Deluxe Twin Room"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
              <span className="absolute bottom-3 left-3 text-white text-xs font-serif font-bold">Deluxe Room</span>
            </div>

            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-subtle group">
              <Image
                src="/images/rahnile/terrace-rooftop-sunset.webp"
                alt="Rooftop sunset terrace view"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
              <span className="absolute bottom-3 left-3 text-white text-xs font-serif font-bold">Rooftop Sunset</span>
            </div>

            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-subtle group">
              <Image
                src="/images/rahnile/dining-couple-toast.webp"
                alt="Couple toasting wine at restaurant"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
              <span className="absolute bottom-3 left-3 text-white text-xs font-serif font-bold">Evening Dining</span>
            </div>
          </div>
        </div>
      </section>

      {/* 10. LOCATION PREVIEW & INTERACTIVE MAP */}
      <section className="py-20 lg:py-28 bg-rahnile-parchment relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Address & Context (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rahnile-limestone border border-rahnile-gold/40 text-xs font-semibold uppercase tracking-wider text-rahnile-plum">
                <MapPin className="w-3.5 h-3.5 text-rahnile-gold" />
                <span>Prime Central Location</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-rahnile-charcoal leading-tight">
                Conveniently Located in Bahir Dar.
              </h2>

              <div className="space-y-3 text-sm text-rahnile-charcoal/80 leading-relaxed">
                <p>
                  <strong>Address:</strong> Kebele 05, Behind EEPCO (Ethiopian Electric Utility) Building, Bahir Dar, Ethiopia.
                </p>
                <p>
                  Ideally situated near the heart of Bahir Dar, Rahnile Hotel provides peaceful retreat while maintaining quick access to Lake Tana boat departure jetties (~700 meters), downtown markets, and regional transit arteries.
                </p>
              </div>

              <div className="space-y-2 pt-2 text-xs text-rahnile-charcoal">
                <p><strong>Phone:</strong> {HOTEL_INFO.contact.primaryPhone} / {HOTEL_INFO.contact.secondaryPhone}</p>
                <p><strong>Email:</strong> {HOTEL_INFO.contact.email}</p>
                <p><strong>Airport Transfer:</strong> Coordinated upon reservation enquiry</p>
              </div>

              <div className="pt-2">
                <a
                  href={HOTEL_INFO.platforms.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rahnile-aubergine text-white hover:bg-rahnile-plum transition-colors text-xs uppercase tracking-wider font-semibold shadow-md"
                >
                  <MapPin className="w-3.5 h-3.5 text-rahnile-gold" />
                  <span>Get Directions in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Real Google Map Embed (7 cols) */}
            <div className="lg:col-span-7">
              <GoogleMapEmbed />
            </div>
          </div>
        </div>
      </section>

      {/* 11. FINAL RESERVATION CTA */}
      <section className="py-24 bg-gradient-to-b from-rahnile-aubergine to-[#251522] text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-nile-pattern pointer-events-none opacity-30" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-rahnile-gold font-bold">
            Plan Your Journey
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            YOUR STAY IN BAHIR DAR <br />
            <span className="text-rahnile-marigold italic font-normal">STARTS HERE.</span>
          </h2>

          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Reserve directly with Rahnile Hotel to secure personalized assistance, reliable availability confirmation, and genuine Ethiopian hospitality.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/book"
              className="px-8 py-4 rounded-full bg-rahnile-marigold text-rahnile-charcoal font-bold text-xs uppercase tracking-widest hover:bg-rahnile-gold hover:text-white transition-all duration-300 shadow-luxury hover:shadow-glow-gold flex items-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Make an Enquiry</span>
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors text-xs uppercase tracking-widest font-semibold"
            >
              Contact Front Desk
            </Link>
          </div>

          <p className="text-xs text-white/50 pt-4">
            Kebele 05, Behind EEPCO Building • Bahir Dar, Ethiopia • Call: {HOTEL_INFO.contact.primaryPhone}
          </p>
        </div>
      </section>
    </div>
  );
}

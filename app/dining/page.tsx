import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Utensils, Coffee, Wine, Clock, CheckCircle2, CalendarCheck, ShieldCheck, Waves } from "lucide-react";
import { HOTEL_INFO } from "@/lib/data";

export const metadata = {
  title: "Dining & Terrace | Restaurant & Bar at Rahnile Hotel Bahir Dar",
  description:
    "Experience delicious Ethiopian cuisine and continental dining at Rahnile Hotel. Indoor restaurant, open-air veranda terrace dining, and evening cocktail lounge.",
};

export default function DiningPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-20 bg-rahnile-parchment">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rahnile-limestone border border-rahnile-gold/40 text-xs font-semibold uppercase tracking-wider text-rahnile-plum">
            <Utensils className="w-3.5 h-3.5 text-rahnile-gold" />
            <span>Culinary Hospitality</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-rahnile-charcoal">
            Dining & <br />
            <span className="text-rahnile-plum italic font-normal">Terrace Bar</span>
          </h1>

          <p className="text-rahnile-charcoal/80 text-base sm:text-lg leading-relaxed pt-2">
            Enjoy warm hospitality and flavorful dining at Rahnile Hotel. From freshly prepared morning breakfasts to authentic Ethiopian traditional meals and candlelit evening dinners, each meal is served in comfortable, relaxed surroundings.
          </p>
        </div>
      </section>

      {/* Main Dining Venues */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 space-y-16">
        {/* Venue 1: Main Indoor Dining Hall */}
        <div className="bg-white rounded-3xl overflow-hidden border border-rahnile-limestone shadow-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 relative h-80 sm:h-96 w-full">
              <Image
                src="/images/rahnile/dining-main-restaurant.webp"
                alt="Rahnile Hotel main restaurant with dressed tables"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="lg:col-span-6 p-8 sm:p-10 space-y-4">
              <span className="text-xs uppercase tracking-widest text-rahnile-gold font-bold">
                Indoor Restaurant
              </span>
              <h2 className="font-serif text-3xl font-bold text-rahnile-charcoal">
                Rahnile Main Restaurant
              </h2>
              <p className="text-rahnile-charcoal/80 text-sm leading-relaxed">
                Our main dining room features an intimate, refined aesthetic with olive green accent walls, framed Ethiopian artwork, and tables elegantly dressed in crisp linens. It offers a calm and comfortable environment for breakfast meetings, family meals, and relaxed evening dinners.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-rahnile-charcoal font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rahnile-gold" />
                  <span>Complimentary Breakfast Buffet</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rahnile-gold" />
                  <span>Traditional Ethiopian Injera</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rahnile-gold" />
                  <span>Continental Steaks & Pastas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rahnile-gold" />
                  <span>Attentive Table Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Venue 2: Open-Air Terrace Veranda */}
        <div className="bg-white rounded-3xl overflow-hidden border border-rahnile-limestone shadow-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 p-8 sm:p-10 space-y-4 order-2 lg:order-1">
              <span className="text-xs uppercase tracking-widest text-rahnile-gold font-bold">
                Al Fresco Veranda
              </span>
              <h2 className="font-serif text-3xl font-bold text-rahnile-charcoal">
                Veranda & Panoramic Dining Terrace
              </h2>
              <p className="text-rahnile-charcoal/80 text-sm leading-relaxed">
                Step onto our breezy open-air veranda where the fresh currents from Lake Tana bring natural coolness throughout the day. With expansive long-table banquet configurations and private alcoves, it is a favored destination for both hotel guests and local residents seeking elevated dining with views of Bahir Dar greenery.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-rahnile-charcoal font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rahnile-gold" />
                  <span>Open-Air Bahir Dar Vistas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rahnile-gold" />
                  <span>Group & Family Banquet Seating</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rahnile-gold" />
                  <span>Afternoon Coffee & Refreshments</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rahnile-gold" />
                  <span>Breezy Lake Tana Climate</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 relative h-80 sm:h-96 w-full order-1 lg:order-2">
              <Image
                src="/images/rahnile/dining-terrace-view.webp"
                alt="Open air dining terrace with long table at Rahnile Hotel"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Venue 3: Lounge Cocktail Bar */}
        <div className="bg-white rounded-3xl overflow-hidden border border-rahnile-limestone shadow-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 relative h-80 sm:h-96 w-full">
              <Image
                src="/images/rahnile/facility-lounge-bar.webp"
                alt="Rahnile Hotel lounge and cocktail bar area"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="lg:col-span-6 p-8 sm:p-10 space-y-4">
              <span className="text-xs uppercase tracking-widest text-rahnile-gold font-bold">
                Lounge & Social
              </span>
              <h2 className="font-serif text-3xl font-bold text-rahnile-charcoal">
                Lounge & Evening Cocktail Bar
              </h2>
              <p className="text-rahnile-charcoal/80 text-sm leading-relaxed">
                Unwind in comfortable leather armchairs under ambient recessed lighting. Our lounge bar is the perfect meeting spot to discuss the day’s adventures on Lake Tana, enjoy chilled Ethiopian beers, sample regional and imported wines, or watch sports on satellite TV.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-rahnile-charcoal font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rahnile-gold" />
                  <span>Chilled Local Beers (St. George, Habesha, etc.)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rahnile-gold" />
                  <span>Selected Ethiopian & Imported Wines</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rahnile-gold" />
                  <span>Fresh Juices & Hot Beverages</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rahnile-gold" />
                  <span>Casual Social Seating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culinary Gallery Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs uppercase tracking-widest text-rahnile-gold font-bold">
            Real Kitchen & Plate Photography
          </span>
          <h2 className="font-serif text-3xl font-bold text-rahnile-charcoal">
            Culinary Highlights
          </h2>
          <p className="text-xs sm:text-sm text-rahnile-charcoal/70">
            Real dishes and culinary moments captured at Rahnile Hotel.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="relative h-72 rounded-2xl overflow-hidden shadow-subtle group">
            <Image
              src="/images/rahnile/dining-gourmet-dinner.webp"
              alt="Gourmet dish with wine at Rahnile Hotel"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 text-white text-xs font-serif font-bold">
              Gourmet Main Course & Red Wine
            </span>
          </div>

          <div className="relative h-72 rounded-2xl overflow-hidden shadow-subtle group">
            <Image
              src="/images/rahnile/dining-fresh-salad.webp"
              alt="Fresh avocado salad presentation"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 text-white text-xs font-serif font-bold">
              Fresh Local Avocado & Crisp Greens
            </span>
          </div>

          <div className="relative h-72 rounded-2xl overflow-hidden shadow-subtle group">
            <Image
              src="/images/rahnile/dining-couple-toast.webp"
              alt="Guests enjoying dinner in restaurant"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 text-white text-xs font-serif font-bold">
              Evening Atmosphere & Dining
            </span>
          </div>
        </div>
      </section>

      {/* Confirmed Dining Hours */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-rahnile-aubergine text-white rounded-3xl p-8 sm:p-12 shadow-luxury">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <span className="text-xs uppercase tracking-widest text-rahnile-gold font-bold">
              Service Hours
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Meal & Dining Service Schedule
            </h3>
            <p className="text-xs text-white/70">
              Times subject to hotel management operational schedule. Room service available upon request.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <Clock className="w-5 h-5 text-rahnile-gold mx-auto" />
              <h4 className="font-bold text-sm">Breakfast Buffet</h4>
              <p className="text-xs text-rahnile-marigold font-mono">07:00 – 10:00</p>
              <p className="text-[0.7rem] text-white/60">Daily in Main Dining</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <Clock className="w-5 h-5 text-rahnile-gold mx-auto" />
              <h4 className="font-bold text-sm">Lunch Service</h4>
              <p className="text-xs text-rahnile-marigold font-mono">12:00 – 15:00</p>
              <p className="text-[0.7rem] text-white/60">Veranda & Restaurant</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <Clock className="w-5 h-5 text-rahnile-gold mx-auto" />
              <h4 className="font-bold text-sm">Dinner Service</h4>
              <p className="text-xs text-rahnile-marigold font-mono">18:30 – 22:00</p>
              <p className="text-[0.7rem] text-white/60">A la Carte & Specials</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <Clock className="w-5 h-5 text-rahnile-gold mx-auto" />
              <h4 className="font-bold text-sm">Lounge Bar</h4>
              <p className="text-xs text-rahnile-marigold font-mono">11:00 – Late</p>
              <p className="text-[0.7rem] text-white/60">Beverages & Snacks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dining & Table Enquiry CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-rahnile-limestone shadow-subtle space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-rahnile-charcoal">
            Planning a Group Meal or Special Event?
          </h3>
          <p className="text-rahnile-charcoal/70 text-sm max-w-lg mx-auto">
            Contact our hospitality team for conference luncheons, private group dinners on the veranda, or custom culinary arrangements.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-rahnile-aubergine text-white text-xs uppercase tracking-wider font-semibold hover:bg-rahnile-plum transition-colors"
            >
              Contact Dining Management
            </Link>
            <Link
              href="/book"
              className="px-6 py-3 rounded-full bg-rahnile-marigold text-rahnile-charcoal text-xs uppercase tracking-wider font-bold hover:bg-rahnile-gold hover:text-white transition-colors"
            >
              Book Room with Breakfast
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

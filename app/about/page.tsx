import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Waves, Sparkles, Compass, ShieldCheck, Heart, CalendarCheck, MapPin } from "lucide-react";
import { HOTEL_INFO } from "@/lib/data";

export const metadata = {
  title: "About Rahnile Hotel | Nile Heritage & Story",
  description:
    "Discover the story, meaning, and hospitality philosophy of Rahnile Hotel in Bahir Dar, Ethiopia. Inspired by Ge'ez roots of comfort and the Blue Nile.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-20 bg-rahnile-parchment">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rahnile-limestone border border-rahnile-gold/40 text-xs font-semibold uppercase tracking-wider text-rahnile-plum">
            <Waves className="w-3.5 h-3.5 text-rahnile-gold" />
            <span>Identity & Heritage</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-rahnile-charcoal">
            The Story of <br />
            <span className="text-rahnile-plum italic font-normal">Rahnile Hotel</span>
          </h1>

          <p className="text-rahnile-gold font-sans text-xs tracking-[0.25em] uppercase font-semibold">
            ራህናይል ሆቴል • Kebele 05, Bahir Dar, Ethiopia
          </p>

          <p className="text-rahnile-charcoal/80 text-base sm:text-lg leading-relaxed pt-2">
            A welcoming sanctuary in Bahir Dar where the ancient Ethiopian concept of restful comfort meets the timeless current of the Blue Nile.
          </p>
        </div>
      </section>

      {/* Hero Visual Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="relative h-[360px] sm:h-[480px] rounded-3xl overflow-hidden shadow-luxury border-2 border-rahnile-gold/30">
          <Image
            src="/images/rahnile/hotel-exterior-evening.webp"
            alt="Rahnile Hotel Bahir Dar exterior"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rahnile-aubergine/80 via-black/20 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white max-w-2xl">
            <span className="text-rahnile-gold text-xs uppercase tracking-widest font-bold">
              Architectural Presence
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-1">
              An Established Destination in Kebele 05
            </h2>
            <p className="text-white/80 text-xs sm:text-sm mt-2">
              Recognizable by its distinctive curved facade and illuminated purple architectural column rising into the Bahir Dar twilight sky.
            </p>
          </div>
        </div>
      </section>

      {/* Meaning of the Name Rahnile */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-rahnile-limestone shadow-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4 border-b lg:border-b-0 lg:border-r border-rahnile-limestone pb-8 lg:pb-0 lg:pr-8">
              <span className="text-xs uppercase tracking-widest text-rahnile-gold font-bold">
                Etymology & Linguistic Roots
              </span>
              <h3 className="font-serif text-3xl font-bold text-rahnile-charcoal leading-snug">
                Where &ldquo;Rah&rdquo; Meets the &ldquo;Nile&rdquo;
              </h3>
              <p className="text-rahnile-charcoal/80 text-sm leading-relaxed">
                The name <strong>Rahnile</strong> (also styled as <em>RahNile</em>) is a deliberate, poetically constructed brand name uniting two cultural anchors:
              </p>
              <div className="p-4 rounded-xl bg-rahnile-parchment border border-rahnile-gold/30 text-xs text-rahnile-aubergine space-y-2">
                <p>
                  <strong>1. &ldquo;Rah&rdquo; (ራህ):</strong> Rooted in classical Ge&apos;ez and ancient Semitic vocabulary (<em>Rāha / Rahn</em>), expressing tranquility, ease, bodily rest, and freedom from weariness.
                </p>
                <p>
                  <strong>2. &ldquo;Nile&rdquo; (ናይል / አባይ):</strong> Celebrating the historic Blue Nile River (Abay), which bursts out of Lake Tana right here in Bahir Dar.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-widest text-rahnile-gold font-bold">
                The Founding Promise
              </span>
              <h4 className="font-serif text-2xl font-bold text-rahnile-charcoal">
                &ldquo;A Place to Feel at Ease&rdquo;
              </h4>
              <p className="text-rahnile-charcoal/80 text-sm sm:text-base leading-relaxed">
                When travelers arrive in Bahir Dar—whether after a flight from Addis Ababa, an all-day excursion across the waters of Lake Tana, or a demanding schedule of NGO or governmental conferences—they seek more than just a bed. They seek genuine hospitality and tranquility.
              </p>
              <p className="text-rahnile-charcoal/80 text-sm leading-relaxed">
                Rahnile Hotel was envisioned to fulfill that exact promise: an unpretentious, reliable three-star city hotel where personalized attention, clean accommodations, and honest Ethiopian warmth make every guest feel completely at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality Philosophy & Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-widest text-rahnile-gold font-bold">
            Hospitality Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-rahnile-charcoal">
            The Pillars of Our Guest Experience
          </h2>
          <p className="text-rahnile-charcoal/70 text-sm">
            Rooted in Ethiopian values of neighborliness, generous reception, and attentive service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-rahnile-limestone shadow-subtle space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rahnile-parchment border border-rahnile-gold/40 flex items-center justify-center text-rahnile-aubergine">
              <Heart className="w-6 h-6 text-rahnile-gold" />
            </div>
            <h3 className="font-serif text-xl font-bold text-rahnile-charcoal">
              Warm Ethiopian Welcome
            </h3>
            <p className="text-rahnile-charcoal/75 text-sm leading-relaxed">
              From our uniformed doorman greeting you upon arrival to our bilingual front desk team ready 24/7, you are received with the genuine kindness that makes Ethiopia renowned worldwide.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-rahnile-limestone shadow-subtle space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rahnile-parchment border border-rahnile-gold/40 flex items-center justify-center text-rahnile-aubergine">
              <Compass className="w-6 h-6 text-rahnile-gold" />
            </div>
            <h3 className="font-serif text-xl font-bold text-rahnile-charcoal">
              Connection to Bahir Dar
            </h3>
            <p className="text-rahnile-charcoal/75 text-sm leading-relaxed">
              We take pride in connecting visitors with reliable local boat captains for monastery visits, arranging airport transfers to Bahir Dar Airport (BJR), and recommending authentic cultural craft markets.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-rahnile-limestone shadow-subtle space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rahnile-parchment border border-rahnile-gold/40 flex items-center justify-center text-rahnile-aubergine">
              <ShieldCheck className="w-6 h-6 text-rahnile-gold" />
            </div>
            <h3 className="font-serif text-xl font-bold text-rahnile-charcoal">
              Integrity & Trust
            </h3>
            <p className="text-rahnile-charcoal/75 text-sm leading-relaxed">
              We represent our hotel honestly as an established 3-star property with 40+ comfortable guest rooms, dedicated meeting spaces, free parking, and reliable on-site amenities.
            </p>
          </div>
        </div>
      </section>

      {/* Photographic Story Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-luxury border border-rahnile-gold/30">
            <Image
              src="/images/rahnile/hotel-entrance-lobby.webp"
              alt="Rahnile lobby entrance and reception"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-serif">
              Main Entrance & Chandelier Lobby
            </div>
          </div>

          <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-luxury border border-rahnile-gold/30">
            <Image
              src="/images/rahnile/terrace-rooftop-sunset.webp"
              alt="Couple on rooftop terrace at dusk"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-serif">
              Rooftop Sunset Terrace Overlooking Bahir Dar
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-rahnile-aubergine text-white rounded-3xl p-10 sm:p-14 shadow-luxury space-y-6">
          <span className="text-xs uppercase tracking-widest text-rahnile-gold font-bold">
            Experience Rahnile Hotel
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            We Look Forward to Welcoming You to Bahir Dar
          </h2>
          <p className="text-white/80 text-sm max-w-xl mx-auto leading-relaxed">
            Whether for vacation exploration or business commitments, experience comfortable accommodation and caring hospitality.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/rooms"
              className="px-6 py-3 rounded-full bg-rahnile-marigold text-rahnile-charcoal font-semibold text-xs uppercase tracking-wider hover:bg-rahnile-gold hover:text-white transition-colors"
            >
              View Our Rooms
            </Link>
            <Link
              href="/book"
              className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors text-xs uppercase tracking-wider font-semibold"
            >
              Make a Reservation Enquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

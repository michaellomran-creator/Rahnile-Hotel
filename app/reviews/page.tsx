import React from "react";
import Link from "next/link";
import { Star, ExternalLink, ShieldCheck, MessageSquare, CheckCircle2, User, MapPin } from "lucide-react";
import ReviewForm from "@/components/ReviewForm";
import { HOTEL_INFO, INITIAL_APPROVED_REVIEWS } from "@/lib/data";
import { getPublicReviews } from "@/lib/db";

export const metadata = {
  title: "Guest Reviews & Ratings | Rahnile Hotel Bahir Dar",
  description:
    "Read verified guest reviews for Rahnile Hotel in Bahir Dar from Google Reviews, Agoda, Tripadvisor, and directly submitted traveler feedback.",
};

// Revalidate public reviews every 10 seconds or dynamic
export const dynamic = "force-dynamic";

export default async function ReviewsPage() {
  let reviews = await getPublicReviews();
  if (!reviews || reviews.length === 0) {
    reviews = INITIAL_APPROVED_REVIEWS;
  }

  // Calculate average rating
  const avgRating =
    reviews.length > 0
      ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
      : "4.8";

  return (
    <div className="pt-24 lg:pt-32 pb-20 bg-rahnile-parchment">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rahnile-limestone border border-rahnile-gold/40 text-xs font-semibold uppercase tracking-wider text-rahnile-plum">
            <MessageSquare className="w-3.5 h-3.5 text-rahnile-gold" />
            <span>Traveler Experiences</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-rahnile-charcoal">
            Guest Reviews & <br />
            <span className="text-rahnile-plum italic font-normal">Verified Feedback</span>
          </h1>

          <p className="text-rahnile-charcoal/80 text-base sm:text-lg leading-relaxed pt-2">
            Transparency and guest satisfaction are foundational to Rahnile Hotel. We welcome you to explore reviews across verified travel platforms as well as feedback submitted directly by travelers who have stayed with us in Bahir Dar.
          </p>
        </div>
      </section>

      {/* SECTION A: EXTERNAL TRAVEL PLATFORMS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-rahnile-limestone shadow-luxury space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-rahnile-limestone pb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-rahnile-gold font-bold">
                External Platform Presence
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-rahnile-charcoal mt-1">
                Verified Third-Party Listings
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-rahnile-charcoal/70">
              <ShieldCheck className="w-4 h-4 text-rahnile-gold" />
              <span>Attributed directly to external booking platforms</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-rahnile-charcoal/80 leading-relaxed max-w-3xl">
            To assist your travel planning, we maintain active listings across respected global booking engines. Follow the verified links below to view independent guest opinions, recent reviewer ratings, and booking flexibility:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOTEL_INFO.externalRatings.map((ext) => (
              <div
                key={ext.platform}
                className="p-6 rounded-2xl bg-rahnile-parchment/60 border border-rahnile-limestone flex flex-col justify-between space-y-4 hover:border-rahnile-gold/50 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl font-bold text-rahnile-charcoal">
                      {ext.platform}
                    </h3>
                    <div className="flex text-rahnile-marigold">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-rahnile-aubergine font-serif">
                      {ext.rating}
                    </span>
                    <span className="text-xs text-rahnile-charcoal/60">
                      out of {ext.maxRating}
                    </span>
                  </div>

                  <p className="text-xs text-rahnile-charcoal/75 leading-relaxed">
                    {ext.highlight}
                  </p>
                </div>

                <div className="pt-4 border-t border-rahnile-limestone">
                  <a
                    href={ext.verifiedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-rahnile-aubergine hover:text-rahnile-gold transition-colors"
                  >
                    <span>Read on {ext.platform}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-rahnile-cream text-center text-xs text-rahnile-charcoal/70">
            <strong>Platform Attribution:</strong> External review counts and ratings reflect independent traveler evaluations published on Google Hotels, Agoda, and Tripadvisor. Third-party brand names belong to their respective trademark holders.
          </div>
        </div>
      </section>

      {/* SECTION B: APPROVED DIRECT REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-rahnile-gold font-bold">
                Direct Guest Submissions
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-rahnile-charcoal mt-1">
                Experiences Shared by Our Guests
              </h2>
            </div>

            <div className="flex items-center gap-3 text-xs text-rahnile-charcoal">
              <span className="font-semibold">{reviews.length} Approved Reviews</span>
              <span>•</span>
              <span className="text-rahnile-gold font-bold">{avgRating} / 5.0 Average</span>
            </div>
          </div>

          {/* Approved Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-rahnile-limestone shadow-subtle flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-rahnile-marigold">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className={`w-4 h-4 ${
                            s <= rev.rating ? "fill-current" : "text-gray-200"
                          }`}
                        />
                      ))}
                    </div>

                    {rev.dateOfStay && (
                      <span className="text-[0.68rem] text-rahnile-charcoal/60">
                        Stay: {rev.dateOfStay}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-lg font-bold text-rahnile-charcoal">
                    {rev.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-rahnile-charcoal/80 leading-relaxed italic">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-rahnile-limestone flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-rahnile-parchment flex items-center justify-center text-rahnile-aubergine font-bold text-xs">
                      {rev.guestName.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-rahnile-aubergine">{rev.guestName}</p>
                      {rev.guestLocation && (
                        <p className="text-[0.68rem] text-rahnile-charcoal/60 flex items-center gap-1">
                          <MapPin className="w-2.5 h-2.5 text-rahnile-gold" />
                          {rev.guestLocation}
                        </p>
                      )}
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[0.65rem] px-2 py-0.5 rounded bg-green-50 text-green-800 border border-green-200 font-medium">
                    <CheckCircle2 className="w-2.5 h-2.5 text-green-600" />
                    Verified Stay
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION C: DIRECT REVIEW SUBMISSION FORM */}
      <section id="share-review" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ReviewForm />
      </section>
    </div>
  );
}

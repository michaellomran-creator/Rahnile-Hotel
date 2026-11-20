"use client";

import React, { useState } from "react";
import { Star, Send, ShieldCheck, AlertCircle, CheckCircle2 } from "lucide-react";

export default function ReviewForm({ onReviewSubmitted }: { onReviewSubmitted?: () => void }) {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [guestName, setGuestName] = useState("");
  const [guestLocation, setGuestLocation] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [dateOfStay, setDateOfStay] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!consent) {
      setErrorMessage("Please check the consent box allowing Rahnile Hotel to review and publish your feedback.");
      return;
    }

    if (comment.trim().length < 15) {
      setErrorMessage("Please write a bit more detail about your experience (minimum 15 characters).");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          guestName,
          guestLocation,
          email,
          rating,
          title,
          comment,
          dateOfStay,
          consent,
          honeypot,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit review");
      }

      setSuccessMessage(
        "Thank you! Your review has been submitted to hotel management. It will appear on the website once approved by our moderation team."
      );
      // Reset form
      setGuestName("");
      setGuestLocation("");
      setEmail("");
      setTitle("");
      setComment("");
      setDateOfStay("");
      setConsent(false);

      if (onReviewSubmitted) {
        onReviewSubmitted();
      }
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-rahnile-limestone p-6 sm:p-8 shadow-luxury">
      <div className="border-b border-rahnile-limestone pb-4 mb-6">
        <h3 className="font-serif text-2xl font-bold text-rahnile-charcoal">
          Share Your Rahnile Experience
        </h3>
        <p className="text-rahnile-charcoal/70 text-sm mt-1">
          Your feedback helps fellow travelers and guides our team in Bahir Dar. (Your email address remains strictly confidential).
        </p>
      </div>

      {successMessage ? (
        <div className="p-6 rounded-xl bg-rahnile-parchment border border-rahnile-gold/40 text-rahnile-aubergine space-y-3 text-center">
          <CheckCircle2 className="w-10 h-10 text-rahnile-gold mx-auto" />
          <h4 className="font-serif text-xl font-bold">Review Received</h4>
          <p className="text-sm leading-relaxed text-rahnile-charcoal/90">
            {successMessage}
          </p>
          <button
            onClick={() => setSuccessMessage(null)}
            className="mt-4 px-5 py-2 rounded-lg bg-rahnile-aubergine text-white text-xs uppercase tracking-wider font-semibold hover:bg-rahnile-plum transition-colors"
          >
            Submit Another Review
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Honeypot hidden input */}
          <input
            type="text"
            name="website_url"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Star Rating Picker */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-rahnile-charcoal font-semibold mb-2">
              Overall Rating *
            </label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="p-1 transition-transform hover:scale-110 focus:outline-none"
                  aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                >
                  <Star
                    className={`w-7 h-7 ${
                      (hoverRating || rating) >= star
                        ? "fill-rahnile-marigold text-rahnile-marigold"
                        : "text-rahnile-limestone stroke-1"
                    }`}
                  />
                </button>
              ))}
              <span className="ml-2 text-xs font-semibold text-rahnile-charcoal">
                {rating === 5 && "5 Stars — Exceptional"}
                {rating === 4 && "4 Stars — Very Good"}
                {rating === 3 && "3 Stars — Satisfactory"}
                {rating === 2 && "2 Stars — Fair"}
                {rating === 1 && "1 Star — Needs Improvement"}
              </span>
            </div>
          </div>

          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-rahnile-charcoal font-semibold mb-1.5">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="e.g. Almaz T. / John Miller"
                className="w-full rounded-lg border border-rahnile-limestone px-3.5 py-2.5 text-sm text-rahnile-charcoal focus:outline-none focus:border-rahnile-gold bg-rahnile-cream/50"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-rahnile-charcoal font-semibold mb-1.5">
                Email Address * (Private)
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="w-full rounded-lg border border-rahnile-limestone px-3.5 py-2.5 text-sm text-rahnile-charcoal focus:outline-none focus:border-rahnile-gold bg-rahnile-cream/50"
              />
            </div>
          </div>

          {/* Guest City / Country & Stay Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-rahnile-charcoal font-semibold mb-1.5">
                Your Home City or Country (Optional)
              </label>
              <input
                type="text"
                value={guestLocation}
                onChange={(e) => setGuestLocation(e.target.value)}
                placeholder="e.g. Addis Ababa / London, UK"
                className="w-full rounded-lg border border-rahnile-limestone px-3.5 py-2.5 text-sm text-rahnile-charcoal focus:outline-none focus:border-rahnile-gold bg-rahnile-cream/50"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-rahnile-charcoal font-semibold mb-1.5">
                Date of Stay (Optional)
              </label>
              <input
                type="text"
                value={dateOfStay}
                onChange={(e) => setDateOfStay(e.target.value)}
                placeholder="e.g. November 2024"
                className="w-full rounded-lg border border-rahnile-limestone px-3.5 py-2.5 text-sm text-rahnile-charcoal focus:outline-none focus:border-rahnile-gold bg-rahnile-cream/50"
              />
            </div>
          </div>

          {/* Review Title */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-rahnile-charcoal font-semibold mb-1.5">
              Review Title *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Fantastic stay and helpful staff near Lake Tana"
              className="w-full rounded-lg border border-rahnile-limestone px-3.5 py-2.5 text-sm text-rahnile-charcoal focus:outline-none focus:border-rahnile-gold bg-rahnile-cream/50"
            />
          </div>

          {/* Written Review */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-rahnile-charcoal font-semibold mb-1.5">
              Your Written Review *
            </label>
            <textarea
              required
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Tell other travelers about your stay, room comfort, hospitality, dining, or visits to Lake Tana..."
              className="w-full rounded-lg border border-rahnile-limestone p-3 text-sm text-rahnile-charcoal focus:outline-none focus:border-rahnile-gold bg-rahnile-cream/50"
            />
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-rahnile-limestone text-rahnile-aubergine focus:ring-rahnile-gold"
            />
            <label htmlFor="consent" className="text-xs text-rahnile-charcoal/80 leading-relaxed">
              I verify that this review represents my own genuine experience at Rahnile Hotel, and I grant permission for Rahnile Hotel to publish this review on their official website upon editorial moderation.
            </label>
          </div>

          {/* Error Banner */}
          {errorMessage && (
            <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Submit CTA */}
          <div className="flex items-center justify-between pt-2">
            <span className="flex items-center gap-1.5 text-xs text-rahnile-charcoal/60">
              <ShieldCheck className="w-4 h-4 text-rahnile-gold" />
              Direct Moderation • Privacy Protected
            </span>

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 rounded-lg bg-rahnile-aubergine text-white font-semibold text-xs uppercase tracking-wider hover:bg-rahnile-plum transition-all duration-300 shadow-md flex items-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <span>Submitting...</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5 text-rahnile-marigold" />
                  <span>Submit for Review</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { Review } from "@/lib/types";
import { Star, Check, X, Trash2, Mail, Calendar, MapPin, RefreshCw } from "lucide-react";

interface AdminReviewManagerProps {
  initialReviews: Review[];
}

export default function AdminReviewManager({ initialReviews }: AdminReviewManagerProps) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [filter, setFilter] = useState<"all" | "pending" | "approved" | "rejected">("pending");
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const refreshReviews = async () => {
    try {
      const res = await fetch("/api/reviews?scope=admin");
      if (res.ok) {
        const data = await res.json();
        setReviews(data.reviews);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleUpdateStatus = async (id: string, status: "approved" | "rejected") => {
    setLoadingId(id);
    setStatusMessage(null);
    try {
      const res = await fetch(`/api/reviews/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (res.ok) {
        setReviews((prev) =>
          prev.map((r) => (r.id === id ? { ...r, status } : r))
        );
        setStatusMessage(`Review marked as ${status}.`);
      } else {
        alert("Failed to update status");
      }
    } catch {
      alert("Error updating review");
    } finally {
      setLoadingId(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to permanently delete this review?")) return;
    setLoadingId(id);
    try {
      const res = await fetch(`/api/reviews/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setReviews((prev) => prev.filter((r) => r.id !== id));
        setStatusMessage("Review deleted.");
      } else {
        alert("Failed to delete review");
      }
    } catch {
      alert("Error deleting review");
    } finally {
      setLoadingId(null);
    }
  };

  const filteredReviews = reviews.filter((r) => {
    if (filter === "all") return true;
    return r.status === filter;
  });

  const pendingCount = reviews.filter((r) => r.status === "pending").length;
  const approvedCount = reviews.filter((r) => r.status === "approved").length;

  return (
    <div className="space-y-6">
      {/* Top Controls & Metrics */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-xl border border-rahnile-limestone shadow-sm">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilter("pending")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
              filter === "pending"
                ? "bg-amber-600 text-white"
                : "bg-rahnile-parchment text-rahnile-charcoal hover:bg-rahnile-limestone"
            }`}
          >
            Pending Moderation ({pendingCount})
          </button>
          <button
            onClick={() => setFilter("approved")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
              filter === "approved"
                ? "bg-green-700 text-white"
                : "bg-rahnile-parchment text-rahnile-charcoal hover:bg-rahnile-limestone"
            }`}
          >
            Approved ({approvedCount})
          </button>
          <button
            onClick={() => setFilter("rejected")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
              filter === "rejected"
                ? "bg-red-700 text-white"
                : "bg-rahnile-parchment text-rahnile-charcoal hover:bg-rahnile-limestone"
            }`}
          >
            Rejected
          </button>
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
              filter === "all"
                ? "bg-rahnile-aubergine text-white"
                : "bg-rahnile-parchment text-rahnile-charcoal hover:bg-rahnile-limestone"
            }`}
          >
            All ({reviews.length})
          </button>
        </div>

        <button
          onClick={refreshReviews}
          className="p-2 text-rahnile-charcoal/70 hover:text-rahnile-charcoal hover:bg-rahnile-parchment rounded-lg transition-colors flex items-center gap-1.5 text-xs font-medium"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Refresh</span>
        </button>
      </div>

      {statusMessage && (
        <div className="p-3 rounded-lg bg-rahnile-parchment border border-rahnile-gold/40 text-rahnile-aubergine text-xs">
          {statusMessage}
        </div>
      )}

      {/* Review Cards List */}
      {filteredReviews.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-xl border border-rahnile-limestone text-rahnile-charcoal/60 text-sm">
          No reviews in this category.
        </div>
      ) : (
        <div className="space-y-4">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className={`p-6 rounded-xl border bg-white shadow-sm transition-all ${
                rev.status === "pending"
                  ? "border-amber-400/80 bg-amber-50/20"
                  : rev.status === "approved"
                  ? "border-green-300/80"
                  : "border-red-200 bg-red-50/20"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[0.68rem] font-bold uppercase tracking-wider ${
                        rev.status === "pending"
                          ? "bg-amber-100 text-amber-800 border border-amber-300"
                          : rev.status === "approved"
                          ? "bg-green-100 text-green-800 border border-green-300"
                          : "bg-red-100 text-red-800 border border-red-300"
                      }`}
                    >
                      {rev.status.toUpperCase()}
                    </span>

                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className={`w-3.5 h-3.5 ${
                            s <= rev.rating
                              ? "fill-rahnile-marigold text-rahnile-marigold"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    <span className="text-xs text-rahnile-charcoal/60">
                      {new Date(rev.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg font-bold text-rahnile-charcoal">
                    {rev.title}
                  </h4>

                  <p className="text-sm text-rahnile-charcoal/90 leading-relaxed max-w-3xl">
                    &ldquo;{rev.comment}&rdquo;
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-rahnile-charcoal/70">
                    <span className="font-semibold text-rahnile-aubergine">
                      Guest: {rev.guestName}
                    </span>
                    {rev.guestLocation && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-rahnile-gold" />
                        {rev.guestLocation}
                      </span>
                    )}
                    {rev.email && (
                      <span className="flex items-center gap-1 text-rahnile-plum">
                        <Mail className="w-3 h-3" />
                        {rev.email}
                      </span>
                    )}
                    {rev.dateOfStay && (
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-rahnile-gold" />
                        Stay: {rev.dateOfStay}
                      </span>
                    )}
                  </div>
                </div>

                {/* Moderation Actions */}
                <div className="flex sm:flex-col items-center sm:items-end gap-2 flex-shrink-0 pt-2 sm:pt-0">
                  {rev.status !== "approved" && (
                    <button
                      onClick={() => handleUpdateStatus(rev.id, "approved")}
                      disabled={loadingId === rev.id}
                      className="px-3 py-1.5 rounded-lg bg-green-700 hover:bg-green-800 text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1 shadow-sm"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Approve</span>
                    </button>
                  )}

                  {rev.status !== "rejected" && (
                    <button
                      onClick={() => handleUpdateStatus(rev.id, "rejected")}
                      disabled={loadingId === rev.id}
                      className="px-3 py-1.5 rounded-lg bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1 shadow-sm"
                    >
                      <X className="w-3.5 h-3.5" />
                      <span>Reject</span>
                    </button>
                  )}

                  <button
                    onClick={() => handleDelete(rev.id)}
                    disabled={loadingId === rev.id}
                    className="p-1.5 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors text-xs"
                    title="Delete permanently"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { BookingEnquiry } from "@/lib/types";
import { VERIFIED_ROOMS } from "@/lib/data";
import { Phone, Mail, Calendar, Users, Home, Clock, Trash2, CheckCircle2, MessageSquare } from "lucide-react";

interface AdminEnquiryManagerProps {
  initialBookings: BookingEnquiry[];
}

export default function AdminEnquiryManager({ initialBookings }: AdminEnquiryManagerProps) {
  const [bookings, setBookings] = useState<BookingEnquiry[]>(initialBookings);
  const [filter, setFilter] = useState<"all" | "new" | "contacted" | "confirmed" | "cancelled">("all");
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleStatusChange = async (id: string, status: "new" | "contacted" | "confirmed" | "cancelled") => {
    setLoadingId(id);
    try {
      const res = await fetch(`/api/bookings/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (res.ok) {
        setBookings((prev) =>
          prev.map((b) => (b.id === id ? { ...b, status } : b))
        );
      } else {
        alert("Failed to update booking status");
      }
    } catch {
      alert("Error updating booking");
    } finally {
      setLoadingId(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to remove this booking enquiry?")) return;
    setLoadingId(id);
    try {
      const res = await fetch(`/api/bookings/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setBookings((prev) => prev.filter((b) => b.id !== id));
      } else {
        alert("Failed to delete booking");
      }
    } catch {
      alert("Error deleting booking");
    } finally {
      setLoadingId(null);
    }
  };

  const filteredBookings = bookings.filter((b) => {
    if (filter === "all") return true;
    return b.status === filter;
  });

  const newCount = bookings.filter((b) => b.status === "new").length;

  return (
    <div className="space-y-6">
      {/* Top Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-xl border border-rahnile-limestone shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
              filter === "all"
                ? "bg-rahnile-aubergine text-white"
                : "bg-rahnile-parchment text-rahnile-charcoal hover:bg-rahnile-limestone"
            }`}
          >
            All Enquiries ({bookings.length})
          </button>
          <button
            onClick={() => setFilter("new")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
              filter === "new"
                ? "bg-amber-600 text-white"
                : "bg-rahnile-parchment text-rahnile-charcoal hover:bg-rahnile-limestone"
            }`}
          >
            New Action Required ({newCount})
          </button>
          <button
            onClick={() => setFilter("contacted")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
              filter === "contacted"
                ? "bg-blue-600 text-white"
                : "bg-rahnile-parchment text-rahnile-charcoal hover:bg-rahnile-limestone"
            }`}
          >
            Contacted
          </button>
          <button
            onClick={() => setFilter("confirmed")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
              filter === "confirmed"
                ? "bg-green-700 text-white"
                : "bg-rahnile-parchment text-rahnile-charcoal hover:bg-rahnile-limestone"
            }`}
          >
            Confirmed
          </button>
          <button
            onClick={() => setFilter("cancelled")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
              filter === "cancelled"
                ? "bg-gray-600 text-white"
                : "bg-rahnile-parchment text-rahnile-charcoal hover:bg-rahnile-limestone"
            }`}
          >
            Cancelled
          </button>
        </div>
      </div>

      {/* Bookings List */}
      {filteredBookings.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-xl border border-rahnile-limestone text-rahnile-charcoal/60 text-sm">
          No enquiries matching this filter.
        </div>
      ) : (
        <div className="space-y-4">
          {filteredBookings.map((b) => {
            const roomObj = VERIFIED_ROOMS.find((r) => r.id === b.roomType);
            const roomName = roomObj ? roomObj.name : b.roomType;

            return (
              <div
                key={b.id}
                className={`p-6 rounded-xl border bg-white shadow-sm transition-all ${
                  b.status === "new"
                    ? "border-amber-400 bg-amber-50/20"
                    : b.status === "confirmed"
                    ? "border-green-300"
                    : "border-rahnile-limestone"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  {/* Left Column: Guest & Stay Details */}
                  <div className="space-y-3 flex-grow">
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[0.68rem] font-bold uppercase tracking-wider ${
                          b.status === "new"
                            ? "bg-amber-100 text-amber-800 border border-amber-300"
                            : b.status === "contacted"
                            ? "bg-blue-100 text-blue-800 border border-blue-300"
                            : b.status === "confirmed"
                            ? "bg-green-100 text-green-800 border border-green-300"
                            : "bg-gray-100 text-gray-800 border border-gray-300"
                        }`}
                      >
                        {b.status.toUpperCase()}
                      </span>

                      <span className="text-xs text-rahnile-charcoal/60 font-mono">
                        Ref: #{b.id.slice(-6).toUpperCase()}
                      </span>

                      <span className="text-xs text-rahnile-charcoal/60 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Received: {new Date(b.createdAt).toLocaleString()}
                      </span>
                    </div>

                    <h4 className="font-serif text-xl font-bold text-rahnile-charcoal">
                      {b.fullName}
                    </h4>

                    {/* Stay Specifications */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs text-rahnile-charcoal pt-1">
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-rahnile-parchment/60 border border-rahnile-limestone">
                        <Calendar className="w-4 h-4 text-rahnile-gold flex-shrink-0" />
                        <span>
                          <strong>Dates:</strong> {b.checkIn} → {b.checkOut}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 p-2 rounded-lg bg-rahnile-parchment/60 border border-rahnile-limestone">
                        <Home className="w-4 h-4 text-rahnile-gold flex-shrink-0" />
                        <span>
                          <strong>Room:</strong> {roomName} ({b.roomsCount} room)
                        </span>
                      </div>

                      <div className="flex items-center gap-2 p-2 rounded-lg bg-rahnile-parchment/60 border border-rahnile-limestone">
                        <Users className="w-4 h-4 text-rahnile-gold flex-shrink-0" />
                        <span>
                          <strong>Party:</strong> {b.adults} Adults {b.children > 0 ? `, ${b.children} Child` : ""}
                        </span>
                      </div>
                    </div>

                    {/* Special Requests */}
                    {b.specialRequests && (
                      <div className="p-3 rounded-lg bg-rahnile-parchment/40 border border-rahnile-limestone text-xs text-rahnile-charcoal space-y-1">
                        <span className="font-bold flex items-center gap-1 text-rahnile-plum">
                          <MessageSquare className="w-3.5 h-3.5" /> Special Requests:
                        </span>
                        <p className="italic">&ldquo;{b.specialRequests}&rdquo;</p>
                      </div>
                    )}

                    {/* Contact Methods */}
                    <div className="flex flex-wrap items-center gap-4 text-xs pt-2">
                      <a
                        href={`tel:${b.phone.replace(/\s+/g, "")}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rahnile-parchment text-rahnile-aubergine font-semibold hover:bg-rahnile-gold hover:text-white transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-rahnile-gold" />
                        <span>Call: {b.phone}</span>
                      </a>

                      <a
                        href={`mailto:${b.email}?subject=Reservation Enquiry at Rahnile Hotel, Bahir Dar`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rahnile-parchment text-rahnile-aubergine font-semibold hover:bg-rahnile-gold hover:text-white transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-rahnile-gold" />
                        <span>Email: {b.email}</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Status Change Actions */}
                  <div className="flex lg:flex-col items-center lg:items-end gap-2 flex-shrink-0 border-t lg:border-t-0 pt-4 lg:pt-0">
                    <label className="text-[0.68rem] uppercase tracking-wider text-rahnile-charcoal/70 font-semibold block">
                      Update State:
                    </label>
                    <select
                      value={b.status}
                      disabled={loadingId === b.id}
                      onChange={(e) => handleStatusChange(b.id, e.target.value as any)}
                      className="text-xs font-semibold rounded-lg border border-rahnile-limestone px-3 py-2 bg-white text-rahnile-charcoal focus:outline-none focus:border-rahnile-gold"
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted Guest</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>

                    <button
                      onClick={() => handleDelete(b.id)}
                      disabled={loadingId === b.id}
                      className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors text-xs ml-auto"
                      title="Remove record"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Review, BookingEnquiry } from "@/lib/types";
import AdminReviewManager from "@/components/AdminReviewManager";
import AdminEnquiryManager from "@/components/AdminEnquiryManager";
import { MessageSquare, CalendarCheck, Layers, LogOut, CheckCircle2, ShieldCheck } from "lucide-react";
import { VERIFIED_ROOMS, VERIFIED_FACILITIES, HOTEL_INFO } from "@/lib/data";

interface AdminDashboardClientProps {
  initialReviews: Review[];
  initialBookings: BookingEnquiry[];
}

export default function AdminDashboardClient({
  initialReviews,
  initialBookings,
}: AdminDashboardClientProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"reviews" | "bookings" | "inventory">("reviews");

  const pendingReviewsCount = initialReviews.filter((r) => r.status === "pending").length;
  const newBookingsCount = initialBookings.filter((b) => b.status === "new").length;

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth", { method: "DELETE" });
      router.refresh();
    } catch {
      window.location.reload();
    }
  };

  return (
    <div className="pt-28 pb-20 bg-rahnile-parchment min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Header Bar */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rahnile-limestone shadow-luxury flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rahnile-gold">
              <ShieldCheck className="w-4 h-4" />
              <span>Administrative Management Portal</span>
            </div>
            <h1 className="font-serif text-3xl font-bold text-rahnile-charcoal">
              Rahnile Hotel Bahir Dar — Staff CMS
            </h1>
            <p className="text-xs text-rahnile-charcoal/70">
              Manage website guest reviews, process incoming reservation enquiries, and inspect hotel specifications.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="self-start md:self-center px-4 py-2 rounded-xl border border-red-200 text-red-700 hover:bg-red-50 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center gap-3 border-b border-rahnile-limestone pb-4">
          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === "reviews"
                ? "bg-rahnile-aubergine text-white shadow-md"
                : "bg-white text-rahnile-charcoal border border-rahnile-limestone hover:bg-rahnile-limestone"
            }`}
          >
            <MessageSquare className="w-4 h-4 text-rahnile-gold" />
            <span>Guest Reviews</span>
            {pendingReviewsCount > 0 && (
              <span className="ml-1.5 px-2 py-0.5 rounded-full bg-amber-500 text-white text-[0.65rem] font-bold">
                {pendingReviewsCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("bookings")}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === "bookings"
                ? "bg-rahnile-aubergine text-white shadow-md"
                : "bg-white text-rahnile-charcoal border border-rahnile-limestone hover:bg-rahnile-limestone"
            }`}
          >
            <CalendarCheck className="w-4 h-4 text-rahnile-gold" />
            <span>Booking Enquiries</span>
            {newBookingsCount > 0 && (
              <span className="ml-1.5 px-2 py-0.5 rounded-full bg-amber-500 text-white text-[0.65rem] font-bold">
                {newBookingsCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("inventory")}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === "inventory"
                ? "bg-rahnile-aubergine text-white shadow-md"
                : "bg-white text-rahnile-charcoal border border-rahnile-limestone hover:bg-rahnile-limestone"
            }`}
          >
            <Layers className="w-4 h-4 text-rahnile-gold" />
            <span>Rooms & Property Settings</span>
          </button>
        </div>

        {/* Tab 1: Reviews Moderation */}
        {activeTab === "reviews" && (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl border border-rahnile-limestone text-xs text-rahnile-charcoal/80">
              <strong>Review Moderation Rule:</strong> Reviews submitted through the website remain hidden from the public until you explicitly click &ldquo;Approve&rdquo;. Approved reviews immediately render on the public <a href="/reviews" target="_blank" className="text-rahnile-plum underline font-bold">/reviews</a> page.
            </div>
            <AdminReviewManager initialReviews={initialReviews} />
          </div>
        )}

        {/* Tab 2: Booking Enquiries */}
        {activeTab === "bookings" && (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl border border-rahnile-limestone text-xs text-rahnile-charcoal/80">
              <strong>Direct Enquiry Workflow:</strong> Guests receive a pending acknowledgement when submitting dates. Staff members can contact the guest directly via telephone, WhatsApp, or email to verify room availability, confirm payment method, and coordinate airport pickup.
            </div>
            <AdminEnquiryManager initialBookings={initialBookings} />
          </div>
        )}

        {/* Tab 3: Property Content & Inventory Inspection */}
        {activeTab === "inventory" && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-rahnile-limestone shadow-subtle space-y-6">
              <h3 className="font-serif text-2xl font-bold text-rahnile-charcoal">
                Active Room Categories
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {VERIFIED_ROOMS.map((r) => (
                  <div key={r.id} className="p-4 rounded-xl bg-rahnile-parchment/60 border border-rahnile-limestone space-y-2 text-xs">
                    <p className="font-bold text-sm text-rahnile-aubergine font-serif">{r.name}</p>
                    <p><strong>Beds:</strong> {r.bedType}</p>
                    <p><strong>Capacity:</strong> {r.occupancy.adults} Adults {r.occupancy.children > 0 ? `+ ${r.occupancy.children} Child` : ""}</p>
                    <p><strong>Size:</strong> ~{r.sizeM2 || 25} m²</p>
                    <p className="text-green-800 font-semibold">✓ Verified with Property Photos</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-rahnile-limestone shadow-subtle space-y-4">
              <h3 className="font-serif text-2xl font-bold text-rahnile-charcoal">
                Verified Hotel Contact & GPS Coordinates
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-rahnile-parchment/60 space-y-1">
                  <p><strong>Physical Address:</strong> {HOTEL_INFO.address.line1}, {HOTEL_INFO.address.city}</p>
                  <p><strong>GPS Coordinates:</strong> {HOTEL_INFO.address.coordinates.lat}, {HOTEL_INFO.address.coordinates.lng}</p>
                  <p><strong>Plus Code:</strong> {HOTEL_INFO.address.plusCode}</p>
                </div>
                <div className="p-4 rounded-xl bg-rahnile-parchment/60 space-y-1">
                  <p><strong>Primary Phone / WhatsApp:</strong> {HOTEL_INFO.contact.primaryPhone}</p>
                  <p><strong>Secondary Phone:</strong> {HOTEL_INFO.contact.secondaryPhone}</p>
                  <p><strong>Primary Email:</strong> {HOTEL_INFO.contact.email}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

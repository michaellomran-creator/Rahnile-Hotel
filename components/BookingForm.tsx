"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { CalendarCheck, ShieldCheck, CheckCircle2, AlertCircle, Phone, Mail } from "lucide-react";
import { VERIFIED_ROOMS, HOTEL_INFO } from "@/lib/data";

export default function BookingForm() {
  const searchParams = useSearchParams();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [roomsCount, setRoomsCount] = useState("1");
  const [roomType, setRoomType] = useState("deluxe-double-room");
  const [specialRequests, setSpecialRequests] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState<{ message: string; bookingId: string } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Pre-fill from query params if available
  useEffect(() => {
    const qCheckIn = searchParams.get("checkIn");
    const qCheckOut = searchParams.get("checkOut");
    const qAdults = searchParams.get("adults");
    const qRoomType = searchParams.get("roomType");

    if (qCheckIn) setCheckIn(qCheckIn);
    if (qCheckOut) setCheckOut(qCheckOut);
    if (qAdults) setAdults(qAdults);
    if (qRoomType) setRoomType(qRoomType);
  }, [searchParams]);

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessData(null);

    if (!checkIn || !checkOut) {
      setErrorMessage("Please select both check-in and check-out dates.");
      return;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      setErrorMessage("Check-out date must be later than your check-in date.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          checkIn,
          checkOut,
          adults: Number(adults),
          children: Number(children),
          roomsCount: Number(roomsCount),
          roomType,
          specialRequests,
          honeypot,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit booking enquiry");
      }

      setSuccessData({
        message: data.message,
        bookingId: data.bookingId,
      });
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to submit reservation. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-rahnile-limestone p-6 sm:p-10 shadow-luxury">
      {successData ? (
        <div className="py-8 px-4 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-rahnile-parchment border-2 border-rahnile-gold flex items-center justify-center mx-auto text-rahnile-gold">
            <CheckCircle2 className="w-10 h-10 text-rahnile-gold" />
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-rahnile-gold font-bold">
              Enquiry Reference #{successData.bookingId.slice(-6).toUpperCase()}
            </span>
            <h3 className="font-serif text-3xl font-bold text-rahnile-charcoal">
              Enquiry Received with Thanks
            </h3>
            <p className="text-rahnile-charcoal/80 text-sm max-w-lg mx-auto leading-relaxed">
              {successData.message}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-rahnile-parchment/60 border border-rahnile-limestone max-w-md mx-auto text-left text-xs space-y-2 text-rahnile-charcoal">
            <p className="font-bold text-rahnile-aubergine uppercase tracking-wider">
              Enquiry Summary:
            </p>
            <p><strong>Guest:</strong> {fullName}</p>
            <p><strong>Contact:</strong> {email} | {phone}</p>
            <p><strong>Stay Dates:</strong> {checkIn} to {checkOut}</p>
            <p><strong>Accommodation:</strong> {VERIFIED_ROOMS.find((r) => r.id === roomType)?.name || roomType}</p>
            <p><strong>Party Size:</strong> {adults} Adult(s), {children} Child(ren) • {roomsCount} Room(s)</p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs">
            <a
              href={`tel:${HOTEL_INFO.contact.primaryPhone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rahnile-aubergine text-white hover:bg-rahnile-plum transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-rahnile-gold" />
              <span>Call Front Desk: {HOTEL_INFO.contact.primaryPhone}</span>
            </a>
            <button
              onClick={() => {
                setSuccessData(null);
                setFullName("");
                setSpecialRequests("");
              }}
              className="px-5 py-2.5 rounded-full border border-rahnile-limestone text-rahnile-charcoal hover:bg-rahnile-parchment transition-colors"
            >
              Submit Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot hidden input */}
          <input
            type="text"
            name="hotel_confirm_token"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="border-b border-rahnile-limestone pb-4">
            <h3 className="font-serif text-2xl font-bold text-rahnile-charcoal">
              Reservation Enquiry
            </h3>
            <p className="text-rahnile-charcoal/70 text-sm mt-1">
              Select your intended dates and room category. Our reservation team in Bahir Dar will confirm real-time availability and assist with airport pickup or tour arrangements.
            </p>
          </div>

          {/* Date Range Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-rahnile-charcoal font-semibold mb-1.5">
                Check-In Date *
              </label>
              <input
                type="date"
                required
                min={today}
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full rounded-lg border border-rahnile-limestone px-3.5 py-2.5 text-sm text-rahnile-charcoal focus:outline-none focus:border-rahnile-gold bg-rahnile-cream/50"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-rahnile-charcoal font-semibold mb-1.5">
                Check-Out Date *
              </label>
              <input
                type="date"
                required
                min={checkIn || today}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full rounded-lg border border-rahnile-limestone px-3.5 py-2.5 text-sm text-rahnile-charcoal focus:outline-none focus:border-rahnile-gold bg-rahnile-cream/50"
              />
            </div>
          </div>

          {/* Party and Room Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-rahnile-charcoal font-semibold mb-1.5">
                Number of Adults *
              </label>
              <select
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className="w-full rounded-lg border border-rahnile-limestone px-3.5 py-2.5 text-sm text-rahnile-charcoal focus:outline-none focus:border-rahnile-gold bg-rahnile-cream/50"
              >
                <option value="1">1 Adult</option>
                <option value="2">2 Adults</option>
                <option value="3">3 Adults</option>
                <option value="4">4 Adults</option>
                <option value="5">5+ Adults (Group)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-rahnile-charcoal font-semibold mb-1.5">
                Children
              </label>
              <select
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                className="w-full rounded-lg border border-rahnile-limestone px-3.5 py-2.5 text-sm text-rahnile-charcoal focus:outline-none focus:border-rahnile-gold bg-rahnile-cream/50"
              >
                <option value="0">0 Children</option>
                <option value="1">1 Child</option>
                <option value="2">2 Children</option>
                <option value="3">3+ Children</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-rahnile-charcoal font-semibold mb-1.5">
                Number of Rooms
              </label>
              <select
                value={roomsCount}
                onChange={(e) => setRoomsCount(e.target.value)}
                className="w-full rounded-lg border border-rahnile-limestone px-3.5 py-2.5 text-sm text-rahnile-charcoal focus:outline-none focus:border-rahnile-gold bg-rahnile-cream/50"
              >
                <option value="1">1 Room</option>
                <option value="2">2 Rooms</option>
                <option value="3">3 Rooms</option>
                <option value="4">4+ Rooms</option>
              </select>
            </div>
          </div>

          {/* Preferred Room Category */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-rahnile-charcoal font-semibold mb-1.5">
              Preferred Room Category *
            </label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full rounded-lg border border-rahnile-limestone px-3.5 py-2.5 text-sm text-rahnile-charcoal focus:outline-none focus:border-rahnile-gold bg-rahnile-cream/50"
            >
              {VERIFIED_ROOMS.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name} ({r.bedType})
                </option>
              ))}
            </select>
          </div>

          {/* Guest Personal Information */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-rahnile-charcoal font-semibold mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Solomon Hailu"
                className="w-full rounded-lg border border-rahnile-limestone px-3.5 py-2.5 text-sm text-rahnile-charcoal focus:outline-none focus:border-rahnile-gold bg-rahnile-cream/50"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-rahnile-charcoal font-semibold mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="guest@example.com"
                className="w-full rounded-lg border border-rahnile-limestone px-3.5 py-2.5 text-sm text-rahnile-charcoal focus:outline-none focus:border-rahnile-gold bg-rahnile-cream/50"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-rahnile-charcoal font-semibold mb-1.5">
                Phone / WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+251 9... / +1..."
                className="w-full rounded-lg border border-rahnile-limestone px-3.5 py-2.5 text-sm text-rahnile-charcoal focus:outline-none focus:border-rahnile-gold bg-rahnile-cream/50"
              />
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-rahnile-charcoal font-semibold mb-1.5">
              Special Requests or Inquiries (Optional)
            </label>
            <textarea
              rows={3}
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              placeholder="e.g. Complimentary airport pickup request, flight arrival time, quiet floor, early check-in, dietary preferences..."
              className="w-full rounded-lg border border-rahnile-limestone p-3 text-sm text-rahnile-charcoal focus:outline-none focus:border-rahnile-gold bg-rahnile-cream/50"
            />
          </div>

          {/* Error Notice */}
          {errorMessage && (
            <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Trust indicators & Submit */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-rahnile-charcoal/70 space-y-1">
              <p className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-rahnile-gold" />
                <strong>Direct Enquiry Workflow:</strong> No online card charge required now.
              </p>
              <p className="text-[0.7rem] text-rahnile-charcoal/60">
                Our front desk confirms availability and direct payment options upon contact.
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-rahnile-marigold text-rahnile-charcoal font-semibold text-xs uppercase tracking-wider hover:bg-rahnile-gold hover:text-white transition-all duration-300 shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <span>Sending Enquiry...</span>
              ) : (
                <>
                  <CalendarCheck className="w-4 h-4" />
                  <span>Send Reservation Enquiry</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

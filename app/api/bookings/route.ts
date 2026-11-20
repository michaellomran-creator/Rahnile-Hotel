import { NextRequest, NextResponse } from "next/server";
import { createBookingEnquiry, getAllBookingsForAdmin } from "@/lib/db";
import { isAdminAuthenticated } from "@/lib/auth";

export async function GET() {
  try {
    if (!isAdminAuthenticated()) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const bookings = await getAllBookingsForAdmin();
    return NextResponse.json({ bookings });
  } catch (error) {
    console.error("GET /api/bookings error:", error);
    return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      checkIn,
      checkOut,
      adults,
      children,
      roomsCount,
      roomType,
      specialRequests,
      honeypot,
    } = body;

    if (honeypot) {
      return NextResponse.json({ error: "Bot detected" }, { status: 400 });
    }

    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json({ error: "Please enter your full name" }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 6) {
      return NextResponse.json({ error: "Please enter a valid contact phone or WhatsApp number" }, { status: 400 });
    }

    if (!checkIn || !checkOut) {
      return NextResponse.json({ error: "Please select both check-in and check-out dates" }, { status: 400 });
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
      return NextResponse.json({ error: "Invalid date format provided" }, { status: 400 });
    }

    if (checkOutDate <= checkInDate) {
      return NextResponse.json({ error: "Check-out date must be later than check-in date" }, { status: 400 });
    }

    const newEnquiry = await createBookingEnquiry({
      fullName,
      email,
      phone,
      checkIn,
      checkOut,
      adults: Number(adults) || 1,
      children: Number(children) || 0,
      roomsCount: Number(roomsCount) || 1,
      roomType: roomType || "deluxe-double-room",
      specialRequests,
    });

    return NextResponse.json({
      success: true,
      message: "Your reservation enquiry has been received! Our front desk team will contact you within 12 hours with availability confirmation and direct booking details.",
      bookingId: newEnquiry.id,
    });
  } catch (error) {
    console.error("POST /api/bookings error:", error);
    return NextResponse.json({ error: "Failed to process booking enquiry" }, { status: 500 });
  }
}

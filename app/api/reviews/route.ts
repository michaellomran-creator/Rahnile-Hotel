import { NextRequest, NextResponse } from "next/server";
import { getPublicReviews, createReview, getAllReviewsForAdmin } from "@/lib/db";
import { isAdminAuthenticated } from "@/lib/auth";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const scope = searchParams.get("scope");

    if (scope === "admin") {
      if (!isAdminAuthenticated()) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
      const allReviews = await getAllReviewsForAdmin();
      return NextResponse.json({ reviews: allReviews });
    }

    const approvedReviews = await getPublicReviews();
    return NextResponse.json({ reviews: approvedReviews });
  } catch (error) {
    console.error("GET /api/reviews error:", error);
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { guestName, guestLocation, email, rating, title, comment, dateOfStay, consent, honeypot } = body;

    // Honeypot spam trap
    if (honeypot) {
      return NextResponse.json({ error: "Bot detected" }, { status: 400 });
    }

    if (!guestName || typeof guestName !== "string" || guestName.trim().length < 2) {
      return NextResponse.json({ error: "Please provide a valid name" }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Please provide a valid email address" }, { status: 400 });
    }

    const numRating = Number(rating);
    if (isNaN(numRating) || numRating < 1 || numRating > 5) {
      return NextResponse.json({ error: "Please select a rating between 1 and 5 stars" }, { status: 400 });
    }

    if (!title || typeof title !== "string" || title.trim().length < 3) {
      return NextResponse.json({ error: "Please enter a brief title for your review" }, { status: 400 });
    }

    if (!comment || typeof comment !== "string" || comment.trim().length < 15) {
      return NextResponse.json({ error: "Please write at least 15 characters about your stay" }, { status: 400 });
    }

    if (!consent) {
      return NextResponse.json(
        { error: "You must check the consent box to submit your review" },
        { status: 400 }
      );
    }

    const newReview = await createReview({
      guestName,
      guestLocation,
      email,
      rating: numRating,
      title,
      comment,
      dateOfStay,
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! Your review has been received and submitted to hotel management for moderation.",
      reviewId: newReview.id,
    });
  } catch (error) {
    console.error("POST /api/reviews error:", error);
    return NextResponse.json({ error: "Failed to submit review" }, { status: 500 });
  }
}

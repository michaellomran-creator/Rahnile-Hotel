import React from "react";
import { isAdminAuthenticated } from "@/lib/auth";
import { getAllReviewsForAdmin, getAllBookingsForAdmin } from "@/lib/db";
import AdminDashboardClient from "./AdminDashboardClient";
import AdminLoginForm from "./AdminLoginForm";

export const metadata = {
  title: "Hotel Staff Management Portal | Rahnile Hotel",
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const authenticated = isAdminAuthenticated();

  if (!authenticated) {
    return <AdminLoginForm />;
  }

  const [reviews, bookings] = await Promise.all([
    getAllReviewsForAdmin(),
    getAllBookingsForAdmin(),
  ]);

  return <AdminDashboardClient initialReviews={reviews} initialBookings={bookings} />;
}

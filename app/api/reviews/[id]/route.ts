import { NextRequest, NextResponse } from "next/server";
import { updateReviewStatus, deleteReview } from "@/lib/db";
import { isAdminAuthenticated } from "@/lib/auth";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    if (!isAdminAuthenticated()) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { status } = body;

    if (status !== "approved" && status !== "rejected") {
      return NextResponse.json({ error: "Invalid status value" }, { status: 400 });
    }

    const updated = await updateReviewStatus(params.id, status);
    if (!updated) {
      return NextResponse.json({ error: "Review not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, review: updated });
  } catch (error) {
    console.error("PATCH /api/reviews/[id] error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    if (!isAdminAuthenticated()) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const success = await deleteReview(params.id);
    if (!success) {
      return NextResponse.json({ error: "Review not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Review deleted" });
  } catch (error) {
    console.error("DELETE /api/reviews/[id] error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

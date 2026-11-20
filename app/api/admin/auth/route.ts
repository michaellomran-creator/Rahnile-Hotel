import { NextRequest, NextResponse } from "next/server";
import { verifyAdminCredentials, setAdminSession, clearAdminSession, isAdminAuthenticated } from "@/lib/auth";

export async function GET() {
  const authenticated = isAdminAuthenticated();
  return NextResponse.json({ authenticated });
}

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json({ error: "Username and password required" }, { status: 400 });
    }

    const isValid = verifyAdminCredentials(username, password);
    if (!isValid) {
      return NextResponse.json({ error: "Invalid admin credentials" }, { status: 401 });
    }

    setAdminSession();
    return NextResponse.json({ success: true, message: "Authenticated successfully" });
  } catch (error) {
    console.error("Admin login error:", error);
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 });
  }
}

export async function DELETE() {
  clearAdminSession();
  return NextResponse.json({ success: true, message: "Logged out" });
}

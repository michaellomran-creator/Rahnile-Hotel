import { cookies, headers } from "next/headers";

const ADMIN_COOKIE_NAME = "rahnile_admin_session";
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "Rahnile@2025";
export const SESSION_SECRET = "rahnile_secret_token_session_2025_bahirdar";

export function verifyAdminCredentials(user: string, pass: string): boolean {
  return user === ADMIN_USERNAME && pass === ADMIN_PASSWORD;
}

export function setAdminSession(): void {
  const cookieStore = cookies();
  cookieStore.set(ADMIN_COOKIE_NAME, SESSION_SECRET, {
    httpOnly: true,
    secure: false, // Allow local testing over http
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export function clearAdminSession(): void {
  const cookieStore = cookies();
  cookieStore.delete(ADMIN_COOKIE_NAME);
}

export function isAdminAuthenticated(): boolean {
  try {
    // 1. Check header token (supports API/curl/PowerShell testing)
    const headerList = headers();
    const authHeader = headerList.get("authorization");
    if (authHeader && authHeader.replace(/^Bearer\s+/i, "") === SESSION_SECRET) {
      return true;
    }
    const adminKey = headerList.get("x-admin-key");
    if (adminKey === SESSION_SECRET) {
      return true;
    }

    // 2. Check HTTP-only cookie
    const cookieStore = cookies();
    const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
    return token === SESSION_SECRET;
  } catch {
    return false;
  }
}

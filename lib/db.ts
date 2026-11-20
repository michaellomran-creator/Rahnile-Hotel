import fs from "fs";
import path from "path";
import { Review, BookingEnquiry } from "./types";
import { INITIAL_APPROVED_REVIEWS } from "./data";

interface DataStore {
  reviews: Review[];
  bookings: BookingEnquiry[];
}

const DATA_DIR = path.join(process.cwd(), "data");
const STORE_PATH = path.join(DATA_DIR, "store.json");

// Ensure store exists on disk
function getStore(): DataStore {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    if (!fs.existsSync(STORE_PATH)) {
      const initial: DataStore = {
        reviews: INITIAL_APPROVED_REVIEWS,
        bookings: [
          {
            id: "book-sample-1",
            fullName: "Abebe Bekele",
            email: "abebe@example.com",
            phone: "+251 911 234 567",
            checkIn: "2024-12-15",
            checkOut: "2024-12-18",
            adults: 2,
            children: 0,
            roomsCount: 1,
            roomType: "deluxe-double-room",
            specialRequests: "Quiet floor requested. Arrival in the late afternoon from Addis Ababa flight.",
            createdAt: "2024-11-18T10:00:00Z",
            status: "new",
          }
        ],
      };
      fs.writeFileSync(STORE_PATH, JSON.stringify(initial, null, 2), "utf-8");
      return initial;
    }

    const raw = fs.readFileSync(STORE_PATH, "utf-8");
    return JSON.parse(raw);
  } catch (error) {
    console.error("Error accessing data store:", error);
    return {
      reviews: INITIAL_APPROVED_REVIEWS,
      bookings: [],
    };
  }
}

function saveStore(data: DataStore): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(STORE_PATH, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing data store:", error);
  }
}

/* ================= REVIEWS API ================= */

export async function getPublicReviews(): Promise<Review[]> {
  const store = getStore();
  // Return only approved reviews, excluding private emails
  return store.reviews
    .filter((r) => r.status === "approved")
    .map(({ email, ...rest }) => rest as Review)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function getAllReviewsForAdmin(): Promise<Review[]> {
  const store = getStore();
  return store.reviews.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function createReview(data: {
  guestName: string;
  guestLocation?: string;
  email: string;
  rating: number;
  title: string;
  comment: string;
  dateOfStay?: string;
}): Promise<Review> {
  const store = getStore();
  const newReview: Review = {
    id: `rev-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    guestName: data.guestName.trim(),
    guestLocation: data.guestLocation?.trim() || "Bahir Dar Visitor",
    email: data.email.trim(),
    rating: Math.min(5, Math.max(1, data.rating)),
    title: data.title.trim(),
    comment: data.comment.trim(),
    dateOfStay: data.dateOfStay?.trim() || undefined,
    createdAt: new Date().toISOString(),
    status: "pending", // ALWAYS pending until admin approves
    verifiedStay: false,
  };

  store.reviews.push(newReview);
  saveStore(store);
  return newReview;
}

export async function updateReviewStatus(
  id: string,
  status: "approved" | "rejected"
): Promise<Review | null> {
  const store = getStore();
  const index = store.reviews.findIndex((r) => r.id === id);
  if (index === -1) return null;

  store.reviews[index].status = status;
  saveStore(store);
  return store.reviews[index];
}

export async function deleteReview(id: string): Promise<boolean> {
  const store = getStore();
  const beforeLength = store.reviews.length;
  store.reviews = store.reviews.filter((r) => r.id !== id);
  if (store.reviews.length !== beforeLength) {
    saveStore(store);
    return true;
  }
  return false;
}

/* ================= BOOKINGS API ================= */

export async function createBookingEnquiry(data: {
  fullName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomsCount: number;
  roomType: string;
  specialRequests?: string;
}): Promise<BookingEnquiry> {
  const store = getStore();
  const newBooking: BookingEnquiry = {
    id: `bk-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    fullName: data.fullName.trim(),
    email: data.email.trim(),
    phone: data.phone.trim(),
    checkIn: data.checkIn,
    checkOut: data.checkOut,
    adults: Number(data.adults) || 1,
    children: Number(data.children) || 0,
    roomsCount: Number(data.roomsCount) || 1,
    roomType: data.roomType,
    specialRequests: data.specialRequests?.trim() || undefined,
    createdAt: new Date().toISOString(),
    status: "new",
  };

  store.bookings.push(newBooking);
  saveStore(store);
  return newBooking;
}

export async function getAllBookingsForAdmin(): Promise<BookingEnquiry[]> {
  const store = getStore();
  return store.bookings.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function updateBookingStatus(
  id: string,
  status: "new" | "contacted" | "confirmed" | "cancelled",
  notes?: string
): Promise<BookingEnquiry | null> {
  const store = getStore();
  const index = store.bookings.findIndex((b) => b.id === id);
  if (index === -1) return null;

  store.bookings[index].status = status;
  if (notes !== undefined) {
    store.bookings[index].notes = notes;
  }
  saveStore(store);
  return store.bookings[index];
}

export async function deleteBooking(id: string): Promise<boolean> {
  const store = getStore();
  const beforeLength = store.bookings.length;
  store.bookings = store.bookings.filter((b) => b.id !== id);
  if (store.bookings.length !== beforeLength) {
    saveStore(store);
    return true;
  }
  return false;
}

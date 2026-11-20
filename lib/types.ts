export interface Room {
  id: string;
  name: string;
  amharicName?: string;
  tagline: string;
  description: string;
  image: string;
  galleryImages: string[];
  bedType: string;
  occupancy: {
    adults: number;
    children: number;
  };
  sizeM2?: number;
  priceNote?: string;
  features: string[];
  amenities: string[];
  status: "verified" | "subject_to_confirmation";
}

export interface Review {
  id: string;
  guestName: string;
  guestLocation?: string;
  rating: number; // 1 to 5
  title: string;
  comment: string;
  dateOfStay?: string;
  createdAt: string;
  status: "pending" | "approved" | "rejected";
  verifiedStay?: boolean;
  email?: string; // Private, not exposed to public API
}

export interface BookingEnquiry {
  id: string;
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
  createdAt: string;
  status: "new" | "contacted" | "confirmed" | "cancelled";
  notes?: string;
}

export interface Facility {
  id: string;
  name: string;
  amharicName?: string;
  category: "dining" | "business" | "wellness" | "service";
  description: string;
  image?: string;
  highlights: string[];
  verified: boolean;
}

export interface Destination {
  id: string;
  title: string;
  amharicTitle?: string;
  distance: string;
  travelTime: string;
  description: string;
  image: string;
  practicalTip: string;
  directionsUrl?: string;
}

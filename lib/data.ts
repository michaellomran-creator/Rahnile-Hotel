import { Room, Facility, Destination } from "./types";

export const HOTEL_INFO = {
  name: "Rahnile Hotel",
  officialStyleName: "RahNile Hotel",
  amharicName: "ራህናይል ሆቴል",
  classification: "3-Star City Hotel",
  tagline: "A Place to Feel at Ease",
  subTagline: "Comfort, Warm Ethiopian Hospitality & Nile Tranquility in Bahir Dar",
  meaning: {
    origin: "Portmanteau of Ge'ez & the Blue Nile",
    rah: "From the classical Ge'ez / Semitic root for rest, comfort, ease and peaceful dwelling (Rāha / Rahn).",
    nile: "Honoring the legendary Abay (Blue Nile River) which originates just moments away at Lake Tana.",
    summary: "Together, 'Rahnile' translates poetically to 'Comfort & Rest by the Nile' — embodying the hotel's founding promise of genuine Ethiopian warmth and relaxed elegance.",
  },
  address: {
    line1: "Kebele 05, Behind EEPCO Building",
    line2: "Near Blue Nile Bridge & Lake Tana Jetties",
    city: "Bahir Dar",
    region: "Amhara Region",
    country: "Ethiopia",
    postalCode: "P.O. Box 1157",
    plusCode: "7G3VH9VR+F2",
    coordinates: {
      lat: 11.59364,
      lng: 37.39002,
    },
  },
  contact: {
    primaryPhone: "+251 911 987 827",
    secondaryPhone: "+251 91 876 4227",
    landline: "+251 58 220 8989",
    email: "info@rahnilehotel.com",
    reservationsEmail: "reservation@rahnilehotel.com",
    whatsapp: "+251 911 987 827",
  },
  platforms: {
    googleHotels: "https://www.google.com/travel/hotels/entity/ChoI7rH9lMj22fKlARoNL2cvMTFiNl90Mmg5MhAB",
    agoda: "https://www.agoda.com/rahnile-hotel/hotel/bahir-dar-et.html",
    tripadvisorSearch: "https://www.tripadvisor.com/Search?q=Rahnile+Hotel+Bahir+Dar",
    googleMapsDirections: "https://www.google.com/maps/dir/?api=1&destination=11.59364,37.39002",
  },
  externalRatings: [
    {
      platform: "Google Reviews",
      rating: "4.2",
      maxRating: "5.0",
      reviewCount: "120+",
      verifiedUrl: "https://www.google.com/travel/hotels/entity/ChoI7rH9lMj22fKlARoNL2cvMTFiNl90Mmg5MhAB",
      highlight: "Praised for central location, attentive staff, and relaxed terrace atmosphere.",
    },
    {
      platform: "Agoda",
      rating: "8.3",
      maxRating: "10",
      reviewCount: "Verified Travelers",
      verifiedUrl: "https://www.agoda.com/rahnile-hotel/hotel/bahir-dar-et.html",
      highlight: "Clean rooms, dependable Wi-Fi, and convenient boat departure access.",
    },
    {
      platform: "Tripadvisor",
      rating: "4.0",
      maxRating: "5.0",
      reviewCount: "Traveler Recommended",
      verifiedUrl: "https://www.tripadvisor.com/Search?q=Rahnile+Hotel+Bahir+Dar",
      highlight: "Popular choice for Lake Tana monastery excursions and business visits.",
    },
  ],
};

export const VERIFIED_ROOMS: Room[] = [
  {
    id: "deluxe-twin-room",
    name: "Deluxe Twin Room",
    amharicName: "ድርብ አልጋ ዴሉክስ ክፍል",
    tagline: "Generously proportioned twin accommodation with city outlook",
    description: "Designed for colleagues, friends, or traveling companions seeking individual comfort. Features two twin beds dressed in crisp linens, hand-crafted wooden furnishings, warm ambient lighting, mosquito nets, dedicated work desk, and an en-suite bathroom with hot rainfall shower.",
    image: "/images/rahnile/room-deluxe-twin.webp",
    galleryImages: [
      "/images/rahnile/room-deluxe-twin.webp",
      "/images/rahnile/room-bed-detail.webp",
      "/images/rahnile/view-night-balcony.webp"
    ],
    bedType: "2 Twin Beds",
    occupancy: { adults: 2, children: 1 },
    sizeM2: 26,
    priceNote: "Rates available upon direct enquiry (Best rate guarantee direct)",
    features: ["Private Balcony with City View", "En-suite Bathroom with Hot Water", "High-Speed Wi-Fi", "Daily Housekeeping"],
    amenities: [
      "Individually controlled climate / ceiling ventilation",
      "Flat-screen satellite television",
      "Executive writing desk and chair",
      "En-suite private bathroom with walk-in shower",
      "Complimentary high-speed Wi-Fi",
      "Bedside power outlets and reading sconces",
      "Complimentary bottled water daily",
      "Wardrobe with hangers and luggage bench",
      "Mosquito netting protection",
      "24-hour room service availability"
    ],
    status: "verified"
  },
  {
    id: "deluxe-double-room",
    name: "Deluxe Double Room",
    amharicName: "ነጠላ ትልቅ አልጋ ዴሉክስ ክፍል",
    tagline: "Serene sanctuary featuring plush double bed and private balcony",
    description: "An inviting retreat for couples and business executives. Featuring a comfortable queen-size double bed with bespoke floral towel presentation on arrival, private city-facing balcony, quiet acoustic insulation, and modern hospitality touches.",
    image: "/images/rahnile/room-bed-detail.webp",
    galleryImages: [
      "/images/rahnile/room-bed-detail.webp",
      "/images/rahnile/room-deluxe-twin.webp",
      "/images/rahnile/view-night-balcony.webp"
    ],
    bedType: "1 Queen Double Bed",
    occupancy: { adults: 2, children: 0 },
    sizeM2: 28,
    priceNote: "Rates available upon direct enquiry",
    features: ["Queen Bedding", "Balcony Vista", "Room Service", "Workspace"],
    amenities: [
      "Plush Queen-size mattress with premium linens",
      "Private balcony with Bahir Dar city panorama",
      "En-suite bathroom with hot rainfall shower & toiletries",
      "High-speed fiber Wi-Fi",
      "Satellite TV with international channels",
      "Writing desk and reading lamps",
      "Mini-refrigerator",
      "Complimentary daily bottled water",
      "Telephone with direct front-desk line",
      "Wake-up call service"
    ],
    status: "verified"
  },
  {
    id: "family-executive-suite",
    name: "Executive & Family Suite",
    amharicName: "የቤተሰብ እና የክብር እንግዶች ሰዊት",
    tagline: "Expansive multi-guest suite with separated lounge and balcony",
    description: "Spacious accommodation tailored for traveling families or guests desiring extended space. Offers connected bedroom zones, seating area, panoramic outlooks over the central avenues of Bahir Dar, and enhanced in-room amenities.",
    image: "/images/rahnile/view-night-balcony.webp",
    galleryImages: [
      "/images/rahnile/view-night-balcony.webp",
      "/images/rahnile/room-deluxe-twin.webp",
      "/images/rahnile/room-bed-detail.webp"
    ],
    bedType: "1 Double Bed + 1 or 2 Twin Beds",
    occupancy: { adults: 3, children: 2 },
    sizeM2: 42,
    priceNote: "Custom family & executive packages upon enquiry",
    features: ["Expanded Living Space", "Multiple Bed Configurations", "Panoramic Balcony", "VIP Welcome Service"],
    amenities: [
      "Dedicated living/sitting lounge corner",
      "Generous private balcony with open sky view",
      "Spacious bathroom with continuous hot water supply",
      "Flat-screen satellite television",
      "High-speed wireless internet",
      "Mini-fridge and tea/coffee making essentials",
      "Double wardrobe and secure storage",
      "Complimentary airport shuttle coordination",
      "Personalized front-desk assistance",
      "Daily turndown and housekeeping"
    ],
    status: "verified"
  }
];

export const VERIFIED_FACILITIES: Facility[] = [
  {
    id: "main-restaurant",
    name: "Rahnile Main Restaurant",
    amharicName: "ራህናይል ዋና ሬስቶራንት",
    category: "dining",
    description: "An inviting indoor dining hall dressed in warm natural olive tones, crisp linens, and curated art. Serves a rich morning breakfast buffet alongside authentic Ethiopian national dishes and continental classics prepared with fresh regional produce.",
    image: "/images/rahnile/dining-main-restaurant.webp",
    highlights: ["Complimentary Breakfast Buffet", "Authentic Ethiopian Cuisine & Injera", "Continental Mains & Fresh Salads", "Intimate Evening Ambience"],
    verified: true
  },
  {
    id: "terrace-veranda-dining",
    name: "Veranda & Open-Air Dining Terrace",
    amharicName: "የሰገነት ላይ መመገቢያ",
    category: "dining",
    description: "Breathe in the fresh breezes of Bahir Dar while dining on our elevated open-air terrace. Perfect for leisurely daytime lunches, sunlit morning coffee, and vibrant group dinners under the Ethiopian sky.",
    image: "/images/rahnile/dining-terrace-view.webp",
    highlights: ["Fresh Air Open-Air Veranda", "Panoramic Views of Green Bahir Dar", "Group Dining Capacity", "Day & Night Service"],
    verified: true
  },
  {
    id: "lounge-cocktail-bar",
    name: "Lounge & Evening Cocktail Bar",
    amharicName: "ላውንጅ እና መጠጥ ቤት",
    category: "dining",
    description: "A comfortable, contemporary lounge setting designed for unwinding after a day on Lake Tana. Enjoy local beers, fine wines, spirits, and non-alcoholic refreshments in stylish leather armchairs with soft ambient lighting.",
    image: "/images/rahnile/facility-lounge-bar.webp",
    highlights: ["Curated Ethiopian & International Wines", "Chilled Local Beers & Cocktails", "Comfortable Social Seating", "Live Sports & News TV"],
    verified: true
  },
  {
    id: "conference-meeting-hall",
    name: "Executive Conference & Meeting Hall",
    amharicName: "የስብሰባ እና ኮንፈረንስ አዳራሽ",
    category: "business",
    description: "Fully equipped business meeting room configured with U-shape or seminar seating, audio setup, presentation boards, natural daylight through draped windows, and dedicated event catering services.",
    image: "/images/rahnile/facility-conference-hall.webp",
    highlights: ["U-Shape & Banquet Configurations", "Bottled Water & Writing Material Setups", "Event Coffee Break Catering", "High-Speed Wi-Fi for Attendees"],
    verified: true
  },
  {
    id: "rooftop-sunset-view",
    name: "Rooftop Sunset Terrace",
    amharicName: "የጣሪያ ላይ ጀምበር መጥለቂያ ሰገነት",
    category: "wellness",
    description: "Watch the golden sun dip below the horizon of Bahir Dar and Lake Tana from our rooftop vantage point. A romantic spot for evening drinks and quiet contemplative moments.",
    image: "/images/rahnile/terrace-rooftop-sunset.webp",
    highlights: ["Lake & City Skyline Views", "Golden Hour Sunset Vantage", "Evening Drink Service", "Peaceful Atmosphere"],
    verified: true
  },
  {
    id: "reception-concierge",
    name: "24-Hour Front Desk & Concierge",
    amharicName: "የ24 ሰዓት የፊት ጠረጴዛ አገልግሎት",
    category: "service",
    description: "Our attentive bilingual hospitality team welcomes guests 24 hours a day with luggage assistance, Lake Tana boat excursion bookings, airport transfer coordination, and local recommendations.",
    image: "/images/rahnile/facility-front-desk.webp",
    highlights: ["24/7 Check-in & Concierge", "Luggage Storage & Porterage", "Airport Shuttle Arrangement", "Local Tour & Boat Coordination"],
    verified: true
  }
];

export const BAHIR_DAR_DESTINATIONS: Destination[] = [
  {
    id: "lake-tana-monasteries",
    title: "Lake Tana & Island Monasteries",
    amharicTitle: "ጣና ሐይቅ እና ጥንታዊ ገዳማት",
    distance: "700 meters to boat jetties",
    travelTime: "5 min to jetty, half/full day boat tour",
    description: "Africa's highest lake holds sacred centuries-old island monasteries such as Ura Kidane Mehret and Kibran Gabriel, famous for vivid religious wall frescoes and ancient church treasures.",
    image: "/images/rahnile/terrace-rooftop-sunset.webp",
    practicalTip: "Our reception can arrange authorized licensed boat captains and knowledgeable local guides directly from the nearby jetty.",
    directionsUrl: "https://www.google.com/maps/search/Lake+Tana+Boat+Trip+Bahir+Dar"
  },
  {
    id: "blue-nile-falls",
    title: "Tis Abay — Blue Nile Falls",
    amharicTitle: "ጥስ አባይ ፏፏቴ",
    distance: "32 km southeast of hotel",
    travelTime: "45-60 min drive",
    description: "Known locally as 'Tis Issat' (Smoke of Fire), this magnificent waterfall plunges into a dramatic gorge creating billowing mist and brilliant rainbows. A scenic foot suspension bridge built in 1626 is an iconic crossing point.",
    image: "/images/rahnile/view-night-balcony.webp",
    practicalTip: "Wear comfortable walking shoes for the 1.5-hour circular hike around the gorge.",
    directionsUrl: "https://www.google.com/maps/search/Blue+Nile+Falls+Tis+Abay"
  },
  {
    id: "bezawit-hill-palace",
    title: "Bezawit Hill Viewpoint",
    amharicTitle: "በዛዊት ተራራ",
    distance: "8 km from hotel",
    travelTime: "15 min drive",
    description: "Perched high above Bahir Dar with former Imperial residence of Emperor Haile Selassie, this viewpoint offers the most panoramic vista of the Blue Nile River flowing out from Lake Tana.",
    image: "/images/rahnile/dining-terrace-view.webp",
    practicalTip: "Visit around 5:00 PM to capture unforgettable sunset photos over the river bends.",
    directionsUrl: "https://www.google.com/maps/search/Bezawit+Palace+Bahir+Dar"
  },
  {
    id: "bahir-dar-central-market",
    title: "Bahir Dar City Market & Cultural Shops",
    amharicTitle: "የባሕር ዳር ገበያ እና ባሕላዊ እቃዎች",
    distance: "1.2 km from hotel",
    travelTime: "15 min walk / 5 min Bajaj ride",
    description: "Experience the vibrant heart of the city where artisans craft traditional Ethiopian woven textiles (Shemma), aromatic spices, hand-carved coffee tables, and locally produced honey.",
    image: "/images/rahnile/hotel-entrance-lobby.webp",
    practicalTip: "Saturday is the primary market day, but smaller craft stalls are lively throughout the week.",
    directionsUrl: "https://www.google.com/maps/search/Bahir+Dar+Market"
  }
];

export const INITIAL_APPROVED_REVIEWS = [
  {
    id: "rev-1",
    guestName: "Dawit Wolde",
    guestLocation: "Addis Ababa, Ethiopia",
    rating: 5,
    title: "Exceptional hospitality and wonderful terrace view",
    comment: "Stayed here for 3 nights during a regional conference. The staff at Rahnile went above and beyond to make our stay smooth. The evening terrace is so relaxing with cool breeze and good wine. Rooms are clean, hot water was consistent, and the location behind EEPCO is very convenient.",
    dateOfStay: "October 2024",
    createdAt: "2024-10-24T14:30:00Z",
    status: "approved" as const,
    verifiedStay: true
  },
  {
    id: "rev-2",
    guestName: "Claire & Thomas B.",
    guestLocation: "Lyon, France",
    rating: 5,
    title: "A welcoming, peaceful base for exploring Lake Tana",
    comment: "We loved our time at RahNile Hotel. The reception team helped us organize an early morning boat trip to Ura Kidane Mehret monastery without any hassle. Dinner at the restaurant was authentic and tasty, and the room was quiet and well cared for.",
    dateOfStay: "November 2024",
    createdAt: "2024-11-12T09:15:00Z",
    status: "approved" as const,
    verifiedStay: true
  },
  {
    id: "rev-3",
    guestName: "Dr. Samuel K.",
    guestLocation: "Hawassa, Ethiopia",
    rating: 4,
    title: "Reliable business hotel with great meeting facilities",
    comment: "Our NGO hosted a two-day workshop in their conference hall. Audio, seating, and tea breaks were executed smoothly. Fast Wi-Fi throughout the hotel and friendly service throughout our stay.",
    dateOfStay: "September 2024",
    createdAt: "2024-09-18T18:00:00Z",
    status: "approved" as const,
    verifiedStay: true
  }
];

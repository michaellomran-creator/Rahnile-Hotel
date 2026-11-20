import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HOTEL_INFO } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL("https://rahnilehotel.com"),
  title: {
    default: "Rahnile Hotel (RahNile Hotel) | Bahir Dar, Ethiopia | A Place to Feel at Ease",
    template: "%s | Rahnile Hotel Bahir Dar",
  },
  description:
    "Official website of Rahnile Hotel in Bahir Dar, Ethiopia. Comfortable guest accommodation, fine restaurant dining, conference facilities, open-air terrace, and easy access to Lake Tana and the Blue Nile.",
  keywords: [
    "Rahnile Hotel",
    "RahNile Hotel",
    "Rahnile Hotel Bahir Dar",
    "ራህናይል ሆቴል",
    "Bahir Dar hotels",
    "Lake Tana hotel accommodation",
    "Ethiopia hospitality",
    "Blue Nile Falls hotel",
    "hotels in Bahir Dar Ethiopia",
    "Kebele 05 hotel Bahir Dar",
  ],
  authors: [{ name: "Rahnile Hotel Bahir Dar" }],
  creator: "Rahnile Hotel",
  publisher: "Rahnile Hotel",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rahnilehotel.com",
    siteName: "Rahnile Hotel",
    title: "Rahnile Hotel — Nile Heritage Modernism in Bahir Dar, Ethiopia",
    description:
      "A welcoming, established Bahir Dar hotel combining comfort, warm Ethiopian hospitality, and convenient access to Lake Tana and the Blue Nile River.",
    images: [
      {
        url: "/images/rahnile/hotel-exterior-evening.webp",
        width: 1200,
        height: 800,
        alt: "Rahnile Hotel Bahir Dar exterior at twilight",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahnile Hotel Bahir Dar — A Place to Feel at Ease",
    description:
      "Comfort, Ethiopian hospitality, and relaxing terrace views in Kebele 05, Bahir Dar.",
    images: ["/images/rahnile/hotel-exterior-evening.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured Hotel JSON-LD
  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": ["Hotel", "LodgingBusiness"],
    "name": "Rahnile Hotel",
    "alternateName": ["RahNile Hotel", "ራህናይል ሆቴል"],
    "image": "https://rahnilehotel.com/images/rahnile/hotel-exterior-evening.webp",
    "url": "https://rahnilehotel.com",
    "telephone": HOTEL_INFO.contact.primaryPhone,
    "email": HOTEL_INFO.contact.email,
    "starRating": {
      "@type": "Rating",
      "ratingValue": "3",
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kebele 05, Behind EEPCO Building",
      "addressLocality": "Bahir Dar",
      "addressRegion": "Amhara Region",
      "addressCountry": "ET",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": HOTEL_INFO.address.coordinates.lat,
      "longitude": HOTEL_INFO.address.coordinates.lng,
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "On-site Restaurant", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Bar & Lounge", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Conference Hall", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Airport Shuttle", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-rahnile-parchment text-rahnile-charcoal font-sans antialiased selection:bg-rahnile-marigold selection:text-rahnile-charcoal">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

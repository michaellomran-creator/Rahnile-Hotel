# Rahnile Hotel (RahNile Hotel) — Bahir Dar, Ethiopia
### Official Production Hospitality Website

A complete, production-ready website designed and built for **Rahnile Hotel** in Bahir Dar, Ethiopia under the creative direction **"NILE HERITAGE MODERNISM"**.

---

## 1. Property Overview & Identity

- **Property Name:** Rahnile Hotel (ራህናይል ሆቴል)
- **Classification:** 3-Star City Hotel (~40-43 Guest Rooms)
- **Location:** Kebele 05, Behind EEPCO (Ethiopian Electric Utility) Building, Bahir Dar, Amhara Region, Ethiopia
- **GPS Coordinates:** `11.59364° N, 37.39002° E` | **Plus Code:** `7G3VH9VR+F2`
- **Phone Numbers:** +251 911 987 827 / +251 91 876 4227 / +251 58 220 8989
- **Email:** info@rahnilehotel.com / reservation@rahnilehotel.com
- **Brand Story & Name Meaning:** Portmanteau of classical Ge'ez / Semitic *Rāha / Rahn* (signifying rest, comfort, and ease) and the historic *Blue Nile River (Abay)*. Motto: **"A Place to Feel at Ease."**

---

## 2. Palette & Visual Identity

| Token | Hex | Role |
|---|---|---|
| Deep Aubergine | `#382033` | Primary brand background & typography |
| Royal Plum | `#56334D` | Secondary brand surface & badges |
| Antique Gold | `#C69B48` | Highlights, dividers & emblems |
| Marigold | `#E0B65B` | Primary interactive buttons & CTAs |
| Warm Parchment | `#F4EDDF` | Main warm body background |
| Soft Limestone | `#E6DDCE` | Card borders & secondary fills |
| Dark Charcoal | `#28232A` | Primary legible body text |
| Muted Olive | `#788064` | Subdued natural accents |
| Pure White | `#FFFFFF` | Card surfaces & crisp contrast |

---

## 3. Real Property Photography (15 Assets)

All photography assets are authentic, uncompressed images depicting the actual property:
- `hotel-exterior-evening.webp`: Facade at dusk showing illuminated architectural column with "RAHNILE HOTEL" signage.
- `hotel-entrance-lobby.webp`: Main glass entrance, crystal chandelier, uniformed doorman, and emblem stickers.
- `facility-front-desk.webp`: 24/7 reception desk and guest check-in counter.
- `room-deluxe-twin.webp`: Deluxe Twin guest room with duvets, rose petals, mosquito nets, and desk.
- `room-bed-detail.webp`: Deluxe bed detail with decorative folded swan towels and floral motif.
- `view-night-balcony.webp`: Night panorama from private guest balcony overlooking Bahir Dar avenues.
- `terrace-rooftop-sunset.webp`: Rooftop terrace with guests enjoying wine at sunset over Lake Tana horizon.
- `dining-main-restaurant.webp`: Indoor dining hall with green accent wall and dressed banquet tables.
- `dining-terrace-view.webp`: Open-air veranda terrace dining with long table and lush greenery.
- `dining-gourmet-dinner.webp`: Fine dining dinner setting with wine bottle, steak dish, and rose.
- `dining-fresh-salad.webp`: Fresh culinary salad presentation with avocado and sliced fruit.
- `dining-wine-pairing.webp`: Plated cuisine with paired wine glasses.
- `dining-couple-toast.webp`: Guests smiling and toasting wine in the restaurant.
- `facility-lounge-bar.webp`: Cocktail bar and lounge with armchairs and ambient lighting.
- `facility-conference-hall.webp`: Executive meeting and conference hall set up in U-shape with water and pads.

---

## 4. Website Pages & Architecture

1. **Home (`/`)**: Full 12-section hospitality experience:
   - Dynamic Hero with authentic exterior twilight photo, headline "A PLACE TO FEEL AT EASE", subtext, and quick check-in availability bar.
   - Nile Heritage Modernism story introduction with 3 pillars.
   - Accommodation showcase with real room photos, specs, and modal triggers.
   - Dining preview with culinary mosaic.
   - Facilities showcase (Conference Hall, Lounge Bar, Rooftop Sunset, 24/7 Reception).
   - Discover Bahir Dar guide (Lake Tana, Blue Nile Falls, Bezawit Palace, City Markets).
   - Guest review preview with verified external ratings and direct testimonials.
   - Curated gallery grid.
   - Real interactive Google Map embed with address and Get Directions.
   - Final reservation CTA banner and footer.
2. **About (`/about`)**: Deep editorial storytelling on the Ge'ez origin (*Rah* + *Nile*), hospitality philosophy, and connection to Lake Tana.
3. **Rooms & Suites (`/rooms`)**: Detailed accommodation catalog (Deluxe Double Room, Deluxe Twin Room, Executive & Family Suite) with full specs, modal popups, and direct booking links.
4. **Dining & Terrace (`/dining`)**: Restaurant dining hall, open-air veranda, cocktail lounge, confirmed service hours, and authentic culinary photography.
5. **Hotel Facilities (`/facilities`)**: Business conference hall, rooftop sunset terrace, 24-hr front desk, parking, and airport transfers.
6. **Explore Bahir Dar (`/explore`)**: Regional guide with travel times, distances, tips, and map links for Lake Tana island monasteries, Tis Abay, and local markets.
7. **Photo Gallery (`/gallery`)**: All 15 authentic hotel photographs with category filters and keyboard-navigable fullscreen Lightbox.
8. **Guest Reviews (`/reviews`)**:
   - System A: External verified ratings (Google Reviews 4.2★, Agoda 8.3/10, Tripadvisor).
   - System B: Approved direct guest reviews.
   - System C: Interactive review submission form with star rating, validation, spam honeypot, and moderation notice.
9. **Contact & Map (`/contact`)**: Verified telephone numbers, email, WhatsApp, physical address, and real Google Map embed.
10. **Reservation Enquiry (`/book`)**: True enquiry workflow with date constraint checks, room preferences, and secure database storage.
11. **Staff Portal (`/admin`)**:
    - Secure password authentication (`admin` / `Rahnile@2025`).
    - Moderation dashboard: Approve, Reject, or Delete pending reviews.
    - Booking enquiries manager: Track status (New, Contacted, Confirmed, Cancelled) and special requests.
    - Room and property specifications overview.

---

## 5. Development & Deployment

### Run Locally:
```bash
npm install
npm run build
npm start
```
Default local port: `http://localhost:3000` (or `-p 3002`).

### Staff Portal Login:
- URL: `/admin`
- Username: `admin`
- Password: `Rahnile@2025` (configurable via `ADMIN_PASSWORD` environment variable)

### Deploy to Vercel:
Push this repository to GitHub/GitLab and import into Vercel with standard Next.js settings:
```bash
vercel
```
Ensure to set optional environment variables:
- `ADMIN_USERNAME`: Custom administrative username
- `ADMIN_PASSWORD`: Secure administrative password

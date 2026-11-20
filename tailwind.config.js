/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rahnile: {
          aubergine: "#382033", // Primary brand color
          plum: "#56334D",      // Secondary brand color
          gold: "#C69B48",      // Highlights & premium accents
          marigold: "#E0B65B",  // Interactive buttons & calls to action
          parchment: "#F4EDDF", // Main light background
          limestone: "#E6DDCE", // Secondary surfaces / card fills
          charcoal: "#28232A",  // Primary dark text
          olive: "#788064",     // Natural accents
          cream: "#FAF7F2",     // Extra soft background
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Manrope", "DM Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(56, 32, 51, 0.12)',
        'subtle': '0 4px 20px -2px rgba(56, 32, 51, 0.06)',
        'glow-gold': '0 0 25px rgba(198, 155, 72, 0.25)',
      },
      backgroundImage: {
        'nile-pattern': "radial-gradient(ellipse at top, rgba(198, 155, 72, 0.08), transparent 70%)",
      }
    },
  },
  plugins: [],
};

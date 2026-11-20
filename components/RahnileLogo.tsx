import React from "react";
import Link from "next/link";

interface RahnileLogoProps {
  variant?: "light" | "dark";
  showAmharic?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function RahnileLogo({
  variant = "light",
  showAmharic = true,
  className = "",
  size = "md",
}: RahnileLogoProps) {
  const isLight = variant === "light";

  const textColor = isLight ? "text-white" : "text-rahnile-aubergine";
  const subTextColor = isLight ? "text-rahnile-gold" : "text-rahnile-plum";
  const amharicColor = isLight ? "text-white/70" : "text-rahnile-charcoal/70";

  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-12 h-12",
  };

  const titleSizes = {
    sm: "text-base tracking-[0.2em]",
    md: "text-xl tracking-[0.22em]",
    lg: "text-2xl sm:text-3xl tracking-[0.25em]",
  };

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 transition-opacity hover:opacity-90 ${className}`}
      aria-label="Rahnile Hotel Home"
    >
      {/* Nile Crest Emblem */}
      <div className={`relative flex-shrink-0 flex items-center justify-center rounded-full border border-rahnile-gold/60 p-1.5 ${isLight ? 'bg-rahnile-aubergine/80 shadow-glow-gold' : 'bg-rahnile-parchment'}`}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${iconSizes[size]} text-rahnile-gold`}
        >
          {/* Nile River Flowing Arch */}
          <path
            d="M8 32C14 26 22 36 28 30C34 24 40 32 44 26"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M6 38C12 32 20 42 26 36C32 30 38 38 42 32"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeOpacity="0.7"
          />
          {/* Architectural Arch of Hospitality */}
          <path
            d="M12 28V16C12 9.37 17.37 4 24 4C30.63 4 36 9.37 36 16V28"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Central Sun / Star of Bahir Dar */}
          <circle cx="24" cy="16" r="3.5" fill="#E0B65B" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-serif font-bold uppercase leading-none ${titleSizes[size]} ${textColor}`}>
            RAHNILE
          </span>
          <span className={`font-sans font-light text-[0.65rem] sm:text-xs uppercase tracking-[0.3em] ${subTextColor}`}>
            HOTEL
          </span>
        </div>

        {showAmharic && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className={`text-[0.68rem] tracking-wider font-sans ${amharicColor}`}>
              ራህናይል ሆቴል
            </span>
            <span className="text-[0.6rem] text-rahnile-gold">★ ★ ★</span>
            <span className="text-[0.55rem] tracking-widest uppercase text-rahnile-gold/90 font-medium">
              BAHIR DAR
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}

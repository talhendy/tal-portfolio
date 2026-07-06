"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

// Spring with bounce, shared by the photo morph + text shift
export const PHOTO_SPRING = { type: "spring" as const, bounce: 0.42, duration: 0.9 };

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const onAbout = pathname === "/about";

  return (
    <header className="w-full bg-[#fafafa] sticky top-0 z-50">
      <div className="mx-auto max-w-[1790px] px-5 sm:px-8 lg:px-10 py-3 md:py-5 flex items-center justify-between">
        {/* Left: house icon — active (dark) on home, light on other pages */}
        <Link href="/" className="flex items-center" aria-label="Tal Hendy - home">
          <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#EC4B2A" }} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-6 sm:gap-8">
          <Link
            href="/about"
            className="text-sm sm:text-base transition-colors"
            style={{ color: onAbout ? "#262626" : undefined }}
          >
            <span className={onAbout ? "" : "text-light hover:text-body"}>About</span>
          </Link>
          <a href="https://drive.google.com/file/d/1zinecgBBASm-joS6CxCSFE1WNWMmK10Y/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-light hover:text-body transition-colors">
            Resume
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex items-center justify-center w-11 h-11 -mr-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="#B1B1B1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="#B1B1B1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="#B1B1B1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="sm:hidden absolute right-5 z-50 bg-white rounded-2xl shadow-lg py-2 px-2 flex flex-col" style={{ top: "100%" }}>
          <Link
            href="/about"
            className="flex items-center min-h-[44px] px-4 text-base text-body hover:text-title transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <a
            href="https://drive.google.com/file/d/1zinecgBBASm-joS6CxCSFE1WNWMmK10Y/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center min-h-[44px] px-4 text-base text-body hover:text-title transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}

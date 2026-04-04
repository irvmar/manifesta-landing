"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/support", label: "Support" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isLanding = pathname === "/";

  // On non-landing pages, always show solid. On landing, show solid after scroll.
  const showSolid = scrolled || !isLanding;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll(); // Check immediately on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: showSolid
          ? "rgba(255,255,255,0.88)"
          : "linear-gradient(to bottom, rgba(15,31,78,0.5) 0%, transparent 100%)",
        backdropFilter: showSolid ? "blur(20px)" : "none",
        WebkitBackdropFilter: showSolid ? "blur(20px)" : "none",
        boxShadow: showSolid ? "0 1px 8px -3px rgba(0,0,0,0.08)" : "none",
      }}
    >
      <nav className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setMenuOpen(false)}>
          <Image
            src="/logo.webp"
            alt="Manifesta"
            width={32}
            height={32}
            className="rounded-lg transition-all duration-300 group-hover:scale-105"
            style={{
              filter: showSolid
                ? "none"
                : "drop-shadow(0 0 6px rgba(155,142,206,0.5))",
            }}
          />
          <span
            className="text-xl font-semibold tracking-wide transition-colors duration-500"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: showSolid ? "var(--lavender-800)" : "white",
            }}
          >
            Manifesta
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-300"
              style={{
                color: showSolid
                  ? pathname === link.href ? "var(--lavender-600)" : "var(--neutral-500)"
                  : "rgba(255,255,255,0.85)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://apps.apple.com/app/manifesta"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
            style={{
              background: showSolid
                ? "var(--lavender-500)"
                : "rgba(255,255,255,0.18)",
              border: showSolid ? "none" : "1px solid rgba(255,255,255,0.25)",
              backdropFilter: showSolid ? "none" : "blur(12px)",
              WebkitBackdropFilter: showSolid ? "none" : "blur(12px)",
            }}
          >
            Get the App
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span
              className="block h-[1.5px] rounded-full transition-all duration-300 origin-center"
              style={{
                background: showSolid ? "var(--neutral-700)" : "white",
                transform: menuOpen ? "rotate(45deg) translateY(4.5px)" : "none",
              }}
            />
            <span
              className="block h-[1.5px] rounded-full transition-all duration-300 origin-center"
              style={{
                background: showSolid ? "var(--neutral-700)" : "white",
                transform: menuOpen ? "rotate(-45deg) translateY(-4.5px)" : "none",
              }}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-5 pb-6 pt-2 flex flex-col gap-1"
          style={{
            background: showSolid ? "rgba(255,255,255,0.95)" : "rgba(15,31,78,0.92)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 px-3 rounded-xl text-[15px] font-medium"
              style={{
                color: showSolid ? "var(--neutral-700)" : "rgba(255,255,255,0.9)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://apps.apple.com/app/manifesta"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 py-3 text-center rounded-xl text-white font-semibold text-sm"
            style={{ background: "var(--lavender-500)" }}
          >
            Get the App
          </a>
        </div>
      )}
    </header>
  );
}

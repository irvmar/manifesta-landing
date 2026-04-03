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

  // Non-landing pages have a light background, so navbar starts in "scrolled" style
  const isLanding = pathname === "/";
  const showSolid = scrolled || !isLanding;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 navbar-glow-border transition-all duration-700 ease-out ${
        showSolid
          ? "scrolled bg-white/85 backdrop-blur-2xl shadow-[0_1px_12px_-4px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setMenuOpen(false)}>
          <Image
            src="/logo.webp"
            alt="Manifesta"
            width={32}
            height={32}
            className="rounded-lg transition-all duration-500 group-hover:scale-105 group-hover:rotate-[2deg]"
            style={{
              filter: showSolid
                ? "drop-shadow(0 0 4px rgba(155,142,206,0.2))"
                : "drop-shadow(0 0 8px rgba(155,142,206,0.5))",
            }}
          />
          <span
            className={`text-xl font-semibold tracking-wide transition-colors duration-700 ${
              showSolid ? "text-[var(--lavender-800)]" : "text-white"
            }`}
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Manifesta
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-all duration-500 ${
                  showSolid
                    ? isActive
                      ? "text-[var(--lavender-600)]"
                      : "text-[var(--neutral-500)] hover:text-[var(--lavender-600)]"
                    : isActive
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                    style={{
                      background: showSolid
                        ? "var(--lavender-400)"
                        : "rgba(255,255,255,0.6)",
                    }}
                  />
                )}
              </Link>
            );
          })}
          <a
            href="https://apps.apple.com/app/manifesta"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-500 hover:scale-[1.04] active:scale-[0.98]"
            style={{
              background: showSolid
                ? "linear-gradient(135deg, var(--lavender-500), var(--lavender-600))"
                : "rgba(255,255,255,0.15)",
              color: "white",
              backdropFilter: showSolid ? "none" : "blur(16px)",
              WebkitBackdropFilter: showSolid ? "none" : "blur(16px)",
              border: showSolid
                ? "none"
                : "1px solid rgba(255,255,255,0.2)",
              boxShadow: showSolid
                ? "0 2px 12px -2px rgba(155,142,206,0.4)"
                : "none",
            }}
          >
            Get the App
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 ${
            menuOpen
              ? showSolid
                ? "bg-[var(--lavender-50)]"
                : "bg-white/10"
              : "bg-transparent"
          }`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <div className="w-5 flex flex-col gap-[5px]">
            <span
              className={`block h-[1.5px] rounded-full origin-center transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                showSolid ? "bg-[var(--neutral-600)]" : "bg-white"
              } ${menuOpen ? "rotate-45 translate-y-[3.25px]" : ""}`}
            />
            <span
              className={`block h-[1.5px] rounded-full origin-center transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                showSolid ? "bg-[var(--neutral-600)]" : "bg-white"
              } ${menuOpen ? "-rotate-45 -translate-y-[3.25px]" : ""}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="px-5 pb-7 pt-3 flex flex-col gap-0.5"
          style={{
            background: showSolid
              ? "rgba(255,255,255,0.95)"
              : "rgba(15,31,78,0.88)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          {NAV_LINKS.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`py-3.5 px-3 rounded-xl text-[15px] font-medium transition-all duration-300 ${
                  showSolid
                    ? isActive
                      ? "text-[var(--lavender-600)] bg-[var(--lavender-50)]"
                      : "text-[var(--neutral-600)] hover:bg-[var(--neutral-50)]"
                    : isActive
                      ? "text-white bg-white/10"
                      : "text-white/80 hover:bg-white/5"
                }`}
                style={{
                  transitionDelay: menuOpen ? `${(i + 1) * 50}ms` : "0ms",
                  transform: menuOpen ? "translateX(0)" : "translateX(-8px)",
                  opacity: menuOpen ? 1 : 0,
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://apps.apple.com/app/manifesta"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 py-3.5 text-center rounded-xl text-white font-semibold text-sm transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, var(--lavender-500), var(--lavender-600))",
              boxShadow: "0 4px 16px -4px rgba(155,142,206,0.4)",
              transitionDelay: menuOpen ? "200ms" : "0ms",
              transform: menuOpen ? "translateY(0)" : "translateY(4px)",
              opacity: menuOpen ? 1 : 0,
            }}
          >
            Get the App
          </a>
        </div>
      </div>
    </header>
  );
}

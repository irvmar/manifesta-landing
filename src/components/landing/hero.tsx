"use client";

import Image from "next/image";
import { GradientMesh } from "@/components/ambient/gradient-mesh";
import { FloatingParticles } from "@/components/ambient/floating-particles";
import { AppStoreBadge } from "@/components/ui/app-store-badge";

export function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0F1F4E" }}
    >
      <GradientMesh variant="midnight" />
      <div className="noise-overlay" />
      <FloatingParticles count={12} />

      <div className="relative z-10 text-center px-6 py-20 max-w-2xl mx-auto">
        {/* Logo */}
        <div className="mb-8 hero-stagger" style={{ animationDelay: "0.2s" }}>
          <Image
            src="/logo.webp"
            alt="Manifesta"
            width={96}
            height={96}
            className="mx-auto rounded-[22px]"
            style={{
              filter: "drop-shadow(0 0 12px rgba(155,142,206,0.4))",
              animation: "glowPulse 3s ease-in-out infinite",
            }}
            priority
          />
        </div>

        {/* Headline */}
        <h1
          className="text-[clamp(2.5rem,7vw,4rem)] leading-[1.1] font-semibold text-white mb-5 hero-stagger"
          style={{ fontFamily: "var(--font-cormorant)", animationDelay: "0.42s" }}
        >
          Manifest the life
          <br />
          you were meant for
        </h1>

        {/* Subtitle */}
        <p
          className="text-base md:text-lg text-white/60 max-w-md mx-auto mb-10 leading-relaxed hero-stagger"
          style={{ animationDelay: "0.64s" }}
        >
          Name what you desire. The AI builds a meditation around it —
          unique to you, designed to bring it closer.
        </p>

        {/* Social proof pill */}
        <div
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-8 hero-stagger"
          style={{
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.15)",
            animationDelay: "0.86s",
          }}
        >
          <span className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-3.5 h-3.5"
                fill="var(--gold-500)"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </span>
          <span className="text-sm font-semibold text-white/80">4.8</span>
          <span className="w-px h-3.5 bg-white/20" />
          <span className="text-sm text-white/55">Free on the App Store</span>
        </div>

        {/* Primary CTA */}
        <div className="hero-stagger" style={{ animationDelay: "1.08s" }}>
          <AppStoreBadge />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        style={{ animation: "scrollChevron 2s ease-in-out infinite" }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}

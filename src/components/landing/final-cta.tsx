"use client";

import { GradientMesh } from "@/components/ambient/gradient-mesh";
import { FloatingParticles } from "@/components/ambient/floating-particles";
import { BreathingOrb } from "@/components/ambient/breathing-orb";
import { AppStoreBadge } from "@/components/ui/app-store-badge";
import { SectionReveal } from "@/components/ui/section-reveal";

export function FinalCTA() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Dramatic gradient transition from testimonials (light) into this dark section */}
      <div
        className="absolute top-0 left-0 right-0 h-[120px] z-[2] pointer-events-none"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(250, 251, 252, 0.6) 0%,
            rgba(250, 251, 252, 0.2) 15%,
            rgba(15, 31, 78, 0.0) 40%,
            transparent 100%
          )`,
        }}
        aria-hidden="true"
      />

      <GradientMesh variant="midnight" />
      {/* Noise texture for depth consistency with hero */}
      <div className="noise-overlay" />
      <FloatingParticles count={8} />

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        {/* Breathing orb */}
        <SectionReveal className="mb-10">
          <BreathingOrb size={140} className="mx-auto" />
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <h2
            className="text-[clamp(2rem,5vw,3rem)] font-semibold text-white leading-tight mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Everything you want is on the other side of belief
          </h2>
          <p className="text-white/50 mb-10 max-w-md mx-auto leading-relaxed">
            Name what you desire. Close your eyes. Let the meditation
            carry you closer to the life you&apos;re creating.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.3}>
          <AppStoreBadge />
          <p className="text-white/30 text-xs mt-4">
            Free to download. No credit card needed.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

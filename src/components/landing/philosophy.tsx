"use client";

import { SectionReveal } from "@/components/ui/section-reveal";
import { GlassCard } from "@/components/ui/glass-card";

const PILLARS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    title: "Yours alone",
    desc: "Every session is generated from your words. No two meditations are ever the same.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    ),
    title: "Close your eyes",
    desc: "Premium voices and ambient soundscapes — rain, forest, ocean — wrap around you like a warm blanket.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "Feel the shift",
    desc: "Track your mood before and after. Watch the change happen — in your data and in your life.",
  },
];

export function Philosophy() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Warm gradient transition background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 30% 20%, rgba(196,162,101,0.14) 0%, transparent 55%),
            radial-gradient(ellipse 70% 50% at 70% 80%, rgba(155,142,206,0.18) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,148,157,0.10) 0%, transparent 55%),
            linear-gradient(170deg, #F5EDDA 0%, #F0EEF8 35%, #F9F0F1 65%, #FAFBFC 100%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Quote */}
        <SectionReveal className="text-center mb-16 md:mb-20">
          <blockquote>
            <p
              className="text-[clamp(1.5rem,4vw,2.25rem)] leading-snug italic text-[var(--lavender-800)]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              &ldquo;What you think, you become.
              <br className="hidden sm:block" />{" "}
              What you feel, you attract.&rdquo;
            </p>
          </blockquote>

          {/* Decorative separator between quote and cards */}
          <div className="flex items-center justify-center gap-3 mt-10">
            <div
              className="h-px w-12"
              style={{
                background: "linear-gradient(to right, transparent, rgba(155,142,206,0.35))",
              }}
            />
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "rgba(155,142,206,0.4)" }}
            />
            <div
              className="h-px w-12"
              style={{
                background: "linear-gradient(to left, transparent, rgba(155,142,206,0.35))",
              }}
            />
          </div>
        </SectionReveal>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PILLARS.map((pillar, i) => (
            <SectionReveal key={pillar.title} delay={i * 0.12}>
              <GlassCard className="p-7 text-center h-full glass-card-premium">
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5"
                  style={{
                    background: "rgba(155,142,206,0.12)",
                    color: "var(--lavender-600)",
                  }}
                >
                  {pillar.icon}
                </div>
                <h3
                  className="text-xl font-semibold mb-2 text-[var(--lavender-800)]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--neutral-500)]">
                  {pillar.desc}
                </p>
              </GlassCard>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

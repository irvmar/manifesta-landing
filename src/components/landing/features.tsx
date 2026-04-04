"use client";

import { SectionReveal } from "@/components/ui/section-reveal";
import { AppStoreBadge } from "@/components/ui/app-store-badge";

const FEATURES = [
  {
    title: "Name what you want to bring to life",
    desc: "A promotion, inner peace, a new chapter — say it in your own words. The AI shapes it into your practice.",
  },
  {
    title: "Sink into the right atmosphere",
    desc: "Choose a voice that calms you. Layer rain, forest, or ocean underneath. Make each session feel like home.",
  },
  {
    title: "Carry your practice everywhere",
    desc: "Download sessions for offline listening. On a flight, in a park, before a big meeting — your calm travels with you.",
  },
  {
    title: "Watch yourself transform",
    desc: "Mood reflections before and after each session build a picture of your growth. The proof is in how you feel.",
  },
];

export function Features() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "var(--cloud-50)" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 50% 40% at 70% 30%, rgba(155,142,206,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 30% 70%, rgba(201,148,157,0.06) 0%, transparent 70%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Enhanced phone mockup */}
          <SectionReveal>
            <div
              className="relative mx-auto max-w-[280px]"
              style={{
                transform: "perspective(1200px) rotateY(-2deg) rotateX(1deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className="relative rounded-[2.5rem] p-3 shadow-2xl"
                style={{
                  background: "linear-gradient(145deg, #1a1a2e, #16213e)",
                  boxShadow:
                    "0 25px 60px -12px rgba(0,0,0,0.25), 0 10px 30px -5px rgba(15,31,78,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
              >
                {/* Glass reflection/shine across phone body */}
                <div className="phone-glass-shine" />

                {/* Dynamic Island */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-10" />

                {/* Screen */}
                <div
                  className="relative rounded-[2rem] overflow-hidden aspect-[9/19.5]"
                  style={{
                    background: `
                      radial-gradient(ellipse 80% 40% at 50% 15%, rgba(155,142,206,0.3) 0%, transparent 60%),
                      radial-gradient(ellipse 60% 40% at 50% 85%, rgba(201,148,157,0.15) 0%, transparent 60%),
                      linear-gradient(165deg, #0F1F4E 0%, #1A2F61 50%, #24386B 100%)
                    `,
                  }}
                >
                  {/* Subtle scanline/glass overlay effect */}
                  <div className="phone-scanline-overlay" />
                  <div className="flex flex-col h-full px-5 pt-12 pb-4">
                    {/* Status bar mock */}
                    <div className="flex justify-between items-center mb-5 px-1">
                      <span className="text-white/50 text-[9px] font-medium">9:41</span>
                      <div className="flex gap-1 items-center">
                        <div className="w-3.5 h-2 rounded-sm border border-white/40 relative">
                          <div className="absolute inset-[1px] right-[2px] bg-white/50 rounded-[1px]" />
                        </div>
                      </div>
                    </div>

                    {/* Greeting */}
                    <p
                      className="text-white/90 text-[15px] font-semibold mb-0.5"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      Good morning, Sarah
                    </p>
                    <p className="text-white/35 text-[9px] mb-4">
                      What will you manifest today?
                    </p>

                    {/* Intention card */}
                    <div
                      className="rounded-2xl p-3.5 mb-3"
                      style={{
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-4 h-4 rounded-md" style={{ background: "rgba(155,142,206,0.4)" }} />
                        <span className="text-white/60 text-[8px] font-medium uppercase tracking-wider">Today&apos;s intention</span>
                      </div>
                      <p className="text-white/75 text-[10px] italic leading-relaxed">
                        &ldquo;I attract abundance and new opportunities effortlessly...&rdquo;
                      </p>
                    </div>

                    {/* Soundscape selector */}
                    <div className="flex gap-2 mb-3">
                      {[
                        { label: "Rain", active: true },
                        { label: "Forest", active: false },
                        { label: "Ocean", active: false },
                      ].map((s) => (
                        <div
                          key={s.label}
                          className="flex-1 py-1.5 rounded-lg text-center text-[8px] font-medium"
                          style={{
                            background: s.active ? "rgba(155,142,206,0.3)" : "rgba(255,255,255,0.05)",
                            color: s.active ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.35)",
                            border: s.active ? "1px solid rgba(155,142,206,0.4)" : "1px solid rgba(255,255,255,0.06)",
                          }}
                        >
                          {s.label}
                        </div>
                      ))}
                    </div>

                    {/* Breathing orb mini */}
                    <div className="flex-1 flex items-center justify-center">
                      <div className="relative">
                        <div
                          className="w-16 h-16 rounded-full"
                          style={{
                            background: "radial-gradient(circle at 35% 35%, rgba(181,171,219,0.8), rgba(155,142,206,0.5) 60%, transparent)",
                            boxShadow: "0 0 30px rgba(155,142,206,0.3)",
                            animation: "breathe 4s ease-in-out infinite",
                          }}
                        />
                      </div>
                    </div>

                    {/* CTA button */}
                    <div
                      className="rounded-xl py-2.5 text-white text-[10px] font-semibold text-center"
                      style={{ background: "var(--lavender-500)" }}
                    >
                      Begin Meditation
                    </div>

                    {/* Bottom bar */}
                    <div className="flex justify-around mt-3 pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                      {["Home", "History", "Profile"].map((tab, i) => (
                        <span
                          key={tab}
                          className="text-[7px] font-medium"
                          style={{ color: i === 0 ? "rgba(155,142,206,0.8)" : "rgba(255,255,255,0.25)" }}
                        >
                          {tab}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Ambient glow */}
              <div
                className="absolute -inset-8 rounded-full blur-3xl -z-10"
                style={{
                  background: "radial-gradient(circle, rgba(155,142,206,0.15) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />
            </div>
          </SectionReveal>

          {/* Feature list */}
          <div className="flex flex-col gap-6">
            <SectionReveal>
              <h2
                className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-tight text-[var(--lavender-800)] mb-2"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Turn your intentions into reality
              </h2>
              <p className="text-[var(--neutral-500)] mb-4">
                Other apps recycle the same scripts for everyone.
                Manifesta creates each session from what you want to manifest — right now, today.
              </p>
            </SectionReveal>

            {FEATURES.map((feat, i) => (
              <SectionReveal key={feat.title} delay={i * 0.1}>
                <div className="flex gap-4">
                  <div
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: "rgba(155,142,206,0.15)" }}
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="var(--lavender-600)"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--neutral-700)] mb-1">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-[var(--neutral-500)] leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}

            {/* Inline download CTA */}
            <SectionReveal delay={0.4}>
              <div className="pt-2">
                <AppStoreBadge />
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

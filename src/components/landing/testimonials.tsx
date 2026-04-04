"use client";

import { SectionReveal } from "@/components/ui/section-reveal";
import { GlassCard } from "@/components/ui/glass-card";

const TESTIMONIALS = [
  {
    quote:
      "I've tried every meditation app out there. This is the first one that actually talks about what I'm going through.",
    name: "Sarah M.",
    detail: "3 months in",
    rating: 5,
  },
  {
    quote:
      "The voices sound real. Not robotic, not weird — just calm and natural. Rain + the deep voice is my go-to.",
    name: "James R.",
    detail: "Daily listener",
    rating: 5,
  },
  {
    quote:
      "I wrote 'I want to stop being afraid of change' and the meditation it made genuinely moved me.",
    name: "Lucia T.",
    detail: "Week 2",
    rating: 5,
  },
  {
    quote:
      "The mood tracker showed me something I couldn't see on my own — I'm calmer after 30 days than I thought possible.",
    name: "Alex K.",
    detail: "60-day streak",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="var(--gold-500)">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Warm background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 30%, rgba(196,162,101,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 70% 50% at 80% 70%, rgba(155,142,206,0.15) 0%, transparent 60%),
            linear-gradient(170deg, #FBF8F0 0%, #F8F7FC 50%, #FAFBFC 100%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionReveal className="text-center mb-12">
          <h2
            className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-[var(--lavender-800)]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Real people, real shifts
          </h2>
        </SectionReveal>

        <div className="testimonial-scroll-container">
          <div className="md:grid md:grid-cols-2 md:gap-5 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
            {TESTIMONIALS.map((t, i) => (
              <SectionReveal key={t.name} delay={i * 0.1} className="snap-center shrink-0 w-[85vw] max-w-[340px] md:w-auto md:max-w-none">
                <GlassCard className="p-6 h-full flex flex-col glass-card-premium relative">
                  {/* Decorative quote mark */}
                  <div
                    className="absolute top-4 right-5 pointer-events-none select-none"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "3.5rem",
                      lineHeight: 1,
                      color: "rgba(155, 142, 206, 0.1)",
                    }}
                    aria-hidden="true"
                  >
                    &ldquo;
                  </div>
                  <Stars count={t.rating} />
                  <p className="text-sm leading-relaxed text-[var(--neutral-600)] flex-1 mb-4 relative z-[1]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-[var(--neutral-700)]">
                      {t.name}
                    </p>
                    <p className="text-xs text-[var(--neutral-400)]">{t.detail}</p>
                  </div>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

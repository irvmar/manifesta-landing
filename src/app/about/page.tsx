import type { Metadata } from "next";
import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";
import { AppStoreBadge } from "@/components/ui/app-store-badge";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Manifesta — our mission to make personalized meditation accessible to everyone.",
};

const VALUES = [
  {
    title: "Intentional",
    desc: "Every feature serves your practice. No bloat, no distractions — just what matters.",
    color: "var(--lavender-500)",
    bgGradient: "linear-gradient(135deg, rgba(155,142,206,0.12), rgba(155,142,206,0.04))",
  },
  {
    title: "Personal",
    desc: "AI that truly understands your goals and crafts experiences uniquely for you.",
    color: "var(--rose-500)",
    bgGradient: "linear-gradient(135deg, rgba(201,148,157,0.12), rgba(201,148,157,0.04))",
  },
  {
    title: "Evolving",
    desc: "Your practice deepens over time, and Manifesta grows with you — smarter and more attuned.",
    color: "var(--sage-500)",
    bgGradient: "linear-gradient(135deg, rgba(136,163,139,0.12), rgba(136,163,139,0.04))",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen relative" style={{ background: "var(--cloud-50)" }}>
      {/* Subtle ambient background element */}
      <div
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          background: `
            radial-gradient(ellipse 40% 30% at 85% 20%, rgba(155,142,206,0.08) 0%, transparent 100%),
            radial-gradient(ellipse 35% 25% at 15% 60%, rgba(201,148,157,0.06) 0%, transparent 100%)
          `,
        }}
      />

      {/* Hero area */}
      <div
        className="relative pt-28 pb-16 md:pt-32 md:pb-24"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 10%, rgba(155,142,206,0.15) 0%, transparent 55%),
            radial-gradient(ellipse 60% 40% at 30% 80%, rgba(201,148,157,0.10) 0%, transparent 55%),
            var(--cloud-50)
          `,
        }}
      >
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Image
            src="/logo.webp"
            alt="Manifesta"
            width={64}
            height={64}
            className="mx-auto rounded-[18px] mb-6"
            style={{
              filter: "drop-shadow(0 0 16px rgba(155,142,206,0.35))",
            }}
          />
          <h1
            className="text-[clamp(2rem,5vw,3rem)] font-semibold text-[var(--lavender-800)] mb-5"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            About Manifesta
          </h1>
          <p
            className="text-[clamp(1.1rem,2.5vw,1.35rem)] leading-relaxed text-[var(--neutral-500)] max-w-lg mx-auto"
          >
            We believe that your thoughts shape your reality. Manifesta exists
            to make that belief actionable — through the quiet power of
            personalized meditation.
          </p>
        </div>
      </div>

      <div className="relative mx-auto max-w-2xl px-6 pb-20">
        {/* Mission / Quote */}
        <div className="mb-16">
          <blockquote className="decorative-quote">
            <p
              className="text-[clamp(1.25rem,3vw,1.75rem)] italic leading-snug text-[var(--lavender-700)]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              &ldquo;The mind is everything. What you think, you become.&rdquo;
            </p>
            <cite className="block mt-3 text-sm text-[var(--neutral-400)] not-italic tracking-wide">
              — Buddha
            </cite>
          </blockquote>
        </div>

        {/* Story */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-1 h-6 rounded-full"
              style={{
                background: "linear-gradient(to bottom, var(--lavender-400), var(--rose-300))",
              }}
            />
            <h2
              className="text-2xl font-semibold text-[var(--lavender-800)]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Our Story
            </h2>
          </div>
          <div className="flex flex-col gap-5 text-[15px] leading-[1.8] text-[var(--neutral-600)]">
            <p>
              Manifesta was born from a simple frustration: meditation apps felt
              generic. The same scripts, the same voices, the same sessions
              recycled for millions of people with wildly different lives and
              dreams.
            </p>
            <p>
              We asked: what if meditation could be as unique as the person
              practicing it? What if AI could understand your intention — your
              specific hope, fear, or aspiration — and create a meditation that
              speaks directly to that moment in your life?
            </p>
            <p>
              That question became Manifesta. An app where every session is
              generated fresh, every voice feels natural, and every soundscape
              wraps around you like it was composed for this exact moment.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-1 h-6 rounded-full"
              style={{
                background: "linear-gradient(to bottom, var(--lavender-400), var(--sage-400))",
              }}
            />
            <h2
              className="text-2xl font-semibold text-[var(--lavender-800)]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              What We Value
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {VALUES.map((v) => (
              <GlassCard key={v.title} className="p-6 text-center group">
                <div
                  className="w-10 h-10 rounded-xl mx-auto mb-4 flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                  style={{ background: v.bgGradient }}
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: v.color }}
                  />
                </div>
                <h3 className="text-sm font-semibold text-[var(--neutral-700)] mb-1.5">
                  {v.title}
                </h3>
                <p className="text-xs text-[var(--neutral-500)] leading-relaxed">
                  {v.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="text-center rounded-2xl p-6 sm:p-10 relative overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 50% 50%, rgba(155,142,206,0.10) 0%, transparent 60%),
              rgba(255,255,255,0.6)
            `,
            border: "1px solid rgba(155,142,206,0.15)",
          }}
        >
          <h3
            className="text-xl font-semibold text-[var(--lavender-800)] mb-2"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Ready to begin?
          </h3>
          <p className="text-sm text-[var(--neutral-500)] mb-5">
            Your first 7 days are free.
          </p>
          <AppStoreBadge className="mx-auto" />
        </div>
      </div>
    </div>
  );
}

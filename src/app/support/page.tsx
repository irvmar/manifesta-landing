import type { Metadata } from "next";
import Link from "next/link";
import { GlassCard } from "@/components/ui/glass-card";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with Manifesta. Contact our support team.",
};

const COMMON_QUESTIONS = [
  {
    q: "How do I cancel my subscription?",
    a: 'Go to Settings \u2192 Apple ID \u2192 Subscriptions on your device, then select Manifesta and tap "Cancel Subscription."',
  },
  {
    q: "Can I use Manifesta offline?",
    a: "Yes! Premium subscribers can download meditations for offline use. Tap the download icon on any completed meditation.",
  },
  {
    q: "How do I change my meditation voice?",
    a: "Before starting a meditation, tap the voice selector to choose from our available AI voices.",
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--cloud-50)" }}>
      {/* Header with subtle gradient */}
      <div
        className="pt-28 pb-12 md:pt-32 md:pb-16"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% 0%, rgba(155,142,206,0.12) 0%, transparent 60%),
            var(--cloud-50)
          `,
        }}
      >
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h1
            className="text-[clamp(2rem,5vw,3rem)] font-semibold text-[var(--lavender-800)] mb-3"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            How can we help?
          </h1>
          <p className="text-[var(--neutral-500)]">
            We&apos;re here to support your meditation journey.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-6 pb-20">
        {/* Email contact — hero card */}
        <GlassCard elevated className="p-8 sm:p-10 text-center mb-14 relative">
          {/* Subtle ambient glow behind the card */}
          <div
            className="absolute -inset-4 -z-10 rounded-3xl blur-2xl opacity-40 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(155,142,206,0.2), transparent 70%)",
            }}
          />
          <div
            className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, rgba(155,142,206,0.14), rgba(201,148,157,0.1))",
            }}
          >
            <svg
              className="w-7 h-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--lavender-500)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                animation: "subtleFloat 4s ease-in-out infinite",
              }}
            >
              <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
          <h2
            className="text-2xl font-semibold text-[var(--lavender-800)] mb-2"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Email Us
          </h2>
          <a
            href="mailto:support@manifesta.ai"
            className="inline-block min-h-[44px] leading-[44px] text-lg font-medium transition-all duration-300 hover:tracking-wide"
            style={{ color: "var(--lavender-600)" }}
          >
            support@manifesta.ai
          </a>
          <p className="text-sm text-[var(--neutral-400)] mt-2">
            We typically respond within 24 hours.
          </p>
        </GlassCard>

        {/* Common questions */}
        <div className="flex items-center gap-3 mb-6">
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
            Common Questions
          </h2>
        </div>

        <div className="flex flex-col gap-3 mb-8">
          {COMMON_QUESTIONS.map((item) => (
            <div
              key={item.q}
              className="rounded-xl p-5 transition-all duration-300 hover:shadow-sm group"
              style={{
                background: "rgba(255,255,255,0.7)",
                border: "1px solid var(--neutral-200)",
              }}
            >
              <h3 className="text-sm font-semibold text-[var(--neutral-700)] mb-1.5 group-hover:text-[var(--lavender-700)] transition-colors duration-300">
                {item.q}
              </h3>
              <p className="text-sm text-[var(--neutral-500)] leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:gap-3"
            style={{
              color: "var(--lavender-600)",
              background: "rgba(155,142,206,0.08)",
              border: "1px solid rgba(155,142,206,0.15)",
            }}
          >
            View all frequently asked questions
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

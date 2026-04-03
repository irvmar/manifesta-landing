import type { Metadata } from "next";
import { FaqAccordion } from "./accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Manifesta — subscriptions, features, privacy, and more.",
};

const CATEGORY_ICONS: Record<string, string> = {
  "Getting Started": "\u2728",
  "Subscription": "\u2B50",
  "Features": "\uD83C\uDFB6",
  "Privacy & Security": "\uD83D\uDD12",
};

const FAQ_CATEGORIES = [
  {
    title: "Getting Started",
    items: [
      {
        q: "What is Manifesta?",
        a: "Manifesta is an AI-powered meditation app that creates personalized meditation sessions based on your specific intentions and goals. Each meditation is unique, generated just for you.",
      },
      {
        q: "How does the AI meditation work?",
        a: "You write an intention \u2014 something you want to manifest or focus on. Our AI analyzes your intention and creates a custom meditation script, which is then narrated by a premium AI voice with your chosen ambient soundscape.",
      },
      {
        q: "Do I need meditation experience?",
        a: "Not at all! Manifesta is designed for everyone, from complete beginners to experienced meditators. The AI adapts the content to your level and preferences.",
      },
    ],
  },
  {
    title: "Subscription",
    items: [
      {
        q: "How much does Manifesta cost?",
        a: "We offer two plans: Weekly at $4.99/week and Annual at $39.99/year (saving over 84%). Both include a 7-day free trial so you can try everything before committing.",
      },
      {
        q: "How do I cancel my subscription?",
        a: "Go to Settings \u2192 Apple ID \u2192 Subscriptions on your iOS device, select Manifesta, and tap \"Cancel Subscription.\" You'll keep access until the end of your current billing period.",
      },
      {
        q: "Can I get a refund?",
        a: "Refunds are handled by Apple. Visit reportaproblem.apple.com to submit a refund request for any App Store purchase.",
      },
      {
        q: "What's included in the free version?",
        a: "The free version gives you limited access to basic meditation features. Premium unlocks unlimited AI meditations, all voices and soundscapes, offline downloads, and mood tracking.",
      },
    ],
  },
  {
    title: "Features",
    items: [
      {
        q: "Can I use Manifesta offline?",
        a: "Yes! Premium subscribers can download meditations for offline listening. Tap the download icon on any completed meditation to save it to your device.",
      },
      {
        q: "How many voices are available?",
        a: "We offer multiple premium AI voices, each with a different tone and personality. We're continuously adding new voices based on user feedback.",
      },
      {
        q: "What soundscapes are available?",
        a: "Currently we offer rain, forest, and ocean ambient soundscapes. You can also meditate in silence. More soundscapes are coming soon.",
      },
      {
        q: "How does mood tracking work?",
        a: "Before and after each meditation, you can optionally record your mood. Over time, this builds a picture of how your practice impacts your emotional wellbeing.",
      },
    ],
  },
  {
    title: "Privacy & Security",
    items: [
      {
        q: "Is my data safe?",
        a: "Absolutely. Your data is encrypted in transit and at rest using industry-standard protocols. We never sell your personal information. See our Privacy Policy for full details.",
      },
      {
        q: "Are my intentions shared with anyone?",
        a: "Your intentions are sent to our AI service only to generate your meditation. They are not stored by the AI provider, shared with third parties, or used for any other purpose.",
      },
      {
        q: "How do I delete my account?",
        a: "You can delete your account in the app (Profile \u2192 Settings \u2192 Delete Account) or through our website at manifesta.ai/delete-account. All your data will be permanently removed within 30 days.",
      },
    ],
  },
];

// JSON-LD for FAQ schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_CATEGORIES.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

export default function FaqPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--cloud-50)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
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
            Frequently Asked Questions
          </h1>
          <p className="text-[var(--neutral-500)]">
            Everything you need to know about Manifesta.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-6 pb-20">
        {FAQ_CATEGORIES.map((category) => (
          <div key={category.title} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-base" role="img" aria-hidden="true">
                {CATEGORY_ICONS[category.title] || ""}
              </span>
              <h2
                className="text-xl font-semibold text-[var(--lavender-800)]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {category.title}
              </h2>
            </div>
            <FaqAccordion items={category.items} />
          </div>
        ))}

        {/* Still need help? */}
        <div
          className="text-center rounded-2xl p-8 sm:p-10 mt-6 relative overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 50% 50%, rgba(155,142,206,0.08) 0%, transparent 60%),
              rgba(255,255,255,0.6)
            `,
            border: "1px solid rgba(155,142,206,0.15)",
          }}
        >
          <p
            className="text-lg font-semibold text-[var(--lavender-800)] mb-1"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Still have questions?
          </p>
          <p className="text-sm text-[var(--neutral-500)] mb-4">
            We are happy to help with anything.
          </p>
          <a
            href="mailto:support@manifesta.ai"
            className="inline-flex items-center gap-2 min-h-[44px] px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
            style={{
              color: "white",
              background: "linear-gradient(135deg, var(--lavender-500), var(--lavender-600))",
              boxShadow: "0 4px 16px -4px rgba(155,142,206,0.4)",
            }}
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}

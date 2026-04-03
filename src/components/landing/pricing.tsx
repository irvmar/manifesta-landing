"use client";

import { SectionReveal } from "@/components/ui/section-reveal";

const PLANS = [
  {
    id: "weekly",
    name: "Weekly",
    price: "$4.99",
    period: "week",
    trial: "7-day free trial",
    badge: null,
    features: [
      "Unlimited AI meditations",
      "All voices & soundscapes",
      "Mood tracking",
      "Offline downloads",
    ],
  },
  {
    id: "annual",
    name: "Annual",
    price: "$39.99",
    period: "year",
    trial: "7-day free trial",
    badge: "Best Value",
    features: [
      "Everything in Weekly",
      "Save over 84%",
      "Priority new features",
      "Support our mission",
    ],
  },
];

export function Pricing() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "var(--cloud-50)" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 50% 40% at 50% 20%, rgba(155,142,206,0.08) 0%, transparent 70%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <SectionReveal className="text-center mb-12">
          <h2
            className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-[var(--lavender-800)] mb-3"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Start your free trial
          </h2>
          <p className="text-[var(--neutral-500)]">
            7 days free. Cancel anytime. No commitment.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {PLANS.map((plan, i) => (
            <SectionReveal key={plan.id} delay={i * 0.12}>
              <div
                className="relative rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: plan.badge
                    ? "linear-gradient(135deg, rgba(155,142,206,0.08), rgba(201,148,157,0.06))"
                    : "rgba(255,255,255,0.7)",
                  border: plan.badge
                    ? "2px solid var(--lavender-400)"
                    : "1px solid var(--neutral-200)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  boxShadow: plan.badge
                    ? "0 8px 32px -8px rgba(155,142,206,0.2)"
                    : "var(--shadow-md)",
                }}
              >
                {/* Badge */}
                {plan.badge && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--gold-500), var(--gold-600))",
                    }}
                  >
                    {plan.badge}
                  </div>
                )}

                <h3
                  className="text-xl font-semibold text-[var(--lavender-800)] mb-1"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {plan.name}
                </h3>

                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-bold text-[var(--neutral-800)]">
                    {plan.price}
                  </span>
                  <span className="text-sm text-[var(--neutral-500)]">
                    /{plan.period}
                  </span>
                </div>

                <p className="text-xs text-[var(--sage-600)] font-medium mb-5">
                  {plan.trial}
                </p>

                <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-sm text-[var(--neutral-600)]"
                    >
                      <svg
                        className="w-4 h-4 shrink-0"
                        viewBox="0 0 20 20"
                        fill="var(--sage-500)"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://apps.apple.com/app/manifesta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3.5 rounded-xl text-center text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: plan.badge
                      ? "var(--lavender-500)"
                      : "var(--neutral-700)",
                  }}
                >
                  Start Free Trial
                </a>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="text-center mt-6">
          <p className="text-xs text-[var(--neutral-400)]">
            Payment through Apple. Subscriptions auto-renew unless cancelled at
            least 24 hours before the end of the current period.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

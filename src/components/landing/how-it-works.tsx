"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionReveal } from "@/components/ui/section-reveal";

const STEPS = [
  {
    number: "01",
    title: "Write your intention",
    desc: "What do you want more of? Confidence, calm, clarity — say it in your own words.",
  },
  {
    number: "02",
    title: "Press play",
    desc: "The AI crafts a meditation just for that intention. A new voice, a new script, every time.",
  },
  {
    number: "03",
    title: "Open your eyes, changed",
    desc: "Log how you feel. Come back tomorrow. Watch the compound effect of daily practice.",
  },
];

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "var(--cloud-50)" }}
    >
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <SectionReveal className="text-center mb-16">
          <h2
            className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-[var(--lavender-800)] mb-3"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            It takes less than a minute to start
          </h2>
          <p className="text-[var(--neutral-500)] max-w-md mx-auto">
            Download the app, write what&apos;s on your mind, and let the AI do the rest.
          </p>
        </SectionReveal>

        <div className="relative">
          {/* Vertical progress line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-[var(--neutral-200)]">
            <motion.div
              className="w-full rounded-full"
              style={{
                height: lineHeight,
                background: "linear-gradient(to bottom, var(--lavender-400), var(--lavender-600))",
              }}
            />
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-14">
            {STEPS.map((step, i) => (
              <SectionReveal key={step.number} delay={i * 0.15}>
                <div className="flex gap-6 md:gap-8">
                  <div
                    className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center relative z-10"
                    style={{
                      background: "var(--cloud-50)",
                      border: "2px solid var(--lavender-400)",
                    }}
                  >
                    <span
                      className="text-sm md:text-base font-semibold"
                      style={{
                        color: "var(--lavender-600)",
                        fontFamily: "var(--font-cormorant)",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <div className="pt-1 md:pt-3">
                    <h3
                      className="text-xl md:text-2xl font-semibold text-[var(--lavender-800)] mb-2"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-[var(--neutral-500)] leading-relaxed max-w-md">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Hero } from "@/components/landing/hero";
import { Philosophy } from "@/components/landing/philosophy";
import { Features } from "@/components/landing/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Testimonials } from "@/components/landing/testimonials";
import { FinalCTA } from "@/components/landing/final-cta";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      {/* Gradient bleed: midnight hero -> warm philosophy */}
      <div
        className="relative z-[2] h-0"
        aria-hidden="true"
      >
        <div
          className="absolute bottom-0 left-0 right-0 h-[120px] -translate-y-[60px]"
          style={{
            background: `linear-gradient(
              to bottom,
              rgba(15, 31, 78, 0.9) 0%,
              rgba(15, 31, 78, 0.4) 30%,
              rgba(240, 238, 248, 0.2) 60%,
              transparent 100%
            )`,
          }}
        />
      </div>
      <Philosophy />
      {/* Soft divider: philosophy -> features */}
      <div
        className="h-px mx-auto max-w-4xl"
        style={{
          background: `linear-gradient(
            to right,
            transparent 0%,
            rgba(155, 142, 206, 0.15) 20%,
            rgba(155, 142, 206, 0.25) 50%,
            rgba(155, 142, 206, 0.15) 80%,
            transparent 100%
          )`,
        }}
        aria-hidden="true"
      />
      <Features />
      {/* Soft divider: features -> how-it-works */}
      <div
        className="h-px mx-auto max-w-4xl"
        style={{
          background: `linear-gradient(
            to right,
            transparent 0%,
            rgba(155, 142, 206, 0.12) 20%,
            rgba(201, 148, 157, 0.18) 50%,
            rgba(155, 142, 206, 0.12) 80%,
            transparent 100%
          )`,
        }}
        aria-hidden="true"
      />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}

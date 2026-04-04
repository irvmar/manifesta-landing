import { Hero } from "@/components/landing/hero";
import { Philosophy } from "@/components/landing/philosophy";
import { Features } from "@/components/landing/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Testimonials } from "@/components/landing/testimonials";
import { FinalCTA } from "@/components/landing/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
    </>
  );
}

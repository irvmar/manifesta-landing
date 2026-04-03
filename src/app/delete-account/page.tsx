import type { Metadata } from "next";
import { DeleteAccountForm } from "./form";
import { Callout } from "@/components/legal/callout";

export const metadata: Metadata = {
  title: "Delete Account",
  description: "Request deletion of your Manifesta account and all associated data.",
};

const STEPS = [
  "Open Manifesta and go to your Profile tab.",
  "Tap Settings (gear icon).",
  'Scroll down and tap "Delete Account."',
  "Confirm the deletion when prompted.",
];

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--cloud-50)" }}>
      {/* Header */}
      <div
        className="pt-28 pb-12 md:pt-32 md:pb-16"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% 0%, rgba(155,142,206,0.10) 0%, transparent 60%),
            var(--cloud-50)
          `,
        }}
      >
        <div className="mx-auto max-w-2xl px-6">
          <h1
            className="text-[clamp(2rem,5vw,3rem)] font-semibold text-[var(--lavender-800)] mb-3"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Delete Your Account
          </h1>
          <p className="text-[var(--neutral-500)]">
            We&apos;re sorry to see you go. Here&apos;s how to delete your account and data.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-6 pb-20">
        {/* In-app instructions */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-1 h-6 rounded-full"
              style={{
                background: "linear-gradient(to bottom, var(--lavender-400), var(--lavender-200))",
              }}
            />
            <h2
              className="text-xl font-semibold text-[var(--lavender-800)]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Delete from the App
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {STEPS.map((step, i) => (
              <div key={i} className="flex gap-3.5 items-start group">
                <span
                  className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-white transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, var(--lavender-400), var(--lavender-500))",
                    boxShadow: "0 2px 8px -2px rgba(155,142,206,0.4)",
                  }}
                >
                  {i + 1}
                </span>
                <p className="text-sm text-[var(--neutral-600)] leading-relaxed pt-1">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Callout type="warning">
          <strong>This action is permanent.</strong> Deleting your account will
          remove all your data including intentions, meditation history, mood
          reflections, and preferences. Downloaded offline meditations will also
          be removed. Active subscriptions must be cancelled separately through
          your Apple ID settings.
        </Callout>

        {/* Web form alternative */}
        <div className="mt-10">
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-1 h-6 rounded-full"
              style={{
                background: "linear-gradient(to bottom, var(--lavender-400), var(--lavender-200))",
              }}
            />
            <h2
              className="text-xl font-semibold text-[var(--lavender-800)]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Or request deletion here
            </h2>
          </div>
          <p className="text-sm text-[var(--neutral-500)] mb-6 ml-[19px]">
            If you can&apos;t access the app, submit a request below. We&apos;ll
            process it within 14 days.
          </p>

          <DeleteAccountForm />
        </div>
      </div>
    </div>
  );
}

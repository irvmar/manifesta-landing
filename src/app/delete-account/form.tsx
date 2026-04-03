"use client";

import { useState } from "react";

export function DeleteAccountForm() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);

    // For now, opens mailto link. Replace with Server Action + Resend later.
    const subject = encodeURIComponent("Account Deletion Request");
    const body = encodeURIComponent(
      `Account email: ${email}\nReason: ${reason || "Not specified"}\n\nPlease delete my Manifesta account and all associated data.`
    );
    window.location.href = `mailto:support@manifesta.ai?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 1000);
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl p-8 text-center"
        style={{
          background: "rgba(136,163,139,0.08)",
          border: "1px solid var(--sage-200)",
        }}
      >
        <div
          className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, rgba(136,163,139,0.2), rgba(136,163,139,0.1))",
          }}
        >
          <svg className="w-6 h-6" viewBox="0 0 20 20" fill="var(--sage-600)">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h3
          className="text-lg font-semibold text-[var(--neutral-700)] mb-2"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Request Submitted
        </h3>
        <p className="text-sm text-[var(--neutral-500)] leading-relaxed">
          We&apos;ll process your deletion request within 14 days. You&apos;ll
          receive a confirmation email at{" "}
          <span className="font-medium text-[var(--neutral-600)]">{email}</span>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label
          htmlFor="delete-email"
          className="block text-sm font-medium text-[var(--neutral-700)] mb-2"
        >
          Account email address
        </label>
        <input
          id="delete-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="The email you used to sign up"
          className="w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-300"
          style={{
            background: "rgba(255,255,255,0.85)",
            border: "1px solid var(--neutral-200)",
            color: "var(--neutral-700)",
            boxShadow: "none",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "var(--lavender-300)";
            e.currentTarget.style.boxShadow = "0 0 0 4px rgba(155,142,206,0.1)";
            e.currentTarget.style.background = "white";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "var(--neutral-200)";
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.background = "rgba(255,255,255,0.85)";
          }}
        />
      </div>

      <div>
        <label
          htmlFor="delete-reason"
          className="block text-sm font-medium text-[var(--neutral-700)] mb-2"
        >
          Reason for leaving{" "}
          <span className="text-[var(--neutral-400)] font-normal">(optional)</span>
        </label>
        <div className="relative">
          <select
            id="delete-reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full px-4 py-3.5 pr-10 rounded-xl text-sm outline-none transition-all duration-300 appearance-none cursor-pointer"
            style={{
              background: "rgba(255,255,255,0.85)",
              border: "1px solid var(--neutral-200)",
              color: reason ? "var(--neutral-700)" : "var(--neutral-400)",
              boxShadow: "none",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "var(--lavender-300)";
              e.currentTarget.style.boxShadow = "0 0 0 4px rgba(155,142,206,0.1)";
              e.currentTarget.style.background = "white";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "var(--neutral-200)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.background = "rgba(255,255,255,0.85)";
            }}
          >
            <option value="">Select a reason...</option>
            <option value="not-using">I&apos;m not using the app anymore</option>
            <option value="too-expensive">Too expensive</option>
            <option value="not-helpful">The meditations aren&apos;t helpful</option>
            <option value="privacy">Privacy concerns</option>
            <option value="other">Other</option>
          </select>
          {/* Custom dropdown chevron */}
          <svg
            className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4"
            viewBox="0 0 20 20"
            fill="var(--neutral-400)"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <button
        type="submit"
        disabled={sending}
        className="mt-1 min-h-[48px] py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 active:scale-[0.98] disabled:opacity-60 disabled:active:scale-100"
        style={{
          background: "var(--neutral-700)",
          boxShadow: "0 2px 8px -2px rgba(0,0,0,0.2)",
        }}
      >
        {sending ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="w-4 h-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" className="opacity-25" />
              <path d="M4 12a8 8 0 018-8" className="opacity-75" />
            </svg>
            Submitting...
          </span>
        ) : (
          "Request Account Deletion"
        )}
      </button>
    </form>
  );
}

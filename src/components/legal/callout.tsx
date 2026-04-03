import type { ReactNode } from "react";

const STYLES = {
  important: {
    bg: "rgba(155,142,206,0.08)",
    border: "var(--lavender-400)",
    icon: "var(--lavender-600)",
  },
  warning: {
    bg: "rgba(212,135,106,0.08)",
    border: "var(--terracotta-500)",
    icon: "var(--terracotta-500)",
  },
  info: {
    bg: "rgba(136,163,139,0.08)",
    border: "var(--sage-500)",
    icon: "var(--sage-600)",
  },
};

export function Callout({
  type = "important",
  children,
}: {
  type?: "important" | "warning" | "info";
  children: ReactNode;
}) {
  const s = STYLES[type];
  return (
    <div
      className="rounded-xl p-5 my-5"
      style={{
        background: s.bg,
        borderLeft: `3px solid ${s.border}`,
      }}
    >
      <div className="text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
        {children}
      </div>
    </div>
  );
}

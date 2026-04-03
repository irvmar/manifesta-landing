import type { ReactNode } from "react";

export function GlassCard({
  children,
  className = "",
  elevated = false,
}: {
  children: ReactNode;
  className?: string;
  elevated?: boolean;
}) {
  return (
    <div
      className={`
        glass-card-premium glass-shine
        rounded-2xl border
        ${
          elevated
            ? "bg-white/80 backdrop-blur-2xl border-white/40 shadow-lg"
            : "bg-white/65 backdrop-blur-xl border-white/30 shadow-md"
        }
        transition-all duration-400 ease-out
        hover:shadow-xl hover:bg-white/75 hover:-translate-y-0.5
        ${className}
      `}
      style={{
        boxShadow: elevated
          ? "0 4px 24px -4px rgba(0,0,0,0.08), 0 1px 3px rgba(155,142,206,0.06)"
          : "0 2px 12px -2px rgba(0,0,0,0.06)",
      }}
    >
      {children}
    </div>
  );
}

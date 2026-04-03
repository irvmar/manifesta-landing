"use client";

type Variant = "midnight" | "light" | "warm" | "dawn";

const backgrounds: Record<Variant, string> = {
  midnight: `
    radial-gradient(ellipse 80% 60% at 20% 10%, rgba(155,142,206,0.35) 0%, transparent 60%),
    radial-gradient(ellipse 70% 50% at 80% 85%, rgba(201,148,157,0.25) 0%, transparent 60%),
    radial-gradient(ellipse 60% 50% at 50% 50%, rgba(196,162,101,0.12) 0%, transparent 60%),
    linear-gradient(165deg, #0F1F4E 0%, #1A2F61 25%, #24386B 50%, #2E4275 75%, #37497D 100%)
  `,
  light: `
    radial-gradient(ellipse 80% 60% at 20% 10%, rgba(155,142,206,0.20) 0%, transparent 60%),
    radial-gradient(ellipse 70% 50% at 80% 85%, rgba(201,148,157,0.15) 0%, transparent 60%),
    radial-gradient(ellipse 60% 50% at 50% 50%, rgba(136,163,139,0.10) 0%, transparent 60%),
    linear-gradient(170deg, #FAFBFC 0%, #F8F7FC 40%, #FCF8F8 70%, #FAFBFC 100%)
  `,
  warm: `
    radial-gradient(ellipse 80% 60% at 20% 10%, rgba(196,162,101,0.18) 0%, transparent 60%),
    radial-gradient(ellipse 70% 50% at 80% 85%, rgba(155,142,206,0.20) 0%, transparent 60%),
    radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,148,157,0.12) 0%, transparent 60%),
    linear-gradient(170deg, #FBF8F0 0%, #F8F7FC 40%, #FCF8F8 70%, #FAFBFC 100%)
  `,
  dawn: `
    radial-gradient(ellipse 80% 60% at 30% 20%, rgba(196,162,101,0.22) 0%, transparent 55%),
    radial-gradient(ellipse 70% 50% at 70% 80%, rgba(155,142,206,0.28) 0%, transparent 55%),
    radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,148,157,0.16) 0%, transparent 55%),
    linear-gradient(170deg, #F5EDDA 0%, #F0EEF8 35%, #F9F0F1 65%, #FAFBFC 100%)
  `,
};

export function GradientMesh({
  variant = "light",
  className = "",
  style,
}: {
  variant?: Variant;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        background: backgrounds[variant],
        ...style,
      }}
      aria-hidden="true"
    />
  );
}

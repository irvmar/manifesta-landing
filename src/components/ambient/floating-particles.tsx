"use client";

const PARTICLE_COLORS = [
  "rgba(155,142,206,0.35)",
  "rgba(201,148,157,0.30)",
  "rgba(196,162,101,0.25)",
  "rgba(136,163,139,0.28)",
  "rgba(155,142,206,0.20)",
  "rgba(201,148,157,0.22)",
  "rgba(196,162,101,0.18)",
  "rgba(155,142,206,0.30)",
  "rgba(136,163,139,0.20)",
  "rgba(201,148,157,0.25)",
  "rgba(196,162,101,0.22)",
  "rgba(155,142,206,0.25)",
];

// Deterministic positions so SSR matches client
const PARTICLES = PARTICLE_COLORS.map((color, i) => ({
  color,
  size: 3 + (i % 4) * 2,
  left: `${(i * 8.3 + 5) % 95}%`,
  top: `${(i * 7.7 + 10) % 90}%`,
  duration: 6 + (i % 5) * 2.5,
  delay: i * 1.2,
}));

export function FloatingParticles({
  count = 12,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {PARTICLES.slice(0, count).map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full will-change-transform"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
            background: p.color,
            animation: `cosmicFloat ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

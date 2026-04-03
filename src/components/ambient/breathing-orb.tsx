"use client";

export function BreathingOrb({
  size = 200,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const secondarySize = size * 0.6;
  const tertiarySize = size * 0.35;

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Pulse rings */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: size,
            height: size,
            border: "1px solid rgba(155,142,206,0.2)",
            animation: `pulseRing 4.5s ease-out ${i * 1.5}s infinite`,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Secondary orb — offset for depth, rose-tinted */}
      <div
        className="absolute rounded-full"
        style={{
          width: secondarySize,
          height: secondarySize,
          top: `${size * 0.05}px`,
          left: `${size * 0.45}px`,
          background:
            "radial-gradient(circle at 40% 40%, rgba(201,148,157,0.5), rgba(201,148,157,0.25) 50%, transparent 100%)",
          boxShadow: "0 0 30px rgba(201,148,157,0.2)",
          animation: "breathe 4.5s ease-in-out 0.8s infinite",
          filter: "blur(1px)",
        }}
        aria-hidden="true"
      />

      {/* Tertiary orb — smaller, gold-tinted, opposite offset */}
      <div
        className="absolute rounded-full"
        style={{
          width: tertiarySize,
          height: tertiarySize,
          bottom: `${size * 0.08}px`,
          left: `${size * 0.05}px`,
          background:
            "radial-gradient(circle at 45% 45%, rgba(196,162,101,0.4), rgba(196,162,101,0.15) 50%, transparent 100%)",
          boxShadow: "0 0 20px rgba(196,162,101,0.15)",
          animation: "breathe 5s ease-in-out 1.5s infinite",
          filter: "blur(1px)",
        }}
        aria-hidden="true"
      />

      {/* Main orb */}
      <div
        className="relative rounded-full"
        style={{
          width: size,
          height: size,
          background:
            "radial-gradient(circle at 35% 35%, rgba(181,171,219,0.9), rgba(155,142,206,0.7) 40%, rgba(120,105,180,0.5) 70%, transparent 100%)",
          boxShadow: `
            0 0 40px rgba(155,142,206,0.4),
            0 0 80px rgba(155,142,206,0.2),
            0 0 120px rgba(155,142,206,0.1),
            inset 0 0 30px rgba(255,255,255,0.15)
          `,
          animation: "breathe 4s ease-in-out infinite",
        }}
        aria-hidden="true"
      />
    </div>
  );
}

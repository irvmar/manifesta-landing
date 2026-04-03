"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

export function SectionReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if element is already in viewport — if so, show immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 40 && rect.bottom > 0) {
      setVisible(true);
      return;
    }

    // Element is below the fold — hide it and observe for scroll
    setShouldAnimate(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-60px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shouldAnimate && !visible ? 0 : 1,
        transform: shouldAnimate && !visible ? "translateY(24px)" : "none",
        transition: visible
          ? `opacity 0.7s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s, transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s`
          : "none",
      }}
    >
      {children}
    </div>
  );
}

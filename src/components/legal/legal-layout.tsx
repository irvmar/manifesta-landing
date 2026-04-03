"use client";

import { useState, useEffect, type ReactNode } from "react";

interface TocItem {
  id: string;
  label: string;
}

export function LegalLayout({
  title,
  lastUpdated,
  toc,
  children,
}: {
  title: string;
  lastUpdated: string;
  toc: TocItem[];
  children: ReactNode;
}) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    for (const item of toc) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [toc]);

  return (
    <div className="min-h-screen" style={{ background: "var(--cloud-50)" }}>
      {/* Header */}
      <div
        className="pt-28 pb-12 md:pt-32 md:pb-16"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(155,142,206,0.12) 0%, transparent 60%),
            var(--cloud-50)
          `,
        }}
      >
        <div className="mx-auto max-w-4xl px-6">
          <h1
            className="text-[clamp(2rem,5vw,3rem)] font-semibold text-[var(--lavender-800)]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {title}
          </h1>
          <p className="text-sm text-[var(--neutral-400)] mt-2">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 pb-20">
        <div className="flex gap-12">
          {/* Sticky TOC — desktop only */}
          <aside className="hidden lg:block w-56 shrink-0">
            <nav className="sticky top-24" aria-label="Table of contents">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--neutral-400)] mb-3">
                Contents
              </p>
              <div
                className="h-px mb-3"
                style={{
                  background:
                    "linear-gradient(to right, var(--lavender-200), transparent)",
                }}
              />
              <ul className="flex flex-col gap-0.5">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`block min-h-[44px] py-2 px-3 text-sm rounded-lg transition-all duration-300 flex items-center ${
                        activeId === item.id
                          ? "text-[var(--lavender-700)] bg-[var(--lavender-50)] font-medium"
                          : "text-[var(--neutral-500)] hover:text-[var(--neutral-700)] hover:bg-[var(--neutral-50)]"
                      }`}
                      style={
                        activeId === item.id
                          ? {
                              borderLeft: "2px solid var(--lavender-400)",
                              paddingLeft: "10px",
                            }
                          : undefined
                      }
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <article className="flex-1 min-w-0 legal-content">{children}</article>
        </div>
      </div>
    </div>
  );
}

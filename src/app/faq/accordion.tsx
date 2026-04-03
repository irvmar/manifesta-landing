"use client";

import { useState, useId, useRef, useEffect } from "react";

interface FaqItem {
  q: string;
  a: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const instanceId = useId();

  return (
    <div className="flex flex-col gap-2">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const buttonId = `${instanceId}-btn-${i}`;
        const panelId = `${instanceId}-panel-${i}`;
        return (
          <div
            key={item.q}
            className="rounded-xl overflow-hidden transition-all duration-300"
            style={{
              background: isOpen
                ? "rgba(255,255,255,0.85)"
                : "rgba(255,255,255,0.5)",
              border: `1px solid ${
                isOpen ? "var(--lavender-200)" : "var(--neutral-200)"
              }`,
              borderLeft: isOpen
                ? "3px solid var(--lavender-400)"
                : "1px solid var(--neutral-200)",
              boxShadow: isOpen
                ? "0 4px 16px -4px rgba(155,142,206,0.12)"
                : "none",
            }}
          >
            <button
              id={buttonId}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full min-h-[44px] px-5 py-4 flex items-center justify-between text-left group"
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span
                className={`text-sm font-medium pr-4 transition-colors duration-300 ${
                  isOpen
                    ? "text-[var(--lavender-700)]"
                    : "text-[var(--neutral-700)] group-hover:text-[var(--lavender-600)]"
                }`}
              >
                {item.q}
              </span>
              <svg
                className="w-4 h-4 shrink-0 transition-transform duration-300"
                style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                viewBox="0 0 20 20"
                fill={isOpen ? "var(--lavender-400)" : "var(--neutral-400)"}
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <AccordionPanel
              id={panelId}
              labelledBy={buttonId}
              isOpen={isOpen}
            >
              <div className="px-5 pb-5">
                <p className="text-sm text-[var(--neutral-500)] leading-relaxed">
                  {item.a}
                </p>
              </div>
            </AccordionPanel>
          </div>
        );
      })}
    </div>
  );
}

function AccordionPanel({
  id,
  labelledBy,
  isOpen,
  children,
}: {
  id: string;
  labelledBy: string;
  isOpen: boolean;
  children: React.ReactNode;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen, children]);

  return (
    <div
      id={id}
      role="region"
      aria-labelledby={labelledBy}
      className="overflow-hidden transition-all duration-350 ease-[cubic-bezier(0.4,0,0.2,1)]"
      style={{
        maxHeight: isOpen ? height : 0,
        opacity: isOpen ? 1 : 0,
      }}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  );
}

import type { ReactNode } from "react";

export function ServiceCard({
  name,
  purpose,
  children,
}: {
  name: string;
  purpose: string;
  children?: ReactNode;
}) {
  return (
    <div
      className="rounded-xl p-5 my-4"
      style={{
        background: "rgba(255,255,255,0.7)",
        border: "1px solid var(--neutral-200)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <div className="flex items-start gap-3 mb-2">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold text-white"
          style={{ background: "var(--lavender-500)" }}
        >
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="text-sm font-semibold text-[var(--neutral-700)]">
            {name}
          </h4>
          <p className="text-xs text-[var(--neutral-500)]">{purpose}</p>
        </div>
      </div>
      {children && (
        <div className="text-sm leading-relaxed text-[var(--neutral-600)] mt-3 [&_p]:text-sm [&_p]:mb-2 [&_p:last-child]:mb-0">
          {children}
        </div>
      )}
    </div>
  );
}

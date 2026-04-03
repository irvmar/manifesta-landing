export function AppStoreBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://apps.apple.com/app/manifesta"
      target="_blank"
      rel="noopener noreferrer"
      className={`app-store-glow inline-block rounded-[6px] ${className}`}
      aria-label="Download on the App Store"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120 40"
        className="h-[44px] w-auto"
      >
        <rect width="120" height="40" rx="6" fill="#000" />
        <g fill="#fff">
          <path d="M24.77 20.3a4.95 4.95 0 0 1 2.36-4.15 5.07 5.07 0 0 0-3.99-2.16c-1.68-.18-3.31 1.01-4.17 1.01-.87 0-2.19-.99-3.61-.96a5.32 5.32 0 0 0-4.48 2.73c-1.93 3.34-.49 8.27 1.36 10.97.93 1.33 2.02 2.81 3.44 2.76 1.39-.06 1.91-.89 3.59-.89 1.67 0 2.14.89 3.59.86 1.49-.02 2.44-1.34 3.33-2.68a11.05 11.05 0 0 0 1.52-3.09 4.78 4.78 0 0 1-2.94-4.4Z" />
          <path d="M22.04 12.21a4.87 4.87 0 0 0 1.12-3.49 4.97 4.97 0 0 0-3.21 1.66 4.64 4.64 0 0 0-1.15 3.36 4.1 4.1 0 0 0 3.24-1.53Z" />
          <text x="42" y="15" fontSize="7" fontWeight="500" letterSpacing=".03em" fontFamily="-apple-system,SF Pro Text,sans-serif">Download on the</text>
          <text x="42" y="28" fontSize="13" fontWeight="600" letterSpacing=".01em" fontFamily="-apple-system,SF Pro Text,sans-serif">App Store</text>
        </g>
      </svg>
    </a>
  );
}

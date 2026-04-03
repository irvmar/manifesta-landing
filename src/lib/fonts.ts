import localFont from "next/font/local";

export const cormorant = localFont({
  src: [
    {
      path: "../app/fonts/cormorant-garamond-latin.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/fonts/cormorant-garamond-latin.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../app/fonts/cormorant-garamond-latin-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

export const systemFont = {
  variable: "--font-system",
  style: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  },
};

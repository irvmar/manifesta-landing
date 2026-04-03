import type { Metadata } from "next";
import { cormorant } from "@/lib/fonts";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Manifesta — AI-Powered Meditation for Your Intentions",
    template: "%s | Manifesta",
  },
  description:
    "Transform your thoughts into reality with personalized AI meditations. Set intentions, choose your voice, and track your growth.",
  metadataBase: new URL("https://manifesta.ai"),
  openGraph: {
    title: "Manifesta — AI-Powered Meditation for Your Intentions",
    description:
      "Transform your thoughts into reality with personalized AI meditations.",
    url: "https://manifesta.ai",
    siteName: "Manifesta",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manifesta — AI-Powered Meditation",
    description:
      "Transform your thoughts into reality with personalized AI meditations.",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/logo.webp",
  },
  other: {
    // Enable Smart App Banner in Safari once we have the App Store ID
    // "apple-itunes-app": "app-id=YOUR_APP_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} h-full`}>
      <body
        className="min-h-full flex flex-col antialiased"
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        }}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

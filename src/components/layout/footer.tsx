import Link from "next/link";
import Image from "next/image";
import { AppStoreBadge } from "@/components/ui/app-store-badge";

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

const SUPPORT_LINKS = [
  { href: "/support", label: "Contact" },
  { href: "/delete-account", label: "Delete Account" },
  { href: "/faq", label: "FAQ" },
];

const INFO_LINKS = [
  { href: "/about", label: "About" },
];

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 20% 100%, rgba(155,142,206,0.12) 0%, transparent 60%),
          radial-gradient(ellipse 60% 40% at 80% 90%, rgba(201,148,157,0.08) 0%, transparent 50%),
          linear-gradient(180deg, #0e1d4a 0%, var(--midnight-900) 100%)
        `,
      }}
    >
      {/* Top decorative line */}
      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(155,142,206,0.3), rgba(201,148,157,0.2), transparent)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 pt-16 pb-8">
        {/* Top section */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 mb-12">
          {/* Brand */}
          <div className="md:max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.webp"
                alt="Manifesta"
                width={36}
                height={36}
                className="rounded-xl"
                style={{
                  filter: "drop-shadow(0 0 10px rgba(155,142,206,0.45))",
                }}
              />
              <span
                className="text-xl font-semibold text-white tracking-wide"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Manifesta
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/45 mb-6">
              Transform your thoughts into reality with personalized AI
              meditations crafted uniquely for your intentions.
            </p>
            <AppStoreBadge />
          </div>

          {/* Link columns */}
          <div className="flex gap-16 md:gap-20 flex-wrap">
            <FooterColumn title="Legal" links={LEGAL_LINKS} />
            <FooterColumn title="Support" links={SUPPORT_LINKS} />
            <FooterColumn title="Company" links={INFO_LINKS} />
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-6"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(155,142,206,0.12), transparent)",
          }}
        />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Manifesta. All rights reserved.
          </p>
          <p className="text-xs text-white/20 italic">
            Made with care for your inner peace
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/35 mb-4">
        {title}
      </h4>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="footer-link text-sm text-white/55 hover:text-white/90 transition-colors duration-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

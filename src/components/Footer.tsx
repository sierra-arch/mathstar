import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    heading: "Explore",
    links: [
      { label: "Our Story", href: "/story" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Impact & Results", href: "/impact" },
      { label: "MathSTAR", href: "https://shepherdxr.org" },
    ],
  },
  {
    heading: "Get MathSTAR",
    links: [
      { label: "For Parents", href: "/parents" },
      { label: "For Educators", href: "/educators" },
      { label: "Donate", href: "/donate" },
      { label: "Volunteer", href: "/volunteer" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Mission", href: "/mission" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F0620] border-t border-white/5 px-6 lg:px-16 pt-16 pb-10">
      <div className="max-w-6xl mx-auto">

        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">

          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <Image
                src="/logo-white.png"
                alt="ShepherdXR"
                width={32}
                height={32}
                className="object-contain opacity-70"
              />
              <span className="font-extrabold text-base text-white/70 tracking-tight">MathSTAR</span>
            </Link>
            <p className="text-white/30 text-sm leading-relaxed">
              Gifting the wonder of math to every child.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <p className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-4">
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-white/40 text-sm hover:text-white/70 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-sm">
            &copy; {new Date().getFullYear()} ShepherdXR. All rights reserved.
          </p>
          <a
            href="https://shepherdxr.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/25 text-sm hover:text-white/50 transition-colors"
          >
            shepherdxr.org
          </a>
        </div>

      </div>
    </footer>
  );
}

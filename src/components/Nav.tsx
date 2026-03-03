"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/story", label: "Our Story" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/reviews", label: "Reviews" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Link href="/" className="flex items-center gap-2.5">
        <Image
          src="/logo-purple.png"
          alt="ShepherdXR"
          width={36}
          height={36}
          className="object-contain"
        />
        <span className="font-extrabold text-lg text-ink tracking-tight">MathSTAR</span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition-colors ${
              pathname === link.href
                ? "text-[#7030A0] font-semibold"
                : "text-ink/60 hover:text-ink"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/get"
          className="text-sm font-semibold bg-[#7030A0] text-white px-5 py-2.5 rounded-full hover:bg-[#4A1E6B] transition-colors"
        >
          Get MathSTAR
        </Link>
      </div>

      {/* Mobile CTA */}
      <Link
        href="/get"
        className="md:hidden text-sm font-semibold bg-[#7030A0] text-white px-4 py-2 rounded-full hover:bg-[#4A1E6B] transition-colors"
      >
        Get Started
      </Link>
    </motion.nav>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-2.5">
        <Image
          src="/logo-purple.png"
          alt="ShepherdXR"
          width={36}
          height={36}
          className="object-contain"
        />
        <span className="font-extrabold text-lg text-ink tracking-tight">MathSTAR</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <a href="#story" className="text-sm font-medium text-ink/60 hover:text-ink transition-colors">
          Our Story
        </a>
        <a href="#how" className="text-sm font-medium text-ink/60 hover:text-ink transition-colors">
          How It Works
        </a>
        <a href="#reviews" className="text-sm font-medium text-ink/60 hover:text-ink transition-colors">
          Reviews
        </a>
        <a
          href="#get"
          className="text-sm font-semibold bg-[#7030A0] text-white px-5 py-2.5 rounded-full hover:bg-[#4A1E6B] transition-colors"
        >
          Get MathSTAR
        </a>
      </div>
    </motion.nav>
  );
}

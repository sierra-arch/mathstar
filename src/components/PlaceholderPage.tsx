"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface PlaceholderPageProps {
  title: string;
  description: string;
  emoji?: string;
}

export default function PlaceholderPage({ title, description, emoji = "🚧" }: PlaceholderPageProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-24 px-6 bg-[#F7F2FF] overflow-hidden">
      <div className="absolute top-[-5%] right-[-10%] w-[500px] h-[500px] bg-[#7030A0]/12 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-10%] w-[400px] h-[400px] bg-[#7030A0]/8 rounded-full blur-[80px] pointer-events-none" />

      <motion.div
        className="text-center max-w-lg mx-auto relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-6xl mb-8">{emoji}</div>
        <p className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-4">Coming Soon</p>
        <h1 className="text-4xl font-extrabold text-ink mb-6">{title}</h1>
        <p className="text-ink/55 text-lg leading-relaxed mb-10">{description}</p>
        <Link
          href="/contact"
          className="inline-block bg-[#C49FDC] text-[#4A1E6B] font-semibold px-8 py-4 rounded-full hover:bg-[#B88FD0] transition-colors shadow-lg shadow-[#7030A0]/20"
        >
          Get in touch instead →
        </Link>
        <div className="mt-6">
          <Link href="/" className="text-ink/40 text-sm hover:text-ink transition-colors">
            ← Back to home
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

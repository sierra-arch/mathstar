"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import ParticleField from "@/components/ParticleField";

const stats = [
  { num: "8 hrs", label: "Arithmetic to algebra-confident" },
  { num: "10/10", label: "Educators rate it" },
];

export default function HowItWorksHero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const fadeOut = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const textY    = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const videoY   = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
      style={{ background: "#1a0a3d" }}
    >
      {/* ── Atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 90% at 20% 50%, rgba(112,48,160,0.55) 0%, transparent 65%)" }}
        />
        <div
          className="absolute top-[-15%] left-[-5%] w-[700px] h-[700px] rounded-full blur-[130px]"
          style={{ background: "rgba(196,159,220,0.20)" }}
        />
        <div
          className="absolute bottom-[-10%] left-[10%] w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{ background: "rgba(8,145,178,0.18)" }}
        />
        <ParticleField count={50} />
      </div>

      {/* ── Right: video panel ── */}
      <motion.div
        className="absolute right-0 top-0 w-[52%] h-full hidden lg:block"
        style={{ y: videoY }}
      >
        {/* Gradient bleed — left edge fades into dark bg */}
        <div
          className="absolute inset-y-0 left-0 w-48 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #1a0a3d 0%, transparent 100%)" }}
        />
        {/* Gradient bleed — bottom */}
        <div
          className="absolute inset-x-0 bottom-0 h-48 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to top, #1a0a3d 0%, transparent 100%)" }}
        />
        {/* Gradient bleed — top */}
        <div
          className="absolute inset-x-0 top-0 h-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, #1a0a3d 0%, transparent 100%)" }}
        />
        <video
          src="/Gameplay-edited.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ opacity: 0.85 }}
        />
      </motion.div>

      {/* ── Left: text ── */}
      <motion.div
        className="relative z-20 h-full flex flex-col justify-center px-8 lg:px-16 max-w-[54%]"
        style={{ y: textY, opacity: fadeOut }}
      >
        <motion.p
          className="text-[#C49FDC] font-semibold text-sm tracking-widest uppercase mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          How It Works
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[4rem] font-extrabold text-white leading-[1.05] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          Three steps.<br />
          One headset.<br />
          <span className="italic animate-gradient">One breakthrough.</span>
        </motion.h1>

        <motion.p
          className="text-white/60 text-lg leading-relaxed mb-10 max-w-md"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          An underwater world where kids go from stuck-in-arithmetic to
          algebra-confident in 8 hours.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-14"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <Link
            href="/parents"
            className="px-8 py-3.5 rounded-full font-bold text-white text-sm transition-all duration-200 hover:-translate-y-0.5 w-fit"
            style={{
              background: "linear-gradient(135deg, #9040C8, #5A2880)",
              boxShadow: "0 8px 40px rgba(144,64,200,0.5)",
            }}
          >
            For Parents →
          </Link>
          <Link
            href="/educators"
            className="px-8 py-3.5 rounded-full font-bold text-white/70 text-sm border border-white/20 hover:border-white/45 hover:bg-white/5 transition-all duration-200 w-fit"
          >
            For Educators →
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex gap-10 border-t border-white/10 pt-8"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          {stats.map((s, i) => (
            <div key={i}>
              <div
                className="text-4xl font-extrabold mb-1"
                style={{ color: i % 2 === 0 ? "#C49FDC" : "#38BDF8" }}
              >
                {s.num}
              </div>
              <p className="text-white/40 text-xs leading-snug">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-8 lg:left-16 z-20"
        style={{ opacity: fadeOut }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="w-px h-10 bg-white/25"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

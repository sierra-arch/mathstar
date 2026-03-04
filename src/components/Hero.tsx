"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Depth layers — bg slowest, text fastest
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const midY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-[#0D0B12]">

      {/* ── LAYER 1: Full-bleed video (moves slowest) ── */}
      <motion.div
        className="absolute inset-0 scale-[1.18] origin-center"
        style={{ y: bgY }}
      >
        <video
          src="/Gameplay-edited.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark cinematic overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(13,11,18,0.92) 0%, rgba(13,11,18,0.55) 45%, rgba(13,11,18,0.25) 100%)",
          }}
        />
        {/* Purple atmospheric tint top-right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 72% 20%, rgba(112,48,160,0.45) 0%, transparent 65%)",
          }}
        />
        {/* Teal atmospheric tint bottom-left */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 45% at 15% 85%, rgba(8,145,178,0.3) 0%, transparent 65%)",
          }}
        />
      </motion.div>

      {/* ── LAYER 2: Mid-depth ambient glow (moves medium) ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: midY }}
      >
        <motion.div
          className="absolute top-[8%] right-[5%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(196,159,220,0.2) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* ── LAYER 3: Text (moves fastest, fades as you scroll) ── */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{ y: textY, opacity: fadeOut }}
      >
        {/* Overline — upper left, like the UFO reference */}
        <motion.p
          className="absolute top-28 left-8 lg:left-16 text-white/50 font-semibold text-xs tracking-widest uppercase"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          VR Math Learning for Kids
        </motion.p>

        {/* Supporting text — upper right */}
        <motion.p
          className="absolute top-28 right-8 lg:right-16 text-white/35 text-xs leading-relaxed text-right max-w-[160px]"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          An 8-hour VR universe that turns math from a fear into a superpower.
        </motion.p>

        {/* Main headline + CTA — lower left */}
        <div className="absolute bottom-0 left-0 right-0 px-8 lg:px-16 pb-16">
          <motion.h1
            className="text-[3.6rem] sm:text-[5rem] lg:text-[6.5rem] xl:text-[7.5rem] font-extrabold text-white leading-[0.93] mb-10 max-w-4xl"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Gift them<br />
            the{" "}
            <em
              className="not-italic italic"
              style={{
                background: "linear-gradient(135deg, #C49FDC 10%, #ffffff 50%, #C49FDC 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              wonder
            </em>
            <br />
            of math.
          </motion.h1>

          <motion.div
            className="flex flex-col sm:flex-row items-start gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
          >
            <Link
              href="/parents"
              className="px-10 py-4 rounded-full font-bold text-white text-base transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #7030A0, #4A1E6B)",
                boxShadow: "0 8px 40px rgba(112,48,160,0.55)",
              }}
            >
              For Parents →
            </Link>
            <Link
              href="/educators"
              className="px-10 py-4 rounded-full font-bold text-white/70 text-base border-2 border-white/20 hover:border-white/50 hover:text-white transition-all duration-200"
            >
              For Educators →
            </Link>
          </motion.div>
        </div>

        {/* Scroll nudge — bottom center */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <motion.div
            className="w-px h-12 bg-white/25"
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

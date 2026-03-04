"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-[#F7F2FF]">

      {/* ── LAYER 1: Background gradient (slowest) ── */}
      <motion.div className="absolute inset-0 scale-[1.1]" style={{ y: bgY }}>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 85% 70% at 70% 45%, rgba(196,159,220,0.5) 0%, rgba(240,230,247,0.7) 50%, transparent 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(8,145,178,0.1) 0%, transparent 70%)" }}
        />
      </motion.div>

      {/* ── LAYER 2: Orb (medium speed) ── */}
      <motion.div
        className="absolute inset-0 flex items-center justify-end pr-16 lg:pr-24 pointer-events-none"
        style={{ y: orbY }}
      >
        <motion.div
          className="relative w-[380px] h-[380px] lg:w-[480px] lg:h-[480px]"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Outer orbit ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-[#7030A0]/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#7030A0]/40" />
          </motion.div>

          {/* Inner counter-ring */}
          <motion.div
            className="absolute inset-[12%] rounded-full border border-[#C49FDC]/30"
            animate={{ rotate: -360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute bottom-0 right-[10%] translate-y-1/2 w-3 h-3 rounded-full bg-[#C49FDC]/60" />
          </motion.div>

          {/* Main sphere */}
          <motion.div
            className="absolute inset-[22%] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse 68% 62% at 38% 35%, rgba(255,255,255,0.95) 0%, rgba(196,159,220,0.75) 45%, rgba(112,48,160,0.85) 100%)",
            }}
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Highlight */}
            <div
              className="absolute inset-[14%] rounded-full"
              style={{
                background:
                  "radial-gradient(ellipse 65% 55% at 32% 28%, rgba(255,255,255,0.6) 0%, transparent 70%)",
              }}
            />
          </motion.div>

          {/* Teal satellite */}
          <motion.div
            className="absolute -top-8 -right-4 w-20 h-20 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(8,145,178,0.65) 0%, transparent 70%)" }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </motion.div>
      </motion.div>

      {/* ── LAYER 3: Text (fastest, fades) ── */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{ y: textY, opacity: fadeOut }}
      >
        {/* Overline */}
        <motion.p
          className="absolute top-28 left-8 lg:left-16 text-[#7030A0]/70 font-semibold text-xs tracking-widest uppercase"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          About ShepherdXR
        </motion.p>

        {/* Supporting right */}
        <motion.p
          className="absolute top-28 right-8 lg:right-16 text-[#0D0B12]/30 text-xs leading-relaxed text-right max-w-[150px]"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          ShepherdXR turns math from a fear into a superpower.
        </motion.p>

        {/* Main headline — lower left */}
        <div className="absolute bottom-0 left-0 right-0 px-8 lg:px-16 pb-16">
          <motion.h1
            className="text-[3.4rem] sm:text-[4.5rem] lg:text-[6rem] font-extrabold text-[#0D0B12] leading-[0.95] mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            We build tech that{" "}
            <em className="not-italic italic text-[#7030A0]">changes</em>{" "}
            how kids see themselves.
          </motion.h1>
        </div>

        {/* Scroll line */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <motion.div
            className="w-px h-10 bg-[#7030A0]/30"
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#F7F2FF]">

      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 75% 45%, rgba(196,159,220,0.38) 0%, rgba(240,230,247,0.6) 50%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center relative z-10 pt-24 px-6 lg:px-16 min-h-[80vh]">

        {/* Left — text */}
        <div className="py-20">
          <motion.p
            className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About ShepherdXR
          </motion.p>

          <motion.h1
            className="text-5xl lg:text-[5.5rem] font-extrabold text-[#0D0B12] leading-[1.0] mb-10 max-w-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            We build tech that{" "}
            <em className="not-italic italic text-[#7030A0]">changes</em>{" "}
            how kids see themselves.
          </motion.h1>

          <motion.p
            className="text-xl text-[#0D0B12]/50 max-w-xs leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            ShepherdXR turns math from a fear into a superpower — in 8 hours or less.
          </motion.p>
        </div>

        {/* Right — abstract visual */}
        <div className="relative flex items-center justify-center h-[500px]">

          {/* Outer halo */}
          <div
            className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(196,159,220,0.3) 0%, transparent 68%)" }}
          />

          {/* Layered ring shapes */}
          <motion.div
            className="relative w-[360px] h-[360px]"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <div
              className="absolute inset-0 rounded-full border-2 border-[#7030A0]/20"
              style={{ transform: "scale(1)" }}
            />
            <div
              className="absolute inset-[12%] rounded-full border border-[#7030A0]/30"
            />
            <div
              className="absolute inset-[24%] rounded-full"
              style={{
                background:
                  "radial-gradient(ellipse 68% 62% at 38% 35%, rgba(255,255,255,0.9) 0%, rgba(196,159,220,0.7) 42%, rgba(112,48,160,0.8) 100%)",
              }}
            />
            {/* Highlight */}
            <div
              className="absolute inset-[35%] rounded-full"
              style={{
                background:
                  "radial-gradient(ellipse 65% 55% at 35% 28%, rgba(255,255,255,0.55) 0%, transparent 70%)",
              }}
            />
          </motion.div>

          {/* Counter-rotating outer ring */}
          <motion.div
            className="absolute w-[420px] h-[420px] rounded-full border border-[#C49FDC]/25"
            animate={{ rotate: [0, -360] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {/* Ring dot */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#7030A0]/50" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-[#C49FDC]/70" />
          </motion.div>

          {/* Floating satellite orbs */}
          <motion.div
            className="absolute top-10 right-10 w-20 h-20 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(8,145,178,0.6) 0%, transparent 70%)" }}
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div
            className="absolute bottom-14 left-8 w-14 h-14 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(196,159,220,0.8) 0%, transparent 70%)" }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
        </div>
      </div>
    </section>
  );
}

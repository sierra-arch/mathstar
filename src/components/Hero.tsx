"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F7F2FF]">

      {/* Full background gradient mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 72% 55%, rgba(196,159,220,0.45) 0%, rgba(240,230,247,0.7) 48%, transparent 100%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(8,145,178,0.12) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center relative z-10 pt-24 px-6 lg:px-16 min-h-screen">

        {/* Left — Ultra-minimal text */}
        <div className="py-24">
          <motion.p
            className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            VR Math Learning for Kids
          </motion.p>

          <motion.h1
            className="text-6xl lg:text-[5.5rem] font-extrabold text-[#0D0B12] leading-[1.0] mb-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Gift them<br />
            the{" "}
            <em className="not-italic italic text-[#7030A0]">wonder</em>
            <br />
            of math.
          </motion.h1>

          <motion.p
            className="text-xl text-[#0D0B12]/50 max-w-xs mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            An 8-hour VR universe that turns math from a fear into a superpower.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <Link
              href="/parents"
              className="px-10 py-4 rounded-full font-bold text-white text-base transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #7030A0, #4A1E6B)",
                boxShadow: "0 8px 40px rgba(112,48,160,0.35)",
              }}
            >
              For Parents →
            </Link>
            <Link
              href="/educators"
              className="px-10 py-4 rounded-full font-bold text-[#7030A0] text-base border-2 border-[#7030A0]/25 hover:border-[#7030A0]/60 hover:bg-white/50 transition-all duration-200"
            >
              For Educators →
            </Link>
          </motion.div>
        </div>

        {/* Right — Animated 3D orb */}
        <div className="relative flex items-center justify-center h-[600px] lg:h-screen">

          {/* Outer ambient halo */}
          <div
            className="absolute w-[560px] h-[560px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(196,159,220,0.35) 0%, transparent 70%)",
            }}
          />

          {/* Main orb — floats continuously */}
          <motion.div
            className="relative w-[380px] h-[380px] lg:w-[440px] lg:h-[440px] rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -28, 0] }}
            transition={{
              opacity: { duration: 1, delay: 0.3 },
              scale: { duration: 1, delay: 0.3 },
              y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 },
            }}
          >
            {/* Outer layer */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(ellipse 68% 62% at 38% 35%, rgba(255,255,255,0.9) 0%, rgba(196,159,220,0.7) 42%, rgba(112,48,160,0.85) 100%)",
              }}
            />
            {/* Inner highlight — simulates light source */}
            <div
              className="absolute inset-[14%] rounded-full"
              style={{
                background:
                  "radial-gradient(ellipse 65% 55% at 35% 28%, rgba(255,255,255,0.6) 0%, transparent 70%)",
              }}
            />
            {/* Subtle inner glow */}
            <div
              className="absolute inset-[30%] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 80%)",
              }}
            />

            {/* Floating teal satellite */}
            <motion.div
              className="absolute -top-10 -right-6 w-28 h-28 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(8,145,178,0.75) 0%, rgba(8,145,178,0.2) 70%)",
              }}
              animate={{ y: [0, -14, 0], x: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            />

            {/* Floating lavender satellite */}
            <motion.div
              className="absolute -bottom-6 -left-10 w-20 h-20 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(196,159,220,0.9) 0%, rgba(112,48,160,0.35) 70%)",
              }}
              animate={{ y: [0, 12, 0], x: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            />

            {/* Small accent dot */}
            <motion.div
              className="absolute top-[20%] -right-14 w-10 h-10 rounded-full"
              style={{ background: "rgba(112,48,160,0.4)" }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
          </motion.div>

          {/* Floating quote chip — bottom left */}
          <motion.div
            className="absolute bottom-24 left-4 lg:left-0 bg-white rounded-2xl shadow-xl px-5 py-4 max-w-[210px] border border-[#7030A0]/8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <p className="text-xs font-semibold text-[#7030A0] mb-1">Student, Ellis Pilot</p>
            <p className="text-sm text-[#0D0B12] font-medium leading-snug">
              &ldquo;Math is gonna be so fun from now on.&rdquo;
            </p>
          </motion.div>

          {/* Floating stat chip — top */}
          <motion.div
            className="absolute top-24 right-4 lg:right-0 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg px-5 py-3 border border-[#7030A0]/10"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
          >
            <div className="text-2xl font-extrabold text-[#7030A0]">10/10</div>
            <div className="text-xs text-[#0D0B12]/45 mt-0.5">Educator rating</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

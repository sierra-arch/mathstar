"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ReviewsHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const midY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-[#FFF5F5]">

      {/* ── LAYER 1: Gradient background (slowest) ── */}
      <motion.div className="absolute inset-0 scale-[1.1]" style={{ y: bgY }}>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 75% at 55% 45%, rgba(252,165,165,0.5) 0%, rgba(254,242,242,0.7) 45%, transparent 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[550px] h-[550px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(8,145,178,0.18) 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(220,38,38,0.15) 0%, transparent 70%)" }}
        />
      </motion.div>

      {/* ── LAYER 2: Floating quote fragments (medium speed) ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ y: midY }}
      >
        {/* Large faded quote */}
        <motion.div
          className="absolute top-[15%] right-[8%] text-[9rem] lg:text-[12rem] font-extrabold leading-none select-none"
          style={{ color: "rgba(220,38,38,0.07)" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          &ldquo;
        </motion.div>
        {/* Floating mini quote chip */}
        <motion.div
          className="absolute top-[22%] right-[12%] lg:right-[18%] bg-white/70 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg border border-[#DC2626]/10 max-w-[200px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <p className="text-[#0D0B12] text-sm font-semibold leading-snug">
            &ldquo;Math is my favourite subject now.&rdquo;
          </p>
          <p className="text-[#0D0B12]/40 text-xs mt-1">Parent, Roxbury Library</p>
        </motion.div>
        {/* Second chip */}
        <motion.div
          className="absolute top-[42%] right-[5%] lg:right-[8%] bg-white/70 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg border border-[#0891B2]/15 max-w-[210px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
        >
          <p className="text-[#0D0B12] text-sm font-semibold leading-snug">
            &ldquo;I would invest $200 into this.&rdquo;
          </p>
          <p className="text-[#0891B2]/70 text-xs mt-1">Student, age ~10</p>
        </motion.div>
      </motion.div>

      {/* ── LAYER 3: Text (fastest + fades) ── */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{ y: textY, opacity: fadeOut }}
      >
        {/* Overline */}
        <motion.p
          className="absolute top-48 left-8 lg:left-16 text-[#DC2626]/70 font-semibold text-xs tracking-widest uppercase"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Real Stories
        </motion.p>

        {/* Supporting */}
        <motion.p
          className="absolute top-48 right-8 lg:right-16 text-[#0D0B12]/35 text-xs leading-relaxed text-right max-w-[150px]"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          From the Boston Public Library and Ellis Elementary pilots.
        </motion.p>

        {/* Main headline — lower left */}
        <div className="absolute bottom-0 left-0 right-0 px-8 lg:px-16 pb-16">
          <motion.h1
            className="text-[3.4rem] sm:text-[4.5rem] lg:text-[6rem] font-extrabold text-[#0D0B12] leading-[0.95] mb-4"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="whitespace-nowrap">Parents. Teachers. Kids.</span>
            <br />
            <em className="not-italic italic text-[#DC2626]">All saying the same thing.</em>
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
            className="w-px h-10 bg-[#DC2626]/30"
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

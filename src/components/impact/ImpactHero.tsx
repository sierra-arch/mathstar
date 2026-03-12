"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ImpactHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const numY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-[#2e1275]">

      {/* ── LAYER 1: Background orbs (slowest) ── */}
      <motion.div className="absolute inset-0 scale-[1.1]" style={{ y: bgY }}>
        <div
          className="absolute top-[-20%] right-[-10%] w-[900px] h-[900px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(140,60,200,0.80) 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-[-15%] left-[-5%] w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(8,145,178,0.55) 0%, transparent 65%)" }}
        />
        <div
          className="absolute top-[30%] left-[25%] w-[600px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(112,48,160,0.30) 0%, transparent 70%)" }}
        />
      </motion.div>

      {/* ── LAYER 2: Giant stat number (medium speed) ── */}
      <motion.div
        className="absolute inset-0 flex items-center justify-end pr-16 lg:pr-32 pointer-events-none"
        style={{ y: numY }}
      >
        <motion.div
          className="select-none"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="text-[18rem] lg:text-[22rem] font-extrabold leading-none"
            style={{
              background: "linear-gradient(160deg, rgba(220,180,255,0.60) 0%, rgba(160,80,220,0.35) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            10
          </div>
        </motion.div>
      </motion.div>

      {/* ── LAYER 3: Text (fastest, fades) ── */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{ y: textY, opacity: fadeOut }}
      >
        {/* Overline */}
        <motion.p
          className="absolute top-28 left-8 lg:left-16 text-white/75 font-semibold text-xs tracking-widest uppercase"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Impact & Results
        </motion.p>

        {/* Supporting right */}
        <motion.p
          className="absolute top-28 right-8 lg:right-16 text-white/55 text-xs leading-relaxed text-right max-w-[150px]"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Two pilots. One public library. One Boston public school.
        </motion.p>

        {/* Main headline — lower left */}
        <div className="absolute bottom-0 left-0 right-0 px-8 lg:px-16 pb-10">
          <motion.h1
            className="text-[3rem] sm:text-[4.2rem] lg:text-[5.5rem] font-extrabold text-white leading-[0.93] mb-6"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            The data is in.
            <br />
            <em className="not-italic italic text-[#C49FDC]">Kids are changing.</em>
          </motion.h1>

          {/* Inline stats */}
          <motion.div
            className="flex items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div>
              <div className="text-4xl font-extrabold text-[#C49FDC]">10/10</div>
              <div className="text-white/55 text-xs mt-1 uppercase tracking-widest">Educator rating</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="text-4xl font-extrabold text-[#C49FDC]">+18%</div>
              <div className="text-white/55 text-xs mt-1 uppercase tracking-widest">Test score gain</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="text-4xl font-extrabold text-[#C49FDC]">86%</div>
              <div className="text-white/55 text-xs mt-1 uppercase tracking-widest">Would recommend</div>
            </div>
          </motion.div>
        </div>

        {/* Scroll line */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <motion.div
            className="w-px h-10 bg-white/25"
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

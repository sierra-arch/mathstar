"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HowItWorksHero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const fadeOut = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const textY   = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
      style={{ background: "#4A1A8C" }}
    >
      {/* ── Text ── */}
      <motion.div
        className="relative z-20 h-full flex flex-col items-center justify-center px-8 text-center"
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
          className="text-white/60 text-lg leading-relaxed max-w-md"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          An underwater world where kids go from stuck-in-arithmetic to
          algebra-confident in 8 hours.
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
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

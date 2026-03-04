"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function StoryHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-[#0D0B12]">

      {/* ── LAYER 1: Photo (slowest) ── */}
      <motion.div
        className="absolute inset-0 scale-[1.15] origin-center"
        style={{ y: bgY }}
      >
        <Image
          src="/Stock Images/pexels-thepaintedsquare-3405461.jpg"
          alt="Child experiencing wonder"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark cinematic overlay — heavier at bottom for text */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(13,11,18,0.96) 0%, rgba(13,11,18,0.65) 40%, rgba(13,11,18,0.2) 80%, transparent 100%)",
          }}
        />
        {/* Purple atmospheric glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 70% 25%, rgba(112,48,160,0.4) 0%, transparent 65%)",
          }}
        />
        {/* Teal counter-glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 45% 40% at 20% 80%, rgba(8,145,178,0.25) 0%, transparent 65%)",
          }}
        />
      </motion.div>

      {/* ── LAYER 2: Text (fades on scroll) ── */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{ y: textY, opacity: fadeOut }}
      >
        {/* Overline — upper left */}
        <motion.p
          className="absolute top-28 left-8 lg:left-16 text-white/50 font-semibold text-xs tracking-widest uppercase"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Our Story
        </motion.p>

        {/* Supporting — upper right */}
        <motion.p
          className="absolute top-28 right-8 lg:right-16 text-white/30 text-xs leading-relaxed text-right max-w-[160px]"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          From expelled to Oxford — and why he built MathSTAR.
        </motion.p>

        {/* Main headline — lower left */}
        <div className="absolute bottom-0 left-0 right-0 px-8 lg:px-16 pb-16">
          <motion.h1
            className="text-[3.4rem] sm:text-[5rem] lg:text-[6.5rem] font-extrabold text-white leading-[0.93] mb-10 max-w-3xl"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            One graphic novel
            <br />
            changed{" "}
            <em
              className="not-italic italic inline-block pb-2 pr-4"
              style={{
                background: "linear-gradient(135deg, #C49FDC 10%, #ffffff 50%, #0891B2 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              everything.
            </em>
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
            className="w-px h-10 bg-white/25"
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

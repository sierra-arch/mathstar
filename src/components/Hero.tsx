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

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAF8]"
    >

      {/* ── Subtle background video ── */}
      <video
        src="/Gameplay-edited.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-[0.07] pointer-events-none"
      />

      {/* ── Gradient mesh blobs (same palette as CTA) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(196,159,220,0.55) 0%, rgba(112,48,160,0.18) 42%, transparent 70%)" }}
        />
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(8,145,178,0.22) 0%, transparent 62%)" }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(74,30,107,0.18) 0%, transparent 62%)" }}
        />
        <div
          className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(240,230,247,0.95) 0%, transparent 65%)" }}
        />
      </div>

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 lg:px-16 pt-32 pb-24 max-w-4xl mx-auto"
        style={{ y: textY, opacity: fadeOut }}
      >
        <motion.p
          className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-7"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Don&apos;t close the door on their potential
        </motion.p>

        <motion.h1
          className="text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-[6rem] font-extrabold text-[#0D0B12] leading-[1.0] mb-7"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Gift them the{" "}
          <span
            className="italic"
            style={{
              background: "linear-gradient(135deg, #7030A0 20%, #C49FDC 55%, #0891B2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            wonder
          </span>
          {" "}of math.
        </motion.h1>

        <motion.p
          className="text-[#0D0B12]/55 text-xl leading-relaxed mb-14 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          Kids choose it over recess. Educators rate it 10/10.
          And yes — they&apos;re saying &ldquo;I love this&rdquo; about math now.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
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
            className="px-10 py-4 rounded-full font-bold text-[#7030A0] text-base border-2 border-[#7030A0]/25 hover:border-[#7030A0]/60 hover:bg-white/60 transition-all duration-200"
          >
            For Educators →
          </Link>
        </motion.div>

        {/* Scroll nudge */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <motion.div
            className="w-px h-10 bg-[#7030A0]/30 mx-auto"
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

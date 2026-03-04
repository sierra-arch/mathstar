"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const fadeOut = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#FAFAF8]"
    >

      {/* ── Gradient mesh (left half bleeds into photo) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(196,159,220,0.5) 0%, rgba(112,48,160,0.12) 48%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-32 -left-24 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(8,145,178,0.18) 0%, transparent 65%)" }}
        />
        <div
          className="absolute top-0 left-1/4 w-[350px] h-[350px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(240,230,247,0.9) 0%, transparent 65%)" }}
        />
        {/* Right-side fade so photo blends in */}
        <div
          className="absolute inset-y-0 right-0 w-1/2 pointer-events-none"
          style={{ background: "linear-gradient(to left, transparent 55%, #FAFAF8 100%)" }}
        />
      </div>

      {/* ── Two-column layout ── */}
      <div className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT — Text */}
        <motion.div
          className="flex flex-col justify-center px-8 lg:px-16 pt-36 pb-20 lg:pt-0 lg:pb-0"
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
            className="text-5xl sm:text-6xl lg:text-[5rem] xl:text-[5.5rem] font-extrabold text-[#0D0B12] leading-[1.0] mb-7"
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
            className="text-[#0D0B12]/55 text-xl leading-relaxed mb-12 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Kids choose it over recess. Educators rate it 10/10.
            And yes — they&apos;re saying &ldquo;I love this&rdquo; about math now.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          >
            <Link
              href="/parents"
              className="px-10 py-4 rounded-full font-bold text-white text-base transition-all duration-200 hover:-translate-y-0.5 w-fit"
              style={{
                background: "linear-gradient(135deg, #7030A0, #4A1E6B)",
                boxShadow: "0 8px 40px rgba(112,48,160,0.35)",
              }}
            >
              For Parents →
            </Link>
            <Link
              href="/educators"
              className="px-10 py-4 rounded-full font-bold text-[#7030A0] text-base border-2 border-[#7030A0]/25 hover:border-[#7030A0]/60 hover:bg-white/60 transition-all duration-200 w-fit"
            >
              For Educators →
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT — Kid photo */}
        <motion.div
          className="relative hidden lg:block"
          style={{ y: imgY }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Glow behind photo */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: "radial-gradient(ellipse 60% 70% at 30% 50%, rgba(196,159,220,0.35) 0%, transparent 65%)",
            }}
          />

          <Image
            src="/Stock Images/pexels-vanessa-loring-7869248.jpg"
            alt="Kid experiencing wonder in VR"
            fill
            className="object-cover object-top"
            priority
          />

          {/* Left-edge fade into gradient */}
          <div
            className="absolute inset-y-0 left-0 w-40 z-20 pointer-events-none"
            style={{ background: "linear-gradient(to right, #FAFAF8 0%, transparent 100%)" }}
          />
          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none"
            style={{ background: "linear-gradient(to top, #FAFAF8 0%, transparent 100%)" }}
          />
        </motion.div>

      </div>

      {/* Scroll nudge */}
      <motion.div
        className="absolute bottom-8 left-8 lg:left-16 z-20"
        style={{ opacity: fadeOut }}
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
    </section>
  );
}

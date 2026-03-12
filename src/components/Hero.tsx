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

      {/* ── Soft full-bleed gradient mesh ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Base tint — very light lavender across the whole bg */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 120% 100% at 50% 50%, rgba(230,215,245,0.55) 0%, rgba(250,250,248,0.0) 70%)" }} />
        {/* Left-centre purple bloom */}
        <div
          className="absolute top-1/2 left-[-10%] -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[60px]"
          style={{ background: "radial-gradient(circle, rgba(196,159,220,0.45) 0%, rgba(112,48,160,0.08) 55%, transparent 75%)" }}
        />
        {/* Top-right teal accent */}
        <div
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[80px]"
          style={{ background: "radial-gradient(circle, rgba(8,145,178,0.22) 0%, transparent 65%)" }}
        />
        {/* Bottom-left soft teal */}
        <div
          className="absolute bottom-[-15%] left-[-5%] w-[550px] h-[550px] rounded-full blur-[70px]"
          style={{ background: "radial-gradient(circle, rgba(8,145,178,0.15) 0%, transparent 65%)" }}
        />
        {/* Centre-right soft lavender to carry colour behind photo */}
        <div
          className="absolute top-[20%] right-[5%] w-[500px] h-[500px] rounded-full blur-[80px]"
          style={{ background: "radial-gradient(circle, rgba(196,159,220,0.3) 0%, transparent 70%)" }}
        />
      </div>

      {/* ── Two-column layout ── */}
      <div className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT — Text */}
        <motion.div
          className="flex flex-col justify-center pl-12 pr-8 lg:pl-24 lg:pr-10 pt-28 pb-16 lg:pt-20 lg:pb-16"
          style={{ y: textY, opacity: fadeOut }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-[5rem] xl:text-[5.5rem] font-extrabold text-[#0D0B12] leading-[1.0] mb-5"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block">Gift them</span>
            <span className="block">the{" "}
              <span
                className="italic inline-block pb-2 pr-4"
                style={{
                  background: "linear-gradient(135deg, #7030A0 20%, #C49FDC 55%, #0891B2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >wonder</span>
            </span>
            <span className="block">of math.</span>
          </motion.h1>

          <motion.p
            className="text-[#0D0B12]/55 text-xl leading-relaxed mb-8 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Kids choose it over recess. Educators rate it 10/10.
            45% score jump. In just three sessions.
          </motion.p>

          <motion.div
            className="flex"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          >
            <Link
              href="/reviews"
              className="px-10 py-4 rounded-full font-bold text-white text-base transition-all duration-200 hover:-translate-y-0.5 w-fit"
              style={{
                background: "linear-gradient(135deg, #7030A0, #4A1E6B)",
                boxShadow: "0 8px 40px rgba(112,48,160,0.35)",
              }}
            >
              See what families are saying →
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT — Kid photo in rounded box */}
        <motion.div
          className="relative hidden lg:flex items-end justify-center px-8 pt-10 pb-20"
          style={{ y: imgY }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Glow behind box */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(196,159,220,0.3) 0%, transparent 70%)",
            }}
          />

          <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-[#7030A0]/20">
            <Image
              src="/Stock Images/pexels-julia-m-cameron-4144037.jpg"
              alt="Kid experiencing wonder in VR"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Floating student review chip */}
            <motion.div
              className="absolute bottom-5 right-5 bg-white/90 backdrop-blur-md rounded-2xl px-5 py-4 shadow-xl border border-[#7030A0]/10 max-w-[220px]"
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[#0D0B12] text-sm font-semibold leading-snug mb-1">
                &ldquo;Maths is my favourite subject now.&rdquo;
              </p>
              <p className="text-[#7030A0]/60 text-xs font-medium">Parent, Roxbury Pilot</p>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Bottom fade to dark section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, transparent, #0d0620)" }}
      />

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

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

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
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-[#F7F2FF]">

      {/* ── Background gradient ── */}
      <motion.div className="absolute inset-0 z-0 pointer-events-none" style={{ y: bgY }}>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 120% 100% at 50% 50%, rgba(230,215,245,0.55) 0%, rgba(247,242,255,0.0) 70%)",
          }}
        />
        <div
          className="absolute top-1/2 left-[-10%] -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[60px]"
          style={{ background: "radial-gradient(circle, rgba(196,159,220,0.45) 0%, rgba(112,48,160,0.08) 55%, transparent 75%)" }}
        />
        <div
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[80px]"
          style={{ background: "radial-gradient(circle, rgba(8,145,178,0.22) 0%, transparent 65%)" }}
        />
        <div
          className="absolute top-[20%] right-[5%] w-[500px] h-[500px] rounded-full blur-[80px]"
          style={{ background: "radial-gradient(circle, rgba(196,159,220,0.3) 0%, transparent 70%)" }}
        />
      </motion.div>

      {/* ── Two-column layout ── */}
      <div className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT — Text */}
        <motion.div
          className="flex flex-col justify-center pl-12 pr-8 lg:pl-24 lg:pr-10 pt-28 pb-16 lg:pt-20 lg:pb-16"
          style={{ y: textY, opacity: fadeOut }}
        >
          <motion.p
            className="text-[#7030A0]/70 font-semibold text-xs tracking-widest uppercase mb-5"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            About ShepherdXR
          </motion.p>

          <motion.h1
            className="text-5xl sm:text-6xl lg:text-[5rem] xl:text-[5.5rem] font-extrabold text-[#0D0B12] leading-[1.0] mb-5"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block">We build tech</span>
            <span className="block">that{" "}
              <em className="not-italic italic text-[#7030A0]">changes</em>
            </span>
            <span className="block">how kids see</span>
            <span className="block">themselves.</span>
          </motion.h1>

          <motion.p
            className="text-[#0D0B12]/55 text-xl leading-relaxed max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            ShepherdXR turns math from a fear into a superpower.
          </motion.p>
        </motion.div>

        {/* RIGHT — Photo */}
        <motion.div
          className="relative hidden lg:flex items-end justify-center px-8 pt-10 pb-20"
          style={{ y: orbY }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(196,159,220,0.3) 0%, transparent 70%)",
            }}
          />
          <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-[#7030A0]/20">
            <Image
              src="/Stock Images/pexels-vanessa-loring-7869443.jpg"
              alt="Child experiencing the wonder of VR learning"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#7030A0]/20 via-transparent to-transparent" />
          </div>
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

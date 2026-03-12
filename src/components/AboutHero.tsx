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
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-[#F7F2FF]">

      {/* ── LAYER 1: Background gradient (slowest) ── */}
      <motion.div className="absolute inset-0 scale-[1.1]" style={{ y: bgY }}>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 85% 70% at 70% 45%, rgba(196,159,220,0.5) 0%, rgba(240,230,247,0.7) 50%, transparent 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(8,145,178,0.1) 0%, transparent 70%)" }}
        />
      </motion.div>

      {/* ── LAYER 2: Kid photo (medium speed) ── */}
      <motion.div
        className="absolute inset-0 flex items-center justify-end pr-8 lg:pr-20 pointer-events-none"
        style={{ y: orbY }}
      >
        <motion.div
          className="relative w-[340px] h-[460px] lg:w-[420px] lg:h-[560px]"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Soft glow behind photo */}
          <div
            className="absolute -inset-8 rounded-[3rem] pointer-events-none"
            style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(196,159,220,0.45) 0%, transparent 70%)" }}
          />
          {/* Photo */}
          <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl shadow-[#7030A0]/20">
            <Image
              src="/Stock Images/pexels-vanessa-loring-7869443.jpg"
              alt="Child experiencing the wonder of VR learning"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Subtle gradient overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#7030A0]/20 via-transparent to-transparent" />
          </div>
          {/* Teal accent dot */}
          <motion.div
            className="absolute -bottom-4 -left-4 w-14 h-14 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(8,145,178,0.7) 0%, transparent 70%)" }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Purple accent dot */}
          <motion.div
            className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#C49FDC]/60"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </motion.div>
      </motion.div>

      {/* ── LAYER 3: Text (fastest, fades) ── */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{ y: textY, opacity: fadeOut }}
      >
        {/* Overline */}
        <motion.p
          className="absolute top-28 left-8 lg:left-16 text-[#7030A0]/70 font-semibold text-xs tracking-widest uppercase"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          About ShepherdXR
        </motion.p>

        {/* Supporting right */}
        <motion.p
          className="absolute top-28 right-8 lg:right-16 text-[#0D0B12]/30 text-xs leading-relaxed text-right max-w-[150px]"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          ShepherdXR turns math from a fear into a superpower.
        </motion.p>

        {/* Main headline — lower left */}
        <div className="absolute bottom-0 left-0 right-0 px-8 lg:px-16 pb-16">
          <motion.h1
            className="text-[3.4rem] sm:text-[4.5rem] lg:text-[6rem] font-extrabold text-[#0D0B12] leading-[0.95] mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            We build tech that{" "}
            <em className="not-italic italic text-[#7030A0]">changes</em>{" "}
            how kids see themselves.
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
            className="w-px h-10 bg-[#7030A0]/30"
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

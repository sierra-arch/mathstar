"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function EducatorsHero() {
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

      {/* ── LAYER 1: Photo (moves slowest) ── */}
      <motion.div
        className="absolute inset-0 scale-[1.15] origin-center"
        style={{ y: bgY }}
      >
        <Image
          src="/Stock Images/pexels-julia-m-cameron-4144152.jpg"
          alt="Student using VR headset in classroom"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Dark cinematic overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(13,11,18,0.95) 0%, rgba(13,11,18,0.6) 40%, rgba(13,11,18,0.2) 85%, transparent 100%)",
          }}
        />
        {/* Purple tint top-right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 50% at 75% 20%, rgba(112,48,160,0.35) 0%, transparent 65%)",
          }}
        />
      </motion.div>

      {/* ── LAYER 2: Text (moves faster, fades on scroll) ── */}
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
          For Educators
        </motion.p>

        {/* Supporting text — upper right */}
        <motion.p
          className="absolute top-28 right-8 lg:right-16 text-white/30 text-xs leading-relaxed text-right max-w-[160px]"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          A proven 8-hour VR intervention for students who struggle in traditional formats.
        </motion.p>

        {/* Main headline + CTA — lower left */}
        <div className="absolute bottom-0 left-0 right-0 px-8 lg:px-16 pb-16">
          <motion.h1
            className="text-[3.4rem] sm:text-[4.5rem] lg:text-[6rem] font-extrabold text-white leading-[0.95] mb-10 max-w-3xl"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Your students
            are capable of{" "}
            <em className="not-italic italic text-[#C49FDC]">so much more.</em>
          </motion.h1>

          <motion.div
            className="flex flex-col sm:flex-row items-start gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            <Link
              href="/contact"
              className="px-10 py-4 rounded-full font-bold text-[#7030A0] bg-white text-base transition-all duration-200 hover:-translate-y-0.5 shadow-2xl"
            >
              Request a School Pilot →
            </Link>
            <Link
              href="/impact"
              className="px-10 py-4 rounded-full font-bold text-white/70 text-base border-2 border-white/20 hover:border-white/50 hover:text-white transition-all duration-200"
            >
              See the Data →
            </Link>
          </motion.div>
        </div>

        {/* Quote chip — bottom right */}
        <motion.div
          className="absolute bottom-16 right-8 lg:right-16 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-6 py-4 max-w-[260px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
        >
          <p className="text-white font-semibold text-sm leading-snug">
            &ldquo;He got 17/21 in the game&apos;s test... we know he&apos;s capable of this.&rdquo;
          </p>
          <p className="text-white/40 text-xs mt-1">Ms. Munroe — Ellis Elementary</p>
        </motion.div>

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

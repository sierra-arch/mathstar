"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ParentsHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-[#F2EAF8]">

      {/* ── LAYER 1: Photo (moves slowest) ── */}
      <motion.div
        className="absolute inset-0 scale-[1.15] origin-center"
        style={{ y: bgY }}
      >
        <Image
          src="/Stock Images/pexels-julia-m-cameron-4144037.jpg"
          alt="Child with VR headset"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Gradient overlay — bottom heavy for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(242,234,248,0.97) 0%, rgba(242,234,248,0.65) 35%, rgba(242,234,248,0.1) 75%, transparent 100%)",
          }}
        />
        {/* Left fade so text reads clearly */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(242,234,248,0.85) 0%, rgba(242,234,248,0.4) 40%, transparent 70%)",
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
          className="absolute top-28 left-8 lg:left-16 text-[#7030A0]/70 font-semibold text-xs tracking-widest uppercase"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          For Parents
        </motion.p>

        {/* Supporting text — upper right */}
        <motion.p
          className="absolute top-28 right-8 lg:right-16 text-[#0D0B12]/35 text-xs leading-relaxed text-right max-w-[160px]"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          At home or at your local library — where math finally clicks.
        </motion.p>

        {/* Main headline + CTA — lower left */}
        <div className="absolute bottom-0 left-0 right-0 px-8 lg:px-16 pb-16">
          <motion.h1
            className="text-[3.4rem] sm:text-[4.5rem] lg:text-[6rem] font-extrabold text-[#0D0B12] leading-[0.95] mb-10 max-w-3xl"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Don&apos;t let math
            close the door
            on their{" "}
            <em className="not-italic italic text-[#7030A0]">potential.</em>
          </motion.h1>

          <motion.div
            className="flex flex-col sm:flex-row items-start gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            <Link
              href="https://shepherdxr.org"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full font-bold text-white text-base transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #7030A0, #4A1E6B)",
                boxShadow: "0 8px 40px rgba(112,48,160,0.4)",
              }}
            >
              Get MathSTAR →
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 rounded-full font-bold text-[#7030A0] text-base border-2 border-[#7030A0]/30 hover:border-[#7030A0]/60 transition-all duration-200"
            >
              Have Questions →
            </Link>
          </motion.div>
        </div>

        {/* Quote chip — bottom right */}
        <motion.div
          className="absolute bottom-16 right-8 lg:right-16 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl px-6 py-4 max-w-[250px] border border-[#7030A0]/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
        >
          <p className="text-[#0D0B12] font-semibold text-sm leading-snug">
            &ldquo;Wait, that level I just did was algebra?&rdquo;
          </p>
          <p className="text-[#0D0B12]/40 text-xs mt-1">A student, after a session</p>
        </motion.div>

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

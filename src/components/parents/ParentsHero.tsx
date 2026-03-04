"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ParentsHero() {
  return (
    <section className="relative min-h-[95vh] flex items-end overflow-hidden bg-[#F7F2FF]">

      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 85% 70% at 65% 40%, rgba(196,159,220,0.4) 0%, rgba(240,230,247,0.6) 50%, transparent 100%)",
        }}
      />

      {/* Full-bleed photo — right side bleeds to edge */}
      <motion.div
        className="absolute inset-y-0 right-0 w-full lg:w-[52%] pointer-events-none"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Image
          src="/pexels-julia-m-cameron-4144037.jpg"
          alt="Child with VR headset"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Fade left to blend with bg */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #F7F2FF 0%, rgba(247,242,255,0.6) 30%, transparent 65%)",
          }}
        />
        {/* Fade bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #F7F2FF 0%, transparent 40%)",
          }}
        />
      </motion.div>

      {/* Text — left, sitting above bottom */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-16 pb-20 pt-36">
        <motion.p
          className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-7"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          For Parents
        </motion.p>

        <motion.h1
          className="text-5xl lg:text-[5rem] font-extrabold text-[#0D0B12] leading-[1.03] mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Don&apos;t let math close
          the door on your child&apos;s{" "}
          <em className="not-italic italic text-[#7030A0]">potential.</em>
        </motion.h1>

        <motion.p
          className="text-xl text-[#0D0B12]/55 max-w-sm mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          An 8-hour VR adventure — at home or at your local library — where math finally clicks.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-start gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <Link
            href="https://shepherdxr.org"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-full font-bold text-white text-base transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #7030A0, #4A1E6B)",
              boxShadow: "0 8px 40px rgba(112,48,160,0.35)",
            }}
          >
            Get MathSTAR →
          </Link>
          <Link
            href="/contact"
            className="px-10 py-4 rounded-full font-bold text-[#7030A0] text-base border-2 border-[#7030A0]/25 hover:border-[#7030A0]/60 hover:bg-white/50 transition-all duration-200"
          >
            Have Questions →
          </Link>
        </motion.div>
      </div>

      {/* Floating quote chip */}
      <motion.div
        className="absolute bottom-8 right-8 lg:right-16 z-20 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl px-6 py-4 max-w-[260px] border border-[#7030A0]/8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.0 }}
      >
        <p className="text-[#0D0B12] font-semibold text-sm leading-snug">
          &ldquo;Wait, that level I just did was algebra?&rdquo;
        </p>
        <p className="text-[#0D0B12]/40 text-xs mt-1">A student, after a MathSTAR session</p>
      </motion.div>
    </section>
  );
}

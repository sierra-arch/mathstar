"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20 px-6 lg:px-16 overflow-hidden bg-[#F7F2FF]">

      {/* Ambient purple orbs — fill the whole background */}
      <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-[#7030A0]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#7030A0]/12 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[30%] left-[40%] w-[400px] h-[400px] bg-teal-400/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">

        {/* Left — Text */}
        <div>
          <motion.p
            className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            VR Math Learning for Kids
          </motion.p>

          <motion.h1
            className="text-5xl lg:text-[5rem] font-extrabold text-ink leading-[1.03] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Gift Your Child{" "}
            <br />
            the{" "}
            <em className="not-italic italic text-[#7030A0]">Wonder</em>
            <br />
            of Math
          </motion.h1>

          <motion.p
            className="text-xl text-ink/55 max-w-md mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            An 8-hour VR adventure that takes kids from stuck-in-arithmetic to
            algebra-confident — inside an underwater world where math feels like
            magic.
          </motion.p>

          <motion.div
            className="flex items-center gap-5 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="/get"
              className="bg-[#7030A0] text-white font-semibold px-9 py-4 rounded-full text-base hover:bg-[#4A1E6B] transition-colors shadow-xl shadow-[#7030A0]/30"
            >
              Get MathSTAR →
            </a>
            <a href="/story" className="text-ink/50 font-medium text-sm hover:text-ink transition-colors">
              Our Story ↓
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            className="flex items-center gap-8 pt-8 border-t border-[#7030A0]/15"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div>
              <div className="text-3xl font-extrabold text-[#7030A0]">10/10</div>
              <div className="text-xs text-ink/40 mt-1">Educator rating</div>
            </div>
            <div className="w-px h-10 bg-[#7030A0]/15" />
            <div>
              <div className="text-3xl font-extrabold text-[#7030A0]">8 hrs</div>
              <div className="text-xs text-ink/40 mt-1">To algebra-ready</div>
            </div>
            <div className="w-px h-10 bg-[#7030A0]/15" />
            <div>
              <div className="text-xl font-extrabold text-[#7030A0]">&ldquo;I love this&rdquo;</div>
              <div className="text-xs text-ink/40 mt-1">Kids, actually</div>
            </div>
          </motion.div>
        </div>

        {/* Right — Video */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {/* Big glow behind video */}
          <div className="absolute inset-0 -m-16 bg-gradient-to-br from-[#7030A0]/30 via-violet-300/20 to-teal-300/20 rounded-full blur-3xl pointer-events-none" />

          {/* Video card */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#7030A0]/25 border border-[#7030A0]/10">
            <video
              src="/Gameplay-edited.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating quote chip */}
          <motion.div
            className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-4 max-w-[230px] border border-[#7030A0]/8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <p className="text-xs font-semibold text-[#7030A0] mb-1">Student, Ellis Pilot</p>
            <p className="text-sm text-ink font-medium leading-snug">
              &ldquo;Math is gonna be so fun from now on.&rdquo;
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

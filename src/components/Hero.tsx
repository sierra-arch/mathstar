"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-12 px-6 lg:px-16 overflow-hidden bg-bg">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left — Text */}
        <div>
          <motion.p
            className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            VR Math Learning for Kids
          </motion.p>

          <motion.h1
            className="text-5xl lg:text-[4.5rem] font-extrabold text-ink leading-[1.05] mb-6"
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
            className="text-lg text-ink/55 max-w-md mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            An 8-hour VR adventure that takes kids from stuck-in-arithmetic to
            algebra-confident — inside an underwater world where math feels like
            magic.
          </motion.p>

          <motion.div
            className="flex items-center gap-4 mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="#get"
              className="bg-[#7030A0] text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-[#4A1E6B] transition-colors shadow-lg shadow-purple-900/20"
            >
              Get MathSTAR →
            </a>
            <a href="#story" className="text-ink/50 font-medium text-sm hover:text-ink transition-colors">
              Our Story ↓
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            className="flex items-center gap-6 pt-6 border-t border-ink/8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div>
              <div className="text-2xl font-extrabold text-ink">10/10</div>
              <div className="text-xs text-ink/40 mt-0.5">Educator rating</div>
            </div>
            <div className="w-px h-8 bg-ink/10" />
            <div>
              <div className="text-2xl font-extrabold text-ink">8 hrs</div>
              <div className="text-xs text-ink/40 mt-0.5">To algebra-ready</div>
            </div>
            <div className="w-px h-8 bg-ink/10" />
            <div>
              <div className="text-xl font-extrabold text-ink">&ldquo;I love this&rdquo;</div>
              <div className="text-xs text-ink/40 mt-0.5">Kids, actually</div>
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
          {/* Gradient blob */}
          <div className="absolute inset-0 -m-12 bg-gradient-to-br from-purple-200/60 via-violet-100/40 to-teal-100/50 rounded-full blur-3xl pointer-events-none" />

          {/* Video card */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/20 border border-white/60">
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
            className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-5 py-3 max-w-[220px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <p className="text-xs font-semibold text-[#7030A0] mb-0.5">Student, Ellis Pilot</p>
            <p className="text-sm text-ink font-medium leading-snug">
              &ldquo;Math is gonna be so fun from now on.&rdquo;
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

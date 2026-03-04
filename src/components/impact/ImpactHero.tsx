"use client";

import { motion } from "framer-motion";

export default function ImpactHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#0D0B12]">

      {/* Background gradient orbs */}
      <div
        className="absolute top-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(112,48,160,0.35) 0%, transparent 65%)" }}
      />
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(8,145,178,0.15) 0%, transparent 65%)" }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-0 items-center relative z-10 pt-24 px-6 lg:px-16 min-h-[85vh]">

        {/* Left — text */}
        <div className="py-20">
          <motion.p
            className="text-[#C49FDC] font-semibold text-sm tracking-widest uppercase mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Impact & Results
          </motion.p>

          <motion.h1
            className="text-5xl lg:text-[5.5rem] font-extrabold text-white leading-[1.0] mb-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            The data is in.
            <br />
            <em className="not-italic italic text-[#C49FDC]">Kids are changing.</em>
          </motion.h1>

          <motion.p
            className="text-xl text-white/50 max-w-xs leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Two pilots. Real students. Here&apos;s what happened.
          </motion.p>
        </div>

        {/* Right — large floating stat visual */}
        <div className="relative flex items-center justify-center h-[500px]">

          {/* Ambient glow */}
          <div
            className="absolute w-[480px] h-[480px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(112,48,160,0.25) 0%, transparent 70%)" }}
          />

          {/* Floating stat stack */}
          <motion.div
            className="relative flex flex-col items-center gap-6"
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            {/* Big number */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              <div
                className="text-[9rem] lg:text-[11rem] font-extrabold leading-none"
                style={{
                  background: "linear-gradient(135deg, #ffffff 20%, #C49FDC 55%, #7030A0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                10
              </div>
              <div className="text-white/40 text-xl font-semibold tracking-wide -mt-3">
                out of 10
              </div>
              <div className="text-white/25 text-sm uppercase tracking-widest mt-2">
                Educator rating
              </div>
            </motion.div>

            {/* Smaller floating stats */}
            <div className="flex items-center gap-8 mt-2">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="text-4xl font-extrabold text-[#C49FDC]">+18%</div>
                <div className="text-white/35 text-xs mt-1">Test score gain</div>
              </motion.div>
              <div className="w-px h-10 bg-white/10" />
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.85 }}
              >
                <div className="text-4xl font-extrabold text-[#C49FDC]">86%</div>
                <div className="text-white/35 text-xs mt-1">Would recommend</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Orbiting accent */}
          <motion.div
            className="absolute top-12 right-8 w-16 h-16 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(196,159,220,0.6) 0%, transparent 70%)" }}
            animate={{ y: [0, 12, 0], x: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
          <motion.div
            className="absolute bottom-16 left-12 w-12 h-12 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(8,145,178,0.5) 0%, transparent 70%)" }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>
      </div>
    </section>
  );
}

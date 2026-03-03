"use client";

import { motion } from "framer-motion";

export default function ImpactHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center pt-32 pb-24 px-6 lg:px-16 bg-[#0F0620] overflow-hidden">

      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#7030A0]/25 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-teal-400/12 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          className="text-[#C49FDC] font-semibold text-sm tracking-widest uppercase mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Impact & Results
        </motion.p>
        <motion.h1
          className="text-5xl lg:text-[4.5rem] font-extrabold text-white leading-[1.05] mb-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          The data is in.
          <br />
          <em className="not-italic italic text-[#C49FDC]">Kids are changing.</em>
        </motion.h1>
        <motion.p
          className="text-xl text-white/55 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Two pilots. One public library. One Boston public school. Here&apos;s what happened
          when we gave kids the access they deserved.
        </motion.p>
      </div>
    </section>
  );
}

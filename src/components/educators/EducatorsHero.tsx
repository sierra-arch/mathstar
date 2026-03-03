"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function EducatorsHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-28 pb-20 px-6 lg:px-16 bg-[#0F0620] overflow-hidden">

      {/* Ambient orbs */}
      <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] bg-[#7030A0]/25 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-8%] w-[500px] h-[500px] bg-teal-400/12 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          className="text-[#C49FDC] font-semibold text-sm tracking-widest uppercase mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          For Educators
        </motion.p>

        <motion.h1
          className="text-5xl lg:text-[4.5rem] font-extrabold text-white leading-[1.05] mb-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Your students are capable
          <br />
          of{" "}
          <em className="not-italic italic text-[#C49FDC]">so much more.</em>
          <br />
          They just need access.
        </motion.h1>

        <motion.p
          className="text-xl text-white/55 max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          MathSTAR is an 8-hour VR intervention proven to boost engagement, confidence,
          and foundational math skills — especially for students who struggle in
          traditional formats. Join the schools already seeing the results.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/contact"
            className="bg-white text-[#7030A0] font-semibold px-10 py-4 rounded-full text-base hover:bg-purple-50 transition-colors shadow-xl"
          >
            Request a School Pilot →
          </Link>
          <Link href="/impact" className="text-white/50 font-medium text-sm hover:text-white transition-colors">
            See the impact data ↓
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-8 pt-10 border-t border-white/8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-center">
            <div className="text-3xl font-extrabold text-[#C49FDC]">10/10</div>
            <div className="text-xs text-white/35 mt-1">Educator rating</div>
          </div>
          <div className="w-px h-10 bg-white/8 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl font-extrabold text-[#C49FDC]">2 Pilots</div>
            <div className="text-xs text-white/35 mt-1">BPL + Boston Public Schools</div>
          </div>
          <div className="w-px h-10 bg-white/8 hidden sm:block" />
          <div className="text-center">
            <div className="text-xl font-extrabold text-[#C49FDC]">&ldquo;They need access&rdquo;</div>
            <div className="text-xs text-white/35 mt-1">Teachers, every time</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

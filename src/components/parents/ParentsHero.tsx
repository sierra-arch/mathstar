"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ParentsHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-28 pb-20 px-6 lg:px-16 bg-[#F7F2FF] overflow-hidden">

      {/* Ambient orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#7030A0]/18 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-8%] w-[500px] h-[500px] bg-teal-400/12 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          For Parents
        </motion.p>

        <motion.h1
          className="text-5xl lg:text-[4.5rem] font-extrabold text-ink leading-[1.05] mb-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Don&apos;t let math close
          <br />
          the door on your child&apos;s{" "}
          <em className="not-italic italic text-[#7030A0]">potential.</em>
        </motion.h1>

        <motion.p
          className="text-xl text-ink/60 max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          MathSTAR is an 8-hour VR adventure your child can experience at home or at
          your local library. They put on the headset and enter an underwater world
          where fish multiply and divide before their eyes — and math finally clicks.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="https://shepherdxr.org"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#7030A0] text-white font-semibold px-10 py-4 rounded-full text-base hover:bg-[#4A1E6B] transition-colors shadow-xl shadow-[#7030A0]/25"
          >
            Get MathSTAR for Your Child →
          </Link>
          <Link href="/contact" className="text-ink/50 font-medium text-sm hover:text-ink transition-colors">
            Have questions? Contact us
          </Link>
        </motion.div>

        {/* Social proof row */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-8 pt-10 border-t border-[#7030A0]/12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-center">
            <div className="text-3xl font-extrabold text-[#7030A0]">8 hrs</div>
            <div className="text-xs text-ink/45 mt-1">To algebra-ready</div>
          </div>
          <div className="w-px h-10 bg-[#7030A0]/12 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl font-extrabold text-[#7030A0]">10/10</div>
            <div className="text-xs text-ink/45 mt-1">Educator rating</div>
          </div>
          <div className="w-px h-10 bg-[#7030A0]/12 hidden sm:block" />
          <div className="text-center">
            <div className="text-xl font-extrabold text-[#7030A0]">&ldquo;I love this&rdquo;</div>
            <div className="text-xs text-ink/45 mt-1">Kids, actually</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function EducatorsHero() {
  return (
    <section className="relative min-h-[95vh] flex items-end overflow-hidden bg-[#0D0B12]">

      {/* Full-bleed photo */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Image
          src="/pexels-julia-m-cameron-4144152.jpg"
          alt="Student using VR headset in classroom"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #0D0B12 0%, rgba(13,11,18,0.75) 40%, rgba(13,11,18,0.3) 100%)",
          }}
        />
        {/* Purple accent tint */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(112,48,160,0.3) 0%, transparent 65%)",
          }}
        />
      </motion.div>

      {/* Text — lower left */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-16 pb-20 pt-36">
        <motion.p
          className="text-[#C49FDC] font-semibold text-sm tracking-widest uppercase mb-7"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          For Educators
        </motion.p>

        <motion.h1
          className="text-5xl lg:text-[5rem] font-extrabold text-white leading-[1.03] mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Your students are capable
          of{" "}
          <em className="not-italic italic text-[#C49FDC]">so much more.</em>
          <br />
          Give them access.
        </motion.h1>

        <motion.p
          className="text-xl text-white/55 max-w-sm mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          A proven 8-hour VR intervention. Especially for students who struggle in traditional formats.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-start gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
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

      {/* Floating stat chip */}
      <motion.div
        className="absolute bottom-8 right-8 lg:right-16 z-20 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-6 py-4 max-w-[260px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.0 }}
      >
        <p className="text-white font-semibold text-sm leading-snug">
          &ldquo;He got 17/21 in the game&apos;s test... we know he&apos;s capable of this.&rdquo;
        </p>
        <p className="text-white/40 text-xs mt-1">Ms. Munroe — Ellis Elementary Pilot</p>
      </motion.div>
    </section>
  );
}

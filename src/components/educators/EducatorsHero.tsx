"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function EducatorsHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-20 px-6 lg:px-16 bg-[#0F0620] overflow-hidden">

      {/* Ambient orbs */}
      <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] bg-[#7030A0]/25 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-8%] w-[500px] h-[500px] bg-teal-400/12 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#C49FDC] font-semibold text-sm tracking-widest uppercase mb-6">
            For Educators
          </p>

          <h1 className="text-5xl lg:text-[4rem] font-extrabold text-white leading-[1.05] mb-8">
            Your students are capable
            <br />
            of{" "}
            <em className="not-italic italic text-[#C49FDC]">so much more.</em>
            <br />
            They just need access.
          </h1>

          <p className="text-xl text-white/55 max-w-xl mb-12 leading-relaxed">
            MathSTAR is an 8-hour VR intervention proven to boost engagement, confidence,
            and foundational math skills — especially for students who struggle in
            traditional formats. Join the schools already seeing the results.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#7030A0] font-semibold px-10 py-4 rounded-full text-base hover:bg-purple-50 transition-colors shadow-xl"
            >
              Request a School Pilot →
            </Link>
            <Link href="/impact" className="text-white/50 font-medium text-sm hover:text-white transition-colors self-center">
              See the impact data ↓
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-14 flex flex-wrap items-center gap-8 pt-10 border-t border-white/8">
            <div>
              <div className="text-3xl font-extrabold text-[#C49FDC]">10/10</div>
              <div className="text-xs text-white/35 mt-1">Educator rating</div>
            </div>
            <div className="w-px h-10 bg-white/8 hidden sm:block" />
            <div>
              <div className="text-3xl font-extrabold text-[#C49FDC]">2 Pilots</div>
              <div className="text-xs text-white/35 mt-1">BPL + Boston Public Schools</div>
            </div>
            <div className="w-px h-10 bg-white/8 hidden sm:block" />
            <div>
              <div className="text-xl font-extrabold text-[#C49FDC]">&ldquo;They need access&rdquo;</div>
              <div className="text-xs text-white/35 mt-1">Teachers, every time</div>
            </div>
          </div>
        </motion.div>

        {/* Right — photo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          {/* Glow behind image */}
          <div className="absolute -inset-6 bg-[#7030A0]/30 rounded-[40px] blur-2xl pointer-events-none" />

          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
            <Image
              src="/pexels-julia-m-cameron-4144152.jpg"
              alt="Student using VR headset in classroom"
              width={700}
              height={840}
              className="w-full h-[520px] lg:h-[600px] object-cover object-top"
              priority
            />
            {/* Dark overlay to blend with dark theme */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0620]/60 via-transparent to-[#0F0620]/10" />

            {/* Floating stat chip */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-6 py-4">
              <p className="text-white font-semibold text-sm leading-snug">
                &ldquo;He got 17/21 in the game&apos;s test... we know he&apos;s capable of this.&rdquo;
              </p>
              <p className="text-white/45 text-xs mt-1">Ms. Munroe, Teacher — Ellis Pilot</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

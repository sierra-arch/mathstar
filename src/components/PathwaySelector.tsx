"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PathwaySelector() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-24 px-6 lg:px-16 bg-[#F7F2FF] overflow-hidden">

      {/* Ambient orbs */}
      <div className="absolute top-[-5%] left-[-10%] w-[600px] h-[600px] bg-[#7030A0]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-10%] w-[500px] h-[500px] bg-[#0891B2]/12 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-[#0891B2]/12 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get MathSTAR
          </motion.p>
          <motion.h1
            className="text-4xl lg:text-[3.5rem] font-extrabold text-ink leading-tight mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Who are you getting
            <br />
            MathSTAR <em className="not-italic italic text-[#7030A0]">for?</em>
          </motion.h1>
          <motion.p
            className="text-xl text-ink/55 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We&apos;ve built a tailored experience for each of you.
          </motion.p>
        </div>

        {/* Two pathway cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Parents card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link href="/parents" className="group block h-full">
              <div className="relative h-full bg-white rounded-3xl border border-[#7030A0]/10 shadow-lg hover:shadow-2xl hover:shadow-[#7030A0]/15 hover:-translate-y-1 transition-all duration-300 overflow-hidden">

                {/* Card glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7030A0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl" />

                <div className="relative z-10 p-10">
                  <p className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-4">For Parents</p>

                  <h2 className="text-2xl lg:text-3xl font-extrabold text-ink leading-tight mb-5">
                    I&apos;m a parent looking to get this for my child
                  </h2>

                  <p className="text-ink/60 text-lg leading-relaxed mb-10">
                    Gift your child the wonder of math at home or through your local library.
                    No school required — just a headset and 8 hours that change everything.
                  </p>

                  <div className="flex items-center gap-2 text-[#7030A0] font-semibold text-base group-hover:gap-4 transition-all duration-200">
                    <span>Learn more for parents</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Educators card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <Link href="/educators" className="group block h-full">
              <div className="relative h-full bg-[#0F0620] rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-[#0891B2]/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden">

                {/* Card glow */}
                <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] bg-[#0891B2]/20 rounded-full blur-[80px] pointer-events-none" />

                <div className="relative z-10 p-10">
                  <p className="text-[#0891B2] font-semibold text-sm tracking-widest uppercase mb-4">For Educators</p>

                  <h2 className="text-2xl lg:text-3xl font-extrabold text-white leading-tight mb-5">
                    I&apos;m a teacher or school administrator looking to support my students
                  </h2>

                  <p className="text-white/55 text-lg leading-relaxed mb-10">
                    Bring MathSTAR into your classroom or school. Join the pilot program,
                    see the data, and give your students access they deserve.
                  </p>

                  <div className="flex items-center gap-2 text-[#0891B2] font-semibold text-base group-hover:gap-4 transition-all duration-200">
                    <span>Learn more for educators</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

        </div>

        {/* Bottom note */}
        <motion.p
          className="text-center text-ink/40 text-sm mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Not sure? <Link href="/contact" className="text-[#7030A0] hover:underline">Get in touch</Link> and we&apos;ll point you in the right direction.
        </motion.p>

      </div>
    </section>
  );
}

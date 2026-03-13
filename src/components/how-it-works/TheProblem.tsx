"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "92%",
    body: "of students with learning differences are not proficient in math by 8th grade",
    color: "text-[#7030A0]",
    border: "border-[#7030A0]/15",
    bg: "bg-[#7030A0]/6",
  },
  {
    value: "45%",
    body: "jump in median test score after just 3 MathSTAR sessions — BPL Research",
    color: "text-[#0891B2]",
    border: "border-[#0891B2]/15",
    bg: "bg-[#0891B2]/6",
  },
  {
    value: "55,000",
    body: "learners to reach at or above grade level — our 3-year goal",
    color: "text-[#7030A0]",
    border: "border-[#7030A0]/15",
    bg: "bg-[#7030A0]/6",
  },
];

export default function TheProblem() {
  return (
    <section className="relative py-28 px-6 lg:px-20 bg-[#FAFAF8] overflow-hidden">

      <div className="absolute top-[-5%] right-[-8%] w-[500px] h-[500px] bg-[#7030A0]/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-8%] w-[400px] h-[400px] bg-[#0891B2]/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-5">
              The Problem
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0D0B12] leading-tight mb-8">
              Most kids never get the moment that changes everything.
            </h2>
            <p className="text-[#0D0B12]/60 text-lg leading-relaxed mb-5">
              By 8th grade, <strong className="text-[#0D0B12]/80">92% of students with learning differences are not proficient in math.</strong> They didn&apos;t fail math. Math failed them.
            </p>
            <p className="text-[#0D0B12]/60 text-lg leading-relaxed mb-5">
              Lower math scores predict lower high school and college graduation rates, reduced earnings and economic mobility, and lower health literacy over a lifetime.
            </p>
            <p className="text-[#0D0B12]/60 text-lg leading-relaxed">
              Some students thrive with pen and paper. But many receive math best through visuals, hearing, hands-on experience, and 1-on-1 intervention. The system wasn&apos;t built for them. MathSTAR is.
            </p>
          </motion.div>

          {/* Right — stats */}
          <div className="space-y-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                className={`rounded-3xl p-8 border ${s.border} ${s.bg}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <div className={`text-5xl font-extrabold mb-2 ${s.color}`}>{s.value}</div>
                <p className="text-[#0D0B12]/60 text-base leading-snug">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

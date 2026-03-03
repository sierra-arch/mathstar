"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "10/10",
    label: "Educator Satisfaction",
    desc: "Every teacher and administrator who participated rated MathSTAR 10 out of 10.",
    color: "text-[#C49FDC]",
  },
  {
    value: "8 hrs",
    label: "To Algebra-Ready",
    desc: "Just 8 hours inside MathSTAR exposes students to foundational algebra concepts through embodied play.",
    color: "text-[#C49FDC]",
  },
  {
    value: "2",
    label: "Completed Pilots",
    desc: "Roxbury Public Library (Aug 2025) and Ellis Elementary, Boston Public Schools (Jan 2026).",
    color: "text-teal-400",
  },
  {
    value: "100%",
    label: "Student Re-Engagement",
    desc: "Every student who participated showed elevated engagement — including on non-VR days.",
    color: "text-teal-400",
  },
];

export default function ImpactStats() {
  return (
    <section className="relative py-28 px-6 lg:px-16 bg-[#F7F2FF] overflow-hidden">

      <div className="absolute top-[-5%] right-[-8%] w-[500px] h-[500px] bg-[#7030A0]/12 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl lg:text-[3.25rem] font-extrabold text-ink leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            By the{" "}
            <em className="not-italic italic text-[#7030A0]">numbers</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-3xl p-10 border border-[#7030A0]/8 shadow-sm text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className={`text-5xl font-extrabold mb-3 ${s.color}`}>{s.value}</div>
              <div className="text-ink font-bold text-sm uppercase tracking-widest mb-4">{s.label}</div>
              <p className="text-ink/55 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

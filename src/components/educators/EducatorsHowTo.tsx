"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Get in touch",
    desc: "Reach out to us with your school, district, or library information. We'll set up a quick call to understand your students' needs.",
  },
  {
    num: "02",
    title: "Run a pilot",
    desc: "We'll work with you to set up a pilot program. We provide the headsets, the curriculum, and the support.",
  },
  {
    num: "03",
    title: "See the results",
    desc: "Track engagement, behavior, and learning outcomes. We provide reporting tools so you can show administrators the impact.",
  },
];

export default function EducatorsHowTo() {
  return (
    <section className="relative py-40 px-6 lg:px-16 bg-[#F7F2FF] overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[950px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(196,159,220,0.46) 0%, rgba(112,48,160,0.15) 42%, transparent 68%)" }} />
      <div className="absolute -top-24 -right-16 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(8,145,178,0.20) 0%, transparent 62%)" }} />
      <div className="absolute -bottom-16 -left-20 w-[440px] h-[440px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(74,30,107,0.18) 0%, transparent 62%)" }} />
      <div className="absolute top-0 left-1/4 w-[420px] h-[420px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(240,230,247,0.88) 0%, transparent 65%)" }} />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.p
            className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.p>
          <motion.h2
            className="text-4xl lg:text-[3.25rem] font-extrabold text-ink leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Getting MathSTAR into
            <br />
            <em className="not-italic italic text-[#7030A0]">your school is simple</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              className="bg-white rounded-3xl p-10 border border-[#7030A0]/8 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="text-7xl font-extrabold text-[#7030A0]/15 mb-7 leading-none">{s.num}</div>
              <h3 className="text-xl font-bold text-ink mb-4">{s.title}</h3>
              <p className="text-ink/60 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/contact"
            className="inline-block bg-[#7030A0] text-white font-semibold px-12 py-5 rounded-full text-lg hover:bg-[#4A1E6B] transition-colors shadow-xl shadow-[#7030A0]/25"
          >
            Request a School Pilot →
          </Link>
          <p className="text-ink/35 text-sm mt-5">We&apos;ll respond within 48 hours.</p>
        </motion.div>
      </div>
    </section>
  );
}

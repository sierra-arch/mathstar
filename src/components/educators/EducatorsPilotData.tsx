"use client";

import { motion } from "framer-motion";

const pilots = [
  {
    name: "Roxbury Public Library",
    location: "Roxbury, MA",
    date: "August 2025",
    type: "Library Pilot",
    color: "from-[#DC2626]/20 to-violet-500/10",
    badge: "bg-[#DC2626]/15 text-[#FCA5A5]",
    details: [
      { label: "Setting", value: "Public library free program" },
      { label: "Population", value: "Mixed ages, community access" },
      { label: "Format", value: "Drop-in VR sessions" },
      { label: "Duration", value: "Multiple sessions, summer 2025" },
    ],
    headline: "Community access unlocks hidden potential in kids who never connected with math.",
  },
  {
    name: "Ellis Elementary School",
    location: "Boston Public Schools",
    date: "January 2026",
    type: "School Pilot",
    color: "from-teal-500/15 to-teal-400/5",
    badge: "bg-teal-500/15 text-teal-300",
    details: [
      { label: "Setting", value: "Boston Public Schools classroom" },
      { label: "Population", value: "Elementary students, incl. EI & IEP" },
      { label: "Format", value: "In-class VR intervention sessions" },
      { label: "Educator Rating", value: "10/10 across all educators" },
    ],
    headline: "Students with emotional impairments and IEPs showed strongest engagement gains.",
  },
];

const keyStats = [
  { value: "10/10", label: "Educator satisfaction rating", sublabel: "Across both pilots" },
  { value: "17/21", label: "In-game test score", sublabel: "Student who 'doesn't perform on paper'" },
  { value: "100%", label: "Student re-engagement", sublabel: "Even on non-VR days" },
  { value: "2", label: "Pilot programs completed", sublabel: "BPL + Boston Public Schools" },
];

const researchContext = [
  {
    title: "Why VR for math?",
    body: "Research consistently shows that embodied, immersive learning deepens concept retention. When students move through and interact with mathematical structures — rather than read about them — abstract concepts become concrete. MathSTAR applies this principle to foundational math, targeting the gap years where students fall behind.",
  },
  {
    title: "Who benefits most?",
    body: "Our pilots showed outsized impact for students with Emotional Impairment (EI) designations, IEPs, and those who struggle with traditional math formats. The VR environment removes the social anxiety of 'being wrong in front of others' and replaces it with a private, game-like space where trying again is the point.",
  },
  {
    title: "What does 'algebra-ready' mean?",
    body: "MathSTAR targets the conceptual foundation of algebra: understanding that numbers can represent unknown quantities, that operations have spatial meaning, and that patterns carry predictive power. After 8 hours in MathSTAR, students have encountered these ideas through experience — not memorization.",
  },
];

export default function EducatorsPilotData() {
  return (
    <section className="relative py-40 px-6 lg:px-16 bg-[#0F0620] overflow-hidden">

      <div className="absolute top-[-5%] left-[-8%] w-[500px] h-[500px] bg-[#DC2626]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[400px] h-[400px] bg-teal-400/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            className="text-[#FCA5A5] font-semibold text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            The Research
          </motion.p>
          <motion.h2
            className="text-4xl lg:text-[3.25rem] font-extrabold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Two pilots. Real schools.
            <br />
            <em className="not-italic italic text-[#FCA5A5]">Undeniable results.</em>
          </motion.h2>
        </div>

        {/* Key stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {keyStats.map((s, i) => (
            <motion.div
              key={i}
              className="bg-white/5 border border-white/8 rounded-3xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-4xl font-extrabold text-[#FCA5A5] mb-2">{s.value}</div>
              <div className="text-white/70 text-sm font-semibold mb-1">{s.label}</div>
              <div className="text-white/30 text-xs">{s.sublabel}</div>
            </motion.div>
          ))}
        </div>

        {/* Pilot cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {pilots.map((p, i) => (
            <motion.div
              key={i}
              className="relative bg-white/5 border border-white/8 rounded-3xl p-10 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} pointer-events-none`} />
              <div className="relative z-10">
                <div className={`inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6 ${p.badge}`}>
                  {p.type}
                </div>
                <h3 className="text-xl font-extrabold text-white mb-1">{p.name}</h3>
                <p className="text-white/40 text-sm mb-6">{p.location} · {p.date}</p>

                <ul className="space-y-3 mb-8">
                  {p.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <span className="text-white/30 w-28 shrink-0">{d.label}</span>
                      <span className="text-white/70 font-medium">{d.value}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-white/8 pt-6">
                  <p className="text-white/60 text-sm leading-relaxed italic">&ldquo;{p.headline}&rdquo;</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research context */}
        <div className="mb-4">
          <motion.h3
            className="text-2xl font-extrabold text-white mb-10 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The science behind the{" "}
            <em className="not-italic italic text-[#FCA5A5]">experience</em>
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {researchContext.map((r, i) => (
              <motion.div
                key={i}
                className="bg-white/5 border border-white/8 rounded-3xl p-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <h4 className="text-[#FCA5A5] font-bold text-sm tracking-wide uppercase mb-4">{r.title}</h4>
                <p className="text-white/55 leading-relaxed text-sm">{r.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

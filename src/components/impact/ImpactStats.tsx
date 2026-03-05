"use client";

import { motion } from "framer-motion";

const topStats = [
  {
    value: "10/10",
    label: "chose math over recess",
    sublabel: "Ellis Elementary Pilot",
    color: "text-[#DC2626]",
    bg: "bg-[#DC2626]/8",
    accent: "border-[#DC2626]/20",
  },
  {
    value: "18%",
    label: "pre → post test gain",
    sublabel: "after just 8 hours of learning",
    color: "text-teal-600",
    bg: "bg-teal-500/8",
    accent: "border-teal-500/20",
  },
  {
    value: "45%",
    label: "jump in median test score",
    sublabel: "in just 3 sessions — BPL Research",
    color: "text-[#0891B2]",
    bg: "bg-[#0891B2]/8",
    accent: "border-[#0891B2]/20",
  },
  {
    value: "86%",
    label: "of students said they loved it",
    sublabel: "and would recommend to a friend",
    color: "text-[#DC2626]",
    bg: "bg-[#DC2626]/8",
    accent: "border-[#DC2626]/20",
  },
];

const outcomeCards = [
  {
    category: "Engagement",
    emoji: "🚀",
    headline: "10/10",
    headlineLabel: "chose math over recess",
    supporting: ["86% said \"Yes\" to enjoying the experience", "Both instructors agreed: 5/5 engagement"],
    color: "text-[#DC2626]",
    bg: "from-[#DC2626]/10 to-[#DC2626]/4",
    border: "border-[#DC2626]/15",
  },
  {
    category: "Regulation & Behavior",
    emoji: "🧘",
    headline: "0",
    headlineLabel: "classroom removals over 11 VR sessions",
    supporting: ["Both instructors rated regulation improvements: 4/5", "Students stayed calm — even on non-VR days"],
    color: "text-teal-600",
    bg: "from-teal-500/10 to-teal-500/4",
    border: "border-teal-500/15",
  },
  {
    category: "Learning & Exposure",
    emoji: "📈",
    headline: "18%",
    headlineLabel: "pre vs. post test gain",
    supporting: ["86% said \"Yes\" to learning a lot", "Students reached algebra concepts in 8 hrs"],
    color: "text-[#0891B2]",
    bg: "from-[#0891B2]/10 to-[#0891B2]/4",
    border: "border-[#0891B2]/15",
  },
  {
    category: "Growth Mindset",
    emoji: "💡",
    headline: "18%",
    headlineLabel: "increase in believing they can improve",
    supporting: ["Students went from \"bored + afraid\" to curious", "Unprompted: \"Wait — that was algebra?\""],
    color: "text-[#DC2626]",
    bg: "from-[#DC2626]/10 to-[#DC2626]/4",
    border: "border-[#DC2626]/15",
  },
  {
    category: "Educator Rating",
    emoji: "⭐",
    headline: "10/10",
    headlineLabel: "rated MathSTAR \"Extremely Helpful\"",
    supporting: ["5/5 — fit perfectly into classroom routine", "5/5 — would recommend for similar classrooms"],
    color: "text-teal-600",
    bg: "from-teal-500/10 to-teal-500/4",
    border: "border-teal-500/15",
  },
  {
    category: "Access",
    emoji: "🔑",
    headline: "17/21",
    headlineLabel: "scored in-game — invisible on paper tests",
    supporting: ["Especially powerful for EI & IEP students", "\"They need ACCESS to something like this.\""],
    color: "text-[#0891B2]",
    bg: "from-[#0891B2]/10 to-[#0891B2]/4",
    border: "border-[#0891B2]/15",
  },
];

export default function ImpactStats() {
  return (
    <section className="relative pb-28 px-6 lg:px-16 bg-[#FFF5F5] overflow-hidden">

      {/* Dark → light gradient transition from hero above */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #0D0B12 0%, #FFF5F5 100%)",
        }}
      />

      <div className="relative pt-32">

      <div className="absolute top-[-5%] right-[-8%] w-[500px] h-[500px] bg-[#DC2626]/12 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-8%] w-[450px] h-[450px] bg-[#0891B2]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Top headline stats */}
        <div className="text-center mb-16">
          <motion.p
            className="text-[#DC2626] font-semibold text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            By the Numbers
          </motion.p>
          <motion.h2
            className="text-4xl lg:text-[3.25rem] font-extrabold text-ink leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The kids are sold.{" "}
            <em className="not-italic italic text-[#0891B2]">The data agrees.</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {topStats.map((s, i) => (
            <motion.div
              key={i}
              className={`rounded-3xl p-8 border ${s.accent} ${s.bg} text-center`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className={`text-5xl font-extrabold mb-2 ${s.color}`}>{s.value}</div>
              <div className="text-ink font-bold text-sm leading-snug mb-1">{s.label}</div>
              <div className="text-ink/45 text-xs leading-relaxed">{s.sublabel}</div>
            </motion.div>
          ))}
        </div>

        {/* Outcome category breakdown */}
        <div className="text-center mb-12">
          <motion.h3
            className="text-2xl lg:text-3xl font-extrabold text-ink"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Every outcome area.{" "}
            <em className="not-italic italic text-[#DC2626]">All of them moved.</em>
          </motion.h3>
          <motion.p
            className="text-ink/50 text-sm mt-3 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            From the Ellis Elementary pilot — 4th grade students with ADHD, Autism, EI, and Intellectual Disability
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {outcomeCards.map((card, i) => (
            <motion.div
              key={i}
              className={`rounded-3xl p-8 border ${card.border} bg-gradient-to-br ${card.bg} relative overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="text-2xl">{card.emoji}</span>
                <span className={`text-xs font-bold tracking-widest uppercase ${card.color}`}>{card.category}</span>
              </div>
              <div className={`text-5xl font-extrabold mb-1 ${card.color}`}>{card.headline}</div>
              <div className="text-ink font-semibold text-sm leading-snug mb-5">{card.headlineLabel}</div>
              <ul className="space-y-2">
                {card.supporting.map((s, j) => (
                  <li key={j} className="flex items-start gap-2 text-ink/60 text-xs leading-relaxed">
                    <span className={`font-bold shrink-0 mt-0.5 ${card.color}`}>—</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Source note */}
        <motion.p
          className="text-center text-ink/35 text-xs mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Ellis pilot: 4-week MTSS program, 10 students, Success Bound Academy · 45% test score stat from Northeastern University &amp; Boston Public Library IRB-approved research
        </motion.p>

      </div>
      </div>
    </section>
  );
}

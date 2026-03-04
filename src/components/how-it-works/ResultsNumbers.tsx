"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "10/10",
    label: "chose math over recess",
    sub: "Ellis Elementary Pilot",
    color: "text-[#7030A0]",
    border: "border-[#7030A0]/20",
    bg: "bg-[#7030A0]/8",
  },
  {
    value: "+18%",
    label: "pre → post test gain",
    sub: "after just 8 hours of learning",
    color: "text-[#0891B2]",
    border: "border-[#0891B2]/20",
    bg: "bg-[#0891B2]/8",
  },
  {
    value: "45%",
    label: "jump in median test score",
    sub: "in just 3 sessions — BPL Research",
    color: "text-[#0891B2]",
    border: "border-[#0891B2]/20",
    bg: "bg-[#0891B2]/8",
  },
  {
    value: "86%",
    label: "said they loved it",
    sub: "and would recommend to a friend",
    color: "text-[#7030A0]",
    border: "border-[#7030A0]/20",
    bg: "bg-[#7030A0]/8",
  },
];

const outcomeCards = [
  {
    emoji: "🚀",
    category: "Engagement",
    headline: "10/10",
    headlineLabel: "chose math over recess",
    supporting: ["86% said \"Yes\" to enjoying the experience", "Both instructors agreed: 5/5 engagement"],
    color: "#7030A0",
    bg: "from-[#7030A0]/10 to-[#7030A0]/4",
    border: "border-[#7030A0]/15",
  },
  {
    emoji: "🧘",
    category: "Regulation & Behavior",
    headline: "0",
    headlineLabel: "classroom removals over 11 VR sessions",
    supporting: ["Both instructors rated regulation improvements: 4/5", "Students stayed calm — even on non-VR days"],
    color: "#0891B2",
    bg: "from-[#0891B2]/10 to-[#0891B2]/4",
    border: "border-[#0891B2]/15",
  },
  {
    emoji: "📈",
    category: "Learning & Exposure",
    headline: "18%",
    headlineLabel: "pre vs. post test gain",
    supporting: ["86% said \"Yes\" to learning a lot", "Students reached algebra concepts in 8 hrs"],
    color: "#7030A0",
    bg: "from-[#7030A0]/10 to-[#7030A0]/4",
    border: "border-[#7030A0]/15",
  },
  {
    emoji: "💡",
    category: "Growth Mindset",
    headline: "18%",
    headlineLabel: "increase in believing they can improve",
    supporting: ["Students went from \"bored + afraid\" to curious", "Unprompted: \"Wait — that was algebra?\""],
    color: "#0891B2",
    bg: "from-[#0891B2]/10 to-[#0891B2]/4",
    border: "border-[#0891B2]/15",
  },
  {
    emoji: "⭐",
    category: "Educator Rating",
    headline: "10/10",
    headlineLabel: "rated MathSTAR \"Extremely Helpful\"",
    supporting: ["5/5 — fit perfectly into classroom routine", "5/5 — would recommend for similar classrooms"],
    color: "#7030A0",
    bg: "from-[#7030A0]/10 to-[#7030A0]/4",
    border: "border-[#7030A0]/15",
  },
  {
    emoji: "🔑",
    category: "Access",
    headline: "17/21",
    headlineLabel: "scored in-game — invisible on paper tests",
    supporting: ["Especially powerful for EI & IEP students", "\"They need ACCESS to something like this.\""],
    color: "#0891B2",
    bg: "from-[#0891B2]/10 to-[#0891B2]/4",
    border: "border-[#0891B2]/15",
  },
];

export default function ResultsNumbers() {
  return (
    <section className="relative py-28 px-6 lg:px-20 bg-[#F7F2FF] overflow-hidden">

      <div className="absolute top-[-5%] right-[-8%] w-[500px] h-[500px] bg-[#7030A0]/12 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-8%] w-[450px] h-[450px] bg-[#0891B2]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            By the Numbers
          </motion.p>
          <motion.h2
            className="text-4xl lg:text-[3.25rem] font-extrabold text-[#0D0B12] leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The kids are sold.{" "}
            <em className="not-italic italic text-[#0891B2]">The data agrees.</em>
          </motion.h2>
        </div>

        {/* Headline stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className={`rounded-3xl p-8 border ${s.border} ${s.bg} text-center`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className={`text-5xl font-extrabold mb-2 ${s.color}`}>{s.value}</div>
              <div className="text-[#0D0B12] font-bold text-sm leading-snug mb-1">{s.label}</div>
              <div className="text-[#0D0B12]/45 text-xs leading-relaxed">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Outcome breakdown */}
        <div className="text-center mb-12">
          <motion.h3
            className="text-2xl lg:text-3xl font-extrabold text-[#0D0B12]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Every outcome area.{" "}
            <em className="not-italic italic text-[#7030A0]">All of them moved.</em>
          </motion.h3>
          <motion.p
            className="text-[#0D0B12]/50 text-sm mt-3 max-w-xl mx-auto"
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
              className={`rounded-3xl p-8 border ${card.border} bg-gradient-to-br ${card.bg}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="text-2xl">{card.emoji}</span>
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: card.color }}>{card.category}</span>
              </div>
              <div className="text-5xl font-extrabold mb-1" style={{ color: card.color }}>{card.headline}</div>
              <div className="text-[#0D0B12] font-semibold text-sm leading-snug mb-5">{card.headlineLabel}</div>
              <ul className="space-y-2">
                {card.supporting.map((s, j) => (
                  <li key={j} className="flex items-start gap-2 text-[#0D0B12]/60 text-xs leading-relaxed">
                    <span className="font-bold shrink-0 mt-0.5" style={{ color: card.color }}>—</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-[#0D0B12]/35 text-xs mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Ellis pilot: 4-week MTSS program, 10 students, Success Bound Academy · 45% test score stat from Northeastern University &amp; Boston Public Library IRB-approved research
        </motion.p>
      </div>
    </section>
  );
}

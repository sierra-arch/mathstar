"use client";

import { motion } from "framer-motion";

const categories = [
  {
    icon: "⚡",
    color: "text-[#DC2626]",
    bg: "bg-[#DC2626]/8",
    title: "Engagement",
    summary: "Students chose MathSTAR over recess. Every single time.",
    findings: [
      "Students went 20 minutes into recess without noticing because they were engaged",
      "Every student who walked past the classroom asked \"Do we get to play it?!\"",
      "Especially powerful for EI students who struggle to access math in traditional formats",
      "Students demonstrated sustained attention across full sessions without prompting",
    ],
  },
  {
    icon: "🎯",
    color: "text-teal-600",
    bg: "bg-teal-500/8",
    title: "Regulation & Behavior",
    summary: "VR on the horizon changed how students showed up — all week.",
    findings: [
      "\"When they know VR is on the line, they behave.\" — Classroom teacher",
      "Strong indicators around student regulation, time-on-task, and overall engagement",
      "Excitement and motivation elevated before, during, AND after — even on non-VR days",
      "Students who typically resist structured activities actively sought out MathSTAR time",
    ],
  },
  {
    icon: "📊",
    color: "text-violet-600",
    bg: "bg-violet-500/8",
    title: "Learning & Confidence",
    summary: "Skills appeared that tests had never captured.",
    findings: [
      "One student scored 17/21 on the in-game test — skills that don't show up on paper",
      "\"I noticed that it helped build students' confidence and engagement.\"",
      "Students said \"Wait, that level I just did was algebra?\" — unprompted",
      "Students with IEPs demonstrated math competencies invisible in traditional assessments",
    ],
  },
  {
    icon: "🔁",
    color: "text-[#DC2626]",
    bg: "bg-[#DC2626]/8",
    title: "Transfer & Retention",
    summary: "The learning followed them home — months later.",
    findings: [
      "Students recalled game content during school homework months after the sessions",
      "\"I think it gave students a different way to view math.\" — Classroom teacher",
      "Parents reported children discussing math concepts unprompted at home",
      "Conceptual understanding transferred to new contexts outside the VR experience",
    ],
  },
];

export default function ImpactFindings() {
  return (
    <section className="relative py-40 px-6 lg:px-16 bg-white overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[950px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(252,165,165,0.43) 0%, rgba(220,38,38,0.14) 42%, transparent 68%)" }} />
      <div className="absolute -top-20 -right-16 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(8,145,178,0.22) 0%, transparent 62%)" }} />
      <div className="absolute -bottom-20 -left-16 w-[440px] h-[440px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(127,29,29,0.18) 0%, transparent 62%)" }} />
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(254,242,242,0.86) 0%, transparent 65%)" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.p
            className="text-[#DC2626] font-semibold text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Detailed Findings
          </motion.p>
          <motion.h2
            className="text-4xl lg:text-[3.25rem] font-extrabold text-ink leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Four areas.
            <br />
            <em className="not-italic italic text-[#DC2626]">All of them moved.</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((c, i) => (
            <motion.div
              key={i}
              className="bg-[#FFF5F5] rounded-3xl p-10 border border-[#DC2626]/8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{c.icon}</span>
                <span className={`font-bold text-sm tracking-widest uppercase ${c.color}`}>{c.title}</span>
              </div>
              <p className="text-ink font-semibold text-base mb-6 leading-snug">{c.summary}</p>
              <ul className="space-y-3">
                {c.findings.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-ink/65 text-sm leading-relaxed">
                    <span className={`font-bold mt-0.5 shrink-0 ${c.color}`}>—</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

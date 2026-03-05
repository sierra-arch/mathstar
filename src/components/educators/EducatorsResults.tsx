"use client";

import { motion } from "framer-motion";

const results = [
  {
    category: "Engagement",
    icon: "⚡",
    findings: [
      "Students went 20 minutes into recess without noticing",
      "Every student who walked past the classroom asked: \"Do we get to play it?!\"",
      "Especially powerful for EI students who struggle with traditional formats",
    ],
  },
  {
    category: "Regulation & Behavior",
    icon: "🎯",
    findings: [
      "\"When they know VR is on the line, they behave.\"",
      "Strong indicators around student regulation, time-on-task, and overall engagement",
      "Excitement and motivation up before, during, AND after — even on non-VR days",
    ],
  },
  {
    category: "Learning & Confidence",
    icon: "📊",
    findings: [
      "One student scored 17/21 on the in-game test — skills that don't show up on paper",
      "\"I noticed that it helped build students' confidence and engagement.\"",
      "Students saying: \"Wait, that level I just did was algebra?\"",
    ],
  },
  {
    category: "Transfer",
    icon: "🔁",
    findings: [
      "Students remembering game content months later during school homework",
      "\"I think it gave students a different way to view math.\"",
      "Parents reporting unprompted recall of concepts from the VR sessions",
    ],
  },
];

export default function EducatorsResults() {
  return (
    <section className="relative py-40 px-6 lg:px-16 bg-[#F7F2FF] overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(196,159,220,0.48) 0%, rgba(112,48,160,0.15) 42%, transparent 68%)" }} />
      <div className="absolute -top-16 -left-16 w-[480px] h-[480px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(8,145,178,0.20) 0%, transparent 62%)" }} />
      <div className="absolute -bottom-20 -right-16 w-[420px] h-[420px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(74,30,107,0.18) 0%, transparent 62%)" }} />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(240,230,247,0.88) 0%, transparent 65%)" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.p
            className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Pilot Results
          </motion.p>
          <motion.h2
            className="text-4xl lg:text-[3.25rem] font-extrabold text-ink leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What teachers and administrators
            <br />
            <em className="not-italic italic text-[#7030A0]">observed in the pilots</em>
          </motion.h2>
          <motion.p
            className="text-ink/50 text-lg mt-5 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            From the Roxbury Public Library Pilot (Aug 2025) and Ellis Elementary School, Boston Public Schools (Jan 2026)
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {results.map((r, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-3xl p-10 border border-[#7030A0]/8 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <div className="flex items-center gap-3 mb-7">
                <span className="text-3xl">{r.icon}</span>
                <span className="text-[#7030A0] font-bold text-sm tracking-widest uppercase">{r.category}</span>
              </div>
              <ul className="space-y-4">
                {r.findings.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-ink/70 leading-relaxed">
                    <span className="text-[#7030A0] font-bold mt-0.5 shrink-0">—</span>
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

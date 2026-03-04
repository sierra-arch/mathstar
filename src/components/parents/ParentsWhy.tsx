"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    icon: "🐠",
    title: "They choose it over recess",
    desc: "Not an exaggeration. Kids go 20 minutes into recess without noticing. When math feels like play, they never want to stop.",
  },
  {
    icon: "🧠",
    title: "It sticks — even months later",
    desc: "Parents tell us their kids come home from school and say \"I remember this from the VR game.\" Real transfer. Real retention.",
  },
  {
    icon: "💡",
    title: "It works for every kind of learner",
    desc: "Especially powerful for kids who struggle in traditional formats — kids with IEPs, ADHD, or who learn by doing, not by reading.",
  },
  {
    icon: "📈",
    title: "From arithmetic to algebra in 8 hours",
    desc: "One student scored 17/21 on the in-game test. His teacher said: \"We know he's capable. He just needs ACCESS to something like this.\"",
  },
];

export default function ParentsWhy() {
  return (
    <section className="relative py-40 px-6 lg:px-16 bg-white overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[950px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(196,159,220,0.45) 0%, rgba(112,48,160,0.14) 42%, transparent 68%)" }} />
      <div className="absolute -top-28 -right-20 w-[520px] h-[520px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(8,145,178,0.22) 0%, transparent 62%)" }} />
      <div className="absolute -bottom-20 -left-16 w-[440px] h-[440px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(74,30,107,0.18) 0%, transparent 62%)" }} />
      <div className="absolute top-0 left-1/3 w-[420px] h-[420px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(240,230,247,0.88) 0%, transparent 65%)" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.p
            className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why It Works
          </motion.p>
          <motion.h2
            className="text-4xl lg:text-[3.25rem] font-extrabold text-ink leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            This isn&apos;t another math app.
            <br />
            <em className="not-italic italic text-[#7030A0]">It&apos;s a transformation.</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              className="bg-[#F7F2FF] rounded-3xl p-10 border border-[#7030A0]/8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <div className="text-4xl mb-6">{r.icon}</div>
              <h3 className="text-xl font-bold text-ink mb-3">{r.title}</h3>
              <p className="text-ink/60 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    quote: "What is this best for? Engagement and motivation for the students.",
    who: "Mr. McKinnon",
    role: "Paraprofessional, Ellis Pilot",
    theme: "Engagement",
    accent: "#0891B2",
  },
  {
    quote: "He got 17/21 in the game's test... we know he's capable of this, but it doesn't show up on paper. He needs ACCESS to something like this.",
    who: "Ms. Munroe",
    role: "Teacher, Ellis Pilot",
    theme: "Access",
    accent: "#DC2626",
  },
  {
    quote: "That has been especially powerful for our EI students who struggle to access math in traditional formats.",
    who: "Ms. Cruz",
    role: "School Administrator, Ellis Pilot",
    theme: "EI Students",
    accent: "#0891B2",
  },
  {
    quote: "We are seeing strong indicators around student regulation, time-on-task, and overall engagement.",
    who: "Ms. Cruz",
    role: "School Administrator, Ellis Pilot",
    theme: "Behavior",
    accent: "#0891B2",
  },
  {
    quote: "I think it gave students a different way to view math.",
    who: "Ms. Joseph",
    role: "Teacher, Ellis Pilot",
    theme: "Perspective",
    accent: "#DC2626",
  },
  {
    quote: "I noticed that it helped build students' confidence and engagement.",
    who: "Ms. Joseph",
    role: "Teacher, Ellis Pilot",
    theme: "Confidence",
    accent: "#0891B2",
  },
];

export default function ImpactQuotes() {
  return (
    <section className="relative py-40 px-6 lg:px-16 bg-[#FFF5F5] overflow-hidden">

      <div className="absolute top-[-5%] right-[-8%] w-[500px] h-[500px] bg-[#DC2626]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-8%] w-[450px] h-[450px] bg-[#0891B2]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.p
            className="text-[#DC2626] font-semibold text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Educator Voices
          </motion.p>
          <motion.h2
            className="text-4xl lg:text-[3.25rem] font-extrabold text-ink leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The people in the room —
            <br />
            <em className="not-italic italic text-[#0891B2]">in their own words</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-3xl p-8 shadow-sm flex flex-col"
              style={{ border: `1px solid ${q.accent}18` }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.09 }}
            >
              <div
                className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5 self-start"
                style={{ background: `${q.accent}12`, color: q.accent }}
              >
                {q.theme}
              </div>
              <p className="text-ink text-base font-medium leading-relaxed flex-1 mb-6">
                &ldquo;{q.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-6 h-px" style={{ background: `${q.accent}40` }} />
                <div>
                  <p className="text-ink/70 text-sm font-semibold">{q.who}</p>
                  <p className="text-ink/40 text-xs">{q.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    quote: "What is this best for? Engagement and motivation for the students.",
    who: "Mr. McKinnon",
    role: "Paraprofessional, Ellis Pilot",
  },
  {
    quote: "He got 17/21 in the game's test... we know he's capable of this, but it doesn't show up on paper. He needs ACCESS to something like this.",
    who: "Ms. Munroe",
    role: "Teacher, Ellis Pilot",
  },
  {
    quote: "That has been especially powerful for our EI students who struggle to access math in traditional formats.",
    who: "Ms. Cruz",
    role: "School Administrator, Ellis Pilot",
  },
  {
    quote: "I think it gave students a different way to view math.",
    who: "Ms. Joseph",
    role: "Teacher, Ellis Pilot",
  },
  {
    quote: "We are seeing strong indicators around student regulation, time-on-task, and overall engagement.",
    who: "Ms. Cruz",
    role: "School Administrator, Ellis Pilot",
  },
  {
    quote: "I noticed that it helped build students' confidence and engagement.",
    who: "Ms. Joseph",
    role: "Teacher, Ellis Pilot",
  },
];

export default function EducatorsQuotes() {
  return (
    <section className="relative py-40 px-6 lg:px-16 bg-white overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[950px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(252,165,165,0.44) 0%, rgba(220,38,38,0.14) 42%, transparent 68%)" }} />
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(8,145,178,0.22) 0%, transparent 62%)" }} />
      <div className="absolute -bottom-16 -left-16 w-[430px] h-[430px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(127,29,29,0.18) 0%, transparent 62%)" }} />
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(254,242,242,0.88) 0%, transparent 65%)" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.p
            className="text-[#DC2626] font-semibold text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            From the Classroom
          </motion.p>
          <motion.h2
            className="text-4xl lg:text-[3.25rem] font-extrabold text-ink leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Teachers and administrators
            <br />
            <em className="not-italic italic text-[#DC2626]">in their own words</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              className="bg-[#FFF5F5] rounded-3xl p-8 flex flex-col border border-[#DC2626]/8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.09 }}
            >
              <p className="text-ink text-base font-medium leading-relaxed flex-1 mb-6">
                &ldquo;{q.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-6 h-px bg-[#DC2626]/30" />
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

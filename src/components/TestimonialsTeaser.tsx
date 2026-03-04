"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const picks = [
  {
    quote: "My son came to me yesterday at home and said, 'Mom, maths is my favourite subject now.'",
    who: "Parent",
    context: "Roxbury Library Pilot",
    tag: "Parent",
    accent: "#7030A0",
  },
  {
    quote: "They went 20 minutes into recess and didn't notice.",
    who: "Ms. Joseph, Teacher",
    context: "Ellis Pilot, Jan 2026",
    tag: "Teacher",
    accent: "#0891B2",
  },
  {
    quote: "Wait, that level I just did was algebra?",
    who: "Student",
    context: "Ellis Pilot, Jan 2026",
    tag: "Student",
    accent: "#7030A0",
  },
];

export default function TestimonialsTeaser() {
  return (
    <section className="relative py-40 px-6 lg:px-16 bg-white overflow-hidden">

      {/* Ambient orbs */}
      <div className="absolute top-[-5%] right-[-10%] w-[500px] h-[500px] bg-[#7030A0]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-8%] w-[400px] h-[400px] bg-[#0891B2]/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <motion.p
              className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Real Stories
            </motion.p>
            <motion.h2
              className="text-4xl lg:text-[3.25rem] font-extrabold text-ink leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Parents. Teachers. Kids.
              <br />
              <em className="not-italic italic text-[#0891B2]">All saying the same thing.</em>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-[#7030A0] font-semibold text-lg hover:gap-4 transition-all whitespace-nowrap"
            >
              See all reviews →
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {picks.map((p, i) => (
            <motion.div
              key={i}
              className="relative bg-[#F7F2FF] rounded-3xl p-10 flex flex-col"
              style={{ border: `1px solid ${p.accent}18` }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <span
                className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full mb-6 w-fit"
                style={{ background: `${p.accent}14`, color: p.accent }}
              >
                {p.tag}
              </span>
              <p className="text-ink text-xl font-medium leading-relaxed flex-1 mb-7">
                &ldquo;{p.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-6 h-px" style={{ background: `${p.accent}40` }} />
                <div>
                  <p className="text-ink/60 text-sm font-medium">{p.who}</p>
                  <p className="text-ink/35 text-xs mt-0.5">{p.context}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

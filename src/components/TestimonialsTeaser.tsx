"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const picks = [
  {
    quote: "My son came to me yesterday at home and said, 'Mom, maths is my favourite subject now.'",
    who: "Parent",
    context: "Roxbury Library Pilot",
    tag: "Parent",
  },
  {
    quote: "They went 20 minutes into recess and didn't notice.",
    who: "Ms. Joseph, Teacher",
    context: "Ellis Pilot, Jan 2026",
    tag: "Teacher",
  },
  {
    quote: "Wait, that level I just did was algebra?",
    who: "Student",
    context: "Ellis Pilot, Jan 2026",
    tag: "Student",
  },
];

export default function TestimonialsTeaser() {
  return (
    <section className="py-28 px-6 lg:px-16 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <motion.p
              className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Real Stories
            </motion.p>
            <motion.h2
              className="text-4xl lg:text-5xl font-extrabold text-ink leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Parents. Teachers. Kids.
              <br />
              <em className="not-italic italic text-[#7030A0]">All saying the same thing.</em>
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
              className="inline-flex items-center gap-2 text-[#7030A0] font-semibold text-base hover:gap-3 transition-all whitespace-nowrap"
            >
              See all reviews →
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {picks.map((p, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-3xl p-8 shadow-sm border border-ink/5 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <span className="inline-block text-xs font-semibold bg-[#F8F2FC] text-[#7030A0] px-3 py-1 rounded-full mb-5 w-fit">
                {p.tag}
              </span>
              <p className="text-ink text-lg font-medium leading-relaxed flex-1 mb-5">
                &ldquo;{p.quote}&rdquo;
              </p>
              <div>
                <p className="text-ink/60 text-sm font-medium">{p.who}</p>
                <p className="text-ink/35 text-xs mt-0.5">{p.context}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

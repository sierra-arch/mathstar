"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const allCards = [
  {
    quote: "My son came home and said, 'Mom, maths is my favourite subject now.'",
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
  {
    quote: "I've never seen engagement like this in 15 years of teaching.",
    who: "Teacher",
    context: "Ellis Elementary",
    tag: "Teacher",
    accent: "#0891B2",
  },
  {
    quote: "She asked me to take the headset home. That's never happened.",
    who: "Parent",
    context: "BPL Pilot",
    tag: "Parent",
    accent: "#7030A0",
  },
  {
    quote: "17 out of 21 in the in-game test. They just needed access.",
    who: "Ms. Munroe",
    context: "Ellis Elementary",
    tag: "Teacher",
    accent: "#0891B2",
  },
  {
    quote: "It's the first time math has felt like something I can actually do.",
    who: "Student",
    context: "Boston Public Library",
    tag: "Student",
    accent: "#7030A0",
  },
  {
    quote: "The score jump was real. We saw it happen in real time.",
    who: "Program Lead",
    context: "BPL Summer 2025",
    tag: "Educator",
    accent: "#0891B2",
  },
];

const row1 = allCards.slice(0, 4);
const row2 = allCards.slice(4, 8);

function TestimonialCard({ card }: { card: (typeof allCards)[0] }) {
  return (
    <div
      className="shrink-0 w-[300px] lg:w-[340px] bg-white rounded-2xl p-7 mx-3 border border-[#7030A0]/6"
      style={{ boxShadow: "0 2px 20px rgba(112,48,160,0.06)" }}
    >
      <span
        className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full mb-4"
        style={{ background: `${card.accent}12`, color: card.accent }}
      >
        {card.tag}
      </span>
      <p className="text-[#0D0B12] text-base font-medium leading-relaxed mb-5">
        &ldquo;{card.quote}&rdquo;
      </p>
      <div className="flex items-center gap-2">
        <div className="w-5 h-px" style={{ background: `${card.accent}40` }} />
        <div>
          <p className="text-[#0D0B12]/60 text-sm font-medium">{card.who}</p>
          <p className="text-[#0D0B12]/35 text-xs mt-0.5">{card.context}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsMarquee() {
  return (
    <section className="relative pt-28 pb-32 bg-white overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute top-[-5%] right-[-10%] w-[500px] h-[500px] bg-[#7030A0]/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-8%] w-[400px] h-[400px] bg-[#0891B2]/8 rounded-full blur-[80px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 lg:px-16 mb-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
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
              className="text-4xl lg:text-[3.25rem] font-extrabold text-[#0D0B12] leading-[1.15]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Parents. Teachers. Kids.
              <br />
              <span className="text-[#0891B2]">All saying the same thing.</span>
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
      </div>

      {/* Row 1 — scrolls left */}
      <div className="group mb-4 overflow-hidden">
        <div className="flex animate-marquee">
          {[...row1, ...row1].map((card, i) => (
            <TestimonialCard key={i} card={card} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="group overflow-hidden">
        <div className="flex animate-marquee-reverse">
          {[...row2, ...row2].map((card, i) => (
            <TestimonialCard key={i} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

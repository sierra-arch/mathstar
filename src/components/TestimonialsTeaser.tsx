"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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

// Placeholder for photos coming soon
function PhotoPlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#F7F2FF] to-[#E0F7FA]">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(112,48,160,0.25)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="M8 5V3.5" />
      </svg>
      <span className="text-[#7030A0]/25 text-xs tracking-widest uppercase font-medium">{label}</span>
    </div>
  );
}

export default function TestimonialsTeaser() {
  return (
    <section className="relative py-40 px-6 lg:px-16 bg-white overflow-hidden">

      {/* Ambient orbs */}
      <div className="absolute top-[-5%] right-[-10%] w-[500px] h-[500px] bg-[#7030A0]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-8%] w-[400px] h-[400px] bg-[#0891B2]/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
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

        {/* Quote cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {picks.map((p, i) => (
            <motion.div
              key={i}
              className="relative bg-[#F7F2FF] rounded-3xl p-10 flex flex-col"
              style={{ border: `1px solid ${p.accent}18` }}
              initial={{ opacity: 0, y: 14 }}
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

        {/* Editorial photo strip — 2 moments from the pilots */}
        <motion.div
          className="grid grid-cols-2 gap-3 mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Real photo — classroom joy */}
          <div className="relative h-56 overflow-hidden rounded-2xl">
            <Image
              src="/Stock Images/pexels-julia-m-cameron-4144152.jpg"
              alt="Students experiencing MathSTAR at the pilot"
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />
            <p className="absolute bottom-3 left-4 text-white/70 text-xs font-medium">Roxbury Library, Aug 2025</p>
          </div>

          {/* Real photo — learning breakthrough */}
          <div className="relative h-56 overflow-hidden rounded-2xl">
            <Image
              src="/Stock Images/pexels-vazhnik-7864583.jpg"
              alt="Child having a math breakthrough moment"
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />
            <p className="absolute bottom-3 left-4 text-white/70 text-xs font-medium">Ellis Elementary, Jan 2026</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

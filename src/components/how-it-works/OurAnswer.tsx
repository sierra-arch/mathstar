"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const pillars = [
  {
    title: "Immersive",
    body: "VR puts kids inside math — not across from it. The ocean isn't a metaphor. It's the classroom. Fish multiply and divide before their eyes in real time.",
    color: "#7030A0",
    bg: "from-[#7030A0]/10 to-[#7030A0]/4",
    border: "border-[#7030A0]/15",
  },
  {
    title: "Equitable",
    body: "MathSTAR is available at public libraries, not just private schools. We go where kids are — so access is never the thing standing between a child and wonder.",
    color: "#0891B2",
    bg: "from-[#0891B2]/10 to-[#0891B2]/4",
    border: "border-[#0891B2]/15",
  },
  {
    title: "Evidence-Based",
    body: "Piloted at Ellis Elementary and Boston Public Library with IRB-approved research. We measure everything — engagement, test scores, mindset. The data backs the magic.",
    color: "#7030A0",
    bg: "from-[#7030A0]/10 to-[#7030A0]/4",
    border: "border-[#7030A0]/15",
  },
  {
    title: "Kid-First",
    body: "Designed for joy. For curiosity. For the child who was told they weren't a math person — and proves everyone wrong. Kids choose it over recess. That's the bar we set.",
    color: "#0891B2",
    bg: "from-[#0891B2]/10 to-[#0891B2]/4",
    border: "border-[#0891B2]/15",
  },
];

export default function OurAnswer() {
  return (
    <section className="relative py-36 px-6 lg:px-20 bg-[#F0E6F7] overflow-hidden">

      {/* Fade in/out — avoids stark lines against adjacent white/near-white sections */}
      <div className="absolute top-0 inset-x-0 h-28 pointer-events-none z-10" style={{ background: "linear-gradient(to bottom, white, transparent)" }} />
      <div className="absolute bottom-0 inset-x-0 h-28 pointer-events-none z-10" style={{ background: "linear-gradient(to top, white, transparent)" }} />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(196,159,220,0.30) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-5">
            Our Answer
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0D0B12] leading-tight mb-6">
            Wonder first. Everything else follows.
          </h2>
          <p className="text-[#0D0B12]/60 text-lg leading-relaxed max-w-3xl">
            MathSTAR is an <strong className="text-[#0D0B12]/80">8-hour plug-and-play VR intervention</strong> that moves students from stuck-in-arithmetic to algebra-confident. Deployed in classrooms, after-school programs, and at home — it meets kids wherever they are.
          </p>
          <p className="text-[#0D0B12]/60 text-lg leading-relaxed max-w-3xl mt-4">
            We focus on middle graders with diverse learning styles and Individualized Education Programs (IEPs) — the students most likely to fall through the cracks of a pen-and-paper system.
          </p>
        </motion.div>

        {/* Gameplay video */}
        <motion.div
          className="relative rounded-3xl overflow-hidden mb-16 shadow-2xl shadow-[#7030A0]/10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <video
            src="/Gameplay-edited.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full object-cover max-h-[480px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0620]/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-8 right-8 flex items-end justify-between">
            <div>
              <p className="text-white font-bold text-lg leading-snug">See MathSTAR in action</p>
              <p className="text-white/60 text-sm mt-1">Real gameplay from our pilot programs</p>
            </div>
            <Link
              href="/mathstar"
              className="shrink-0 px-5 py-2.5 rounded-full bg-white/15 border border-white/25 text-white text-sm font-semibold hover:bg-white/25 transition-colors backdrop-blur-sm"
            >
              Learn more →
            </Link>
          </div>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              className={`rounded-3xl p-8 border ${p.border} bg-gradient-to-br ${p.bg}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <h3 className="text-xl font-extrabold mb-3" style={{ color: p.color }}>{p.title}</h3>
              <p className="text-[#0D0B12]/60 text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

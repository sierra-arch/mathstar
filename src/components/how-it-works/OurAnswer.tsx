"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const videoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: videoRef, offset: ["start end", "end start"] });
  const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.03, 1.01]);

  return (
    <section className="relative py-28 px-6 lg:px-20 bg-[#F7F2FF]" style={{ overflowX: "clip" }}>

      {/* Section blobs — clipped horizontally */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(196,159,220,0.30) 0%, transparent 65%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(196,159,220,0.16) 0%, transparent 65%)" }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(8,145,178,0.12) 0%, transparent 70%)" }} />
      </div>

      {/* Bridge blob down — bleeds into ResultsNumbers */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none"
        style={{
          bottom: "-250px",
          background: "radial-gradient(circle, rgba(196,159,220,0.35) 0%, transparent 65%)",
          filter: "blur(120px)",
        }}
      />

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
        <div ref={videoRef} className="mb-16">
        <motion.div
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#7030A0]/15"
          style={{ scale: videoScale }}
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
            className="w-full object-cover max-h-[600px]"
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
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              className={`rounded-3xl p-8 border ${p.border} bg-gradient-to-br ${p.bg}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, type: "spring", stiffness: 100, damping: 18 }}
              whileHover={{
                y: -6,
                boxShadow: `0 20px 60px ${p.color}28`,
                transition: { duration: 0.2 },
              }}
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

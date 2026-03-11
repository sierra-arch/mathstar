"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const moments = [
  {
    time: "Minute 0",
    title: "The headset goes on.",
    desc: "The world around them disappears. No classroom. No homework. No pressure. Just an underwater world, waiting.",
    quote: "It felt like I was actually there. Like the ocean was real.",
    who: "Student, Ellis Pilot",
    color: "#7030A0",
    detail: "Setup takes 90 seconds. No controllers. No downloads. Just the headset — and they're in.",
  },
  {
    time: "Minute 3",
    title: "First fish appear.",
    desc: "Schools of fish swim past. Each one is a number. The ocean is moving, alive — and something about it just makes sense.",
    quote: "The fish started grouping together and I realized — wait, they're making fives.",
    who: "Student, BPL Pilot",
    color: "#0891B2",
    detail: "Before they've processed that this is 'math', the concepts are already forming. The curriculum front-loads wonder.",
  },
  {
    time: "Minute 8",
    title: "Their hands start shaping.",
    desc: "They reach out — bare hands, no controllers. Fish respond. Equations float in mid-air. Movement is the lesson.",
    quote: "I grabbed the fish and they just... stayed where I put them. And then the answer appeared.",
    who: "Student, Ellis Pilot",
    color: "#7030A0",
    detail: "Hand tracking replaces writing. For kids who freeze at pencils and paper, this is the moment everything opens up.",
  },
  {
    time: "Minute 12",
    title: "Something clicks.",
    desc: "You can almost see the exact moment. They pause. They look at their hands. Then they keep going — faster now.",
    quote: "I didn't realize I was doing math. I thought I was just playing.",
    who: "Student, BPL Summer 2025",
    color: "#0891B2",
    detail: "Conceptual understanding happens before the label does. By the time they know it's algebra, the fear never had a chance.",
  },
  {
    time: "Minute 20",
    title: "They forget time.",
    desc: "Recess started 20 minutes ago. They didn't notice. A teacher has to come remind them to take the headset off.",
    quote: "They went 20 minutes into recess and didn't notice.",
    who: "Ms. Joseph, Teacher, Ellis Pilot",
    color: "#7030A0",
    detail: "This is the moment parents and teachers describe as \"never seen before.\" The engagement is not manufactured — it's genuine.",
  },
  {
    time: "After session 1",
    title: "They ask when they can come back.",
    desc: "Not their parent. Not the teacher. The child asks. Unprompted. This is the thing that changes everything.",
    quote: "Maths is my favourite subject now.",
    who: "Student, Roxbury Library Pilot",
    color: "#0891B2",
    detail: "After 3 sessions: 45% score jump. After 8 hours: algebra-confident. But it starts here — with wanting to come back.",
  },
];

export default function SessionWalkthrough() {
  const [current, setCurrent] = useState(0);
  const m = moments[current];

  return (
    <section className="relative py-28 px-6 lg:px-20 bg-[#F7F2FF] overflow-hidden">
      <div className="absolute top-[-5%] right-[-8%] w-[500px] h-[500px] bg-[#7030A0]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-6%] w-[400px] h-[400px] bg-[#0891B2]/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-4">
            The First Session
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0D0B12] leading-tight mb-4">
            Here&apos;s what happens in<br />
            <span className="text-[#7030A0]">the first 20 minutes.</span>
          </h2>
          <p className="text-[#0D0B12]/50 text-lg max-w-xl mx-auto">
            Click through moment by moment.
          </p>
        </motion.div>

        {/* Timeline dots */}
        <div className="flex items-center justify-center gap-0 mb-10">
          {moments.map((mo, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="flex items-center focus:outline-none group"
            >
              <motion.div
                className="w-3 h-3 rounded-full transition-all duration-300 border-2"
                animate={{
                  scale: current === i ? 1.4 : 1,
                  borderColor: current === i ? mo.color : "rgba(112,48,160,0.2)",
                  backgroundColor: current === i ? mo.color : "white",
                }}
              />
              {i < moments.length - 1 && (
                <div
                  className="h-px w-10 lg:w-16 transition-all duration-300"
                  style={{ background: i < current ? "#7030A0" : "rgba(112,48,160,0.15)" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Main card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="rounded-3xl p-8 lg:p-12 bg-white border mb-4"
              style={{ borderColor: `${m.color}18`, boxShadow: `0 4px 40px ${m.color}10` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full"
                  style={{ background: `${m.color}14`, color: m.color }}
                >
                  {m.time}
                </span>
                <div className="flex gap-1">
                  {moments.map((_, i) => (
                    <div
                      key={i}
                      className="h-0.5 rounded-full transition-all duration-500"
                      style={{
                        width: i === current ? "1.5rem" : "0.375rem",
                        background: i <= current ? m.color : `${m.color}20`,
                      }}
                    />
                  ))}
                </div>
              </div>

              <h3
                className="text-3xl lg:text-4xl font-extrabold mb-4 leading-snug"
                style={{ color: m.color }}
              >
                {m.title}
              </h3>
              <p className="text-[#0D0B12]/70 text-lg leading-relaxed mb-8">
                {m.desc}
              </p>

              {/* Quote */}
              <div
                className="rounded-2xl p-6 mb-6"
                style={{ background: `${m.color}06`, borderLeft: `3px solid ${m.color}` }}
              >
                <p className="text-[#0D0B12] text-lg font-semibold leading-relaxed mb-2">
                  &ldquo;{m.quote}&rdquo;
                </p>
                <p className="text-[#0D0B12]/40 text-sm">{m.who}</p>
              </div>

              <p className="text-[#0D0B12]/45 text-sm leading-relaxed">{m.detail}</p>
            </div>

            {/* Prev / Next */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrent(Math.max(0, current - 1))}
                disabled={current === 0}
                className="px-6 py-3 rounded-full font-semibold text-sm border transition-all duration-200 disabled:opacity-25"
                style={{ borderColor: `${m.color}30`, color: m.color }}
              >
                ← Previous
              </button>

              <span className="text-[#0D0B12]/30 text-sm">
                {current + 1} of {moments.length}
              </span>

              {current < moments.length - 1 ? (
                <button
                  onClick={() => setCurrent(current + 1)}
                  className="px-6 py-3 rounded-full font-bold text-sm text-white transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: m.color, boxShadow: `0 4px 20px ${m.color}40` }}
                >
                  Next moment →
                </button>
              ) : (
                <button
                  onClick={() => setCurrent(0)}
                  className="px-6 py-3 rounded-full font-bold text-sm text-white transition-all duration-200"
                  style={{ background: "linear-gradient(135deg, #7030A0, #0891B2)" }}
                >
                  Start over ↺
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stages = [
  {
    id: 0,
    label: "Math terrifies me",
    emoji: "😰",
    color: "#7030A0",
    sessions: "3 sessions",
    desc: "Math anxiety is real — and it's learned. Your child has decided math is something that happens *to* them, not *for* them.",
    quote: "She cries every time we do homework. She says she's stupid.",
    who: "Parent, before MathSTAR",
    shift: "After 3 sessions, fear is replaced by curiosity. Not because MathSTAR is 'fun' — because it removes every moment where failure is visible.",
  },
  {
    id: 1,
    label: "I avoid it when I can",
    emoji: "😶",
    color: "#7030A0",
    sessions: "2–3 sessions",
    desc: "Avoidance is the coping mechanism for kids who've been hurt by math. The 'I don't care' is actually 'I'm protecting myself.'",
    quote: "They go quiet the moment math comes up. Like they're not even there.",
    who: "Teacher, Ellis Elementary",
    shift: "When math becomes an underwater world with no stakes, the avoidance dissolves. There's nothing to protect themselves from.",
  },
  {
    id: 2,
    label: "I struggle through it",
    emoji: "😤",
    color: "#0891B2",
    sessions: "1–2 sessions",
    desc: "They're trying. They show up. But the medium isn't working — not the content, not the kid.",
    quote: "He does every worksheet. He just can't retain it. Pen and paper isn't his way.",
    who: "Parent, BPL Pilot",
    shift: "Visual + spatial + hands-on = the combination that unlocks math for kids who struggle on paper. Usually in the first session.",
  },
  {
    id: 3,
    label: "Math is okay",
    emoji: "😐",
    color: "#0891B2",
    sessions: "1 session",
    desc: "They're managing. But they're not *feeling* it. There's no spark. No \"wait, this is actually interesting.\"",
    quote: "She's fine in math. I just want her to love it, not just pass it.",
    who: "Parent, Roxbury Pilot",
    shift: "Bored kids become the most obsessed MathSTAR players. The underwater world gives them something school never did: a reason to care.",
  },
  {
    id: 4,
    label: "Math is my favourite",
    emoji: "🌟",
    color: "#7030A0",
    sessions: "Already there",
    desc: "This is where MathSTAR leaves every student — not just liking math, but choosing it. Over recess.",
    quote: "Maths is my favourite subject now.",
    who: "Student, Roxbury Library Pilot",
    shift: "10/10 students rated MathSTAR 10/10. All of them chose it over recess. This is the destination — and it's reachable.",
  },
];

export default function MathFearSpectrum() {
  const [selected, setSelected] = useState(0);
  const stage = stages[selected];

  return (
    <section className="relative py-28 px-6 lg:px-20 bg-white overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(196,159,220,0.18) 0%, transparent 68%)" }} />

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
            The Spectrum
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0D0B12] leading-tight mb-4">
            Where is your child<br />
            <span className="text-[#7030A0]">with math right now?</span>
          </h2>
          <p className="text-[#0D0B12]/50 text-lg max-w-lg mx-auto">
            Tap where they are. See exactly what MathSTAR does from there.
          </p>
        </motion.div>

        {/* Spectrum selector */}
        <div className="relative mb-10">
          {/* Track */}
          <div className="relative h-2 rounded-full mx-6 mb-8"
            style={{ background: "linear-gradient(to right, rgba(112,48,160,0.2), rgba(8,145,178,0.2), rgba(112,48,160,0.3))" }}>
            {/* Filled portion */}
            <motion.div
              className="absolute top-0 left-0 h-full rounded-full"
              style={{ background: "linear-gradient(to right, #7030A0, #0891B2)" }}
              animate={{ width: `${(selected / (stages.length - 1)) * 100}%` }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Stage dots */}
            {stages.map((s, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 focus:outline-none"
                style={{ left: `${(i / (stages.length - 1)) * 100}%` }}
              >
                <motion.div
                  className="w-5 h-5 rounded-full border-2 bg-white transition-colors duration-200"
                  animate={{
                    scale: selected === i ? 1.5 : 1,
                    borderColor: i <= selected ? s.color : "rgba(112,48,160,0.2)",
                    backgroundColor: selected === i ? s.color : "white",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              </button>
            ))}
          </div>

          {/* Labels */}
          <div className="flex justify-between text-xs font-semibold px-3">
            {stages.map((s, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className="flex flex-col items-center gap-1.5 max-w-[70px] lg:max-w-[100px] transition-opacity duration-200"
                style={{ opacity: selected === i ? 1 : 0.45 }}
              >
                <span className="text-xl">{s.emoji}</span>
                <span
                  className="text-center leading-tight"
                  style={{ color: selected === i ? s.color : "#0D0B12" }}
                >
                  {s.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Result panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="rounded-3xl p-8 lg:p-10 border"
              style={{ background: `${stage.color}06`, borderColor: `${stage.color}18` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full"
                  style={{ background: `${stage.color}14`, color: stage.color }}
                >
                  {stage.sessions} to transform this
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: their current reality */}
                <div>
                  <p className="text-[#0D0B12]/40 text-xs font-bold tracking-widest uppercase mb-3">Right now</p>
                  <p className="text-[#0D0B12]/75 text-base leading-relaxed mb-6">{stage.desc}</p>
                  <div
                    className="rounded-2xl p-5"
                    style={{ background: "rgba(13,11,18,0.04)", borderLeft: `3px solid ${stage.color}50` }}
                  >
                    <p className="text-[#0D0B12] font-semibold text-base leading-relaxed mb-1.5">
                      &ldquo;{stage.quote}&rdquo;
                    </p>
                    <p className="text-[#0D0B12]/40 text-xs">{stage.who}</p>
                  </div>
                </div>

                {/* Right: what MathSTAR does */}
                <div>
                  <p
                    className="text-xs font-bold tracking-widest uppercase mb-3"
                    style={{ color: stage.color }}
                  >
                    After MathSTAR
                  </p>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: stage.id === 4 ? stage.color : "#0D0B12", opacity: stage.id === 4 ? 1 : 0.75 }}
                  >
                    {stage.shift}
                  </p>

                  {selected < stages.length - 1 && (
                    <button
                      onClick={() => setSelected(selected + 1)}
                      className="mt-6 text-sm font-semibold flex items-center gap-1 transition-colors"
                      style={{ color: stage.color }}
                    >
                      What does the next stage look like? →
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const types = [
  {
    id: "avoider",
    emoji: "🚪",
    label: "The Avoider",
    tagline: "Every homework night is a battle.",
    color: "#7030A0",
    desc: "They've decided math isn't for them. The avoidance isn't laziness — it's self-protection from something that's hurt them before.",
    howItHelps: [
      "No stakes: mistakes happen in private, invisible to everyone",
      "No homework: sessions are experiences, not assignments",
      "No wrong face to make in front of the class",
    ],
    quote: "They go quiet the moment math comes up. Like they disappear.",
    who: "Teacher, Ellis Elementary",
    result: "Avoidance dissolves when there's nothing to protect themselves from.",
  },
  {
    id: "bored",
    emoji: "💤",
    label: "The Bored Genius",
    tagline: "They're not challenged — and they know it.",
    color: "#0891B2",
    desc: "Smart enough to coast, but not engaged enough to grow. They're doing the minimum because nothing has asked more of them.",
    howItHelps: [
      "Algebra concepts arrive in session 1 — no waiting",
      "The puzzle never ends: the ocean keeps expanding",
      "They set their own pace — and they go fast",
    ],
    quote: "Bored kids become the most obsessed MathSTAR players.",
    who: "MathSTAR Pilot Observation",
    result: "Boredom can't survive an underwater world where equations float in mid-air.",
  },
  {
    id: "anxious",
    emoji: "😰",
    label: "The Anxious One",
    tagline: "They freeze the moment they see a test.",
    color: "#7030A0",
    desc: "Math anxiety affects millions of kids. The fear isn't about math — it's about being seen to fail. VR removes the audience.",
    howItHelps: [
      "Mistakes happen in a private world — no one sees",
      "No tests, no grades, no performance pressure",
      "They don't know it's algebra until they're already doing it",
    ],
    quote: "Fear of math meets its match.",
    who: "MathSTAR Learner Profile",
    result: "By the time the fear could kick in, they've already succeeded.",
  },
  {
    id: "adhd",
    emoji: "⚡",
    label: "The Daydreamer",
    tagline: "Hard to keep focused — even when they want to be.",
    color: "#0891B2",
    desc: "ADHD/ADD isn't distraction — it's a mismatch. Their brain is looking for the right input. VR is that input.",
    howItHelps: [
      "Private VR bubble: no classroom noise, no social pressure",
      "Movement IS the lesson — they shape equations with their hands",
      "Instant feedback loop: dopamine-driven engagement",
    ],
    quote: "Students stayed calm — even on non-VR days.",
    who: "Instructor, Ellis Elementary Pilot",
    result: "0 classroom removals over 11 sessions. Behavior regulation: 4/5.",
  },
  {
    id: "dyslexia",
    emoji: "✋",
    label: "The Dyslexic Thinker",
    tagline: "Words trip them up. Ideas don't.",
    color: "#7030A0",
    desc: "Dyslexia and dysgraphia create barriers in a pencil-and-paper world. MathSTAR requires zero writing. That barrier simply doesn't exist.",
    howItHelps: [
      "No writing — ever. Equations shaped mid-air with bare hands",
      "Audio + visual simultaneously: seeing and hearing together",
      "Spatial, tactile thinking rewarded rather than penalized",
    ],
    quote: "No pencils. No worksheets. Just hands, eyes, and wonder.",
    who: "MathSTAR Learner Profile",
    result: "86% said they learned a lot. 86% would recommend to a friend.",
  },
  {
    id: "iep",
    emoji: "📋",
    label: "The IEP Kid",
    tagline: "The system says they're behind. MathSTAR disagrees.",
    color: "#0891B2",
    desc: "IEP students are told — over and over — what they can't do. MathSTAR is built around what they can. The curriculum meets them exactly where they are.",
    howItHelps: [
      "Multi-sensory: seeing, hearing, and touching simultaneously",
      "Self-paced: no timer, no deadline, no comparison",
      "Predictable structure: same world, expanding challenge",
    ],
    quote: "They just needed access to something like this.",
    who: "Instructor, Ellis Elementary Pilot",
    result: "92% of students with learning differences are not proficient in math by 8th grade. MathSTAR exists to change that number.",
  },
];

export default function LearnerTypePicker() {
  const [selected, setSelected] = useState<string | null>(null);
  const current = types.find((t) => t.id === selected);

  return (
    <section className="relative py-28 px-6 lg:px-20 bg-[#F7F2FF] overflow-hidden">
      <div className="absolute top-[-5%] right-[-8%] w-[500px] h-[500px] bg-[#7030A0]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-6%] w-[400px] h-[400px] bg-[#0891B2]/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-4">
            Which kid is yours?
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0D0B12] leading-tight mb-4">
            Every child has a reason<br />
            <span className="text-[#7030A0]">MathSTAR was built for them.</span>
          </h2>
          <p className="text-[#0D0B12]/50 text-lg max-w-lg mx-auto">
            Tap the one that sounds most like your child.
          </p>
        </motion.div>

        {/* Type grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {types.map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() => setSelected(selected === t.id ? null : t.id)}
              className="text-left rounded-2xl p-6 border transition-all duration-200"
              style={
                selected === t.id
                  ? { background: t.color, borderColor: t.color }
                  : { background: "white", borderColor: `${t.color}18` }
              }
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -2 }}
            >
              <div className="text-3xl mb-3">{t.emoji}</div>
              <h3
                className="font-bold text-base leading-snug mb-1 transition-colors"
                style={{ color: selected === t.id ? "white" : "#0D0B12" }}
              >
                {t.label}
              </h3>
              <p
                className="text-sm leading-snug transition-colors"
                style={{ color: selected === t.id ? "rgba(255,255,255,0.75)" : "rgba(13,11,18,0.50)" }}
              >
                {t.tagline}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Detail panel */}
        <AnimatePresence>
          {current && (
            <motion.div
              key={current.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div
                className="rounded-3xl p-8 lg:p-10 border mt-2"
                style={{ background: `${current.color}06`, borderColor: `${current.color}18` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left */}
                  <div>
                    <div className="text-4xl mb-4">{current.emoji}</div>
                    <h3
                      className="text-2xl font-extrabold mb-3"
                      style={{ color: current.color }}
                    >
                      {current.label}
                    </h3>
                    <p className="text-[#0D0B12]/65 text-base leading-relaxed mb-6">
                      {current.desc}
                    </p>

                    {/* How it helps */}
                    <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: current.color }}>
                      How MathSTAR helps
                    </p>
                    <ul className="space-y-2.5">
                      {current.howItHelps.map((h, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-[#0D0B12]/65 leading-relaxed"
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                            style={{ background: current.color }}
                          />
                          {h}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Right */}
                  <div className="flex flex-col justify-between gap-6">
                    <div
                      className="rounded-2xl p-6"
                      style={{ background: "white", border: `1px solid ${current.color}15` }}
                    >
                      <p className="text-[#0D0B12] font-semibold text-base leading-relaxed mb-2">
                        &ldquo;{current.quote}&rdquo;
                      </p>
                      <p className="text-[#0D0B12]/40 text-xs">{current.who}</p>
                    </div>

                    <div
                      className="rounded-2xl p-5"
                      style={{ background: `${current.color}10` }}
                    >
                      <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: current.color }}>
                        The result
                      </p>
                      <p className="text-[#0D0B12]/70 text-sm leading-relaxed">{current.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

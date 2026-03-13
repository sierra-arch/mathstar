"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stories = {
  student: {
    label: "Student",
    color: "#7030A0",
    acts: [
      {
        label: "Before",
        quote: "I hate math. I'm just not a math person.",
        context: "Student, before MathSTAR",
        detail: "Math anxiety affects 93% of students who are behind grade level. Most of them decided they were \"not math people\" before age 10.",
      },
      {
        label: "First session",
        quote: "The fish just... started making sense. I grabbed them and the answer appeared.",
        context: "Student, Ellis Pilot",
        detail: "In the first session, students aren't thinking about math. They're thinking about fish. The concept arrives before the label does.",
      },
      {
        label: "After",
        quote: "Wait, that level I just did was algebra?",
        context: "Student, Ellis Pilot, Jan 2026",
        detail: "After 3 sessions: 45% median score jump. After 8 hours: algebra-confident. After the first breakthrough: everything.",
      },
    ],
  },
  parent: {
    label: "Parent",
    color: "#0891B2",
    acts: [
      {
        label: "Before",
        quote: "My daughter cries every time we do homework. She says she's stupid.",
        context: "Parent, before MathSTAR",
        detail: "Homework battles are the #1 frustration for parents of struggling math students. The problem isn't the child — it's the medium.",
      },
      {
        label: "First session",
        quote: "She came out of her room to tell me about the fish. She was excited. That hadn't happened before.",
        context: "Parent, BPL Pilot",
        detail: "The first sign of change is always enthusiasm — not scores. Parents notice a child who *wants* to talk about math for the first time.",
      },
      {
        label: "After",
        quote: "My son came to me and said, 'Mom, maths is my favourite subject now.'",
        context: "Parent, Roxbury Library Pilot",
        detail: "This is the quote that started everything. A parent texting us after the first pilot. Three words that changed how we saw our mission.",
      },
    ],
  },
  teacher: {
    label: "Teacher",
    color: "#7030A0",
    acts: [
      {
        label: "Before",
        quote: "They shut down the moment I say 'math time.' Nothing works.",
        context: "Teacher, before MathSTAR",
        detail: "Teachers spend enormous energy re-engaging students who've already decided math isn't for them. That energy belongs elsewhere.",
      },
      {
        label: "First session",
        quote: "I had to physically check if they were okay — they were just focused. Completely focused.",
        context: "Instructor, Ellis Elementary",
        detail: "0 classroom removals over 11 VR sessions. Behavior regulation scores of 4/5. Not because MathSTAR manages behavior — because it earns it.",
      },
      {
        label: "After",
        quote: "They went 20 minutes into recess and didn't notice. I've been teaching 15 years.",
        context: "Ms. Joseph, Ellis Pilot, Jan 2026",
        detail: "When a veteran teacher says they've never seen engagement like this, it means something. The data confirms it. So does the smile on their face.",
      },
    ],
  },
};

type Tab = keyof typeof stories;

export default function BreakthroughStory() {
  const [tab, setTab] = useState<Tab>("student");
  const [act, setAct] = useState(0);
  const story = stories[tab];
  const current = story.acts[act];

  const handleTabChange = (t: Tab) => {
    setTab(t);
    setAct(0);
  };

  return (
    <section className="relative py-28 px-6 lg:px-20 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #1a0840 0%, #0c1a35 50%, #0d1f30 100%)" }}>

      <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] bg-[#7030A0]/25 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-[#0891B2]/20 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#C49FDC] font-semibold text-sm tracking-widest uppercase mb-4">
            The Breakthrough
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            One experience.{" "}
            <em className="not-italic italic text-[#C49FDC]">Three perspectives.</em>
          </h2>
        </motion.div>

        {/* Tab selector */}
        <div className="flex justify-center gap-2 mb-10">
          {(Object.keys(stories) as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => handleTabChange(t)}
              className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 capitalize"
              style={
                tab === t
                  ? { background: stories[t].color, color: "white" }
                  : { background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.55)" }
              }
            >
              {stories[t].label}
            </button>
          ))}
        </div>

        {/* Story card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${tab}-${act}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl p-8 lg:p-12"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: `1px solid ${story.color}25`,
              boxShadow: `0 0 60px ${story.color}10`,
            }}
          >
            <div
              className="text-xs font-bold tracking-widest uppercase mb-6 inline-block px-4 py-1.5 rounded-full"
              style={{ background: `${story.color}18`, color: story.color }}
            >
              {current.label}
            </div>

            <p className="text-white text-2xl lg:text-3xl font-semibold leading-relaxed mb-4">
              &ldquo;{current.quote}&rdquo;
            </p>
            <p className="text-white/40 text-sm mb-8">{current.context}</p>
            <p className="text-white/50 text-base leading-relaxed border-t border-white/8 pt-6">
              {current.detail}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Next act nudge */}
        {act < story.acts.length - 1 && (
          <motion.div className="text-center mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <button
              onClick={() => setAct(act + 1)}
              className="text-sm font-semibold transition-colors"
              style={{ color: `${story.color}80` }}
            >
              Then what happened? →
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

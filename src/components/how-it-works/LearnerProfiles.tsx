"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const profiles = [
  {
    id: "adhd",
    label: "ADHD / ADD",
    color: "#7030A0",
    tagline: "A world built for the way their brain actually works.",
    howItHelps: [
      {
        title: "Zero Distractions",
        body: "VR creates a private bubble. No classroom noise, no social pressure, no one watching. Just them and the math.",
      },
      {
        title: "Body-First Learning",
        body: "They shape equations with their hands. Movement is the lesson — no sitting still required.",
      },
      {
        title: "Instant Feedback Loop",
        body: "Every action gets an immediate response. The dopamine loop that keeps ADHD minds locked in.",
      },
    ],
    stats: [
      { value: "0", label: "classroom removals over 11 VR sessions" },
      { value: "4/5", label: "behavior regulation improvement — instructor rating" },
    ],
    quote: {
      text: "Students stayed calm — even on non-VR days.",
      who: "Instructor",
      context: "Ellis Elementary Pilot",
    },
  },
  {
    id: "dyslexia",
    label: "Dyslexia / Dysgraphia",
    color: "#0891B2",
    tagline: "No pencils. No worksheets. Just hands, eyes, and wonder.",
    howItHelps: [
      {
        title: "No Writing Required",
        body: "Equations are shaped in mid-air with bare hands. Dysgraphia is not a barrier here — it never comes up.",
      },
      {
        title: "Audio + Visual Together",
        body: "Every concept is narrated and shown simultaneously. Seeing and hearing it beats reading it alone, every time.",
      },
      {
        title: "Tactile Understanding",
        body: "Students who struggle on paper often excel in VR — because their strength has always been hands-on thinking.",
      },
    ],
    stats: [
      { value: "86%", label: "of students said they learned a lot" },
      { value: "86%", label: "would recommend MathSTAR to a friend" },
    ],
    quote: {
      text: "Wait, that level I just did was algebra?",
      who: "Student",
      context: "Ellis Pilot, Jan 2026",
    },
  },
  {
    id: "autism",
    label: "Autism Spectrum",
    color: "#6D28D9",
    tagline: "Structured. Predictable. Private. Their kind of world.",
    howItHelps: [
      {
        title: "No Social Exposure",
        body: "The VR world is theirs alone. No unexpected interactions, no peer pressure, no performance anxiety.",
      },
      {
        title: "Consistent Structure",
        body: "Each session follows a clear, predictable arc. The world responds exactly the way they expect it to.",
      },
      {
        title: "Self-Paced Control",
        body: "Students move at their own speed. There's no rushing, no waiting on others — the ocean waits for them.",
      },
    ],
    stats: [
      { value: "0", label: "classroom removals over 11 VR sessions" },
      { value: "4/5", label: "behavior regulation improvement — instructor rating" },
    ],
    quote: {
      text: "They need ACCESS to something like this.",
      who: "Instructor",
      context: "Ellis Elementary Pilot",
    },
  },
  {
    id: "anxiety",
    label: "Math Anxiety",
    color: "#0E7490",
    tagline: "When math feels like a game, fear doesn't stand a chance.",
    howItHelps: [
      {
        title: "Mistakes Happen in Private",
        body: "No raised hands, no wrong answers in front of the class. The VR world absorbs every mistake without judgment.",
      },
      {
        title: "Progress Disguised as Play",
        body: "Students don't realize they're doing algebra until they already are. The fear never gets a chance to kick in.",
      },
      {
        title: "Mindset Shifts Fast",
        body: "Students who came in bored and afraid left curious. Growth mindset scores improved 18% in just 8 hours.",
      },
    ],
    stats: [
      { value: "+18%", label: "increase in growth mindset scores" },
      { value: "+18%", label: "pre → post test score gain" },
    ],
    quote: {
      text: "My son came to me and said, 'Mom, maths is my favourite subject now.'",
      who: "Parent",
      context: "Roxbury Library Pilot",
    },
  },
  {
    id: "ell",
    label: "English Learners",
    color: "#4A1E6B",
    tagline: "Math speaks every language. So does MathSTAR.",
    howItHelps: [
      {
        title: "Multi-Language Subtitles",
        body: "On-screen guidance appears in the student's language. They read along in their own words.",
      },
      {
        title: "Spoken Audio Narration",
        body: "Step-by-step voice instructions mean reading is never a requirement. The world talks them through it.",
      },
      {
        title: "Visual-First Design",
        body: "Fish multiply in front of their eyes. The ocean world communicates through visuals — language is never the barrier.",
      },
    ],
    stats: [
      { value: "86%", label: "said they learned a lot — including ELL students" },
      { value: "10/10", label: "educator rating — fit for diverse classrooms" },
    ],
    quote: {
      text: "They went 20 minutes into recess and didn't notice.",
      who: "Ms. Joseph, Teacher",
      context: "Ellis Pilot, Jan 2026",
    },
  },
  {
    id: "iep",
    label: "IEP Students",
    color: "#155E75",
    tagline: "Designed specifically for the students the system forgets.",
    howItHelps: [
      {
        title: "Built for Learning Differences",
        body: "Every mechanic was designed with IEP students in mind — not retrofitted, not accommodated. Built for them first.",
      },
      {
        title: "In-Game Assessment Reveals Hidden Potential",
        body: "17 of 21 students scored in-game — but were invisible on standard paper tests. MathSTAR sees what the system misses.",
      },
      {
        title: "IRB-Approved Research",
        body: "Piloted at Ellis Elementary with 4th graders diagnosed with ADHD, Autism, EI, and Intellectual Disability. The data is real.",
      },
    ],
    stats: [
      { value: "17/21", label: "scored in-game — invisible on paper tests" },
      { value: "45%", label: "jump in median test score — BPL Research" },
    ],
    quote: {
      text: "They need ACCESS to something like this.",
      who: "Instructor",
      context: "Ellis Elementary Pilot",
    },
  },
];

export default function LearnerProfiles() {
  const [active, setActive] = useState(profiles[0].id);
  const current = profiles.find((p) => p.id === active)!;

  return (
    <section className="relative py-28 px-6 lg:px-20 bg-[#F7F2FF] overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(196,159,220,0.28) 0%, transparent 68%)" }} />
      <div className="absolute -top-16 -right-16 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(8,145,178,0.12) 0%, transparent 62%)" }} />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Is MathSTAR Right for My Student?
          </motion.p>
          <motion.h2
            className="text-4xl lg:text-5xl font-extrabold text-[#0D0B12] leading-tight mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Every learner has a way in.
          </motion.h2>
          <motion.p
            className="text-[#0D0B12]/55 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            MathSTAR was built for students who learn differently. Select a learner profile to see exactly how the game works for them — and what the research shows.
          </motion.p>
        </div>

        {/* File-folder tab bar */}
        <div className="overflow-x-auto pb-0 -mb-px">
          <div className="flex gap-1.5 min-w-max px-1">
            {profiles.map((p, i) => {
              const isActive = active === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  className="relative px-5 py-3 rounded-t-2xl text-xs font-bold tracking-wide whitespace-nowrap border border-b-0 transition-all duration-200 focus:outline-none"
                  style={{
                    background: isActive ? "white" : p.color,
                    color: isActive ? p.color : "rgba(255,255,255,0.92)",
                    borderColor: isActive ? `${p.color}30` : "transparent",
                    zIndex: isActive ? 20 : 10 - i,
                    transform: isActive ? "translateY(0)" : "translateY(3px)",
                    boxShadow: isActive
                      ? `0 -4px 16px ${p.color}20`
                      : "none",
                  }}
                >
                  {/* Number badge */}
                  <span
                    className="inline-block text-[9px] font-black mr-1.5 opacity-60"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {p.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content card — folder body */}
        <div
          className="relative z-10 bg-white rounded-b-3xl rounded-tr-3xl border p-8 lg:p-10 shadow-sm"
          style={{ borderColor: `${current.color}25` }}
        >
          {/* Colored left accent bar */}
          <div
            className="absolute left-0 top-8 bottom-8 w-1 rounded-full transition-colors duration-300"
            style={{ background: current.color }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-8 pl-4"
            >
              {/* Left — how it helps */}
              <div className="lg:col-span-3 space-y-4">
                <p
                  className="text-lg font-bold leading-snug mb-5"
                  style={{ color: current.color }}
                >
                  {current.tagline}
                </p>
                {current.howItHelps.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-5 border"
                    style={{ borderColor: `${current.color}18`, background: `${current.color}05` }}
                  >
                    <p className="font-extrabold text-[#0D0B12] mb-1.5 text-sm">{item.title}</p>
                    <p className="text-[#0D0B12]/60 text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>

              {/* Right — stats + quote */}
              <div className="lg:col-span-2 flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3">
                  {current.stats.map((s, i) => (
                    <div
                      key={i}
                      className="rounded-2xl p-5 border text-center"
                      style={{ borderColor: `${current.color}20`, background: `${current.color}08` }}
                    >
                      <div
                        className="text-3xl font-extrabold mb-1"
                        style={{ color: current.color }}
                      >
                        {s.value}
                      </div>
                      <div className="text-[#0D0B12]/55 text-xs leading-snug">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div
                  className="rounded-2xl p-6 border flex-1 flex flex-col justify-between"
                  style={{ borderColor: `${current.color}18`, background: `${current.color}05` }}
                >
                  <p className="text-[#0D0B12] text-base font-medium leading-relaxed mb-5">
                    &ldquo;{current.quote.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-px" style={{ background: `${current.color}50` }} />
                    <div>
                      <p className="text-[#0D0B12]/65 text-sm font-semibold">{current.quote.who}</p>
                      <p className="text-[#0D0B12]/35 text-xs">{current.quote.context}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

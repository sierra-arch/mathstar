"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const profiles = [
  {
    id: "adhd",
    label: "ADHD / ADD",
    color: "#DC2626",
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
      { value: "4/5", label: "behavior regulation — instructor rating" },
    ],
    quotes: [
      { text: "Students stayed calm — even on non-VR days.", who: "Instructor", context: "Ellis Elementary Pilot" },
      { text: "They need ACCESS to something like this.", who: "Instructor", context: "Ellis Elementary Pilot" },
    ],
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
      { value: "86%", label: "said they learned a lot" },
      { value: "86%", label: "would recommend to a friend" },
    ],
    quotes: [
      { text: "Wait, that level I just did was algebra?", who: "Student", context: "Ellis Pilot, Jan 2026" },
      { text: "They went 20 minutes into recess and didn't notice.", who: "Ms. Joseph, Teacher", context: "Ellis Pilot, Jan 2026" },
    ],
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
      { value: "4/5", label: "behavior regulation — instructor rating" },
    ],
    quotes: [
      { text: "Students stayed calm — even on non-VR days.", who: "Instructor", context: "Ellis Elementary Pilot" },
      { text: "They need ACCESS to something like this.", who: "Instructor", context: "Ellis Elementary Pilot" },
    ],
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
      { value: "+18%", label: "growth mindset increase" },
      { value: "+18%", label: "pre → post test score gain" },
    ],
    quotes: [
      { text: "My son came to me and said, 'Mom, maths is my favourite subject now.'", who: "Parent", context: "Roxbury Library Pilot" },
      { text: "Wait, that level I just did was algebra?", who: "Student", context: "Ellis Pilot, Jan 2026" },
    ],
  },
  {
    id: "deaf",
    label: "Deaf / Hard of Hearing",
    color: "#7F1D1D",
    tagline: "A world that communicates through sight and touch — not just sound.",
    howItHelps: [
      {
        title: "Visual-First Design",
        body: "Every mechanic is built around what students see and do with their hands. The underwater world communicates through motion — sound is never the primary channel.",
      },
      {
        title: "On-Screen Captions & Subtitles",
        body: "Step-by-step guidance appears as text on screen. Deaf and hard-of-hearing students follow along without missing a beat.",
      },
      {
        title: "Gesture-Based Interaction",
        body: "Students shape equations with their bare hands — no verbal responses, no listening required. Their hands are the interface.",
      },
    ],
    stats: [
      { value: "86%", label: "said they learned a lot" },
      { value: "10/10", label: "educator rating for diverse classrooms" },
    ],
    quotes: [
      { text: "They went 20 minutes into recess and didn't notice.", who: "Ms. Joseph, Teacher", context: "Ellis Pilot, Jan 2026" },
      { text: "They need ACCESS to something like this.", who: "Instructor", context: "Ellis Elementary Pilot" },
    ],
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
    quotes: [
      { text: "They need ACCESS to something like this.", who: "Instructor", context: "Ellis Elementary Pilot" },
      { text: "Students stayed calm — even on non-VR days.", who: "Instructor", context: "Ellis Elementary Pilot" },
    ],
  },
];

export default function LearnerProfiles() {
  const [active, setActive] = useState(profiles[0].id);
  const current = profiles.find((p) => p.id === active)!;

  return (
    <section className="relative py-28 px-6 lg:px-20 bg-[#FFF5F5] overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(252,165,165,0.28) 0%, transparent 68%)" }} />
      <div className="absolute -top-16 -right-16 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(8,145,178,0.12) 0%, transparent 62%)" }} />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            className="text-[#DC2626] font-semibold text-sm tracking-widest uppercase mb-4"
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

        {/* Folder tab bar */}
        <div className="flex w-full gap-1">
          {profiles.map((p, i) => {
            const isActive = active === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className="flex-1 relative py-3 px-2 text-center border transition-all duration-200 focus:outline-none"
                style={{
                  background: isActive ? `${p.color}10` : p.color,
                  color: isActive ? p.color : "rgba(255,255,255,0.92)",
                  borderColor: isActive ? `${p.color}30` : "transparent",
                  borderBottom: isActive ? `1px solid ${p.color}10` : `1px solid transparent`,
                  borderRadius: "0.875rem 0.875rem 0 0",
                  zIndex: isActive ? 20 : 10 - i,
                  transform: isActive ? "translateY(0)" : "translateY(3px)",
                  marginBottom: isActive ? "-1px" : "0",
                }}
              >
                <span className="text-xs font-bold tracking-wide whitespace-nowrap leading-none">
                  {p.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content card */}
        <div
          className="relative z-10 rounded-b-3xl rounded-tr-3xl rounded-tl-3xl border overflow-hidden shadow-sm transition-colors duration-300"
          style={{ borderColor: `${current.color}25`, background: `${current.color}10` }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28 }}
              className="grid grid-cols-1 lg:grid-cols-5"
            >
              {/* Left — how it helps */}
              <div className="lg:col-span-3 p-8 lg:p-10 border-r" style={{ borderColor: `${current.color}15` }}>
                <p className="text-base font-bold leading-snug mb-8" style={{ color: current.color }}>
                  {current.tagline}
                </p>
                <div className="space-y-7">
                  {current.howItHelps.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div
                        className="w-1 shrink-0 rounded-full mt-1"
                        style={{ background: `${current.color}40`, minHeight: "100%" }}
                      />
                      <div>
                        <p className="font-extrabold text-[#0D0B12] mb-1 text-sm">{item.title}</p>
                        <p className="text-[#0D0B12]/55 text-sm leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — stats + two quotes */}
              <div className="lg:col-span-2 flex flex-col">

                {/* Stats row */}
                <div
                  className="grid grid-cols-2 border-b"
                  style={{ borderColor: `${current.color}15` }}
                >
                  {current.stats.map((s, i) => (
                    <div
                      key={i}
                      className="p-6 text-center border-r last:border-r-0"
                      style={{ borderColor: `${current.color}15` }}
                    >
                      <div className="text-3xl font-extrabold mb-1" style={{ color: current.color }}>
                        {s.value}
                      </div>
                      <div className="text-[#0D0B12]/50 text-xs leading-snug">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Two quotes stacked */}
                <div className="flex flex-col flex-1 divide-y" style={{ borderColor: `${current.color}15` }}>
                  {current.quotes.map((q, i) => (
                    <div
                      key={i}
                      className="flex-1 p-6 flex flex-col justify-between"
                      style={{ borderColor: `${current.color}15` }}
                    >
                      <p className="text-[#0D0B12]/80 text-sm font-medium leading-relaxed mb-4 italic">
                        &ldquo;{q.text}&rdquo;
                      </p>
                      <div className="flex items-center gap-2.5">
                        <div className="w-4 h-px shrink-0" style={{ background: `${current.color}50` }} />
                        <div>
                          <p className="text-[#0D0B12]/60 text-xs font-semibold">{q.who}</p>
                          <p className="text-[#0D0B12]/30 text-[11px]">{q.context}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

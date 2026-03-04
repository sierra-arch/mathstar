"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const audiences = {
  parent: {
    overline: "Real Pilot Results",
    heading: "Your child's breakthrough is in this data.",
    sub: "These are real kids — 4th graders who struggled with math before MathSTAR. Here's what happened after 8 hours.",
  },
  educator: {
    overline: "Ellis Elementary Pilot Data",
    heading: "The numbers don't lie.",
    sub: "Pre vs. post results across 10 students — 4th graders with ADHD, Autism, EI, and Intellectual Disability.",
  },
};

/* ── Data from Ellis Elementary Pilot ── */
const prePostBars = [
  {
    label: "Test Score",
    sublabel: "avg out of 21 points",
    pre: 9.67,
    post: 11.17,
    max: 21,
    color: "#7030A0",
    gain: "+18%",
  },
  {
    label: "Growth Mindset",
    sublabel: "avg on 3.0 scale",
    pre: 2.43,
    post: 2.86,
    max: 3,
    color: "#0891B2",
    gain: "+18%",
  },
  {
    label: "Math Interest",
    sublabel: "avg on 3.0 scale",
    pre: 2.64,
    post: 2.71,
    max: 3,
    color: "#7030A0",
    gain: "+3%",
  },
];

const studentResponses = [
  { label: "I enjoyed this experience", pct: 86, color: "#7030A0" },
  { label: "I learned a lot", pct: 86, color: "#0891B2" },
  { label: "I would recommend to a friend", pct: 86, color: "#7030A0" },
];

const instructorRatings = [
  { label: "Engagement", value: "4.5 / 5", pct: 90, color: "#7030A0" },
  { label: "Behavior Regulation", value: "4 / 5", pct: 80, color: "#0891B2" },
  { label: "Classroom Fit", value: "5 / 5", pct: 100, color: "#7030A0" },
  { label: "Overall Helpfulness", value: "10 / 10", pct: 100, color: "#0891B2" },
];

function BarPair({
  item,
  index,
}: {
  item: typeof prePostBars[0];
  index: number;
}) {
  const prePct = (item.pre / item.max) * 100;
  const postPct = (item.post / item.max) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="space-y-4"
    >
      <div className="flex items-end justify-between mb-1">
        <div>
          <p className="font-extrabold text-[#0D0B12] text-lg">{item.label}</p>
          <p className="text-[#0D0B12]/40 text-sm">{item.sublabel}</p>
        </div>
        <span
          className="text-sm font-bold px-3 py-1 rounded-full"
          style={{ background: `${item.color}18`, color: item.color }}
        >
          {item.gain}
        </span>
      </div>

      {/* Before */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#0D0B12]/45 font-medium">Before</span>
          <span className="text-[#0D0B12]/55 font-semibold tabular-nums">{item.pre.toFixed(2)}</span>
        </div>
        <div className="h-4 bg-[#0D0B12]/6 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: `${item.color}55` }}
            initial={{ width: 0 }}
            whileInView={{ width: `${prePct}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: index * 0.12 + 0.2, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* After */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold" style={{ color: item.color }}>After</span>
          <span className="font-bold tabular-nums" style={{ color: item.color }}>{item.post.toFixed(2)}</span>
        </div>
        <div className="h-4 bg-[#0D0B12]/6 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: item.color }}
            initial={{ width: 0 }}
            whileInView={{ width: `${postPct}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: index * 0.12 + 0.35, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function ImpactCharts() {
  const [audience, setAudience] = useState<"parent" | "educator">("parent");
  const copy = audiences[audience];

  return (
    <section className="relative py-28 px-6 lg:px-16 bg-white overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[950px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(196,159,220,0.44) 0%, rgba(112,48,160,0.14) 42%, transparent 68%)" }} />
      <div className="absolute -top-20 -right-20 w-[520px] h-[520px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(8,145,178,0.22) 0%, transparent 62%)" }} />
      <div className="absolute -bottom-16 -left-16 w-[440px] h-[440px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(74,30,107,0.18) 0%, transparent 62%)" }} />
      <div className="absolute top-0 left-1/3 w-[420px] h-[420px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(240,230,247,0.88) 0%, transparent 65%)" }} />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Audience toggle */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-1 bg-[#F7F2FF] rounded-full p-1">
            {(["parent", "educator"] as const).map((a) => (
              <button
                key={a}
                onClick={() => setAudience(a)}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                style={
                  audience === a
                    ? { background: "#7030A0", color: "white" }
                    : { color: "#7030A0" }
                }
              >
                {a === "parent" ? "I'm a Parent" : "I'm an Educator"}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Section header */}
        <div className="text-center mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={audience}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-4">
                {copy.overline}
              </p>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0D0B12] leading-tight">
                {copy.heading}
              </h2>
              <p className="text-[#0D0B12]/45 text-lg mt-4 max-w-xl mx-auto">
                {copy.sub}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Pre/Post bars */}
          <div className="space-y-10">
            <h3 className="text-xl font-extrabold text-[#0D0B12]">
              Before vs. After MathSTAR
            </h3>
            {prePostBars.map((item, i) => (
              <BarPair key={item.label} item={item} index={i} />
            ))}
          </div>

          {/* Right: Student responses + instructor */}
          <div className="space-y-12">

            {/* Student responses */}
            <div>
              <h3 className="text-xl font-extrabold text-[#0D0B12] mb-6">
                Student Responses
                <span className="text-[#0D0B12]/35 font-normal text-base ml-2">(out of 3.0 scale)</span>
              </h3>
              <div className="space-y-6">
                {studentResponses.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[#0D0B12]/70 text-base">{item.label}</span>
                      <span className="font-extrabold text-lg" style={{ color: item.color }}>
                        {item.pct}%
                      </span>
                    </div>
                    <div className="h-3.5 bg-[#0D0B12]/6 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: item.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: i * 0.1 + 0.3, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Instructor ratings */}
            <div>
              <h3 className="text-xl font-extrabold text-[#0D0B12] mb-6">
                Instructor Ratings
              </h3>
              <div className="space-y-5">
                {instructorRatings.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 + 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="flex-1 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[#0D0B12]/70 text-base">{item.label}</span>
                        <span className="font-extrabold text-base" style={{ color: item.color }}>
                          {item.value}
                        </span>
                      </div>
                      <div className="h-3 bg-[#0D0B12]/6 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: item.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: i * 0.1 + 0.4, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Source note */}
        <motion.p
          className="text-center text-[#0D0B12]/30 text-sm mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Source: David A. Ellis Elementary School Pilot · 4-week MTSS program · Success Bound Academy · n=10
        </motion.p>
      </div>
    </section>
  );
}

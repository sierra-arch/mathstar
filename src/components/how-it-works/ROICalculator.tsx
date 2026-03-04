"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Pilot-based conversion rates
const SCORE_GAIN_PCT = 0.18;        // 18% pre→post test gain
const MINDSET_GAIN_PCT = 0.18;      // 18% growth mindset increase
const ENGAGEMENT_RATE = 0.86;       // 86% said they loved it
const RECESS_CHOICE_RATE = 1.0;     // 10/10 chose math over recess
const COST_PER_STUDENT = 12;        // estimated cost per student (placeholder)

export default function ROICalculator() {
  const [students, setStudents] = useState(20);
  const [sessions, setSessions] = useState(8);

  const projected = {
    scoreGain: Math.round(students * SCORE_GAIN_PCT),
    engagedKids: Math.round(students * ENGAGEMENT_RATE),
    mindsetShifts: Math.round(students * MINDSET_GAIN_PCT),
    hoursOfLearning: students * sessions,
  };

  return (
    <section className="relative py-28 px-6 lg:px-20 bg-[#F0E6F7] overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(196,159,220,0.35) 0%, transparent 70%)" }} />

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
            For Educators
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0D0B12] leading-tight mb-4">
            What could MathSTAR do for your classroom?
          </h2>
          <p className="text-[#0D0B12]/55 text-lg max-w-2xl mx-auto">
            Based on real pilot data from Ellis Elementary. Adjust the numbers to match your class.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left — sliders */}
          <motion.div
            className="bg-white rounded-3xl p-8 border border-[#7030A0]/10 space-y-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="flex items-end justify-between mb-3">
                <label className="font-bold text-[#0D0B12] text-lg">Number of students</label>
                <span className="text-3xl font-extrabold text-[#7030A0]">{students}</span>
              </div>
              <input
                type="range"
                min={5}
                max={100}
                step={5}
                value={students}
                onChange={(e) => setStudents(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #7030A0 ${((students - 5) / 95) * 100}%, #7030A020 ${((students - 5) / 95) * 100}%)`,
                }}
              />
              <div className="flex justify-between text-xs text-[#0D0B12]/35 mt-1">
                <span>5</span><span>100</span>
              </div>
            </div>

            <div>
              <div className="flex items-end justify-between mb-3">
                <label className="font-bold text-[#0D0B12] text-lg">Hours of MathSTAR</label>
                <span className="text-3xl font-extrabold text-[#0891B2]">{sessions}</span>
              </div>
              <input
                type="range"
                min={3}
                max={24}
                step={1}
                value={sessions}
                onChange={(e) => setSessions(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #0891B2 ${((sessions - 3) / 21) * 100}%, #0891B220 ${((sessions - 3) / 21) * 100}%)`,
                }}
              />
              <div className="flex justify-between text-xs text-[#0D0B12]/35 mt-1">
                <span>3 hrs</span><span>24 hrs</span>
              </div>
            </div>

            <p className="text-[#0D0B12]/40 text-xs leading-relaxed">
              Projections based on Ellis Elementary pilot data (n=10, 4-week MTSS program) and Boston Public Library IRB-approved research.
            </p>
          </motion.div>

          {/* Right — projected outcomes */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              {
                value: `~${projected.scoreGain}`,
                label: "students projected to improve their test score",
                sub: "Based on 18% pre→post gain",
                color: "#7030A0",
                border: "border-[#7030A0]/15",
                bg: "bg-[#7030A0]/6",
              },
              {
                value: `~${projected.engagedKids}`,
                label: "students who will say they loved it",
                sub: "Based on 86% positive engagement rate",
                color: "#0891B2",
                border: "border-[#0891B2]/15",
                bg: "bg-[#0891B2]/6",
              },
              {
                value: `~${projected.mindsetShifts}`,
                label: "students with measurable mindset shifts",
                sub: "Based on 18% growth mindset increase",
                color: "#7030A0",
                border: "border-[#7030A0]/15",
                bg: "bg-[#7030A0]/6",
              },
              {
                value: `${projected.hoursOfLearning.toLocaleString()}`,
                label: "total hours of immersive math learning",
                sub: `${students} students × ${sessions} hours`,
                color: "#0891B2",
                border: "border-[#0891B2]/15",
                bg: "bg-[#0891B2]/6",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`rounded-2xl p-6 border ${item.border} ${item.bg} flex items-center gap-5`}
                layout
                transition={{ duration: 0.25 }}
              >
                <div className="text-4xl font-extrabold shrink-0" style={{ color: item.color }}>
                  {item.value}
                </div>
                <div>
                  <p className="text-[#0D0B12] font-semibold text-sm leading-snug">{item.label}</p>
                  <p className="text-[#0D0B12]/40 text-xs mt-0.5">{item.sub}</p>
                </div>
              </motion.div>
            ))}

            <Link
              href="/contact"
              className="block w-full text-center mt-4 px-8 py-4 rounded-full font-bold text-white text-base bg-[#7030A0] hover:bg-[#4A1E6B] transition-colors"
            >
              Bring MathSTAR to Your Classroom →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

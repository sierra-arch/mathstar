"use client";

import { motion } from "framer-motion";

const researchBadges = [
  { label: "IRB-Approved Research", icon: "🔬" },
  { label: "Northeastern University", icon: "🎓" },
  { label: "Boston Public Library", icon: "📚" },
  { label: "5th–8th Grade", icon: "👧" },
  { label: "~40% on IEP", icon: "♿" },
];

export default function ImpactPilots() {
  return (
    <section className="relative py-40 px-6 lg:px-16 bg-white overflow-hidden">

      <div className="absolute bottom-[-5%] left-[-8%] w-[400px] h-[400px] bg-[#7030A0]/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.p
            className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Pilot Programs
          </motion.p>
          <motion.h2
            className="text-4xl lg:text-[3.25rem] font-extrabold text-ink leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Where we&apos;ve been —
            <br />
            <em className="not-italic italic text-[#7030A0]">and what we found</em>
          </motion.h2>
        </div>

        {/* Pilot 1 — BPL Research */}
        <motion.div
          className="bg-[#F7F2FF] rounded-3xl p-12 lg:p-16 mb-8 border border-[#7030A0]/8 overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left */}
            <div className="lg:col-span-2">
              <div className="inline-block bg-[#7030A0]/10 text-[#7030A0] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5">
                Pilot 01
              </div>
              <h3 className="text-2xl font-extrabold text-ink mb-2">Roxbury Public Library</h3>
              <p className="text-ink/45 text-sm mb-6">Boston, MA · Summer 2025</p>

              {/* Research badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {researchBadges.map((b, i) => (
                  <span key={i} className="flex items-center gap-1.5 bg-white border border-[#7030A0]/12 rounded-full px-3 py-1.5 text-ink/65 text-xs font-medium">
                    <span>{b.icon}</span>
                    {b.label}
                  </span>
                ))}
              </div>

              <p className="text-ink/55 text-sm leading-relaxed">
                In collaboration with Northeastern University, students from the Roxbury area completed a
                benchmark test and survey before and after their MathSTAR sessions — giving us our
                first IRB-approved evidence of impact.
              </p>
            </div>

            {/* Right — Big stat cards */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <motion.div
                className="bg-white rounded-2xl p-8 border border-[#7030A0]/10 flex flex-col justify-between"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-6xl font-extrabold text-[#7030A0] mb-2">45%</div>
                <div className="text-ink font-bold text-base leading-snug mb-2">jump in median test score</div>
                <div className="text-ink/45 text-sm">in just 3 sessions — before vs. after MathSTAR</div>
              </motion.div>

              <motion.div
                className="bg-white rounded-2xl p-8 border border-[#7030A0]/10 flex flex-col justify-between"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-6xl font-extrabold text-teal-600 mb-2">4.4<span className="text-3xl text-teal-400">/5</span></div>
                <div className="text-ink font-bold text-base leading-snug mb-2">average student rating</div>
                <div className="text-ink/45 text-sm">on both engagement and level of learning</div>
              </motion.div>

              <motion.div
                className="sm:col-span-2 bg-[#7030A0] rounded-2xl p-8 text-white flex flex-col justify-between"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="text-lg font-semibold leading-relaxed mb-4 text-white/90">
                  &ldquo;Students reported unprompted recall of math concepts from VR sessions during later homework — months after the program ended.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-px bg-white/40" />
                  <span className="text-white/60 text-sm">Parent feedback, BPL Program</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Pilot 2 — Ellis Elementary */}
        <motion.div
          className="bg-[#0F0620] rounded-3xl p-12 lg:p-16 border border-white/5 overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-[#7030A0]/25 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-6 mb-12">
              <div>
                <div className="inline-block bg-white/10 text-[#C49FDC] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5">
                  Pilot 02
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-2">Ellis Elementary School</h3>
                <p className="text-white/40 text-sm mb-4">David A. Ellis · Success Bound Academy · Boston Public Schools · January 2026</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { icon: "👥", label: "10 Students" },
                    { icon: "🎯", label: "MTSS Block" },
                    { icon: "🧠", label: "ADHD, Autism, EI, Intellectual Disability" },
                    { icon: "📅", label: "4 Weeks · Tue / Thu / Fri" },
                  ].map((b, i) => (
                    <span key={i} className="flex items-center gap-1.5 bg-white/8 border border-white/8 rounded-full px-3 py-1.5 text-white/55 text-xs font-medium">
                      <span>{b.icon}</span>
                      {b.label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-5xl font-extrabold text-[#C49FDC]">10/10</div>
                <div className="text-white/45 text-sm mt-1">educator satisfaction</div>
              </div>
            </div>

            {/* Outcome cards grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
              {[
                { num: "10/10", label: "chose math over recess", color: "text-[#C49FDC]" },
                { num: "18%", label: "pre → post test gain", color: "text-teal-400" },
                { num: "86%", label: "said they enjoyed it", color: "text-[#C49FDC]" },
                { num: "0", label: "classroom removals", color: "text-teal-400" },
                { num: "18%", label: "growth mindset boost", color: "text-[#C49FDC]" },
                { num: "5/5", label: "would recommend", color: "text-teal-400" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  className="bg-white/5 border border-white/8 rounded-2xl p-5 text-center"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                >
                  <div className={`text-3xl font-extrabold mb-1.5 ${s.color}`}>{s.num}</div>
                  <div className="text-white/45 text-xs leading-tight">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Highlight quotes from students */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { quote: "Math is gonna be so fun from now on.", who: "Student" },
                { quote: "Wait, that level I just did was algebra?", who: "Student" },
                { quote: "They went 20 minutes into recess and didn't notice.", who: "Ms. Joseph, Teacher" },
                { quote: "When they know VR is on the line, they behave.", who: "Mr. McKinnon, Paraprofessional" },
              ].map((q, i) => (
                <motion.div
                  key={i}
                  className="bg-white/6 rounded-2xl p-6 border border-white/8"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                >
                  <p className="text-white/80 text-sm leading-relaxed mb-4 font-medium">&ldquo;{q.quote}&rdquo;</p>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-px bg-[#C49FDC]/50" />
                    <span className="text-[#C49FDC]/70 text-xs">{q.who}</span>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

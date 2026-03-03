"use client";

import { motion } from "framer-motion";

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

        {/* Pilot 1 */}
        <motion.div
          className="bg-[#F7F2FF] rounded-3xl p-12 lg:p-16 mb-8 border border-[#7030A0]/8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="inline-block bg-[#7030A0]/10 text-[#7030A0] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5">
                Pilot 01
              </div>
              <h3 className="text-2xl font-extrabold text-ink mb-2">Roxbury Public Library</h3>
              <p className="text-ink/50 text-sm mb-6">Boston, MA · August 2025</p>
              <div className="space-y-3">
                <div className="flex gap-3 text-sm">
                  <span className="text-ink/35 w-24 shrink-0">Setting</span>
                  <span className="text-ink/70 font-medium">Free public library program</span>
                </div>
                <div className="flex gap-3 text-sm">
                  <span className="text-ink/35 w-24 shrink-0">Format</span>
                  <span className="text-ink/70 font-medium">Drop-in VR sessions</span>
                </div>
                <div className="flex gap-3 text-sm">
                  <span className="text-ink/35 w-24 shrink-0">Access</span>
                  <span className="text-ink/70 font-medium">Open community, all ages</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-[#7030A0] font-bold text-sm tracking-widest uppercase mb-6">Key Findings</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Students reported unprompted recall of math concepts from VR sessions during later homework",
                  "Parents noticed children discussing math concepts at home after sessions",
                  "Community members who had never engaged with library STEM programming attended consistently",
                  "Demonstrated proof of concept for library-as-access model for VR math intervention",
                  "Students preferred extended VR time to other free activities",
                  "Showed that no classroom or school setting is required for deep math learning",
                ].map((finding, i) => (
                  <div key={i} className="flex items-start gap-3 text-ink/65 text-sm leading-relaxed">
                    <span className="text-[#7030A0] font-bold mt-0.5 shrink-0">—</span>
                    <span>{finding}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pilot 2 */}
        <motion.div
          className="bg-[#0F0620] rounded-3xl p-12 lg:p-16 border border-white/5 overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-[#7030A0]/25 rounded-full blur-[80px] pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            <div className="lg:col-span-1">
              <div className="inline-block bg-white/10 text-[#C49FDC] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5">
                Pilot 02
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2">Ellis Elementary School</h3>
              <p className="text-white/40 text-sm mb-6">Boston Public Schools · January 2026</p>
              <div className="space-y-3">
                <div className="flex gap-3 text-sm">
                  <span className="text-white/30 w-24 shrink-0">Setting</span>
                  <span className="text-white/65 font-medium">Public school classroom</span>
                </div>
                <div className="flex gap-3 text-sm">
                  <span className="text-white/30 w-24 shrink-0">Students</span>
                  <span className="text-white/65 font-medium">Elementary, incl. EI & IEP</span>
                </div>
                <div className="flex gap-3 text-sm">
                  <span className="text-white/30 w-24 shrink-0">Rating</span>
                  <span className="text-[#C49FDC] font-bold">10/10 educator satisfaction</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-[#C49FDC] font-bold text-sm tracking-widest uppercase mb-6">Key Findings</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Students with EI designations showed the strongest engagement gains of any group",
                  "One student scored 17/21 on the in-game assessment — skills that never appear on paper tests",
                  "Students went 20 minutes into recess without noticing because they were engaged in MathSTAR",
                  "Every student who walked past the classroom asked 'Do we get to play it?!'",
                  "Behavior regulation improved school-wide on VR days — and on non-VR days too",
                  "Teachers reported students saying 'Wait, that level I just did was algebra?' after sessions",
                ].map((finding, i) => (
                  <div key={i} className="flex items-start gap-3 text-white/55 text-sm leading-relaxed">
                    <span className="text-[#C49FDC] font-bold mt-0.5 shrink-0">—</span>
                    <span>{finding}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

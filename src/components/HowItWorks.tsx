"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "Put on the headset",
    desc: "At home or at your local library — no special setup, no downloads, no tech experience needed. Strap in and you're there in seconds.",
    detail: "MathSTAR works with Meta Quest headsets available at participating public libraries and for home use. Setup takes under 2 minutes. No controllers, no cables, no IT department required.",
    accent: "#7030A0",
    visual: (
      <Image
        src="/Stock Images/pexels-tima-miroshnichenko-7047292.jpg"
        alt="Child putting on VR headset"
        width={900}
        height={560}
        className="w-full h-full object-cover object-center"
      />
    ),
    placeholder: false,
  },
  {
    num: "02",
    title: "Enter the underwater world",
    desc: "No controllers — just their hands. Fish multiply before their eyes. They reach out and shape equations in mid-air.",
    detail: "The moment the headset goes on, they're underwater. Schools of fish swim past, each one a number waiting to be discovered. Students use their bare hands to grab, arrange, and solve — the ocean responds to every move.",
    accent: "#0891B2",
    visual: (
      <Image
        src="/Stock Images/pexels-julia-m-cameron-4144037.jpg"
        alt="Child engaged in VR learning"
        width={900}
        height={560}
        className="w-full h-full object-cover object-center"
      />
    ),
    placeholder: false,
  },
  {
    num: "03",
    title: "Watch math click",
    desc: "8 hours from arithmetic to algebra-confident. Kids beg to stay. Educators rate it 10/10.",
    detail: "After just 3 sessions, students show a 45% jump in median test score. After 8 hours total, they've moved from basic arithmetic to algebra-ready. The real moment? When they say — unprompted — \"Wait, that was algebra?\"",
    accent: "#7030A0",
    visual: (
      <Image
        src="/Stock Images/pexels-julia-m-cameron-4144150.jpg"
        alt="Student experiencing breakthrough moment"
        width={900}
        height={560}
        className="w-full h-full object-cover object-center"
      />
    ),
    placeholder: false,
  },
];

export default function HowItWorks({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState(0);
  const current = steps[active];

  return (
    <section id="how" className={`relative ${compact ? "pt-16 pb-20" : "pt-32 pb-20"} px-6 lg:px-16 bg-[#F7F2FF] overflow-hidden`}>

      {/* Fade in/out — avoids stark lines against adjacent white/near-white sections */}
      <div className="absolute top-0 inset-x-0 h-28 pointer-events-none z-10" style={{ background: "linear-gradient(to bottom, white, transparent)" }} />
      <div className="absolute bottom-0 inset-x-0 h-28 pointer-events-none z-10" style={{ background: "linear-gradient(to top, white, transparent)" }} />

      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-[#7030A0]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-8%] w-[400px] h-[400px] bg-teal-400/15 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.p>
          <motion.h2
            className="text-4xl lg:text-[3.25rem] font-extrabold text-ink leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Simple to start.{" "}
            <em className="not-italic italic text-[#7030A0]">Life-changing</em>{" "}
            to experience.
          </motion.h2>
        </div>

        {/* Step navigator + content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16 items-start">

          {/* Left: step tabs */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {steps.map((step, i) => (
              <button
                key={step.num}
                onClick={() => setActive(i)}
                className="text-left rounded-2xl px-6 py-5 transition-all duration-200 border"
                style={
                  active === i
                    ? { background: step.accent, borderColor: step.accent }
                    : { background: "white", borderColor: `${step.accent}20` }
                }
              >
                <div
                  className="text-3xl font-extrabold leading-none mb-1 transition-colors"
                  style={{ color: active === i ? "rgba(255,255,255,0.25)" : `${step.accent}25` }}
                >
                  {step.num}
                </div>
                <h3
                  className="font-bold text-lg leading-snug transition-colors"
                  style={{ color: active === i ? "white" : "#0D0B12" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mt-1 transition-colors"
                  style={{ color: active === i ? "rgba(255,255,255,0.70)" : "rgba(13,11,18,0.50)" }}
                >
                  {step.desc}
                </p>
              </button>
            ))}
          </div>

          {/* Right: detail panel */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl overflow-hidden border border-[#7030A0]/8 bg-white shadow-sm shadow-[#7030A0]/5"
              >
                {/* Visual */}
                <div className="w-full h-72 overflow-hidden relative">
                  {current.placeholder ? (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#EDE9FE] to-[#E0F7FA]">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(112,48,160,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="5" width="20" height="14" rx="2" />
                        <circle cx="12" cy="12" r="3.5" />
                        <path d="M8 5V3.5" />
                      </svg>
                      <span className="text-[#7030A0]/30 text-xs tracking-widest uppercase font-medium">Photo · Coming soon</span>
                    </div>
                  ) : (
                    current.visual
                  )}
                </div>
                {/* Text detail */}
                <div className="p-8">
                  <div
                    className="text-5xl font-extrabold mb-3 leading-none"
                    style={{ color: `${current.accent}20` }}
                  >
                    {current.num}
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0D0B12] mb-3">{current.title}</h3>
                  <p className="text-[#0D0B12]/60 leading-relaxed">{current.detail}</p>

                  {/* Step indicators */}
                  <div className="flex items-center gap-2 mt-8">
                    {steps.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className="h-1.5 rounded-full transition-all duration-300"
                        style={{
                          width: active === i ? "2rem" : "0.5rem",
                          background: active === i ? current.accent : `${current.accent}30`,
                        }}
                      />
                    ))}
                    {active < steps.length - 1 && (
                      <button
                        onClick={() => setActive(active + 1)}
                        className="ml-auto text-sm font-semibold flex items-center gap-1.5 transition-colors"
                        style={{ color: current.accent }}
                      >
                        Next step →
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Video row */}
        <motion.div
          className="rounded-3xl overflow-hidden shadow-2xl shadow-[#7030A0]/15 relative"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <video
            src="/Manipulatives.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full object-cover max-h-[520px]"
            onLoadedMetadata={(e) => { e.currentTarget.currentTime = 26; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0620]/50 to-transparent pointer-events-none" />
          <div className="absolute bottom-8 left-10">
            <p className="text-white/90 text-base font-semibold">Shape equations with your bare hands</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

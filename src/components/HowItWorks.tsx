"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Put on the headset",
    desc: "At home or at your local library — no special setup, no downloads, no tech experience needed. Strap in and you're there in seconds.",
    detail: "MathSTAR works with Meta Quest headsets available at participating public libraries and for home use. Setup takes under 2 minutes. No controllers, no cables, no IT department required.",
    accent: "#7030A0",
    video: "/Gameplay-edited.mp4",
    videoStart: 0,
  },
  {
    num: "02",
    title: "Enter the underwater world",
    desc: "No controllers — just their hands. Fish multiply before their eyes. They reach out and shape equations in mid-air.",
    detail: "The moment the headset goes on, they're underwater. Schools of fish swim past, each one a number waiting to be discovered. Students use their bare hands to grab, arrange, and solve — the ocean responds to every move.",
    accent: "#0891B2",
    video: "/Manipulatives.mp4",
    videoStart: 0,
  },
  {
    num: "03",
    title: "Watch math click",
    desc: "8 hours from arithmetic to algebra-confident. Kids beg to stay. Educators rate it 10/10.",
    detail: "After just 3 sessions, students show a 45% jump in median test score. After 8 hours total, they've moved from basic arithmetic to algebra-ready. The real moment? When they say — unprompted — \"Wait, that was algebra?\"",
    accent: "#7030A0",
    video: "/Gameplay-edited.mp4",
    videoStart: 20,
  },
];

// ── Horizontal scroll-driven variant ──────────────────────────────────────────

function HowItWorksScrollDriven() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map 80% of scroll → full track, hold last slide for remaining 20%
  // No useSpring — Lenis already smooths scroll; double-smoothing causes jitter
  const x = useTransform(
    scrollYProgress,
    [0, 0.78, 1],
    ["0%", "-66.67%", "-66.67%"]
  );

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < 0.28) setActiveStep(0);
    else if (v < 0.56) setActiveStep(1);
    else setActiveStep(2);
  });

  return (
    // Tall container — each step gets ~130vh of scroll distance
    <div ref={containerRef} style={{ height: "400vh" }}>
      <div
        className="sticky top-0 overflow-hidden flex flex-col"
        style={{ height: "100vh", background: "#F0EBF9", zIndex: 10, position: "sticky" }}
      >
        {/* Ambient blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] right-[-5%] w-[700px] h-[700px] rounded-full blur-[120px]"
            style={{ background: "rgba(112,48,160,0.12)" }} />
          <div className="absolute bottom-[-20%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[100px]"
            style={{ background: "rgba(8,145,178,0.10)" }} />
        </div>

        {/* Top bar */}
        <div className="relative z-20 flex items-center justify-between px-8 lg:px-16 pt-10 pb-4 shrink-0">
          <div>
            <p className="text-[#7030A0] font-semibold text-xs tracking-widest uppercase mb-1">How It Works</p>
          </div>

          {/* Step indicators */}
          <div className="flex items-center gap-3">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                className="h-1.5 rounded-full transition-all duration-500"
                animate={{
                  width: activeStep === i ? "2rem" : "0.5rem",
                  background: activeStep === i ? s.accent : "rgba(0,0,0,0.15)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Scrolling track — 300vw wide, shifts by -100vw per step */}
        <div className="relative flex-1 overflow-hidden">
          <motion.div
            className="flex h-full"
            style={{ x, width: `${steps.length * 100}vw` }}
          >
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative flex items-center px-8 lg:px-16"
                style={{ width: "100vw", height: "100%" }}
              >
                {/* Giant ghost step number */}
                <div
                  className="absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 font-extrabold leading-none pointer-events-none select-none"
                  style={{
                    fontSize: "clamp(10rem, 22vw, 22rem)",
                    color: `${step.accent}0C`,
                  }}
                >
                  {step.num}
                </div>

                {/* Two-column content */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full items-center">

                  {/* Left: text */}
                  <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: activeStep === i ? 1 : 0.3, x: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div
                      className="text-7xl font-extrabold mb-5 leading-none tabular-nums"
                      style={{ color: `${step.accent}30` }}
                    >
                      {step.num}
                    </div>
                    <h3 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#0D0B12] mb-5 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-[#0D0B12]/65 text-lg leading-relaxed mb-5 max-w-lg">
                      {step.desc}
                    </p>
                    <p className="text-[#0D0B12]/45 text-sm leading-relaxed max-w-lg">
                      {step.detail}
                    </p>
                  </motion.div>

                  {/* Right: video */}
                  <motion.div
                    className="relative rounded-3xl overflow-hidden hidden lg:block"
                    style={{
                      height: "58vh",
                      boxShadow: `0 0 80px ${step.accent}22`,
                    }}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: activeStep === i ? 1 : 0.4, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <video
                      src={step.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                      onLoadedMetadata={(e) => { e.currentTarget.currentTime = step.videoStart; }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(to top, #F0EBF930 0%, transparent 60%)` }}
                    />
                    <div
                      className="absolute bottom-5 left-6 text-xs font-semibold tracking-widest uppercase"
                      style={{ color: step.accent }}
                    >
                      Step {step.num}
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom: scroll hint */}
        <motion.div
          className="relative z-20 px-8 lg:px-16 pb-6 shrink-0 flex items-center gap-3"
          animate={{ opacity: activeStep < steps.length - 1 ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-px h-6 bg-black/20" />
          <p className="text-[#0D0B12]/40 text-xs tracking-widest uppercase">Scroll to continue</p>
        </motion.div>
      </div>
    </div>
  );
}

// ── Default / compact tab variant (unchanged) ─────────────────────────────────

export default function HowItWorks({
  compact = false,
  scrollDriven = false,
}: {
  compact?: boolean;
  scrollDriven?: boolean;
}) {
  const [active, setActive] = useState(0);
  const current = steps[active];

  if (scrollDriven) return <HowItWorksScrollDriven />;

  return (
    <section id="how" className={`relative ${compact ? "pt-16 pb-20" : "pt-32 pb-20"} px-6 lg:px-16 bg-[#F7F2FF] overflow-hidden`}>

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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16 items-stretch">

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
          <div className="lg:col-span-3 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl overflow-hidden border border-[#7030A0]/8 bg-white shadow-sm shadow-[#7030A0]/5 flex flex-col flex-1"
              >
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

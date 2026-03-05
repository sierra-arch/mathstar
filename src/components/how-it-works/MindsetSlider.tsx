"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const beforeAfter = [
  {
    before: { quote: "I hate math. I'm just not a math person.", who: "Student, before MathSTAR" },
    after: { quote: "Wait, that level I just did was algebra?", who: "Student, Ellis Pilot, Jan 2026" },
  },
  {
    before: { quote: "My daughter cries every time we do homework. She says she's stupid.", who: "Parent, before MathSTAR" },
    after: { quote: "My son came to me and said, 'Mom, maths is my favourite subject now.'", who: "Parent, Roxbury Library Pilot" },
  },
  {
    before: { quote: "They shut down the moment I say 'math time.' Nothing works.", who: "Teacher, before MathSTAR" },
    after: { quote: "They went 20 minutes into recess and didn't notice.", who: "Ms. Joseph, Ellis Pilot, Jan 2026" },
  },
];

const stat = { before: "Bored, afraid, or disengaged", after: "+18% growth mindset after 8 hours" };

export default function MindsetSlider() {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [activeStory, setActiveStory] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  };

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      updatePosition(clientX);
    };
    const onUp = () => setDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove as EventListener);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove as EventListener);
      window.removeEventListener("touchend", onUp);
    };
  }, [dragging]);

  const current = beforeAfter[activeStory];
  const showBefore = position < 50;

  return (
    <section className="relative py-28 px-6 lg:px-20 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #200505 0%, #0c1a35 50%, #0d1f30 100%)" }}>

      {/* Richer color atmosphere */}
      <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] bg-[#DC2626]/35 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-[#0891B2]/25 rounded-full blur-[110px] pointer-events-none" />
      {/* Gradient edge transitions */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#FAFAF8] to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#FEF2F2] to-transparent z-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#FCA5A5] font-semibold text-sm tracking-widest uppercase mb-4">
            Before &amp; After
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            One experience.{" "}
            <em className="not-italic italic text-[#FCA5A5]">Everything changes.</em>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Drag the slider to see what MathSTAR does to a child&apos;s relationship with math.
          </p>
        </motion.div>

        {/* Story selector */}
        <div className="flex justify-center gap-2 mb-10">
          {["Student", "Parent", "Teacher"].map((label, i) => (
            <button
              key={label}
              onClick={() => setActiveStory(i)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={
                activeStory === i
                  ? { background: "#DC2626", color: "white" }
                  : { background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.55)" }
              }
            >
              {label}
            </button>
          ))}
        </div>

        {/* Slider panel */}
        <div
          ref={containerRef}
          className="relative rounded-3xl overflow-hidden select-none cursor-ew-resize"
          style={{ height: "320px" }}
          onMouseDown={(e) => { setDragging(true); updatePosition(e.clientX); }}
          onTouchStart={(e) => { setDragging(true); updatePosition(e.touches[0].clientX); }}
        >
          {/* Before panel */}
          <div className="absolute inset-0 flex flex-col justify-center px-10 lg:px-16"
            style={{ background: "linear-gradient(135deg, #1a0a2e 0%, #0D0B12 100%)", border: "1px solid rgba(220,38,38,0.2)" }}>
            <p className="text-[#FCA5A5]/50 text-xs font-bold tracking-widest uppercase mb-4">Before MathSTAR</p>
            <p className="text-white/70 text-xl lg:text-2xl font-medium leading-relaxed mb-5 max-w-sm">
              &ldquo;{current.before.quote}&rdquo;
            </p>
            <p className="text-white/35 text-sm">{current.before.who}</p>
          </div>

          {/* After panel — clipped by slider */}
          <div
            className="absolute inset-0 flex flex-col justify-center px-10 lg:px-16 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)`, background: "linear-gradient(135deg, #2d1654 0%, #1a3a4a 100%)" }}
          >
            <p className="text-[#FCA5A5] text-xs font-bold tracking-widest uppercase mb-4">After MathSTAR</p>
            <p className="text-white text-xl lg:text-2xl font-semibold leading-relaxed mb-5 max-w-sm">
              &ldquo;{current.after.quote}&rdquo;
            </p>
            <p className="text-white/55 text-sm">{current.after.who}</p>
          </div>

          {/* Divider handle */}
          <div
            className="absolute top-0 bottom-0 z-20 flex items-center justify-center"
            style={{ left: `${position}%`, transform: "translateX(-50%)" }}
          >
            <div className="w-0.5 h-full bg-white/30" />
            <div className="absolute w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5 8H1M11 8H15M5 8L3 6M5 8L3 10M11 8L13 6M11 8L13 10" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-6 text-white/20 text-xs font-bold tracking-widest uppercase">Before</div>
          <div className="absolute top-4 right-6 text-white/20 text-xs font-bold tracking-widest uppercase">After</div>
        </div>

        {/* Bottom stat */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="rounded-2xl p-6 text-center" style={{ background: "rgba(220,38,38,0.12)", border: "1px solid rgba(220,38,38,0.2)" }}>
            <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-2">Before</p>
            <p className="text-white/65 font-semibold">{stat.before}</p>
          </div>
          <div className="rounded-2xl p-6 text-center" style={{ background: "rgba(8,145,178,0.12)", border: "1px solid rgba(8,145,178,0.2)" }}>
            <p className="text-[#0891B2] text-xs font-bold tracking-widest uppercase mb-2">After MathSTAR</p>
            <p className="text-white font-semibold">{stat.after}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

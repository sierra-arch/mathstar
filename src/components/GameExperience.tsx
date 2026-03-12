"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

/* ── Lazy video — only plays when near viewport, pauses when off-screen ── */
function LazyVideo({ src, start = 0, rate = 0.65, opacity = 0.9, className }: {
  src: string; start?: number; rate?: number; opacity?: number; className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => { entry.isIntersecting ? video.play().catch(() => {}) : video.pause(); },
      { rootMargin: "100px" }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);
  return (
    <video ref={ref} src={src} muted loop playsInline preload="none"
      className={className} style={{ opacity }}
      onLoadedMetadata={(e) => { e.currentTarget.currentTime = start; e.currentTarget.playbackRate = rate; }} />
  );
}

/* ── Gradient text helper ── */
const GRAD_PT  = "linear-gradient(135deg, #7030A0, #0891B2)";
const GRAD_LT  = "linear-gradient(135deg, #C49FDC, #0891B2)";
const GRAD_PLT = "linear-gradient(135deg, #7030A0 20%, #C49FDC 55%, #0891B2)";

function GradText({ children, g = GRAD_PT }: { children: React.ReactNode; g?: string }) {
  return (
    <span className="italic inline-block pb-2 pr-4"
      style={{ background: g, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
      {children}
    </span>
  );
}

/* ── Fish layer ── */
const FISH = [
  { cls: "fish-1", top: "22%", size: 160, color: "#0891B2", op: 0.35 },
  { cls: "fish-2", top: "58%", size: 130, color: "#F97316", op: 0.30 },
  { cls: "fish-3", top: "72%", size: 140, color: "#7030A0", op: 0.30 },
  { cls: "fish-4", top: "38%", size: 180, color: "#F59E0B", op: 0.28 },
  { cls: "fish-5", top: "12%", size: 110, color: "#059669", op: 0.28 },
  { cls: "fish-6", top: "82%", size: 150, color: "#0891B2", op: 0.30 },
];
function FishLayer() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden>
      {FISH.map((f) => (
        <div key={f.cls} className={`${f.cls} absolute`} style={{ top: f.top, opacity: f.op }}>
          <svg width={f.size} height={Math.round(f.size * 0.5)} viewBox="0 0 50 25" fill="none">
            <path d="M2 12.5 L14 2 L14 23 Z" fill={f.color} />
            <ellipse cx="30" cy="12.5" rx="20" ry="9" fill={f.color} />
            <circle cx="44" cy="10" r="2" fill="white" opacity={0.6} />
          </svg>
        </div>
      ))}
    </div>
  );
}

/* ── Floating math particles ── */
const PARTICLES = [
  { text: "2",  cls: "float-1", top: "10%", left: "6%",  size: "2.2rem", color: "#7030A0", op: 0.20 },
  { text: "+",  cls: "float-2", top: "30%", left: "88%", size: "1.8rem", color: "#0891B2", op: 0.18 },
  { text: "5",  cls: "float-3", top: "65%", left: "10%", size: "1.6rem", color: "#F97316", op: 0.18 },
  { text: "=",  cls: "float-4", top: "78%", left: "82%", size: "2.0rem", color: "#F59E0B", op: 0.20 },
  { text: "3",  cls: "float-5", top: "48%", left: "94%", size: "1.5rem", color: "#059669", op: 0.16 },
  { text: "7",  cls: "float-6", top: "18%", left: "52%", size: "1.8rem", color: "#7030A0", op: 0.18 },
  { text: "+",  cls: "float-7", top: "88%", left: "32%", size: "1.6rem", color: "#0891B2", op: 0.17 },
  { text: "2",  cls: "float-8", top: "52%", left: "68%", size: "1.4rem", color: "#F97316", op: 0.16 },
];
function FloatingParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden>
      {PARTICLES.map((p, i) => (
        <span key={i} className={`${p.cls} absolute font-extrabold`}
          style={{ top: p.top, left: p.left, fontSize: p.size, color: p.color, opacity: p.op }}>
          {p.text}
        </span>
      ))}
    </div>
  );
}

/* ── Shared primitives ── */
function ScanlineOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{
      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.022) 3px, rgba(0,0,0,0.022) 4px)",
      zIndex: 4,
    }} />
  );
}

function SectionNum({ n, dark = true }: { n: string; dark?: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-end px-8 lg:px-16 pointer-events-none select-none overflow-hidden" aria-hidden>
      <span className="text-[22rem] font-extrabold leading-none"
        style={{ color: dark ? "rgba(255,255,255,0.03)" : "rgba(112,48,160,0.04)" }}>
        {n}
      </span>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   NEW ── World Map / Level Progression
   ══════════════════════════════════════════════════════════ */

const LEVELS = [
  { num: "01", world: "The Surface",       skill: "Counting & Patterns",      color: "#C49FDC" },
  { num: "02", world: "The Shallows",      skill: "Addition & Subtraction",    color: "#0891B2" },
  { num: "03", world: "The Reef",          skill: "Multiplication & Division", color: "#C49FDC" },
  { num: "04", world: "The Coral Garden",  skill: "Fractions & Decimals",      color: "#0891B2" },
  { num: "05", world: "The Open Water",    skill: "Geometry & Measurement",    color: "#C49FDC" },
  { num: "06", world: "The Thermocline",   skill: "Early Algebra",             color: "#0891B2" },
  { num: "07", world: "The Deep Current",  skill: "Variables & Equations",     color: "#C49FDC" },
  { num: "08", world: "The Abyss",         skill: "Algebra-Ready ★",           color: "#F59E0B", final: true },
];

function WorldMap() {
  return (
    <section className="relative py-28 px-6 lg:px-16 overflow-hidden" style={{ background: "#7030A0" }}>
      {/* Section transitions */}
      <div className="absolute top-0 inset-x-0 h-56 z-[5] pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #F7F2FF 0%, rgba(247,242,255,0.5) 45%, transparent 100%)" }} />
      <div className="absolute bottom-0 inset-x-0 h-40 z-[5] pointer-events-none"
        style={{ background: "linear-gradient(to top, #7030A0, transparent)" }} />
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full blur-[150px]"
          style={{ background: "radial-gradient(ellipse, rgba(112,48,160,0.20) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-[#C49FDC] font-semibold text-xs tracking-widest uppercase mb-5">The World Map</p>
          <h2 className="text-4xl lg:text-6xl font-extrabold text-white leading-[1.0] mb-5">
            8 levels. 8 hours.<br />
            <GradText g={GRAD_LT}>Algebra-ready.</GradText>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Every level is a new world. Every world hides a math concept. Students discover both at once.
          </p>
        </motion.div>

        {/* Level grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {LEVELS.map((level, i) => (
            <motion.div
              key={level.num}
              className="relative rounded-2xl p-6 border overflow-hidden group"
              style={{
                background: level.final
                  ? "linear-gradient(135deg, rgba(245,158,11,0.18) 0%, rgba(74,30,107,0.7) 100%)"
                  : "rgba(255,255,255,0.10)",
                borderColor: level.final ? "rgba(245,158,11,0.50)" : "rgba(255,255,255,0.22)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -3, borderColor: `${level.color}50` }}
            >
              {/* Ghost number */}
              <div className="absolute -right-2 -bottom-4 text-[6rem] font-extrabold leading-none pointer-events-none select-none"
                style={{ color: `${level.color}08` }}>
                {level.num}
              </div>

              {/* Level indicator dot */}
              <div className="w-2.5 h-2.5 rounded-full mb-4" style={{ background: level.color, boxShadow: `0 0 10px ${level.color}` }} />

              <p className="text-white/60 text-xs font-bold tracking-widest uppercase mb-2">Level {level.num}</p>
              <h3 className="font-extrabold text-base text-white leading-snug mb-2"
                style={level.final ? { color: level.color } : {}}>
                {level.world}
              </h3>
              <p className="text-white/75 text-xs leading-snug">{level.skill}</p>

              {level.final && (
                <div className="mt-3 text-[10px] font-bold tracking-widest uppercase"
                  style={{ color: level.color }}>
                  ↑ Destination
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Connector line */}
        <motion.div className="flex items-center justify-center gap-2 mt-12"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.6 }}>
          <div className="h-px flex-1 max-w-xs" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.5))" }} />
          <p className="text-white/60 text-xs tracking-widest uppercase px-4">One continuous journey</p>
          <div className="h-px flex-1 max-w-xs" style={{ background: "linear-gradient(to left, transparent, rgba(196,159,220,0.3))" }} />
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   NEW ── The Worlds (atmospheric environment panels)
   ══════════════════════════════════════════════════════════ */

const WORLDS = [
  {
    name: "The Open Ocean",
    sub: "Where it begins.",
    math: "Counting · Patterns · Addition",
    desc: "Fish fill the water. Schools of them — each one a number, grouping naturally, separating with purpose. Math happens before they know they're doing it.",
    color: "#0891B2",
    glow: "rgba(8,145,178,0.30)",
    glowPos: "30% 50%",
  },
  {
    name: "The Coral Kingdom",
    sub: "Where patterns unlock.",
    math: "Multiplication · Fractions · Geometry",
    desc: "The coral pulses with prime numbers. Fish arrange into arrays. Reach out and hold a fraction — it splits apart in your hands, perfectly even.",
    color: "#7030A0",
    glow: "rgba(112,48,160,0.30)",
    glowPos: "70% 50%",
  },
  {
    name: "The Deep",
    sub: "Where algebra waits.",
    math: "Variables · Equations · Algebra",
    desc: "The light fades but the numbers glow. Variables swim like creatures. Students reach for them, shape them into equations — and the ocean answers.",
    color: "#C49FDC",
    glow: "rgba(196,159,220,0.22)",
    glowPos: "50% 30%",
  },
];

function WorldsSection() {
  return (
    <div>
      {WORLDS.map((world, i) => {
        const isEven = i % 2 === 0;
        return (
          <section
            key={world.name}
            className="relative overflow-hidden flex items-center"
            style={{ minHeight: "75vh", background: "#7030A0" }}
          >
            {/* Atmosphere gradient */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0" style={{
                background: `radial-gradient(ellipse 60% 70% at ${world.glowPos}, ${world.glow} 0%, transparent 65%)`,
              }} />
            </div>

            {/* Top/bottom fades between sections */}
            {i > 0 && (
              <div className="absolute top-0 inset-x-0 h-24 pointer-events-none z-10"
                style={{ background: "linear-gradient(to bottom, #7030A0, transparent)" }} />
            )}
            {i === WORLDS.length - 1 && (
              <div className="absolute bottom-0 inset-x-0 h-64 pointer-events-none z-10"
                style={{ background: "linear-gradient(to top, #FAFAF8 0%, rgba(250,250,248,0.6) 45%, transparent 100%)" }} />
            )}

            {/* Fish decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
              {[0, 1, 2].map(j => (
                <div key={j} className={`fish-${(j + i * 3 + 1) % 6 + 1} absolute`}
                  style={{ top: `${25 + j * 25}%`, opacity: 0.4 }}>
                  <svg width="140" height="70" viewBox="0 0 50 25" fill="none">
                    <path d="M2 12.5 L14 2 L14 23 Z" fill={world.color} />
                    <ellipse cx="30" cy="12.5" rx="20" ry="9" fill={world.color} />
                  </svg>
                </div>
              ))}
            </div>

            <ScanlineOverlay />

            <div className={`relative z-10 max-w-6xl mx-auto px-8 lg:px-20 py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"}`}>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -32 : 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-semibold text-xs tracking-widest uppercase mb-5" style={{ color: world.color }}>
                  {world.math}
                </p>
                <h2 className="text-5xl lg:text-[4.5rem] font-extrabold text-white leading-[1.0] mb-4">
                  {world.name}
                </h2>
                <p className="text-white/75 text-xl italic mb-8">{world.sub}</p>
                <p className="text-white/85 text-lg leading-relaxed max-w-lg">{world.desc}</p>
              </motion.div>

              {/* Visual panel */}
              <motion.div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  height: "320px",
                  background: `linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)`,
                  border: `1px solid ${world.color}50`,
                  boxShadow: `0 0 80px ${world.color}30`,
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                {/* Atmospheric gradient fill */}
                <div className="absolute inset-0" style={{
                  background: `radial-gradient(ellipse 100% 100% at 50% 50%, ${world.glow.replace("0.30", "0.35")} 0%, rgba(74,30,107,0.6) 70%)`,
                }} />

                {/* Floating math symbols */}
                {["×", "÷", "+", "=", "√"].map((sym, j) => (
                  <div key={j}
                    className={`float-${j + 1} absolute font-extrabold select-none pointer-events-none`}
                    style={{
                      top: `${15 + j * 18}%`,
                      left: `${10 + (j * 19) % 75}%`,
                      fontSize: `${1.8 + (j % 3) * 0.4}rem`,
                      color: world.color,
                      opacity: 0.25,
                    }}
                  >
                    {sym}
                  </div>
                ))}

                {/* World label */}
                <div className="absolute bottom-6 left-6">
                  <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: world.color }}>
                    World {i + 1}
                  </div>
                  <div className="text-white/60 text-sm font-semibold">{world.name}</div>
                </div>

                {/* Corner glow */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-30"
                  style={{ background: world.color }} />
              </motion.div>

            </div>
          </section>
        );
      })}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   NEW ── Abilities Grid
   ══════════════════════════════════════════════════════════ */

const ABILITIES = [
  { icon: "🤲", name: "Hand Tracking",       desc: "No controllers — ever. Bare hands shape equations in mid-air. The curriculum lives in the motion.",                     unlock: "From session 1" },
  { icon: "🌊", name: "Immersive Focus",      desc: "Private world. No classroom noise. No audience. No pressure. Just the student and the ocean.",                         unlock: "Immediate" },
  { icon: "🔮", name: "No-Fail Exploration",  desc: "Mistakes happen in private. There's no wrong face to make. Fear of failure never gets to arrive.",                     unlock: "Always on" },
  { icon: "📐", name: "Spatial Algebra",      desc: "3D math that sticks. See a fraction. Hold it. Pull it apart. What the page couldn't teach, the hands already knew.",   unlock: "From level 3" },
  { icon: "⚡", name: "Instant Feedback",     desc: "Every action gets a response. The ocean moves with them. The dopamine loop that keeps ADHD minds locked in.",           unlock: "From session 1" },
  { icon: "🗺️", name: "The Full Journey",     desc: "8 levels. 8 hours. From arithmetic to algebra-confident. Each world unlocks the next. Every session earns a new world.", unlock: "Complete arc" },
];

function AbilitiesSection() {
  return (
    <section className="relative py-28 px-6 lg:px-16 overflow-hidden" style={{ background: "#7030A0" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(ellipse, rgba(196,159,220,0.25) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-[#C49FDC] font-semibold text-xs tracking-widest uppercase mb-5">What You Unlock</p>
        </motion.div>

        {/* Abilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ABILITIES.map((ab, i) => (
            <motion.div
              key={i}
              className="relative rounded-2xl p-7 border group overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.10)",
                backdropFilter: "blur(12px)",
                borderColor: "rgba(255,255,255,0.22)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{
                background: "rgba(255,255,255,0.18)",
                borderColor: "rgba(255,255,255,0.45)",
              }}
            >
              {/* Corner glow on hover */}
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                style={{ background: "#C49FDC" }} />

              <div className="text-3xl mb-5">{ab.icon}</div>
              <h3 className="text-white font-extrabold text-lg mb-3">{ab.name}</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-5">{ab.desc}</p>
              <div className="inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
                style={{ background: "rgba(196,159,220,0.10)", color: "#C49FDC" }}>
                {ab.unlock}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   NEW ── Pathway Panels (replaces old CTA)
   ══════════════════════════════════════════════════════════ */

const PATHWAYS = [
  {
    id: "family",
    overline: "For families",
    title: "Enter the\nworld.",
    sub: "Your child. An ocean. Eight hours from arithmetic to algebra-confident.",
    cta: "For Parents →",
    href: "/parents",
    accent: "#C49FDC",
    bg: "linear-gradient(160deg, #1a0840 0%, #2d1060 50%, #0d1428 100%)",
    glow: "rgba(112,48,160,0.35)",
    glowPos: "30% 70%",
  },
  {
    id: "educator",
    overline: "For educators",
    title: "See the\nevidence.",
    sub: "Pilot data. Research-backed curriculum. A ROI calculator you can take to your school board.",
    cta: "For Educators →",
    href: "/educators",
    accent: "#0891B2",
    bg: "linear-gradient(160deg, #061426 0%, #0c2840 50%, #061018 100%)",
    glow: "rgba(8,145,178,0.30)",
    glowPos: "70% 30%",
  },
];

function PathwayPanels() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden" style={{ height: "100vh", display: "flex" }}>
      {/* Top transition from QuoteSection */}
      <div className="absolute top-0 inset-x-0 h-48 z-[5] pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #06040E 0%, rgba(6,4,14,0.55) 45%, transparent 100%)" }} />
      {PATHWAYS.map((p) => {
        const isHovered = hovered === p.id;
        const otherHovered = hovered && hovered !== p.id;
        return (
          <motion.div
            key={p.id}
            className="relative flex flex-col items-center justify-center overflow-hidden cursor-pointer"
            style={{ background: p.bg, flexGrow: isHovered ? 1.55 : otherHovered ? 0.45 : 1 }}
            animate={{ flexGrow: isHovered ? 1.55 : otherHovered ? 0.45 : 1 }}
            transition={{ type: "spring", stiffness: 160, damping: 28 }}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Glow */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: `radial-gradient(ellipse 70% 70% at ${p.glowPos}, ${p.glow} 0%, transparent 65%)`,
            }} />
            <ScanlineOverlay />

            {/* Content */}
            <motion.div
              className="relative z-10 text-center px-8 lg:px-16 max-w-md"
              animate={{ opacity: otherHovered ? 0.5 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="font-semibold text-xs tracking-widest uppercase mb-6" style={{ color: p.accent }}>
                {p.overline}
              </p>
              <h2 className="text-5xl lg:text-[5rem] xl:text-[5.5rem] font-extrabold text-white leading-[1.0] mb-8 whitespace-pre-line">
                {p.title}
              </h2>
              <p className="text-white/45 text-base leading-relaxed mb-10 max-w-xs mx-auto">{p.sub}</p>

              <motion.div
                animate={{ opacity: isHovered || !hovered ? 1 : 0.4, y: isHovered ? 0 : 4 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={p.href}
                  className="inline-block px-8 py-4 rounded-full font-bold text-white text-base transition-all duration-200"
                  style={{
                    background: `linear-gradient(135deg, ${p.accent}33, ${p.accent}18)`,
                    border: `1px solid ${p.accent}40`,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {p.cta}
                </Link>
              </motion.div>
            </motion.div>

            {/* Divider line */}
            {p.id === "family" && (
              <div className="absolute right-0 top-0 bottom-0 w-px opacity-20"
                style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.4), transparent)" }} />
            )}
          </motion.div>
        );
      })}
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   ── Dark video slide ──
   ══════════════════════════════════════════════════════════ */

function VideoSlide({ num, tag, headline, body, accent, src, videoStart, topColor, bottomColor }: {
  num: string; tag: string; headline: string; body: string; accent: string; src: string; videoStart: number;
  topColor?: string; bottomColor?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const fadeOut = useTransform(scrollYProgress, [0.35, 0.85], [1, 0]);
  const textY   = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-[#0d0620] flex items-end">
      <div className="absolute inset-0">
        <LazyVideo src={src} start={videoStart} rate={0.65} opacity={0.90} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0620]/25 via-transparent to-[#0d0620]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0620]/55 via-[#0d0620]/10 to-transparent" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 15% 60%, rgba(112,48,160,0.30) 0%, transparent 60%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 40% at 85% 20%, rgba(8,145,178,0.20) 0%, transparent 55%)" }} />
      </div>
      {topColor    && <div className="absolute top-0 inset-x-0 h-52 z-[5] pointer-events-none" style={{ background: `linear-gradient(to bottom, ${topColor} 0%, ${topColor}99 35%, transparent 100%)` }} />}
      {bottomColor && <div className="absolute bottom-0 inset-x-0 h-52 z-[5] pointer-events-none" style={{ background: `linear-gradient(to top, ${bottomColor} 0%, ${bottomColor}99 35%, transparent 100%)` }} />}
      <ScanlineOverlay />
      <SectionNum n={num} />
      <div className="absolute top-0 left-0 w-1 h-full opacity-40"
        style={{ background: `linear-gradient(to bottom, transparent, ${accent}, transparent)` }} />

      <motion.div className="relative z-10 px-8 lg:px-20 pb-20 max-w-3xl" style={{ opacity: fadeOut, y: textY }}>
        <motion.p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: accent }}
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.5 }}>
          {tag}
        </motion.p>
        <motion.h2 className="text-5xl lg:text-[5rem] xl:text-[5.5rem] font-extrabold text-white leading-[1.02] mb-7"
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}>
          {headline}
        </motion.h2>
        <motion.p className="text-white/60 text-lg leading-relaxed max-w-xl"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.7, delay: 0.22 }}>
          {body}
        </motion.p>
      </motion.div>
    </section>
  );
}

/* ── Light break slide ── */
function LightSlide({ num, overline, headline, children }: {
  num: string; overline: string; headline: React.ReactNode; children?: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const fadeOut = useTransform(scrollYProgress, [0.35, 0.85], [1, 0]);
  const textY   = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-[#F7F2FF] flex items-center justify-center">
      <div className="absolute top-[-15%] right-[-8%] w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(196,159,220,0.35) 0%, transparent 70%)" }} />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(8,145,178,0.15) 0%, transparent 70%)" }} />
      <FishLayer />
      <FloatingParticles />
      <SectionNum n={num} dark={false} />

      <motion.div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full" style={{ opacity: fadeOut, y: textY }}>
        <motion.p className="text-[#7030A0] font-semibold text-xs tracking-widest uppercase mb-8"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}>
          {overline}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
          {headline}
        </motion.div>
        {children && (
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7, delay: 0.3 }}>
            {children}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}

/* ── Cinematic quote section ── */
function QuoteSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const fadeOut = useTransform(scrollYProgress, [0.35, 0.85], [1, 0]);
  const textY   = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-[#7030A0] flex items-center justify-center">
      <SectionNum n="07" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(8,145,178,0.08)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-56 z-[5] pointer-events-none" style={{ background: "linear-gradient(to bottom, #FAFAF8 0%, rgba(250,250,248,0.55) 40%, transparent 100%)" }} />
      <div className="absolute bottom-0 inset-x-0 h-56 z-[5] pointer-events-none" style={{ background: "linear-gradient(to top, #7030A0 0%, rgba(112,48,160,0.55) 45%, transparent 100%)" }} />
      <ScanlineOverlay />

      <motion.div className="max-w-4xl mx-auto text-center relative z-10 px-6" style={{ opacity: fadeOut, y: textY }}>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1.4, ease: "easeOut" }}>
          <div className="text-9xl text-white/25 font-serif leading-none mb-2 select-none">&ldquo;</div>
          <p className="text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-10">
            They got 17/21 in the game&apos;s test.
            We know they&apos;re capable of this —
            but it doesn&apos;t show up on paper.
            <GradText g={GRAD_LT}> They need ACCESS.</GradText>
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-white/40" />
            <div>
              <p className="text-white/90 font-semibold text-sm">Ms. Munroe</p>
              <p className="text-white/60 text-xs">Classroom Teacher · Ellis Elementary Pilot</p>
            </div>
            <div className="w-12 h-px bg-white/40" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   ── Main component ──
   ══════════════════════════════════════════════════════════ */
export default function GameExperience() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale   = useTransform(heroScroll, [0, 1], [1, 1.06]);
  const heroOpacity = useTransform(heroScroll, [0, 0.6], [1, 0]);

  return (
    <div className="bg-[#7030A0]">

      {/* ── 1. HERO ── */}
      <section ref={heroRef} className="relative overflow-hidden flex items-end justify-center" style={{ height: "115vh" }}>
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <LazyVideo src="/Gameplay-edited.mp4" start={90} rate={0.6} opacity={0.65} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080612]/55 via-[#080612]/10 to-[#080612]" />
        </motion.div>
        <div className="absolute bottom-0 inset-x-0 h-56 z-[5] pointer-events-none"
          style={{ background: "linear-gradient(to top, #F7F2FF 0%, rgba(247,242,255,0.7) 40%, transparent 100%)" }} />
        <ScanlineOverlay />

        <motion.div className="relative z-10 text-center px-6 max-w-5xl mx-auto pb-8" style={{ opacity: heroOpacity }}>
          <motion.p className="text-[#C49FDC] font-semibold text-sm tracking-widest uppercase mb-8"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            The MathSTAR Experience
          </motion.p>
          <motion.h1 className="text-6xl lg:text-[5.5rem] xl:text-[6rem] font-extrabold text-white leading-[1.0] mb-8"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}>
            <span className="whitespace-nowrap">Step inside the <GradText g={GRAD_LT}>world</GradText></span>
            <br />where math is alive.
          </motion.h1>
          <motion.p className="text-white/50 text-xl max-w-xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.4 }}>
            An underwater VR universe. Fish that multiply. Equations you hold in your hands.
          </motion.p>

          {/* Game-style CTA */}
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}>
            <Link href="/parents"
              className="px-10 py-4 rounded-full font-bold text-white text-base transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #7030A0, #4A1E6B)", boxShadow: "0 8px 40px rgba(112,48,160,0.5)" }}>
              Enter the World →
            </Link>
            <Link href="/how-it-works"
              className="px-10 py-4 rounded-full font-bold text-white/60 text-base border border-white/15 hover:border-white/35 hover:text-white/85 transition-all duration-200">
              How it works
            </Link>
          </motion.div>

          <motion.div className="flex flex-col items-center gap-3"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.85 }}>
            <span className="text-white/20 text-xs tracking-widest uppercase">Scroll to explore</span>
            <motion.div className="w-px h-12 bg-gradient-to-b from-[#C49FDC]/50 to-transparent"
              animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
          </motion.div>
        </motion.div>
      </section>

      {/* ── 2. LIGHT — The World ── */}
      <LightSlide num="01" overline="The World"
        headline={
          <h2 className="text-5xl lg:text-7xl xl:text-[5.5rem] font-extrabold text-[#0D0B12] leading-[1.0] mb-10">
            An ocean where <GradText g={GRAD_PLT}>math</GradText> is everywhere.
          </h2>
        }
      >
        <p className="text-[#0D0B12]/50 text-xl leading-relaxed max-w-2xl mx-auto mb-14">
          Built for kids who never saw themselves as math people —
          the kid who scored 17/21 on an in-game algebra test before they even knew it was algebra.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { icon: "🤲", text: "Math you hold in your hands" },
            { icon: "🐟", text: "Fractions swimming in 3D" },
            { icon: "🫧", text: "Algebra hidden in adventure" },
          ].map((pill, i) => (
            <motion.div key={i}
              className="flex items-center gap-2.5 bg-white/70 border border-[#7030A0]/10 rounded-full px-5 py-3 text-[#0D0B12]/70 text-sm font-medium shadow-sm"
              initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}>
              <span className="text-2xl">{pill.icon}</span>
              {pill.text}
            </motion.div>
          ))}
        </div>
      </LightSlide>

      {/* ── NEW: Abilities Grid ── */}
      <AbilitiesSection />

      {/* ── NEW: World Map ── */}
      <WorldMap />

      {/* ── 3–5. DARK VIDEO — Step slides ── */}
      <VideoSlide num="02" tag="Step 01"
        headline={"Put on\nthe headset."}
        body="No classroom required. At home or at your local library — strap in, and in seconds you're underwater. The real world disappears."
        accent="#C49FDC" src="/Gameplay-edited.mp4" videoStart={5} topColor="#06030E" />
      <VideoSlide num="03" tag="Step 02"
        headline={"Math comes alive\naround you."}
        body="Fish multiply before your eyes. Coral patterns pulse with prime numbers. Reach out with your actual hands and shape equations in mid-air."
        accent="#0891B2" src="/Gameplay-edited.mp4" videoStart={38} />
      <VideoSlide num="04" tag="Step 03"
        headline={"Algebra unlocks\nlike a puzzle."}
        body="What felt impossible on paper becomes intuitive in 3D. Students say it out loud: 'Wait — that was algebra?' 8 hours. Algebra-ready."
        accent="#C49FDC" src="/Gameplay-edited.mp4" videoStart={68} />

      {/* ── 6. LIGHT — Stats ── */}
      <LightSlide num="05" overline="The Results"
        headline={
          <h2 className="text-5xl lg:text-6xl font-extrabold text-[#0D0B12] leading-[1.0] mb-14">
            The numbers are <GradText>extraordinary.</GradText>
          </h2>
        }
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { num: "10/10", label: "students chose math over recess", color: "#7030A0" },
            { num: "18%",   label: "pre → post test score gain",      color: "#0891B2" },
            { num: "45%",   label: "median score jump, 3 sessions",   color: "#7030A0" },
            { num: "10/10", label: "educator satisfaction rating",     color: "#0891B2" },
          ].map((stat, i) => (
            <motion.div key={i} className="text-center"
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }}>
              <div className="text-5xl lg:text-6xl font-extrabold mb-2" style={{ color: stat.color }}>{stat.num}</div>
              <div className="text-[#0D0B12]/45 text-sm leading-snug">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </LightSlide>

      {/* ── 7. DARK VIDEO — Manipulatives ── */}
      <section className="relative h-screen overflow-hidden bg-[#080612] flex items-end">
        <SectionNum n="06" />
        <LazyVideo src="/Manipulatives.mp4" start={26} rate={0.65} opacity={0.8} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080612] via-[#080612]/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080612]/55 via-transparent to-transparent" />
        <div className="absolute top-0 inset-x-0 h-52 z-[5] pointer-events-none" style={{ background: "linear-gradient(to bottom, #7030A0 0%, rgba(112,48,160,0.6) 40%, transparent 100%)" }} />
        <div className="absolute bottom-0 inset-x-0 h-52 z-[5] pointer-events-none" style={{ background: "linear-gradient(to top, #06030E 0%, rgba(6,3,14,0.8) 40%, transparent 100%)" }} />
        <ScanlineOverlay />

        <div className="relative z-10 px-8 lg:px-20 pb-20 max-w-3xl">
          <motion.p className="text-[#0891B2] font-semibold text-xs tracking-widest uppercase mb-5"
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}>
            The Manipulatives
          </motion.p>
          <motion.h2 className="text-5xl lg:text-[5rem] font-extrabold text-white leading-[1.02] mb-6"
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}>
            Shape equations<br />with your bare hands.
          </motion.h2>
          <motion.p className="text-white/60 text-lg leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7, delay: 0.22 }}>
            No controllers — just hands. Reach out. Grab a number. Pull it into place.
            Math the way kids were born to learn it.
          </motion.p>
        </div>
      </section>

      {/* ── NEW: The Worlds ── */}
      <WorldsSection />

      {/* ── 8. LIGHT — Three things ── */}
      <section className="relative min-h-screen py-40 px-6 lg:px-20 bg-[#FAFAF8] overflow-hidden flex items-center">
        {/* Section transitions */}
        <div className="absolute top-0 inset-x-0 h-56 z-[5] pointer-events-none"
          style={{ background: "linear-gradient(to bottom, #7030A0 0%, rgba(112,48,160,0.55) 40%, transparent 100%)" }} />
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[130px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(196,159,220,0.3) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[110px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(8,145,178,0.12) 0%, transparent 70%)" }} />
        <FishLayer />
        <FloatingParticles />

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="mb-16">
            <motion.p className="text-[#7030A0] font-semibold text-xs tracking-widest uppercase mb-5"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              Inside the Game
            </motion.p>
            <motion.h2 className="text-5xl lg:text-7xl font-extrabold text-[#0D0B12] leading-[1.0]"
              initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
              Three things happen.<br />
              <GradText>All of them change a kid.</GradText>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01", color: "#7030A0",
                title: "They forget they're learning.",
                body: "Students go 20 minutes into recess without noticing. The game is that good. The learning is that real.",
                quote: "\"Math is gonna be so fun from now on.\"",
                who: "4th Grade Student, Ellis Pilot",
              },
              {
                num: "02", color: "#0891B2",
                title: "Skills appear that tests never see.",
                body: "One student scored 17/21 on an in-game algebra assessment. That capability was always there — MathSTAR just gave it a door.",
                quote: "\"They need ACCESS to something like this.\"",
                who: "Ms. Munroe, Classroom Teacher",
              },
              {
                num: "03", color: "#7030A0",
                title: "Math becomes their identity.",
                body: "18% growth mindset increase. Kids leave believing they can keep getting better — because they just did.",
                quote: "\"Wait, that level I just did was algebra?\"",
                who: "Student, Ellis Pilot",
              },
            ].map((card, i) => (
              <motion.div key={i}
                className="relative bg-white border border-[#0D0B12]/6 rounded-3xl p-10 overflow-hidden shadow-sm"
                initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}>
                <div className="absolute -top-4 -right-4 text-[9rem] font-extrabold leading-none select-none pointer-events-none"
                  style={{ color: card.color, opacity: 0.05 }}>{card.num}</div>
                <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: card.color }}>{card.num}</p>
                <h3 className="text-xl font-extrabold text-[#0D0B12] leading-snug mb-5">{card.title}</h3>
                <p className="text-[#0D0B12]/50 text-sm leading-relaxed mb-8">{card.body}</p>
                <div className="border-t border-[#0D0B12]/6 pt-6">
                  <p className="text-[#0D0B12]/60 text-sm font-medium leading-relaxed mb-2 italic">{card.quote}</p>
                  <p className="text-[#0D0B12]/30 text-xs">{card.who}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. DARK — Cinematic quote ── */}
      <QuoteSection />

      {/* ── NEW: Pathway Panels (replaces old CTA) ── */}
      <PathwayPanels />

    </div>
  );
}

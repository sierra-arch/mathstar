"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

/* ─── SVG fish illustrations ─── */
function FishA({ color }: { color: string }) {
  return (
    <svg width="72" height="44" viewBox="0 0 72 44" fill="none">
      <ellipse cx="34" cy="22" rx="26" ry="14" fill={color} />
      <path d="M58 22 L72 10 L72 34 Z" fill={color} />
      <path d="M28 8 Q34 0 40 8" fill={color} opacity="0.8" />
      <circle cx="13" cy="20" r="3.5" fill="rgba(0,0,0,0.3)" />
      <circle cx="12" cy="19" r="1.5" fill="white" opacity="0.7" />
    </svg>
  );
}

function FishB({ color }: { color: string }) {
  return (
    <svg width="58" height="50" viewBox="0 0 58 50" fill="none">
      <ellipse cx="26" cy="25" rx="22" ry="19" fill={color} />
      <path d="M46 25 L58 13 L58 37 Z" fill={color} />
      <path d="M20 6 Q26 0 32 6" fill={color} opacity="0.75" />
      <path d="M20 44 Q26 50 32 44" fill={color} opacity="0.75" />
      <circle cx="11" cy="22" r="4" fill="rgba(0,0,0,0.25)" />
      <circle cx="10" cy="21" r="2" fill="white" opacity="0.65" />
    </svg>
  );
}

function FishC({ color }: { color: string }) {
  return (
    <svg width="88" height="32" viewBox="0 0 88 32" fill="none">
      <ellipse cx="40" cy="16" rx="34" ry="11" fill={color} />
      <path d="M72 16 L88 6 L88 26 Z" fill={color} />
      <path d="M34 5 Q42 0 50 5" fill={color} opacity="0.7" />
      <circle cx="12" cy="14" r="3" fill="rgba(0,0,0,0.25)" />
      <circle cx="11" cy="13" r="1.5" fill="white" opacity="0.6" />
    </svg>
  );
}

const fishData: { Shape: typeof FishA; color: string; cls: string; top: string }[] = [
  { Shape: FishA, color: "rgba(8,145,178,0.5)",    cls: "fish-1", top: "25%" },
  { Shape: FishB, color: "rgba(196,159,220,0.45)", cls: "fish-2", top: "60%" },
  { Shape: FishC, color: "rgba(255,255,255,0.25)", cls: "fish-3", top: "40%" },
  { Shape: FishA, color: "rgba(196,159,220,0.4)",  cls: "fish-4", top: "75%" },
  { Shape: FishC, color: "rgba(8,145,178,0.4)",    cls: "fish-5", top: "15%" },
  { Shape: FishB, color: "rgba(255,255,255,0.2)",  cls: "fish-6", top: "50%" },
];

function FloatingFish() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {fishData.map((f, i) => (
        <div key={i} className={`absolute ${f.cls}`} style={{ top: f.top }}>
          <f.Shape color={f.color} />
        </div>
      ))}
    </div>
  );
}

/* ─── Floating math symbols ─── */
const symbols = [
  { char: "x²", cls: "float-1", style: { top: "12%", left: "6%", fontSize: "4.5rem" } },
  { char: "+", cls: "float-2", style: { top: "58%", left: "4%", fontSize: "7rem" } },
  { char: "∑", cls: "float-3", style: { top: "28%", right: "8%", fontSize: "5.5rem" } },
  { char: "÷", cls: "float-4", style: { top: "72%", right: "6%", fontSize: "6rem" } },
  { char: "∞", cls: "float-5", style: { top: "42%", left: "48%", fontSize: "3.5rem" } },
  { char: "√", cls: "float-6", style: { top: "18%", right: "22%", fontSize: "4.5rem" } },
  { char: "=", cls: "float-7", style: { bottom: "18%", left: "18%", fontSize: "5.5rem" } },
  { char: "π", cls: "float-8", style: { top: "8%", left: "38%", fontSize: "3.5rem" } },
];

function FloatingSymbols() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {symbols.map((s, i) => (
        <div
          key={i}
          className={`absolute text-white font-extrabold select-none ${s.cls}`}
          style={{ ...s.style, opacity: 0.07 }}
        >
          {s.char}
        </div>
      ))}
    </div>
  );
}

/* ─── Scroll-pinned game scenes ─── */
const scenes = [
  {
    tag: "Step 01",
    headline: "Put on the headset.",
    body: "No classroom required. At home or at your local library — strap in, and in seconds you're underwater. The real world disappears.",
    accent: "#C49FDC",
  },
  {
    tag: "Step 02",
    headline: "Math comes alive around you.",
    body: "Fish multiply before your eyes. Coral patterns pulse with prime numbers. You reach out with your actual hands and shape equations in mid-air.",
    accent: "#0891B2",
  },
  {
    tag: "Step 03",
    headline: "Algebra unlocks like a puzzle.",
    body: "What felt impossible on paper becomes intuitive in 3D. Students say it out loud: \"Wait — that was algebra?\" 8 hours. Algebra-ready.",
    accent: "#C49FDC",
  },
];

function StickyScenes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const panel0Opacity = useTransform(scrollYProgress, [0, 0.2, 0.35], [1, 1, 0]);
  const panel1Opacity = useTransform(scrollYProgress, [0.25, 0.4, 0.62, 0.75], [0, 1, 1, 0]);
  const panel2Opacity = useTransform(scrollYProgress, [0.65, 0.78, 1], [0, 1, 1]);

  const panelOpacities = [panel0Opacity, panel1Opacity, panel2Opacity];

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <div ref={containerRef} className="relative" style={{ height: "360vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-[#0F0620]">

        {/* Full-screen game video */}
        <motion.div className="absolute inset-0" style={{ scale: videoScale }}>
          <video
            src="/Gameplay-edited.mp4"
            autoPlay muted loop playsInline
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F0620]/90 via-[#0F0620]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0620]/70 via-transparent to-[#0F0620]/30" />
        </motion.div>

        {/* Ambient glow */}
        <div className="absolute top-[20%] right-[15%] w-[500px] h-[500px] bg-[#7030A0]/20 rounded-full blur-[120px] pulse-glow pointer-events-none" />
        <div className="absolute bottom-[10%] left-[20%] w-[300px] h-[300px] bg-[#0891B2]/15 rounded-full blur-[80px] pulse-glow pointer-events-none" />

        {/* Fish swimming across the scene */}
        <FloatingFish />

        {/* Scroll progress bar */}
        <motion.div
          className="absolute left-0 top-0 h-1 bg-gradient-to-r from-[#7030A0] to-[#0891B2]"
          style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
        />

        {/* Text panels */}
        <div className="absolute inset-0 flex items-center px-8 lg:px-20">
          <div className="max-w-xl relative">
            {scenes.map((scene, i) => (
              <motion.div
                key={i}
                className="absolute top-0 left-0"
                style={{ opacity: panelOpacities[i] }}
              >
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-6"
                  style={{ color: scene.accent }}
                >
                  {scene.tag}
                </p>
                <h2 className="text-4xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6">
                  {scene.headline}
                </h2>
                <p className="text-white/60 text-xl leading-relaxed max-w-md">
                  {scene.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll hint (fades as you scroll) */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]) }}
        >
          <span className="text-white/30 text-xs tracking-widest uppercase">Scroll to explore</span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>

      </div>
    </div>
  );
}

/* ─── Main component ─── */
export default function GameExperience() {
  return (
    <div className="bg-[#0F0620]">

      {/* ── 1. HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F0620]">

        {/* Background video */}
        <div className="absolute inset-0">
          <video
            src="/Gameplay-edited.mp4"
            autoPlay muted loop playsInline
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0620]/60 via-transparent to-[#0F0620]" />
        </div>

        {/* Ambient orbs */}
        <div className="absolute top-[10%] left-[-10%] w-[700px] h-[700px] bg-[#7030A0]/20 rounded-full blur-[140px] pulse-glow pointer-events-none" />
        <div className="absolute bottom-[5%] right-[-5%] w-[500px] h-[500px] bg-[#0891B2]/15 rounded-full blur-[100px] pulse-glow pointer-events-none" />

        {/* Floating symbols + fish */}
        <FloatingSymbols />
        <FloatingFish />

        {/* Hero text */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.p
            className="text-[#C49FDC] font-semibold text-sm tracking-widest uppercase mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            The MathSTAR Experience
          </motion.p>
          <motion.h1
            className="text-6xl lg:text-[5.5rem] font-extrabold text-white leading-[1.02] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            Step inside the{" "}
            <span
              className="italic"
              style={{
                background: "linear-gradient(135deg, #C49FDC, #0891B2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              world
            </span>
            <br />
            where math is alive.
          </motion.h1>
          <motion.p
            className="text-white/50 text-xl max-w-xl mx-auto leading-relaxed mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            An underwater VR universe. Fish that multiply. Equations you hold in your hands.
            8 hours. Algebra-confident.
          </motion.p>

          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="flex items-center gap-2 text-white/30 text-xs tracking-widest uppercase">
              <span>Scroll to experience it</span>
            </div>
            <motion.div
              className="w-px h-16 bg-gradient-to-b from-[#C49FDC]/60 to-transparent"
              animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── 2. ATMOSPHERE ──────────────────────────────────────────── */}
      <section className="relative py-40 px-6 lg:px-20 bg-[#0F0620] overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#7030A0/15_0%,_transparent_70%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-[#0891B2] font-semibold text-sm tracking-widest uppercase mb-8">The World</p>
            <h2 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-10">
              An ocean where{" "}
              <span
                className="italic"
                style={{
                  background: "linear-gradient(135deg, #C49FDC 30%, #0891B2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                math
              </span>
              <br />
              is everywhere.
            </h2>
            <p className="text-white/45 text-xl leading-relaxed max-w-2xl mx-auto">
              Built for kids who never saw themselves as math people.
              Built for the kid who scored 17/21 on an in-game algebra test —
              before they even knew it was algebra.
            </p>
          </motion.div>

          {/* Three atmosphere pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-16">
            {[
              { icon: "🐠", text: "Fish that form equations" },
              { icon: "🤲", text: "Math you hold in your hands" },
              { icon: "🌊", text: "An ocean that teaches" },
              { icon: "⭐", text: "Algebra hidden in adventure" },
            ].map((pill, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-white/70 text-sm font-medium"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="text-lg">{pill.icon}</span>
                {pill.text}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. STICKY SCROLL SCENES ────────────────────────────────── */}
      <StickyScenes />

      {/* ── 4. MANIPULATIVES VIDEO ─────────────────────────────────── */}
      <section className="relative h-screen overflow-hidden bg-[#0F0620]">

        <video
          src="/Manipulatives.mp4"
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onLoadedMetadata={(e) => { e.currentTarget.currentTime = 26; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0620] via-[#0F0620]/30 to-[#0F0620]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0620]/70 to-transparent" />

        <div className="absolute inset-0 flex items-end pb-24 px-8 lg:px-20">
          <motion.div
            className="max-w-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-[#0891B2] font-semibold text-xs tracking-widest uppercase mb-4">The Manipulatives</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
              Shape equations
              <br />
              with your bare hands.
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              Reach out. Grab a number. Pull it into place.
              This is math the way kids were born to learn it —
              through touch, movement, and discovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 5. GAME MECHANICS ──────────────────────────────────────── */}
      <section className="relative py-40 px-6 lg:px-20 bg-[#0F0620] overflow-hidden">

        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#7030A0]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0891B2]/10 rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.p
              className="text-[#C49FDC] font-semibold text-sm tracking-widest uppercase mb-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Inside the Game
            </motion.p>
            <motion.h2
              className="text-4xl lg:text-6xl font-extrabold text-white leading-tight"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Three things happen.
              <br />
              <span
                className="italic"
                style={{
                  background: "linear-gradient(135deg, #C49FDC, #0891B2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                All of them change a kid.
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "They forget they're learning.",
                body: "Students go 20 minutes into recess without noticing. The game is that good. The learning is that real.",
                color: "#C49FDC",
                quote: "\"Math is gonna be so fun from now on.\"",
                who: "4th Grade Student, Ellis Pilot",
              },
              {
                num: "02",
                title: "Skills appear that tests never see.",
                body: "One student scored 17/21 on an in-game algebra assessment. That capability was always there. MathSTAR just gave it a door.",
                color: "#0891B2",
                quote: "\"They need ACCESS to something like this.\"",
                who: "Ms. Munroe, Classroom Teacher",
              },
              {
                num: "03",
                title: "Math becomes their identity.",
                body: "18% growth mindset increase. Kids leave believing they can keep getting better — because they just did.",
                color: "#C49FDC",
                quote: "\"Wait, that level I just did was algebra?\"",
                who: "Student, Ellis Pilot",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="relative bg-white/4 border border-white/8 rounded-3xl p-10 overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
              >
                {/* Number watermark */}
                <div
                  className="absolute -top-4 -right-4 text-[9rem] font-extrabold leading-none select-none pointer-events-none"
                  style={{ color: card.color, opacity: 0.07 }}
                >
                  {card.num}
                </div>

                <p
                  className="text-xs font-bold tracking-widest uppercase mb-5"
                  style={{ color: card.color }}
                >
                  {card.num}
                </p>
                <h3 className="text-xl font-extrabold text-white leading-snug mb-5">
                  {card.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8">
                  {card.body}
                </p>

                <div className="border-t border-white/8 pt-6">
                  <p className="text-white/70 text-sm font-medium leading-relaxed mb-2 italic">
                    {card.quote}
                  </p>
                  <p className="text-white/30 text-xs">{card.who}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CINEMATIC QUOTE ─────────────────────────────────────── */}
      <section className="relative py-40 px-6 overflow-hidden bg-[#0A0418]">

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,_#0891B2/12_0%,_transparent_65%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="text-8xl text-[#7030A0]/30 font-serif leading-none mb-4">&ldquo;</div>
            <p className="text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-10">
              They got 17/21 in the game&apos;s test.
              We know they&apos;re capable of this —
              but it doesn&apos;t show up on paper.
              <span
                className="italic block mt-4"
                style={{
                  background: "linear-gradient(135deg, #C49FDC, #0891B2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                They need ACCESS.
              </span>
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-px bg-[#7030A0]/50" />
              <div>
                <p className="text-white/65 font-semibold text-sm">Ms. Munroe</p>
                <p className="text-white/30 text-xs">Classroom Teacher · Ellis Elementary Pilot</p>
              </div>
              <div className="w-12 h-px bg-[#7030A0]/50" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 7. STATS BAR ───────────────────────────────────────────── */}
      <section className="relative py-28 px-6 lg:px-20 bg-[#0F0620] overflow-hidden border-t border-white/5">

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "10/10", label: "students chose math over recess", color: "#C49FDC" },
              { num: "18%", label: "pre → post test gain", color: "#0891B2" },
              { num: "45%", label: "median score jump in 3 sessions", color: "#C49FDC" },
              { num: "10/10", label: "educator satisfaction", color: "#0891B2" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <div className="text-5xl font-extrabold mb-2" style={{ color: stat.color }}>
                  {stat.num}
                </div>
                <div className="text-white/40 text-sm leading-snug">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CTA ─────────────────────────────────────────────────── */}
      <section className="relative py-40 px-6 bg-[#0F0620] overflow-hidden border-t border-white/5">

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#7030A0/25_0%,_transparent_70%)] pointer-events-none" />
        <FloatingSymbols />
        <FloatingFish />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to bring
            <br />
            <span
              className="italic"
              style={{
                background: "linear-gradient(135deg, #C49FDC, #0891B2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              this world
            </span>{" "}
            to your kid?
          </motion.h2>
          <motion.p
            className="text-white/45 text-xl leading-relaxed mb-12 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Two pathways. One for parents. One for educators.
            Both lead to the same place: a kid who loves math.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <Link
              href="/parents"
              className="px-8 py-4 rounded-full font-bold text-white text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ background: "linear-gradient(135deg, #7030A0, #4A1E6B)", boxShadow: "0 4px 30px #7030A0/30" }}
            >
              For Parents →
            </Link>
            <Link
              href="/educators"
              className="px-8 py-4 rounded-full font-bold text-white/80 text-base border border-white/15 hover:border-white/30 hover:text-white hover:-translate-y-0.5 transition-all duration-200"
            >
              For Educators →
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

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
    <div ref={containerRef} className="relative" style={{ height: "210vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-[#080612]">

        {/* Full-screen game video — more visible, lighter overlay */}
        <motion.div className="absolute inset-0" style={{ scale: videoScale }}>
          <video
            src="/Gameplay-edited.mp4"
            autoPlay muted loop playsInline
            className="w-full h-full object-cover opacity-70"
            onLoadedMetadata={(e) => { e.currentTarget.currentTime = 45; e.currentTarget.playbackRate = 0.6; }}
          />
          {/* Lighter left-side gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080612]/85 via-[#080612]/30 to-transparent" />
          {/* Bottom gradient to anchor the scene */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080612]/60 via-transparent to-transparent" />
        </motion.div>

        {/* Scroll progress bar */}
        <motion.div
          className="absolute left-0 top-0 h-[2px] bg-gradient-to-r from-[#7030A0] to-[#0891B2]"
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

        {/* Scroll hint */}
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
    <div className="bg-[#080612]">

      {/* ── 1. HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">

        {/* Background video */}
        <div className="absolute inset-0">
          <video
            src="/Gameplay-edited.mp4"
            autoPlay muted loop playsInline
            className="w-full h-full object-cover opacity-50"
            onLoadedMetadata={(e) => { e.currentTarget.currentTime = 90; e.currentTarget.playbackRate = 0.6; }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080612]/70 via-[#080612]/20 to-[#080612]" />
        </div>

        {/* Hero text — no fish, no symbols */}
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
      <section className="relative py-40 px-6 lg:px-20 bg-[#080612] overflow-hidden">

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

          {/* Atmosphere pills */}
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
      <section className="relative h-screen overflow-hidden bg-[#080612]">

        <video
          src="/Manipulatives.mp4"
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onLoadedMetadata={(e) => { e.currentTarget.currentTime = 26; e.currentTarget.playbackRate = 0.6; }}
        />
        {/* Only a bottom gradient — let the video breathe */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080612] via-[#080612]/40 to-transparent" />

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
            <p className="text-white/55 text-lg leading-relaxed">
              Reach out. Grab a number. Pull it into place.
              This is math the way kids were born to learn it —
              through touch, movement, and discovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 5. GAME MECHANICS ──────────────────────────────────────── */}
      <section className="relative py-40 px-6 lg:px-20 bg-[#080612] overflow-hidden">

        {/* Subtle ambient glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7030A0]/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#0891B2]/6 rounded-full blur-[100px] pointer-events-none" />

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
                className="relative bg-white/[0.03] border border-white/[0.07] rounded-3xl p-10 overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
              >
                {/* Number watermark */}
                <div
                  className="absolute -top-4 -right-4 text-[9rem] font-extrabold leading-none select-none pointer-events-none"
                  style={{ color: card.color, opacity: 0.06 }}
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

                <div className="border-t border-white/[0.07] pt-6">
                  <p className="text-white/65 text-sm font-medium leading-relaxed mb-2 italic">
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
      <section className="relative py-40 px-6 overflow-hidden bg-[#06040E]">

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(8,145,178,0.07)_0%,transparent_65%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="text-8xl text-white/10 font-serif leading-none mb-4">&ldquo;</div>
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
              <div className="w-12 h-px bg-white/15" />
              <div>
                <p className="text-white/65 font-semibold text-sm">Ms. Munroe</p>
                <p className="text-white/30 text-xs">Classroom Teacher · Ellis Elementary Pilot</p>
              </div>
              <div className="w-12 h-px bg-white/15" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 7. STATS BAR ───────────────────────────────────────────── */}
      <section className="relative py-28 px-6 lg:px-20 bg-[#080612] overflow-hidden border-t border-white/[0.05]">

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
      <section className="relative py-40 px-6 bg-[#080612] overflow-hidden border-t border-white/[0.05]">

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(112,48,160,0.12)_0%,transparent_65%)] pointer-events-none" />

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
              style={{ background: "linear-gradient(135deg, #7030A0, #4A1E6B)", boxShadow: "0 4px 30px rgba(112,48,160,0.3)" }}
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

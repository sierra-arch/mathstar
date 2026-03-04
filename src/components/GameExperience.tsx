"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

/* ── Reusable section-number watermark ── */
function SectionNum({ n }: { n: string }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-end px-8 lg:px-16 pointer-events-none select-none overflow-hidden"
      aria-hidden
    >
      <span
        className="text-[22rem] font-extrabold leading-none"
        style={{ color: "rgba(255,255,255,0.03)" }}
      >
        {n}
      </span>
    </div>
  );
}

/* ── Shared video background ── */
function VideoBg({ src, start = 0, opacity = 0.55 }: { src: string; start?: number; opacity?: number }) {
  return (
    <div className="absolute inset-0">
      <video
        src={src}
        autoPlay muted loop playsInline
        className="w-full h-full object-cover"
        style={{ opacity }}
        onLoadedMetadata={(e) => { e.currentTarget.currentTime = start; e.currentTarget.playbackRate = 0.65; }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#080612]/60 via-[#080612]/20 to-[#080612]/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080612]/70 via-transparent to-transparent" />
    </div>
  );
}

/* ── Step slide (one per gameplay step) ── */
function StepSlide({ num, tag, headline, body, accent, videoStart }: {
  num: string; tag: string; headline: string; body: string; accent: string; videoStart: number;
}) {
  return (
    <section className="relative h-screen overflow-hidden bg-[#080612] flex items-end">
      <VideoBg src="/Gameplay-edited.mp4" start={videoStart} opacity={0.6} />
      <SectionNum n={num} />

      {/* Progress tick */}
      <div
        className="absolute top-0 left-0 w-1 h-full opacity-20"
        style={{ background: `linear-gradient(to bottom, transparent, ${accent}, transparent)` }}
      />

      <div className="relative z-10 px-8 lg:px-20 pb-20 max-w-3xl">
        <motion.p
          className="text-xs font-bold tracking-widest uppercase mb-5"
          style={{ color: accent }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          {tag}
        </motion.p>

        <motion.h2
          className="text-5xl lg:text-[5rem] xl:text-[5.5rem] font-extrabold text-white leading-[1.02] mb-7"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          {headline}
        </motion.h2>

        <motion.p
          className="text-white/55 text-lg leading-relaxed max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.22 }}
        >
          {body}
        </motion.p>
      </div>
    </section>
  );
}

/* ── Main component ── */
export default function GameExperience() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.06]);
  const heroOpacity = useTransform(heroScroll, [0, 0.6], [1, 0]);

  return (
    <div className="bg-[#080612]">

      {/* ── 1. HERO ── */}
      <section ref={heroRef} className="relative h-screen overflow-hidden flex items-center justify-center">
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <video
            src="/Gameplay-edited.mp4"
            autoPlay muted loop playsInline
            className="w-full h-full object-cover opacity-50"
            onLoadedMetadata={(e) => { e.currentTarget.currentTime = 90; e.currentTarget.playbackRate = 0.6; }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080612]/70 via-[#080612]/15 to-[#080612]" />
        </motion.div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
          style={{ opacity: heroOpacity }}
        >
          <motion.p
            className="text-[#C49FDC] font-semibold text-sm tracking-widest uppercase mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            The MathSTAR Experience
          </motion.p>

          <motion.h1
            className="text-6xl lg:text-[5.5rem] xl:text-[6rem] font-extrabold text-white leading-[1.0] mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Step inside the{" "}
            <span
              className="italic inline-block pb-1"
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
            className="text-white/45 text-xl max-w-xl mx-auto leading-relaxed mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            An underwater VR universe. Fish that multiply. Equations you hold in your hands.
          </motion.p>

          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.65 }}
          >
            <span className="text-white/25 text-xs tracking-widest uppercase">Scroll to experience it</span>
            <motion.div
              className="w-px h-16 bg-gradient-to-b from-[#C49FDC]/60 to-transparent"
              animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ── 2. THE WORLD ── */}
      <section className="relative h-screen overflow-hidden bg-[#080612] flex items-center justify-center">
        <SectionNum n="01" />

        {/* Ambient glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(112,48,160,0.12) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(8,145,178,0.10) 0%, transparent 70%)" }} />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            className="text-[#0891B2] font-semibold text-xs tracking-widest uppercase mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            The World
          </motion.p>

          <motion.h2
            className="text-5xl lg:text-7xl xl:text-[5.5rem] font-extrabold text-white leading-[1.0] mb-10"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            An ocean where{" "}
            <span
              className="italic inline-block pb-1"
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
          </motion.h2>

          <motion.p
            className="text-white/40 text-xl leading-relaxed max-w-2xl mx-auto mb-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Built for kids who never saw themselves as math people —
            the kid who scored 17/21 on an in-game algebra test before they even knew it was algebra.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: "🐠", text: "Fish that form equations" },
              { icon: "🤲", text: "Math you hold in your hands" },
              { icon: "🌊", text: "An ocean that teaches" },
              { icon: "⭐", text: "Algebra hidden in adventure" },
            ].map((pill, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-white/65 text-sm font-medium"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
              >
                <span className="text-lg">{pill.icon}</span>
                {pill.text}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3–5. STEP SLIDES ── */}
      <StepSlide
        num="02"
        tag="Step 01"
        headline={"Put on\nthe headset."}
        body="No classroom required. At home or at your local library — strap in, and in seconds you're underwater. The real world disappears."
        accent="#C49FDC"
        videoStart={5}
      />
      <StepSlide
        num="03"
        tag="Step 02"
        headline={"Math comes alive\naround you."}
        body="Fish multiply before your eyes. Coral patterns pulse with prime numbers. Reach out with your actual hands and shape equations in mid-air."
        accent="#0891B2"
        videoStart={38}
      />
      <StepSlide
        num="04"
        tag="Step 03"
        headline={"Algebra unlocks\nlike a puzzle."}
        body="What felt impossible on paper becomes intuitive in 3D. Students say it out loud: 'Wait — that was algebra?' 8 hours. Algebra-ready."
        accent="#C49FDC"
        videoStart={68}
      />

      {/* ── 6. MANIPULATIVES ── */}
      <section className="relative h-screen overflow-hidden bg-[#080612] flex items-end">
        <SectionNum n="05" />
        <video
          src="/Manipulatives.mp4"
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.75 }}
          onLoadedMetadata={(e) => { e.currentTarget.currentTime = 26; e.currentTarget.playbackRate = 0.65; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080612] via-[#080612]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080612]/60 via-transparent to-transparent" />

        <div className="relative z-10 px-8 lg:px-20 pb-20 max-w-3xl">
          <motion.p
            className="text-[#0891B2] font-semibold text-xs tracking-widest uppercase mb-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            The Manipulatives
          </motion.p>
          <motion.h2
            className="text-5xl lg:text-[5rem] font-extrabold text-white leading-[1.02] mb-6"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            Shape equations<br />with your bare hands.
          </motion.h2>
          <motion.p
            className="text-white/50 text-lg leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.22 }}
          >
            No controllers — just hands. Reach out. Grab a number. Pull it into place.
            This is math the way kids were born to learn it — through touch, movement, and discovery.
          </motion.p>
        </div>
      </section>

      {/* ── 7. THREE THINGS ── */}
      <section className="relative min-h-screen py-32 px-6 lg:px-20 bg-[#080612] overflow-hidden flex items-center">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#7030A0]/6 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0891B2]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="mb-20">
            <motion.p
              className="text-[#C49FDC] font-semibold text-xs tracking-widest uppercase mb-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Inside the Game
            </motion.p>
            <motion.h2
              className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.0]"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Three things happen.
              <br />
              <span
                className="italic inline-block pb-1"
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
                num: "01", color: "#C49FDC",
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
                num: "03", color: "#C49FDC",
                title: "Math becomes their identity.",
                body: "18% growth mindset increase. Kids leave believing they can keep getting better — because they just did.",
                quote: "\"Wait, that level I just did was algebra?\"",
                who: "Student, Ellis Pilot",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="relative bg-white/[0.03] border border-white/[0.07] rounded-3xl p-10 overflow-hidden"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="absolute -top-4 -right-4 text-[9rem] font-extrabold leading-none select-none pointer-events-none"
                  style={{ color: card.color, opacity: 0.06 }}
                >
                  {card.num}
                </div>
                <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: card.color }}>{card.num}</p>
                <h3 className="text-xl font-extrabold text-white leading-snug mb-5">{card.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8">{card.body}</p>
                <div className="border-t border-white/[0.07] pt-6">
                  <p className="text-white/65 text-sm font-medium leading-relaxed mb-2 italic">{card.quote}</p>
                  <p className="text-white/30 text-xs">{card.who}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CINEMATIC QUOTE ── */}
      <section className="relative h-screen overflow-hidden bg-[#06040E] flex items-center justify-center">
        <SectionNum n="06" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(8,145,178,0.07)_0%,transparent_65%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="text-9xl text-white/8 font-serif leading-none mb-2 select-none">&ldquo;</div>
            <p className="text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-10">
              They got 17/21 in the game&apos;s test.
              We know they&apos;re capable of this —
              but it doesn&apos;t show up on paper.
              <span
                className="italic block mt-5 inline-block pb-1"
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

      {/* ── 9. STATS ── */}
      <section className="relative py-28 px-6 lg:px-20 bg-[#080612] overflow-hidden border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "10/10", label: "students chose math over recess", color: "#C49FDC" },
              { num: "18%",   label: "pre → post test gain", color: "#0891B2" },
              { num: "45%",   label: "median score jump in 3 sessions", color: "#C49FDC" },
              { num: "10/10", label: "educator satisfaction", color: "#0891B2" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="text-5xl lg:text-6xl font-extrabold mb-2" style={{ color: stat.color }}>
                  {stat.num}
                </div>
                <div className="text-white/40 text-sm leading-snug">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. CTA ── */}
      <section className="relative py-40 px-6 bg-[#080612] overflow-hidden border-t border-white/[0.05]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(112,48,160,0.12)_0%,transparent_65%)] pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Ready to bring
            <br />
            <span
              className="italic inline-block pb-1"
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
            className="text-white/40 text-xl leading-relaxed mb-12 max-w-xl mx-auto"
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <Link
              href="/parents"
              className="px-8 py-4 rounded-full font-bold text-white text-base transition-all duration-200 hover:-translate-y-0.5"
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

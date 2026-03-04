"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

/* ── Section number watermark ── */
function SectionNum({ n, dark = true }: { n: string; dark?: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-end px-8 lg:px-16 pointer-events-none select-none overflow-hidden" aria-hidden>
      <span
        className="text-[22rem] font-extrabold leading-none"
        style={{ color: dark ? "rgba(255,255,255,0.03)" : "rgba(112,48,160,0.04)" }}
      >
        {n}
      </span>
    </div>
  );
}

/* ── Dark video slide ── */
function VideoSlide({ num, tag, headline, body, accent, src, videoStart }: {
  num: string; tag: string; headline: string; body: string; accent: string; src: string; videoStart: number;
}) {
  return (
    <section className="relative h-screen overflow-hidden bg-[#080612] flex items-end">
      <div className="absolute inset-0">
        <video
          src={src}
          autoPlay muted loop playsInline
          className="w-full h-full object-cover"
          style={{ opacity: 0.75 }}
          onLoadedMetadata={(e) => { e.currentTarget.currentTime = videoStart; e.currentTarget.playbackRate = 0.65; }}
        />
        {/* Lighter overlays so video breathes */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080612]/40 via-transparent to-[#080612]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080612]/65 via-[#080612]/20 to-transparent" />
      </div>
      <SectionNum n={num} />

      {/* Left accent bar */}
      <div
        className="absolute top-0 left-0 w-1 h-full opacity-30"
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
          className="text-white/60 text-lg leading-relaxed max-w-xl"
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

/* ── Light break slide ── */
function LightSlide({ num, overline, headline, children }: {
  num: string;
  overline: string;
  headline: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative h-screen overflow-hidden bg-[#F7F2FF] flex items-center justify-center">
      {/* Ambient orbs */}
      <div className="absolute top-[-15%] right-[-8%] w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(196,159,220,0.35) 0%, transparent 70%)" }} />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(8,145,178,0.15) 0%, transparent 70%)" }} />
      <SectionNum n={num} dark={false} />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full">
        <motion.p
          className="text-[#7030A0] font-semibold text-xs tracking-widest uppercase mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          {overline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {headline}
        </motion.div>
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {children}
          </motion.div>
        )}
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

      {/* ── 1. HERO (dark video) ── */}
      <section ref={heroRef} className="relative h-screen overflow-hidden flex items-center justify-center">
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <video
            src="/Gameplay-edited.mp4"
            autoPlay muted loop playsInline
            className="w-full h-full object-cover"
            style={{ opacity: 0.65 }}
            onLoadedMetadata={(e) => { e.currentTarget.currentTime = 90; e.currentTarget.playbackRate = 0.6; }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080612]/55 via-[#080612]/10 to-[#080612]" />
        </motion.div>

        <motion.div className="relative z-10 text-center px-6 max-w-5xl mx-auto" style={{ opacity: heroOpacity }}>
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
              className="italic inline-block pb-1 pr-2"
              style={{
                background: "linear-gradient(135deg, #C49FDC, #0891B2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              world
            </span>
            <br />where math is alive.
          </motion.h1>
          <motion.p
            className="text-white/50 text-xl max-w-xl mx-auto leading-relaxed mb-16"
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

      {/* ── 2. LIGHT — "The World" ── */}
      <LightSlide
        num="01"
        overline="The World"
        headline={
          <h2 className="text-5xl lg:text-7xl xl:text-[5.5rem] font-extrabold text-[#0D0B12] leading-[1.0] mb-10">
            An ocean where{" "}
            <span
              className="italic inline-block pb-1 pr-2"
              style={{
                background: "linear-gradient(135deg, #7030A0 20%, #C49FDC 55%, #0891B2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              math
            </span>
            {" "}is everywhere.
          </h2>
        }
      >
        <p className="text-[#0D0B12]/50 text-xl leading-relaxed max-w-2xl mx-auto mb-14">
          Built for kids who never saw themselves as math people —
          the kid who scored 17/21 on an in-game algebra test before they even knew it was algebra.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { icon: "🐠", text: "Fish that form equations" },
            { icon: "🤲", text: "Math you hold in your hands" },
            { icon: "🌊", text: "An ocean that teaches" },
            { icon: "⭐", text: "Algebra hidden in adventure" },
          ].map((pill, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2.5 bg-white/70 border border-[#7030A0]/10 rounded-full px-5 py-3 text-[#0D0B12]/70 text-sm font-medium shadow-sm"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
            >
              <span className="text-lg">{pill.icon}</span>
              {pill.text}
            </motion.div>
          ))}
        </div>
      </LightSlide>

      {/* ── 3–5. DARK VIDEO — Step slides ── */}
      <VideoSlide
        num="02" tag="Step 01"
        headline={"Put on\nthe headset."}
        body="No classroom required. At home or at your local library — strap in, and in seconds you're underwater. The real world disappears."
        accent="#C49FDC"
        src="/Gameplay-edited.mp4"
        videoStart={5}
      />
      <VideoSlide
        num="03" tag="Step 02"
        headline={"Math comes alive\naround you."}
        body="Fish multiply before your eyes. Coral patterns pulse with prime numbers. Reach out with your actual hands and shape equations in mid-air."
        accent="#0891B2"
        src="/Gameplay-edited.mp4"
        videoStart={38}
      />
      <VideoSlide
        num="04" tag="Step 03"
        headline={"Algebra unlocks\nlike a puzzle."}
        body="What felt impossible on paper becomes intuitive in 3D. Students say it out loud: 'Wait — that was algebra?' 8 hours. Algebra-ready."
        accent="#C49FDC"
        src="/Gameplay-edited.mp4"
        videoStart={68}
      />

      {/* ── 6. LIGHT — Stats break ── */}
      <LightSlide
        num="05"
        overline="The Results"
        headline={
          <h2 className="text-5xl lg:text-6xl font-extrabold text-[#0D0B12] leading-[1.0] mb-14">
            The numbers are{" "}
            <span
              className="italic inline-block pb-1 pr-2"
              style={{
                background: "linear-gradient(135deg, #7030A0, #0891B2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              extraordinary.
            </span>
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
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }}
            >
              <div className="text-5xl lg:text-6xl font-extrabold mb-2" style={{ color: stat.color }}>
                {stat.num}
              </div>
              <div className="text-[#0D0B12]/45 text-sm leading-snug">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </LightSlide>

      {/* ── 7. DARK VIDEO — Manipulatives ── */}
      <section className="relative h-screen overflow-hidden bg-[#080612] flex items-end">
        <SectionNum n="06" />
        <video
          src="/Manipulatives.mp4"
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.8 }}
          onLoadedMetadata={(e) => { e.currentTarget.currentTime = 26; e.currentTarget.playbackRate = 0.65; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080612] via-[#080612]/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080612]/55 via-transparent to-transparent" />

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
            className="text-white/60 text-lg leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.22 }}
          >
            No controllers — just hands. Reach out. Grab a number. Pull it into place.
            Math the way kids were born to learn it.
          </motion.p>
        </div>
      </section>

      {/* ── 8. LIGHT — Three things ── */}
      <section className="relative min-h-screen py-32 px-6 lg:px-20 bg-[#FAFAF8] overflow-hidden flex items-center">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[130px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(196,159,220,0.3) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[110px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(8,145,178,0.12) 0%, transparent 70%)" }} />

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="mb-16">
            <motion.p
              className="text-[#7030A0] font-semibold text-xs tracking-widest uppercase mb-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Inside the Game
            </motion.p>
            <motion.h2
              className="text-5xl lg:text-7xl font-extrabold text-[#0D0B12] leading-[1.0]"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Three things happen.
              <br />
              <span
                className="italic inline-block pb-1 pr-2"
                style={{
                  background: "linear-gradient(135deg, #7030A0, #0891B2)",
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
              <motion.div
                key={i}
                className="relative bg-white border border-[#0D0B12]/6 rounded-3xl p-10 overflow-hidden shadow-sm"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="absolute -top-4 -right-4 text-[9rem] font-extrabold leading-none select-none pointer-events-none"
                  style={{ color: card.color, opacity: 0.05 }}
                >
                  {card.num}
                </div>
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
      <section className="relative h-screen overflow-hidden bg-[#06040E] flex items-center justify-center">
        <SectionNum n="07" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(8,145,178,0.08)_0%,transparent_65%)] pointer-events-none" />

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
                className="italic block mt-5 inline-block pb-1 pr-2"
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

      {/* ── 10. LIGHT — CTA ── */}
      <section className="relative min-h-screen py-40 px-6 bg-white overflow-hidden flex items-center justify-center">
        <div className="absolute top-[-15%] left-[-5%] w-[700px] h-[700px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(196,159,220,0.35) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[130px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(8,145,178,0.15) 0%, transparent 70%)" }} />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-5xl lg:text-7xl font-extrabold text-[#0D0B12] leading-tight mb-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Ready to bring
            <br />
            <span
              className="italic inline-block pb-1 pr-2"
              style={{
                background: "linear-gradient(135deg, #7030A0, #0891B2)",
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
            className="text-[#0D0B12]/45 text-xl leading-relaxed mb-12 max-w-xl mx-auto"
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
              style={{ background: "linear-gradient(135deg, #7030A0, #4A1E6B)", boxShadow: "0 8px 40px rgba(112,48,160,0.3)" }}
            >
              For Parents →
            </Link>
            <Link
              href="/educators"
              className="px-8 py-4 rounded-full font-bold text-[#7030A0] text-base border-2 border-[#7030A0]/25 hover:border-[#7030A0]/60 hover:bg-[#F0E6F7] transition-all duration-200"
            >
              For Educators →
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

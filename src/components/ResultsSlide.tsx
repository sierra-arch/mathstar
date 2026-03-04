"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const stats = [
  { num: "10/10",  label: "Students chose math over recess" },
  { num: "18%",   label: "Pre → post test score gain" },
  { num: "45%",   label: "Median score jump in 3 sessions" },
  { num: "10/10", label: "Educator satisfaction rating" },
];

export default function ResultsSlide() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const fadeIn     = useTransform(scrollYProgress, [0.08, 0.3, 0.7, 0.92], [0, 1, 1, 0]);
  const textY      = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-[#080612]">

      {/* ── Full-bleed gameplay video ── */}
      <motion.div className="absolute inset-0" style={{ scale: videoScale }}>
        <video
          src="/Gameplay-edited.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
          onLoadedMetadata={(e) => { e.currentTarget.currentTime = 26; }}
        />
      </motion.div>

      {/* ── Overlays ── */}
      {/* Dark base — heavier at edges, lighter in center so gameplay shows */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080612]/80 via-[#080612]/40 to-[#080612]/85" />
      {/* Left vignette for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080612]/80 via-transparent to-transparent" />
      {/* Purple atmospheric tint */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 60% at 25% 50%, rgba(112,48,160,0.25) 0%, transparent 65%)" }}
      />

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 min-h-screen flex flex-col justify-center px-8 lg:px-20 py-32"
        style={{ opacity: fadeIn, y: textY }}
      >
        <div className="max-w-6xl mx-auto w-full">

          {/* Overline */}
          <motion.p
            className="text-[#C49FDC] font-semibold text-xs tracking-widest uppercase mb-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The Results
          </motion.p>

          {/* Headline */}
          <motion.h2
            className="text-5xl lg:text-[5rem] xl:text-[5.5rem] font-extrabold text-white leading-[1.0] mb-6 max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            The numbers are{" "}
            <span
              className="italic inline-block pb-2 pr-4"
              style={{
                background: "linear-gradient(135deg, #C49FDC 20%, #0891B2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              extraordinary.
            </span>
          </motion.h2>

          {/* Subhead */}
          <motion.p
            className="text-white/50 text-xl leading-relaxed max-w-xl mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Two pilots. Boston Public Library. Ellis Elementary.
            Real kids. Real teachers. Real math — and the data to prove it.
          </motion.p>

          {/* Stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                className="border-t border-white/15 pt-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              >
                <div
                  className="text-5xl lg:text-6xl font-extrabold mb-3 leading-none"
                  style={{
                    background: "linear-gradient(135deg, #C49FDC, #ffffff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.num}
                </div>
                <p className="text-white/45 text-sm leading-snug">{s.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            className="flex items-start gap-6 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="w-1 self-stretch bg-gradient-to-b from-[#7030A0] to-[#0891B2] rounded-full shrink-0" />
            <div>
              <p className="text-white/80 text-lg font-medium leading-relaxed italic mb-3">
                &ldquo;They got 17/21 in the game&apos;s test. We know they&apos;re capable of this — it just doesn&apos;t show up on paper. They need ACCESS.&rdquo;
              </p>
              <p className="text-white/35 text-sm">Ms. Munroe · Classroom Teacher, Ellis Elementary</p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link
              href="/impact"
              className="inline-flex items-center gap-2 text-[#C49FDC] font-semibold text-base hover:gap-4 transition-all"
            >
              See the full case study →
            </Link>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

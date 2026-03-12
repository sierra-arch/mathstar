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
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-[#0d0620]">

      {/* ── Full-bleed gameplay video ── */}
      <motion.div className="absolute inset-0" style={{ scale: videoScale }}>
        <video
          src="/Gameplay-edited.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-90"
          onLoadedMetadata={(e) => { e.currentTarget.currentTime = 26; e.currentTarget.playbackRate = 0.5; }}
        />
      </motion.div>

      {/* ── Overlays — lighter so gameplay color shows ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0620]/30 via-[#0d0620]/10 to-[#0d0620]/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0620]/65 via-transparent to-transparent" />
      {/* Rich purple/teal atmosphere */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 60% at 20% 55%, rgba(112,48,160,0.35) 0%, transparent 60%)" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 50% 40% at 80% 20%, rgba(8,145,178,0.20) 0%, transparent 55%)" }}
      />
      {/* Gradient edge transitions */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#1a0733] to-transparent z-[5] pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#1a0733] to-transparent z-[5] pointer-events-none" />

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
            initial={{ opacity: 0, y: 14 }}
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

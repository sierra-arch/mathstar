"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import RevealText from "@/components/RevealText";
import ParticleField from "@/components/ParticleField";

const stats = [
  { num: "8 hrs", label: "Arithmetic to algebra-confident" },
  { num: "10/10", label: "Educators rate it" },
  { num: "45%",   label: "Median score jump in 3 sessions" },
];

export default function HowItWorksHero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const fadeOut = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const textY   = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);


  return (
    <section
      ref={sectionRef}
      data-snap
      className="relative min-h-screen flex items-center"
      style={{ overflowX: "clip", background: "#0F0620" }}
    >
      {/* ── Atmosphere layer ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep radial center glow */}
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 120% 80% at 50% 55%, rgba(112,48,160,0.22) 0%, rgba(15,6,32,0) 65%)" }}
        />
        {/* Blob 1 — top-right purple */}
        <div
          className="absolute top-[-10%] right-[-6%] w-[920px] h-[920px] rounded-full blur-[110px]"
          style={{ background: "radial-gradient(circle, rgba(196,159,220,0.55) 0%, rgba(112,48,160,0.12) 55%, transparent 75%)" }}
        />
        {/* Blob 2 — bottom-left teal */}
        <div
          className="absolute bottom-[-12%] left-[-6%] w-[780px] h-[780px] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, rgba(8,145,178,0.35) 0%, transparent 65%)" }}
        />
        {/* Blob 3 — mid-left lavender */}
        <div
          className="absolute top-[20%] left-[-8%] w-[720px] h-[720px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(196,159,220,0.40) 0%, transparent 70%)" }}
        />
        {/* Particles */}
        <ParticleField count={80} />
      </div>

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-8 lg:px-16 pt-36 pb-28"
        style={{ y: textY, opacity: fadeOut }}
      >
        <div className="max-w-4xl">

          <RevealText
            as="p"
            className="text-[#C49FDC] font-semibold text-sm tracking-widest uppercase mb-6"
            delay={0.05}
          >
            How It Works
          </RevealText>

          <div className="mb-8">
            <RevealText
              as="h1"
              className="text-5xl sm:text-6xl lg:text-[6.5rem] xl:text-[8rem] font-extrabold text-white leading-[1.0]"
              delay={0.12}
            >
              Simple to start.{" "}
              <br className="hidden lg:block" />
              <span className="italic inline-block pb-2 pr-4 animate-gradient">
                Life-changing
              </span>{" "}
              to experience.
            </RevealText>
          </div>

          <RevealText
            as="p"
            className="text-white/55 text-xl leading-relaxed mb-12 max-w-2xl"
            delay={0.25}
          >
            Three steps. One headset. An underwater world where kids go from
            stuck-in-arithmetic to algebra-confident in 8 hours.
          </RevealText>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <Link
              href="/parents"
              className="px-10 py-4 rounded-full font-bold text-white text-base transition-all duration-200 hover:-translate-y-0.5 w-fit"
              style={{
                background: "linear-gradient(135deg, #9040C8, #5A2880)",
                boxShadow: "0 8px 40px rgba(144,64,200,0.5)",
              }}
            >
              For Parents →
            </Link>
            <Link
              href="/educators"
              className="px-10 py-4 rounded-full font-bold text-white/75 text-base border-2 border-white/20 hover:border-white/50 hover:bg-white/5 transition-all duration-200 w-fit"
            >
              For Educators →
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="flex flex-col sm:flex-row sm:divide-x divide-white/10 border-t border-white/10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            {stats.map((s, i) => (
              <div key={i} className="pt-6 pb-2 sm:pr-12 sm:pl-0 lg:pr-16 first:pl-0">
                <div
                  className="text-5xl font-extrabold mb-2"
                  style={{ color: i % 2 === 0 ? "#C49FDC" : "#38BDF8" }}
                >
                  {s.num}
                </div>
                <p className="text-white/45 text-sm leading-snug">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Bridge blob — bleeds into next section */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-[1000px] h-[700px] pointer-events-none"
        style={{
          bottom: "-280px",
          background: "radial-gradient(circle, rgba(112,48,160,0.30) 0%, transparent 65%)",
          filter: "blur(130px)",
        }}
      />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-8 lg:left-16 z-20"
        style={{ opacity: fadeOut }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="w-px h-10 bg-white/25"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

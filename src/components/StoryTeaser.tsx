"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function StoryTeaser() {
  return (
    <section className="py-28 px-6 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left — the hook */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-4">
            Our Story
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-ink leading-tight mb-6">
            One graphic novel
            <br />
            changed{" "}
            <em className="not-italic italic text-[#7030A0]">everything.</em>
          </h2>
          <p className="text-lg text-ink/60 leading-relaxed mb-8">
            Our founder was expelled from his first school. Diagnosed with ADHD, emotional impairment,
            a language disability. And in math? He struggled — until a school custodian handed him a
            mathematics graphic novel and gifted him the wonder.
          </p>
          <p className="text-lg text-ink/60 leading-relaxed mb-10">
            That wonder took him to Oxford, to a quantum physics paper, to Netflix. And now he&apos;s
            determined every child gets the same gift.
          </p>
          <Link
            href="/story"
            className="inline-flex items-center gap-2 text-[#7030A0] font-semibold text-base hover:gap-3 transition-all"
          >
            Read the full story →
          </Link>
        </motion.div>

        {/* Right — pull quote */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-[#F8F2FC] to-[#EDE9FE] rounded-3xl" />
          <div className="relative bg-white rounded-2xl p-10 shadow-sm">
            <div className="text-6xl text-[#7030A0]/20 font-serif leading-none mb-4">&ldquo;</div>
            <p className="text-2xl lg:text-3xl font-extrabold text-ink leading-snug mb-6">
              That day, someone gifted me the wonder of math.
            </p>
            <p className="text-ink/50 text-sm font-medium">— Femi, Founder of MathSTAR</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

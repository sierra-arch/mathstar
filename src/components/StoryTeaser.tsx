"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function StoryTeaser() {
  return (
    <section className="relative py-40 px-6 lg:px-16 bg-white overflow-hidden">

      {/* Ambient orbs */}
      <div className="absolute top-[-10%] left-[-15%] w-[600px] h-[600px] bg-[#7030A0]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#0891B2]/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* Left — the hook */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-5">
            Our Story
          </p>
          <h2 className="text-4xl lg:text-[3.25rem] font-extrabold text-ink leading-tight mb-8">
            The gift that changed{" "}
            <em className="not-italic italic text-[#7030A0]">everything.</em>
          </h2>
          <p className="text-xl text-ink/60 leading-relaxed mb-7">
            Our founder was expelled from his first school. Diagnosed with ADHD, emotional impairment,
            a language disability. And in math? He struggled — until a school custodian handed him a
            mathematics graphic novel and gifted him the wonder.
          </p>
          <p className="text-xl text-ink/60 leading-relaxed mb-12">
            That wonder took him to Oxford, to a quantum physics paper, to Netflix. And now he&apos;s
            determined every child gets the same gift.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-[#7030A0] font-semibold text-lg hover:gap-4 transition-all"
          >
            Read the full story →
          </Link>
        </motion.div>

        {/* Right — wonder photo with quote overlay */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          {/* Glow behind image */}
          <div className="absolute -inset-6 bg-gradient-to-br from-[#7030A0]/20 via-[#EDE9FE]/50 to-[#0891B2]/20 rounded-[40px] blur-2xl pointer-events-none" />

          <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-[#7030A0]/15">
            <Image
              src="/headshots/Femi%20:%20Founder/Femi.webp"
              alt="Femi Fadugba, Founder of MathSTAR"
              width={700}
              height={700}
              className="w-full h-[480px] object-cover object-top"
            />
            {/* Gradient at bottom for quote readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Founder quote overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="text-5xl text-white/30 font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-white font-extrabold text-xl lg:text-2xl leading-snug mb-4">
                That day, someone gifted me the wonder of math.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-6 h-px bg-[#0891B2]/70" />
                <p className="text-white/60 text-sm font-medium">Femi, Founder of MathSTAR</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

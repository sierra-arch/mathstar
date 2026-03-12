"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="get" className="relative pt-24 pb-36 px-6 lg:px-16" style={{ background: "linear-gradient(to bottom, #FAFAF8 0%, #FAFAF8 35%, #4A1E6B 65%, #7030A0 100%)" }}>

      {/* Gradient mesh blobs — soft, large, overlapping */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(196,159,220,0.6) 0%, rgba(112,48,160,0.22) 42%, transparent 70%)" }}
        />
        <div
          className="absolute -top-24 -right-24 w-[550px] h-[550px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(8,145,178,0.28) 0%, transparent 62%)" }}
        />
        <div
          className="absolute -bottom-16 -left-16 w-[420px] h-[420px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(74,30,107,0.22) 0%, transparent 62%)" }}
        />
        <div
          className="absolute top-0 left-1/3 w-[350px] h-[350px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(240,230,247,0.9) 0%, transparent 65%)" }}
        />
      </div>


      <div className="max-w-3xl mx-auto text-center relative z-10">

        <motion.p
          className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-7"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Don&apos;t close the door on their potential
        </motion.p>

        <motion.h2
          className="text-5xl lg:text-[5rem] font-extrabold text-[#0D0B12] leading-[1.02] mb-7"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Gift them the<br />
          <span
            className="italic inline-block pb-2 pr-4"
            style={{
              background: "linear-gradient(135deg, #7030A0 20%, #C49FDC 55%, #0891B2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            wonder
          </span><br />of math.
        </motion.h2>

        <motion.p
          className="text-[#0D0B12]/60 text-xl leading-relaxed mb-14 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Kids choose it over recess. Educators rate it 10/10.
          And yes — they&apos;re saying &ldquo;I love this&rdquo; about math now.
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Link
            href="/reviews"
            className="px-10 py-4 rounded-full font-bold text-[#7030A0] bg-white text-base transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#F0E6F7]"
            style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.15)" }}
          >
            See what families are saying →
          </Link>
        </motion.div>

        <motion.p
          className="text-white/30 text-sm mt-7"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
        >
          Available at home and at participating public libraries
        </motion.p>
      </div>
    </section>
  );
}

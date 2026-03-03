"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="get" className="bg-[#0F0620] pb-28 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7030A0] via-[#5B21B6] to-[#0891B2]" />

          {/* Decorative blobs */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center px-8 py-20">
            <p className="text-white/60 font-semibold text-sm tracking-widest uppercase mb-5">
              Don&apos;t close the door on their potential
            </p>

            <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Gift them the{" "}
              <em className="not-italic italic">wonder</em>
              <br />
              of math.
            </h2>

            <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Kids choose it over recess. Educators rate it 10/10. And yes —
              they&apos;re saying <em>&ldquo;I love this&rdquo;</em> about math now.
            </p>

            <a
              href="https://shepherdxr.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#7030A0] font-bold px-12 py-5 rounded-full text-lg hover:bg-purple-50 transition-colors shadow-2xl"
            >
              Get MathSTAR Today →
            </a>

            <p className="text-white/40 text-sm mt-6">
              Available at home and at participating libraries
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ParentsHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-20 px-6 lg:px-16 bg-[#F7F2FF] overflow-hidden">

      {/* Ambient orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#7030A0]/18 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-8%] w-[500px] h-[500px] bg-teal-400/12 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-6">
            For Parents
          </p>

          <h1 className="text-5xl lg:text-[4rem] font-extrabold text-ink leading-[1.05] mb-8">
            Don&apos;t let math close
            <br />
            the door on your child&apos;s{" "}
            <em className="not-italic italic text-[#7030A0]">potential.</em>
          </h1>

          <p className="text-xl text-ink/60 max-w-xl mb-12 leading-relaxed">
            MathSTAR is an 8-hour VR adventure your child can experience at home or at
            your local library. They put on the headset and enter an underwater world
            where fish multiply and divide before their eyes — and math finally clicks.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="https://shepherdxr.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7030A0] text-white font-semibold px-10 py-4 rounded-full text-base hover:bg-[#4A1E6B] transition-colors shadow-xl shadow-[#7030A0]/25"
            >
              Get MathSTAR for Your Child →
            </Link>
            <Link href="/contact" className="text-ink/50 font-medium text-sm hover:text-ink transition-colors self-center">
              Have questions? Contact us
            </Link>
          </div>

          {/* Social proof row */}
          <div className="mt-14 flex flex-wrap items-center gap-8 pt-10 border-t border-[#7030A0]/12">
            <div>
              <div className="text-3xl font-extrabold text-[#7030A0]">8 hrs</div>
              <div className="text-xs text-ink/45 mt-1">To algebra-ready</div>
            </div>
            <div className="w-px h-10 bg-[#7030A0]/12 hidden sm:block" />
            <div>
              <div className="text-3xl font-extrabold text-[#7030A0]">10/10</div>
              <div className="text-xs text-ink/45 mt-1">Educator rating</div>
            </div>
            <div className="w-px h-10 bg-[#7030A0]/12 hidden sm:block" />
            <div>
              <div className="text-xl font-extrabold text-[#7030A0]">&ldquo;I love this&rdquo;</div>
              <div className="text-xs text-ink/45 mt-1">Kids, actually</div>
            </div>
          </div>
        </motion.div>

        {/* Right — photo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          {/* Glow behind image */}
          <div className="absolute -inset-6 bg-gradient-to-br from-[#7030A0]/20 to-teal-300/15 rounded-[40px] blur-2xl pointer-events-none" />

          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#7030A0]/20">
            <Image
              src="/pexels-julia-m-cameron-4144037.jpg"
              alt="Child smiling with VR headset at home"
              width={700}
              height={840}
              className="w-full h-[520px] lg:h-[600px] object-cover object-top"
              priority
            />
            {/* Subtle gradient overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#7030A0]/20 via-transparent to-transparent" />

            {/* Floating quote chip */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl px-6 py-4 shadow-lg">
              <p className="text-ink font-semibold text-sm leading-snug">
                &ldquo;Wait, that level I just did was algebra?&rdquo;
              </p>
              <p className="text-ink/40 text-xs mt-1">A student, after a MathSTAR session</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

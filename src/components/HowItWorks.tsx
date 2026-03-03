"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Put on the headset",
    desc: "At home or at your local library — no special setup needed. Strap in and you're there.",
    gradient: "from-[#F8F2FC] to-[#EDE9FE]",
    accent: "#7030A0",
  },
  {
    num: "02",
    title: "Enter the underwater world",
    desc: "Fish multiply and divide before their eyes. They reach out and shape equations with their bare hands.",
    gradient: "from-[#E0F7FA] to-[#B2EBF2]",
    accent: "#0891B2",
  },
  {
    num: "03",
    title: "Watch math click",
    desc: "8 hours from arithmetic to algebra-confident. Kids beg to stay. Educators rate it 10/10.",
    gradient: "from-[#F8F2FC] to-[#EDE9FE]",
    accent: "#7030A0",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-40 px-6 lg:px-16 bg-[#F7F2FF] overflow-hidden">

      {/* Ambient orbs */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-[#7030A0]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-8%] w-[400px] h-[400px] bg-teal-400/15 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="text-center mb-20">
          <motion.p
            className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.p>
          <motion.h2
            className="text-4xl lg:text-[3.25rem] font-extrabold text-ink leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Simple to start.{" "}
            <em className="not-italic italic text-[#7030A0]">Life-changing</em>{" "}
            to experience.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className={`bg-gradient-to-br ${step.gradient} rounded-3xl p-10`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div
                className="text-7xl font-extrabold mb-8 opacity-20"
                style={{ color: step.accent }}
              >
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-ink mb-4">{step.title}</h3>
              <p className="text-ink/60 leading-relaxed text-base">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Video row */}
        <motion.div
          className="rounded-3xl overflow-hidden shadow-2xl shadow-[#7030A0]/15 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <video
            src="/Manipulatives.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full object-cover max-h-[520px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0620]/50 to-transparent pointer-events-none" />
          <div className="absolute bottom-8 left-10">
            <p className="text-white/90 text-base font-semibold">Shape equations with your bare hands</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

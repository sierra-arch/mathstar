"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Placeholder component for photos/videos coming soon
function VisualPlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full h-52 rounded-2xl flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#EDE9FE] to-[#E0F7FA] border border-[#7030A0]/10">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(112,48,160,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="M8 5V3.5" />
      </svg>
      <span className="text-[#7030A0]/30 text-xs tracking-widest uppercase font-medium">{label}</span>
    </div>
  );
}

const steps = [
  {
    num: "01",
    title: "Put on the headset",
    desc: "At home or at your local library — no special setup needed. Strap in and you're there.",
    accent: "#7030A0",
    visual: (
      <VisualPlaceholder label="Photo · Coming soon" />
    ),
  },
  {
    num: "02",
    title: "Enter the underwater world",
    desc: "No controllers — just their hands. Fish multiply before their eyes. They reach out and shape equations in mid-air.",
    accent: "#0891B2",
    visual: (
      <div className="w-full h-52 rounded-2xl overflow-hidden">
        <Image
          src="/Stock Images/pexels-julia-m-cameron-4144037.jpg"
          alt="Child engaged in VR learning"
          width={600}
          height={400}
          className="w-full h-full object-cover object-center"
        />
      </div>
    ),
  },
  {
    num: "03",
    title: "Watch math click",
    desc: "8 hours from arithmetic to algebra-confident. Kids beg to stay. Educators rate it 10/10.",
    accent: "#7030A0",
    visual: (
      <div className="w-full h-52 rounded-2xl overflow-hidden">
        <Image
          src="/Stock Images/pexels-julia-m-cameron-4144150.jpg"
          alt="Student experiencing breakthrough moment"
          width={600}
          height={400}
          className="w-full h-full object-cover object-center"
        />
      </div>
    ),
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
              className="bg-white rounded-3xl p-6 flex flex-col gap-5 shadow-sm shadow-[#7030A0]/5 border border-[#7030A0]/6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Visual slot */}
              {step.visual}

              {/* Text */}
              <div className="px-2 pb-2">
                <div
                  className="text-5xl font-extrabold mb-3 opacity-15 leading-none"
                  style={{ color: step.accent }}
                >
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">{step.title}</h3>
                <p className="text-ink/55 leading-relaxed text-base">{step.desc}</p>
              </div>
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
            onLoadedMetadata={(e) => { e.currentTarget.currentTime = 26; }}
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

"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "🥽",
    title: "Focused Environment",
    color: "#7030A0",
    bg: "from-[#7030A0]/10 to-[#7030A0]/4",
    border: "border-[#7030A0]/15",
    body: "VR creates a private, distraction-free world — especially impactful for students with ADHD, ADD, or anxiety. To ensure what students master in-game transfers to paper, sessions are paired with worksheets and guided Q&A.",
    tags: ["ADHD / ADD", "Anxiety", "Sensory sensitivity"],
  },
  {
    icon: "🤲",
    title: "Embodied Learning",
    color: "#0891B2",
    bg: "from-[#0891B2]/10 to-[#0891B2]/4",
    border: "border-[#0891B2]/15",
    body: "Students solve equations with their hands in a striking audiovisual world. This multi-sensory approach works for visual, auditory, and kinesthetic learners — and is especially supportive for students with dyslexia or dysgraphia.",
    tags: ["Visual learners", "Kinesthetic", "Dyslexia / Dysgraphia"],
  },
  {
    icon: "🔊",
    title: "Accessible Guidance",
    color: "#7030A0",
    bg: "from-[#7030A0]/10 to-[#7030A0]/4",
    border: "border-[#7030A0]/15",
    body: "Step-by-step narration with multi-language subtitles and spoken audio ensures no student is left behind. Built from the ground up to support deaf and hard-of-hearing students and English learners.",
    tags: ["Deaf / Hard of Hearing", "English Learners", "Multi-language"],
  },
];

export default function LearningFeatures({ dark = false }: { dark?: boolean }) {
  const headingColor = dark ? "text-white" : "text-[#0D0B12]";
  const overlineColor = dark ? "text-[#C49FDC]" : "text-[#7030A0]";
  const subColor = dark ? "text-white/50" : "text-[#0D0B12]/50";

  return (
    <section className={`relative py-24 px-6 lg:px-16 ${dark ? "bg-[#0D0B12]" : "bg-[#F7F2FF]"} overflow-hidden`}>

      {/* Ambient orbs */}
      <div className="absolute top-[-5%] right-[-5%] w-[400px] h-[400px] bg-[#7030A0]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[350px] h-[350px] bg-[#0891B2]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="text-center mb-14">
          <motion.p
            className={`${overlineColor} font-semibold text-sm tracking-widest uppercase mb-4`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Built for Every Learner
          </motion.p>
          <motion.h2
            className={`text-3xl lg:text-4xl font-extrabold ${headingColor} leading-tight`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Designed around how{" "}
            <em className="not-italic italic text-[#0891B2]">your student actually learns.</em>
          </motion.h2>
          <motion.p
            className={`${subColor} text-sm mt-3 max-w-xl mx-auto`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            MathSTAR meets students where they are — not where the worksheet expects them to be.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className={`rounded-3xl p-8 border ${f.border} bg-gradient-to-br ${f.bg} relative overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="text-4xl mb-5">{f.icon}</div>
              <h3
                className="text-xl font-extrabold mb-3 leading-snug"
                style={{ color: f.color }}
              >
                {f.title}
              </h3>
              <p className={`${dark ? "text-white/60" : "text-[#0D0B12]/60"} text-sm leading-relaxed mb-6`}>
                {f.body}
              </p>
              <div className="flex flex-wrap gap-2">
                {f.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: `${f.color}18`, color: f.color }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

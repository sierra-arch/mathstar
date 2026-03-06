"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    icon: "🥽",
    photo: "/Stock Images/pexels-artempodrez-7774026.jpg",
    photoAlt: "Student focused in private learning environment",
    title: "Focused Environment",
    color: "#7030A0",
    bg: "from-[#7030A0]/10 to-[#7030A0]/4",
    border: "border-[#7030A0]/15",
    body: "VR creates a private, distraction-free world — especially impactful for students with ADHD, ADD, or anxiety. To ensure what students master in-game transfers to paper, sessions are paired with worksheets and guided Q&A.",
    tags: ["ADHD / ADD", "Anxiety", "Sensory sensitivity"],
  },
  {
    icon: "🤲",
    photo: "/Stock Images/pexels-eren-li-7241498.jpg",
    photoAlt: "Hands-on embodied learning",
    title: "Embodied Learning",
    color: "#0891B2",
    bg: "from-[#0891B2]/10 to-[#0891B2]/4",
    border: "border-[#0891B2]/15",
    body: "Students solve equations with their hands in a striking audiovisual world. This multi-sensory approach works for visual, auditory, and kinesthetic learners — and is especially supportive for students with dyslexia or dysgraphia.",
    tags: ["Visual learners", "Kinesthetic", "Dyslexia / Dysgraphia"],
  },
  {
    icon: "🔊",
    photo: "/Stock Images/pexels-anastasia-shuraeva-9821666.jpg",
    photoAlt: "Accessible guided learning",
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
    <section
      className={`relative py-24 px-6 lg:px-16 ${dark ? "bg-[#0D0B12]" : "bg-[#F7F2FF]"}`}
      style={{ overflowX: "clip" }}
    >

      {/* Ambient orbs — clipped horizontally */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-8%] w-[700px] h-[700px] bg-[#7030A0]/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-10%] left-[-8%] w-[650px] h-[650px] bg-[#0891B2]/8 rounded-full blur-[130px]" />
        <div className="absolute top-[-12%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C49FDC]/15 rounded-full blur-[110px]" />
      </div>

      {/* Bridge blob down */}
      {!dark && (
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none"
          style={{
            bottom: "-240px",
            background: "radial-gradient(circle, rgba(8,145,178,0.15) 0%, transparent 65%)",
            filter: "blur(120px)",
          }}
        />
      )}

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
              className={`rounded-3xl border ${f.border} bg-gradient-to-br ${f.bg} relative overflow-hidden ${i === 0 ? "lg:col-span-2" : i === 2 ? "lg:col-span-3" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 100, damping: 18 }}
              whileHover={{
                y: -6,
                boxShadow: `0 24px 64px ${f.color}28`,
                transition: { duration: 0.2 },
              }}
            >
              <div className="relative w-full overflow-hidden" style={{ height: i === 2 ? "280px" : "220px" }}>
                <Image
                  src={f.photo}
                  alt={f.photoAlt}
                  fill
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
              </div>
              <div className={`${i === 2 ? "p-10 lg:flex lg:gap-16 lg:items-start" : "p-10"}`}>
                <div className={i === 2 ? "lg:flex-1" : ""}>
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
                </div>
                <div className={`flex flex-wrap gap-2 ${i === 2 ? "lg:flex-col lg:items-end lg:self-end lg:flex-none" : ""}`}>
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

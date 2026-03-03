"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const story = [
  {
    text: "I was expelled from my first elementary school. Teachers told my mom I had ADHD, emotional impairment, and a language disability. And in Math? I struggled.",
    highlight: false,
  },
  {
    text: "Then I got lucky: our middle school custodian handed me a mathematics graphic novel. Instead of dreaded scribbles on paper, I saw math brought to life — in spirals, seashells, and galaxies.",
    highlight: false,
  },
  {
    text: "That day, someone gifted me the wonder of math.",
    highlight: true,
  },
  {
    text: "Wonder replaced fear with curiosity, even excitement. I worked harder, grew confident, and years later, earned my Master's at Oxford — publishing a quantum physics paper in the same journal where Einstein published his own famous equations.",
    highlight: false,
  },
  {
    text: "Math opened the door to careers in consulting and finance, and to writing a physics-inspired novel that Netflix is adapting into a movie. It gave me choices — and every child deserves the same, whatever their own path looks like.",
    highlight: false,
  },
  {
    text: "But most kids aren't getting so lucky. And as they learn to fear math, doors close. They're waiting for someone to gift them the wonder they deserve and so desperately need...",
    highlight: false,
  },
  {
    text: "That's why we created MathSTAR.",
    highlight: true,
  },
];

function AnimatedParagraph({
  text,
  highlight,
}: {
  text: string;
  highlight: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <motion.p
      ref={ref}
      className={
        highlight
          ? "text-2xl lg:text-3xl font-extrabold text-[#7030A0] leading-snug"
          : "text-xl lg:text-2xl text-ink/65 font-normal leading-relaxed"
      }
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
    >
      {text}
    </motion.p>
  );
}

export default function FounderStory() {
  return (
    <section id="story" className="relative py-40 px-6 lg:px-16 bg-[#F7F2FF] overflow-hidden">

      {/* Ambient orbs */}
      <div className="absolute top-[5%] right-[-10%] w-[500px] h-[500px] bg-[#7030A0]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-10%] w-[400px] h-[400px] bg-[#7030A0]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.p
          className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Our Story
        </motion.p>

        <motion.h2
          className="text-4xl lg:text-[3.25rem] font-extrabold text-ink mb-20 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Gifting the Wonder of Math
        </motion.h2>

        <div className="space-y-12">
          {story.map((s, i) => (
            <AnimatedParagraph key={i} text={s.text} highlight={s.highlight} />
          ))}
        </div>

        {/* MathSTAR description */}
        <motion.div
          className="mt-20 bg-white rounded-3xl p-12 border border-[#7030A0]/10 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xl text-ink/75 leading-relaxed mb-8">
            This <strong className="text-ink">8-hour VR intervention</strong> takes students from stuck-in-arithmetic to
            algebra-confident. They put on the headset at home or at their local library, and enter an underwater world
            where fish multiply and divide before their eyes, where they{" "}
            <strong className="text-ink">shape equations with their bare hands.</strong>
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-3 mb-6">
            <div className="text-2xl font-extrabold text-[#7030A0]">Kids choose it over recess.</div>
            <div className="text-2xl font-extrabold text-[#7030A0]">Educators rate it 10/10.</div>
          </div>
          <p className="text-base text-ink/55">
            But here&apos;s what really matters: kids are saying,{" "}
            <em>&ldquo;I love this,&rdquo;</em> and{" "}
            <em>&ldquo;Math is my favorite subject now.&rdquo;</em>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

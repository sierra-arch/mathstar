"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

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
    accentColor: "#7030A0",
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
    accentColor: "#0891B2",
  },
];

function AnimatedParagraph({
  text,
  highlight,
  accentColor = "#7030A0",
}: {
  text: string;
  highlight: boolean;
  accentColor?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  if (highlight) {
    return (
      <motion.div
        ref={ref}
        className="relative pl-6 border-l-4"
        style={{ borderColor: accentColor }}
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p
          className="text-2xl lg:text-3xl font-extrabold leading-snug"
          style={{ color: accentColor }}
        >
          {text}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.p
      ref={ref}
      className="text-xl lg:text-2xl text-[#0D0B12]/60 font-normal leading-relaxed"
      initial={{ opacity: 0, y: 24 }}
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
      <div className="absolute bottom-[5%] left-[-10%] w-[400px] h-[400px] bg-[#0891B2]/12 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-14">
          <motion.p
            className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Femi Fadugba · Founder
          </motion.p>

          <motion.h2
            className="text-4xl lg:text-[3.25rem] font-extrabold text-[#0D0B12] leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Gifting the Wonder of Math
          </motion.h2>
        </div>

        {/* 2-col: photo + story */}
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-16 items-start">

          {/* Photo column — sticky on scroll */}
          <motion.div
            className="lg:sticky lg:top-24"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4]">
              <Image
                src="/headshots/Femi%20:%20Founder/femi-fadugba-5108468.jpg"
                alt="Femi Fadugba, Founder of ShepherdXR"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B12]/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-extrabold text-lg leading-snug">Femi Fadugba</p>
                <p className="text-white/65 text-sm">Founder &amp; CEO · ShepherdXR</p>
                <p className="text-white/45 text-xs mt-1">MSc Quantum Physics · Oxford</p>
              </div>
            </div>
          </motion.div>

          {/* Story column */}
          <div className="space-y-14">
            {story.map((s, i) => (
              <AnimatedParagraph
                key={i}
                text={s.text}
                highlight={s.highlight}
                accentColor={s.accentColor}
              />
            ))}
          </div>

        </div>

        {/* MathSTAR callout */}
        <motion.div
          className="mt-24 relative overflow-hidden rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Gradient background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(112,48,160,0.08) 0%, rgba(255,255,255,0) 50%, rgba(8,145,178,0.06) 100%)",
            }}
          />
          <div className="relative bg-white/70 backdrop-blur-sm border border-[#7030A0]/12 rounded-3xl p-12">
            <p className="text-xl text-[#0D0B12]/75 leading-relaxed mb-8">
              This <strong className="text-[#0D0B12]">8-hour VR intervention</strong> takes students from
              stuck-in-arithmetic to algebra-confident. They put on the headset at home or at their local library,
              and enter an underwater world where fish multiply and divide before their eyes, where they{" "}
              <strong className="text-[#0D0B12]">shape equations with their bare hands.</strong>
            </p>

            <div className="flex flex-wrap gap-8 mb-8 pt-6 border-t border-[#0D0B12]/8">
              <div>
                <div className="text-3xl font-extrabold text-[#7030A0]">10/10</div>
                <div className="text-xs text-[#0D0B12]/45 mt-1 uppercase tracking-widest">Educator rating</div>
              </div>
              <div className="w-px bg-[#0D0B12]/10 hidden sm:block" />
              <div>
                <div className="text-3xl font-extrabold text-[#0891B2]">+18%</div>
                <div className="text-xs text-[#0D0B12]/45 mt-1 uppercase tracking-widest">Test score gain</div>
              </div>
              <div className="w-px bg-[#0D0B12]/10 hidden sm:block" />
              <div>
                <div className="text-3xl font-extrabold text-[#7030A0]">10/10</div>
                <div className="text-xs text-[#0D0B12]/45 mt-1 uppercase tracking-widest">Chose math over recess</div>
              </div>
            </div>

            <p className="text-base text-[#0D0B12]/55">
              But here&apos;s what really matters: kids are saying,{" "}
              <em className="text-[#7030A0] font-semibold">&ldquo;I love this,&rdquo;</em> and{" "}
              <em className="text-[#7030A0] font-semibold">&ldquo;Math is my favorite subject now.&rdquo;</em>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

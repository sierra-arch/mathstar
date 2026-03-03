"use client";

import { motion } from "framer-motion";

const featured = [
  {
    quote:
      "My son came to me yesterday at home and said, 'Mom, maths is my favourite subject now.'",
    who: "Parent",
    context: "Roxbury Library Pilot, Aug 2025",
    tag: "Math Love",
  },
  {
    quote:
      "He was saying: 'Mommy I want to go back. Mommy, I want to go back.' He's not strong at math at all, but he came home after playing it so excited.",
    who: "Parent",
    context: "Roxbury Library Pilot, Aug 2025",
    tag: "Engagement",
  },
  {
    quote:
      "There's been a couple times when he's doing his school homework where he's come to me and said, 'I remember this from the VR game.'",
    who: "Parent",
    context: "6 months after pilot",
    tag: "Transfer",
  },
];

const grid = [
  {
    quote: "Math is gonna be so fun from now on.",
    who: "Student, Ellis Pilot",
  },
  {
    quote: "I love this.",
    who: "Student, Ellis Pilot",
  },
  {
    quote: "Wait, that level I just did was algebra?",
    who: "Student, Ellis Pilot",
  },
  {
    quote: "They went 20 minutes into recess and didn't notice.",
    who: "Ms. Joseph, Teacher — Ellis Pilot",
  },
  {
    quote:
      "Students' excitement and motivation before, during, and after was up. Even on days where we did not have VR.",
    who: "Mr. McKinnon, Paraprofessional",
  },
  {
    quote:
      "He got 17/21 in the game's test... we know he's capable of this, but it doesn't show up on paper. He needs ACCESS to something like this.",
    who: "Ms. Munroe, Teacher",
  },
  {
    quote:
      "In school, with math, it's like as soon as I learn it, it goes straight out of my head. But with this, I can see it. And so it sticks.",
    who: "Student, Roxbury Library Pilot",
  },
  {
    quote:
      "That has been especially powerful for our EI students who struggle to access math in traditional formats.",
    who: "Ms. Cruz, School Administrator",
  },
  {
    quote: "Do we get to play it?!",
    who: "Every student who walked past the classroom",
  },
  {
    quote: "Engagement has opened the door... now we need to be able to see what students are learning.",
    who: "Ms. Cruz, School Administrator",
  },
  {
    quote: "I noticed that it helped build students' confidence and engagement.",
    who: "Ms. Joseph, Teacher",
  },
  {
    quote: "I would invest in this. I'd put 200 dollars into it.",
    who: "Student (age ~10), Roxbury Library Pilot",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="relative">
      {/* Torn paper transition from light → dark */}
      <div className="bg-[#0F0620] relative">
        <svg
          viewBox="0 0 1440 90"
          className="w-full fill-[#FAFAF8] block"
          preserveAspectRatio="none"
          style={{ marginBottom: "-2px" }}
        >
          <path d="M0,0 Q60,70 150,40 Q240,10 360,55 Q480,90 600,50 Q720,15 840,60 Q960,90 1080,45 Q1200,10 1320,55 Q1380,75 1440,40 L1440,0 Z" />
        </svg>
      </div>

      <div className="bg-[#0F0620] py-24 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <motion.p
              className="text-[#C49FDC] font-semibold text-sm tracking-widest uppercase mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Real Stories
            </motion.p>
            <motion.h2
              className="text-4xl lg:text-5xl font-extrabold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Parents. Teachers. Kids.{" "}
              <em className="not-italic italic text-[#C49FDC]">
                All saying the same thing.
              </em>
            </motion.h2>
          </div>

          {/* Featured parent quotes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {featured.map((f, i) => (
              <motion.div
                key={i}
                className="bg-white/5 border border-white/10 rounded-3xl p-7 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <span className="inline-block text-xs font-semibold bg-[#7030A0]/40 text-[#C49FDC] px-3 py-1 rounded-full mb-5 w-fit">
                  {f.tag}
                </span>
                <p className="text-white text-lg font-medium leading-relaxed flex-1 mb-5">
                  &ldquo;{f.quote}&rdquo;
                </p>
                <div>
                  <p className="text-white/50 text-sm">{f.who}</p>
                  <p className="text-white/30 text-xs mt-0.5">{f.context}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote mosaic grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {grid.map((q, i) => (
              <motion.div
                key={i}
                className="bg-white/[0.04] hover:bg-white/[0.07] transition-colors rounded-2xl px-6 py-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <p className="text-white/80 text-sm leading-relaxed mb-2">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <p className="text-white/30 text-xs">— {q.who}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

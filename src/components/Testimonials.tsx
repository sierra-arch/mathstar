"use client";

import { motion } from "framer-motion";

const featured = [
  {
    quote:
      "My son came to me yesterday at home and said, 'Mom, maths is my favourite subject now.'",
    who: "Parent",
    context: "Roxbury Library Pilot, Aug 2025",
    tag: "Math Love",
    highlight: false,
  },
  {
    quote:
      "He was saying: 'Mommy I want to go back. Mommy, I want to go back.' He's not strong at math at all, but he came home after playing it so excited.",
    who: "Parent",
    context: "Roxbury Library Pilot, Aug 2025",
    tag: "Engagement",
    highlight: false,
  },
  {
    quote:
      "There's been a couple times when he's doing his school homework where he's come to me and said, 'I remember this from the VR game.'",
    who: "Parent",
    context: "6 months after pilot",
    tag: "Transfer",
    highlight: false,
  },
];

const grid = [
  // Roxbury Library Pilot
  {
    quote: "Thank you for making this game.",
    who: "Student (Apollo), Roxbury Library Pilot, Aug 2025",
    tag: "Math Love",
  },
  {
    quote: "I would invest in this. I'd put 200 dollars into it. I'd take it from my mum's wallet, and replace it with monopoly money. Monopoly money looks so real.",
    who: "Student (Apollo), Roxbury Library Pilot, Aug 2025",
    tag: "Math Love",
  },
  {
    quote: "I'm so good at this; I'm like the power of math.",
    who: "Student (Rubi), Roxbury Library Pilot, Aug 2025",
    tag: "Enjoyment",
    highlight: true,
  },
  {
    quote: 'Sophia: "What\'s your favourite part of the game?" Malachi: "solving it."',
    who: "Student (Malachi), Roxbury Library Pilot, Aug 2025",
    tag: "Math Love",
    dialogue: true,
  },
  {
    quote: "[My nephew, Apollo] sold the program to me. He really took ownership of it in the way he talked about it.",
    who: "Ms. Cruz, School Administrator, Roxbury Library Pilot, Aug 2025",
    tag: "Math Love",
  },
  {
    quote: "This is really cool. Really fun. In school, I'm able to remember history and geography, but with math, it's like as soon as I learn it, it goes straight out of my head. But with this, I can see it. And so it sticks.",
    who: "Student (Mariam), Roxbury Library Pilot, Aug 2025",
    tag: "Transfer",
  },
  // Ellis Pilot
  {
    quote: "Math is gonna be so fun from now on.",
    who: "Student, Ellis Pilot (BPS), Jan 2026",
    tag: "Math Love",
    highlight: true,
  },
  {
    quote: "I love this.",
    who: "Student, Ellis Pilot (BPS), Jan 2026",
    tag: "Math Love",
  },
  {
    quote: "Can we do it for longer?",
    who: "Student, Ellis Pilot (BPS), Jan 2026",
    tag: "Engagement",
  },
  {
    quote: "This is so satisfying.",
    who: "Student, Ellis Pilot (BPS), Jan 2026",
    tag: "Enjoyment",
  },
  {
    quote: "They just made learning fun.",
    who: "Student, Ellis Pilot (BPS), Jan 2026",
    tag: "Learning",
  },
  {
    quote: "Imagine if they made VR for reading…",
    who: "Student, Ellis Pilot (BPS), Jan 2026",
    tag: "Learning",
  },
  {
    quote: "Wait, that level I just did was algebra?",
    who: "Student, Ellis Pilot (BPS), Jan 2026",
    tag: "Learning",
    highlight: true,
  },
  {
    quote: "It was crazy and fun at the same time.",
    who: "Student, Ellis Pilot (BPS), Jan 2026",
    tag: "Enjoyment",
  },
  {
    quote: "They went 20 minutes into recess and didn't notice.",
    who: "Ms. Joseph, Teacher — Ellis Pilot (BPS), Jan 2026",
    tag: "Engagement",
    highlight: true,
  },
  {
    quote: "Students' excitement and motivation before, during, and after was up. Even on days where we did not have VR.",
    who: "Mr. McKinnon, Paraprofessional — Ellis Pilot (BPS), Jan 2026",
    tag: "Engagement",
  },
  {
    quote: "When they know VR is on the line, they behave.",
    who: "Mr. McKinnon, Paraprofessional — Ellis Pilot (BPS), Jan 2026",
    tag: "Regulation",
  },
  {
    quote: "What is this best for? Engagement and motivation for the students.",
    who: "Mr. McKinnon, Paraprofessional — Ellis Pilot (BPS), Jan 2026",
    tag: "Engagement",
  },
  {
    quote: "Do we get to play it?!",
    who: "Every student who walked past the classroom — Ellis Pilot (BPS), Jan 2026",
    tag: "Engagement",
  },
  {
    quote: "He got 17/21 in the game's test... we know he's capable of this, but it doesn't show up on paper. He needs ACCESS to something like this.",
    who: "Ms. Munroe, Teacher — Ellis Pilot (BPS), Jan 2026",
    tag: "Learning",
    highlight: true,
  },
  {
    quote: "I think it gave students a different way to view math.",
    who: "Ms. Joseph, Teacher — Ellis Pilot (BPS), Jan 2026",
    tag: "Learning",
  },
  {
    quote: "That has been especially powerful for our EI students who struggle to access math in traditional formats.",
    who: "Ms. Cruz, School Administrator — Ellis Pilot (BPS), Jan 2026",
    tag: "Engagement",
  },
  {
    quote: "We are seeing strong indicators around student regulation, time-on-task, and overall engagement.",
    who: "Ms. Cruz, School Administrator — Ellis Pilot (BPS), Jan 2026",
    tag: "Regulation",
  },
  {
    quote: "I noticed that it helped build students' confidence and engagement.",
    who: "Ms. Joseph, Teacher — Ellis Pilot (BPS), Jan 2026",
    tag: "Confidence",
  },
  {
    quote: "Engagement has opened the door.",
    who: "Ms. Cruz, School Administrator — Ellis Pilot (BPS), Jan 2026",
    tag: "Engagement",
    highlight: true,
  },
];

const tagColors: Record<string, { bg: string; text: string }> = {
  "Math Love":  { bg: "#7030A0/10", text: "#7030A0" },
  "Transfer":   { bg: "#0891B2/10", text: "#0891B2" },
  "Enjoyment":  { bg: "#7030A0/10", text: "#7030A0" },
  "Engagement": { bg: "#0891B2/10", text: "#0891B2" },
  "Regulation": { bg: "#4A1E6B/10", text: "#4A1E6B" },
  "Learning":   { bg: "#0891B2/10", text: "#0891B2" },
  "Confidence": { bg: "#7030A0/10", text: "#7030A0" },
};

function TagChip({ tag }: { tag: string }) {
  const color = tagColors[tag] ?? { bg: "#7030A0/10", text: "#7030A0" };
  return (
    <span
      className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5 w-fit"
      style={{ background: `rgba(${color.text === "#4A1E6B" ? "74,30,107" : "112,48,160"},0.1)`, color: color.text }}
    >
      {tag}
    </span>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="relative bg-[#F7F2FF] pt-40 pb-24 px-6 lg:px-16">

      {/* Ambient orbs */}
      <div className="absolute top-[5%] right-[-8%] w-[500px] h-[500px] bg-[#7030A0]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-6%] w-[400px] h-[400px] bg-[#0891B2]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="text-center mb-16">
          <motion.p
            className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Real Stories
          </motion.p>
          <motion.h2
            className="text-4xl lg:text-[3.25rem] font-extrabold text-ink leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Parents. Teachers. Kids.
            <br />
            <em className="not-italic italic text-[#7030A0]">
              All saying the same thing.
            </em>
          </motion.h2>
        </div>

        {/* Featured parent quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {featured.map((f, i) => (
            <motion.div
              key={i}
              className="rounded-3xl p-7 flex flex-col shadow-sm border bg-white border-[#7030A0]/6 shadow-[#7030A0]/8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <TagChip tag={f.tag} />
              <p className="text-ink text-lg font-medium leading-relaxed flex-1 mb-5">
                &ldquo;{f.quote}&rdquo;
              </p>
              <div>
                <p className="text-ink/55 text-sm">{f.who}</p>
                <p className="text-ink/35 text-xs mt-0.5">{f.context}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote mosaic grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {grid.map((q, i) => (
            <motion.div
              key={i}
              className="hover:shadow-md transition-shadow rounded-2xl px-6 py-5 flex flex-col shadow-sm border bg-white border-[#7030A0]/5 shadow-[#7030A0]/5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
            >
              <TagChip tag={q.tag ?? ""} />
              <p className="text-ink/80 text-sm leading-relaxed mb-3 flex-1">
                &ldquo;{q.quote}&rdquo;
              </p>
              <p className="text-ink/35 text-xs">— {q.who}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

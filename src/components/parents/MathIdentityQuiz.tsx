"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const questions = [
  {
    id: "feeling",
    question: "Finish this sentence: \"When math homework comes out, my child...\"",
    options: [
      { label: "Shuts down or cries", value: "fear" },
      { label: "Disappears or finds excuses", value: "avoid" },
      { label: "Struggles but tries", value: "struggle" },
      { label: "Gets through it fine", value: "okay" },
    ],
  },
  {
    id: "medium",
    question: "How do they seem to learn best?",
    options: [
      { label: "Watching and seeing", value: "visual" },
      { label: "Listening and moving", value: "kinetic" },
      { label: "Hands-on and tactile", value: "hands" },
      { label: "Reading and writing", value: "text" },
    ],
  },
  {
    id: "says",
    question: "What do they say about math?",
    options: [
      { label: "\"I'm not a math person\"", value: "identity" },
      { label: "\"Math is boring\"", value: "bored" },
      { label: "\"Math is too hard\"", value: "hard" },
      { label: "\"Math is okay, I guess\"", value: "neutral" },
    ],
  },
  {
    id: "difference",
    question: "Is there a learning difference in the picture?",
    options: [
      { label: "ADHD or ADD", value: "adhd" },
      { label: "Dyslexia or writing challenges", value: "dyslexia" },
      { label: "Autism Spectrum", value: "autism" },
      { label: "Not that I know of", value: "none" },
    ],
  },
  {
    id: "goal",
    question: "What would success look like for you?",
    options: [
      { label: "They stop dreading it", value: "nodread" },
      { label: "They actually get it", value: "understand" },
      { label: "They choose math — unprompted", value: "love" },
      { label: "They feel confident", value: "confidence" },
    ],
  },
];

type Answers = Record<string, string>;

interface Card {
  type: string;
  headline: string;
  challenge: string;
  unlocks: string;
  quote: string;
  who: string;
  sessions: string;
  color: string;
  href: string;
  cta: string;
}

function getCard(answers: Answers): Card {
  const { feeling, medium, says, difference } = answers;

  if (difference === "adhd") {
    return {
      type: "The Focused Adventurer",
      headline: "Their brain was built for this world.",
      challenge: "Traditional classrooms ask ADHD minds to suppress what makes them brilliant — movement, immediacy, high stimulation.",
      unlocks: "VR creates the exact environment their brain has been looking for: immersive, immediate, and body-first. Movement IS the lesson.",
      quote: "Students stayed calm — even on non-VR days.",
      who: "Instructor, Ellis Elementary Pilot",
      sessions: "3 sessions",
      color: "#7030A0",
      href: "/how-it-works#learner-profiles",
      cta: "See the ADHD learner profile →",
    };
  }

  if (difference === "dyslexia") {
    return {
      type: "The Tactile Mathematician",
      headline: "The pencil was never the point.",
      challenge: "Dyslexia and dysgraphia make pen-and-paper math a barrier that has nothing to do with mathematical ability.",
      unlocks: "MathSTAR requires zero writing. Equations are shaped in mid-air with bare hands. The barrier simply doesn't exist.",
      quote: "Wait, that level I just did was algebra?",
      who: "Student, Ellis Pilot, Jan 2026",
      sessions: "2–3 sessions",
      color: "#0891B2",
      href: "/how-it-works#learner-profiles",
      cta: "See the Dyslexia learner profile →",
    };
  }

  if (feeling === "fear" || says === "identity") {
    return {
      type: "The Hidden Mathematician",
      headline: "They decided they weren't a math person. They were wrong.",
      challenge: "Math anxiety is a learned response — and it was learned in front of other people. The shame of failing publicly is the real barrier.",
      unlocks: "In VR, mistakes are invisible. The ocean doesn't judge. By the time the fear could arrive, they've already succeeded.",
      quote: "Fear of math meets its match.",
      who: "MathSTAR Learner Outcome",
      sessions: "3 sessions",
      color: "#7030A0",
      href: "/parents",
      cta: "Learn what 3 sessions does →",
    };
  }

  if (says === "bored" || feeling === "okay") {
    return {
      type: "The Bored Genius",
      headline: "They haven't been challenged. Yet.",
      challenge: "Bright kids who coast through math don't become engaged by doing more of the same. They need a different kind of problem.",
      unlocks: "An underwater world with algebra hidden inside is a different kind of problem. Bored kids become the most obsessed MathSTAR players.",
      quote: "She chose MathSTAR over the playground. Every single time.",
      who: "Parent, Roxbury Pilot",
      sessions: "1 session",
      color: "#0891B2",
      href: "/mathstar",
      cta: "See the full game experience →",
    };
  }

  if (medium === "hands" || medium === "kinetic") {
    return {
      type: "The Hands-On Learner",
      headline: "Their superpower works in three dimensions.",
      challenge: "Hands-on learners are penalized by a system that measures ability in two dimensions: paper and pencil.",
      unlocks: "In MathSTAR, spatial reasoning and physical intuition ARE the curriculum. What they're best at is exactly what the game rewards.",
      quote: "He gets it so much faster when he can touch it. MathSTAR gave him that.",
      who: "Parent, BPL Pilot",
      sessions: "1–2 sessions",
      color: "#7030A0",
      href: "/how-it-works",
      cta: "See how MathSTAR teaches →",
    };
  }

  // Default
  return {
    type: "The Ready Learner",
    headline: "They're ready for something that meets them.",
    challenge: "Every child has a reason math hasn't clicked yet. For most, it's not the content — it's the medium.",
    unlocks: "MathSTAR gives them a world that was built for how their brain actually works. 8 hours from arithmetic to algebra-confident.",
    quote: "Maths is my favourite subject now.",
    who: "Student, Roxbury Library Pilot",
    sessions: "3 sessions",
    color: "#7030A0",
    href: "/get",
    cta: "Get MathSTAR →",
  };
}

export default function MathIdentityQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [done, setDone] = useState(false);

  const handleAnswer = (id: string, value: string) => {
    const next = { ...answers, [id]: value };
    setAnswers(next);
    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 200);
    } else {
      setTimeout(() => setDone(true), 200);
    }
  };

  const reset = () => { setStep(0); setAnswers({}); setDone(false); };

  const card = done ? getCard(answers) : null;
  const current = questions[step];
  const progress = done ? 100 : (step / questions.length) * 100;

  return (
    <section className="relative py-28 px-6 lg:px-20 bg-[#F7F2FF] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(196,159,220,0.22) 0%, transparent 68%)" }} />

      <div className="max-w-3xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-4">
            Math Identity Quiz
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0D0B12] leading-tight mb-4">
            Who is your child<br />
            <span className="text-[#7030A0]">as a math learner?</span>
          </h2>
          <p className="text-[#0D0B12]/55 text-lg">
            5 questions. Your child&apos;s Math Identity Card.
          </p>
        </motion.div>

        {/* Progress */}
        <div className="h-1.5 bg-[#7030A0]/10 rounded-full mb-10 overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: "linear-gradient(to right, #7030A0, #0891B2)" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>

        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-3xl p-8 lg:p-10 border border-[#7030A0]/8 shadow-sm">
                <p className="text-[#7030A0] text-xs font-bold tracking-widest uppercase mb-3">
                  Question {step + 1} of {questions.length}
                </p>
                <h3 className="text-2xl font-extrabold text-[#0D0B12] mb-8 leading-snug">
                  {current.question}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleAnswer(current.id, opt.value)}
                      className="text-left px-6 py-4 rounded-2xl border border-[#7030A0]/12 bg-[#F7F2FF] font-semibold text-[#0D0B12] text-sm hover:border-[#7030A0]/40 hover:bg-[#7030A0]/5 transition-all duration-150"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="card"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {card && (
                <div
                  className="rounded-3xl overflow-hidden border"
                  style={{ borderColor: `${card.color}20` }}
                >
                  {/* Card header */}
                  <div
                    className="px-8 lg:px-10 pt-8 pb-6"
                    style={{ background: `${card.color}08` }}
                  >
                    <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: card.color }}>
                      Math Identity Card
                    </p>
                    <h3
                      className="text-3xl lg:text-4xl font-extrabold mb-1 leading-tight"
                      style={{ color: card.color }}
                    >
                      {card.type}
                    </h3>
                    <p className="text-[#0D0B12]/65 text-lg font-medium">{card.headline}</p>
                  </div>

                  {/* Card body */}
                  <div className="px-8 lg:px-10 py-8 bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                      <div>
                        <p className="text-xs font-bold tracking-widest uppercase text-[#0D0B12]/35 mb-3">Their challenge</p>
                        <p className="text-[#0D0B12]/65 text-base leading-relaxed">{card.challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: card.color }}>
                          What MathSTAR unlocks
                        </p>
                        <p className="text-[#0D0B12]/65 text-base leading-relaxed">{card.unlocks}</p>
                      </div>
                    </div>

                    {/* Quote */}
                    <div
                      className="rounded-2xl p-6 mb-6"
                      style={{ background: `${card.color}06`, borderLeft: `3px solid ${card.color}` }}
                    >
                      <p className="text-[#0D0B12] font-semibold text-base leading-relaxed mb-1.5">
                        &ldquo;{card.quote}&rdquo;
                      </p>
                      <p className="text-[#0D0B12]/40 text-xs">{card.who}</p>
                    </div>

                    <div className="flex items-center gap-2 mb-6">
                      <div
                        className="text-sm font-bold px-4 py-1.5 rounded-full"
                        style={{ background: `${card.color}14`, color: card.color }}
                      >
                        {card.sessions} to transform this
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={card.href}
                        className="px-8 py-4 rounded-full font-bold text-white text-base text-center transition-all hover:-translate-y-0.5"
                        style={{ background: card.color, boxShadow: `0 8px 30px ${card.color}35` }}
                      >
                        {card.cta}
                      </Link>
                      <button
                        onClick={reset}
                        className="px-8 py-4 rounded-full font-semibold text-[#0D0B12]/50 text-base border border-[#0D0B12]/10 hover:border-[#0D0B12]/20 transition-colors"
                      >
                        Try again
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const questions = [
  {
    id: "grade",
    question: "What grade is your child in?",
    options: [
      { label: "3rd – 5th grade", value: "elementary" },
      { label: "6th – 8th grade", value: "middle" },
      { label: "9th grade or above", value: "high" },
      { label: "Not sure yet", value: "unsure" },
    ],
  },
  {
    id: "relationship",
    question: "How would you describe their relationship with math?",
    options: [
      { label: "They struggle with the basics", value: "struggle" },
      { label: "They feel anxious or afraid", value: "anxiety" },
      { label: "They're bored and disengaged", value: "bored" },
      { label: "They're doing okay but could go further", value: "okay" },
    ],
  },
  {
    id: "difference",
    question: "Do they have a learning difference?",
    options: [
      { label: "ADHD or ADD", value: "adhd" },
      { label: "Dyslexia or Dysgraphia", value: "dyslexia" },
      { label: "Autism Spectrum", value: "autism" },
      { label: "IEP or not yet diagnosed", value: "iep" },
    ],
  },
];

type Answers = Record<string, string>;

function getResult(answers: Answers) {
  const { grade, relationship, difference } = answers;

  if (grade === "high") {
    return {
      headline: "MathSTAR is best suited for younger learners.",
      body: "Our curriculum is designed for students in grades 3–8, particularly those building foundational math skills. If your student is in high school, we'd love to talk — MathSTAR is expanding its grade range.",
      cta: "Contact us about future programs →",
      href: "/contact",
      color: "#DC2626",
      fit: "Possible fit",
    };
  }

  if (difference === "adhd") {
    return {
      headline: "MathSTAR was built for kids like yours.",
      body: "VR creates a private, distraction-free world with no classroom noise or social pressure. Movement is the lesson. Students with ADHD/ADD consistently show improved focus and zero classroom removals in our pilots.",
      cta: "See ADHD learner profile →",
      href: "/how-it-works#learner-profiles",
      color: "#DC2626",
      fit: "Strong fit",
    };
  }

  if (difference === "dyslexia") {
    return {
      headline: "No reading, no writing — just hands and wonder.",
      body: "MathSTAR requires zero writing. Students shape equations in mid-air with their bare hands. For kids with dyslexia or dysgraphia, this removes the biggest barrier and lets their mathematical thinking shine.",
      cta: "See Dyslexia learner profile →",
      href: "/how-it-works#learner-profiles",
      color: "#0891B2",
      fit: "Strong fit",
    };
  }

  if (difference === "autism") {
    return {
      headline: "Structured, predictable, and private — their kind of world.",
      body: "The VR world is consistent and safe. No unexpected social situations, no peer pressure. Students with Autism Spectrum diagnoses have shown strong engagement and zero classroom disruptions in our pilots.",
      cta: "See Autism learner profile →",
      href: "/how-it-works#learner-profiles",
      color: "#DC2626",
      fit: "Strong fit",
    };
  }

  if (relationship === "anxiety") {
    return {
      headline: "Fear of math meets its match.",
      body: "Mistakes happen in private. There are no wrong answers in front of the class. Kids don't realize they're doing algebra until they already are — and by then, the fear never had a chance to kick in.",
      cta: "See Math Anxiety learner profile →",
      href: "/how-it-works#learner-profiles",
      color: "#0891B2",
      fit: "Strong fit",
    };
  }

  if (relationship === "bored") {
    return {
      headline: "Bored kids become the most obsessed MathSTAR players.",
      body: "When math becomes an underwater world where fish multiply and equations float in mid-air, \"bored\" becomes a thing of the past. 10/10 students chose MathSTAR over recess.",
      cta: "See the full experience →",
      href: "/mathstar",
      color: "#DC2626",
      fit: "Great fit",
    };
  }

  // Default strong fit
  return {
    headline: "MathSTAR sounds like a great fit.",
    body: "Whether they're looking for a challenge, a confidence boost, or a completely new way to experience math — MathSTAR is built for exactly that. 8 hours from arithmetic to algebra-confident.",
    cta: "Get MathSTAR →",
    href: "/get",
    color: "#DC2626",
    fit: "Great fit",
  };
}

export default function IsItRightQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [done, setDone] = useState(false);

  const handleAnswer = (questionId: string, value: string) => {
    const next = { ...answers, [questionId]: value };
    setAnswers(next);
    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 200);
    } else {
      setTimeout(() => setDone(true), 200);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setDone(false);
  };

  const result = done ? getResult(answers) : null;
  const current = questions[step];
  const progress = done ? 100 : (step / questions.length) * 100;

  return (
    <section className="relative py-28 px-6 lg:px-20 bg-white overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(252,165,165,0.28) 0%, transparent 68%)" }} />
      <div className="absolute -top-16 -right-16 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(8,145,178,0.12) 0%, transparent 62%)" }} />

      <div className="max-w-3xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#DC2626] font-semibold text-sm tracking-widest uppercase mb-4">
            Quick Quiz
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0D0B12] leading-tight mb-4">
            Is MathSTAR right for my child?
          </h2>
          <p className="text-[#0D0B12]/55 text-lg">
            3 questions. 30 seconds. A personalized answer.
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="h-1.5 bg-[#DC2626]/10 rounded-full mb-10 overflow-hidden">
          <motion.div
            className="h-full bg-[#DC2626] rounded-full"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>

        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-[#FFF5F5] rounded-3xl p-8 lg:p-10">
                <p className="text-[#DC2626] text-xs font-bold tracking-widest uppercase mb-3">
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
                      className="text-left px-6 py-4 rounded-2xl border border-[#DC2626]/15 bg-white font-semibold text-[#0D0B12] text-sm hover:border-[#DC2626]/50 hover:bg-[#DC2626]/4 transition-all duration-150"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              {result && (
                <div
                  className="rounded-3xl p-8 lg:p-10 border"
                  style={{ background: `${result.color}08`, borderColor: `${result.color}20` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className="text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full"
                      style={{ background: `${result.color}18`, color: result.color }}
                    >
                      {result.fit}
                    </span>
                  </div>
                  <h3
                    className="text-2xl lg:text-3xl font-extrabold mb-4 leading-snug"
                    style={{ color: result.color }}
                  >
                    {result.headline}
                  </h3>
                  <p className="text-[#0D0B12]/65 text-lg leading-relaxed mb-8">
                    {result.body}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={result.href}
                      className="px-8 py-4 rounded-full font-bold text-white text-base text-center transition-colors"
                      style={{ background: result.color }}
                    >
                      {result.cta}
                    </Link>
                    <button
                      onClick={reset}
                      className="px-8 py-4 rounded-full font-semibold text-[#0D0B12]/55 text-base border border-[#0D0B12]/10 hover:border-[#0D0B12]/20 transition-colors"
                    >
                      Start over
                    </button>
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

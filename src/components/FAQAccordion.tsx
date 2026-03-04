"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is MathSTAR?",
    a: "MathSTAR is a virtual reality math adventure. Kids put on a VR headset and enter an underwater world where fish multiply, coral patterns pulse with prime numbers, and equations come to life in 3D. It's 8 hours of immersive gameplay designed to take students from arithmetic to algebra-confident — without it feeling like school.",
  },
  {
    q: "What ages is MathSTAR for?",
    a: "MathSTAR is designed primarily for students in grades 3–8 (roughly ages 8–14). It's most powerful for kids who are approaching or struggling with pre-algebra concepts, though younger and older learners have also found it engaging. We recommend starting with a session to see how your child takes to it.",
  },
  {
    q: "How long is the program?",
    a: "The full MathSTAR experience is 8 hours of gameplay. This can be done in multiple sessions — there's no requirement to do it all at once. Many students complete it across several library or home visits. The 8-hour mark is where we see the biggest algebra-confidence shifts.",
  },
  {
    q: "What math does MathSTAR actually teach?",
    a: "MathSTAR covers foundational math concepts — multiplication, division, fractions, pattern recognition — and layers in pre-algebra and algebraic thinking through gameplay. Students have completed in-game algebra assessments scoring 17/21 without realizing they were doing algebra. The learning is embedded in the adventure, not presented as a lesson.",
  },
  {
    q: "Where can my child try MathSTAR?",
    a: "MathSTAR is available through participating public libraries (including Boston Public Library locations) and for home use. Visit our Parents page to find the right pathway for your family. If you're an educator or school administrator, visit our Educators page to learn about school pilot programs.",
  },
  {
    q: "Is VR safe for children?",
    a: "Yes. MathSTAR is designed with child safety in mind. We follow VR industry guidelines for age-appropriate use (recommended for ages 8 and up). Sessions include comfort settings and built-in breaks. We recommend standard VR hygiene practices. Parents and educators are always in control of session length.",
  },
  {
    q: "How is progress tracked?",
    a: "MathSTAR tracks in-game performance including problem-solving accuracy, time spent, and skill progression. Parents and educators can see how a student is advancing through the experience. Our pilot research also uses pre/post assessments to measure real-world math skill growth.",
  },
  {
    q: "What research backs MathSTAR?",
    a: "MathSTAR has been piloted at David A. Ellis Elementary School and through Boston Public Library in partnership with Northeastern University. The Ellis pilot showed 18% pre-to-post test growth, 10/10 students choosing math over recess, and significant engagement and growth mindset gains. The BPL pilot showed a 45% median test score jump across 3 sessions.",
  },
  {
    q: "How do I get MathSTAR for my school?",
    a: "We work with schools and districts to set up structured pilot programs. Visit our Educators page for details on how a school partnership works — including what data we collect, how we support teachers, and what the onboarding process looks like.",
  },
  {
    q: "How can I support MathSTAR?",
    a: "There are a few ways to help. You can donate to expand library access for under-resourced communities, volunteer to help run demos and sessions, or simply spread the word. Every bit of support helps us get MathSTAR into the hands of more kids who need it.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-px">
      {faqs.map((item, i) => (
        <div
          key={i}
          className="border-b border-[#0D0B12]/8 last:border-0"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left py-7 flex items-center justify-between gap-6 group"
          >
            <span className="text-lg font-semibold text-[#0D0B12] group-hover:text-[#7030A0] transition-colors leading-snug">
              {item.q}
            </span>
            <span
              className="shrink-0 w-7 h-7 rounded-full border border-[#7030A0]/30 flex items-center justify-center text-[#7030A0] transition-transform duration-300"
              style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
            >
              +
            </span>
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: open === i ? "400px" : "0px" }}
          >
            <p className="text-[#0D0B12]/60 leading-relaxed pb-7 pr-10">
              {item.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

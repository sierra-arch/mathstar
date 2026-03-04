import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Our Mission — MathSTAR",
  description:
    "Gifting the wonder of math to every child, regardless of circumstance. Learn what drives ShepherdXR and why equitable access to math wonder is our north star.",
};

export default function MissionPage() {
  return (
    <main className="bg-[#FAFAF8]">
      <Nav />

      {/* ── MANIFESTO HERO ── */}
      <section className="pt-36 pb-28 px-6 lg:px-20 bg-[#7030A0]">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-[#C49FDC] font-semibold text-sm tracking-widest uppercase mb-8">
              Our Mission
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.02] mb-10">
              Gift the wonder of math{" "}
              <span className="italic text-[#C49FDC]">to every child.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
              Not some children. Not children from the right zip codes or the right schools.
              Every child. That&apos;s the mission. Everything else is in service of that.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="py-28 px-6 lg:px-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-6">
              The Problem
            </p>
            <h2 className="text-4xl font-extrabold text-[#0D0B12] leading-tight mb-8">
              Most kids never get the moment that changes everything.
            </h2>
            <div className="space-y-5 text-[#0D0B12]/60 text-lg leading-relaxed">
              <p>
                Millions of children sit in math classrooms every day believing a lie:
                that they&apos;re not math people. They didn&apos;t decide that. A broken
                system decided it for them.
              </p>
              <p>
                For most students, math is taught through repetition, fear of wrong answers,
                and the slow erosion of confidence. By middle school, many have already
                written themselves off.
              </p>
              <p>
                But that&apos;s not a capacity problem. It&apos;s an access problem.
                The right experience — at the right moment — changes everything.
                Most kids just never get it.
              </p>
            </div>
          </div>

          <div className="space-y-6 pt-4">
            {[
              {
                stat: "60%+",
                label: "of U.S. students perform below grade level in math",
                color: "#7030A0",
              },
              {
                stat: "18%",
                label: "pre → post test gain after MathSTAR pilot at Ellis Elementary",
                color: "#0891B2",
              },
              {
                stat: "10/10",
                label: "students chose math over recess during the Ellis pilot",
                color: "#7030A0",
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="bg-white border border-[#0D0B12]/8 rounded-2xl p-8"
              >
                <div
                  className="text-5xl font-extrabold mb-2"
                  style={{ color: item.color }}
                >
                  {item.stat}
                </div>
                <p className="text-[#0D0B12]/50 text-sm leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR ANSWER ── */}
      <section className="py-28 px-6 lg:px-20 bg-[#F0E6F7]">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-5">
              Our Answer
            </p>
            <h2 className="text-4xl font-extrabold text-[#0D0B12] leading-tight mb-6">
              Wonder first. Everything else follows.
            </h2>
            <p className="text-[#0D0B12]/60 text-lg leading-relaxed">
              When our founder Femi was given a mathematics graphic novel as a child,
              it didn&apos;t teach him math facts. It made math beautiful. That wonder
              unlocked everything that followed — Oxford, quantum physics, a career he
              chose from a place of strength.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Immersive",
                body: "VR puts kids inside math — not across from it. The ocean isn't a metaphor. It's the classroom.",
              },
              {
                title: "Equitable",
                body: "MathSTAR is available at public libraries, not just private schools. Access is non-negotiable.",
              },
              {
                title: "Evidence-Based",
                body: "Piloted at Ellis Elementary and Boston Public Library with IRB-approved research. The data backs the magic.",
              },
              {
                title: "Kid-First",
                body: "Designed for joy. For curiosity. For the child who was told they weren't a math person — and proves everyone wrong.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-7 border border-[#7030A0]/10"
              >
                <h3 className="text-lg font-extrabold text-[#7030A0] mb-3">{card.title}</h3>
                <p className="text-[#0D0B12]/55 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMITMENTS ── */}
      <section className="py-28 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-5">
            Our Commitments
          </p>
          <h2 className="text-4xl font-extrabold text-[#0D0B12] leading-tight mb-14">
            What we promise.
          </h2>

          <div className="space-y-px">
            {[
              {
                num: "01",
                promise: "We will never stop expanding access.",
                detail: "Every school. Every library. Every child who needs it. That's the goal.",
              },
              {
                num: "02",
                promise: "We will let the data lead.",
                detail: "Rigorous pilots. IRB-approved research. No magic without the math behind it.",
              },
              {
                num: "03",
                promise: "We will listen to kids first.",
                detail: "The real feedback loop is a child's face when they realize they just did algebra.",
              },
              {
                num: "04",
                promise: "We will keep the wonder alive.",
                detail: "Every update to MathSTAR asks one question first: does this make math more exciting?",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="flex gap-10 py-10 border-b border-[#0D0B12]/8 last:border-0"
              >
                <p className="text-[#7030A0]/30 font-extrabold text-xl shrink-0 pt-1">
                  {item.num}
                </p>
                <div>
                  <p className="text-xl font-extrabold text-[#0D0B12] mb-2">
                    {item.promise}
                  </p>
                  <p className="text-[#0D0B12]/50 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 bg-[#7030A0]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            The mission needs all of us.
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Whether you&apos;re a parent, educator, donor, or volunteer —
            there&apos;s a place for you in this work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/impact"
              className="px-8 py-4 rounded-full font-bold text-[#7030A0] bg-white text-base hover:bg-[#F0E6F7] transition-colors"
            >
              See the Impact →
            </Link>
            <Link
              href="/donate"
              className="px-8 py-4 rounded-full font-bold text-white/80 text-base border border-white/20 hover:border-white/40 hover:text-white transition-colors"
            >
              Support the Mission
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

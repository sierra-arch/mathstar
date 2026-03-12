import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VR Collab with Virginia Tutoring Company Yields Big Results — ShepherdXR",
  description:
    "ShepherdXR partnered with a Virginia-based tutoring company to bring MathSTAR into new classrooms — and the results spoke for themselves.",
};

export default function VirginiaArticlePage() {
  return (
    <main className="bg-white">
      <Nav />

      {/* Hero */}
      <div className="relative w-full h-[52vh] min-h-[360px] overflow-hidden">
        <Image
          src="/headshots/rs=w_1280 (1).webp"
          alt="Student using VR headset in a tutoring session"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04131a]/80 via-[#04131a]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-16 pb-12 max-w-4xl mx-auto w-full">
          <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full text-[#0891B2] bg-white/90 mb-4">
            Partnership
          </span>
          <h1 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight">
            VR Collab with Virginia Tutoring Company Yields Big Results
          </h1>
        </div>
      </div>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 lg:px-0 py-16">

        <p className="text-ink/40 text-sm mb-10">August 30, 2024</p>

        <p className="text-ink/80 text-lg leading-relaxed mb-8">
          ShepherdXR and a Virginia-based tutoring company joined forces to pilot MathSTAR with a new cohort
          of middle schoolers — and the results were hard to ignore. The partnership began as an experiment:
          could VR-based math instruction complement traditional tutoring, filling the gaps where conventional
          methods had fallen short? The answer turned out to be a resounding yes.
        </p>

        <p className="text-ink/80 text-lg leading-relaxed mb-12">
          Over the course of the collaboration, students who had previously struggled with pre-algebra
          demonstrated measurable gains after just a few sessions with MathSTAR. Tutors noted that students
          arrived to sessions more engaged, more willing to try, and — crucially — more confident.
        </p>

        <h2 className="text-2xl font-extrabold text-ink mb-5">What Changed</h2>
        <p className="text-ink/75 text-base leading-relaxed mb-12">
          For many of the students, math had become associated with failure — the abstract notation, the
          pressure of tests, the feeling of being left behind. MathSTAR resets that relationship entirely.
          In the virtual ocean, there&apos;s no wrong answer that lives on a piece of paper. There&apos;s just a
          fish that swims away if you miscalculate, and the invitation to try again.
        </p>
        <p className="text-ink/75 text-base leading-relaxed mb-12">
          Tutors from the Virginia program reported that students began making conceptual connections they
          had never made before. The spatial, embodied experience of shaping equations mid-air translated
          directly into a deeper understanding of how numbers relate to each other.
        </p>

        <h2 className="text-2xl font-extrabold text-ink mb-5">What the Partnership Proved</h2>
        <p className="text-ink/75 text-base leading-relaxed mb-6">
          VR doesn&apos;t replace tutors — it supercharges them. When students arrive to a tutoring session
          having already felt the logic of a concept in their body, the tutor can go deeper, faster.
        </p>
        <p className="text-ink/75 text-base leading-relaxed mb-12">
          The partnership model that emerged from this collaboration is one ShepherdXR believes can scale:
          libraries, tutoring centers, and after-school programs all stand to benefit. For the Virginia
          tutoring team, it was a glimpse of what education could look like when technology and human
          expertise meet in the right way.
        </p>

        <div className="bg-gradient-to-br from-[#E0F7FA] to-[#F7F2FF] rounded-2xl p-8 border border-[#0891B2]/15 mb-12">
          <p className="text-ink/75 text-base leading-relaxed">
            Want to bring MathSTAR to your students?{" "}
            <a
              href="mailto:femi@shepherdxr.org"
              className="text-[#0891B2] font-semibold hover:underline"
            >
              Email femi@shepherdxr.org
            </a>
          </p>
        </div>
      </article>

      {/* CTA */}
      <div className="bg-gradient-to-br from-[#E0F7FA] to-[#F7F2FF] py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#0891B2] font-semibold text-sm tracking-widest uppercase mb-4">The Results</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-ink mb-5 leading-tight">
            The numbers are{" "}
            <em className="not-italic italic text-[#7030A0]">extraordinary.</em>
          </h2>
          <p className="text-ink/60 text-lg mb-8">
            See the full data, pilot findings, and student outcomes from both MathSTAR programs.
          </p>
          <Link
            href="/impact"
            className="inline-flex items-center gap-2 bg-[#0891B2] text-white font-bold px-8 py-4 rounded-full hover:bg-[#0772a0] transition-colors text-base"
          >
            See the full results →
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Groundbreaking VR Program Delivers Measurable Improvement in Math — ShepherdXR",
  description:
    "A 4-week free VR math camp at the Boston Public Library saw a 45% jump in median test scores, with students rating the program 4.4 out of 5.",
};

export default function BostonArticlePage() {
  return (
    <main className="bg-white">
      <Nav />

      {/* Hero */}
      <div className="relative w-full h-[52vh] min-h-[360px] overflow-hidden">
        <Image
          src="/headshots/rs=w_1280.webp"
          alt="Students at the Boston Public Library VR math camp"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0733]/80 via-[#1a0733]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-16 pb-12 max-w-4xl mx-auto w-full">
          <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full text-[#7030A0] bg-white/90 mb-4">
            Impact
          </span>
          <h1 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight">
            Groundbreaking VR Program Delivers Measurable Improvement in Math
          </h1>
        </div>
      </div>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 lg:px-0 py-16">

        <p className="text-ink/40 text-sm mb-10">October 17, 2025</p>

        <p className="text-ink/80 text-lg leading-relaxed mb-8">
          Last month, the nonprofit ShepherdXR and the Shaw–Roxbury branch of the Boston Public Library
          hosted a free VR math intervention camp for middle-schoolers in the community. Over 4 weeks,
          more than 20 students mastered pre-algebra fundamentals using cutting-edge virtual reality
          technology that brought math to life.
        </p>

        <p className="text-ink/80 text-lg leading-relaxed mb-12">
          Thirteen of the students had their results included in a research study led by Northeastern
          University&apos;s Godfrey Yang. The study observed a{" "}
          <strong className="text-[#7030A0]">45% jump in median test scores</strong> after just three
          two-hour sessions of MathSTAR with each student.
        </p>

        <h2 className="text-2xl font-extrabold text-ink mb-5">Community Impact</h2>
        <ul className="space-y-4 mb-12">
          {[
            "100+ hours of free educational programming provided to Roxbury youth — valued at more than $3,100 in tutoring",
            "45% improvement in math scores (based on median score on a Common Core–benchmarked test taken before and after the intervention)",
            "Students rated the program an average 4.4 out of 5 for both learning and engagement",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-ink/75 text-base leading-relaxed">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-[#7030A0] shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        {/* Charts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="rounded-2xl overflow-hidden border border-[#7030A0]/10 bg-[#F7F2FF]">
            <Image
              src="/headshots/rs=w_600,h_600,cg_true.webp"
              alt="4.4 out of 5 average rating from kids on engagement and level of learning"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-[#0891B2]/10 bg-[#E0F7FA]">
            <Image
              src="/headshots/qt=q_71.webp"
              alt="45% jump in median test score in just 3 sessions"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        <h2 className="text-2xl font-extrabold text-ink mb-5">Community Feedback</h2>

        <blockquote className="border-l-4 border-[#7030A0] pl-6 mb-8">
          <p className="text-ink/80 text-lg italic leading-relaxed mb-3">
            &ldquo;My son came to me yesterday at home and said, &lsquo;Mom, math is my favorite subject now.&rsquo;&rdquo;
          </p>
          <cite className="text-ink/45 text-sm not-italic">— Roxbury parent</cite>
        </blockquote>

        <blockquote className="border-l-4 border-[#0891B2] pl-6 mb-8">
          <p className="text-ink/80 text-lg italic leading-relaxed mb-3">
            &ldquo;I would invest in this. I&apos;d put 200 dollars into it. I&apos;d take it from my mum&apos;s wallet
            and replace it with monopoly money. Monopoly money looks so real.&rdquo;
          </p>
          <cite className="text-ink/45 text-sm not-italic">— Middle-schooler who completed the program</cite>
        </blockquote>

        <blockquote className="border-l-4 border-[#7030A0] pl-6 mb-8">
          <p className="text-ink/80 text-lg italic leading-relaxed mb-3">
            &ldquo;A lot of people don&apos;t learn math well in the traditional way. Many kids are visual learners,
            others are auditory or more hands-on learners. That means they need an intervention that will
            teach them math by meeting them where they are, so they can finally get it. And love it.&rdquo;
          </p>
          <cite className="text-ink/45 text-sm not-italic">— Femi Fadugba, Founder of ShepherdXR</cite>
        </blockquote>

        <blockquote className="border-l-4 border-[#0891B2] pl-6 mb-12">
          <p className="text-ink/80 text-lg italic leading-relaxed mb-3">
            &ldquo;I&apos;m deeply appreciative that our teens got to engage with the ShepherdXR program and be
            introduced to a new transformative, creative, and adaptable way of learning math.&rdquo;
          </p>
          <cite className="text-ink/45 text-sm not-italic">— Renée Gaillard, Teen Librarian, Shaw-Roxbury Branch</cite>
        </blockquote>

        <h2 className="text-2xl font-extrabold text-ink mb-4">About ShepherdXR</h2>
        <p className="text-ink/70 text-base leading-relaxed mb-4">
          ShepherdXR is an education nonprofit on a mission to unearth the unexpected Einsteins of tomorrow.
          Our 8-hour virtual reality math intervention, MathSTAR, helps middle-schoolers go from stuck-in-arithmetic
          to loving algebra.
        </p>
        <p className="text-ink/70 text-base leading-relaxed mb-12">
          Built for diverse learners — especially students on IEPs — it supports kids with ADHD, ADD, deafness,
          and English learners. And it&apos;s a bridge that students actually want to cross because of how
          immersive and fun the journey is.
        </p>
      </article>

      {/* CTA */}
      <div className="bg-gradient-to-br from-[#F7F2FF] to-[#E0F7FA] py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-4">The Results</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-ink mb-5 leading-tight">
            The numbers are{" "}
            <em className="not-italic italic text-[#7030A0]">extraordinary.</em>
          </h2>
          <p className="text-ink/60 text-lg mb-8">
            See the full data, pilot findings, and student outcomes from both MathSTAR programs.
          </p>
          <Link
            href="/impact"
            className="inline-flex items-center gap-2 bg-[#7030A0] text-white font-bold px-8 py-4 rounded-full hover:bg-[#5a2480] transition-colors text-base"
          >
            See the full results →
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}

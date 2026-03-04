import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About ShepherdXR — MathSTAR",
  description:
    "ShepherdXR is an immersive learning company building MathSTAR — a VR universe that turns math from fear into a superpower. Meet the team and our mission.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#FAFAF8]">
      <Nav />

      {/* ── HERO ── */}
      <section className="pt-36 pb-24 px-6 lg:px-20 max-w-5xl mx-auto">
        <p className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-6">
          About ShepherdXR
        </p>
        <h1 className="text-5xl lg:text-7xl font-extrabold text-[#0D0B12] leading-[1.02] mb-8 max-w-3xl">
          We build technology that{" "}
          <span className="italic text-[#7030A0]">changes</span>{" "}
          how kids see themselves.
        </h1>
        <p className="text-[#0D0B12]/55 text-xl leading-relaxed max-w-2xl">
          ShepherdXR is an immersive learning company. Our first product, MathSTAR,
          is a virtual reality universe that turns math from a fear into a superpower —
          in 8 hours or less.
        </p>
      </section>

      {/* ── ORIGIN ── */}
      <section className="py-24 px-6 lg:px-20 bg-[#F0E6F7]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-5">
              Our Origin
            </p>
            <h2 className="text-4xl font-extrabold text-[#0D0B12] leading-tight mb-6">
              Born from a single moment of wonder.
            </h2>
            <p className="text-[#0D0B12]/60 text-lg leading-relaxed mb-6">
              Our founder, Femi Fadugba, was told as a child that he had ADHD, emotional
              impairment, and a language disability. He struggled with math — until a school
              custodian handed him a mathematics graphic novel and math became beautiful.
            </p>
            <p className="text-[#0D0B12]/60 text-lg leading-relaxed mb-8">
              That moment of wonder took him from struggling student to Oxford Master&apos;s
              graduate, quantum physics researcher, bestselling novelist, and Netflix storyteller.
              He built ShepherdXR so no child has to wait for lucky.
            </p>
            <Link
              href="/story"
              className="inline-flex items-center gap-2 text-[#7030A0] font-semibold text-sm hover:underline"
            >
              Read the full founder story →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {[
              { num: "10/10", label: "students chose math over recess" },
              { num: "18%", label: "pre → post test score gain" },
              { num: "45%", label: "median test score jump" },
              { num: "4.4/5", label: "average engagement rating" },
            ].map((s) => (
              <div
                key={s.num}
                className="bg-white rounded-2xl p-6 border border-[#7030A0]/10"
              >
                <div className="text-3xl font-extrabold text-[#7030A0] mb-2">{s.num}</div>
                <div className="text-[#0D0B12]/50 text-sm leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE BELIEVE ── */}
      <section className="py-28 px-6 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-5">
              What We Believe
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0D0B12] leading-tight">
              Three things we know to be true.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Every child is a math person.",
                body: "The label \"not a math person\" is a story told by bad experiences — not by data. When kids experience math as wonder, they thrive.",
              },
              {
                num: "02",
                title: "Access is the missing ingredient.",
                body: "The tools that change how kids see math already exist. The gap is access — to technology, to experiences, to the right moment at the right time.",
              },
              {
                num: "03",
                title: "Immersion beats instruction.",
                body: "You can explain multiplication on a chalkboard, or you can let a child watch fish multiply before their eyes in 3D. The second one works.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative bg-white border border-[#0D0B12]/8 rounded-3xl p-10"
              >
                <p className="text-[#7030A0]/15 text-8xl font-extrabold leading-none absolute -top-3 right-6 select-none">
                  {item.num}
                </p>
                <p className="text-[#7030A0] text-xs font-bold tracking-widest uppercase mb-5">
                  {item.num}
                </p>
                <h3 className="text-xl font-extrabold text-[#0D0B12] leading-snug mb-4">
                  {item.title}
                </h3>
                <p className="text-[#0D0B12]/50 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 bg-[#7030A0]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Ready to learn more?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            See MathSTAR in action, explore the research, or reach out directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/how-it-works"
              className="px-8 py-4 rounded-full font-bold text-[#7030A0] bg-white text-base hover:bg-[#F0E6F7] transition-colors"
            >
              See the Experience →
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full font-bold text-white/80 text-base border border-white/20 hover:border-white/40 hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

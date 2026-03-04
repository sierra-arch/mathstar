import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ — MathSTAR",
  description:
    "Answers to common questions about MathSTAR — how it works, what ages it's for, where to access it, the research behind it, and how to support the mission.",
};

export default function FAQPage() {
  return (
    <main className="bg-[#FAFAF8]">
      <Nav />

      {/* ── HERO ── */}
      <section className="pt-36 pb-16 px-6 lg:px-20 max-w-4xl mx-auto">
        <p className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-6">
          FAQ
        </p>
        <h1 className="text-5xl lg:text-6xl font-extrabold text-[#0D0B12] leading-[1.05] mb-6">
          Questions, answered.
        </h1>
        <p className="text-[#0D0B12]/50 text-xl leading-relaxed max-w-xl">
          Everything you want to know about MathSTAR — the game, the research,
          and how to get access.
        </p>
      </section>

      {/* ── ACCORDION ── */}
      <section className="pb-28 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <FAQAccordion />
        </div>
      </section>

      {/* ── STILL HAVE QUESTIONS ── */}
      <section className="py-20 px-6 bg-[#F0E6F7]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-[#0D0B12] mb-4">
            Still have questions?
          </h2>
          <p className="text-[#0D0B12]/55 text-lg mb-8">
            We&apos;re a small team and we love hearing from people who care about math education.
            Reach out directly — we actually respond.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#7030A0] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#4A1E6B] transition-colors"
          >
            Contact Us →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — ShepherdXR",
  description:
    "Get in touch with the MathSTAR team. Questions, school partnerships, press inquiries, and general hellos — we'd love to hear from you.",
};

const reasons = [
  {
    title: "For Parents",
    body: "Questions about getting MathSTAR for your child, library access, or how the experience works.",
    href: "/parents",
    cta: "Visit Parents Page",
    color: "#DC2626",
  },
  {
    title: "For Educators",
    body: "Interested in a school or district pilot? Want to see the research? Let's set up a conversation.",
    href: "/educators",
    cta: "Visit Educators Page",
    color: "#0891B2",
  },
  {
    title: "Press & Media",
    body: "Media inquiries, interview requests, or coverage of our pilot programs and research.",
    href: "mailto:press@shepherdxr.org",
    cta: "Email Press Team",
    color: "#DC2626",
  },
  {
    title: "General Inquiries",
    body: "Anything else — partnerships, investor questions, donor questions, or just saying hi.",
    href: "mailto:hello@shepherdxr.org",
    cta: "Send a Message",
    color: "#0891B2",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-[#FAFAF8]">
      <Nav />

      {/* ── HERO ── */}
      <section className="pt-36 pb-20 px-6 lg:px-20 bg-[#DC2626]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#FCA5A5] font-semibold text-sm tracking-widest uppercase mb-6">
            Contact
          </p>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6">
            We&apos;d love to hear from you.
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-xl">
            Small team, big mission. We read every message and try to respond within a business day.
          </p>
        </div>
      </section>

      {/* ── CONTACT CARDS ── */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-[#0D0B12] mb-10">
            What can we help with?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="bg-white border border-[#0D0B12]/8 rounded-3xl p-8 flex flex-col"
              >
                <h3
                  className="text-xl font-extrabold mb-3"
                  style={{ color: r.color }}
                >
                  {r.title}
                </h3>
                <p className="text-[#0D0B12]/55 leading-relaxed mb-8 flex-1">{r.body}</p>
                <Link
                  href={r.href}
                  className="self-start text-sm font-semibold border rounded-full px-5 py-2.5 transition-colors hover:text-white"
                  style={{
                    borderColor: r.color,
                    color: r.color,
                  }}
                  {...(r.href.startsWith("mailto") ? { target: "_blank" } : {})}
                >
                  {r.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIRECT EMAIL ── */}
      <section className="py-20 px-6 lg:px-20 bg-[#FEF2F2]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="text-3xl font-extrabold text-[#0D0B12] mb-3">
              Prefer email?
            </h2>
            <p className="text-[#0D0B12]/55 text-lg">
              Reach us directly at{" "}
              <a
                href="mailto:hello@shepherdxr.org"
                className="text-[#DC2626] font-semibold hover:underline"
              >
                hello@shepherdxr.org
              </a>
            </p>
          </div>
          <div className="shrink-0 bg-white rounded-2xl px-8 py-6 border border-[#DC2626]/15 text-center">
            <p className="text-[#0D0B12]/40 text-xs tracking-widest uppercase mb-1">Response time</p>
            <p className="text-2xl font-extrabold text-[#DC2626]">&lt; 1 business day</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

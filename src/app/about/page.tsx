import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import AboutHero from "@/components/AboutHero";
import FounderStory from "@/components/FounderStory";
import FlipCard from "@/components/FlipCard";

export const metadata: Metadata = {
  title: "Our Story — ShepherdXR",
  description:
    "From expelled to Oxford: how our founder was gifted the wonder of math, and why he built MathSTAR so every child gets the same gift. Meet the team behind the mission.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#FAFAF8]">
      <Nav />

      <AboutHero />

      {/* ── FOUNDER STORY ── */}
      <FounderStory />

      {/* ── ORIGIN ── */}
      <section className="py-24 px-6 lg:px-20 bg-[#FEF2F2]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <p className="text-[#DC2626] font-semibold text-sm tracking-widest uppercase mb-5">
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
            <p className="text-[#0D0B12]/60 text-lg leading-relaxed">
              That moment of wonder took him from struggling student to Oxford Master&apos;s
              graduate, quantum physics researcher, bestselling novelist, and Netflix storyteller.
              He built ShepherdXR so no child has to wait for lucky.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="grid grid-cols-2 gap-5">
            {[
              { num: "10/10", label: "students chose math over recess" },
              { num: "18%", label: "pre → post test score gain" },
              { num: "45%", label: "median test score jump" },
              { num: "4.4/5", label: "average engagement rating" },
            ].map((s) => (
              <div
                key={s.num}
                className="bg-white rounded-2xl p-6 border border-[#DC2626]/10"
              >
                <div className="text-3xl font-extrabold text-[#DC2626] mb-2">{s.num}</div>
                <div className="text-[#0D0B12]/50 text-sm leading-snug">{s.label}</div>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* ── WHAT WE BELIEVE ── */}
      <section className="py-28 px-6 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-[#DC2626] font-semibold text-sm tracking-widest uppercase mb-5">
              What We Believe
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0D0B12] leading-tight">
              Three things we know to be true.
            </h2>
          </FadeIn>

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
                <p className="text-[#DC2626]/15 text-8xl font-extrabold leading-none absolute -top-3 right-6 select-none">
                  {item.num}
                </p>
                <p className="text-[#DC2626] text-xs font-bold tracking-widest uppercase mb-5">
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

      {/* ── TEAM ── */}
      <section className="py-28 px-6 lg:px-20 bg-[#FFF5F5]">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-[#DC2626] font-semibold text-sm tracking-widest uppercase mb-5">
              The Team
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0D0B12] leading-tight">
              The people behind the wonder.
            </h2>
          </FadeIn>

          {/* Leadership */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                name: "Femi Fadugba",
                role: "Founder & CEO",
                focus: "Leadership, STEM & Story",
                bio: "Oxford (MEng), UPenn (MPA). BCG consultant, published in quantum computing, bestselling author, Netflix Executive Producer, and STEM tutor. Built MathSTAR from his own experience of math as a child who almost fell through the cracks.",
                photo: "/headshots/Femi%20:%20Founder/4009.avif",
                color: "#DC2626",
              },
              {
                name: "Dan Miller",
                role: "Chief Experience Officer",
                focus: "Product Feel & Function",
                bio: "George Mason (MS, Data Analytics Engineering), Gettysburg (BS, Math & Economics). Leads UI, gesture schema, pedagogy, and backend. Previously in technical roles at Cenevo & Unison.",
                photo: "/headshots/Dan Miller.webp",
                color: "#0891B2",
              },
            ].map((member) => (
              <FadeIn key={member.name}>
                <FlipCard {...member} size="large" />
              </FadeIn>
            ))}
          </div>

          {/* Extended team */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Viola Gattus",    role: "Designer-Mathmo",      photo: "/headshots/Viola Gattus.webp",    color: "#DC2626", bio: "Brings the visual world of MathSTAR to life — bridging beautiful design with mathematical rigor.", focus: "Design & Math", },
              { name: "Sophia Turcotte", role: "Marketing & Story",     photo: "/headshots/Sophia Turcotte.webp", color: "#0891B2", bio: "Shapes how the MathSTAR story is told — from brand voice to campaign strategy.", focus: "Story & Brand", },
              { name: "Kerem Pauwels",   role: "Lead Artist",           photo: "/headshots/Kerem Pauwels.webp",   color: "#DC2626", bio: "Designs the underwater world, characters, and visual environments students explore.", focus: "Art & World-Building", },
              { name: "Chris Coombes",   role: "Developer-Mathmo",      photo: "/headshots/Chris Coombes.webp",   color: "#0891B2", bio: "Builds the mechanics of MathSTAR, ensuring every interaction is smooth and mathematically sound.", focus: "Dev & Math", },
              { name: "Joseph Ravalese", role: "Lead Product Manager",  photo: "/headshots/Joseph Ravalese.webp", color: "#DC2626", bio: "Keeps the product and team moving — translating vision into shipping features.", focus: "Product & Ops", },
              { name: "Amelie Pollack",  role: "Lead Sound & Music",    photo: "/headshots/Amelie Pollack.webp",  color: "#0891B2", bio: "Berklee-trained composer creating the soundscape that makes the underwater world feel alive.", focus: "Sound & Music", },
            ].map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.06}>
                <FlipCard {...member} size="small" />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR COMBINED EXPERTISE ── */}
      <section className="py-24 px-6 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-6 mb-16">
              <div className="flex-1 h-px bg-[#DC2626]/20" />
              <p className="text-[#DC2626] font-semibold text-xl tracking-wide">Our Combined Expertise</p>
              <div className="flex-1 h-px bg-[#DC2626]/20" />
            </div>

            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10">
              {[
                { name: "BCG",                    domain: "bcg.com" },
                { name: "Oxford",                 domain: "ox.ac.uk" },
                { name: "Harvard T.H. Chan",      domain: "harvard.edu" },
                { name: "UPenn",                  domain: "upenn.edu" },
                { name: "Tuck at Dartmouth",      domain: "dartmouth.edu" },
                { name: "Yahoo",                  domain: "yahoo.com" },
                { name: "Northeastern",           domain: "northeastern.edu" },
                { name: "George Mason",           domain: "gmu.edu" },
                { name: "Berklee",                domain: "berklee.edu" },
                { name: "HarperCollins",          domain: "harpercollins.com" },
                { name: "Penguin Random House",   domain: "penguinrandomhouse.com" },
                { name: "Netflix",                domain: "netflix.com" },
              ].map((org) => (
                <div key={org.name} className="flex flex-col items-center gap-2 group">
                  <Image
                    src={`https://logo.clearbit.com/${org.domain}`}
                    alt={org.name}
                    width={80}
                    height={40}
                    className="h-8 w-auto object-contain opacity-40 group-hover:opacity-70 transition-opacity duration-200 grayscale"
                  />
                  <span className="text-[#0D0B12]/30 text-xs font-medium group-hover:text-[#DC2626]/50 transition-colors">
                    {org.name}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 bg-[#DC2626]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Ready to learn more?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            See MathSTAR in action, explore the research, or reach out directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/mathstar"
              className="px-8 py-4 rounded-full font-bold text-[#DC2626] bg-white text-base hover:bg-[#FEF2F2] transition-colors"
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

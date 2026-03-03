"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const articles = [
  {
    date: "October 17, 2025",
    tag: "Impact",
    tagColor: "text-[#7030A0] bg-[#7030A0]/10",
    title: "Groundbreaking VR Program Delivers Measurable Improvement in Math",
    excerpt:
      "A 4-week free VR math camp at the Boston Public Library saw a 45% jump in median test scores — with students rating the program 4.4 out of 5 for learning and engagement.",
    href: "/impact",
    internal: true,
    accentColor: "#7030A0",
    accentBg: "from-[#7030A0]/10 to-[#7030A0]/4",
    border: "border-[#7030A0]/15",
  },
  {
    date: "August 30, 2024",
    tag: "Partnership",
    tagColor: "text-[#0891B2] bg-[#0891B2]/10",
    title: "VR Collab with Virginia Tutoring Company Yields Big Results",
    excerpt:
      "ShepherdXR partnered with a Virginia-based tutoring company to bring MathSTAR into new classrooms — and the results spoke for themselves.",
    href: "#",
    internal: false,
    accentColor: "#0891B2",
    accentBg: "from-[#0891B2]/10 to-[#0891B2]/4",
    border: "border-[#0891B2]/15",
  },
  {
    date: "May 8, 2024",
    tag: "Research",
    tagColor: "text-[#0891B2] bg-[#0891B2]/10",
    title: "Empowering Middle School Math Success with XR Technology",
    excerpt:
      "XR technology is bridging the arithmetic-to-algebra gap — making abstract concepts visual, engaging, and accessible for diverse learners including students on IEPs.",
    href: "#",
    internal: false,
    accentColor: "#0891B2",
    accentBg: "from-[#0891B2]/10 to-[#0891B2]/4",
    border: "border-[#0891B2]/15",
  },
];

const highlights = [
  { stat: "45%", label: "test score jump", source: "Boston Public Library Pilot" },
  { stat: "4.4/5", label: "engagement rating", source: "From students themselves" },
  { stat: "10/10", label: "educator satisfaction", source: "Ellis Elementary Pilot" },
];

export default function PressTeaser() {
  return (
    <section className="relative py-32 px-6 lg:px-16 bg-white overflow-hidden">

      <div className="absolute top-[-5%] right-[-8%] w-[450px] h-[450px] bg-[#0891B2]/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-6%] w-[350px] h-[350px] bg-[#7030A0]/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <motion.p
              className="text-[#0891B2] font-semibold text-sm tracking-widest uppercase mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              In the News
            </motion.p>
            <motion.h2
              className="text-4xl lg:text-[3rem] font-extrabold text-ink leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              The research is{" "}
              <em className="not-italic italic text-[#7030A0]">real.</em>
            </motion.h2>
          </div>

          {/* Inline stats strip */}
          <motion.div
            className="flex flex-wrap gap-6 lg:gap-8 shrink-0"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {highlights.map((h, i) => (
              <div key={i} className="text-center lg:text-right">
                <div className="text-2xl font-extrabold text-[#0891B2]">{h.stat}</div>
                <div className="text-ink/65 text-xs font-semibold leading-tight">{h.label}</div>
                <div className="text-ink/35 text-xs">{h.source}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Article cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {articles.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {a.internal ? (
                <Link href={a.href} className="group block h-full">
                  <ArticleCard article={a} />
                </Link>
              ) : (
                <div className="group block h-full cursor-default">
                  <ArticleCard article={a} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Founder quote */}
        <motion.div
          className="bg-gradient-to-r from-[#E0F7FA] to-[#F0E6F7] rounded-3xl p-10 lg:p-14 border border-[#0891B2]/15"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl lg:text-2xl font-semibold text-ink leading-relaxed mb-6">
              &ldquo;A lot of people don&apos;t learn math well in the traditional way. Many kids are visual learners — they need an intervention that meets them where they are, so they can finally get it. And{" "}
              <em className="not-italic italic text-[#7030A0]">love it.</em>&rdquo;
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-[#7030A0]/35" />
              <div className="text-center">
                <p className="text-ink/70 font-bold text-sm">Femi Fadugba</p>
                <p className="text-ink/40 text-xs">Founder, ShepherdXR</p>
              </div>
              <div className="w-8 h-px bg-[#7030A0]/35" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function ArticleCard({ article }: { article: typeof articles[0] }) {
  return (
    <div className={`h-full bg-gradient-to-br ${article.accentBg} rounded-3xl p-8 border ${article.border} flex flex-col group-hover:-translate-y-1 group-hover:shadow-lg transition-all duration-300`}>
      <div className="flex items-center justify-between mb-5">
        <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full ${article.tagColor}`}>
          {article.tag}
        </span>
        <span className="text-ink/35 text-xs">{article.date}</span>
      </div>
      <h3 className="text-ink font-bold text-base leading-snug mb-4 flex-1">
        {article.title}
      </h3>
      <p className="text-ink/55 text-sm leading-relaxed mb-6">
        {article.excerpt}
      </p>
      <div
        className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-200"
        style={{ color: article.accentColor }}
      >
        <span>{article.internal ? "Read the research →" : "Read article →"}</span>
      </div>
    </div>
  );
}

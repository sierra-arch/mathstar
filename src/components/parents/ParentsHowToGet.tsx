"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const options = [
  {
    title: "At Home",
    desc: "Get the headset and access MathSTAR from home. Perfect for summer learning, after-school, or whenever your child needs it.",
    cta: "Get MathSTAR for home →",
    href: "https://shepherdxr.org",
    photo: "/Stock Images/pexels-julia-m-cameron-4144150.jpg",
    photoAlt: "Child using VR headset at home",
    bg: "bg-[#F7F2FF]",
    border: "border-[#7030A0]/10",
  },
  {
    title: "At Your Library",
    desc: "MathSTAR is available at participating public libraries. Check if your local library has a headset available to borrow.",
    cta: "Find a library near you →",
    href: "/contact",
    photo: "/Stock Images/pexels-vazhnik-7864583.jpg",
    photoAlt: "Child with VR controllers on couch",
    bg: "bg-white",
    border: "border-ink/8",
  },
];

export default function ParentsHowToGet() {
  return (
    <section className="relative py-40 px-6 lg:px-16 bg-white overflow-hidden">

      <div className="absolute top-[10%] right-[-10%] w-[400px] h-[400px] bg-[#7030A0]/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.p
            className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            How to Get It
          </motion.p>
          <motion.h2
            className="text-4xl lg:text-[3.25rem] font-extrabold text-ink leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Two easy ways to{" "}
            <em className="not-italic italic text-[#7030A0]">get started</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {options.map((o, i) => (
            <motion.div
              key={i}
              className={`${o.bg} rounded-3xl border ${o.border} overflow-hidden flex flex-col`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Photo */}
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={o.photo}
                  alt={o.photoAlt}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
              </div>

              {/* Content */}
              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-ink mb-4">{o.title}</h3>
                <p className="text-ink/60 leading-relaxed text-lg mb-10 flex-1">{o.desc}</p>
                <Link
                  href={o.href}
                  target={o.href.startsWith("http") ? "_blank" : undefined}
                  rel={o.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-[#7030A0] font-semibold text-base hover:gap-4 transition-all"
                >
                  {o.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-ink/40 text-sm mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Not sure which is right for you?{" "}
          <Link href="/contact" className="text-[#7030A0] hover:underline">
            Reach out and we&apos;ll help.
          </Link>
        </motion.p>
      </div>
    </section>
  );
}

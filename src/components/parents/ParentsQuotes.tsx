"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    quote: "My son came to me yesterday at home and said, 'Mom, maths is my favourite subject now.'",
    from: "It used to be social sciences.",
    who: "Lonnie, Parent",
    context: "Roxbury Library Pilot",
  },
  {
    quote: "He's not strong at math at all but he came home after playing it, and was so excited. He was saying: 'Mommy I want to go back. Mommy, I want to go back.'",
    who: "Apollo's mum, Parent",
    context: "Roxbury Library Pilot",
  },
  {
    quote: "There's been a couple times when he's doing his school homework where he's come to me and said, 'I remember this from the VR game.'",
    who: "Amina, Parent",
    context: "6 months after the pilot",
  },
  {
    quote: "He sold the program to me. He really took ownership of it in the way he talked about it.",
    who: "Ms. Cruz, School Administrator (speaking about her nephew)",
    context: "Roxbury Library Pilot",
  },
];

export default function ParentsQuotes() {
  return (
    <section className="relative py-40 px-6 lg:px-16 bg-[#F7F2FF] overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(196,159,220,0.50) 0%, rgba(112,48,160,0.16) 42%, transparent 68%)" }} />
      <div className="absolute -top-24 -right-16 w-[480px] h-[480px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(8,145,178,0.22) 0%, transparent 62%)" }} />
      <div className="absolute -bottom-20 -left-20 w-[460px] h-[460px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(74,30,107,0.20) 0%, transparent 62%)" }} />
      <div className="absolute top-0 left-1/4 w-[450px] h-[450px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(240,230,247,0.90) 0%, transparent 65%)" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.p
            className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            From Other Parents
          </motion.p>
          <motion.h2
            className="text-4xl lg:text-[3.25rem] font-extrabold text-ink leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Parents just like you
            <br />
            <em className="not-italic italic text-[#7030A0]">are already seeing it.</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-3xl p-10 border border-[#7030A0]/8 shadow-sm flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="text-5xl text-[#7030A0]/15 font-serif leading-none mb-5">&ldquo;</div>
              <p className="text-ink text-lg font-medium leading-relaxed flex-1 mb-3">
                {q.quote}
              </p>
              {q.from && <p className="text-ink/50 text-base italic mb-5">{q.from}</p>}
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-6 h-px bg-[#7030A0]/30" />
                <div>
                  <p className="text-ink/60 text-sm font-semibold">{q.who}</p>
                  <p className="text-ink/35 text-xs">{q.context}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  {
    src: "/pexels-tima-miroshnichenko-7047292.jpg",
    alt: "Child with arms wide open experiencing VR",
    className: "h-72 lg:h-80",
    objectPosition: "object-top",
  },
  {
    src: "/pexels-sound-on-3761267.jpg",
    alt: "Joyful person experiencing VR learning",
    className: "h-72 lg:h-96",
    objectPosition: "object-center",
  },
  {
    src: "/pexels-michelangelo-buonarroti-8728557.jpg",
    alt: "Students sharing a VR math experience",
    className: "h-72 lg:h-80",
    objectPosition: "object-center",
  },
  {
    src: "/pexels-tima-miroshnichenko-5303587.jpg",
    alt: "Child arms wide open in teal VR room",
    className: "h-72 lg:h-96",
    objectPosition: "object-top",
  },
  {
    src: "/pexels-michelangelo-buonarroti-8728379.jpg",
    alt: "VR learning experience profile view",
    className: "h-72 lg:h-80",
    objectPosition: "object-center",
  },
];

export default function PhotoStrip() {
  return (
    <section className="relative py-24 px-6 lg:px-16 bg-[#F7F2FF] overflow-hidden">

      <div className="absolute top-0 left-[-5%] w-[400px] h-[400px] bg-[#7030A0]/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-4">The Experience</p>
          <h2 className="text-4xl lg:text-[3rem] font-extrabold text-ink leading-tight">
            This is what{" "}
            <em className="not-italic italic text-[#7030A0]">wonder</em> looks like.
          </h2>
        </motion.div>

        {/* Photo grid — varied heights for visual interest */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 items-end">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              className={`relative ${photo.className} rounded-2xl overflow-hidden`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className={`object-cover ${photo.objectPosition} hover:scale-105 transition-transform duration-700`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

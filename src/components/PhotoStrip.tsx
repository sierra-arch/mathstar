"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type MediaItem =
  | { type: "image"; src: string; alt: string; className: string; objectPosition: string }
  | { type: "video"; src: string; videoStart: number; className: string };

const media: MediaItem[] = [
  {
    type: "video",
    src: "/Gameplay-edited.mp4",
    videoStart: 4,
    className: "h-72 lg:h-80",
  },
  {
    type: "image",
    src: "/Stock Images/pexels-sound-on-3761267.jpg",
    alt: "Joyful person experiencing VR learning",
    className: "h-72 lg:h-96",
    objectPosition: "object-center",
  },
  {
    type: "video",
    src: "/Gameplay-edited.mp4",
    videoStart: 53,
    className: "h-72 lg:h-80",
  },
  {
    type: "image",
    src: "/Stock Images/pexels-tima-miroshnichenko-5303587.jpg",
    alt: "Child arms wide open in teal VR room",
    className: "h-72 lg:h-96",
    objectPosition: "object-top",
  },
  {
    type: "image",
    src: "/Stock Images/pexels-michelangelo-buonarroti-8728379.jpg",
    alt: "VR learning experience profile view",
    className: "h-72 lg:h-80",
    objectPosition: "object-[0%_65%]",
  },
];

export default function PhotoStrip() {
  return (
    <section className="relative py-24 px-6 lg:px-16 bg-[#FFF5F5] overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(252,165,165,0.40) 0%, rgba(220,38,38,0.12) 42%, transparent 68%)" }} />
      <div className="absolute -top-16 -right-16 w-[480px] h-[480px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(8,145,178,0.18) 0%, transparent 62%)" }} />
      <div className="absolute -bottom-16 -left-16 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(127,29,29,0.16) 0%, transparent 62%)" }} />
      <div className="absolute top-0 left-1/4 w-[380px] h-[380px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(254,242,242,0.82) 0%, transparent 65%)" }} />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#DC2626] font-semibold text-sm tracking-widest uppercase mb-4">The Experience</p>
          <h2 className="text-4xl lg:text-[3rem] font-extrabold text-ink leading-tight">
            This is what{" "}
            <em className="not-italic italic text-[#DC2626]">wonder</em> looks like.
          </h2>
        </motion.div>

        {/* Media grid — varied heights for visual interest */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 items-end">
          {media.map((item, i) => (
            <motion.div
              key={i}
              className={`relative ${item.className} rounded-2xl overflow-hidden`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  onLoadedMetadata={(e) => {
                    e.currentTarget.currentTime = item.videoStart;
                  }}
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className={`object-cover ${item.objectPosition} hover:scale-105 transition-transform duration-700`}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

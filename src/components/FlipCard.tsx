"use client";

import { useState } from "react";
import Image from "next/image";

interface FlipCardProps {
  name: string;
  role: string;
  focus: string;
  bio: string;
  photo: string;
  color: string;
  size?: "large" | "small";
}

export default function FlipCard({ name, role, focus, bio, photo, color, size = "large" }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  if (size === "small") {
    return (
      <div
        className="cursor-pointer"
        style={{ perspective: "1000px" }}
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className="relative transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            height: "220px",
          }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 bg-white rounded-2xl p-5 border border-[#0D0B12]/8 text-center flex flex-col items-center justify-center"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="w-14 h-14 rounded-xl mx-auto mb-3 overflow-hidden">
              <Image src={photo} alt={name} width={56} height={56} className="w-full h-full object-cover object-top" />
            </div>
            <p className="font-extrabold text-[#0D0B12] text-sm leading-snug mb-1">{name}</p>
            <p className="text-[#0D0B12]/45 text-xs leading-snug">{role}</p>
            <p className="text-[#0D0B12]/25 text-[10px] mt-2">tap to learn more</p>
          </div>
          {/* Back */}
          <div
            className="absolute inset-0 rounded-2xl p-5 flex flex-col justify-center"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", background: color }}
          >
            <p className="text-white font-extrabold text-sm mb-1">{name}</p>
            <p className="text-white/70 text-xs font-semibold mb-3">{role}</p>
            <p className="text-white/80 text-xs leading-relaxed">{bio}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="cursor-pointer"
      style={{ perspective: "1200px" }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className="relative transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          height: "200px",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-white rounded-3xl p-8 border border-[#0D0B12]/8 flex gap-6 items-start"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-20 h-20 rounded-2xl shrink-0 overflow-hidden">
            <Image src={photo} alt={name} width={80} height={80} className="w-full h-full object-cover object-top" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-extrabold text-[#0D0B12] text-lg leading-snug">{name}</p>
            <p className="font-semibold text-sm mb-0.5" style={{ color }}>{role}</p>
            <p className="text-[#0D0B12]/35 text-xs italic mb-3">&ldquo;{focus}&rdquo;</p>
            <p className="text-[#0D0B12]/40 text-xs">tap to read bio →</p>
          </div>
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 rounded-3xl p-8 flex flex-col justify-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", background: color }}
        >
          <p className="text-white font-extrabold text-lg mb-1">{name}</p>
          <p className="text-white/70 text-sm font-semibold mb-4">{role}</p>
          <p className="text-white/85 text-sm leading-relaxed">{bio}</p>
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

interface FloatingHeadsetProps {
  size?: number;
  className?: string;
  /** "light" = purple/lavender for light bg; "dark" = lighter purples/teal for dark bg */
  variant?: "light" | "dark";
  /** rotation in degrees */
  rotate?: number;
  delay?: number;
}

export default function FloatingHeadset({
  size = 200,
  className = "",
  variant = "light",
  rotate = -12,
  delay = 0,
}: FloatingHeadsetProps) {
  const gradId = `hg-${Math.random().toString(36).slice(2, 7)}`;

  const colors =
    variant === "dark"
      ? { from: "#C49FDC", to: "#0891B2", shell: "#1a0f2e", lens: "#0d1a2e", strap: "#C49FDC" }
      : { from: "#7030A0", to: "#0891B2", shell: "#F0E6F7", lens: "#E8D5F5", strap: "#7030A0" };

  return (
    <motion.div
      className={`pointer-events-none select-none ${className}`}
      style={{ width: size, rotate }}
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <svg
        viewBox="0 0 260 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size * 0.58}
        style={{ filter: `drop-shadow(0 20px 40px ${variant === "dark" ? "rgba(196,159,220,0.25)" : "rgba(112,48,160,0.2)"})` }}
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="260" y2="150" gradientUnits="userSpaceOnUse">
            <stop stopColor={colors.from} />
            <stop offset="1" stopColor={colors.to} />
          </linearGradient>
        </defs>

        {/* Left strap arm */}
        <path
          d="M 30 55 C 10 55 4 70 4 82 C 4 94 10 105 28 108 L 42 110"
          stroke={`url(#${gradId})`}
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
        {/* Right strap arm */}
        <path
          d="M 230 55 C 250 55 256 70 256 82 C 256 94 250 105 232 108 L 218 110"
          stroke={`url(#${gradId})`}
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />

        {/* Main headset shell */}
        <rect x="22" y="28" width="216" height="98" rx="28" fill={`url(#${gradId})`} />

        {/* Inner visor face */}
        <rect x="36" y="40" width="188" height="76" rx="20" fill={variant === "dark" ? "rgba(8,6,18,0.7)" : "rgba(240,230,247,0.5)"} />

        {/* Left lens */}
        <ellipse cx="95" cy="78" rx="42" ry="34" fill={variant === "dark" ? "rgba(8,6,18,0.85)" : "rgba(112,48,160,0.12)"} />
        <ellipse cx="95" cy="78" rx="42" ry="34" stroke={`url(#${gradId})`} strokeWidth="2.5" fill="none" />
        {/* Left lens glint */}
        <ellipse cx="82" cy="65" rx="10" ry="7" fill="white" opacity={variant === "dark" ? "0.12" : "0.35"} style={{ transform: "rotate(-20deg)", transformOrigin: "82px 65px" }} />

        {/* Right lens */}
        <ellipse cx="165" cy="78" rx="42" ry="34" fill={variant === "dark" ? "rgba(8,6,18,0.85)" : "rgba(112,48,160,0.12)"} />
        <ellipse cx="165" cy="78" rx="42" ry="34" stroke={`url(#${gradId})`} strokeWidth="2.5" fill="none" />
        {/* Right lens glint */}
        <ellipse cx="152" cy="65" rx="10" ry="7" fill="white" opacity={variant === "dark" ? "0.12" : "0.35"} style={{ transform: "rotate(-20deg)", transformOrigin: "152px 65px" }} />

        {/* Nose bridge */}
        <rect x="123" y="62" width="14" height="32" rx="5" fill={variant === "dark" ? "rgba(8,6,18,0.6)" : "rgba(112,48,160,0.15)"} />

        {/* Top accent line */}
        <rect x="60" y="34" width="140" height="3" rx="1.5" fill="white" opacity={variant === "dark" ? "0.1" : "0.4"} />
      </svg>
    </motion.div>
  );
}

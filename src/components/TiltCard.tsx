"use client";

import { useRef } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}

export default function TiltCard({ children, className = "", maxTilt = 8 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glossRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = -((y - cy) / cy) * maxTilt;
    const rotateY = ((x - cx) / cx) * maxTilt;

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.transition = "transform 0.08s ease-out";

    if (glossRef.current) {
      const glossX = (x / rect.width) * 100;
      const glossY = (y / rect.height) * 100;
      glossRef.current.style.background = `radial-gradient(circle at ${glossX}% ${glossY}%, rgba(255,255,255,0.12) 0%, transparent 60%)`;
      glossRef.current.style.opacity = "1";
    }
  };

  const onMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      cardRef.current.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
    }
    if (glossRef.current) {
      glossRef.current.style.opacity = "0";
    }
  };

  return (
    <div
      ref={cardRef}
      className={`${className} relative`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
      {/* Gloss highlight overlay */}
      <div
        ref={glossRef}
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{ opacity: 0, transition: "opacity 0.2s ease", zIndex: 10 }}
      />
    </div>
  );
}

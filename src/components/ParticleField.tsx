"use client";

import { useEffect, useRef } from "react";

const COLORS: [number, number, number][] = [
  [196, 159, 220], // lavender
  [112, 48, 160],  // purple
  [8, 145, 178],   // teal
  [220, 200, 240], // light lavender
  [255, 255, 255], // white
];

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  driftSpeed: number;
  driftOffset: number;
  opacity: number;
  opacityDir: number;
  color: [number, number, number];
}

export default function ParticleField({ count = 75 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);
    let mouseX = -999;
    let mouseY = -999;
    let time = 0;
    let raf: number;

    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.4,
      speed: Math.random() * 0.22 + 0.07,
      driftSpeed: Math.random() * 0.016 + 0.005,
      driftOffset: Math.random() * Math.PI * 2,
      opacity: Math.random() * 0.55 + 0.1,
      opacityDir: Math.random() > 0.5 ? 1 : -1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      time++;

      for (const p of particles) {
        p.y -= p.speed;
        p.x += Math.sin(time * p.driftSpeed + p.driftOffset) * 0.22;
        p.opacity += p.opacityDir * 0.0018;
        if (p.opacity > 0.72 || p.opacity < 0.06) p.opacityDir *= -1;
        if (p.y < -8) { p.y = height + 8; p.x = Math.random() * width; }

        // Mouse repulsion
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist2 = dx * dx + dy * dy;
        if (dist2 < 7500) {
          const dist = Math.sqrt(dist2);
          const force = (87 - dist) / 87;
          p.x += (dx / dist) * force * 1.8;
          p.y += (dy / dist) * force * 1.8;
        }

        const [r, g, b] = p.color;
        const glowR = p.size * 4.5;

        // Soft glow halo
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR);
        grad.addColorStop(0, `rgba(${r},${g},${b},${p.opacity * 0.55})`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.beginPath();
        ctx.fillStyle = grad;
        ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
        ctx.fill();

        // Core bright dot
        ctx.beginPath();
        ctx.fillStyle = `rgba(${r},${g},${b},${Math.min(p.opacity * 2, 1)})`;
        ctx.arc(p.x, p.y, p.size * 0.45, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(animate);
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onResize);
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

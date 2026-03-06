"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";
import Snap from "lenis/snap";

export default function SnapController() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const snap = new Snap(lenis, {
      type: "proximity",
      lerp: 0.09,
    });

    const elements = document.querySelectorAll("[data-snap]");
    snap.addElements(Array.from(elements) as HTMLElement[]);

    return () => snap.destroy();
  }, [lenis]);

  return null;
}

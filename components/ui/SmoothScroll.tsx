"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Pause Lenis when the cursor is over an iframe to prevent scroll conflicts
    const onEnter = (e: Event) => {
      if ((e.target as HTMLElement).tagName === "IFRAME") lenis.stop();
    };
    const onLeave = (e: Event) => {
      if ((e.target as HTMLElement).tagName === "IFRAME") lenis.start();
    };

    document.addEventListener("pointerenter", onEnter, true);
    document.addEventListener("pointerleave", onLeave, true);

    return () => {
      document.removeEventListener("pointerenter", onEnter, true);
      document.removeEventListener("pointerleave", onLeave, true);
      lenis.destroy();
    };
  }, []);

  return null;
}

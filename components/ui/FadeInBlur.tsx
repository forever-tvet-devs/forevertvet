"use client";

import { useRef, useEffect } from "react";

interface FadeInBlurProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  triggerOnScroll?: boolean;
}

export default function FadeInBlur({
  children,
  delay = 0,
  className = "",
  triggerOnScroll = true,
}: FadeInBlurProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const reveal = () => {
      if (prefersReduced) {
        el.style.opacity = "1";
        el.style.filter = "blur(0px)";
        el.style.transform = "translateY(0px)";
        el.style.transition = "none";
        return;
      }
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.filter = "blur(0px)";
        el.style.transform = "translateY(0px)";
      }, delay);
    };

    if (!triggerOnScroll) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, triggerOnScroll]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        filter: "blur(12px)",
        transform: "translateY(12px)",
        transition: "opacity 0.7s ease, filter 0.7s ease, transform 0.7s ease",
      }}
    >
      {children}
    </div>
  );
}

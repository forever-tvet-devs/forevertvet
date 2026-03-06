"use client";

import { useRef, useEffect, createElement } from "react";

interface AnimatedTextProps {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  baseDelay?: number;
  stagger?: number;
  triggerOnScroll?: boolean;
}

export default function AnimatedText({
  text,
  as: Tag = "h2",
  className = "",
  baseDelay = 300,
  stagger = 60,
  triggerOnScroll = true,
}: AnimatedTextProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const spans = el.querySelectorAll<HTMLElement>(".word-span");
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const reveal = () => {
      spans.forEach((span, i) => {
        if (prefersReduced) {
          span.style.opacity = "1";
          span.style.filter = "blur(0px)";
          span.style.transform = "translateY(0px)";
          span.style.transition = "none";
        } else {
          setTimeout(() => {
            span.style.opacity = "1";
            span.style.filter = "blur(0px)";
            span.style.transform = "translateY(0px)";
          }, baseDelay + i * stagger);
        }
      });
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
  }, [baseDelay, stagger, triggerOnScroll]);

  return createElement(
    Tag,
    { ref, className },
    words.map((word, i) => (
      <span
        key={i}
        className="word-span inline-block whitespace-pre"
        style={{
          opacity: 0,
          filter: "blur(12px)",
          transform: "translateY(20px)",
          transition: "opacity 0.6s ease, filter 0.6s ease, transform 0.6s ease",
        }}
      >
        {word}
        {i < words.length - 1 ? " " : ""}
      </span>
    ))
  );
}

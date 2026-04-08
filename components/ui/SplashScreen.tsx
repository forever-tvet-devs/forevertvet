"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

/* Corner bracket SVG — each corner is an L-shaped stroke that "draws" in */
function CornerLines() {
  const size = 60;
  const stroke = 1.5;

  const corners = [
    // top-left
    { className: "top-6 left-6", d: `M0,${size} L0,0 L${size},0` },
    // top-right
    { className: "top-6 right-6", d: `M${size},${size} L${size},0 L0,0` },
    // bottom-left
    { className: "bottom-6 left-6", d: `M0,0 L0,${size} L${size},${size}` },
    // bottom-right
    { className: "bottom-6 right-6", d: `M${size},0 L${size},${size} L0,${size}` },
  ];

  return (
    <>
      {corners.map((c, i) => (
        <svg
          key={i}
          className={`corner-line absolute ${c.className}`}
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          fill="none"
        >
          <path
            d={c.d}
            stroke="rgba(212,168,67,0.4)"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </>
  );
}

export default function SplashScreen() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const sloganRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ---- Animate corner SVG paths (stroke-dasharray draw-on) ---- */
      const paths = containerRef.current!.querySelectorAll(".corner-line path");
      paths.forEach((p) => {
        const len = (p as SVGPathElement).getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      });

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 0.5,
            ease: "power3.inOut",
            onComplete: () => setDismissed(true),
          });
        },
      });

      // 1. Corner lines draw in
      tl.to(paths, {
        strokeDashoffset: 0,
        duration: 0.7,
        ease: "power2.inOut",
        stagger: 0.08,
      });

      // 2. Logo scales up and fades in
      tl.fromTo(
        logoRef.current,
        { scale: 0.6, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.4)" },
        "-=0.35"
      );

      // 3. Accent line draws in
      tl.fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.35, ease: "power2.out" },
        "-=0.1"
      );

      // 4. School name reveals
      tl.fromTo(
        nameRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, ease: "power2.out" },
        "-=0.15"
      );

      // 5. Slogan fades in
      tl.fromTo(
        sloganRef.current,
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, ease: "power2.out" },
        "-=0.2"
      );

      // 6. Hold before exit
      tl.to({}, { duration: 0.7 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (dismissed) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary"
    >
      {/* Animated corner brackets */}
      <CornerLines />

      {/* Logo */}
      <div ref={logoRef} className="opacity-0">
        <Image
          src="/images/forever_tvet_white_transparent.png"
          alt="Forever Tvet Institute"
          width={100}
          height={100}
          priority
          className="object-contain"
        />
      </div>

      {/* Accent line */}
      <div
        ref={lineRef}
        className="mt-5 h-[2px] w-16 origin-center bg-accent"
        style={{ transform: "scaleX(0)" }}
      />

      {/* School name */}
      <h1
        ref={nameRef}
        className="mt-4 font-heading text-xl tracking-[0.25em] text-white uppercase opacity-0 sm:text-2xl"
      >
        Forever Tvet Institute
      </h1>

      {/* Slogan */}
      <p
        ref={sloganRef}
        className="mt-2 text-sm tracking-widest text-white/70 opacity-0"
      >
        Build Skills That Build Careers
      </p>
    </div>
  );
}

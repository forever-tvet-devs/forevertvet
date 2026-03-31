"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, QuoteIcon } from "@/components/ui/Icons";

const testimonials = [
  {
    quote:
      "Forever Tvet Institute changed my son's life. Within three months of graduating he was hired by a major construction company. The practical training here is unlike anything else available in Rwanda.",
    name: "Mrs. Amara Nkosi",
    role: "Parent — Road Construction Graduate",
    initials: "AN",
    bg: "#0C2461",
  },
  {
    quote:
      "The instruction we get here helps us overcome difficulties we meet in life. The heavy machinery programme gave me a skill employers were calling me for before I even finished. I now operate equipment on major road projects.",
    name: "Jerome Uwimpuhwe",
    role: "Graduate — Heavy Machinery Programme",
    initials: "DM",
    bg: "#117A65",
  },
  {
    quote:
      "We combine the excellent teaching methods from China with the real needs of local industry. Students go from theory to simulation to hands-on operation — and every graduate has an internship lined up before they leave.",
    name: "Fan Qiangqiang",
    role: "General Manager, Forever Tvet Institute",
    initials: "TH",
    bg: "#6C3483",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setVisible(true);
    }, 200);
  }, []);

  const prev = useCallback(() => goTo((current - 1 + testimonials.length) % testimonials.length), [current, goTo]);
  const next = useCallback(() => goTo((current + 1) % testimonials.length), [current, goTo]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => next(), 6000);
    return () => clearInterval(id);
  }, [paused, next]);

  const t = testimonials[current];

  return (
    <section className="py-20 lg:py-28 bg-primary/[0.03] border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">
            What People Say
          </span>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight mt-2">
            Voices From Our Community
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div
            className="relative text-center px-6 lg:px-12 transition-opacity duration-200"
            style={{ opacity: visible ? 1 : 0 }}
          >
            <div className="flex justify-center mb-6">
              <QuoteIcon size={36} className="text-accent opacity-60" />
            </div>

            <p className="text-lg lg:text-xl text-gray-700 italic leading-relaxed font-heading">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="flex flex-col items-center gap-3 mt-8">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: t.bg }}
              >
                <span className="text-white font-bold text-sm">{t.initials}</span>
              </div>
              <div>
                <p className="font-semibold text-body text-sm">{t.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{t.role}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial slides">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 ${
                    i === current ? "w-6 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

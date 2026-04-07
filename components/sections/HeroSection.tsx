"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { ArrowRight } from "@/components/ui/Icons";

const slides = [
  {
    image: "/images/image2.png",
    alt: "Students training at Forever Tvet Institute",
    heading: "Build Skills That Build Careers",
    tagline: "Rwanda\u2019s accredited TVET institution since 2018",
    cta: { label: "Apply Now", href: "/admissions/apply" },
  },
  {
    image: "/images/PeopleLookAtTrainingDevice.png",
    alt: "Students and instructors examining training equipment",
    heading: "Learn by Doing",
    tagline: "Hands-on training with industry-standard equipment",
    cta: { label: "View Programs", href: "/academics/curriculum" },
  },
  {
    image: "/images/image1.png",
    alt: "Hands-on vocational training session",
    heading: "94% Employment Rate",
    tagline: "500+ graduates placed with 30+ industry partners",
    cta: { label: "Get Started", href: "/admissions/apply" },
  },
  {
    image: "/images/SolarPanelsTechnologyImage.png",
    alt: "Solar panel technology training",
    heading: "Future-Ready Training",
    tagline: "From heavy machinery to renewable energy",
    cta: { label: "Explore Departments", href: "/academics/departments" },
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const progressInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const AUTOPLAY_DELAY = 7000;

  const startProgress = useCallback(() => {
    if (progressInterval.current) clearInterval(progressInterval.current);
    setProgress(0);
    const step = 50;
    let elapsed = 0;
    progressInterval.current = setInterval(() => {
      elapsed += step;
      setProgress(Math.min(elapsed / AUTOPLAY_DELAY, 1));
      if (elapsed >= AUTOPLAY_DELAY) clearInterval(progressInterval.current!);
    }, step);
  }, []);

  useEffect(() => {
    startProgress();
    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, [startProgress]);

  const handleSlideChange = useCallback(
    (swiper: SwiperType) => {
      setActiveIndex(swiper.realIndex);
      startProgress();
    },
    [startProgress]
  );

  const goTo = useCallback((i: number) => swiperRef.current?.slideToLoop(i), []);
  const goPrev = useCallback(() => swiperRef.current?.slidePrev(), []);
  const goNext = useCallback(() => swiperRef.current?.slideNext(), []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        speed={800}
        autoplay={{ delay: AUTOPLAY_DELAY, disableOnInteraction: false }}
        loop
        grabCursor
        onSwiper={(s) => (swiperRef.current = s)}
        onSlideChange={handleSlideChange}
        className="h-full w-full flex-1"
        style={{ minHeight: "100vh" }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.image}>
            <div className="relative min-h-screen flex flex-col">
              {/* Background */}
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority
                className="object-cover object-center z-0"
                sizes="100vw"
              />

              {/* Overlays */}
              <div
                className="absolute inset-0 z-[1]"
                style={{ background: "rgba(0,0,0,0.45)" }}
              />
              <div
                className="absolute inset-0 z-[1] pointer-events-none"
                style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 40%)" }}
              />
              <div
                className="absolute inset-0 z-[1] pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 40%)" }}
              />

              {/* Content */}
              <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-3 sm:px-4 md:px-4 lg:px-4 pt-[70px] pb-32">
                <div className="max-w-3xl mx-auto space-y-6">
                  <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-7xl text-white leading-tight">
                    {slide.heading}
                  </h1>

                  <p className="text-base lg:text-lg text-white/65 leading-relaxed">
                    {slide.tagline}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={slide.cta.href}
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm bg-primary text-white hover:bg-primary-dark transition-all"
                    >
                      {slide.cta.label}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slide controls — fixed at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pb-8 px-3 sm:px-4 md:px-4 lg:px-4 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-end justify-between pointer-events-auto">
          {/* Dash indicators */}
          <div className="flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="relative h-[3px] rounded-full overflow-hidden transition-all duration-300 cursor-pointer"
                style={{
                  width: activeIndex === i ? 48 : 20,
                  background:
                    activeIndex === i
                      ? "rgba(255,255,255,0.2)"
                      : "rgba(255,255,255,0.25)",
                }}
                aria-label={`Go to slide ${i + 1}`}
              >
                {activeIndex === i && (
                  <span
                    className="absolute inset-y-0 left-0 rounded-full bg-primary"
                    style={{
                      width: `${progress * 100}%`,
                      transition: "width 50ms linear",
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-4">
            <div className="flex gap-1.5">
              <button
                onClick={goPrev}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors cursor-pointer"
                aria-label="Previous slide"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={goNext}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors cursor-pointer"
                aria-label="Next slide"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

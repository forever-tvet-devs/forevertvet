"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "@/components/ui/Icons";

gsap.registerPlugin(ScrollTrigger);

const departments = [
  {
    title: "Heavy Machinery Control",
    desc: "Operate and maintain heavy construction equipment — the only programme of its kind in the region.",
    image: "/images/image2.png",
    color: "#214B82",
  },
  {
    title: "Land Survey & Mapping",
    desc: "Precision surveying and geospatial mapping for construction and infrastructure projects.",
    image: "/images/LandSurveyingLecturer.jpg",
    color: "#2D6A4F",
  },
  {
    title: "Industrial Electricity",
    desc: "Electrical systems installation, wiring, and maintenance in industrial environments.",
    image: "/images/image2(ElecticalControlCabinate).png",
    color: "#B8860B",
  },
  {
    title: "Road Construction",
    desc: "Hands-on training in road-building, earthworks, and civil infrastructure.",
    image: "/images/image1.png",
    color: "#8B4513",
  },
  {
    title: "Computer Engineering",
    desc: "Practical IT, hardware, networking, and software skills for the modern job market.",
    image: "/images/SolarPanelsTechnologyImage.png",
    color: "#4A4A8A",
  },
];

export default function AcademicsSnippet() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const totalScroll = track.scrollWidth - window.innerWidth;

    const tween = gsap.to(track, {
      x: -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        end: () => `+=${totalScroll}`,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-gray-50">
      <div ref={trackRef} className="flex items-stretch h-screen will-change-transform">

        {/* Intro panel */}
        <div className="shrink-0 w-screen h-full flex items-center px-3 sm:px-4 md:px-4 lg:px-4">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-xl">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                What We Teach
              </span>
              <h2 className="font-heading font-bold text-4xl lg:text-6xl text-body leading-tight">
                Five Industry-Ready Programmes
              </h2>
              <p className="text-base lg:text-lg text-gray-500 leading-relaxed mt-6 max-w-md">
                Each programme moves from theory to simulation to practical operation,
                then into paid internships with partner companies.
              </p>
              <div className="flex items-center gap-3 mt-8 text-gray-400 animate-[nudge_2s_ease-in-out_infinite]">
                <span className="text-sm">Scroll to explore</span>
                <ArrowRight size={16} />
              </div>
              <style>{`
                @keyframes nudge {
                  0%, 100% { transform: translateX(0); opacity: 0.5; }
                  50% { transform: translateX(8px); opacity: 1; }
                }
              `}</style>
            </div>
          </div>
        </div>

        {/* Programme cards */}
        {departments.map((dept, i) => (
          <div
            key={dept.title}
            className="shrink-0 w-[85vw] sm:w-[70vw] lg:w-[45vw] h-full flex items-center px-3 sm:px-4"
          >
            <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden group">
              {/* Image */}
              <Image
                src={dept.image}
                alt={dept.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 85vw, 45vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Number */}
              <div className="absolute top-6 right-6 z-10">
                <span
                  className="font-heading font-bold text-6xl leading-none"
                  style={{ color: "rgba(255,255,255,0.1)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-8">
                <div
                  className="w-10 h-1 rounded-full mb-4"
                  style={{ background: dept.color }}
                />
                <h3 className="font-heading font-bold text-2xl lg:text-3xl text-white leading-tight mb-2">
                  {dept.title}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed max-w-sm">
                  {dept.desc}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* End CTA panel */}
        <div className="shrink-0 w-screen h-full flex items-center justify-center px-3 sm:px-4 md:px-4 lg:px-4">
          <div className="text-center">
            <h3 className="font-heading font-bold text-3xl lg:text-5xl text-body leading-tight mb-6">
              Ready to Start?
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/academics/curriculum"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm bg-primary text-white hover:bg-primary-dark transition-all"
              >
                View Full Curriculum
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, MapPin, ArrowRight } from "@/components/ui/Icons";
import { events } from "@/components/school-life/eventsData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const today = new Date();
today.setHours(0, 0, 0, 0);
const upcoming = events.filter((e) => e.date >= today).slice(0, 4);
const displayedEvents = upcoming.length > 0 ? upcoming : events.slice(0, 4);

export default function UpcomingEvents() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".event-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".events-accent-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg,#D4A843 0,#D4A843 1px,transparent 0,transparent 50%)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">
              Mark Your Calendar
            </span>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight mt-2">
              Upcoming Events
            </h2>
          </div>
          <Link
            href="/school-life/events"
            className="inline-flex items-center gap-2 text-white/70 font-semibold hover:text-white hover:gap-3 transition-all group shrink-0"
          >
            See All Events
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Accent line */}
        <div className="events-accent-line h-[2px] w-20 bg-accent mb-12 origin-left" />

        {/* Event cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayedEvents.map((event) => (
            <Link
              key={event.slug}
              href={`/school-life/events/${event.slug}`}
              className="event-card group flex flex-col rounded-2xl overflow-hidden opacity-0 h-full bg-white/[0.06]"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden flex-shrink-0">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Date badge */}
                <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm text-white rounded-lg px-2.5 py-1.5 text-center min-w-[48px]">
                  <span className="font-heading font-black text-lg leading-none block">
                    {String(event.date.getDate()).padStart(2, "0")}
                  </span>
                  <span className="text-[9px] uppercase tracking-wide opacity-80 block mt-0.5">
                    {MONTHS[event.date.getMonth()]}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="px-4 py-4 flex-1 flex flex-col">
                <h3 className="font-semibold text-sm text-white leading-snug line-clamp-2 group-hover:text-accent transition-colors duration-200 mb-2">
                  {event.title}
                </h3>
                <p className="text-xs text-white/50 leading-relaxed line-clamp-2 mb-3 flex-1">
                  {event.description}
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-auto">
                  <span className="flex items-center gap-1.5 text-[11px] text-white/40">
                    <Clock size={11} />
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] text-white/40">
                    <MapPin size={11} />
                    {event.location}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

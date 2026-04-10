"use client";

import { useRef, useEffect, useState } from "react";
import { departmentColors } from "@/components/academics/departmentColors";

const data = [
  { dept: "Heavy Machinery Operation & Maintenance", graduates: 140, rate: 97 },
  { dept: "Solar Technology",                        graduates: 65,  rate: 95 },
  { dept: "EV Cars",                                 graduates: 42,  rate: 93 },
  { dept: "Computer Systems & Architecture",         graduates: 72,  rate: 94 },
  { dept: "Electrical Technology",                   graduates: 115, rate: 96 },
  { dept: "Land Surveying",                          graduates: 95,  rate: 92 },
  { dept: "Public Works",                            graduates: 88,  rate: 91 },
];

function BarRow({ dept, graduates, rate, triggered }: { dept: string; graduates: number; rate: number; triggered: boolean }) {
  const color = departmentColors[dept];
  const prefersReduced = typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  const barWidth = triggered ? `${rate}%` : "0%";

  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-0">
      {/* Color strip */}
      <div className="w-1.5 self-stretch rounded-full flex-shrink-0" style={{ backgroundColor: color }} />

      {/* Dept info */}
      <div className="w-52 flex-shrink-0 min-w-0 hidden sm:block">
        <p className="text-sm font-semibold text-primary leading-snug">{dept}</p>
        <p className="text-xs text-gray-400 mt-0.5">{graduates} graduates</p>
      </div>
      <div className="sm:hidden flex-shrink-0">
        <p className="text-xs font-semibold text-primary leading-snug w-32 truncate">{dept}</p>
      </div>

      {/* Progress bar */}
      <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: barWidth,
            backgroundColor: color,
            transition: prefersReduced ? "none" : "width 1s ease-out",
          }}
        />
      </div>

      {/* Rate */}
      <span className="text-xl font-heading font-bold w-12 text-right flex-shrink-0" style={{ color }}>
        {rate}%
      </span>
    </div>
  );
}

export default function ResultsChart() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) { setTriggered(true); return; }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-0">
      {data.map((row) => (
        <BarRow key={row.dept} {...row} triggered={triggered} />
      ))}
    </div>
  );
}

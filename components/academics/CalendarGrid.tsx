"use client";

import { useState } from "react";
interface CalendarEvent {
  label: string;
  type: "classes" | "exam" | "break" | "intake" | "graduation";
}

interface MonthData {
  month: string;
  year: string;
  events: CalendarEvent[];
}

const typeStyles: Record<CalendarEvent["type"], string> = {
  classes:    "bg-primary/8 text-primary",
  exam:       "bg-red-50 text-red-700",
  break:      "bg-green-50 text-green-700",
  intake:     "bg-amber-50 text-amber-700",
  graduation: "bg-purple-50 text-purple-700",
};

const intake1: MonthData[] = [
  { month: "January",   year: "2026", events: [{ label: "Orientation Day", type: "intake" }, { label: "Classes Begin", type: "classes" }] },
  { month: "February",  year: "2026", events: [{ label: "Phase 1 — Theory", type: "classes" }] },
  { month: "March",     year: "2026", events: [{ label: "Phase 1 Ends", type: "classes" }, { label: "Phase 2 Begins", type: "classes" }] },
  { month: "April",     year: "2026", events: [{ label: "Mid-Term Break", type: "break" }, { label: "Phase 2 — Labs", type: "classes" }] },
  { month: "May",       year: "2026", events: [{ label: "Phase 2 Ends", type: "classes" }, { label: "Phase 3 Begins", type: "classes" }] },
  { month: "June",      year: "2026", events: [{ label: "Phase 3 — Supervised", type: "classes" }, { label: "Mid-Programme Assessment", type: "exam" }] },
  { month: "July",      year: "2026", events: [{ label: "Phase 3 Ends", type: "classes" }, { label: "Internship Begins", type: "intake" }] },
  { month: "August",    year: "2026", events: [{ label: "Phase 4 — Internship", type: "classes" }] },
  { month: "September", year: "2026", events: [{ label: "Internship Continues", type: "classes" }, { label: "Supervisor Reports Due", type: "exam" }] },
  { month: "October",   year: "2026", events: [{ label: "Final Examinations", type: "exam" }, { label: "Internship End", type: "break" }] },
  { month: "November",  year: "2026", events: [{ label: "Results Released", type: "classes" }, { label: "Graduation Ceremony", type: "graduation" }] },
  { month: "December",  year: "2026", events: [{ label: "Break", type: "break" }, { label: "Next Intake Apps Open", type: "intake" }] },
];

const intake2: MonthData[] = [
  { month: "January",   year: "2026", events: [{ label: "Break", type: "break" }, { label: "Intake 2 Apps Open", type: "intake" }] },
  { month: "February",  year: "2026", events: [{ label: "Applications Close", type: "intake" }] },
  { month: "March",     year: "2026", events: [] },
  { month: "April",     year: "2026", events: [] },
  { month: "May",       year: "2026", events: [] },
  { month: "June",      year: "2026", events: [{ label: "Applications Close", type: "intake" }] },
  { month: "July",      year: "2026", events: [{ label: "Orientation Day", type: "intake" }, { label: "Classes Begin", type: "classes" }] },
  { month: "August",    year: "2026", events: [{ label: "Phase 1 — Theory", type: "classes" }] },
  { month: "September", year: "2026", events: [{ label: "Phase 1 Ends", type: "classes" }, { label: "Phase 2 Begins", type: "classes" }] },
  { month: "October",   year: "2026", events: [{ label: "Mid-Term Break", type: "break" }, { label: "Phase 2 — Labs", type: "classes" }] },
  { month: "November",  year: "2026", events: [{ label: "Phase 2 Ends", type: "classes" }, { label: "Phase 3 Begins", type: "classes" }] },
  { month: "December",  year: "2026", events: [{ label: "Phase 3 — Supervised", type: "classes" }, { label: "Break (1 week)", type: "break" }] },
];

export default function CalendarGrid() {
  const [activeTab, setActiveTab] = useState<"intake1" | "intake2">("intake1");
  const months = activeTab === "intake1" ? intake1 : intake2;

  return (
    <div>
      {/* Tabs */}
      <div>
        <div className="flex gap-2 mb-8">
          {[
            { key: "intake1", label: "Intake 1 — January 2026" },
            { key: "intake2", label: "Intake 2 — July 2026" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as "intake1" | "intake2")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === tab.key
                  ? "bg-primary text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Month grid */}
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {months.map((month) => (
            <div
              key={month.month}
              className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <p className="font-semibold text-primary text-sm">{month.month}</p>
              <p className="text-xs text-gray-400 mb-3">{month.year}</p>

              {month.events.length === 0 ? (
                <p className="text-xs text-gray-300 text-center py-3">No scheduled events</p>
              ) : (
                <div className="space-y-1.5">
                  {month.events.map((ev, i) => (
                    <span
                      key={i}
                      className={`block rounded-md px-2 py-1 text-xs font-medium leading-snug ${typeStyles[ev.type]}`}
                    >
                      {ev.label}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div>
        <div className="flex flex-wrap gap-3 mt-6">
          {(Object.entries(typeStyles) as [CalendarEvent["type"], string][]).map(([type, cls]) => (
            <div key={type} className="flex items-center gap-1.5">
              <span className={`w-3 h-3 rounded-sm ${cls}`} />
              <span className="text-xs text-gray-500 capitalize">{type === "intake" ? "Intake / Orientation" : type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

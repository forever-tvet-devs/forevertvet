"use client";

import { useState } from "react";
import Link from "next/link";
import FadeInBlur from "@/components/ui/FadeInBlur";
import { Clock, MapPin, ArrowRight } from "@/components/ui/Icons";
import { events, categoryStyles } from "@/components/school-life/eventsData";
import type { CalendarEvent } from "@/components/school-life/eventsData";

type Tab = "Upcoming" | "All";

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const MONTHS_FULL = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export default function EventsCalendar() {
  const [tab, setTab] = useState<Tab>("Upcoming");
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const displayed = tab === "Upcoming"
    ? events.filter((e) => e.date >= today)
    : events;

  // Group by month
  const grouped: Record<string, CalendarEvent[]> = {};
  displayed.forEach((e) => {
    const key = `${MONTHS_FULL[e.date.getMonth()]} ${e.date.getFullYear()}`;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(e);
  });

  return (
    <div>
      {/* Tabs */}
      <FadeInBlur delay={0}>
        <div className="flex gap-2 mb-8">
          {(["Upcoming", "All"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                tab === t ? "bg-primary text-white shadow-sm" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {t === "All" ? "All Events" : t}
            </button>
          ))}
        </div>
      </FadeInBlur>

      {/* Empty state */}
      {displayed.length === 0 && (
        <FadeInBlur delay={200}>
          <div className="text-center py-16 rounded-xl bg-gray-50 border border-gray-100">
            <p className="text-lg font-semibold text-primary mb-2">No upcoming events right now</p>
            <p className="text-sm text-gray-500">Check back soon, or view all events using the tab above.</p>
          </div>
        </FadeInBlur>
      )}

      {/* Grouped list */}
      <div key={tab} className="space-y-10">
        {Object.entries(grouped).map(([month, monthEvents], gi) => (
          <FadeInBlur key={month} delay={gi * 80}>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4 pb-2 border-b border-gray-100">
                {month}
              </h3>
              <div className="space-y-3">
                {monthEvents.map((event, i) => (
                  <Link
                    key={event.slug + i}
                    href={`/school-life/events/${event.slug}`}
                    className="rounded-xl bg-white border border-gray-100 shadow-sm overflow-hidden flex group hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    {/* Date block */}
                    <div className="bg-primary text-white flex flex-col items-center justify-center px-4 py-4 min-w-[72px] flex-shrink-0">
                      <span className="text-3xl font-black leading-none">{event.date.getDate()}</span>
                      <span className="text-xs uppercase tracking-wide mt-1 opacity-80">{MONTHS[event.date.getMonth()]}</span>
                    </div>

                    {/* Content */}
                    <div className="p-4 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${categoryStyles[event.category]}`}>
                          {event.category}
                        </span>
                        {event.open && (
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-green-50 text-green-700 font-medium border border-green-200">
                            Open to public
                          </span>
                        )}
                      </div>
                      <p className="font-semibold text-primary text-sm leading-snug mb-1.5 group-hover:text-accent transition-colors">{event.title}</p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2">
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <Clock size={12} className="flex-shrink-0" /> {event.time}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <MapPin size={12} className="flex-shrink-0" /> {event.location}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-1">{event.description}</p>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center pr-4 pl-2 flex-shrink-0">
                      <ArrowRight size={14} className="text-gray-300 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </FadeInBlur>
        ))}
      </div>

      {/* Registration note */}
      {displayed.length > 0 && (
        <FadeInBlur delay={500}>
          <p className="text-xs text-gray-400 mt-8 text-center">
            To register for public events, contact us at{" "}
            <a href="mailto:events@forevertvet.rw" className="text-accent hover:underline">events@forevertvet.rw</a>
            {" "}or call{" "}
            <a href="tel:+250788000000" className="text-accent hover:underline">+250 788 000 000</a>.
          </p>
        </FadeInBlur>
      )}
    </div>
  );
}

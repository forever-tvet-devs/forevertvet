"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, MapPin, ArrowRight, Calendar } from "@/components/ui/Icons";
import { events, categoryStyles } from "@/components/school-life/eventsData";

type Tab = "Upcoming" | "All";

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export default function EventsCalendar() {
  const [tab, setTab] = useState<Tab>("Upcoming");
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const displayed = tab === "Upcoming"
    ? events.filter((e) => e.date >= today)
    : events;

  return (
    <div>
      {/* Tabs */}
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

      {/* Empty state */}
      {displayed.length === 0 && (
        <div className="text-center py-16 rounded-xl bg-gray-50 border border-gray-100">
          <p className="text-lg font-semibold text-primary mb-2">No upcoming events right now</p>
          <p className="text-sm text-gray-500">Check back soon, or view all events using the tab above.</p>
        </div>
      )}

      {/* Grid */}
      <div key={tab} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayed.map((event) => (
          <Link
            key={event.slug}
            href={`/school-life/events/${event.slug}`}
            className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col"
          >
            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden flex-shrink-0">
              <Image
                src={event.image}
                alt={event.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Date badge */}
              <div className="absolute top-3 left-3 bg-primary text-white rounded-lg px-3 py-2 text-center min-w-[52px]">
                <span className="font-heading font-black text-xl leading-none block">{String(event.date.getDate()).padStart(2, "0")}</span>
                <span className="text-[10px] uppercase tracking-wide opacity-80 block mt-0.5">{MONTHS[event.date.getMonth()]}</span>
              </div>
              {/* Category badge */}
              <div className="absolute top-3 right-3">
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${categoryStyles[event.category]}`}>
                  {event.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="font-heading font-semibold text-primary text-base leading-snug mb-2 group-hover:text-accent transition-colors">
                {event.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-4 flex-1">{event.description}</p>

              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Clock size={12} /> {event.time}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-gray-400">
                  <MapPin size={12} /> {event.location}
                </span>
                {event.open && (
                  <span className="flex items-center gap-1.5 text-xs font-medium text-green-600">
                    <Calendar size={12} /> Open to public
                  </span>
                )}
              </div>

              <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-1.5 transition-all mt-auto">
                View Details <ArrowRight size={12} />
              </span>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}

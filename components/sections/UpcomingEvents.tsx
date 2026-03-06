import Link from "next/link";
import AnimatedText from "@/components/ui/AnimatedText";
import FadeInBlur from "@/components/ui/FadeInBlur";
import { Clock, MapPin, ArrowRight } from "@/components/ui/Icons";
import { events, categoryStyles } from "@/components/school-life/eventsData";

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

// Pick the 3 nearest upcoming events (or first 3 if all past)
const today = new Date();
today.setHours(0, 0, 0, 0);
const upcoming = events.filter((e) => e.date >= today).slice(0, 3);
const displayedEvents = upcoming.length > 0 ? upcoming : events.slice(0, 3);

export default function UpcomingEvents() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="max-w-xl">
            <FadeInBlur delay={0}>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                Mark Your Calendar
              </span>
            </FadeInBlur>
            <AnimatedText
              text="Upcoming Events"
              as="h2"
              baseDelay={100}
              stagger={60}
              className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight mt-2"
            />
          </div>
          <FadeInBlur delay={300}>
            <Link
              href="/school-life/events"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group flex-shrink-0"
            >
              See All Events
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInBlur>
        </div>

        {/* Event cards */}
        <div className="space-y-4">
          {displayedEvents.map((event, i) => (
            <FadeInBlur key={event.slug} delay={300 + i * 150}>
              <Link
                href={`/school-life/events/${event.slug}`}
                className="group flex items-start sm:items-center gap-5 bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                {/* Date block */}
                <div className="shrink-0 w-16 h-16 rounded-xl bg-primary flex flex-col items-center justify-center group-hover:bg-primary-light transition-colors">
                  <span className="font-heading font-black text-xl text-accent leading-none">
                    {String(event.date.getDate()).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-white/70 mt-0.5">
                    {MONTHS[event.date.getMonth()]}
                  </span>
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${categoryStyles[event.category]}`}>
                      {event.category}
                    </span>
                    {event.open && (
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200">
                        Open to public
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-base text-body leading-snug group-hover:text-primary transition-colors line-clamp-1">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 mt-1.5">
                    <span className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Clock size={12} />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-400">
                      <MapPin size={12} />
                      {event.location}
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <ArrowRight
                  size={18}
                  className="shrink-0 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all hidden sm:block"
                />
              </Link>
            </FadeInBlur>
          ))}
        </div>

      </div>
    </section>
  );
}

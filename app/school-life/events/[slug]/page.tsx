import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedText from "@/components/ui/AnimatedText";
import { events, categoryStyles } from "@/components/school-life/eventsData";
import { Calendar, Clock, MapPin, ChevronLeft, ArrowRight, Users } from "@/components/ui/Icons";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) return { title: "Event Not Found — Forever Tvet Institute" };
  return {
    title: `${event.title} — Forever Tvet Institute`,
    description: event.description,
  };
}

const MONTHS_FULL = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();

  const dayName = DAYS[event.date.getDay()];
  const formattedDate = `${dayName}, ${MONTHS_FULL[event.date.getMonth()]} ${event.date.getDate()}, ${event.date.getFullYear()}`;

  // Related: same category, excluding current, max 3
  const sameCategory = events.filter((e) => e.slug !== slug && e.category === event.category).slice(0, 3);
  const related =
    sameCategory.length >= 2
      ? sameCategory
      : [
          ...sameCategory,
          ...events.filter((e) => e.slug !== slug && !sameCategory.includes(e)).slice(0, 3 - sameCategory.length),
        ];

  return (
    <>
      <Navbar />
      <main className="pt-[70px]">

        {/* Hero banner */}
        <div className="relative min-h-[420px] lg:min-h-[520px] overflow-hidden bg-primary">
          <Image
            src={event.image}
            alt={event.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/30" />
          <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 py-16 lg:py-20 flex flex-col justify-end min-h-[420px] lg:min-h-[520px]">
            <div>
              <Link
                href="/school-life/events"
                className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-xs font-medium transition-colors mb-6"
              >
                <ChevronLeft size={14} /> Back to Events
              </Link>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryStyles[event.category]}`}>
                  {event.category}
                </span>
                {event.open && (
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
                    Open to public
                  </span>
                )}
              </div>
            </div>

            <AnimatedText
              text={event.title}
              as="h1"
              className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-6"
              baseDelay={200}
              stagger={40}
              triggerOnScroll={false}
            />

            {/* Meta strip */}
            <div>
              <div className="flex flex-wrap gap-5">
                <span className="flex items-center gap-2 text-sm text-white/70">
                  <Calendar size={15} className="text-accent flex-shrink-0" />
                  {formattedDate}
                </span>
                <span className="flex items-center gap-2 text-sm text-white/70">
                  <Clock size={15} className="text-accent flex-shrink-0" />
                  {event.time}
                </span>
                <span className="flex items-center gap-2 text-sm text-white/70">
                  <MapPin size={15} className="text-accent flex-shrink-0" />
                  {event.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content + sidebar */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="grid lg:grid-cols-[1fr_260px] gap-12 items-start">

              {/* Body */}
              <div>
                <div>
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium border-l-4 border-accent pl-5 mb-10">
                    {event.description}
                  </p>
                </div>

                <div className="space-y-6">
                  {event.body.map((para, i) => (
                    <div key={i}>
                      <p className="text-base text-gray-600 leading-relaxed">{para}</p>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div>
                  <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-xs font-bold text-white">FT</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary">Forever Tvet Institute</p>
                        <p className="text-xs text-gray-400">{formattedDate}</p>
                      </div>
                    </div>
                    <Link
                      href="/school-life/events"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all group"
                    >
                      <ChevronLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
                      All Events
                    </Link>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:sticky lg:top-24 space-y-4">

                {/* Event details card */}
                <div>
                  <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5 space-y-4">
                    <p className="font-semibold text-primary text-sm">Event Details</p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Calendar size={15} className="text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">Date</p>
                          <p className="text-sm font-medium text-gray-700">{formattedDate}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock size={15} className="text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">Time</p>
                          <p className="text-sm font-medium text-gray-700">{event.time}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin size={15} className="text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">Location</p>
                          <p className="text-sm font-medium text-gray-700">{event.location}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users size={15} className="text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">Admission</p>
                          <p className="text-sm font-medium text-gray-700">
                            {event.open ? "Open to the public" : "Students & staff only"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Register / contact card */}
                {event.open && (
                  <div>
                    <div className="bg-primary rounded-2xl p-5">
                      <p className="font-semibold text-white text-sm mb-1">Attending this event?</p>
                      <p className="text-xs text-white/60 leading-relaxed mb-4">
                        This event is open to the public. Contact us to register or ask questions.
                      </p>
                      <a
                        href="mailto:events@forevertvet.rw"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 px-4 py-2.5 rounded-lg transition-colors w-full justify-center"
                      >
                        events@forevertvet.rw
                      </a>
                      <a
                        href="tel:+250788000000"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-white mt-2 justify-center w-full transition-colors"
                      >
                        +250 788 000 000
                      </a>
                    </div>
                  </div>
                )}

                {/* All events link */}
                <div>
                  <Link
                    href="/school-life/events"
                    className="flex items-center justify-between gap-2 bg-white rounded-xl border border-gray-100 p-4 group hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <span className="text-sm font-semibold text-primary group-hover:text-accent transition-colors">View all events</span>
                    <ArrowRight size={14} className="text-gray-300 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related events */}
        {related.length > 0 && (
          <section className="py-16 lg:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
              <div className="flex items-end justify-between gap-4 mb-8">
                <div>
                  <div>
                    <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-2">More Events</span>
                  </div>
                  <AnimatedText
                    text="Other Events"
                    as="h2"
                    className="font-heading font-bold text-2xl lg:text-3xl text-body leading-tight"
                    baseDelay={100}
                    stagger={55}
                  />
                </div>
                <div>
                  <Link
                    href="/school-life/events"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all group flex-shrink-0"
                  >
                    View All <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                {related.map((rel, i) => (
                  <div key={i}>
                    <Link
                      href={`/school-life/events/${rel.slug}`}
                      className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                    >
                      {/* Date block */}
                      <div className="bg-primary text-white flex items-center gap-3 px-5 py-4">
                        <div className="text-center min-w-[44px]">
                          <span className="text-3xl font-black leading-none block">{rel.date.getDate()}</span>
                          <span className="text-xs uppercase tracking-wide opacity-80">
                            {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][rel.date.getMonth()]}
                          </span>
                        </div>
                        <div className="min-w-0">
                          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${categoryStyles[rel.category]}`}>
                            {rel.category}
                          </span>
                          <p className="font-semibold text-white text-sm leading-snug mt-1.5 line-clamp-2 group-hover:text-accent/90 transition-colors">
                            {rel.title}
                          </p>
                        </div>
                      </div>

                      <div className="p-4 flex flex-col flex-1 gap-2">
                        <div className="flex flex-wrap gap-x-3 gap-y-1">
                          <span className="flex items-center gap-1 text-xs text-gray-400">
                            <Clock size={11} /> {rel.time}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-gray-400">
                            <MapPin size={11} /> {rel.location}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 flex-1">{rel.description}</p>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-1.5 transition-all mt-auto">
                          View Event <ArrowRight size={12} />
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 lg:py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(-45deg,#D4A843 0,#D4A843 1px,transparent 0,transparent 50%)", backgroundSize: "24px 24px" }} />
      <Image
        src="/images/fti-bg-pattern.png"
        alt=""
        width={495}
        height={504}
        className="hidden lg:block absolute -bottom-44 -left-40 w-[780px] h-auto opacity-[0.05] pointer-events-none select-none"
        aria-hidden="true"
      />
          <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <AnimatedText text="Interested in Joining Our Community?" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight mb-4" baseDelay={0} stagger={55} />
            <div>
              <p className="text-base lg:text-lg text-white/75 max-w-xl mx-auto mb-8">
                Apply to Forever Tvet Institute and become part of a school where things happen.
              </p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/admissions/apply" className="px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md">Apply Now</Link>
                <Link href="/school-life/events" className="px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">All Events</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

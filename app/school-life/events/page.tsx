import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import EventsCalendar from "@/components/school-life/EventsCalendar";

export const metadata: Metadata = {
  title: "Events — Forever Tvet Institute",
  description:
    "Upcoming and past events at Forever Tvet Institute — orientation, career fairs, competitions, cultural days, and graduation ceremonies.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "School Life", href: "/school-life" },
  { label: "Events", href: "/school-life/events" },
];

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        <PageHeroBanner
          label="What's On"
          title="Events"
          subCopy="From orientation ceremonies to national competitions — something is always happening at Forever Tvet Institute."
          breadcrumb={breadcrumb}
          backgroundImage="/images/image1.png"
        />

        {/* Intro */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Calendar</span>
            </div>
            <AnimatedText text="A Year of Activity" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight" baseDelay={100} stagger={60} />
            <div>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed mt-5">
                Our events calendar spans academic milestones, career opportunities, community celebrations, and competitions. Many events are open to prospective students and the public.
              </p>
            </div>
          </div>
        </section>

        {/* Events calendar */}
        <section className="py-4 pb-20 lg:pb-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <EventsCalendar />
          </div>
        </section>

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
            <AnimatedText text="Don't Miss the Next Intake" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight mb-4" baseDelay={0} stagger={55} />
            <div><p className="text-base lg:text-lg text-white/75 max-w-xl mx-auto mb-8">Orientation Day for Intake 1 is 5 January 2026. Places are limited — secure yours now.</p></div>
            <div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/admissions/apply" className="px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md">Apply Now</Link>
                <Link href="/admissions/how-to-apply" className="px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">View All Intakes</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

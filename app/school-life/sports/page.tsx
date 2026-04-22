import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import SportsList from "@/components/school-life/SportsList";
import { Trophy, Users, Calendar, Dumbbell } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Sports & Athletics — Forever Tvet Institute",
  description:
    "Sports programs and athletics at Forever Tvet Institute — football, volleyball, basketball, track & field, and fitness training.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "School Life", href: "/school-life" },
  { label: "Sports", href: "/school-life/sports" },
];

const stats = [
  { icon: Trophy,   value: "5",       label: "Sports Offered" },
  { icon: Users,    value: "40+",     label: "Sports Club Members" },
  { icon: Calendar, value: "Weekly",  label: "Training Sessions" },
  { icon: Dumbbell, value: "Annual",  label: "Inter-Institute Competition" },
];

export default function SportsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        <PageHeroBanner
          label="Athletics & Fitness"
          title="Sports"
          subCopy="Physical fitness and team sport are part of a complete education. Our students compete, train, and push their limits — on and off the field."
          breadcrumb={breadcrumb}
          backgroundImage="/images/image1.png"
        />

        {/* Philosophy + Stats */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              {/* Copy */}
              <div>
                <div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Why Sport Matters</span>
                </div>
                <AnimatedText text="Fit Body, Sharp Mind" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight" baseDelay={100} stagger={60} />
                <div>
                  <p className="text-base text-gray-600 leading-relaxed mt-5">
                    Technical training demands physical endurance — particularly for programs like Heavy Machinery Operation & Maintenance, Electrical Technology, and Land Surveying where fieldwork is intensive. Sport builds the stamina, discipline, and mental resilience students carry into their careers.
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed mt-4">
                    Beyond individual fitness, team sport develops the collaboration and communication skills that employers value most. Students who train together work together — and that makes a difference in every professional environment.
                  </p>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <div key={i}>
                      <div className="rounded-xl bg-gray-50 border border-gray-100 p-5 text-center">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                          <Icon size={20} className="text-accent" />
                        </div>
                        <p className="font-heading font-black text-3xl text-primary mb-1">{s.value}</p>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">{s.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Sports List */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-12">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Our Sports</span>
              </div>
              <AnimatedText text="What We Play & Train" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight" baseDelay={100} stagger={60} />
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 lg:px-8">
              <SportsList />
            </div>
          </div>
        </section>

        {/* Annual Competition */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Mark Your Calendar</span>
                </div>
                <AnimatedText text="Annual Inter-Institute Sports Day" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight" baseDelay={100} stagger={60} />
                <div>
                  <p className="text-base text-gray-600 leading-relaxed mt-5">
                    Each year, Forever Tvet students compete against athletes from across Kigali's TVET institutes. Events span football, volleyball, athletics, and more. The day is a celebration of sport, school pride, and community — spectators, alumni, and families all welcome.
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed mt-4">
                    Our students have placed in the top three across multiple events in previous competitions, including runners-up in the Kigali TVET Cup 2025.
                  </p>
                </div>
              </div>

              <div>
                <div className="rounded-2xl bg-primary/5 border border-primary/15 p-7">
                  <Trophy size={32} className="text-accent mb-4" />
                  <p className="font-heading font-bold text-xl text-primary mb-4">Sports Day 2026</p>
                  <div className="space-y-3">
                    {[
                      { label: "Date",      value: "To be announced — Q3 2026" },
                      { label: "Location",  value: "TBC — Kigali sports grounds" },
                      { label: "Open to",   value: "Students, alumni, and the public" },
                      { label: "Events",    value: "Football, volleyball, athletics, and more" },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between items-start py-2.5 border-b border-primary/10 last:border-0">
                        <span className="text-xs text-gray-500 font-medium">{row.label}</span>
                        <span className="text-xs text-primary font-semibold text-right ml-4">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-2xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Get Involved</span>
            </div>
            <AnimatedText text="Join the Sports & Fitness Club" as="h2" className="font-heading font-bold text-2xl lg:text-3xl text-body leading-tight" baseDelay={100} stagger={60} />
            <div>
              <p className="text-base text-gray-600 leading-relaxed mt-5 mb-7">
                No tryouts. No prerequisites. Show up, stay consistent, and grow. The Sports & Fitness Club welcomes every student from day one of enrolment — regardless of fitness level or experience.
              </p>
            </div>
            <div>
              <Link
                href="/contact"
                className="bg-primary inline-block px-7 py-3 text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm shadow-sm"
              >
                Contact the Sports Coordinator
              </Link>
            </div>
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
        className="hidden lg:block absolute -top-44 -right-40 w-[780px] h-auto opacity-[0.05] pointer-events-none select-none"
        aria-hidden="true"
      />
          <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <AnimatedText text="Train Hard. Study Harder. Graduate Ready." as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight mb-4" baseDelay={0} stagger={55} />
            <div><p className="text-base lg:text-lg text-white/75 max-w-xl mx-auto mb-8">Forever Tvet graduates are prepared in every dimension — technically, professionally, and physically.</p></div>
            <div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/admissions/apply" className="px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md">Apply Now</Link>
                <Link href="/academics/courses" className="px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">See All Programs</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

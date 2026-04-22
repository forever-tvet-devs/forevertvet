import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import {
  Camera, Palette, Building, Calendar, Trophy,
  Users, Star, BookOpen, ArrowRight,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "School Life — Forever Tvet Institute",
  description:
    "Vibrant campus life at Forever Tvet Institute — clubs, sports, events, facilities, gallery, and a community that goes far beyond the classroom.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "School Life", href: "/school-life" },
];

const highlights = [
  { icon: BookOpen, stat: "5 Active Clubs", desc: "Students explore interests far beyond their core program every week." },
  { icon: Calendar,  stat: "Weekly Events",  desc: "Guest speakers, competitions, cultural celebrations, and career fairs." },
  { icon: Star,      stat: "World-Class Labs", desc: "Hands-on training with professional-grade equipment from day one." },
];

const areas = [
  { icon: Camera,   label: "Gallery",                href: "/school-life/gallery",      desc: "Photos from campus life and student moments" },
  { icon: Palette,  label: "Clubs & Extracurriculars", href: "/school-life/clubs",       desc: "Find your community outside the lecture room" },
  { icon: Building, label: "Facilities",             href: "/school-life/facilities",   desc: "Discover the infrastructure behind great training" },
  { icon: Calendar, label: "Events",                 href: "/school-life/events",       desc: "Competitions, ceremonies, guest talks, and more" },
  { icon: Trophy,   label: "Sports",                 href: "/school-life/sports",       desc: "Athletics, fitness, and team competitions" },
];

const quotes = [
  { text: "The lab sessions are where it all clicked for me. You stop reading about electricity and start understanding it.", name: "Kwame A.", program: "Electrical Technology", initials: "KA" },
  { text: "I joined the coding club in my first week. Three months later I had already built a working app.", name: "Diane U.", program: "Computer Systems & Architecture", initials: "DU" },
  { text: "The internship we did was real work — a real company, real equipment, real responsibility.", name: "Jean-Pierre N.", program: "Heavy Machinery Operation & Maintenance", initials: "JN" },
];

export default function SchoolLifePage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        <PageHeroBanner
          label="Campus Life"
          title="Life at Forever Tvet"
          subCopy="Beyond the classroom, our students grow as people — through sport, creativity, community, and hands-on experiences that define who they become."
          breadcrumb={breadcrumb}
          backgroundImage="/images/image1.png"
        />

        {/* Life Snapshot */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-12">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Why It Matters</span>
              </div>
              <AnimatedText text="More Than a Training School" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight" baseDelay={100} stagger={60} />
              <div>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed mt-5 max-w-2xl mx-auto">
                  Great technicians are built in labs. Complete professionals are built through the full breadth of campus life — sport, community, creativity, and challenge.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <div key={i}>
                    <div className="rounded-2xl bg-gray-50 border border-gray-100 p-7 text-center hover:shadow-md transition-shadow duration-200">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon size={24} className="text-accent" />
                      </div>
                      <p className="font-heading font-bold text-xl text-primary mb-2">{h.stat}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{h.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Six Area Cards */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-12">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">What We Offer</span>
              </div>
              <AnimatedText text="Explore Every Dimension of Campus Life" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight" baseDelay={100} stagger={60} />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {areas.map((area, i) => {
                const Icon = area.icon;
                return (
                  <div key={i}>
                    <Link
                      href={area.href}
                      className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 flex flex-col group hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 h-full"
                    >
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon size={22} className="text-accent" />
                      </div>
                      <p className="font-heading font-bold text-lg text-primary mb-2">{area.label}</p>
                      <p className="text-sm text-gray-500 leading-relaxed flex-1">{area.desc}</p>
                      <div className="flex items-center gap-1.5 mt-4 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                        Explore <ArrowRight size={15} />
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Student Voices */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-12">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Student Life</span>
              </div>
              <AnimatedText text="Hear From Our Students" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight" baseDelay={100} stagger={60} />
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {quotes.map((q, i) => (
                <div key={i}>
                  <div className="rounded-xl bg-gray-50 border border-gray-100 p-6 flex flex-col h-full">
                    <p className="text-4xl font-black text-accent/30 leading-none mb-2">&ldquo;</p>
                    <p className="text-sm text-gray-700 leading-relaxed italic flex-1">{q.text}</p>
                    <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-100">
                      <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-white">{q.initials}</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary">{q.name}</p>
                        <p className="text-xs text-gray-400">{q.program}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
        className="hidden lg:block absolute -bottom-44 -left-40 w-[780px] h-auto opacity-[0.05] pointer-events-none select-none"
        aria-hidden="true"
      />
          <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <AnimatedText text="Your Story Starts Here" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight mb-4" baseDelay={0} stagger={55} />
            <div><p className="text-base lg:text-lg text-white/75 max-w-xl mx-auto mb-8">Join a campus where ambition meets opportunity every single day.</p></div>
            <div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/admissions/apply" className="px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md">Apply Now</Link>
                <Link href="/academics/courses" className="px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">Explore Programs</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

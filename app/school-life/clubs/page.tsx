import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import FadeInBlur from "@/components/ui/FadeInBlur";
import ClubsGrid from "@/components/school-life/ClubsGrid";
import { Users, Star, Briefcase } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Clubs & Extracurriculars — Forever Tvet Institute",
  description:
    "Student clubs and extracurricular activities at Forever Tvet Institute — technology, creative, sports, environment, and community clubs.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "School Life", href: "/school-life" },
  { label: "Clubs & Extracurriculars", href: "/school-life/clubs" },
];

const benefits = [
  { icon: Star,      title: "Build Soft Skills",    desc: "Leadership, communication, and teamwork developed outside the lecture hall in real, collaborative settings." },
  { icon: Users,     title: "Expand Your Network",  desc: "Connect with peers across all programs and intake years — the colleagues of your future career." },
  { icon: Briefcase, title: "Strengthen Your CV",   desc: "Employers value well-rounded graduates who took initiative and engaged with campus life beyond their studies." },
];

export default function ClubsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        <PageHeroBanner
          label="Beyond the Classroom"
          title="Clubs & Extracurriculars"
          subCopy="Your skills extend far beyond your program. Clubs are where curiosity turns into capability — and where friendships last a lifetime."
          breadcrumb={breadcrumb}
          backgroundImage="/images/image1.png"
          overlayOpacity={0.65}
        />

        {/* Why Join */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <FadeInBlur delay={0}>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Why It Matters</span>
              </FadeInBlur>
              <AnimatedText text="Why Join a Club?" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight" baseDelay={100} stagger={60} />
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <FadeInBlur key={b.title} delay={300 + i * 100}>
                    <div className="rounded-xl bg-gray-50 border border-gray-100 p-6 text-center h-full">
                      <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                        <Icon size={22} className="text-accent" />
                      </div>
                      <p className="font-semibold text-primary text-sm mb-2">{b.title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
                    </div>
                  </FadeInBlur>
                );
              })}
            </div>
          </div>
        </section>

        {/* Clubs Grid */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <FadeInBlur delay={0}>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">All Clubs</span>
              </FadeInBlur>
              <AnimatedText text="Find Your Community" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight" baseDelay={100} stagger={60} />
              <FadeInBlur delay={350}>
                <p className="text-base text-gray-500 leading-relaxed mt-4 max-w-xl mx-auto">
                  Use the filters to find clubs that match your interests. All clubs are free to join and open to every enrolled student.
                </p>
              </FadeInBlur>
            </div>
            <ClubsGrid />
          </div>
        </section>

        {/* Start a Club */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeInBlur delay={0}>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Start Something New</span>
            </FadeInBlur>
            <AnimatedText text="Don't See Your Interest?" as="h2" className="font-heading font-bold text-2xl lg:text-3xl text-body leading-tight" baseDelay={100} stagger={60} />
            <FadeInBlur delay={400}>
              <p className="text-base text-gray-600 leading-relaxed mt-5 mb-7">
                Any student can propose a new club. Bring 5 friends and an idea to the Dean of Students — we will provide the space, the time, and the support to make it happen.
              </p>
            </FadeInBlur>
            <FadeInBlur delay={600}>
              <Link
                href="/contact"
                className="inline-block px-7 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors text-sm shadow-sm"
              >
                Contact the Dean of Students
              </Link>
            </FadeInBlur>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(-45deg,#D4A843 0,#D4A843 1px,transparent 0,transparent 50%)", backgroundSize: "24px 24px" }} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedText text="More Than Training — A Community" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight mb-4" baseDelay={0} stagger={55} />
            <FadeInBlur delay={350}><p className="text-base lg:text-lg text-white/75 max-w-xl mx-auto mb-8">Students who engage outside the classroom graduate with more. Apply and become part of it.</p></FadeInBlur>
            <FadeInBlur delay={550}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/admissions/apply" className="px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md">Apply Now</Link>
                <Link href="/school-life" className="px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">View Student Life</Link>
              </div>
            </FadeInBlur>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

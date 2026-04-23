import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import DepartmentList from "@/components/academics/DepartmentList";
import { ArrowRight } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Our Courses — Forever Tvet Institute",
  description:
    "Explore Forever Tvet Institute's vocational programmes — short courses in Heavy Machinery, Solar, and EV Cars, plus 3-year programmes in Computer Systems, Electrical Technology, Land Surveying, and Public Works.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Academics", href: "/academics" },
  { label: "Our Courses", href: "/academics/courses" },
];

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        {/* Hero */}
        <PageHeroBanner
          label="What We Offer"
          title="Our Courses"
          subCopy="Seven specialist courses, each designed around a specific industry — with curriculum written by the people who work in it."
          breadcrumb={breadcrumb}
          backgroundImage="/images/image2.png"
        />

        {/* Course List */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-16 lg:mb-20">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                  Our Programs
                </span>
              </div>

              <AnimatedText
                text="Explore Our Courses"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />

              <div>
                <p className="text-base lg:text-lg text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
                  Each course is built around a specific industry — with curriculum written by the people who work in it.
                </p>
              </div>
            </div>

            <DepartmentList />
          </div>
        </section>

        {/* CTA Strip */}
        <section className="py-20 lg:py-24 bg-primary relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: "repeating-linear-gradient(-45deg, #D4A843 0, #D4A843 1px, transparent 0, transparent 50%)",
              backgroundSize: "24px 24px",
            }}
          />
      <Image
        src="/images/fti-bg-pattern.png"
        alt=""
        width={495}
        height={504}
        className="hidden lg:block absolute -bottom-44 -left-40 w-[780px] h-auto opacity-[0.05] pointer-events-none select-none"
        aria-hidden="true"
      />
          <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <AnimatedText
              text="Find the Right Program for You"
              as="h2"
              className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight mb-4"
              baseDelay={0}
              stagger={55}
            />
            <div>
              <p className="text-base lg:text-lg text-white/75 max-w-xl mx-auto mb-8">
                Not sure which course fits your career goals? Talk to our admissions team — they will help you decide.
              </p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/admissions/apply"
                  className="px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md"
                >
                  Apply Now
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Contact Admissions
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

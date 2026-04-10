import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import DepartmentAccordion from "@/components/academics/DepartmentAccordion";
import { ArrowRight } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Departments & Subjects — Forever Tvet Institute",
  description:
    "Explore Forever Tvet Institute's vocational programmes — short courses in Heavy Machinery, Solar, and EV Cars, plus 3-year programmes in Computer Systems, Electrical Technology, Land Surveying, and Public Works.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Academics", href: "/academics" },
  { label: "Departments & Subjects", href: "/academics/departments" },
];

const instructorStats = [
  { value: "5+ yrs", label: "Minimum Industry Experience" },
  { value: "100%",   label: "Re-Trained Every 2 Years" },
  { value: "8:1",    label: "Student-to-Instructor Ratio" },
];

export default function DepartmentsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        {/* Hero */}
        <PageHeroBanner
          label="Academic Departments"
          title="Departments & Subjects"
          subCopy="Five specialist departments, each designed around a specific industry — with curriculum written by the people who work in it."
          breadcrumb={breadcrumb}
          backgroundImage="/images/image2.png"
        />

        {/* Department Accordion */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="mb-12">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                  Our Programs
                </span>
              </div>

              <AnimatedText
                text="The People Behind Your Education"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />

              <div>
                <p className="text-base lg:text-lg text-gray-500 mt-4 max-w-2xl leading-relaxed">
                  Click on any department to expand the full subject list, career pathways, and lead instructor profile. Every program is structured around the job it leads to.
                </p>
              </div>
            </div>

            <DepartmentAccordion />
          </div>
        </section>

        {/* Instructor Quality Promise */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-3xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                Our Instructors
              </span>
            </div>

            <AnimatedText
              text="Every Instructor Has Done the Job"
              as="h2"
              className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
              baseDelay={100}
              stagger={60}
            />

            <div>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed mt-6 max-w-2xl mx-auto">
                We do not hire people who have only ever taught. Every instructor in every department has spent significant time working in the industry they now teach — a minimum of five years in the field before they ever entered a classroom.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-5 mt-10">
              {instructorStats.map((stat, i) => (
                <div key={i}>
                  <div className="rounded-xl bg-white border border-gray-100 p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
                    <p className="font-heading font-bold text-3xl text-accent">{stat.value}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mt-1 leading-snug">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
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
                Not sure which department fits your career goals? Talk to our admissions team — they will help you decide.
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

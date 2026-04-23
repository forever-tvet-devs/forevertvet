import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import CurriculumPhases from "@/components/academics/CurriculumPhases";
import { BookOpen, Layers, Briefcase, CheckCircle, Download, ArrowRight } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Curriculum Overview — Forever Tvet Institute",
  description:
    "Discover how Forever Tvet Institute structures its curriculum — from theoretical foundations through simulation to real-world industry placement.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Academics", href: "/academics" },
  { label: "Curriculum Overview", href: "/academics/curriculum" },
];

const philosophyHighlights = [
  {
    icon: BookOpen,
    label: "Theory & Fundamentals",
    desc: "Structured classroom sessions build deep conceptual understanding before any tool is touched.",
  },
  {
    icon: Layers,
    label: "Simulation & Practice",
    desc: "Purpose-built labs replicate industry environments exactly — so students practice in safety before going live.",
  },
  {
    icon: Briefcase,
    label: "Industry Placement",
    desc: "Every student completes a confirmed, supervised internship with one of our 30+ partner companies.",
  },
];

const programs = [
  { name: "Heavy Machinery Operation & Maintenance", duration: "Short Course", level: "Certificate", internship: "Guaranteed", intake: "Contact School" },
  { name: "Solar Technology",                        duration: "Short Course", level: "Certificate", internship: "Guaranteed", intake: "Contact School" },
  { name: "EV Cars",                                 duration: "Short Course", level: "Certificate", internship: "Guaranteed", intake: "Contact School" },
  { name: "Computer Systems & Architecture",         duration: "3 Years",      level: "Level 3–5",    internship: "Guaranteed", intake: "Appointed by NESA" },
  { name: "Electrical Technology",                   duration: "3 Years",      level: "Level 3–5",    internship: "Guaranteed", intake: "Appointed by NESA" },
  { name: "Land Surveying",                          duration: "3 Years",      level: "Level 3–5",    internship: "Guaranteed", intake: "Appointed by NESA" },
  { name: "Public Works",                            duration: "3 Years",      level: "Level 3–5",    internship: "Guaranteed", intake: "Appointed by NESA" },
];

const certChecks = [
  "Nationally recognised by WDA",
  "Accepted by Rwanda Education Board",
  "Valued by 30+ industry partners",
];

export default function CurriculumPage() {
  return (
    <>
      <Navbar />
      <main className="pt-17.5">
        {/* Hero */}
        <PageHeroBanner
          label="How We Teach"
          title="Curriculum Overview"
          subCopy="A structured, industry-validated curriculum that takes every student from classroom theory to job-ready competence — in months, not years."
          breadcrumb={breadcrumb}
          backgroundImage="/images/PeopleLookAtTrainingDevice.png"
        />

        {/* Philosophy */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                Our Approach
              </span>
            </div>

            <AnimatedText
              text="Built by Industry, Verified by Results"
              as="h2"
              className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
              baseDelay={100}
              stagger={60}
            />

            <div>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed mt-6">
                Our curriculum was not written by academics in isolation. It was designed in direct partnership with Rwandan and international industry leaders — the people who actually hire our graduates — to ensure that every hour of study translates into practical, employer-valued competence.
              </p>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed mt-4">
                We fuse China's proven vocational teaching methodology with Rwanda's specific industry landscape. The result is a four-phase learning journey that takes students from structured theory through hands-on simulation, supervised practice, and finally into a guaranteed industry internship.
              </p>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed mt-4">
                No student leaves our institution without having done the real job. That is not a marketing claim — it is a structural guarantee built into every program.
              </p>
            </div>

            {/* 3-column highlights */}
            <div className="grid sm:grid-cols-3 gap-6 mt-12">
              {philosophyHighlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <div key={i}>
                    <div className="flex flex-col items-center text-center gap-3 p-6 rounded-xl bg-gray-50">
                      <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center">
                        <Icon size={22} className="text-accent" />
                      </div>
                      <p className="font-semibold text-primary text-sm">{h.label}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{h.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Four Phases */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-14">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                  The Learning Journey
                </span>
              </div>
              <AnimatedText
                text="Four Phases from Classroom to Career"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
              <div>
                <p className="text-base lg:text-lg text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
                  Every program follows the same four-phase structure. The phases are sequential and cumulative — each one builds directly on the last.
                </p>
              </div>
            </div>

            <CurriculumPhases />
          </div> 
        </section> 

        {/* Assessment & Certification */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Left */}
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                    Assessment & Qualifications
                  </span>
                </div>

                <AnimatedText
                  text="What Your Child Earns"
                  as="h2"
                  className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                  baseDelay={100}
                  stagger={60}
                />

                <div>
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                    Assessment at Forever Tvet is holistic and continuous — not just a single end-of-year exam. Your performance is tracked across three dimensions throughout the program.
                  </p>

                  <div className="mt-6 space-y-4">
                    {[
                      { label: "Continuous Assessment", pct: "40%", desc: "Daily quizzes, practical observations, and module tests throughout Phases 1–3." },
                      { label: "Practical Examination",  pct: "40%", desc: "A final hands-on skills assessment conducted by our faculty and an external industry examiner." },
                      { label: "Industry Supervisor Report", pct: "20%", desc: "A structured performance review submitted by your internship employer at the end of Phase 4." },
                    ].map((item) => (
                      <div key={item.label} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                        <div className="w-14 text-center shrink-0">
                          <span className="font-heading font-bold text-2xl text-accent">{item.pct}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-primary text-sm">{item.label}</p>
                          <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right — cert card */}
              <div>
                <div className="relative rounded-2xl bg-primary p-8 text-white shadow-xl overflow-hidden">
                  {/* Pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{
                      backgroundImage: "repeating-linear-gradient(45deg, #D4A843 0, #D4A843 1px, transparent 0, transparent 50%)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <div className="relative z-10">
                    <p className="text-xs text-white/50 uppercase tracking-widest mb-2">Qualification Earned</p>
                    <p className="font-heading text-2xl font-bold text-white leading-tight mb-3">
                      National TVET Certificate
                    </p>
                    <span className="inline-block rounded-full bg-primary text-primary text-xs px-4 py-1.5 font-semibold mb-6">
                      RQF Level 3 / Level 4
                    </span>
                    <div className="border-t border-white/15 my-5" />

                    <ul className="space-y-3">
                      {certChecks.map((check) => (
                        <li key={check} className="flex items-center gap-3">
                          <CheckCircle size={16} className="text-accent shrink-0" />
                          <span className="text-sm text-white/90">{check}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-white/15 my-5" />

                    <p className="text-xs text-white/40">
                      Issued upon successful completion of all four phases and the final assessment. Certifications are registered with the Rwanda Education Board.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Comparison */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-12">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                  All Programs
                </span>
              </div>
              <AnimatedText
                text="Compare Our Five Programs"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
            </div>

            <div>
              <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary text-white text-xs uppercase tracking-wide">
                      {["Program", "Duration", "RQF Level", "Internship", "Intake"].map((h) => (
                        <th key={h} scope="col" className="py-4 px-4 text-left font-semibold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {programs.map((p, i) => (
                      <tr key={p.name} className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-primary/5 transition-colors`}>
                        <td className="py-4 px-4 font-medium text-primary border-l-2 border-accent">{p.name}</td>
                        <td className="py-4 px-4 text-gray-600 text-center">{p.duration}</td>
                        <td className="py-4 px-4 text-gray-600 text-center">{p.level}</td>
                        <td className="py-4 px-4 text-center">
                          <span className="rounded-full bg-green-100 text-green-700 text-xs px-2.5 py-0.5 font-medium">{p.internship}</span>
                        </td>
                        <td className="py-4 px-4 text-gray-600 text-center">{p.intake}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div className="text-center mt-8">
                <Link
                  href="/academics/courses"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
                >
                  Explore Our Courses
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
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
              text="Ready to Choose Your Program?"
              as="h2"
              className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight mb-4"
              baseDelay={0}
              stagger={55}
            />
            <div>
              <p className="text-base lg:text-lg text-white/75 max-w-xl mx-auto mb-8">
                Intake opens twice a year. Secure your place before applications close.
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
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Download size={16} />
                  Download Prospectus
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import ResultsChart from "@/components/academics/ResultsChart";
import { Award, ArrowRight } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Results & Achievements — Forever Tvet Institute",
  description:
    "Forever Tvet Institute's graduate employment outcomes, examination results, and recognition — the proof behind our promises.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Academics", href: "/academics" },
  { label: "Results & Achievements", href: "/academics/results" },
];

const headlineStats = [
  { value: "94%",  label: "Graduate Employment Rate" },
  { value: "500+", label: "Graduates Placed in Jobs" },
  { value: "30+",  label: "Industry Partner Companies" },
  { value: "40%",  label: "Above-Average Starting Salary" },
];

const examResults = [
  { year: "2022", pass: "91%", distinction: "22%" },
  { year: "2023", pass: "93%", distinction: "27%" },
  { year: "2024", pass: "96%", distinction: "31%" },
];

const alumni = [
  {
    name: "Eugène Niyonkuru",
    program: "Heavy Machinery Operation & Maintenance",
    year: "2022",
    role: "Senior Equipment Operator",
    employer: "Kigali Roads Ltd.",
    initials: "EN",
    color: "#1A5276",
    quote: "The simulation lab made me job-ready before I even started my internship. My employer said I was the best-prepared operator they had hired in years.",
  },
  {
    name: "Marie-Claire Umutoniwase",
    program: "Electrical Technology",
    year: "2023",
    role: "Electrical Technician",
    employer: "RwandaEnergy Corp",
    initials: "MU",
    color: "#7D3C98",
    quote: "I came with no background in electricity. I left with a Level 4 certificate and a job offer before graduation day.",
  },
  {
    name: "Théodore Hakizimana",
    program: "Computer Systems & Architecture",
    year: "2023",
    role: "Network Engineer",
    employer: "MTN Rwanda",
    initials: "TH",
    color: "#0E6655",
    quote: "The internship was the turning point. I worked on live infrastructure. By the time I was offered a permanent role, I had already proven myself.",
  },
];

const awards = [
  { year: "2023", title: "TVET Institution of the Year",         body: "Rwanda Education Excellence Awards" },
  { year: "2023", title: "Best Industry Partnership Programme",  body: "Rwanda Private Sector Federation" },
  { year: "2024", title: "Top Graduate Employment Outcomes",     body: "WDA National TVET Audit" },
  { year: "2024", title: "Sino-African TVET Excellence Award",   body: "Beijing Forever Technology Co., Ltd." },
];

export default function ResultsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        {/* Hero */}
        <PageHeroBanner
          label="Our Track Record"
          title="Results & Achievements"
          subCopy="Numbers do not lie. Here is the evidence that our approach to vocational training delivers real, lasting results for our students and Rwanda's economy."
          breadcrumb={breadcrumb}
          backgroundImage="/images/image1.png"
        />

        {/* Headline Stats */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-14">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                  By the Numbers
                </span>
              </div>
              <AnimatedText
                text="The Proof Is in the Outcomes"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
              {headlineStats.map((stat, i) => (
                <div key={i}>
                  <div className={`flex flex-col items-center text-center lg:px-8 ${i < headlineStats.length - 1 ? "lg:border-r lg:border-gray-100" : ""}`}>
                    <span className="font-heading font-black text-5xl lg:text-6xl text-primary leading-none">
                      {stat.value}
                    </span>
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide mt-3 leading-snug max-w-[120px]">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Employment by Department */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="mb-12">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                  Employment Outcomes
                </span>
              </div>
              <AnimatedText
                text="Graduate Employment Rate by Department"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
              <div>
                <p className="text-base text-gray-500 leading-relaxed mt-4 max-w-xl">
                  Employment rates are calculated 6 months after graduation. A graduate is counted as employed when working in a field directly related to their program.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 lg:p-8">
                <ResultsChart />
              </div>
            </div>
          </div>
        </section>

        {/* Exam Results */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="mb-10">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                  National Examinations
                </span>
              </div>
              <AnimatedText
                text="Three Years of Examination Results"
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
                      {["Year", "Pass Rate", "Distinction Rate"].map((h) => (
                        <th key={h} scope="col" className="py-4 px-4 text-center font-semibold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {examResults.map((row, i) => (
                      <tr key={row.year} className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-primary/5 transition-colors`}>
                        <td className="py-4 px-4 text-center font-semibold text-primary">{row.year}</td>
                        <td className="py-4 px-4 text-center">
                          <span className="font-heading font-bold text-base text-primary">{row.pass}</span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className="font-semibold text-accent">{row.distinction}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>

        {/* Alumni Spotlight */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-14">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                  Alumni Stories
                </span>
              </div>
              <AnimatedText
                text="The People Behind the Numbers"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {alumni.map((person, i) => (
                <div key={i}>
                  <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 p-6 h-full flex flex-col">
                    {/* Avatar + name */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-heading font-bold text-lg flex-shrink-0"
                        style={{ backgroundColor: person.color }}
                      >
                        {person.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-primary text-sm leading-snug">{person.name}</p>
                        <span className="text-xs rounded-full bg-primary/8 text-primary px-2.5 py-0.5 font-medium">
                          {person.program}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 leading-snug mb-3">
                      <span className="font-semibold">{person.role}</span> — {person.employer}
                    </p>

                    <blockquote className="border-l-2 border-accent/40 pl-3 flex-1">
                      <p className="text-sm italic text-gray-500 leading-relaxed">"{person.quote}"</p>
                    </blockquote>

                    <p className="text-xs text-gray-400 mt-4">Graduate {person.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-14">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                  Recognition
                </span>
              </div>
              <AnimatedText
                text="Awards & External Recognition"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {awards.map((award, i) => (
                <div key={i}>
                  <div className="rounded-xl border border-gray-100 p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200 bg-white h-full flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Award size={22} className="text-accent" />
                    </div>
                    <span className="text-xs text-gray-400 uppercase tracking-wide font-medium">{award.year}</span>
                    <h3 className="text-sm font-semibold text-primary mt-2 mb-1 leading-snug">{award.title}</h3>
                    <p className="text-xs text-gray-400 leading-snug">{award.body}</p>
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
              text="The Results Speak. Your Child's Turn."
              as="h2"
              className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight mb-4"
              baseDelay={0}
              stagger={55}
            />
            <div>
              <p className="text-base lg:text-lg text-white/75 max-w-xl mx-auto mb-8">
                Join the institution with Rwanda's highest TVET graduate employment rate.
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
                  href="/academics/courses"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Explore Programs
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

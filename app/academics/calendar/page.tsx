import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import FadeInBlur from "@/components/ui/FadeInBlur";
import CalendarGrid from "@/components/academics/CalendarGrid";
import { FileText, Download } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Academic Calendar — Forever Tvet Institute",
  description:
    "Term dates, intake schedules, examination periods, and key events for Forever Tvet Institute's academic year.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Academics", href: "/academics" },
  { label: "Academic Calendar", href: "/academics/calendar" },
];

const intake1Dates = [
  { event: "Applications Open",  date: "15 October 2025", status: "passed" },
  { event: "Applications Close", date: "15 December 2025", status: "passed" },
  { event: "Orientation Day",    date: "5 January 2026",  status: "upcoming" },
  { event: "Classes Begin",      date: "6 January 2026",  status: "upcoming" },
  { event: "Mid-Term Break",     date: "6–10 April 2026", status: "upcoming" },
  { event: "Final Examinations", date: "5–16 October 2026", status: "upcoming" },
  { event: "Graduation Ceremony",date: "14 November 2026", status: "upcoming" },
];

const intake2Dates = [
  { event: "Applications Open",  date: "1 April 2026",    status: "upcoming" },
  { event: "Applications Close", date: "15 June 2026",    status: "upcoming" },
  { event: "Orientation Day",    date: "6 July 2026",     status: "upcoming" },
  { event: "Classes Begin",      date: "7 July 2026",     status: "upcoming" },
  { event: "Mid-Term Break",     date: "5–9 October 2026", status: "upcoming" },
  { event: "Final Examinations", date: "April 2027",      status: "upcoming" },
  { event: "Graduation Ceremony",date: "May 2027",        status: "upcoming" },
];

const statusStyles: Record<string, string> = {
  upcoming:     "bg-green-100 text-green-700",
  closingSoon:  "bg-amber-100 text-amber-700",
  passed:       "bg-gray-100 text-gray-500",
};

const statusDot: Record<string, string> = {
  upcoming:    "bg-green-500",
  closingSoon: "bg-amber-400",
  passed:      "bg-gray-300",
};

const importantDates = [
  { event: "Intake 1 — Orientation Day",   intake: "Intake 1", date: "5 Jan 2026",    status: "upcoming" },
  { event: "Intake 1 — Classes Begin",      intake: "Intake 1", date: "6 Jan 2026",    status: "upcoming" },
  { event: "Intake 2 — Applications Open",  intake: "Intake 2", date: "1 Apr 2026",    status: "upcoming" },
  { event: "Intake 1 — Mid-Term Break",     intake: "Intake 1", date: "6–10 Apr 2026", status: "upcoming" },
  { event: "Intake 2 — Applications Close", intake: "Intake 2", date: "15 Jun 2026",   status: "upcoming" },
  { event: "Intake 2 — Classes Begin",      intake: "Intake 2", date: "7 Jul 2026",    status: "upcoming" },
  { event: "Intake 1 — Final Exams",        intake: "Intake 1", date: "5–16 Oct 2026", status: "upcoming" },
  { event: "Intake 1 — Graduation",         intake: "Intake 1", date: "14 Nov 2026",   status: "upcoming" },
];

const downloads = [
  {
    title: "Full Academic Calendar 2026",
    desc: "Complete dates for both intakes, examinations, and events. PDF format.",
  },
  {
    title: "Admissions Timeline Guide",
    desc: "Step-by-step guide to when and how to apply. Updated for 2026 intake.",
  },
];

export default function CalendarPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        {/* Hero */}
        <PageHeroBanner
          label="Dates & Schedules"
          title="Academic Calendar"
          subCopy="Plan ahead with confidence — all key dates for intakes, term breaks, examinations, and school events in one place."
          breadcrumb={breadcrumb}
        />

        {/* Year at a Glance */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <FadeInBlur delay={0}>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                  Academic Year 2026
                </span>
              </FadeInBlur>
              <AnimatedText
                text="Two Intakes. One Year. Your Future."
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Intake 1 */}
              <FadeInBlur delay={300}>
                <div className="rounded-xl border border-gray-100 shadow-sm overflow-hidden bg-white">
                  <div className="h-2 bg-accent" />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-5">
                      <div>
                        <span className="text-xs uppercase tracking-widest font-semibold text-accent block mb-1">Intake 1</span>
                        <p className="font-heading font-bold text-2xl text-primary">January 2026</p>
                      </div>
                      <span className="rounded-full bg-green-100 text-green-700 text-xs px-3 py-1 font-medium">
                        Applications Open
                      </span>
                    </div>

                    <div className="space-y-0">
                      {intake1Dates.map((row) => (
                        <div key={row.event} className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0">
                          <span className="text-sm text-gray-600">{row.event}</span>
                          <span className="text-sm font-medium text-primary text-right ml-4">{row.date}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInBlur>

              {/* Intake 2 */}
              <FadeInBlur delay={450}>
                <div className="rounded-xl border border-gray-100 shadow-sm overflow-hidden bg-white">
                  <div className="h-2 bg-primary" />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-5">
                      <div>
                        <span className="text-xs uppercase tracking-widest font-semibold text-accent block mb-1">Intake 2</span>
                        <p className="font-heading font-bold text-2xl text-primary">July 2026</p>
                      </div>
                      <span className="rounded-full bg-green-100 text-green-700 text-xs px-3 py-1 font-medium">
                        Upcoming
                      </span>
                    </div>

                    <div className="space-y-0">
                      {intake2Dates.map((row) => (
                        <div key={row.event} className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0">
                          <span className="text-sm text-gray-600">{row.event}</span>
                          <span className="text-sm font-medium text-primary text-right ml-4">{row.date}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInBlur>
            </div>
          </div>
        </section>

        {/* Month Grid */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <FadeInBlur delay={0}>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                  Month by Month
                </span>
              </FadeInBlur>
              <AnimatedText
                text="Full Year Calendar View"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
              <FadeInBlur delay={350}>
                <p className="text-base text-gray-500 mt-4 leading-relaxed max-w-xl">
                  Switch between intakes to see what happens each month across the academic year.
                </p>
              </FadeInBlur>
            </div>

            <CalendarGrid />
          </div>
        </section>

        {/* Important Dates Table */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <FadeInBlur delay={0}>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                  Quick Reference
                </span>
              </FadeInBlur>
              <AnimatedText
                text="Key Dates at a Glance"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
            </div>

            <FadeInBlur delay={300}>
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100 text-xs uppercase tracking-wide text-gray-400">
                      <th scope="col" className="py-3 px-4 text-left font-semibold">Event</th>
                      <th scope="col" className="py-3 px-4 text-left font-semibold">Intake</th>
                      <th scope="col" className="py-3 px-4 text-left font-semibold">Date</th>
                      <th scope="col" className="py-3 px-4 text-left font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {importantDates.map((row, i) => (
                      <tr key={row.event} className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"} border-b border-gray-50 last:border-0`}>
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-2.5">
                            <span className={`w-2 h-2 rounded-full flex-shrink-0 ${statusDot[row.status]}`} />
                            <span className="font-medium text-primary">{row.event}</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="text-xs rounded-full bg-gray-100 text-gray-600 px-2.5 py-0.5 font-medium">{row.intake}</span>
                        </td>
                        <td className="py-3.5 px-4 text-gray-600">{row.date}</td>
                        <td className="py-3.5 px-4">
                          <span className={`text-xs rounded-full px-2.5 py-0.5 font-medium ${statusStyles[row.status]}`}>
                            {row.status === "closingSoon" ? "Closing Soon" : row.status.charAt(0).toUpperCase() + row.status.slice(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInBlur>
          </div>
        </section>

        {/* Download Strip */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <FadeInBlur delay={0}>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                  Downloads
                </span>
              </FadeInBlur>
              <AnimatedText
                text="Take the Calendar With You"
                as="h2"
                className="font-heading font-bold text-2xl lg:text-3xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {downloads.map((doc, i) => (
                <FadeInBlur key={doc.title} delay={300 + i * 150}>
                  <div className="bg-white rounded-xl border border-gray-100 p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <FileText size={22} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-primary text-base leading-snug">{doc.title}</p>
                      <p className="text-sm text-gray-500 mt-1 leading-snug">{doc.desc}</p>
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-primary hover:text-accent transition-colors"
                      >
                        <Download size={14} />
                        Download PDF
                      </a>
                    </div>
                  </div>
                </FadeInBlur>
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
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedText
              text="Applications for January 2026 Are Now Open"
              as="h2"
              className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight mb-4"
              baseDelay={0}
              stagger={55}
            />
            <FadeInBlur delay={350}>
              <p className="text-base lg:text-lg text-white/75 max-w-xl mx-auto mb-8">
                Places are limited to 20 students per program. Do not miss the intake.
              </p>
            </FadeInBlur>
            <FadeInBlur delay={550}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/admissions/apply"
                  className="px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md"
                >
                  Apply Now
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Contact Admissions
                </Link>
              </div>
            </FadeInBlur>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

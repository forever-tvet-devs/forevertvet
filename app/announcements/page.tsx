import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import { ArrowRight, Bell } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Announcements — Forever Tvet Institute",
  description:
    "Official notices, policy updates, and institutional announcements from Forever Tvet Institute.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Publications", href: "#" },
  { label: "Announcements", href: "/announcements" },
];

const announcements = [
  {
    date: "28 Mar 2026",
    title: "Intake 2 Registration Now Open",
    summary:
      "Registration for Intake 2 (May 2026) is officially open. All prospective students are encouraged to submit their applications before 25 April 2026.",
    category: "Admissions",
  },
  {
    date: "15 Mar 2026",
    title: "Mid-Term Examination Schedule Released",
    summary:
      "The mid-term examination timetable for all departments is now available. Students can collect printed copies from the Academic Office or download from the student portal.",
    category: "Academic",
  },
  {
    date: "1 Mar 2026",
    title: "Campus Wi-Fi Upgrade — Temporary Disruption",
    summary:
      "Network infrastructure upgrades will take place over the weekend of 8–9 March. Intermittent connectivity is expected during this period.",
    category: "General",
  },
  {
    date: "20 Feb 2026",
    title: "Updated Student Code of Conduct",
    summary:
      "An updated Code of Conduct has been published reflecting new workshop safety protocols. All students must review and acknowledge the changes by 10 March 2026.",
    category: "Policy",
  },
  {
    date: "20 Jan 2026",
    title: "Welcome Back — Intake 1, 2026",
    summary:
      "We welcome all returning and new students to the January 2026 intake. Orientation sessions begin on Monday 6 January at 08:00 in the main auditorium.",
    category: "General",
  },
];

const categoryColors: Record<string, string> = {
  Admissions: "bg-blue-50 text-blue-700",
  Academic: "bg-green-50 text-green-700",
  General: "bg-gray-100 text-gray-700",
  Policy: "bg-amber-50 text-amber-700",
};

export default function AnnouncementsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        <PageHeroBanner
          label="Official Notices"
          title="Announcements"
          subCopy="Important updates, policy changes, and institutional notices from Forever Tvet Institute."
          breadcrumb={breadcrumb}
          backgroundImage="/images/image1.png"
        />

        {/* Announcements list */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="mb-12">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Latest</span>
              <AnimatedText
                text="Recent Announcements"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
            </div>

            <div className="space-y-0">
              {announcements.map((item, i) => (
                <div key={i} className={`py-7 ${i > 0 ? "border-t border-gray-100" : ""}`}>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[item.category] ?? "bg-gray-100 text-gray-700"}`}>
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-400">{item.date}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-body mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe CTA */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-2xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
              <Bell size={22} className="text-accent" />
            </div>
            <AnimatedText
              text="Stay in the Loop"
              as="h2"
              className="font-heading font-bold text-2xl lg:text-3xl text-body leading-tight"
              baseDelay={100}
              stagger={60}
            />
            <p className="text-base text-gray-600 leading-relaxed mt-4 mb-7">
              Important announcements are shared directly with enrolled students and parents via the student portal. For general enquiries, reach out to our team.
            </p>
            <Link
              href="/contact"
              className="bg-primary inline-flex items-center gap-2 px-7 py-3 text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm shadow-sm"
            >
              Contact Us <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

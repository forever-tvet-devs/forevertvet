import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import ApplicationSteps from "@/components/admissions/ApplicationSteps";
import { CheckCircle, Info, ArrowRight } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "How to Apply — Forever Tvet Institute",
  description:
    "A clear, step-by-step guide to applying to Forever Tvet Institute. Learn what to prepare, when to apply, and what happens after you submit.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Admissions", href: "/admissions" },
  { label: "How to Apply", href: "/admissions/how-to-apply" },
];

const checklist = [
  { item: "Your national ID or passport number", note: "You will need the ID number for the form" },
  { item: "Secondary school leaving certificate", note: "Scanned copy or clear photo is fine" },
  { item: "Prior work experience details (if any)", note: "Not required — but helpful to have ready" },
  { item: "Emergency contact information", note: "A parent or guardian's phone number" },
  { item: "A valid email address you check regularly", note: "All updates and your offer will be sent here" },
  { item: "Your preferred program selection", note: "Review programs first if unsure" },
];

const intake1Dates = [
  { event: "Applications Open",  date: "15 October 2025" },
  { event: "Applications Close", date: "15 December 2025" },
  { event: "Orientation Day",    date: "5 January 2026" },
  { event: "Classes Begin",      date: "6 January 2026" },
];

const intake2Dates = [
  { event: "Applications Open",  date: "1 April 2026" },
  { event: "Applications Close", date: "15 June 2026" },
  { event: "Orientation Day",    date: "6 July 2026" },
  { event: "Classes Begin",      date: "7 July 2026" },
];

const miniFaqs = [
  {
    q: "Do I need previous experience in the field?",
    a: "No prior experience is required for any of our programs. We teach from the ground up.",
  },
  {
    q: "Can I apply if I did not finish secondary school?",
    a: "Minimum requirement is a secondary school certificate or equivalent. Contact us to discuss your situation.",
  },
  {
    q: "Is financial assistance available?",
    a: "Yes. We offer a payment plan option and merit scholarships. See our Fees page for full details.",
  },
];

export default function HowToApplyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        <PageHeroBanner
          label="Admissions Process"
          title="How to Apply"
          subCopy="The application process is straightforward. Here is exactly what to do, step by step — from choosing your program to receiving your offer letter."
          breadcrumb={breadcrumb}
          backgroundImage="/images/PeopleLookAtTrainingDevice.png"
        />

        {/* Before You Apply */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-3xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                Before You Begin
              </span>
            </div>
            <AnimatedText
              text="What You Will Need"
              as="h2"
              className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
              baseDelay={100}
              stagger={60}
            />
            <div>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed mt-5 mb-7">
                The application takes approximately 15–20 minutes to complete online. Before you start, make sure you have the following ready:
              </p>
            </div>

            <div>
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {checklist.map((c) => (
                  <div key={c.item} className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50">
                    <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-primary leading-snug">{c.item}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{c.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-start gap-3 rounded-xl bg-primary/6 border border-primary/15 p-4">
                <Info size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-primary/80 leading-relaxed">
                  If you do not have all documents ready, you can save your application and return to it within 7 days. No progress will be lost.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-3xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="mb-12">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                  Step by Step
                </span>
              </div>
              <AnimatedText
                text="Six Steps to Your Place"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
              <div>
                <p className="text-base text-gray-500 leading-relaxed mt-4">
                  Follow each step in order. Most applicants complete the entire process in under 30 minutes.
                </p>
              </div>
            </div>
            <ApplicationSteps />
          </div>
        </section>

        {/* Intake Dates */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-12">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                  When to Apply
                </span>
              </div>
              <AnimatedText
                text="Choose Your Intake"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-7">
              {[
                { label: "Intake 1", month: "January 2026", status: "Applications Open", statusCls: "bg-green-100 text-green-700", accentColor: "bg-primary", dates: intake1Dates },
                { label: "Intake 2", month: "July 2026",    status: "Opens April 2026",  statusCls: "bg-amber-100 text-amber-700",  accentColor: "bg-primary", dates: intake2Dates },
              ].map((intake, i) => (
                <div key={i}>
                  <div className="rounded-xl border border-gray-100 shadow-sm overflow-hidden bg-white">
                    <div className={`h-2 ${intake.accentColor}`} />
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-5">
                        <div key={i}>
                          <span className="text-xs uppercase tracking-widest font-semibold text-accent block mb-1">{intake.label}</span>
                          <p className="font-heading font-bold text-2xl text-primary">{intake.month}</p>
                        </div>
                        <span className={`rounded-full text-xs px-3 py-1 font-medium ${intake.statusCls}`}>{intake.status}</span>
                      </div>
                      <div className="space-y-0 mb-5">
                        {intake.dates.map((row) => (
                          <div key={row.event} className="flex justify-between py-3 border-b border-gray-50 last:border-0">
                            <span className="text-sm text-gray-500">{row.event}</span>
                            <span className="text-sm font-medium text-primary">{row.date}</span>
                          </div>
                        ))}
                      </div>
                      <Link
                        href="/admissions/apply"
                        className="bg-primary block text-center text-white rounded-lg px-5 py-2.5 text-sm font-semibold hover:bg-primary-dark transition-colors"
                      >
                        Apply for This Intake
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mini FAQs */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                Quick Answers
              </span>
            </div>
            <div className="space-y-4 mb-8">
              {miniFaqs.map((faq, i) => (
                <div key={i}>
                  <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                    <p className="font-semibold text-primary text-sm mb-1">{faq.q}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <Link
                href="/admissions/faqs"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group text-sm"
              >
                View all FAQs
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(-45deg,#D4A843 0,#D4A843 1px,transparent 0,transparent 50%)", backgroundSize: "24px 24px" }} />
          <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <AnimatedText text="Ready? Start Your Application" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight mb-4" baseDelay={0} stagger={55} />
            <div>
              <p className="text-base lg:text-lg text-white/75 max-w-xl mx-auto mb-8">It takes less than 20 minutes. Your future starts today.</p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/admissions/apply" className="px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md">Start Application</Link>
                <Link href="/contact" className="px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">Contact Admissions</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

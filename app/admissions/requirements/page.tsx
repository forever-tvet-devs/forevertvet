import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import RequirementsList from "@/components/admissions/RequirementsList";
import { CheckCircle, Download, ArrowRight } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Entry Requirements — Forever Tvet Institute",
  description:
    "Entry requirements for Forever Tvet Institute short courses. 3-year programmes are appointed by NESA.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Admissions", href: "/admissions" },
  { label: "Requirements", href: "/admissions/requirements" },
];

const generalReqs = [
  { req: "Minimum age: 17 years", note: "As of the intake start date" },
  { req: "Rwanda national ID or valid passport", note: "Original to be presented on Orientation Day" },
  { req: "Secondary school leaving certificate", note: "Senior 6 (S6) certificate or recognised equivalent" },
  { req: "Basic literacy in English or French", note: "Instruction is conducted in English" },
  { req: "Medical fitness for practical work", note: "A signed medical self-declaration is required at enrolment" },
  { req: "Signed parental/guardian consent", note: "Required for applicants under 18 years of age" },
];

const atApplication = [
  "Scanned or photographed copy of national ID or passport",
  "Scanned secondary school leaving certificate",
  "Completed online application form",
  "Emergency contact details",
];

const atOrientation = [
  "Original national ID or passport",
  "Original school leaving certificate",
  "2 passport-size photographs",
  "Registration fee receipt (proof of payment)",
  "Signed parental/guardian consent form (if under 18)",
  "Medical self-declaration form (provided by the school)",
];

export default function RequirementsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        <PageHeroBanner
          label="Entry Criteria"
          title="Requirements"
          subCopy="We set clear, fair entry standards that ensure every student is set up to succeed — not to filter people out, but to prepare them properly."
          breadcrumb={breadcrumb}
          backgroundImage="/images/image1.png"
        />

        {/* General Requirements */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Short Courses</span>
            </div>
            <AnimatedText text="General Entry Requirements" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight" baseDelay={100} stagger={60} />
            <div>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed mt-5 mb-8">
                The following requirements apply to applicants for our short course programmes. Meeting these requirements means you are eligible to apply — selection is then based on your application review. Our 3-year programmes (Level 3–5) are appointed by NESA.
              </p>
            </div>

            <div className="divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm">
              {generalReqs.map((item, i) => (
                <div key={i}>
                  <div className="flex items-start gap-4 py-4 px-5 hover:bg-gray-50/60 transition-colors">
                    <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-primary text-sm">{item.req}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{item.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Per-Program Requirements */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="mb-12">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">By Programme</span>
              </div>
              <AnimatedText text="Programme-Specific Requirements" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight" baseDelay={100} stagger={60} />
              <div>
                <p className="text-base text-gray-500 leading-relaxed mt-4 max-w-2xl">
                  Short courses have specific academic and physical prerequisites. 3-year programmes (Level 3–5) are placed through NESA — no direct application is required.
                </p>
              </div>
            </div>
            <RequirementsList />
          </div>
        </section>

        {/* Document Checklist */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="mb-10">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Documents</span>
              </div>
              <AnimatedText text="Your Document Checklist" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight" baseDelay={100} stagger={60} />
              <div>
                <p className="text-base text-gray-500 leading-relaxed mt-4">Make sure you have everything ready before you apply — and before you arrive on Orientation Day.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "At Application", items: atApplication, delay: 300 },
                { title: "On Orientation Day", items: atOrientation, delay: 450 },
              ].map((col) => (
                <div key={col.title}>
                  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 h-full">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">{col.title}</p>
                    <div className="divide-y divide-gray-50">
                      {col.items.map((item) => (
                        <div key={item} className="flex items-start gap-2.5 py-2.5">
                          <div className="w-4 h-4 rounded border-2 border-gray-300 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700 leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="mt-6 flex justify-center">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-colors"
                >
                  <Download size={16} />
                  Download Full Checklist (PDF)
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Don't Qualify section */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-2xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Not Sure You Qualify?</span>
            </div>
            <AnimatedText text="Talk to Us First" as="h2" className="font-heading font-bold text-2xl lg:text-3xl text-body leading-tight" baseDelay={100} stagger={60} />
            <div>
              <p className="text-base text-gray-600 leading-relaxed mt-5 mb-8">
                Requirements exist to ensure every student can succeed in the program they choose — not to exclude people unfairly. If you are unsure whether your qualifications meet our criteria, contact our admissions team directly. In many cases, we can offer a short assessment or recommend a preparatory pathway.
              </p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group text-sm">
                  Contact Admissions <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/academics/courses" className="inline-flex items-center gap-2 text-gray-500 font-semibold hover:text-primary transition-colors text-sm">
                  View All Programs <ArrowRight size={16} />
                </Link>
              </div>
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
            <AnimatedText text="Met the Requirements? Apply Today." as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight mb-4" baseDelay={0} stagger={55} />
            <div><p className="text-base lg:text-lg text-white/75 max-w-xl mx-auto mb-8">Places are limited. Do not wait until the intake is full.</p></div>
            <div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/admissions/apply" className="px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md">Apply Now</Link>
                <a href="#" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  <Download size={16} /> Download Requirements PDF
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

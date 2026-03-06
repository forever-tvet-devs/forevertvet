import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import FadeInBlur from "@/components/ui/FadeInBlur";
import RequirementsList from "@/components/admissions/RequirementsList";
import { CheckCircle, Download, ArrowRight } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Entry Requirements — Forever Tvet Institute",
  description:
    "Entry requirements for all five Forever Tvet Institute programs. Find out what qualifications and documents you need to apply.",
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
          overlayOpacity={0.65}
        />

        {/* General Requirements */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInBlur delay={0}>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">All Programs</span>
            </FadeInBlur>
            <AnimatedText text="General Entry Requirements" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight" baseDelay={100} stagger={60} />
            <FadeInBlur delay={400}>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed mt-5 mb-8">
                The following requirements apply to every applicant, regardless of which program you choose. Meeting these requirements means you are eligible to apply — selection is then based on your application review.
              </p>
            </FadeInBlur>

            <div className="divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm">
              {generalReqs.map((item, i) => (
                <FadeInBlur key={item.req} delay={500 + i * 80}>
                  <div className="flex items-start gap-4 py-4 px-5 hover:bg-gray-50/60 transition-colors">
                    <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-primary text-sm">{item.req}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{item.note}</p>
                    </div>
                  </div>
                </FadeInBlur>
              ))}
            </div>
          </div>
        </section>

        {/* Per-Program Requirements */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <FadeInBlur delay={0}>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">By Program</span>
              </FadeInBlur>
              <AnimatedText text="Program-Specific Requirements" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight" baseDelay={100} stagger={60} />
              <FadeInBlur delay={350}>
                <p className="text-base text-gray-500 leading-relaxed mt-4 max-w-2xl">
                  Level 4 programs (Industrial Electricity and Computer Engineering) have additional academic prerequisites due to the technical depth of their curriculum.
                </p>
              </FadeInBlur>
            </div>
            <RequirementsList />
          </div>
        </section>

        {/* Document Checklist */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <FadeInBlur delay={0}>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Documents</span>
              </FadeInBlur>
              <AnimatedText text="Your Document Checklist" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight" baseDelay={100} stagger={60} />
              <FadeInBlur delay={350}>
                <p className="text-base text-gray-500 leading-relaxed mt-4">Make sure you have everything ready before you apply — and before you arrive on Orientation Day.</p>
              </FadeInBlur>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "At Application", items: atApplication, delay: 300 },
                { title: "On Orientation Day", items: atOrientation, delay: 450 },
              ].map((col) => (
                <FadeInBlur key={col.title} delay={col.delay}>
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
                </FadeInBlur>
              ))}
            </div>

            <FadeInBlur delay={600}>
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
            </FadeInBlur>
          </div>
        </section>

        {/* Don't Qualify section */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeInBlur delay={0}>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Not Sure You Qualify?</span>
            </FadeInBlur>
            <AnimatedText text="Talk to Us First" as="h2" className="font-heading font-bold text-2xl lg:text-3xl text-body leading-tight" baseDelay={100} stagger={60} />
            <FadeInBlur delay={400}>
              <p className="text-base text-gray-600 leading-relaxed mt-5 mb-8">
                Requirements exist to ensure every student can succeed in the program they choose — not to exclude people unfairly. If you are unsure whether your qualifications meet our criteria, contact our admissions team directly. In many cases, we can offer a short assessment or recommend a preparatory pathway.
              </p>
            </FadeInBlur>
            <FadeInBlur delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group text-sm">
                  Contact Admissions <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/academics/departments" className="inline-flex items-center gap-2 text-gray-500 font-semibold hover:text-primary transition-colors text-sm">
                  View All Programs <ArrowRight size={16} />
                </Link>
              </div>
            </FadeInBlur>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(-45deg,#D4A843 0,#D4A843 1px,transparent 0,transparent 50%)", backgroundSize: "24px 24px" }} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedText text="Met the Requirements? Apply Today." as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight mb-4" baseDelay={0} stagger={55} />
            <FadeInBlur delay={350}><p className="text-base lg:text-lg text-white/75 max-w-xl mx-auto mb-8">Places are limited. Do not wait until the intake is full.</p></FadeInBlur>
            <FadeInBlur delay={550}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/admissions/apply" className="px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md">Apply Now</Link>
                <a href="#" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  <Download size={16} /> Download Requirements PDF
                </a>
              </div>
            </FadeInBlur>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

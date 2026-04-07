import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import FadeInBlur from "@/components/ui/FadeInBlur";
import ApplicationForm from "@/components/admissions/ApplicationForm";
import { CheckCircle, Shield, Award, Users, ArrowRight } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Apply Online — Forever Tvet Institute",
  description:
    "Apply to Forever Tvet Institute online. The application takes 15–20 minutes. Places are limited — apply early.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Admissions", href: "/admissions" },
  { label: "Apply", href: "/admissions/apply" },
];

const trustPoints = [
  { icon: CheckCircle, text: "Takes 15–20 minutes to complete" },
  { icon: Shield,      text: "Your data is kept secure and confidential" },
  { icon: Award,       text: "Merit scholarships available — indicate interest in the form" },
  { icon: Users,       text: "Our team reviews every application personally" },
];

const sidebarLinks = [
  { label: "Entry Requirements", href: "/admissions/requirements" },
  { label: "Fees Structure",     href: "/admissions/fees" },
  { label: "How to Apply",       href: "/admissions/how-to-apply" },
  { label: "FAQs",               href: "/admissions/faqs" },
  { label: "Contact Admissions", href: "/contact" },
];

export default function ApplyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        <PageHeroBanner
          label="Start Your Journey"
          title="Apply Online"
          subCopy="Complete the form below to apply for your chosen program. All fields marked as required must be filled. We will respond within 3–5 working days."
          breadcrumb={breadcrumb}
          backgroundImage="/images/PeopleLookAtTrainingDevice.png"
        />

        {/* Trust bar */}
        <section className="py-8 bg-primary/5 border-b border-primary/10">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {trustPoints.map((tp, i) => {
                const Icon = tp.icon;
                return (
                  <FadeInBlur key={tp.text} delay={i * 80}>
                    <div className="flex items-center gap-2.5">
                      <Icon size={16} className="text-accent flex-shrink-0" />
                      <span className="text-xs font-medium text-primary/80">{tp.text}</span>
                    </div>
                  </FadeInBlur>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main content: form + sidebar */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="grid lg:grid-cols-[1fr_300px] gap-10 items-start">

              {/* Form */}
              <div>
                <FadeInBlur delay={0}>
                  <div className="mb-6">
                    <AnimatedText
                      text="Your Application"
                      as="h2"
                      className="font-heading font-bold text-2xl lg:text-3xl text-body leading-tight"
                      baseDelay={0}
                      stagger={55}
                    />
                    <FadeInBlur delay={200}>
                      <p className="text-sm text-gray-500 mt-2">
                        Complete all four steps below. You can navigate back to earlier steps at any time before submitting.
                      </p>
                    </FadeInBlur>
                  </div>
                </FadeInBlur>
                <ApplicationForm />
              </div>

              {/* Sidebar */}
              <aside className="lg:sticky lg:top-24 space-y-5">

                {/* Current Intake */}
                <FadeInBlur delay={200}>
                  <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="h-1.5 bg-primary" />
                    <div className="p-5">
                      <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Current Intake</p>
                      <p className="font-heading font-bold text-xl text-primary mb-1">Intake 1 — January 2026</p>
                      <div className="space-y-1.5 mt-3">
                        {[
                          { label: "Applications Close", value: "15 Dec 2025" },
                          { label: "Orientation Day",    value: "5 Jan 2026" },
                          { label: "Classes Begin",      value: "6 Jan 2026" },
                        ].map((row) => (
                          <div key={row.label} className="flex justify-between items-center py-1.5 border-b border-gray-50 last:border-0">
                            <span className="text-xs text-gray-500">{row.label}</span>
                            <span className="text-xs font-semibold text-primary">{row.value}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 rounded-lg bg-green-50 px-3 py-2">
                        <p className="text-xs text-green-700 font-medium">Applications are open now</p>
                      </div>
                    </div>
                  </div>
                </FadeInBlur>

                {/* Registration Fee Notice */}
                <FadeInBlur delay={300}>
                  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Registration Fee</p>
                    <p className="font-heading font-bold text-2xl text-primary mb-1">RWF 50,000</p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Due after offer letter acceptance. Non-refundable. Deducted from total program fee at enrolment.
                    </p>
                  </div>
                </FadeInBlur>

                {/* Need Help */}
                <FadeInBlur delay={400}>
                  <div className="bg-primary rounded-xl p-5">
                    <p className="font-semibold text-white text-sm mb-2">Need help applying?</p>
                    <p className="text-xs text-white/70 leading-relaxed mb-4">
                      Our admissions team is available Monday to Friday, 8:00 AM – 4:00 PM.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold hover:gap-2.5 transition-all group"
                    >
                      Contact Us <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </FadeInBlur>

                {/* Quick links */}
                <FadeInBlur delay={500}>
                  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Useful Links</p>
                    <div className="space-y-1">
                      {sidebarLinks.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="flex items-center justify-between py-2 text-sm text-gray-600 hover:text-primary transition-colors group border-b border-gray-50 last:border-0"
                        >
                          {link.label}
                          <ArrowRight size={13} className="text-gray-300 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </FadeInBlur>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import FaqAccordion from "@/components/admissions/FaqAccordion";
import { Phone, Mail, MapPin, ArrowRight } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "FAQs — Forever Tvet Institute",
  description:
    "Answers to the most common questions about admissions, fees, programs, and student life at Forever Tvet Institute.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Admissions", href: "/admissions" },
  { label: "FAQs", href: "/admissions/faqs" },
];

const contactOptions = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+250 788 000 000",
    note: "Mon – Fri, 8:00 AM – 4:00 PM",
    href: "tel:+250788000000",
  },
  {
    icon: Mail,
    label: "Email Admissions",
    value: "admissions@forevertvet.rw",
    note: "Response within 1 working day",
    href: "mailto:admissions@forevertvet.rw",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Kigali, Rwanda",
    note: "Drop in during office hours",
    href: "/contact",
  },
];

export default function FaqsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        <PageHeroBanner
          label="Common Questions"
          title="Frequently Asked Questions"
          subCopy="Everything you need to know about applying to, studying at, and graduating from Forever Tvet Institute — answered clearly and honestly."
          breadcrumb={breadcrumb}
          backgroundImage="/images/image1.png"
        />

        {/* Intro */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Find Your Answer</span>
            </div>
            <AnimatedText
              text="We Have Answered the Most Common Questions"
              as="h2"
              className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
              baseDelay={100}
              stagger={60}
            />
            <div>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed mt-5">
                Use the category filters below to find answers quickly. If your question is not listed, our admissions team is always reachable — you will never be left without a response.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="pb-20 lg:pb-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <FaqAccordion />
          </div>
        </section>

        {/* Still Have a Question */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-12">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Get in Touch</span>
              </div>
              <AnimatedText
                text="Still Have a Question?"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
              <div>
                <p className="text-base text-gray-500 leading-relaxed mt-4 max-w-xl mx-auto">
                  Our admissions team is small, experienced, and genuinely happy to help. Reach us however is most convenient for you.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              {contactOptions.map((opt, i) => {
                const Icon = opt.icon;
                return (
                  <div key={i}>
                    <a
                      href={opt.href}
                      className="flex flex-col items-center text-center p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 h-full group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon size={22} className="text-accent" />
                      </div>
                      <p className="font-semibold text-primary text-sm mb-1">{opt.label}</p>
                      <p className="text-sm font-medium text-accent mb-1">{opt.value}</p>
                      <p className="text-xs text-gray-400 leading-snug">{opt.note}</p>
                    </a>
                  </div>
                );
              })}
            </div>

            <div>
              <div className="mt-10 text-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group text-sm"
                >
                  Go to full Contact page
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(-45deg,#D4A843 0,#D4A843 1px,transparent 0,transparent 50%)", backgroundSize: "24px 24px" }} />
          <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <AnimatedText text="Ready to Apply?" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight mb-4" baseDelay={0} stagger={55} />
            <div>
              <p className="text-base lg:text-lg text-white/75 max-w-xl mx-auto mb-8">The application takes less than 20 minutes. Your questions are answered — now take the step.</p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/admissions/apply" className="px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md">Start Application</Link>
                <Link href="/admissions/how-to-apply" className="px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">How to Apply</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

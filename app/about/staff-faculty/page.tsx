import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import FadeInBlur from "@/components/ui/FadeInBlur";
import StaffGrid from "@/components/about/StaffGrid";
import { Briefcase, ArrowRight } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Staff & Faculty — Forever Tvet Institute",
  description:
    "Meet the dedicated educators and professionals who make Forever Tvet Institute an exceptional place to learn and grow.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Staff & Faculty", href: "/about/staff-faculty" },
];

export default function StaffFacultyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        {/* Hero */}
        <PageHeroBanner
          label="Our People"
          title="Staff & Faculty"
          subCopy="Meet the dedicated educators and professionals who make Forever Tvet Institute an exceptional place to learn and grow."
          breadcrumb={breadcrumb}
          backgroundImage="/images/image2.png"
          overlayOpacity={0.68}
        />

        {/* Staff Directory */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <FadeInBlur delay={0}>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                  Our Team
                </span>
              </FadeInBlur>
              <AnimatedText
                text="The People Behind Your Education"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
              <FadeInBlur delay={350}>
                <p className="text-base lg:text-lg text-gray-500 mt-4 max-w-2xl leading-relaxed">
                  Our instructors are not just teachers — they are industry professionals who have worked in the fields they teach. Use the filters below to explore by department.
                </p>
              </FadeInBlur>
            </div>

            <StaffGrid />
          </div>
        </section>

        {/* By the numbers strip */}
        <section className="bg-primary-dark py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
              {[
                { value: "21+", label: "Teaching Staff" },
                { value: "7", label: "Departments" },
                { value: "100%", label: "Industry Trained" },
                { value: "8:1", label: "Student–Staff Ratio" },
              ].map((stat, i) => (
                <FadeInBlur key={stat.label} delay={i * 100}>
                  <div className={`flex flex-col items-center text-center lg:px-8 ${i < 3 ? "lg:border-r lg:border-white/10" : ""}`}>
                    <span className="font-heading font-bold text-4xl lg:text-5xl text-accent leading-none">
                      {stat.value}
                    </span>
                    <span className="text-xs font-semibold tracking-widest uppercase text-white/50 mt-2">
                      {stat.label}
                    </span>
                  </div>
                </FadeInBlur>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeInBlur delay={0}>
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <Briefcase size={24} className="text-accent" />
              </div>
            </FadeInBlur>

            <AnimatedText
              text="Join Our Team"
              as="h2"
              className="font-heading font-bold text-2xl lg:text-3xl text-body leading-tight mb-3"
              baseDelay={100}
              stagger={60}
            />

            <FadeInBlur delay={400}>
              <p className="text-base text-gray-500 leading-relaxed mb-8">
                We are always looking for passionate educators and industry professionals who believe that practical education can transform lives. If that sounds like you, we would love to hear from you.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
              >
                Get in Touch About Vacancies
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </FadeInBlur>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

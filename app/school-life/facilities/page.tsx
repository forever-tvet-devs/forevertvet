import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import FacilitiesShowcase from "@/components/school-life/FacilitiesShowcase";

export const metadata: Metadata = {
  title: "Facilities — Forever Tvet Institute",
  description:
    "World-class labs, classrooms, and training infrastructure at Forever Tvet Institute. Industry-standard equipment used from day one.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "School Life", href: "/school-life" },
  { label: "Facilities", href: "/school-life/facilities" },
];

export default function FacilitiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        <PageHeroBanner
          label="Our Infrastructure"
          title="Facilities"
          subCopy="Our facilities are not just spaces — they are the tools that turn theory into practice. Every lab is equipped to professional industry standard."
          breadcrumb={breadcrumb}
          backgroundImage="/images/image2(ElecticalControlCabinate).png"
        />


        {/* Facilities showcase */}
        <section className="py-4 lg:py-8 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-4">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">What We Have</span>
              </div>
              <AnimatedText text="Our Spaces & Equipment" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight" baseDelay={100} stagger={60} />
            </div>
            <FacilitiesShowcase />
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
        className="hidden lg:block absolute -top-44 -right-40 w-[780px] h-auto opacity-[0.05] pointer-events-none select-none"
        aria-hidden="true"
      />
          <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <AnimatedText text="Train With the Best Equipment in Rwanda" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight mb-4" baseDelay={0} stagger={55} />
            <div><p className="text-base lg:text-lg text-white/75 max-w-xl mx-auto mb-8">Our facilities set graduates apart. Apply and gain access from day one of your program.</p></div>
            <div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/admissions/apply" className="px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md">Apply Now</Link>
                <Link href="/academics/courses" className="px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">View Programs</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

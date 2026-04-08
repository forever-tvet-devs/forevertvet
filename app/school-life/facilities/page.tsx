import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import FacilitiesShowcase from "@/components/school-life/FacilitiesShowcase";
import { Zap, Shield, BookOpen } from "@/components/ui/Icons";

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

const philosophy = [
  { icon: Zap,      title: "Industry-Standard Equipment",  desc: "Every lab mirrors the tools students will encounter in their careers. No simplified substitutes." },
  { icon: Shield,   title: "Regularly Maintained",         desc: "All equipment is professionally serviced and updated every academic year before each intake begins." },
  { icon: BookOpen, title: "Unrestricted Student Access",  desc: "During program hours, all labs and training areas are open to every enrolled student." },
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

        {/* Philosophy */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="grid sm:grid-cols-3 gap-6">
              {philosophy.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={i}>
                    <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100 h-full">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary text-sm mb-1">{p.title}</p>
                        <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Facilities showcase */}
        <section className="py-4 lg:py-8 bg-white">
          <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
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
          <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <AnimatedText text="Train With the Best Equipment in Rwanda" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight mb-4" baseDelay={0} stagger={55} />
            <div><p className="text-base lg:text-lg text-white/75 max-w-xl mx-auto mb-8">Our facilities set graduates apart. Apply and gain access from day one of your program.</p></div>
            <div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/admissions/apply" className="px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md">Apply Now</Link>
                <Link href="/academics/departments" className="px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">View Programs</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import FeesTable from "@/components/admissions/FeesTable";

export const metadata: Metadata = {
  title: "Fees Structure — Forever Tvet Institute",
  description:
    "Transparent, all-inclusive fees for every Forever Tvet Institute program. No hidden costs.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Admissions", href: "/admissions" },
  { label: "Fees Structure", href: "/admissions/fees" },
];

export default function FeesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        <PageHeroBanner
          label="Tuition & Costs"
          title="Fees Structure"
          subCopy="We believe that cost should never be the reason a talented student does not pursue their future. Our fees are transparent, competitive, and flexible."
          breadcrumb={breadcrumb}
          backgroundImage="/images/PeopleLookAtTrainingDevice.png"
        />


        {/* Fees Table */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-12">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">All Programs</span>
              </div>
              <AnimatedText text="Program Fees at a Glance" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight" baseDelay={100} stagger={60} />
            </div>
            <div><FeesTable /></div>
            <div>
              <p className="text-sm text-gray-400 mt-4 text-center italic">
                Fees are quoted in Rwandan Francs (RWF) and are fixed for the academic year at time of enrolment. Registration fee (RWF 50,000) is non-refundable and deducted from the total program fee.
              </p>
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
            <AnimatedText text="Invest in a Guaranteed Future" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight mb-4" baseDelay={0} stagger={55} />
            <div><p className="text-base lg:text-lg text-white/75 max-w-xl mx-auto mb-8">94% of our graduates are employed within 6 months. The return on this investment is measurable.</p></div>
            <div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/admissions/apply" className="px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md">Apply Now</Link>
                <Link href="/contact" className="px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">Contact Us About Fees</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

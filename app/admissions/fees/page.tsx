import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import FeesTable from "@/components/admissions/FeesTable";
import { Shield, Award, CheckCircle, Calendar } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Fees Structure — Forever Tvet Institute",
  description:
    "Transparent, all-inclusive fees for every Forever Tvet Institute program. No hidden costs. Payment plans available.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Admissions", href: "/admissions" },
  { label: "Fees Structure", href: "/admissions/fees" },
];

const trustTiles = [
  { icon: Shield,   title: "100% Transparent",  desc: "Every fee is itemised. Nothing is buried in small print." },
  { icon: Calendar, title: "Flexible Payment",   desc: "Pay in full or split into two equal instalments." },
  { icon: Award,    title: "Scholarships Available", desc: "Merit-based partial scholarships for qualifying students." },
];

const included = [
  { item: "Full Program Tuition",          note: "All classroom instruction across all four learning phases" },
  { item: "Lab & Equipment Usage",         note: "Unrestricted access to our simulation labs and equipment throughout the program" },
  { item: "Learning Materials",            note: "Textbooks, workbooks, and digital course resources — provided at no extra cost" },
  { item: "Internship Placement Service",  note: "We identify, arrange, and support your confirmed industry internship" },
  { item: "National Certification Exam",   note: "The RQF examination fee is covered in full — no separate exam payment" },
  { item: "Certificate Issuance",          note: "Your official national TVET certificate is issued at no additional charge" },
  { item: "Career Support",               note: "CV writing, interview preparation, and employer introduction sessions" },
  { item: "Alumni Network Access",         note: "Lifetime access to our graduate community, job board, and networking events" },
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

        {/* Trust Statement */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-3xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Our Promise</span>
            </div>
            <AnimatedText text="No Hidden Fees. No Surprises." as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight" baseDelay={100} stagger={60} />
            <div>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed mt-6">
                Every cost associated with your enrolment at Forever Tvet Institute is listed on this page. What you see is what you pay. The fee shown for each program includes tuition, lab usage, materials, and your industry internship placement service. There are no add-on charges.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-5 mt-10">
              {trustTiles.map((tile, i) => {
                const Icon = tile.icon;
                return (
                  <div key={i}>
                    <div className="rounded-xl bg-gray-50 border border-gray-100 p-5 text-center">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <Icon size={20} className="text-accent" />
                      </div>
                      <p className="font-semibold text-primary text-sm mb-1">{tile.title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{tile.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

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

        {/* What's Included */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-12">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">What You Get</span>
              </div>
              <AnimatedText text="Everything the Fee Covers" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight" baseDelay={100} stagger={60} />
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {included.map((item, i) => (
                <div key={i}>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 h-full">
                    <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    <div key={i}>
                      <p className="text-sm font-medium text-primary">{item.item}</p>
                      <p className="text-xs text-gray-500 mt-0.5 leading-snug">{item.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm text-gray-400 mt-5 text-center">
                <span className="font-medium text-gray-500">Not included:</span> Accommodation, personal meals, transport to internship site, and uniform (optional — available for purchase at RWF 15,000).
              </p>
            </div>
          </div>
        </section>

        {/* Payment Options */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-12">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Flexibility</span>
              </div>
              <AnimatedText text="Payment Options" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight" baseDelay={100} stagger={60} />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Full Payment */}
              <div>
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden h-full flex flex-col">
                  <div className="h-2 bg-primary" />
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-heading font-bold text-xl text-primary">Full Payment</h3>
                      <span className="text-xs rounded-full bg-primary/8 text-primary px-3 py-1 font-semibold">Recommended</span>
                    </div>
                    <div className="rounded-xl bg-green-50 text-green-700 text-sm p-3 font-medium mb-5">
                      Save RWF 20,000 compared to the instalment plan
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                      The full program fee (minus the registration fee already paid) is settled at enrolment. No further payments are required for the duration of the program.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-400 mt-auto pt-4 border-t border-gray-100">
                      <Calendar size={14} className="text-accent" />
                      Due on or before Orientation Day
                    </div>
                  </div>
                </div>
              </div>

              {/* Two Instalments */}
              <div>
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden h-full flex flex-col">
                  <div className="h-2 bg-primary" />
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-heading font-bold text-xl text-primary mb-4">Two Instalments</h3>
                    <div className="space-y-0 mb-5">
                      {[
                        { label: "Instalment 1 — 50%", when: "Due on Orientation Day" },
                        { label: "Instalment 2 — 50%", when: "Due at start of Phase 3 (Week 17)" },
                      ].map((row) => (
                        <div key={row.label} className="flex justify-between items-start py-3 border-b border-gray-100 last:border-0">
                          <span className="text-sm font-medium text-primary">{row.label}</span>
                          <span className="text-xs text-gray-400 text-right ml-3">{row.when}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed flex-1">
                      A RWF 20,000 administration fee applies to the instalment plan. This is added to your second instalment automatically.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scholarships */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-5">
                <div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-accent">Financial Support</span>
                </div>
                <AnimatedText text="Merit Scholarships Available" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight" baseDelay={100} stagger={60} />
                <div>
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                    Each intake, Forever Tvet Institute awards a limited number of partial merit scholarships to outstanding applicants who demonstrate exceptional potential but face financial hardship. Scholarships cover 25–50% of total program fees.
                  </p>
                  <p className="text-sm font-semibold text-primary mt-5 mb-3">Eligibility Criteria:</p>
                  <ul className="space-y-2">
                    {[
                      "Demonstrated financial need (supporting documentation required)",
                      "Strong secondary school academic record",
                      "A short motivation statement submitted with your application",
                    ].map((e) => (
                      <li key={e} className="flex items-start gap-2.5">
                        <CheckCircle size={14} className="text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="rounded-2xl bg-gray-50 border border-gray-100 p-8 text-center">
                  <Award size={36} className="text-accent mx-auto mb-4" />
                  <p className="font-heading font-black text-5xl text-primary mb-1">25–50%</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-6">of total fees covered</p>
                  <div className="border-t border-gray-200 pt-5 text-left">
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                      Apply via the standard application form and indicate that you are applying for scholarship consideration in the relevant field. No separate application is required.
                    </p>
                    <p className="text-xs text-gray-400">
                      Scholarship decisions are communicated with offer letters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(-45deg,#D4A843 0,#D4A843 1px,transparent 0,transparent 50%)", backgroundSize: "24px 24px" }} />
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

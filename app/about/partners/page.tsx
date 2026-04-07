import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import FadeInBlur from "@/components/ui/FadeInBlur";
import { ArrowRight } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Our Partners — Forever Tvet Institute",
  description:
    "Discover the industry and academic partners who help Forever Tvet Institute connect graduates to real-world careers.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Partners", href: "/about/partners" },
];

const industryPartners = [
  {
    name: "Rwanda Transport Development Agency",
    sector: "Infrastructure",
    desc: "A key employer of our road construction and heavy machinery graduates, providing internship placements and direct employment pathways.",
  },
  {
    name: "Kigali Construction Consortium",
    sector: "Construction",
    desc: "Partners with our civil engineering programs to ensure curriculum relevance and absorb our top graduates each year.",
  },
  {
    name: "Rwanda Energy Group",
    sector: "Energy",
    desc: "Collaborates on our industrial electricity curriculum and provides apprenticeship opportunities for final-year students.",
  },
  {
    name: "MTN Rwanda",
    sector: "Telecommunications",
    desc: "Supports our computer engineering and ICT programs through curriculum input, guest lectures, and graduate recruitment.",
  },
  {
    name: "Prime Holdings Ltd",
    sector: "Real Estate & Development",
    desc: "One of our earliest industry partners, absorbing graduates from multiple departments since our second cohort in 2019.",
  },
  {
    name: "Techno Brain Rwanda",
    sector: "Technology",
    desc: "Partners with our computer engineering department to deliver software-focused modules and internship placements.",
  },
];

const academicPartners = [
  {
    name: "Beijing Forever Technology Co., Ltd.",
    country: "China",
    desc: "Our founding institution and primary academic partner — contributing curriculum frameworks, faculty exchanges, and quality assurance expertise.",
  },
  {
    name: "Rwanda TVET Board",
    country: "Rwanda",
    desc: "The national body that accredits our programs and ensures alignment with Rwanda's national skills development agenda.",
  },
  {
    name: "Integrated Polytechnic Regional Centre (IPRC) Kigali",
    country: "Rwanda",
    desc: "Academic collaboration on shared curriculum standards and student exchange opportunities.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        {/* Hero */}
        <PageHeroBanner
          label="Partnerships"
          title="Our Partners"
          subCopy="We work with Rwanda's leading employers and institutions to ensure every graduate steps into a real career on day one."
          breadcrumb={breadcrumb}
          backgroundImage="/images/image2.png"
        />

        {/* Intro */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="max-w-3xl mb-16">
              <FadeInBlur delay={0}>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                  Why Partnerships Matter
                </span>
              </FadeInBlur>
              <AnimatedText
                text="Connected to Industry from Day One"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
              <FadeInBlur delay={350}>
                <p className="text-base lg:text-lg text-gray-500 mt-4 leading-relaxed">
                  Our partnerships aren't just logos on a page — they shape what we teach, how we teach it, and where our graduates go. Every program at Forever Tvet Institute is built in close collaboration with the employers who hire our students.
                </p>
              </FadeInBlur>
            </div>

            {/* Industry Partners */}
            <div className="mb-20">
              <FadeInBlur delay={0}>
                <h3 className="font-heading font-bold text-2xl text-body mb-8 pb-4 border-b border-gray-100">
                  Industry Partners
                </h3>
              </FadeInBlur>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {industryPartners.map((partner, i) => (
                  <FadeInBlur key={partner.name} delay={i * 80}>
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow duration-200 h-full flex flex-col">
                      <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-3">
                        {partner.sector}
                      </span>
                      <h4 className="font-heading font-bold text-lg text-body mb-2">{partner.name}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed flex-1">{partner.desc}</p>
                    </div>
                  </FadeInBlur>
                ))}
              </div>
            </div>

            {/* Academic Partners */}
            <div>
              <FadeInBlur delay={0}>
                <h3 className="font-heading font-bold text-2xl text-body mb-8 pb-4 border-b border-gray-100">
                  Academic & Institutional Partners
                </h3>
              </FadeInBlur>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {academicPartners.map((partner, i) => (
                  <FadeInBlur key={partner.name} delay={i * 80}>
                    <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 hover:shadow-md transition-shadow duration-200 h-full flex flex-col">
                      <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-3">
                        {partner.country}
                      </span>
                      <h4 className="font-heading font-bold text-lg text-body mb-2">{partner.name}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed flex-1">{partner.desc}</p>
                    </div>
                  </FadeInBlur>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-primary-dark py-14">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
              {[
                { value: "30+", label: "Industry Partners" },
                { value: "3", label: "Academic Partners" },
                { value: "94%", label: "Graduate Employment Rate" },
                { value: "2019", label: "First Partnership Signed" },
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

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-2xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <AnimatedText
              text="Become a Partner"
              as="h2"
              className="font-heading font-bold text-2xl lg:text-3xl text-body leading-tight mb-3"
              baseDelay={0}
              stagger={60}
            />
            <FadeInBlur delay={300}>
              <p className="text-base text-gray-500 leading-relaxed mb-8">
                Interested in partnering with Forever Tvet Institute? We welcome new industry and academic collaborations that benefit our students and Rwanda's workforce.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
              >
                Get in Touch
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeInBlur>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
